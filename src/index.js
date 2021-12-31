import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import DashboardMain from './pages/Dashboard/DashboardMain';
import MachineLearning from './pages/MachineLearning/MachineLearning';
import Hosting from './pages/Hosting/Hosting';
import Functions from './pages/Functions/Functions';
import Database from './pages/Database/Database';
import Storage from './pages/Storage/Storage';
import Testa from './pages/Dashboard/Testa'
import { ThemeProvider } from '@mui/material/styles';
import { dashboardTheme } from './dashboardTheme';

ReactDOM.render(
  <ThemeProvider theme={dashboardTheme}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="dashboardMain" element={<DashboardMain />} />
        <Route path="database" element={<Database />} />
        <Route path="functions" element={<Functions />} />
        <Route path="hosting" element={<Hosting />} />
        <Route path="machine-learning" element={<MachineLearning />} />
        <Route path="storage" element={<Storage />} />
        <Route path="testa" element={<Testa />} />        
      </Route>
    </Routes>
  </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
