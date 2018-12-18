from django.conf.urls import url
from . import views

urlpatterns = [
    url('api/user/', views.UserListCreate.as_view() ),
]