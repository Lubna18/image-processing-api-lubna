# Image Processing API
Udacity Nanodegree
Project 1
(January 2023)

# Author
Lubna Helaly

# Description
A simple placeholder API, the first allows you to place images into your frontend with the size set via URL parameters for rapid prototyping. The second use case is as a library to serve properly scaled versions of your images to the front end to reduce page load size. Rather than needing to resize and upload multiple copies of the same image to be used throughout your site, the API you create will handle resizing and serving stored images for you.

# Technical Stack
NodeJS
Express
Jasmine
Typescript

# Scripts

## Install
npm install
## Build
npm run build
## Prettier
npm run prettier
## EsLint
npm run lint
## Test
npm run test
## Start
npm run start

# Run in browser

To resize image
http://localhost:3000/api/images?filename=icelandwaterfall&width=200&height=200

To display images statically without modification
http://localhost:3000/images/fjord.jpeg

Images names possible : 
encenadaport, fjord, icelandwaterfall, palmtunnel, santamonica