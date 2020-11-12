import React from 'react';
import logo from './images/logo.png';

export const ContentAbout = () => {

    return (
        <div className="contentAbout">
            <div><img src={logo} className="img_content-about"/>
                <p>С нами web-разработка стане проще</p>
            </div>
        </div>

    )
}
