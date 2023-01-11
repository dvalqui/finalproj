import React, { useEffect, useState } from "react";
import WomenList from "../components/WomenList";
import NavBar from "../components/Navbar";
import ImageSlider from '../components/ImageSlider';
import { SliderData } from '../components/SliderData';
import Woman from "../components/Woman";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../components/About";

function WomenInTechContainer() {
    const [women, setWomen] = useState([])
    const [selectedWoman, setSelectedWoman] = useState(null)


    async function fetchWomen(url = "http://localhost:8080/women") {
        const response = await fetch(url);
        const json = await response.json();
        setWomen(json)

    }

    useEffect(() => {

        fetchWomen();
    }, [])

    return (
        <>

            <Router>

                <NavBar />

                <div className="mainDisplay">
                    <h1>Important Women in Tech History</h1>
                    <Routes>

                        <Route exact path="/*" element={<ImageSlider slides={SliderData} women={women} setSelectedWoman={setSelectedWoman} />} />
                        <Route exact path="/list" element={<WomenList women={women} />} />
                        <Route exact path="/selected" element={<Woman selectedWoman={selectedWoman} />} />
                        <Route exact path="/about" element={<About />} />


                    </Routes>
                </div>
            </Router>



        </>
    )
}




export default WomenInTechContainer;