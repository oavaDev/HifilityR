import React from 'react';
import { Button } from '@nextui-org/react';

const Buttonn = ({ onClick, label }) => {
  return (
    <Button
      onClick={onClick}
      style={{ backgroundColor: '#2b2a2a', zIndex: '1' }}
    >
      {label}
    </Button>
  );
};

export default Buttonn;
