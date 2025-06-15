from rest_framework import viewsets, generics, status
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib.auth.models import User

from .models import Product, CartItem, Cart, Order, OrderItem
from .serializers import (
    ProductSerializer,
    CartItemSerializer,
    CartSerializer,
    OrderSerializer,
    CustomTokenObtainPairSerializer,
)


# 🔹 Продукты
class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.filter(deleted_at__isnull=True)
    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticated]


# 🔹 Элементы корзины
class CartItemViewSet(viewsets.ModelViewSet):
    serializer_class = CartItemSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return CartItem.objects.filter(cart__user=self.request.user, deleted_at__isnull=True)

    def perform_create(self, serializer):
        cart, _ = Cart.objects.get_or_create(user=self.request.user)
        serializer.save(cart=cart)


# 🔹 Корзины
class CartViewSet(viewsets.ModelViewSet):
    queryset = Cart.objects.filter(deleted_at__isnull=True)
    serializer_class = CartSerializer
    permission_classes = [IsAuthenticated]


# 🔐 Регистрация пользователя
class RegisterView(generics.CreateAPIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        username = request.data.get("username")
        email = request.data.get("email")
        password = request.data.get("password")

        if User.objects.filter(username=username).exists():
            return Response({"error": "User already exists"}, status=400)

        user = User.objects.create_user(username=username, email=email, password=password)
        return Response({"message": "User created"}, status=201)


# 🔐 Получение JWT токена
class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer


# 📦 Заказы
class OrderViewSet(viewsets.ModelViewSet):
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Order.objects.filter(user=self.request.user)


# ✅ Оформление заказа
class CreateOrderView(generics.CreateAPIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        user = request.user
        cart = Cart.objects.get(user=user)
        cart_items = cart.items.all()

        if not cart_items:
            return Response({"error": "Cart is empty"}, status=400)

        order = Order.objects.create(user=user)

        for item in cart_items:
            OrderItem.objects.create(
                order=order,
                product=item.product,
                quantity=item.quantity,
                price_at_purchase=item.product.price
            )

        cart.items.all().delete()
        return Response({"message": "Order created", "order_id": order.id}, status=201)


# ✅ Получение корзины текущего пользователя
class MyCartView(generics.RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = CartSerializer

    def get_object(self):
        cart, _ = Cart.objects.get_or_create(user=self.request.user)
        return cart
