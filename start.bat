@echo off
rem Determine the script's directory and change to that directory
set "SCRIPT_DIR=%~dp0"
cd /d "%SCRIPT_DIR%"

rem Build the frontend
cd frontend
npm install
npm run build

rem Check if the build was successful
if %errorlevel%==0 (
  echo Frontend build completed successfully.

  rem Copy the build output from frontend\out to backend\src\main\resources\static
  rmdir /s /q ..\backend\src\main\resources\static
  xcopy /e out ..\backend\src\main\resources\static

  echo Copied frontend build to backend.

  rem Change back to the root directory
  cd ..

  rem Build and start the Docker containers using Docker Compose
  docker-compose up --build
) else (
  echo Frontend build failed. Aborting.
)

