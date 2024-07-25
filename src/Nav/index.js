import React from 'react';
import './index.css';
import Button from '../Button';

function Nav() {
    return (
        <nav>
            <ul class="nav-items">
                <li><Button content="one" /></li>
                <li><Button content="two" /></li>
                <li><Button content="three" /></li>
            </ul>
        </nav>
    );
}

export default Nav;
