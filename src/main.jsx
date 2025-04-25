import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router";
import ChapterWrapper from './components/ChapterWrapper.jsx';
import MainLayout from './mainLayout.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MainLayout>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/chapter/:id" element={<ChapterWrapper />} />
      </Routes>
    </MainLayout>
  </BrowserRouter>
)
