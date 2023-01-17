from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from .models import Account as User
from django.conf import settings
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
import stripe
import json
stripe.api_key = settings.STRIPE_SECRET_KEY
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


def subscribe(request):
    YOUR_DOMAIN = "http://localhost:8000"
    checkout_session = stripe.checkout.Session.create(
            payment_method_types=['card'],
            line_items=[
                {
                    'price_data':{
                        'currency': 'usd',
                        'unit_amount':2500,
                        'product_data': {
                            'name': 'subscribe to exam',
                        },
                    },
                    'quantity': 1,
                },
            ],
            metadata={
                'user_id':request.user.id,
            },
            mode='payment',
            success_url=YOUR_DOMAIN + '/success/',
            cancel_url=YOUR_DOMAIN + '/cancel/',
        )
    return redirect(checkout_session.url)

def success(request):
    return render (request, 'authentication/success.html')
    # return JsonResponse({'success':True})

def cancel(request):
    return render (request, 'authentication/cancel.html')
    # return JsonResponse({'success':False})

@csrf_exempt
def stripe_webhook(request):
  payload = request.body
  sig_header = request.META['HTTP_STRIPE_SIGNATURE']
  event = None

  try:
    event = stripe.Webhook.construct_event(
        payload, sig_header, settings.STRIPE_WEBHOOK_SECRET
    )
  except ValueError as e:
    # Invalid payload
    return HttpResponse(status=400)
  except stripe.error.SignatureVerificationError as e:
    # Invalid signature
    return HttpResponse(status=400)

    # Handle the checkout.session.completed event
  if event['type'] == 'checkout.session.completed':
    # Retrieve the session. If you require line items in the response, you may include them by expanding line_items.
    session = stripe.checkout.Session.retrieve(
      event['data']['object']['id'],
      expand=['line_items'],
    )
    user_id = session['metadata']['user_id']
    user_obj = User.objects.get(id=user_id)
    user_obj.paid = True
    user_obj.save()

  # Passed signature verification
  return JsonResponse({'status':200})

@csrf_exempt
def payhip_webhook(request):
    print(request.body)
    json_data = json.loads(request.body)
    print(json_data,"********")
    print(json_data['email'],"<-----")
    email = json_data['email']
    user_obj = User.objects.get(email=email)
    user_obj.paid = True
    user_obj.save()
    return JsonResponse({'status':200})

