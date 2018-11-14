#!/bin/bash

set -e -x


pushd mobile-repo
  npm install
popd

cp -R mobile-repo/* npm-resource-container/

ls -ltra npm-resource-container/node_modules

$PWD
