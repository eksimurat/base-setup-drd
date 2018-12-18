from django.db import models

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=20)
    email = models.EmailField()
    message = models.CharField(max_length=300)
    created_at = models.DateTimeField(auto_now_add=True)