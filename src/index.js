import React from 'react';
import ReactDOM from 'react-dom';
import ClickityClick from './components/ClickityClick'
import ButtonCounter from './components/ButtonCounter'
import LightSwitch from './LightSwitch'

ReactDOM.render(
  <div>
    <ClickityClick />
    <br/>
    <ButtonCounter />
    <br />
    <LightSwitch />
  </div>,
  document.getElementById('root')
);
