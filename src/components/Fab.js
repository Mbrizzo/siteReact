import React from 'react';
import { Button, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';

export const Fab = () => {
  return (
    <div>
      <a href="/contato">
        <Button
          className="black"
          fab={{
            direction: 'left',
          }}
          floating
          icon={<Icon>email</Icon>}
          large
          node="button"
        ></Button>
      </a>
    </div>
  );
};

export default Fab;
