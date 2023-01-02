from django.shortcuts import render,redirect
from .models import info, check_box, radio_btn
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
    checkbox_value = request.GET.get("checkbox_value")
    radiobtn_value = request.GET.get("radiobtn_value")
    address = request.GET.get("address")
    start_date = request.GET.get("start_date")
    end_date = request.GET.get("end_date")

    print(test_test,"<--------------------")

    if test_test != "":
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
    else:
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
        if checkbox_value != "":
            list_value = checkbox_value.split('++')
            for i in list_value:
                try:
                    temp = i.split('--')
                    if temp[0] != "":
                        check_box_obj = check_box.objects.create(info=info_obj, value=temp[0])
                        check_box_obj.save()
                except:
                    if temp[0] != "":
                        check_box_obj = check_box.objects.create(info=info_obj, value=i)
                        check_box_obj.save()

        else:
            radiobtn_value_obj = radio_btn.objects.create(info=info_obj, value=radiobtn_value)
            radiobtn_value_obj.save()


    return JsonResponse({
            'status':"Success",
            })


@login_required(login_url='login')
def home(request):
    if request.method == "POST":
        address = request.POST.get('address')
        start_date = request.POST.get('start_date')
        end_date = request.POST.get('end_date')
        
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
