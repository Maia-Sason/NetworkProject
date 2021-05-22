import json

from django.contrib.auth import authenticate, login, logout
from django.db import IntegrityError
from django.core import serializers
from django.core.paginator import Paginator
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from django.shortcuts import render
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt, ensure_csrf_cookie

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
                return Response({ 'success': 'User logged in'})
            else:
                return Response({
                    "error": "Invalid username and/or password."
                })
        except:
            Response({'error': 'Problem occured while logging in.'})


class GetSessionUser(APIView):
    permission_classes = (permissions.AllowAny, )

    def get(self, request, format=None):
        
        user = self.request.user
        try:
            
            likes = Likes.objects.filter(liker=user).all().values_list('post', flat=True).order_by('post')
            likes = list(likes)
            print(likes)

            json_data = {
                'id': user.id,
                'username': user.username,
                'email' : user.email,
                'likes' : likes
            }

            return JsonResponse(json_data, content_type='application/json; charset=UTF-8', safe=False)
        except:
            return Response({"error": "Error retrieving user data."})
        

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
        try:
            username = data["username"]
            email = data["email"]

            
            password = data["password"]
            confirmation = data["confirmation"]
        except:
            {"error": "You are missing keys such as 'email', 'username', 'password' or 'confirmation'."}
        
        try:
            # Ensure password matches confirmation
            if password != confirmation:
                print(f"{password} + {confirmation}")
                print(email)
                print(data)
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
        except:
            return Response({
                "error": "Missing information."
            })


class RetrieveNotifications(APIView):
    """Retrieve notifications"""
    def get(self, request, format=None):
        try:
            notifications = Notifications.objects.filter(targetUser=request.user)
            notifications = notifications.order_by("-timestamp").all()
            data = [notification.serialize() for notification in notifications]

            return JsonResponse(data, content_type='application/json; charset=UTF-8', safe=False)
        except: 
            return Response({"error": "Error retrieving notifications for user."})

    def put(self, request, format=None, *args, **kwargs):
        id = self.kwargs.get('id')
        try:
            notification = Notifications.objects.filter(targetUser=request.user, id=id)

            notification.update(read=True)
        except:
            return Response({
                "error": "Could not update notification, are you sure it's yours?"
            })
    
    def post(self, request, format=None, *args, **kwargs):
        pass


class ComposePost(APIView):
    """ Post a new post """
    def post(self, request, format=None):
        
        try:
            data = self.request.data
            content = data["content"]
            try:
                post = Posts(creator=request.user, content=content)
                post.save()

                data = post.serialize()
                print(data)
                
                return JsonResponse(data, content_type='application/json; charset=UTF-8', safe=False)
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
                return Response({"isLiked": "liked"})
            else:
                # Delete the post.
                like_entry.delete()
                return Response({"isLiked": "unliked"})
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
        data = [post.serialize() for post in posts]

        json_data = {}
        json_data = PaginationPosts(data, data_id)

        return JsonResponse(json_data, content_type='application/json; charset=UTF-8', safe=False)


class GetFollowingPosts(APIView):
    """ Latest posts logged in user follows"""
    #  https://docs.djangoproject.com/en/3.0/topics/pagination/

    def get(self, request, format=None, *args, **kwargs):
        """ filter by user == user follow."""
        page_id = self.kwargs.get('page')
        
        following = Follow.objects.filter(followerUser=request.user).all()
        
        users_following = []
        try:
            for user_following in following:
                user = User.objects.get(id=user_following.id)
                users_following.append(user)

            posts = Posts.objects.filter(creator__in=users_following)
            posts = posts.order_by("-timestamp")

            data = [post.serialize() for post in posts]

            json_data = {}
            json_data = PaginationPosts(data, page_id)

            return JsonResponse(json_data, content_type='application/json; charset=UTF-8', safe=False)
        except:
            return Response({
                "error": "Error retrieving following information."
            })



class FollowUser(APIView):
    """ Follow/unfollow users """
    def put(self, request, format=None, *args, **kwargs):
        data_id = self.kwargs.get('id')

        target = User.objects.filter(id=data_id).first()

        if target == request.user:
            return Response({"error": "tried following yourself."})

        following = Follow.objects.filter(followerUser=request.user, targetUser=target)

        try:
            if not following:
                # Create a new entry to like a post
                following = Follow(followerUser=request.user, targetUser=target)
                following.save()
                return Response({"success": "User followed!"})
            else:
                # Delete the post.
                following.delete()
                return Response({"success": "User unfollowed!"})
        except:
            return Response({"error": "Error occured performing like operation."})


class GetUserProfile(APIView):
    """Get all info of user including posts, followers, following, username"""

    # No need for authenticated user with this route.
    permission_classes = (permissions.AllowAny, )

    def get(self, request, format=None, *args, **kwargs):
        data_id = self.kwargs.get('id')
        print(data_id)
        page_id = self.kwargs.get('page')
        try:
            profile = User.objects.filter(username=data_id).first()
            profile_json = {}
            profile_json = profile.serialize()
        except:
            return Response({ "error": "Something went wrong retrieving profile data."})
        
        try:
            posts = Posts.objects.filter(creator=profile).all()
            posts = posts.order_by("-timestamp").all()
            data = [post.serialize() for post in posts]

            json_data = {}
            json_data = PaginationPosts(data, page_id)

            profile_json["user_posts"] = json_data
        
            return JsonResponse(profile_json, content_type='application/json; charset=UTF-8', safe=False)
        except:
            return Response({"Error": "Something went wrong retrieving post data for profile."})


@method_decorator(ensure_csrf_cookie, name="dispatch")
class GetCSRFToken(APIView):
    permission_classes = (permissions.AllowAny, )

    def get(self, request, format=None):
        return Response({ 'success': 'CSRF cookie set.' })