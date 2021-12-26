import React, { useEffect } from 'react';
import classes from '../src/styles/App.module.css';

import Prism from 'prismjs';
//import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/themes/prism-twilight.css';

// Hero Source: https://codepen.io/iamaminmajid/pen/XNwzra
// Other Source: https://codepen.io/audreydc/pen/ZOWvBj

function App() {
  useEffect(() => {
    Prism.highlightAll();
  });
  return (
    <div>
      <section>
        <div className={classes.Hero}>
          <div className={classes.Overlay}></div>
          <div className={classes.Content}>
            <h1 className={classes.MainTitleText}>The Twilight Zone API</h1>
            <p className={classes.LeadText}>
              Make HTTP requests on the original Twilight Zone television
              series, seasons 1-5 (1959-1964).
            </p>
            <br />
            <a href='#docs' className={classes.GetStarted}>
              Get Started
            </a>
          </div>
        </div>
      </section>

      <section className={classes.DocsContainer} id='docs'>
        <div>
          <div>
            <h1 className={classes.DocumentationText}>Documentation</h1>
            <hr />
          </div>
          <div>
            <p>
              Welcome to the Twilight Zone API. This documentation should
              provide with you all the information you need to start making your
              HTTP requests. This API is free. Feel free to use it on your
              projects.
            </p>
            <br />

            <h2>Base Url</h2>
            <p>
              <pre>
                <code className='language-html'>{`https://the-twilight-zone-api.herokuapp.com/`}</code>
              </pre>
            </p>
            <br />

            <h2>Episode Attributes</h2>
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
            <br />

            <h2>Get all episodes</h2>
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

            <h2>Get a single episode</h2>
            <p>
              Example request by episode id. In this example, episode with an id
              of 1 is being requested.
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

            <p>Running this script will give you the following data.</p>
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

            <h2>Get all episodes by season</h2>
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
              The request for all of the episodes from season 1 looks like this.
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

            <h2>Get a single episode of a particular season</h2>
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

            <p>Running this script will give you the following data.</p>
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
              </pre>
            </p>
          </div>
        </div>
      </section>

      <section className={classes.ResourcesContainer} id='resources'>
        <div>
          <div>
            <h1 className={classes.DocumentationText}>Resources</h1>
            <hr />
          </div>
          <div>
            <p>The Twilight Zone API comes with a set of 6 common resources:</p>
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
            <br />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

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
