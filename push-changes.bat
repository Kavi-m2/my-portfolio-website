@echo off
cd /d "%~dp0"

set GIT=C:\Program Files\Git\cmd\git.exe

if not exist "%GIT%" (
  echo Git not found at %GIT%
  pause
  exit /b 1
)

echo Checking repository status...
"%GIT%" status

echo.
set /p msg=Enter commit message: 

if "%msg%"=="" (
  echo Commit message cannot be empty.
  pause
  exit /b 1
)

echo.
echo Staging changes...
"%GIT%" add .

echo Creating commit...
"%GIT%" commit -m "%msg%"
if errorlevel 1 (
  echo.
  echo Commit was not created. There may be no changes to commit.
  pause
  exit /b 1
)

echo.
echo Pushing to GitHub...
"%GIT%" push

echo.
echo Done.
pause
