import React from 'react';
import './Main.css';

const Button = ( {text, url} ) => {
    const goToURL = () => {
        window.open(url)
    }
    return <div className="btn content-font column-div orange-color bold margin-3" onClick={goToURL}>{text}</div>
};

export default Button;