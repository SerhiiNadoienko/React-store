import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AppRoutes from '../Routes/Routes';
import Sidebar from '../Sidebar/Sidebar';

const App = () => {
  return (
    <div className="app">
      <Header />

      <div className="container">
        <Sidebar />
        <AppRoutes />
      </div>

      <Footer />
    </div>
  );
};

export default App;
