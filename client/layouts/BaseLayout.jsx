import React from 'react';

import NavBar from '../NavBar.jsx';
import Footer from '../Footer.jsx';

export const BaseLayout = ({ content }) => (
  <div className="base-layout brown lighten-5">
    <NavBar />
    <main>
      {content}
    </main>
    <Footer />
  </div>
);
