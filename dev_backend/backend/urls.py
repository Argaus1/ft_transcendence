from . import views
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ItemViewSet, index
from django.views.generic import TemplateView

router = DefaultRouter()
router.register(r'items', ItemViewSet)

urlpatterns = [
    path('', views.index),  # Serve the SPA for the root
    path('register', views.index),  # Serve the SPA for register
    # Add more routes here as necessary
]