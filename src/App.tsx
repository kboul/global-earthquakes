import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createGlobalStyle } from 'styled-components';

import { Provider } from './context';
import { Map, Navbar } from './components';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Provider>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Map />
        </QueryClientProvider>
      </Provider>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;
