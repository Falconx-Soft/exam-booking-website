from django.urls import path
from . import views

urlpatterns = [
    path('home/', views.home, name="home"),
    path('add_date/', views.add_date, name="add_date"),
]
