import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import UserDetail from './pages/UserDetail.jsx'; // 後で作成
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/users/:username" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
