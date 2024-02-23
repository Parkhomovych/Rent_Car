import { Helmet, HelmetProvider } from 'react-helmet-async';

const Favorites = () => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>Favorites</title>
        </Helmet>
      </HelmetProvider>
      <h2>Favorites</h2>
    </div>
  );
};

export default Favorites;
