import { Helmet, HelmetProvider } from "react-helmet-async";


const Home = () => {
  return (
    <div>
      <HelmetProvider>
      <Helmet>
        <title>Home</title>
      </Helmet>
      </HelmetProvider>
      
      <h1>Home</h1>
    </div>
  );
};

export default Home;
