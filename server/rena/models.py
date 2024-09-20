from django.db import models

class Manager(models.Model):
    Firstname = models.CharField(max_length=255)
    Lastname = models.CharField(max_length=255)
    number = models.IntegerField()
    email = models.CharField(max_length=255)

# Create your models here.
