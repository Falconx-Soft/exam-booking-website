from django.urls import path
from . import views

urlpatterns = [
    path('', views.user_login, name="login"),
    path('sign-up/', views.sign_up, name="sign_up"),
]
