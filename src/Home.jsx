import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import Button from 'react-bootstrap/Button';


function Home() {




    return (
        <div className='home'>
            <Link to={'/red'}>
                <Button variant="danger me-2  mt-5">RED</Button>
            </Link>
            <Link to={'/blue'}>
                <Button variant="primary  me-2 mt-5">BLUE</Button>
            </Link>
            <Link to={'/green'}>
                <Button variant="success  me-2 mt-5">GREEN</Button>
            </Link>
            <Link to={'/yellow'}>
                <Button variant="warning  me-2 mt-5">YELLOW</Button>
            </Link>
        </div>
    )
}

export default Home