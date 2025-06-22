from django.contrib.auth.models import User
from django.db import models
from django.db.models import QuerySet
from django.utils import timezone


class SoftDeleteManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(deleted_at__isnull=True)


# Abstract base model with soft delete and timestamps
class BaseModel(models.Model):
    created_at = models.DateTimeField(default=timezone.now)
    updated_at = models.DateTimeField(auto_now=True)
    deleted_at = models.DateTimeField(null=True, blank=True)

    objects = SoftDeleteManager()  # default manager (non-deleted)
    all_objects = models.Manager()  # includes deleted

    class Meta:
        abstract = True

    def delete(self, using=None, keep_parents=False):
        self.deleted_at = timezone.now()
        self.save()

    def restore(self):
        self.deleted_at = None
        self.save()


class Product(BaseModel):
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=8, decimal_places=2)
    image = models.ImageField(upload_to="products/", null=True, blank=True)
    category = models.CharField(max_length=100, blank=True, null=True)
    stock = models.PositiveIntegerField(default=0)
    sku = models.CharField(max_length=50, unique=True, blank=True, null=True)

    def __str__(self):
        return self.name


class Cart(BaseModel):
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    def __str__(self):
        return f"Cart of {self.user.username}"

    @property
    def cart_items(self) -> "QuerySet[CartItem]":
        return self.items.all()

    @property
    def total_price(self):
        return sum(item.total_price for item in self.cart_items.select_related("product").all())


class CartItem(BaseModel):
    cart = models.ForeignKey(Cart, related_name="items", on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)

    class Meta:
        unique_together = ("cart", "product")

    def __str__(self):
        return f"{self.quantity} x {self.product.name}"

    @property
    def total_price(self):
        return self.product.price * self.quantity


class Order(BaseModel):
    STATUS_CHOICES = [
        ("pending", "Pending"),
        ("paid", "Paid"),
        ("shipped", "Shipped"),
        ("cancelled", "Cancelled"),
    ]

    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="orders")
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default="pending")
    shipping_address = models.TextField(blank=True, null=True)
    billing_address = models.TextField(blank=True, null=True)
    payment_method = models.CharField(max_length=50, blank=True, null=True)
    total_amount = models.DecimalField(max_digits=10, decimal_places=2, default=0)

    def __str__(self):
        return f"Order #{self.pk} by {self.user.username}"

    @property
    def order_items(self) -> "QuerySet[OrderItem]":
        return self.items.all()

    @property
    def total_price(self):
        return sum(item.total_price for item in self.order_items.select_related("product").all())


class OrderItem(BaseModel):
    order = models.ForeignKey(Order, related_name="items", on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    price_at_purchase = models.DecimalField(max_digits=10, decimal_places=2)

    class Meta:
        unique_together = ("order", "product")

    def __str__(self):
        return f"{self.quantity} x {self.product.name} (Order #{self.order.id})"

    @property
    def total_price(self):
        return self.price_at_purchase * self.quantity
