import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import {ChakraProvider} from '@chakra-ui/react';

import App from './App';

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <ChakraProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
      </ChakraProvider>
  </React.StrictMode>
);

