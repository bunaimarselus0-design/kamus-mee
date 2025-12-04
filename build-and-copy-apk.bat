@echo off
setlocal enabledelayedexpansion

echo ========================================
echo   Build APK Kamus Mee - Otomatis
echo ========================================
echo.
echo Script ini akan:
echo 1. Build web app (npm run build)
echo 2. Sync ke Android (npx cap sync)
echo 3. Build signed APK (gradlew assembleRelease)
echo 4. Copy APK ke root folder
echo.
echo Estimasi waktu: 3-5 menit
echo.
pause

echo.
echo [1/4] Building web app...
echo ----------------------------------------
call npm run build
if errorlevel 1 (
    echo.
    echo ERROR: npm build failed!
    echo Pastikan dependencies sudah terinstall (npm install)
    echo.
    pause
    exit /b 1
)
echo ✅ Web app build success!
echo.

echo [2/4] Syncing to Android...
echo ----------------------------------------
call npx cap sync android
if errorlevel 1 (
    echo.
    echo ERROR: Capacitor sync failed!
    echo Pastikan Capacitor sudah terinstall
    echo.
    pause
    exit /b 1
)
echo ✅ Sync to Android success!
echo.

echo [3/4] Building signed APK...
echo ----------------------------------------
echo This may take 2-3 minutes...
cd android
call gradlew assembleRelease
set BUILD_ERROR=!errorlevel!
cd ..
if !BUILD_ERROR! neq 0 (
    echo.
    echo ERROR: Gradle build failed!
    echo Pastikan:
    echo - JDK sudah terinstall
    echo - Keystore sudah dibuat (android\kamus-mee.keystore)
    echo - key.properties sudah dikonfigurasi
    echo.
    pause
    exit /b 1
)
echo ✅ APK build success!
echo.

echo [4/4] Copying APK to root folder...
echo ----------------------------------------
if exist "Kamus-Mee-v1.0.apk" (
    echo Deleting old APK...
    del "Kamus-Mee-v1.0.apk"
)
copy "android\app\build\outputs\apk\release\app-release.apk" "Kamus-Mee-v1.0.apk" >nul
if errorlevel 1 (
    echo.
    echo ERROR: Failed to copy APK!
    echo Source: android\app\build\outputs\apk\release\app-release.apk
    echo Destination: Kamus-Mee-v1.0.apk
    echo.
    pause
    exit /b 1
)
echo ✅ APK copied successfully!
echo.

echo ========================================
echo   BUILD SUCCESS! 🎉
echo ========================================
echo.
echo APK Location: Kamus-Mee-v1.0.apk
echo.
for %%A in ("Kamus-Mee-v1.0.apk") do (
    set SIZE=%%~zA
    set /a SIZE_MB=!SIZE! / 1024 / 1024
    echo APK Size: !SIZE_MB! MB ^(%%~zA bytes^)
)
echo.
echo ✅ APK siap dibagikan!
echo.
echo Next steps:
echo 1. Test APK di device Android
echo 2. Bagikan via WhatsApp/Telegram/Google Drive
echo 3. Lihat CARA_INSTALL_APK.md untuk panduan lengkap
echo 4. Lihat MULAI_BAGIKAN_SEKARANG.md untuk quick start
echo.
pause
