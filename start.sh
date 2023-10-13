#!/bin/bash

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$SCRIPT_DIR"

cd frontend
npm install --legacy-peer-deps
npm run build

if [ $? -eq 0 ]; then
  echo "Frontend build completed successfully."

  rm -rf ../backend/src/main/resources/static
  cp -r out ../backend/src/main/resources/static

  echo "Copied frontend build to backend."

  cd ..

  docker-compose up --build
else
  echo "Frontend build failed. Aborting."
fi
