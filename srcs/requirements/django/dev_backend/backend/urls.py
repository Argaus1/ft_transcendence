from . import views
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ItemViewSet, register, login, check_ethereum_connection

router = DefaultRouter()
router.register(r'items', ItemViewSet)

urlpatterns = [
    path('', views.index),  # Serve the SPA for the root
    path('register', views.index),  # Serve the SPA for register
    path('api/register/', register, name='register'),
    path('api/login/', login, name='login'),
    path('login', views.index),
    path('games', views.index),
    path('pong', views.index),
    path('btest', views.index),
    path('check-ethereum-connection/', check_ethereum_connection, name='check_ethereum_connection'),
    # Add more routes here as necessary
]