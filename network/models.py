from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    pass

class Posts(models.Model):
    creator = models.ForeignKey("User", on_delete=models.CASCADE, related_name="posts")
    content = models.TextField(blank=False)
    timestamp = models.DateTimeField(auto_now_add=True)
    likes = models.PositiveIntegerField(default=0)
    

class Follow(models.Model):
    targetUser = models.ForeignKey("User", on_delete=models.CASCADE, related_name="followers")
    followerUser = models.ForeignKey("User", on_delete=models.CASCADE, related_name="following")
    

class Notifications(models.Model):
    targetUser = models.ForeignKey("User", on_delete=models.CASCADE, related_name="notifications")
    content = models.TextField(blank=False)
    read = models.BooleanField(default=False)
    