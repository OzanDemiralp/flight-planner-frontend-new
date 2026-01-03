import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';

import SearchPage from './pages/SearchPage.jsx';
import SavedPage from './pages/SavedTripsPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage.jsx';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Navigate to='/search' replace />} />
        <Route path='/search' element={<SearchPage />} />
        <Route path='/saved' element={<SavedPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='*' element={<Navigate to='/search' replace />} />
      </Route>
    </Routes>
  );
}

export default App;
