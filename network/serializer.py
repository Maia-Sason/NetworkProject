from rest_framework import serializers
from models import Posts

class PostsSerializer(serializers.ModelSerializer):
    id serializers
    class Meta:
        model = Posts
        fields = '__all__'
        return {
            "id": self.id,
            "creator": self.creator,
            "content": self.content,
            "timestamp": self.timestamp.strftime("posted on %b/%d/%y @ %I %p")
        }