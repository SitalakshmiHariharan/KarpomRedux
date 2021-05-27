import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <div>
            <header> 
                <div>
                    <Link to="/"> YOUR LEARNING COMPANION </Link>
                </div>
            </header>
        </div>
    )
}

export default Header;