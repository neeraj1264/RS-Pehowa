import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Satsang_video from './components/satsang/Satsang_video';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Banner from './components/banner/Banner';
import AddressSection from './components/address/AddressSection';
import About from './components/about/About';
import Shabad from './components/shabad/Shabad';
import Sakhi from './components/sakhi/Sakhi';

const App = () => (
  <Routes>
    <Route path="" element={<Layout />}>
      <Route index element={<Banner/>} />
      <Route path="address" element={<AddressSection/>} />
      <Route path="satsang" element={<Satsang_video />} />
      <Route path="shabad" element={<Shabad/>} />
      <Route path="sakhi" element={<Sakhi/>} />
      <Route path="about" element={<About/>} />
    </Route>
  </Routes>
);

export default App;
