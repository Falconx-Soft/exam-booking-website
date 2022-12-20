from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.models import User
from .forms import CutomUserCreationForm

# Create your views here.

def user_login(request):
    context = {
        'title': 'login'
    }
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

        try:
            user = User.objects.get(username=username)
            user = authenticate(request, username=username, password=password) # check password

            if user is not None:
                login(request, user)
                return redirect('home')
        except Exception as e:
            context = {
                'msg': e,
                'title': 'login'
            }
    return render(request,'authentication/login.html',context)


def sign_up(request):
	msg = None
	form = CutomUserCreationForm
	if request.method == 'POST':
		form = CutomUserCreationForm(request.POST)
		if form.is_valid():
			form.save()
			return redirect('login')
	context = {'form':form, 'msg':msg}
	return render(request,'authentication/sign-up.html', context)
