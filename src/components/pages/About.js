import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import smoothscroll from 'smoothscroll-polyfill';

import Navbar from '../../layout/Navbar';
import Footer from '../../layout/Footer';
import classes from '../../styles/About.module.css';

const About = () => {
  useEffect(() => {
    // Polyfill:
    smoothscroll.polyfill();
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    // Scroll to top of page:
    window.scrollTo(0, 0);
  });

  return (
    <div className={classes.PageContainer}>
      <Helmet>
        <title>The Twilight Zone API | About</title>
      </Helmet>
      <Navbar />

      <div className={classes.SectionsContainer}>
        <section className={classes.MainSection}>
          <div>
            <div>
              <h1 className={classes.Heading}>About</h1>
            </div>
            <h2 className={classes.Subheading}>About the API</h2>
            <p>
              The Twilight Zone API was created by&nbsp;
              <a
                className={classes.Link}
                href='https://adolfschmuck.com/'
                rel='noopener noreferrer'
                target='_blank'
              >
                Adolf Schmuck
              </a>
              . This API is a collection of information based on the original
              Twilight Zone television series, seasons 1-5 (1959-1964). I love
              The Twilight Zone, and I was unable to find a Twilight Zone API
              with the information that I wanted, so I decided to create my own.
              I designed this site in the hopes of making it easy for developers
              to see what information is available and to see what HTTP requests
              are possible. The full documenation can be found in the
              documenation section of the Home page.
            </p>
            <br />

            <h2 className={classes.Subheading}>Copyright</h2>
            <p>
              I do not own the rights to any of the information or images
              provided in this API. The Twilight Zone was created by Rod Serling
              and first aired on October 2, 1959. The data and images collected
              for this API came from{' '}
              <a
                className={classes.Link}
                href='https://en.wikipedia.org/'
                rel='noopener noreferrer'
                target='_blank'
              >
                Wikipedia
              </a>
              ,{' '}
              <a
                className={classes.Link}
                href='https://www.imdb.com/'
                rel='noopener noreferrer'
                target='_blank'
              >
                IMDb
              </a>
              ,{' '}
              <a
                className={classes.Link}
                href='https://twilightzone.fandom.com/wiki/A_Fifth_Dimension:The_Twilight_Zone_Wiki'
                rel='noopener noreferrer'
                target='_blank'
              >
                The Twilight Zone Wiki
              </a>
              , and{' '}
              <a
                className={classes.Link}
                href='https://midnitereviews.com/'
                rel='noopener noreferrer'
                target='_blank'
              >
                Midnite Reviews
              </a>
              . In some cases, some of the images were re-sized in order to be
              consistent with the image size across the collection. In these
              instances, the images were re-hosted with new URLs.
            </p>
            <br />

            <h2 className={classes.Subheading}>Issues</h2>
            <p>
              I did my best to double- and triple-check the information in the
              API. Alas, I am only human. If you come across any errors or
              issues, feel free to let me know, and I will gladly correct them
              as soon as I can.
            </p>
            <br />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
