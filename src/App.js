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
                <td>Unique Id per episode</td>
              </tr>
              <tr>
                <td>title</td>
                <td>Francisco Chang</td>
                <td>Mexico</td>
              </tr>
              <tr>
                <td>season</td>
                <td>Roland Mendel</td>
                <td>Austria</td>
              </tr>
              <tr>
                <td>episode</td>
                <td>Helen Bennett</td>
                <td>UK</td>
              </tr>
              <tr>
                <td>directed_by</td>
                <td>Yoshi Tannamuri</td>
                <td>Canada</td>
              </tr>
              <tr>
                <td>written_by</td>
                <td>Giovanni Rovelli</td>
                <td>Italy</td>
              </tr>
              <tr>
                <td>air_year</td>
                <td>Giovanni Rovelli</td>
                <td>Italy</td>
              </tr>
              <tr>
                <td>air_date</td>
                <td>Giovanni Rovelli</td>
                <td>Italy</td>
              </tr>
              <tr>
                <td>storyline</td>
                <td>Giovanni Rovelli</td>
                <td>Italy</td>
              </tr>
              <tr>
                <td>cast</td>
                <td>Giovanni Rovelli</td>
                <td>Italy</td>
              </tr>
              <tr>
                <td>opening_narration</td>
                <td>Giovanni Rovelli</td>
                <td>Italy</td>
              </tr>
              <tr>
                <td>closing_narration</td>
                <td>Giovanni Rovelli</td>
                <td>Italy</td>
              </tr>
              <tr>
                <td>img</td>
                <td>Giovanni Rovelli</td>
                <td>Italy</td>
              </tr>
              <tr>
                <td>wikipedia</td>
                <td>Giovanni Rovelli</td>
                <td>Italy</td>
              </tr>
              <tr>
                <td>imdb</td>
                <td>Giovanni Rovelli</td>
                <td>Italy</td>
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

            <h2>Get a single episode</h2>
            <p>Example request by episode id.</p>
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
