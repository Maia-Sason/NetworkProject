from django.contrib import admin
from django.urls import include, path, re_path
from django.views.generic import TemplateView

urlpatterns = [
    path('api-auth/', include('rest_framework.urls')),
    path("admin/", admin.site.urls),
    path("network/", include("network.urls")),
    path("", TemplateView.as_view(template_name='index.html')),
]

# Catch all for react to take over
urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]
