import React from 'react';
// import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import {ChakraProvider} from '@chakra-ui/react';

import App from './App';

const root: ReactDOM.Root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <ChakraProvider>
          {/*<Suspense fallback={<PageLoader />}>
              <Layout><LazyApp /></Layout>
          </Suspense>*/}
          <App />
      </ChakraProvider>
  </React.StrictMode>
);

