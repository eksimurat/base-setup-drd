from django.shortcuts import render

# Create your views here.
from main_app.models import User
from main_app.serializers import UserSerializer
from rest_framework import generics, permissions

class UserListCreate(generics.ListCreateAPIView):
    queryset = User.objects.all()
    permission_classes = [permissions.AllowAny, ]
    serializer_class = UserSerializer