import { QueryClientProvider } from '@tanstack/react-query';
import { createGlobalStyle } from 'styled-components';

import { Map, Navbar } from './components';
import queryClient from './queryClient';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Map />
      </QueryClientProvider>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;
