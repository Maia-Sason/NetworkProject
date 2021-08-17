# NetworkProject

Purpose of this web application is to act as a social media website with features such as logging in, registering, liking, commenting (editing comments), following users, and recieving live notifications.

#### Live Demo:

https://social-network-post.herokuapp.com/

### Technologies used:

#### Back end:

* Django
* Django-Channels - (to serve real time notifications through websockets)
* Signals - (on save to db, will emit event to Django-Channels which then sends notification to user)
* Django REST framework - (to work on REST API for serving requests to client)
* PostgreSQL database

#### Front end:

* React
* React-Redux
* Redux-Thunk

