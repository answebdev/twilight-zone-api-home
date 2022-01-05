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
  - [API Development](#API-Development)
  - [Site Development](#Site-Development)
* [Screenshots](#Screenshots)

## Technologies Used

* React
* The Twilight Zone custom-built API
* Prism
* CSS (CSS Modules)
* Flexbox
* React Helmet
* Smoothscroll Polyfill
* Responsively App
* Facebook Developer Tools (Sharing Debugger)
* Netlify
* JSON Server (for API)
* Heroku (for API)

[Back To Top](#Table-of-Contents)

## Development

The The Twilight Zone API was developed in two phases: API Development and Site Development. In the API Development phase, the actual Twilight Zone API was built, deployed, and tested. In the Site Development phase, the React site was created for the documentation of the API. Details of each phase are described below.

### API Development

To build the [API](https://github.com/answebdev/twilight-zone-api/ "The Twilight Zone API Documentation"), a JSON file was initially created for all of the data (all five seasons: episodes, air date, images, etc.). A server was then created in order to serve the data from the JSON file and then deploy the data endpoint using Heroku. In order to create different endpoints for the API (create a different endpoint for each season and one for all the episodes), I created separate `.js` files for each of the endpoints and their data. (i.e., `episodes.js` contained the data for all of the episodes, `season1.js` contained all of the data for Season 1, etc.). All of these files were exported separately by their endpoint name and brought into a new `db.js` file (see code below), which in turn was brought in to use in the server (`server.js`) as a single file.

```
const episodes = require('./episodes');
const season1 = require('./season1');
const season2 = require('./season2');
const season3 = require('./season3');
const season4 = require('./season4');
const season5 = require('./season5');

module.exports = () => ({
  episodes,
  season1,
  season2,
  season3,
  season4,
  season5,
});
```

This made it possible to serve and thus, deploy, each of these endpoints separately, which in the end resulted in a set of 6 common resources: `/episodes`, `/season1`, `/season2`, `/season3`, `/season4`, `/season5`, and `/season6`. At this point, the initial JSON file was no longer needed, since all of the data was converted into `.js` files, as described above. To test the endpoints, I used Postman and Paw Cloud, and also created a simple site in order to test each of the endpoints by first fetching, and then displaying the data from the API on the screen:

![Screenshot 05](screenshots/test-site.gif "Test Site")

### Site Development

This site was created for the documentation of the custom-built Twilight Zone API and provides all of the information needed to start making HTTP requests, including a set of six common resources that the API comes with. It was built with React and uses Prism for the syntax highlighting. To make the site responsive and mobile-friendly, Flexbox and media queries were used in conjunction with Responsively App. In addition, smoothscroll polyfill was used so that the smooth scroll behavior can be used in browsers that do not support smooth scrolling (e.g., Safari). Finally, after Open Graph meta tags were added, the Facebook Sharing Debugger tool was used to scrape the site so that when the site's URL is posted and shared (e.g., on Facebook), its content will be shown (see last two screenshots below).

#### useWindowDimensions Hook

To make the site responsive, I used a combination of Flexbox and media queries in conjunction with Responsively App. However, because I wanted the hero section of the home page to take up 100% of the viewport height on smaller screen sizes, an issue arose on smaller screen sizes where the "Documentation" header text sat halfway underneath the hero section, which did not look good. To address this, I used a hook (kept in a separate `utils` folder) that I was able to import and use in the home page component (`Home.js`). I used the following hook to get the window dimensions (height and width):

```
import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
```

Next, I imported the hook into the home page component in order to use it. For my purposes, I only needed the width:

```
const { width } = useWindowDimensions();
```

I then used `width` down below in the `Home.js` component. For my "Get Started" button, I used an anchor tag in the `href` so that when the "Get Started" button is clicked, the user would be navigated to the "Documentation" section down below. This is where the issue arose. As described above, when the user is navigated to the "Documentation" section of the page on smaller screen sizes (specifically, smaller than 768px in width), the "Documentation" header text sat halfway underneath the hero section. To address this, I used a ternary operator and the `width` constant. This can be interpreted as saying that when the width of the window is smaller than 768px, then navigate to the anchor link with the URL of `#docs2`; otherwise, navigate to the anchor link with the URL of `#docs`:

```
<a
  href={width < 768 ? '#docs2' : '#docs'}
>
  Get Started
</a>
```

As you can see in the code below, I created a `div` with an `id` of `docs2` that sits slightly above the original `div` (with an `id` of `docs`). This is where the user will be navigated to when the screen size falls below a width of 768px. Some of the code was removed in this snippet in order to make it easier to see where the anchor links are placed. But with the complete code in place - which includes all of the content - the "Documentation" header text now sits nicely right below the hero section on smaller screen sizes.

```
<section>
  <div>
    <h1>The Twilight Zone API</h1>
    <p>
      Make HTTP requests on the original Twilight Zone television series,
      seasons 1-5 (1959-1964).
    </p>
    <div className={classes.Buttons}>
      <a href={width < 768 ? '#docs2' : '#docs'}>Get Started</a>
    </div>
    <div id='docs2'></div>
  </div>
  <div id='docs'></div>
</section>
```

[Back To Top](#Table-of-Contents)

## Screenshots

![Screenshot 01](screenshots/twilightzone-screenshot01.png "Home Page Hero Section")

![Screenshot 02](screenshots/twilightzone-screenshot02.png "Documentation Section")

![Screenshot 03](screenshots/twilightzone-screenshot03.png "Resources Section")

<img src="screenshots/twilightzone-screenshot04.png" title="Preview of Link when Shared on Facebook" width="50%" height="auto">

<img src="screenshots/twilightzone-screenshot05.png" title="Preview of Link when Shared on LinkedIn" width="50%" height="auto">

[Back To Top](#Table-of-Contents)
