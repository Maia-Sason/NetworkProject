import json

from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.core import serializers
from django.core.paginator import Paginator
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.shortcuts import render
from django.urls import reverse

from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response

from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from django.utils.decorators import method_decorator

from .models import User, Posts, Follow, Notifications, Likes
from .util import PaginationPosts

@method_decorator(csrf_protect, name='dispatch')
class CheckAuthenticatedView(APIView):
    def get(self, request, format=None):
        isAuthenticated = User.is_authenticated
        
        if isAuthenticated:
            return Response({"isAuthenticated": "success" })
        else:
            return Response({"isAuthenticated": "error" })


@method_decorator(csrf_protect, name='dispatch')
class login_view(APIView):
    permission_classes = (permissions.AllowAny, )

    def post(self, request, format=None):
        data = self.request.data

        # Attempt to sign user in
        username = data["username"]
        password = data["password"]
        
        try:
            user = authenticate(request, username=username, password=password)

            # Check if authentication successful
            if user is not None:
                login(request, user)
                return Response({ 'success': 'User logged in', 'username': username})
            else:
                return Response({
                    "error": "Invalid username and/or password."
                })
        except:
            Response({'error': 'Problem occured while logging in.'})


# Will be CSRF protected when logged in
class logout_view(APIView):
    def post(self, request, format=None):
        try:
            logout(request)
            return Response({"success": "User successfully logged out."})
        except:
            return Response({"error": "Something went wrong when trying to log out."})


@method_decorator(csrf_protect, name='dispatch')
class register(APIView):
    permission_classes = (permissions.AllowAny, )
    def post(self, request, format=None):
        data = self.request.data
    
        username = data["username"]
        email = data["email"]

        # Ensure password matches confirmation
        password = data["password"]
        confirmation = data["confirmation"]

        if password != confirmation:
            return Response({
                "error": "Passwords must match."
            })

        # Attempt to create new user
        try:
            user = User.objects.create_user(username, email, password)
            user.save()
            return Response({
                "success": "User registered."
            })
        except IntegrityError:
            return Response({
                "error": "Username already taken."
            })
        login(request, user)


class ComposePost(APIView):
    """ Post a new post """
    def post(self, request, format=None):
        
            
        try:
            data = self.request.data
            content = data["content"]
            try:
                post = Posts(creator=request.user, content=content)
                post.save()
                return Response({"success": "Posted!"})
            except:
                return Response({"error": "Error occured trying to save post!"})
        except: 
            return Response({"error": "Error with key, requested 'content'"})
        
    def put(self, request, format=None, *args, **kwargs):
        data = self.request.data
        data_id = self.kwargs.get('id')
        data_content = data["content"]
        
        try:
            post = Posts.objects.filter(creator=request.user, id=data_id)
            print(post)
            if not post:
                return Response({"error": "Error, tried editing a post that doesn't belong to you."})
            else:
                try:
                    post.update(content=data_content)
                    return Response({"success": "Post updated!"})
                except:
                    return Response({"error": "Something went wrong saving your update."})
        except:
            return Response({"error": "Something went wrong editing your post."})

    def delete(self, request, format=None, *args, **kwargs):
        data = self.request.data
        data_id = self.kwargs.get('id')

        try:
            post = Posts.objects.filter(creator=request.user, id=data_id)
            print(post)
            if not post:
                return Response({"error": "Error, tried deleting a post that doesn't belong to you."})
            else:
                try:
                    post.delete()
                    return Response({"success": "Post deleted!"})
                except:
                    return Response({"error": "Something went wrong saving your delete."})
        except:
            return Response({"error": "Something went wrong deleting your post."})


class Like(APIView):
    """ Like/unlike posts with ID """
    def put(self, request, format=None, *args, **kwargs):
        data_id = self.kwargs.get('id')

        post = Posts.objects.filter(id=data_id).first()

        like_entry = Likes.objects.filter(liker=request.user, post=post)

        try:
            if not like_entry:
                # Create a new entry to like a post
                liked = Likes(liker=request.user, post=post)
                liked.save()
                return Response({"success": "Post liked!"})
            else:
                # Delete the post.
                like_entry.delete()
                return Response({"success": "Post unliked!"})
        except:
            return Response({"error": "Error occured performing like operation."})
        
            

class GetLatestPosts(APIView):
    """ Latest posts of all or get latest post of all by page number in Django pagination"""
    #  https://docs.djangoproject.com/en/3.0/topics/pagination/
    
    # No need for authenticated user with this route.
    permission_classes = (permissions.AllowAny, )

    # Optional variable id.
    def get(self, request, format=None, *args, **kwargs):
        data_id = self.kwargs.get('id')

        # Query all posts
        posts = Posts.objects.all()
        # order posts by timestamp
        posts = posts.order_by("-timestamp").all()
        data = [post.serialize() for post in Posts.objects.all()]

        # If ID is None: query all latest posts
        if data_id is None:
            
            json_data = {}
            json_data = PaginationPosts(data, data_id)

            # Return list of object posts
            return JsonResponse(json_data, content_type='application/json; charset=UTF-8', safe=False)
           
        # Else, query posts from user id only.
        else:
            print(data_id)

            json_data = {}
            json_data = PaginationPosts(data, data_id)

            return JsonResponse(json_data, content_type='application/json; charset=UTF-8', safe=False)

        return Response({ 'success': 'looking at posts' })

class GetFollowingPosts():
    """ Latest posts logged in user follows"""
    #  https://docs.djangoproject.com/en/3.0/topics/pagination/

    def get(self, request, format=None):
        """ filter by user == user follow."""

class GetUserPosts():
    """ Latest posts of user with django pagination"""
    #  https://docs.djangoproject.com/en/3.0/topics/pagination/



@method_decorator(ensure_csrf_cookie, name="dispatch")
class GetCSRFToken(APIView):
    permission_classes = (permissions.AllowAny, )

    def get(self, request, format=None):
        return Response({ 'success': 'CSRF cookie set.' })