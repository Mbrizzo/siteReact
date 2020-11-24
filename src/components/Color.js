//import React from 'react';

function Color() {
  let color = '#';
  let randomHex = '123456ABCDEF';
  for (var i = 0; i < 6; i++) {
    color += randomHex[Math.floor(Math.random() * 16)];
  }

  return color;
  console.log(color);
}

export default Color();
