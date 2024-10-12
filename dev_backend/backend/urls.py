from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ItemViewSet, index
from django.views.generic import TemplateView

router = DefaultRouter()
router.register(r'items', ItemViewSet)

urlpatterns = [
	path('register/', TemplateView.as_view(template_name='register.html')),
    path('', index, name='index'),
]