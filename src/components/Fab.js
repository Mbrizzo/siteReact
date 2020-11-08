import React from 'react';
import { Button, Icon, NavItem } from 'react-materialize';

export const Fab = () => {
  return (
    <div>
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
    </div>
  );
};

export default Fab;
