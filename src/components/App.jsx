import { lazy, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCars } from '../redux/operations';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';

const Home = lazy(() => import('../pages/Home/Home'));
const Catalog = lazy(() => import('../pages/Catalog/Catalog'));
const Favorites = lazy(() => import('../pages/Favorites/Favorites'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

export const App = () => {
  const [rendered, setRendered] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    if (rendered) {
      setRendered(false);
      return;
    }
    dispatch(getCars());
  }, [dispatch, rendered]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
