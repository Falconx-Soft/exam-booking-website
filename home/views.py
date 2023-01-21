from django.shortcuts import render,redirect
from .models import info, check_box, radio_btn
from authentication.models import Account , MyAccountManager
import datetime
from django.http import JsonResponse
from django.conf import settings
from django.core.mail import send_mail, EmailMultiAlternatives
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.http import HttpResponse
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


@login_required(login_url='sign_up')
def home(request):
    if request.method == "POST":
        address = request.POST.get('address')
        start_date = request.POST.get('start_date')
        end_date = request.POST.get('end_date')
        # print("start date" , start_date)
        # print("end date", end_date)
        date_time_obj_1 = datetime.datetime.strptime(start_date,'%Y-%m-%d')
        date_time_obj_2 = datetime.datetime.strptime(end_date,'%Y-%m-%d')
        
        difference = date_time_obj_2 - date_time_obj_1
        # print("email",request.user.email)
        # print("paid",request.user.paid)


        if request.user.paid == False: 

            if difference.days > 2:
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

# def results(request):
#     return render(request, 'userPrfile/results.html')

def landingPage(request):
    context = {
        'title': 'home',
        'min_date': str(datetime.date.today() + datetime.timedelta(days=1))
    }
    return render(request,'home/landingPage.html',context)

def emailSend(request):
    
    subject = 'Seats are available'
    message = ['Exam Name','Exam details in 1st line']
    message = '<b> Exam Name <b>'+ 'Exam details in 1st line'+ '\n'+ 'Center Name' + '\n' + 'Date 1'+ '\n' + 'Date 2' + '\n' + 'Visit this link to book this seat:'


    email_from = settings.EMAIL_HOST_USER
    recipient_list = ['email']
    send_mail(subject, message, email_from, recipient_list)
    return HttpResponse('email send')
#     send_mail(
#     'try email',
#     'That’s your message body',
#     'cedemi8519@themesw.com',
#     ['cedemi8519@themesw.com'],
#     fail_silently=False,
#     )
#     return render(request,'home/email.html')

        