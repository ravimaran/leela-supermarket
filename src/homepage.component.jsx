import React from 'react';

import './homepage.style.scss';

const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div class='menu-item'>
                <div className='content'>
                    <h1 className='title'>SPICES</h1>
                    <span className='subtitle'>SHOP Now</span>
                </div>
            </div>
            <div class='menu-item'>
                <div className='content'>
                    <h1 className='title'>GRAINS</h1>
                    <span className='subtitle'>SHOP Now</span>
                </div>
            </div>
            <div class='menu-item'>
                <div className='content'>
                    <h1 className='title'>FROZEN</h1>
                    <span className='subtitle'>SHOP Now</span>
                </div>
            </div>
            <div class='menu-item'>
                <div className='content'>
                    <h1 className='title'>MEAT & FISH</h1>
                    <span className='subtitle'>SHOP Now</span>
                </div>
            </div>
            <div class='menu-item'>
                <div className='content'>
                    <h1 className='title'>VGETABLES</h1>
                    <span className='subtitle'>SHOP Now</span>
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;