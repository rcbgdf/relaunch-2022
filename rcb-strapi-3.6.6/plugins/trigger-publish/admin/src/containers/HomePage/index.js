
import React, { memo } from 'react';

import { Button } from '@buffetjs/core';

import axios from 'axios';

import "./index.css"

const HomePage = () => {
  const publishHandler = e => {
    axios
    .get('/trigger-publish')
    .then(res => {
      console.log(res)
      strapi.notification.success('Inhalte werden veröffentlicht. Das kann bis zu 10 Minuten dauern...');
    }).catch(err => {
      console.log(err)
      strapi.notification.error('Es ist ein Fehler bei der Veröffentlichung aufgetreten.')
    })
  }
  return (
    <div>
      <div className="container-fluid main-frame">
        <h1 className="mb-30px">Inhalt veröffentlichen</h1>
        <Button onClick={publishHandler}>Alle Inhalte jetzt veröffentlichen</Button>
      </div>
    </div>
  );
};

export default memo(HomePage);
