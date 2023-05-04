import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact'
import asd from './media/icono.png'




function App() {
  return (

    <BrowserRouter>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <h1 class="navbar-h1" href="#">BadHabits</h1>
          <a class="navbar-brand" href="#"><img src={asd} /></a>

          <div class="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li>
                  <Link class='dou' to='/'>
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link class='dou' to='/about'>
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link class='dou' to='/products'>
                    Productos
                  </Link>
                </li>
                <li>
                  <Link class='dou' to='/contact'>
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <footer>
        <div class='container-footer w-100 p-4 bg-dark'>
          <p class=' m-0 text-center'>Copyright©2023 | Jeremías Carrera</p>
        </div>
      </footer>
    </BrowserRouter>

  );
}

export default App;
