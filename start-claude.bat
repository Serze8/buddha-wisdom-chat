@echo off
echo ============================================
echo   Claude Code via local FCC OpenRouter proxy
echo ============================================

rem Check FCC proxy is up on :8082
netstat -ano | findstr ":8082" | findstr "LISTENING" >nul 2>nul
if errorlevel 1 (
    echo [WARN] FCC proxy is NOT running on :8082.
    echo        Start it first:  D:\buda\free-claude-code\fcc-server.bat
    echo        (also runs automatically on Windows startup)
)

set ANTHROPIC_BASE_URL=http://localhost:8082
set ANTHROPIC_AUTH_TOKEN=freecc

cd /d "%~dp0"
claude
