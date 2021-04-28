from django.urls import path, re_path

from .consumers import RealtimeConsumer, ChatConsumer

ws_urlpatterns = [
    path('ws/realtime/', RealtimeConsumer.as_asgi()),
    re_path(r'ws/chat/(?P<room_name>\w+)/$', ChatConsumer.as_asgi()),
]