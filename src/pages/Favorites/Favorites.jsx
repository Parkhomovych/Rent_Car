import { Helmet, HelmetProvider } from 'react-helmet-async';
import { FavoriteList } from 'components/FavoriteList/FavoriteList';
import { FilterForm } from '../../components/FilterForm/FilterForm'
const Favorites = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Favorites</title>
        </Helmet>
      </HelmetProvider>
      <FilterForm />
      <FavoriteList />
    </div>
  );
};

export default Favorites;
