import React from "react";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import About from "./About";
import Carousel from "../components/carousel";
import c1 from '../media/c1.jpg'
import c2 from '../media/c2.jpg'
import c3 from '../media/c3.jpg'

const Home = () => (
    <div class="Home">
        <Carousel image={c1} image1={c2} image2={c3}/>
        <div class=' w-100 p-4 h-100'>
            <br/>
          <h3 class=' m-0 text-center'>Bienvenido!</h3>
        </div>
    </div>
)

export default Home