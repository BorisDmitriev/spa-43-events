import React from 'react';

export default function Navbar() {

    const [name] = React.useState({username: 'YOUR NAME'});


    return (
         <nav id='navbar'>
            <ul>
                <a href="#"><li>Home</li></a>
                <a href="#"><li>Contact</li></a>
                <a href="#"><li>About</li></a>
            </ul>

            <div className="nav-details">
                <p data-testid="nav-username">{name.username}</p>
            </div>
         </nav>   
      );
}