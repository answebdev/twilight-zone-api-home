import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../layout/Navbar';
import Footer from '../../layout/Footer';
import classes from '../../styles/Home.module.css';
import useWindowDimensions from '../../utils/useWindowDimensions';

import handleHashUrl from '../../utils/handleHashUrl';

import smoothscroll from 'smoothscroll-polyfill';

import Prism from 'prismjs';
//import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/themes/prism-twilight.css';
// import 'prismjs/themes/prism-tomorrow.css';

// Hero Source: https://codepen.io/iamaminmajid/pen/XNwzra
// Other Source: https://codepen.io/audreydc/pen/ZOWvBj

const Home = ({ history }) => {
  const { width } = useWindowDimensions();

  useEffect(() => {
    handleHashUrl();
    window.history.replaceState(
      '',
      document.title,
      window.location.origin + window.location.pathname + window.location.search
    );

    smoothscroll.polyfill();
    // For Safari:
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    Prism.highlightAll();
    // Polyfill:
    smoothscroll.polyfill();
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    // Scroll to top of page:
    window.scrollTo(0, 0);

    // Fix bug in Firefox and Safari (hash links not working)-
    // Source: https://stackoverflow.com/questions/40280369/use-anchors-with-react-router
    // (scroll down to see Noah's post):
    const hash = history.location.hash;
    if (hash && document.getElementById(hash.substr(1))) {
      // Check if there is a hash and if an element with that id exists
      document
        .getElementById(hash.substr(1))
        .scrollIntoView({ behavior: 'smooth' });
    }
  }, [history.location.hash]); // Fires when component mounts and every time hash changes

  return (
    <div className={classes.PageContainer}>
      <Helmet>
        <title>The Twilight Zone API</title>
      </Helmet>
      <Navbar />

      <section className={classes.HeroSectionDiv}>
        <div className={classes.Hero}>
          <div className={classes.Overlay}></div>
          <div className={classes.Content}>
            <h1 className={classes.MainTitleText}>The Twilight Zone API</h1>
            <p className={classes.LeadText}>
              Make HTTP requests on the original Twilight Zone television
              series, seasons 1-5 (1959-1964).
            </p>
            <br />
            <br />
            <div className={classes.Buttons}>
              {/* <a href='#docs' className={classes.GetStarted}>
                Get Started
              </a> */}
              <a
                href={width < 768 ? '#docs2' : '#docs'}
                //className={classes.GetStarted}
                className={`${classes.GetStarted} ${'hashed'}`}
              >
                Get Started
              </a>
              <p></p>
              <a
                href={width < 768 ? '#resources2' : '#resources'}
                //className={classes.GetStarted}
                className={`${classes.GetStarted} ${'hashed'}`}
              >
                Resources
              </a>
            </div>
            <div id='docs2'></div>
          </div>
        </div>
        <div id='docs'></div>
      </section>

      <div className={classes.SectionsContainer}>
        <section className={classes.DocsContainer}>
          <div>
            <div>
              <h1 className={classes.DocumentationText}>Documentation</h1>
            </div>
            <div>
              <p>
                Welcome to the Twilight Zone API. This documentation should
                provide with you all the information you need to start making
                your HTTP requests. This API is free. Feel free to use it on
                your projects.
              </p>
              <br />

              <h2 className={classes.Subheading}>Base Url</h2>
              <p>
                <pre>
                  <code className='language-html'>{`https://the-twilight-zone-api.herokuapp.com/`}</code>
                </pre>
              </p>
              <br />

              <h2 className={classes.Subheading}>Episode Attributes</h2>

              <div className={classes.TableContainer}>
                <table>
                  <tr>
                    <th>Attribute</th>
                    <th>Type</th>
                    <th>Description</th>
                  </tr>
                  <tr>
                    <td>id</td>
                    <td>integer</td>
                    <td>Unique id per episode</td>
                  </tr>
                  <tr>
                    <td>title</td>
                    <td>string</td>
                    <td>Episode title</td>
                  </tr>
                  <tr>
                    <td>season</td>
                    <td>string</td>
                    <td>Season number</td>
                  </tr>
                  <tr>
                    <td>episode</td>
                    <td>string</td>
                    <td>Episode number</td>
                  </tr>
                  <tr>
                    <td>directed_by</td>
                    <td>string</td>
                    <td>Episode director(s)</td>
                  </tr>
                  <tr>
                    <td>written_by</td>
                    <td>string</td>
                    <td>Episode writer</td>
                  </tr>
                  <tr>
                    <td>air_year</td>
                    <td>string</td>
                    <td>Original year episode aired</td>
                  </tr>
                  <tr>
                    <td>air_date</td>
                    <td>string</td>
                    <td>Original air date</td>
                  </tr>
                  <tr>
                    <td>storyline</td>
                    <td>string</td>
                    <td>Brief overview of episode</td>
                  </tr>
                  <tr>
                    <td>cast</td>
                    <td>array</td>
                    <td>Episode actor(s)</td>
                  </tr>
                  <tr>
                    <td>opening_narration</td>
                    <td>string</td>
                    <td>Narration at opening of episode</td>
                  </tr>
                  <tr>
                    <td>closing_narration</td>
                    <td>string</td>
                    <td>Narration at closing of episode</td>
                  </tr>
                  <tr>
                    <td>img</td>
                    <td>string</td>
                    <td>Image from episode</td>
                  </tr>
                  <tr>
                    <td>wikipedia</td>
                    <td>string</td>
                    <td>Link to episode Wikipedia page</td>
                  </tr>
                  <tr>
                    <td>imdb</td>
                    <td>string</td>
                    <td>Link to episode IMDb page</td>
                  </tr>
                </table>
              </div>
              <br />

              <h2 className={classes.Subheading}>Get all episodes</h2>
              <p>Endpoint to retrieve information from all episodes.</p>
              <p>
                <pre>
                  <code className='language-javascript'>{`/episodes`}</code>
                </pre>
              </p>
              <br />

              <p>The request for all of the episodes looks like this.</p>
              <p>
                <pre>
                  <code className='language-javascript'>
                    {`fetch('https://the-twilight-zone-api.herokuapp.com/episodes')
  .then(response => response.json())
  .then(json => console.log(json))
`}
                  </code>
                </pre>
              </p>
              <br />

              <h2 className={classes.Subheading}>Get a single episode</h2>
              <p>
                Example request by episode id. In this example, episode with an
                id of 1 is being requested.
              </p>
              <p>
                <pre>
                  <code className='language-javascript'>
                    {`fetch('https://the-twilight-zone-api.herokuapp.com/episodes/1')
  .then(response => response.json())
  .then(json => console.log(json))
`}
                  </code>
                </pre>
              </p>
              <br />

              <p>Running this script will return the following data.</p>
              <p>
                <pre>
                  <code className='language-javascript'>
                    {`{
    "id": 1,
    "title": "Where Is Everybody?",
    "season": "1",
    "episode": "1",
    "directed_by": "Robert Stevens",
    "written_by": "Rod Serling",
    "air_year": "1959",
    "air_date": "10-02-1959",
    "storyline": "Mike Ferris finds himself alone in the small Oakwood town and without recollection about his name, where he is or who he is. Mike wanders through the town trying to find a living soul. The tension increases and Mike has a breakdown.",
    "cast": [
        "Earl Holliman",
        "James Gregory",
        "Garry Walberg"
    ],
    "opening_narration": "The place is here. The time is now, and the journey into the shadows that we are about to watch, could be our journey.",
    "closing_narration": "The barrier of loneliness: The palpable, desperate need of the human animal to be with his fellow man. Up there, up there in the vastness of space, in the void that is sky, up there is an enemy known as isolation. It sits there in the stars waiting, waiting with the patience of eons, forever waiting... in The Twilight Zone.",
    "img": "https://i.postimg.cc/DycfzqTJ/where-is-everybody.png",
    "wikipedia": "https://en.wikipedia.org/wiki/Where_Is_Everybody%3F",
    "imdb": "https://www.imdb.com/title/tt0734692/"
}
`}
                  </code>
                </pre>
              </p>
              <br />

              <h2 className={classes.Subheading}>Get all episodes by season</h2>
              <p>
                Endpoint to retrieve information from all episodes by season. To
                indicate the season, add the season number (1-5) at the end.
              </p>
              <p>
                <pre>
                  <code className='language-javascript'>{`/season1`}</code>
                </pre>
              </p>
              <br />

              <p>
                The request for all of the episodes from season 1 looks like
                this.
              </p>
              <p>
                <pre>
                  <code className='language-javascript'>
                    {`fetch('https://the-twilight-zone-api.herokuapp.com/season1')
  .then(response => response.json())
  .then(json => console.log(json))
`}
                  </code>
                </pre>
              </p>
              <br />

              <h2 className={classes.Subheading}>
                Get a single episode of a particular season
              </h2>
              <p>
                Example request by episode id from a particular season. In this
                example, episode with an id of 39 from season 2 is being
                requested.
              </p>
              <p>
                <pre>
                  <code className='language-javascript'>
                    {`fetch('https://the-twilight-zone-api.herokuapp.com/season2/39')
  .then(response => response.json())
  .then(json => console.log(json))
`}
                  </code>
                </pre>
              </p>
              <br />

              <p>Running this script will return the following data.</p>
              <p>
                <pre>
                  <code className='language-javascript'>
                    {`{
    "id": 39,
    "title": "Nervous Man in a Four Dollar Room",
    "season": "2",
    "episode": "3",
    "directed_by": "Douglas Heyes",
    "written_by": "Rod Serling",
    "air_year": "1960",
    "air_date": "10-14-1960",
    "storyline": "Small time criminal Jackie Rhoades must face both his past and his conscience while waiting for his next assignment.",
    "cast": [
        "Joe Mantell",
        "William D. Gordon"
    ],
    "opening_narration": "This is Mr. Jackie Rhoades, age thirty-four, and where some men leave a mark of their lives as a record of their fragmentary existence on Earth, this man leaves a blot, a dirty, discolored blemish to document a cheap and undistinguished sojourn amongst his betters. What you're about to watch in this room is a strange mortal combat between a man and himself, for in just a moment, Mr. Jackie Rhoades, whose life has been given over to fighting adversaries, will find his most formidable opponent in a cheap hotel room that is in reality the outskirts of The Twilight Zone.",
    "closing_narration": "Exit Mr. John Rhoades, formerly a reflection in a mirror, a fragment of someone else's conscience, a wishful thinker made out of glass, but now made out of flesh, and on his way to join the company of men. Mr. John Rhoades, with one foot through the door and one foot out of the Twilight Zone.",
    "img": "https://i.postimg.cc/vZpzZWWb/nervous-man-in-a-four-dollar-room.png",
    "wikipedia": "https://en.wikipedia.org/wiki/Nervous_Man_in_a_Four_Dollar_Room",
    "imdb": "https://www.imdb.com/title/tt0734596/"
}
`}
                  </code>
                  <div id='resources2'></div>
                </pre>
              </p>
            </div>
          </div>
          <div id='resources'></div>
        </section>

        <section className={classes.ResourcesContainer}>
          <div>
            <div>
              <h1 className={classes.ResourcesText}>Resources</h1>
            </div>
            <div>
              <p>
                The Twilight Zone API comes with a set of 6 common resources:
              </p>

              <div className={classes.TableContainer}>
                <table className={classes.ResourceTable}>
                  <tr className={classes.ResourceTr}>
                    <td className={classes.ResourceTd}>
                      <a href='https://the-twilight-zone-api.herokuapp.com/episodes'>
                        /episodes
                      </a>
                    </td>
                    <td className={classes.ResourceTd}>156 episodes</td>
                  </tr>
                  <tr className={classes.ResourceTr}>
                    <td className={classes.ResourceTd}>
                      <a href='https://the-twilight-zone-api.herokuapp.com/season1'>
                        /season1
                      </a>
                    </td>
                    <td className={classes.ResourceTd}>Season 1 episodes</td>
                  </tr>
                  <tr className={classes.ResourceTr}>
                    <td className={classes.ResourceTd}>
                      <a href='https://the-twilight-zone-api.herokuapp.com/season2'>
                        /season2
                      </a>
                    </td>
                    <td className={classes.ResourceTd}>Season 2 episodes</td>
                  </tr>
                  <tr className={classes.ResourceTr}>
                    <td className={classes.ResourceTd}>
                      <a href='https://the-twilight-zone-api.herokuapp.com/season3'>
                        /season3
                      </a>
                    </td>
                    <td className={classes.ResourceTd}>Season 3 episodes</td>
                  </tr>
                  <tr className={classes.ResourceTr}>
                    <td className={classes.ResourceTd}>
                      <a href='https://the-twilight-zone-api.herokuapp.com/season4'>
                        /season4
                      </a>
                    </td>
                    <td className={classes.ResourceTd}>Season 4 episodes</td>
                  </tr>
                  <tr className={classes.ResourceTr}>
                    <td className={classes.ResourceTd}>
                      <a href='https://the-twilight-zone-api.herokuapp.com/season5'>
                        /season5
                      </a>
                    </td>
                    <td className={classes.ResourceTd}>Season 5 episodes</td>
                  </tr>
                </table>
              </div>
              <br />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

// import spiral from './spiral.png';
// import './App.css';

// // Spiral source: https://www.pngitem.com/middle/hTxhbJm_transparent-twilight-zone-spiral-hd-png-download/

// // IDEA: USE THIS PAGE AS THE ERROR PAGE LATER WHEN FINALLY BUILDING THIS SITE

// function App() {
//   return (
//     <div className='App'>
//       <header className='App-header'>
//         <img src={spiral} className='App-logo' alt='logo' />
//         <p>The Twilight Zone API</p>
//         <p>
//           You are about to enter another dimension. But not yet.
//           <br />
//           Please check back in the future.
//         </p>
//       </header>
//     </div>
//   );
// }

// export default App;
