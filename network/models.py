from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    pass

class Posts(models.Model):
    creator = models.ForeignKey("User", on_delete=models.CASCADE, related_name="posts")
    content = models.TextField(blank=False)
    timestamp = models.DateTimeField(auto_now_add=True)
    likes = models.PositiveIntegerField(default=0)

    def serialize(self):
        return {
            "id": self.id,
            "creator": self.creator.username,
            "content": self.content,
            "timestamp": self.timestamp.strftime("posted on %b %d/%y @ %I %p")
        }

class Follow(models.Model):
    targetUser = models.ForeignKey("User", on_delete=models.CASCADE, related_name="followers")
    followerUser = models.ForeignKey("User", on_delete=models.CASCADE, related_name="following")
    
    def serialize(self):
        return {
            "id": self.id,
            "target": self.targetUser,
            "follower": self.followerUser
        }
    

class Notifications(models.Model):
    targetUser = models.ForeignKey("User", on_delete=models.CASCADE, related_name="notifications")
    content = models.TextField(blank=False)
    read = models.BooleanField(default=False)

    def serialize(self):
        return {
            "target": self.targetUser,
            "content": self.content,
            "read": self.read
        }
    