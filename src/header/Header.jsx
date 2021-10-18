import React from 'react';
import ReactDOM from 'react-dom';
import './Header.css';

const Header = (props) => {
    let img_class_name = (props.is_img_expanded) ? 'header-image header-image-expanded' : 'header-image header-image-shrink';
    let app_class_name = (props.is_img_expanded) ? 'header-text header-text-expanded' : 'header-text header-text-shrink';
    return (
        <div className="header-container">
            <img alt="header-image" 
                className={img_class_name}
                src="./../../header-logo.png" 
            />
            <span className={app_class_name}>{ props.app_name }</span>
        </div>
    )
}

export default Header;