# Bogey Bobby

A 2D disc golf game built with [Phaser.io](https://phaser.io/).

## Development

For developing run ```npm i``` to install the proper node packages. The scripts to build in the development mode is ```npm run dev``` and to watch is ```npm run watch```. To run the watch and open a developer server run ```npm run start```. To build in production mode run ```npm run prod```. This project is currently using the latest long term support version of node (14.17.1).

This project contains the index.html file to load the js built by webpack from the source javascript located in /src/index.js and placed in /public/index.js. The webpack build uses the babel loader, style loader, sass loader, and file loader.
