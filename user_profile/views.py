from django.shortcuts import render

from django.contrib.auth.decorators import login_required
from home.models import *
# Create your views here.

@login_required(login_url='login')
def user_profile(request):

    info_obj = info.objects.filter(user=request.user)
    
    got_address_obj = got_address.objects.all()
    got_date_obj = got_date.objects.all()
    got_time_obj = got_time.objects.all()

    context = {
        'title': 'profile',
        'info_obj': info_obj,
        'got_address_obj': got_address_obj,
        'got_date_obj': got_date_obj,
        'got_time_obj': got_time_obj
    }
    
    return render(request,'user_profile/profile.html',context)