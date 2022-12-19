from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('test_center', views.test_center, name='testCenter'),
    path('run_script/', views.run_script, name="run_script"),
]
