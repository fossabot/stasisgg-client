import React from 'react';
import 'typeface-roboto/index.css';
import '@openfonts/noto-sans-jp_japanese';
import 'typeface-raleway/index.css';

const Fonts = (): JSX.Element => (
  <div style={{ opacity: 0 }}>
    <span style={{ fontFamily: 'Robot' }}></span>
    <span style={{ fontFamily: 'Robot', fontWeight: 500 }}></span>
    <span style={{ fontFamily: 'Raleway' }}></span>
    <span style={{ fontFamily: 'Raleway', fontWeight: 300 }}></span>
    <span style={{ fontFamily: 'Noto Sans JP' }}></span>
  </div>
);

export default Fonts;
