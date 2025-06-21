# ✅ Добавляем поддержку медиафайлов
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path
from drf_spectacular.views import SpectacularAPIView, SpectacularRedocView, SpectacularSwaggerView

urlpatterns = [
    # 🛠 Админка
    path("admin/", admin.site.urls),
    # 📦 Все маршруты из приложения API
    path("api/", include("api.urls")),
    # 📄 Схема OpenAPI (JSON)
    path("api/schema/", SpectacularAPIView.as_view(), name="schema"),
    # 🌐 Swagger UI
    path(
        "api/docs/",
        SpectacularSwaggerView.as_view(url_name="schema"),
        name="swagger-ui",
    ),
    # 📘 ReDoc UI (по желанию)
    path("api/redoc/", SpectacularRedocView.as_view(url_name="schema"), name="redoc"),
]

# ✅ В режиме отладки Django будет раздавать файлы из MEDIA_ROOT
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
