FROM python:3.11-slim

# Set the working directory
WORKDIR /app

# Copy the requirements.txt file
COPY /dev_backend/requirements.txt .

# Install Node.js and npm
RUN apt-get update && apt-get install -y nodejs npm

# Upgrade pip and install Python dependencies
RUN pip install --upgrade pip && pip install -r requirements.txt

# Install Node.js dependencies
RUN npm install dotenv ethers hardhat @nomiclabs/hardhat-waffle

# Remove the requirements.txt file
RUN rm -rf ./requirements.txt

# Copy the rest of the application code
COPY dev_backend/ .

# Expose the application port
EXPOSE 8000

# Run the Django application
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]