from django.contrib import admin
from .models import Product, CartItem, Cart

# === Product Admin ===
@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'price', 'created_at', 'updated_at', 'is_deleted')
    list_filter = ('created_at', 'deleted_at')
    search_fields = ('name',)
    readonly_fields = ('created_at', 'updated_at')

    def get_queryset(self, request):
        # Показываем только не-soft-deleted товары
        return super().get_queryset(request).filter(deleted_at__isnull=True)

    def is_deleted(self, obj):
        return obj.deleted_at is not None
    is_deleted.boolean = True
    is_deleted.short_description = 'Deleted?'


# === CartItem Admin ===
@admin.register(CartItem)
class CartItemAdmin(admin.ModelAdmin):
    list_display = ('id', 'cart', 'product', 'quantity')
    list_filter = ('product',)
    search_fields = ('product__name',)

    # У CartItem нет поля deleted_at — показываем всё
    def get_queryset(self, request):
        return super().get_queryset(request)


# === Inline: CartItem внутри Cart ===
class CartItemInline(admin.TabularInline):
    model = CartItem
    extra = 0


# === Cart Admin ===
@admin.register(Cart)
class CartAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'created_at', 'updated_at')
    inlines = [CartItemInline]
    search_fields = ('user__username',)
    readonly_fields = ('created_at', 'updated_at')

    def get_queryset(self, request):
        # Показываем только не-soft-deleted корзины
        return super().get_queryset(request).filter(deleted_at__isnull=True)
