import {React} from 'react'
import { Button } from '../Button/Button.styled'
import room from '../../assets/images/room.jpg'
import './index.css'


const Room = () => {
    return (
        <div className='room_container'>
            <img className='hotelPic' src={room} alt="room" />
            <p className='price'>price - 500 EURO</p>
            <p className='numOfRooms'> Number of rooms: 3</p>
            <Button>Book your room now</Button>
        </div>
    )
}

export default Room;