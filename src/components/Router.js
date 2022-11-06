import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Pages from './pages';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/dashboard' replace />} />
        <Route path='/dashboard' element={<Pages.Dashboard />} />
        <Route path='/manage' element={<Pages.Manage />} />
        <Route path='*' element={<Navigate to='/dashboard' replace />} />
      </Routes>
    </BrowserRouter>
  );
}
