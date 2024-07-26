import React, { useState } from 'react';
import './index.css';
import Button from '../Button';

function Nav() {
    const [active1, setActive1] = useState(true);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);

    const handleClick = (e) => {
        if (e.target.textContent === "one") {
            setActive1(true);
            setActive2(false);
            setActive3(false);
        } else if (e.target.textContent === "two") {
            setActive1(false);
            setActive2(true);
            setActive3(false);
        } else if (e.target.textContent === "three") {
            setActive1(false);
            setActive2(false);
            setActive3(true);
        }
    }


    return (
        <nav>
            <ul class="nav-items">
                <li><Button id="01" activated={active1.toString()} content="one" onClick={handleClick}/></li>
                <li><Button id="02" activated={active2.toString()} content="two" onClick={handleClick}/></li>
                <li><Button id="03" activated={active3.toString()} content="three" onClick={handleClick}/></li>
            </ul>
        </nav>
    );
}

export default Nav;
