
import React from 'react';
import Banner from '../components/Banner';
import Form from '../components/Form';
import "./home.css";

const Home: React.FC = () => {
  return (
    <div className="w-full mx-auto min-h-screen">
      <div className="flex min-h-screen lg:justify-center">
        <Banner />
        <Form />
      </div>
    </div>
  );
};

export default Home;


