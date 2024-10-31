import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const EmployeeList = lazy(() => import('./pages/EmployeeList'));
const EmployeeForm = lazy(() => import('./pages/EmployeeForm'));

function App() {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<EmployeeList />} />
            <Route path="employee/new" element={<EmployeeForm />} />
            <Route path="employee/edit/:id" element={<EmployeeForm />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
