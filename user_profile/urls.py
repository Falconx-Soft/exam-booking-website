from django.urls import path
from . import views

urlpatterns = [
    path('results/', views.user_profile, name="results"),
    path('requests/', views.requests, name="requests"),
]
