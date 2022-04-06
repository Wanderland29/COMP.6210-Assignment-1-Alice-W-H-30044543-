import React from 'react';

function Header()
{
    return(

        <div>
            <nav className="navbar navbar-dark bg-info">
            <div class="container-fluid"></div>
            <img src="images/scplogo.jpg" className="d-inline-block align-text-top" alt="" width="80" height="70" />
            <h1>SCP Application</h1>
            </nav>
        </div>
    )
}

export default Header;