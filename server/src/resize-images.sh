#!/bin/bash

# iterate images and resize jpg or png files on directory ../public/uploads/
for f in ../public/uploads/*.jpg; do
    convert "$f" -resize 450x450 "$f" && echo "Resized $f"
done

for f in ../public/uploads/*png; do
    convert $f -resize 450x450 $f && echo "Resized $f"
done
