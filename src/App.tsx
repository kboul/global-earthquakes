import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';

import Leaflet from './Leaflet';
import NavBar from './Navbar';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <NavBar />
      <Leaflet />
    </Provider>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;
