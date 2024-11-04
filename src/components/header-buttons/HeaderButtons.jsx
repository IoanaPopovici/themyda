import plusBtn from '../../assets/plus.png'
import discover from '../../assets/discover.png'
import heart from '../../assets/heart.png'
import user from '../../assets/user.png'
import './headerButtons.css'


const HeaderButtons = () =>{
    return(
        <div className="header-buttons">
            <div className="create-btn btn-common">
                <img src={plusBtn} className='btn-logo' alt="plus"/>
                <p className="btn-text">Create</p>
            </div>
            <div className="discover-btn btn-common">
                <img src={discover} className='btn-logo' alt="plus"/>
                <p>Discover</p>
            </div>
            <div className="favorites-btn btn-common">
                <img src={heart} className='btn-logo' alt="plus"/>
                <p>Favorites</p>
            </div>
            <div className="login-btn">
                <img src={user} className='btn-logo' alt="plus"/>
                <p className='login-text'>Log In</p>
            </div>
        </div>
    )
}

export default HeaderButtons;