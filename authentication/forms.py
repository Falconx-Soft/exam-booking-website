from django.contrib.auth.forms import UserCreationForm
from .models import Account as User
from django.forms import ModelForm

class CutomUserCreationForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['email', 'password']