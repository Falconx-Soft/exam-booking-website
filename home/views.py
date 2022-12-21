from django.shortcuts import render,redirect
from .models import info

from django.contrib.auth.decorators import login_required
# Create your views here.

def format_date(date):
    2022-12-21
    temp = date.split("-")
    new_date = temp[1]+"/"+temp[2]+"/"+temp[0]
    return new_date

@login_required(login_url='login')
def test_center(request):
    if request.method == "POST":
        test_sponsor = request.POST.get('test_sponsor')
        test_program = request.POST.get('test_program')
        test_test = request.POST.get('test_test')
        address = request.POST.get('address')
        start_date = request.POST.get('start-date')
        end_date = request.POST.get('end-date')

        #automation.delay(test_sponsor,test_program,test_test,address,format_date(start_date),format_date(end_date))

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

        return redirect('home')

    return render(request, 'home/testCenter.html')

@login_required(login_url='login')
def home(request):
    if request.method == "POST":
        test_sponsor = request.POST.get('test_sponsor')
        test_program = request.POST.get('test_program')
        test_test = request.POST.get('test_test')
        context = {
            'title': 'Info',
            'test_sponsor': test_sponsor,
            'test_program': test_program,
            'test_test': test_test,
        }
        return render(request,'home/testCenter.html',context)

    context = {
        'title': 'home'
    }

    return render(request,'home/home.html',context)
