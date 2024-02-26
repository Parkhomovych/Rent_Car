import { Helmet, HelmetProvider } from 'react-helmet-async';
import { FavoriteList } from 'components/FavoriteList/FavoriteList';
import { FilterForm } from '../../components/FilterForm/FilterForm'
const Favorites = () => {
  return (
    <section>
      <HelmetProvider>
        <Helmet>
          <title>Favorites</title>
        </Helmet>
      </HelmetProvider>
      <FilterForm />
      <FavoriteList />
    </section>
  );
};

export default Favorites;
