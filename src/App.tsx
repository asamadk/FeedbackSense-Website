import React from 'react';
import './App.css';
import Header from './Components/Header';
import { ThemeProvider, createTheme } from '@mui/material';
import { Route, Routes } from 'react-router';
import Home from './Layouts/Home';
import Product from './Layouts/Product';
import Pricing from './Layouts/Pricing';
import Support from './Layouts/Support';
import Footer from './Components/Footer';
import About from './Layouts/About';
import Privacy from './Layouts/Privacy';
import Licensing from './Layouts/Licensing';
import Blogs from './Layouts/Blogs';
import SingleBlogDetail from './Components/Blogs/SingleBlogDetail';
import Ticket from './Layouts/Ticket';
import { Helmet } from 'react-helmet';

function App() {
  const currentTheme = createTheme({
    typography: {
      fontFamily: 'Apercu Pro, sans-serif'
    }
  });

  return (
    <div className="App">
      <Helmet>
                <title>FeedbackSense – Free Online Survey & Form Builder</title>
                <meta name="description" content="Create powerful no-code surveys & forms with FeedbackSense. Seamless surveys, dynamic forms & deep data analysis." />
                <meta name="keywords" content="Online Form Builder, Survey Builder India, Free Survey Tool" />
            </Helmet>
      <ThemeProvider theme={currentTheme} >
        <Header />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/product'
            element={<Product />}
          />
          <Route
            path='/pricing'
            element={<Pricing />}
          />
          <Route
            path='/support'
            element={<Support />}
          />
          <Route
            path='/ticket'
            element={<Ticket />}
          />
          <Route
            path='/blogs'
            element={<Blogs />}
          />
          <Route
            path='/blog/:slug'
            element={<SingleBlogDetail />}
          />
          <Route
            path='/about'
            element={<About />}
          />
          <Route
            path='/privacy-policy'
            element={<Privacy />}
          />
          <Route
            path='/licensing'
            element={<Licensing />}
          />
        </Routes>
        <Footer/>
      </ThemeProvider>
    </div>
  );
}

export default App;
