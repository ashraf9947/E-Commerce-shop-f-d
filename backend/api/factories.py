import factory
from django.contrib.auth.models import User

from .models import Cart, CartItem, Order, OrderItem, Product


class UserFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = User

    username = factory.Faker("user_name")
    email = factory.Faker("email")


class ProductFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Product

    name = factory.Faker("sentence", nb_words=4)
    description = factory.Faker("paragraph")
    price = factory.Faker("pydecimal", left_digits=5, right_digits=2, positive=True)
    image = factory.Faker("file_name", extension="png")
    category = factory.Faker("word")


class CartFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Cart

    user = factory.SubFactory(UserFactory)


class CartItemFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = CartItem

    cart = factory.SubFactory(CartFactory)
    product = factory.SubFactory(ProductFactory)
    quantity = factory.Faker("pyint", min_value=1, max_value=10)


class OrderFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Order

    user = factory.SubFactory(UserFactory)
    shipping_address = factory.Faker("address")
    billing_address = factory.Faker("address")
    payment_method = factory.Faker("credit_card_provider")
    total_amount = factory.Faker("pydecimal", left_digits=5, right_digits=2, positive=True)


class OrderItemFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = OrderItem

    order = factory.SubFactory(OrderFactory)
    product = factory.SubFactory(ProductFactory)
    quantity = factory.Faker("pyint", min_value=1, max_value=10)
    price_at_purchase = factory.Faker("pydecimal", left_digits=5, right_digits=2, positive=True)
