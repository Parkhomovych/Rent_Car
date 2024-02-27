import { FilterForm } from '../../components/FilterForm/FilterForm';
import { CarsList } from '../../components/CarsList/CarsList';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCars } from '../../redux/operations';

const Catalog = () => {
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
    <section>
      <HelmetProvider>
        <Helmet>
          <title>Catalog</title>
        </Helmet>
      </HelmetProvider>
      <FilterForm />
      <CarsList />
    </section>
  );
};

export default Catalog;
