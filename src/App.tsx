import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';

import { Map, Navbar } from './components';
import store from './store';

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
      <Provider store={store}>
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
