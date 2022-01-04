# The Twilight Zone API

![Screenshot 01](screenshots/banner.png "The Twilight Zone API")

## Description

The Twilight Zone API allows you to make HTTP requests on the original Twilight Zone television series. This site was created for the documentation of this custom API and provides all of the information needed to start making HTTP requests, including a set of six common resources that the API comes with.

## The Twilight Zone API Live Link

Please check out the live link for The Twilight Zone API documentation site here: [The Twilight Zone API](https://thetwilightzoneapi.netlify.app/ "The Twilight Zone API")

## API Link

Please go to the API documentation here: [The Twilight Zone API Documentation](https://github.com/answebdev/twilight-zone-api/ "The Twilight Zone API Documentation")

## Table of Contents
* [Technologies Used](#Technologies-Used)
* [Development](#Development)
* [Screenshots](#Screenshots)

## Technologies Used

* React
* The Twilight Zone custom-built API
* Prism
* CSS (CSS Modules)
* Flexbox
* React Helmet
* Smoothscroll Polyfill
* Facebook Developer Tools (Sharing Debugger)
* Netlify

## Development

This site was created for the documentation of the custom-built Twilight Zone API and provides all of the information needed to start making HTTP requests, including a set of six common resources that the API comes with. It was built with React and uses Prism for the syntax highlighting. Smoothscroll polyfill was used so that the smooth scroll behavior can be used in browsers that do not support smooth scrolling (e.g., Safari).

As for the API, a JSON file was created initially for all of the data (all five seasons: episodes, air date, images, etc.). A server was then created in order to serve the data and then deploy the data endpoint using Heroku. In order to create different endpoints for the API (create a different endpoint for each season), I created separate `.js` files

## Screenshots

![Screenshot 01](screenshots/twilightzone-screenshot01.png "Home Page")

![Screenshot 02](screenshots/twilightzone-screenshot02.png "Documentation Section")

![Screenshot 03](screenshots/twilightzone-screenshot03.png "Resources Section")
