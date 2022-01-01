import React from 'react';
import { Helmet } from 'react-helmet';
import spiral from '../../../src/img/spiral.webp';
import classes from '../../styles/Maintenance.module.css';

const Maintenance = () => {
  return (
    <div className={classes.Maintenance}>
      <Helmet>
        <title>The Twilight Zone API | Maintenance</title>
        <style type='text/css'>{`
    `}</style>
      </Helmet>
      <header className={classes.AppHeader}>
        <img src={spiral} className={classes.AppLogo} alt='logo' />
        <p>The Twilight Zone API</p>
        <p>
          You are about to enter another dimension. But not yet.
          <br />
          Please check back soon.
        </p>
      </header>
    </div>
  );
};

export default Maintenance;
