
from django.urls import path

from .views import CheckAuthenticatedView, login_view, logout_view, register, GetCSRFToken, GetLatestPosts

urlpatterns = [
    path('authenticated', CheckAuthenticatedView.as_view()),
    path('register', register.as_view()),
    path('login', login_view.as_view()),
    path('logout', logout_view.as_view()),
    path('csrf_cookie', GetCSRFToken.as_view()),
    path('posts', GetLatestPosts.as_view()),
    path('posts/<int:id>', GetLatestPosts.as_view())
]
