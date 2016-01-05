# create-template

This script is based on a December 2015 conversation with @substack. I needed (feel the frustration) to quit repeating `vim index.html, <!doctype>, blah, :wq` and create a programmatic way to get up and runnning. 

## hyperX and fs

Substack's `hyperX` is similar to JSX, but provided as a standards-compliant ES^ tagged template string function. Experimental, yes.

My example works with hyperscript and enventually any DOM builder with a hypersript-style API: h(tagName, attrs, children). No transpiler needed

Incantation > writes the file to current directory. 

## TODO

Build the npm module -g to build on the fly in any npm init __DIR


