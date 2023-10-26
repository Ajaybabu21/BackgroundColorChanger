import React from 'react'
import { Link } from 'react-router-dom'
import './Green.css'
import Button from 'react-bootstrap/Button';


function green() {
  return (
    <div className='green'>
   <Link to={'/red'}>
            <Button variant="danger me-2">RED</Button>
            </Link>
            <Link to={'/blue'}>
            <Button variant="primary  me-2">BLUE</Button>
            </Link>
            <Link to={'/green'}>
            <Button variant="success  me-2">GREEN</Button>
            </Link>
            <Link to={'/yellow'}>
            <Button variant="warning  me-2">YELLOW</Button>
            </Link>
    </div>
  )
}

export default green