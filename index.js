import React from 'react';
import {render} from 'react-dom';
import Media from './src/playlist/components/media';


const app = document.getElementById('app');
const hola = <h1>hola mundo!!!</h1>

render(<Media type="video" title="Titulo del video" author="autor" image="./images/covers/bitcoin.jpg"/>,app);