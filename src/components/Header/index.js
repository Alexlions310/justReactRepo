import {React} from 'react'
import './index.css'


const Header = () => {
    return (
        <nav className='header_container'>
          <div className='left'>
           <a className='link' id='home' href='#home'>Logo</a>
          </div>
          <div className='right'>
           <a className='link' href='#home'>Home</a>
           <a className='link' href='#Rooms'>Rooms</a>
           <a className='link' href='#Contacts'>Contacts</a>
         </div>
        </nav>
    )
}

export default Header;