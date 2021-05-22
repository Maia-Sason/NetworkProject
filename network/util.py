from django.core.paginator import Paginator

def PaginationPosts(data, data_id=None):
    """ Paginate results uniformaly with 2 different paths"""

    # Initiate paginator object with data from db and number of items/page
    p = Paginator(data, 10)

    if not data_id:
        # Path 1: if data_id is not given, return a json with all data.
        json_page_data = {
            "pages": p.num_pages,
            "total": p.count,
            "iterate": {}
        }

        for i in p.page_range:
            json_page_data["iterate"][str(i)] = (p.page(i).object_list)

        return json_page_data

    # Path 2: if data_id is given, return a json with only that page
    json_page_data = {
        "previous": p.page(data_id).has_previous(),
        "next": p.page(data_id).has_next(),
        "page": data_id,
        "posts": p.page(data_id).object_list,
        "max": p.num_pages
    }

    return json_page_data

def PushToFollower(data, content):
    """Push these notifications to followers"""
    # Use cases: if userA and userB follow userC, and userC posted
    # send notifications to userA and userB.
    
def PushToUser(data, content):
    """Push these notifications to targetUser/creator"""
    # Use cases: if userA follows userB, notify userB