import { Helmet, HelmetProvider } from 'react-helmet-async';
import { CallBtn } from '../../components/CallBtn/CallBtn';
import { HomeSection, Title } from './Home.styled';
import { HomeContent } from '../../components/HomeContent/HomeContent';

const Home = () => {
  return (
    <HomeSection>
      <HelmetProvider>
        <Helmet>
          <title>Home</title>
        </Helmet>
      </HelmetProvider>
      <Title>ПОДОБОВА ОРЕНДА АВТОМОБІЛІВ В УКРАЇНІ</Title>
      <HomeContent />
      <CallBtn />
    </HomeSection>
  );
};

export default Home;
