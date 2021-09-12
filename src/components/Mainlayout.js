import React from 'react';
import Navs from './Navs';
import Title from './Title';

const Mainlayout = ({ children }) => {
  return (
    <div>
      <Title
        title="Box office"
        subtitle="Are you looking for a movie or a actor?"
      />
      <Navs />
      {children}
    </div>
  );
};

export default Mainlayout;
