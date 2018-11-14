#!/bin/bash

set -e -x
# - -euxc
# - |

export TERM=screen-256color
export ANDROID_HOME="$PWD/android-sdk-linux"
cp -R npm-resource-container/licenses $ANDROID_HOME/
npm-resource-container/android/gradlew --project-dir=npm-resource-container/android assembleDebug --stacktrace
ls -l npm-resource-container/android/app/build/outputs/*
cp npm-resource-container/android/app/build/outputs/apk/app-debug.apk build-output/.
