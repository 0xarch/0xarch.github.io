#!/bin/bash

git switch master

### themes
mkdir -p themes
cd themes
ln -sf ../../fewu-swg/fewu-theme-next/ ./fewu-theme-next
cd fewu-theme-next
pnpm i
cd ../../

### build
pnpm fewu --server
