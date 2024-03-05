import { lazy } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    black: '#121417',
    secondBlck: 'rgba(18, 20, 23, 0.5)',
    white: '#fff',
    blue: '#3470ff',
    hoverBlue: '#0b44cd',
    bgFilter: '#f7f7fb',
    descriptionFilter: '#8a8a89',
    tooltipFilter: 'rgba(18, 20, 23, 0.2)',
  },
  animation: '250ms linear',
};

const Home = lazy(() => import('../pages/Home/Home'));
const Catalog = lazy(() => import('../pages/Catalog/Catalog'));
const Favorites = lazy(() => import('../pages/Favorites/Favorites'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="favorites" element={<Favorites />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
};
