#!/usr/bin/env bash

NAME=$1
name=$(echo $1 | tr '[:upper:]' '[:lower:]')
VERSION=$2
PROD='./_prod'
SOURCE='.'

rm -rf ${PROD}
mkdir -p ${PROD}
cp ${SOURCE}/README.md ${PROD}/README.md
cp ${SOURCE}/LICENSE.md ${PROD}/LICENSE.md
cp ${SOURCE}/main.js ${PROD}/main.js
cp -r ${SOURCE}/src ${PROD}/src


# -- oOo --
