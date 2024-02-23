import { FilterForm } from '../../components/FilterForm/FilterForm'
import { CarsList } from '../../components/CarsList/CarsList';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Catalog = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Catalog</title>
        </Helmet>
      </HelmetProvider>
      <FilterForm />
      <CarsList />
    </div>
  );
};

export default Catalog;
