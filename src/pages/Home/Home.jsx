import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = () => {
  return (
    <section>
      <HelmetProvider>
        <Helmet>
          <title>Home</title>
        </Helmet>
      </HelmetProvider>

      <h1 style={{ textAlign: 'center', padding: '20px' }}>Home Page</h1>
      <img
        src="https://www.nissanusa.com/content/dam/Nissan/us/rental-cars/nissan-rental-car-lineup-hero_v2.jpg.ximg.l_full_m.smart.jpg"
        alt="many cars"
      />
    </section>
  );
};

export default Home;
