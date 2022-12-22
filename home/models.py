from django.db import models
from authentication.models import Account as User
# Create your models here.

class info(models.Model):
    user                        = models.ForeignKey(User, on_delete=models.CASCADE)
    test_sponsor                = models.CharField(max_length=50)
    test_program                = models.CharField(max_length=50)
    test_test                   = models.CharField(max_length=50)
    address                     = models.CharField(max_length=50)
    start_date                  = models.CharField(max_length=50)
    end_date                    = models.CharField(max_length=50)
    got_result                  = models.BooleanField(default=False)

    def __str__(self):
        return str(self.user.email)

class got_address(models.Model):
    info                        = models.ForeignKey(info, on_delete=models.CASCADE)
    address                     = models.CharField(max_length=500)

    def __str__(self):
        return str(self.address)

class got_date(models.Model):
    address                     = models.ForeignKey(got_address, on_delete=models.CASCADE)
    date                        = models.CharField(max_length=100)

    def __str__(self):
        return str(self.date)

class got_time(models.Model):
    date                        = models.ForeignKey(got_date, on_delete=models.CASCADE)
    time                        = models.CharField(max_length=100)

    def __str__(self):
        return str(self.time)