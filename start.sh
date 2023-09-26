#!/bin/bash

# Determine the script's directory and change to that directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

# Build the frontend
cd frontend
npm install --legacy-peer-deps
npm run build

# Check if the build was successful
if [ $? -eq 0 ]; then
  echo "Frontend build completed successfully."

  # Copy the build output to the backend directory and rename it to 'static'
  rm -rf ../backend/src/main/resources/static
  cp -r out ../backend/src/main/resources/static

  echo "Copied frontend build to backend."

  # Change back to the root directory
  cd ..

  # Build and start the Docker containers using Docker Compose
  docker-compose up --build
else
  echo "Frontend build failed. Aborting."
fi
