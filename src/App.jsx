import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import LogIn from './pages/LogIn';
import Register from './pages/Register';
import Singlepost from './pages/Singlepost';
import { ToastContainer } from 'react-toastify';
import { ProSidebarProvider } from 'react-pro-sidebar';

import './App.css'


const App = () => {
  return (


    <>
      <ToastContainer />
      <ProSidebarProvider>

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Login' element={<LogIn />} />
            <Route path='/Register' element={<Register />} />
            <Route path='/post/:id' element={<Singlepost />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ProSidebarProvider>
    </>
  )
}


export default App
