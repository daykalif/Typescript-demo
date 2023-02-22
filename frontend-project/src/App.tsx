import React from 'react';
import { HashRouter, Route, Routes } from "react-router-dom";
import LoginPage from './pages/Login';
import HomePage from './pages/Home';


const App: React.FC = () => {
  return (
    <div>
      <HashRouter>
        <Routes>
          {/* 注意，这里是 jsx 语法，需要配合标签, 传参也可以直接写为组件传参 */}
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App;