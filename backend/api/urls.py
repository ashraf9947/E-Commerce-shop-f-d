from django.urls import include, path
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenRefreshView

from .views import (
    CartItemViewSet,
    CartViewSet,
    CreateOrderView,
    CustomTokenObtainPairView,
    MyCartView,
    OrderViewSet,
    ProductViewSet,
    RegisterView,
)

#  Router для ViewSet
router = DefaultRouter()
router.register(r"products", ProductViewSet, basename="product")
router.register(r"cart-items", CartItemViewSet, basename="cartitem")
router.register(r"carts", CartViewSet, basename="cart")
router.register(r"orders", OrderViewSet, basename="order")

urlpatterns = [
    path("", include(router.urls)),
    # Аутентификация
    path("register/", RegisterView.as_view(), name="register"),
    path("token/", CustomTokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    # Оформление заказа
    path("checkout/", CreateOrderView.as_view(), name="checkout"),
    # Получение корзины текущего пользователя
    path("carts/me/", MyCartView.as_view(), name="my-cart"),
]
