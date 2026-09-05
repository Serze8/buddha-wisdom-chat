@echo off
chcp 65001 >nul
title Sync: pull update
cd /d "%~dp0"

echo ============================================
echo   Buddha-Chakravartin - Pull Update
echo ============================================
echo.

git pull origin main
if errorlevel 1 (
    echo.
    echo Error! Maybe you have local uncommitted changes.
    echo Commit them first, then pull again.
) else (
    echo.
    echo Up to date with \\Vasys\d\buda\buddha-chakravartin
)

echo.
echo ------------------------------------------------------------
git status -sb
echo ------------------------------------------------------------
echo.
pause