from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from .models import Account as User
from .forms import CutomUserCreationForm

# Create your views here.

def user_login(request):

    if request.user.is_authenticated:
        return redirect('home')

    context = {
        'title': 'login'
    }
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']

        try:
            user = User.objects.get(email=email)
            user = authenticate(request, username=email, password=password) # check password

            if user is not None:
                login(request, user)
                return redirect('home')
        except Exception as e:
            print(e,"<----- Error message")
            context = {
                'msg': e,
                'title': 'login'
            }
    return render(request,'authentication/login.html',context)


def sign_up(request):
    if request.method == 'POST':
        try:
            email = request.POST['email']
            password = request.POST['password']
            user_obj = User.objects.create_user(email=email, password=password)
            user_obj.save()
            return redirect('login')
        except:
            context = {
                'msg': 'Email is already in use',
            }
            return render(request,'authentication/sign-up.html', context)
    context = {}
    return render(request,'authentication/sign-up.html', context)

def user_logout(request):

    logout(request)
    return redirect('login')
