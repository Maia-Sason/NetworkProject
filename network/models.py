from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    def serialize(self):
        return {
            "id": self.id,
            "username": self.username,
            "followers": self.followers.count(),
            "following": self.following.count(),
        }

class Posts(models.Model):
    creator = models.ForeignKey("User", on_delete=models.CASCADE, related_name="posts")
    content = models.TextField(blank=False)
    timestamp = models.DateTimeField(auto_now_add=True)

    def serialize(self):
        return {
            "id": self.id,
            "creator": self.creator.username,
            "content": self.content,
            "timestamp": self.timestamp.strftime("posted on %b %d/%y @ %I %p"),
            "likes" : self.likes.count()
        }

class Likes(models.Model):
    liker = models.ForeignKey("User", on_delete=models.CASCADE, related_name="liking")
    post = models.ForeignKey("Posts", on_delete=models.CASCADE, related_name="likes")

    def serialize(self):
        return {
            "id" : self.id,
            "post" : self.post,
            "liker" : self.liker 
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
            "id": self.id,
            "target": self.targetUser,
            "content": self.content,
            "read": self.read
        }
    