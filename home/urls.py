from django.urls import path
from . import views

urlpatterns = [
    path('', views.landingPage, name="landingPage"),
    path('home/', views.home, name="home"),
    path('add_date/', views.add_date, name="add_date"),
   
    path('email/', views.emailSend, name="emailSend"),
    
]
