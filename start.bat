@echo off
title Dev Server - Buddha Chakravartin
where npm >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] npm not found in PATH
    pause
    exit /b 1
)
netstat -ano | findstr ":3000" >nul
if %errorlevel%==0 (
    echo [WARN] Port 3000 in use - killing old process
    for /f "tokens=5" %%a in ('netstat -ano ^| findstr ":3000"') do taskkill /PID %%a /F >nul 2>&1
    timeout /t 2 /nobreak >nul
)
start "Next Dev Server" /min cmd /k "cd /d D:\buda\buddha-chakravartin && npm run dev"
exit /b 0