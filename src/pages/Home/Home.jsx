import { Helmet, HelmetProvider } from 'react-helmet-async';
import styled from 'styled-components';
const Box = styled.div`
  background-image: url('https://news.blog.net.ua/media/2023/07/Ukraina-maty-u-Kyievi-muzeynyky-pereymenuiut-monument-Batkivshchyna-maty.gif');
`;
const Home = () => {
  return (
    <div>
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
    </div>
  );
};

export default Home;
