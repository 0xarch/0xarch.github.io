#!/bin/bash

git switch master

### themes
mkdir themes
cd themes
git clone https://github.com/fewu-swg/fewu-theme-next
cd fewu-theme-next
pnpm install
cd ../../

### build
pnpm fewu

### misc
touch public/.nojekyll
