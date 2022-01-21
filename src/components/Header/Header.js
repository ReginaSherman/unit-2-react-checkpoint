import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <h1>My Contacts</h1>
            <nav>
                <Link to='/'><button>HOME</button></Link>
                <Link to='/new-contact'><button>NEW CONTACT</button></Link>
            </nav>
        </div>
    )
}

export default Header 