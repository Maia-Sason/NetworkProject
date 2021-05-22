
from django.urls import path

from .views import CheckAuthenticatedView, login_view, logout_view, register, GetSessionUser, GetCSRFToken, GetLatestPosts, ComposePost, Like, GetUserProfile, FollowUser, GetFollowingPosts

urlpatterns = [
    path('authenticated', CheckAuthenticatedView.as_view()),
    path('register', register.as_view()),
    path('login', login_view.as_view()),
    path('logout', logout_view.as_view()),
    path('user', GetSessionUser.as_view()),
    path('csrf_cookie', GetCSRFToken.as_view()),
    path('create', ComposePost.as_view()),
    path('create/<int:id>', ComposePost.as_view()),
    path('posts', GetLatestPosts.as_view()),
    path('posts/<int:id>', GetLatestPosts.as_view()),
    path('like/<int:id>', Like.as_view()),
    path('profile/<int:id>', GetUserProfile.as_view()),
    path('profile/<str:id>/<int:page>', GetUserProfile.as_view()),
    path('follow/<int:id>', FollowUser.as_view()),
    path('following', GetFollowingPosts.as_view()),
    path('following/<int:page>', GetFollowingPosts.as_view())
]
