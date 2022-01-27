import {React} from 'react'
import Room from '../Room'
import './index.css'


const Rooms = () => {
    return (
        <div className='rooms_container'>
           <h1 className='roomsHeading'>Rooms</h1>
           <Room/>
        </div>
    )
}

export default Rooms;