import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Layout } from './components/Layout/Layout';
import {
  Router,
  Route,
  Routes
} from 'react-router-dom';
// import "./components/Warming WOFF/Warming-Black.woff"
import AppStore from './Shared/stores/AppStore';
import { AppApi } from './Shared/apis/AppApi';
import { AppContext } from './components/Context';
import { AdminDashboard } from './components/LoggedIn/Admin';
import SignUp from './components/Layout/SubComponents/Login/signUp';
import { Dashboard } from './components/LoggedIn/Dashboard/dashboard';
import { Procurement } from './components/LoggedIn/Procurement/procurement';
import { Vacancies } from './components/LoggedIn/Vacancies/vacancies';
import { Setting } from './components/LoggedIn/Settings/setting';
import { Subscribers } from './components/LoggedIn/Subscribers/subscribers';
import { Windhoek } from './components/Layout/SubComponents/Projects/Windhoek/windhoek';
import { Eluwa } from './components/Layout/SubComponents/Projects/Eluwa/Eluwa';
import { Oshana } from './components/Layout/SubComponents/Projects/Oshana/oshana';


const store = new AppStore();
const api = new AppApi(store);


function App() {
  return (
    <AppContext.Provider value={{ store, api }}>
      <Routes>
        <Route path="a" element={
          // <AuthRoute>
          <AdminDashboard />
          // </AuthRoute>
        } >
          <Route path="*" element={<Dashboard />} />
          <Route path="procurement" element={<Procurement />} />
          <Route path="vacancies" element={<Vacancies />} />
          <Route path="settings" element={<Setting />} />
          <Route path="subscribers" element={<Subscribers />} />
        </Route>
        <Route path="*" element={<Layout />} />
        <Route path="windhoek" element={<Windhoek />} />
        <Route path="eluwa" element={<Eluwa />} />
        <Route path="oshana" element={<Oshana />} />
        {/* <Route path="sign-up" element={<SignUp />} /> */}
      </Routes>
    </AppContext.Provider>
  );
}

export default App;


export const AdminRouting = () => {
  return (
    <Routes>
      <Route path="/a" element={
        // <AuthRoute>
        <AdminDashboard />
        // </AuthRoute>
      } />
      <Route path="*" element={<Dashboard />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="vacancies" element={<Vacancies />} />
      <Route path="procurement" element={<Procurement />} />
      <Route path="settings" element={<Setting />} />
      <Route path="subscribers" element={<Subscribers />} />
    </Routes>
  )
}
