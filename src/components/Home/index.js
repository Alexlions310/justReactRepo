import { React } from 'react'
import Header from '../Header'
import { FaStar } from "react-icons/fa"
import { Button } from '../Button/Button.styled'
import hotel from '../../assets/images/hotel.jpg'
import './index.css'


const Home = () => {
    const stars = Array(5).fill(0);
    return (
        <div className='app_container'>
            <Header />
            <div className='content_container'>
                <div className='left'>
                    <h1 className='hotelName'>Burj Al Arab Hotel
                        {stars.map((value, index) => {
                            return (
                                <FaStar key={index} className="starIcon" />
                            )
                        }
                        )}
                    </h1>
                    <p className='hotelP'>
                        Welcome to one of the best 7 star hotel in the world. , it is one of the tallest hotels in the world, although 39% of its total height is made up of non-occupiable space.[10][11][12] Burj Al Arab stands on an artificial island that is 280 m (920 ft) from Jumeirah Beach and is connected to the mainland by a private curving bridge
                    </p>
                    <Button>
                        Book your room now
                    </Button>
                </div>
                <div className='right'>
                    <img className='hotelPic' src={hotel} alt="hotel" />
                </div>
            </div>
        </div>
    )
}

export default Home;