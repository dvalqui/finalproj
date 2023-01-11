import React from "react";
import { SliderData } from "./SliderData";


const Woman = ({ selectedWoman }) => {

    if (selectedWoman) {
        const slide = SliderData.find((slide) => slide.name === selectedWoman.name)



        return (
            <>
                <h1>{selectedWoman.name}</h1>
                <p>
                    Short bio: {selectedWoman.bio}
                </p>
                <img src={slide.image} className='image' />

            </>
        );
    }
}

export default Woman;