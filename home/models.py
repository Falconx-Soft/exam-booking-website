from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class note(models.Model):
    user                        = models.ForeignKey(User, on_delete=models.CASCADE)
    test_sponsor                = models.CharField(max_length=50)
    test_program                = models.CharField(max_length=50)
    test_test                   = models.CharField(max_length=50)
    address                     = models.CharField(max_length=50)
    start_date                  = models.CharField(max_length=50)
    end_date                    = models.CharField(max_length=50)

    def __str__(self):
        return str(self.user.username)