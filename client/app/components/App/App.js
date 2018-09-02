import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import Footer from '../Footer/Footer';
import Layout from "../Header/Layout";

const App = ({ children }) => (
  <>
    <Layout>{children}</Layout>
    <Footer />
  </>
);

export default App;
