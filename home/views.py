from django.shortcuts import render,redirect
from .models import info
import datetime
from django.http import JsonResponse

from django.contrib.auth.decorators import login_required
# Create your views here.

def format_date(date):
    temp = date.split("-")
    new_date = temp[1]+"/"+temp[2]+"/"+temp[0]
    return new_date


def add_date(request):
    test_sponsor = request.GET.get("test_sponsor")
    test_program = request.GET.get("test_program")
    test_test = request.GET.get("test_test")
    address = request.GET.get("address")
    start_date = request.GET.get("start_date")
    end_date = request.GET.get("end_date")

    info_obj = info.objects.create(
                                user = request.user,
                                test_sponsor=test_sponsor,
                                test_program=test_program,
                                test_test = test_test,
                                address = address,
                                start_date = format_date(start_date),
                                end_date = format_date(end_date)
                            )
    info_obj.save()
    return JsonResponse({
            'status':"Success",
            })


@login_required(login_url='login')
def home(request):
    if request.method == "POST":
        address = request.POST.get('address')
        start_date = request.POST.get('start_date')
        end_date = request.POST.get('end_date')

        date_time_obj_1 = datetime.datetime.strptime(start_date, '%Y-%m-%d')
        date_time_obj_2 = datetime.datetime.strptime(end_date, '%Y-%m-%d')

        difference = date_time_obj_2 - date_time_obj_1

        if difference.days > 14:
            context = {
                'title': 'home',
                'min_date': str(datetime.date.today() + datetime.timedelta(days=1)),
                'date_msg': 'Date range exceed.'
            }

            return render(request,'home/home.html',context)

        context = {
            'title': 'Info',
            'address': address,
            'start_date': start_date,
            'end_date': end_date,
        }
        return render(request,'home/testCenter.html',context)

    context = {
        'title': 'home',
        'min_date': str(datetime.date.today() + datetime.timedelta(days=1))
    }

    return render(request,'home/home.html',context)
