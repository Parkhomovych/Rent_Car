import { FilterForm } from '../../components/FilterForm/FilterForm';
import { CarsList } from '../../components/CarsList/CarsList';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Catalog = () => {
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
