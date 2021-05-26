import React from 'react';
import Feed from './Feed/Feed.js';
import Head from './Helper/Head.js';

const Home = () => {
  return (
    <section>
      <Head
        title="Fotos"
        description="Home do site Dogs com o Feed de Fotos."
      />
      <Feed />
    </section>
  );
};

export default Home;
