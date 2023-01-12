import React from "react";
import { Link } from "react-router-dom";


const Resources = () => {
    return (
        <ul>
            <li><Link src="https://www.womenwhocode.com/">Women Who Code</Link></li>
            <li><Link src="https://codefirstgirls.com/">Code First Girls</Link></li>
            <li> <Link src="https://peopleofcolorintech.com/">People of Color in Tech</Link></li>
            <li><Link src="https://wearebgc.org/">Black Girls Code</Link></li>
        </ul>
    );
}

export default Resources;