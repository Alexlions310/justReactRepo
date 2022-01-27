import {React} from 'react'
import Home from '../Home'
import Rooms from '../Rooms'
import Map from '../Map'
import './index.css'


const App = () => {
    return (
        <div className='app_container'>
          <div className='wrapper'>
            <Home/>
            <Rooms/>
          </div>
          <Map/>
        </div>
    )
}

export default App;