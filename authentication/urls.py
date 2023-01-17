from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.user_login, name="login"),
    path('sign-up/', views.sign_up, name="sign_up"),
    path('logout/', views.user_logout, name="logout"),


    # ******************************* subscribe

    path('subscribe/', views.subscribe, name="subscribe"),

    path('success/', views.success, name="success"),
    path('cancel/', views.cancel, name="cancel"),

    path('stripe-webhook/', views.stripe_webhook, name="stripe_webhook"),

    path('payhip-webhook/', views.payhip_webhook, name="payhip_webhook"),
]
