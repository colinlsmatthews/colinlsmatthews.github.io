import React, { useState } from 'react';
import './index.css';
import Button from '../Button';

function Nav(props) {
    console.log('Nav props:', props); // Debug log
    
    const [active1, setActive1] = useState(true);
    const [active2, setActive2] = useState(false);
    const [active3, setActive3] = useState(false);

    const handleClick = (e) => {
        if (e.target.textContent === "one") {
            setActive1(true);
            setActive2(false);
            setActive3(false);
            props.onSelectShape("box");
        } else if (e.target.textContent === "two") {
            setActive1(false);
            setActive2(true);
            setActive3(false);
            props.onSelectShape("sphere");
        } else if (e.target.textContent === "three") {
            setActive1(false);
            setActive2(false);
            setActive3(true);
            props.onSelectShape("cone");
        }
    }


    return (
        <nav>
            <ul class="nav-items">
                <li>
                    <Button
                        activated={active1.toString()}
                        content="one"
                        onClick={handleClick}
                    />
                </li>
                <li>
                    <Button
                        activated={active2.toString()}
                        content="two"
                        onClick={handleClick}
                    />
                </li>
                <li>
                    <Button
                        activated={active3.toString()}
                        content="three"
                        onClick={handleClick}
                    />
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
