from django.shortcuts import render

# Create your views here.
from django.contrib.auth.models import User
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt  # Only for development; make sure to handle CSRF tokens in production
def register_view(request):
    if request.method == 'POST':
        # Parse the request body
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')
        action = data.get('action')

        if action == 'register':
            # Check if a user with the same email already exists
            if User.objects.filter(email=email).exists():
                return JsonResponse({'message': 'User with this email already exists!'}, status=400)

            # Create a new user
            user = User.objects.create_user(username=email, email=email)
            user.set_password(password)  # Hash and set the password
            user.save()

            # Return a success response
            return JsonResponse({'message': 'User registered successfully!'}, status=201)

        return JsonResponse({'message': 'Invalid action'}, status=400)

    return JsonResponse({'message': 'Invalid request method'}, status=405)