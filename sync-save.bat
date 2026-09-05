@echo off
chcp 65001 >nul
title Sync: save + push
cd /d "%~dp0"

echo ============================================
echo   Buddha-Chakravartin - Save and Sync
echo ============================================
echo.

git add -A
git diff --cached --quiet
if %errorlevel%==0 (
    echo No changes to save.
) else (
    for /f "tokens=1-3 delims=. " %%a in ("%date%") do set DS=%%a.%%b.%%c
    git commit -m "sync %DS% %time%"
    echo.
    git push origin main
    echo.
    echo Changes saved and synced to G:\OpenCodeProekts\buddha-chakravartin
)

echo.
echo ------------------------------------------------------------
git status -sb
echo ------------------------------------------------------------
echo.
pause