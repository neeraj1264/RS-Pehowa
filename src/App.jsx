import React from 'react';
import ReactDOM from 'react-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Satsang_video from './components/satsang/Satsang_video';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Banner from './components/banner/Banner';
import Shabad from './components/shabad/Shabad';
import Sakhi from './components/sakhi/Sakhi';
import AmavasyaDates from './components/pages/Amavasya';
import PournimaDates from './components/pages/Pournima';
import SundayDates from './components/pages/Sunday';

const App = () => (
  <Routes>
    <Route path="" element={<Layout />}>
      <Route index element={<Banner/>} />
      <Route path="satsang" element={<Satsang_video />} />
      <Route path="shabad" element={<Shabad/>} />
      <Route path="sakhi" element={<Sakhi/>} />
      <Route path="Amavasya" element={<AmavasyaDates/>} />
      <Route path="Pournima" element={<PournimaDates/>} />
      <Route path="Sunday" element={<SundayDates/>} />
    </Route>
  </Routes>
);

export default App;
