#!/bin/bash

for file in assets/scss/layouts/*.scss; do
  base_name=$(basename "$file" .scss)
  css_file="assets/css/layouts/${base_name}.css"
  sass "$file" "$css_file"
done
