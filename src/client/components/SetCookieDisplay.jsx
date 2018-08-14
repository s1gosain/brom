import React from 'react';
import Icon from './Icon';

const SetCookieDisplay = ({ policy }) => (
  <div className="set-cookie border-bottom">
    <p><strong>Set-Cookie</strong></p>
    {
      policy.map(({ name, value, ...details }) => (
        <div>
          <p><Icon flag="setCookie" /><strong>{name}={value}</strong></p>
          {Object.keys(details).map(el =>
            <p><strong>{el}:</strong> {details[el]}</p>)}
        </div>
      ))
    }
  </div>
);

export default SetCookieDisplay;