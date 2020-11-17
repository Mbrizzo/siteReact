import React from 'react';
import { Button, Icon } from 'react-materialize';
import { Link } from 'react-router-dom';

export const Fab = () => {
  return (
    <>
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
    </>
  );
};

export default Fab;
