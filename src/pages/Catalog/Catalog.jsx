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
      <h2>Catalog</h2>
      <CarsList/>
    </div>
  );
};

export default Catalog;
