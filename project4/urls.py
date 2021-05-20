from django.contrib import admin
from django.urls import include, path, re_path
from django.views.generic import TemplateView
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path("admin/", admin.site.urls),
    path("network/", include("network.urls")),
    path("realtime/", include("network_realtime.urls")),
    path("", TemplateView.as_view(template_name='index.html')),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]

# Catch all for react to take over
urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]
