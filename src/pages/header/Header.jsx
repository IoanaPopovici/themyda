import './Header.css'
import LogoThemyda from '../../logoThemyda/LogoThemyda'
import SearchInput from '../../components/search-input/SearchInput'
import HeaderButtons from '../../components/header-buttons/HeaderButtons'
import {useContext} from "react";
import {ThemeContext} from "../../context/ThemeContext";

import themyda from '../../assets/themydaLight.png'
import lineHeader from '../../assets/lineDarkHeader.png'
import wheel from '../../assets/wheel.png'
import {handleThemeChange} from "../../utils/functions";


const Header = () =>{
    const { theme, changeTheme } = useContext(ThemeContext);

    return (
        <>
            {
                theme === 'light' ?
                    <div className="container-header">
                        <div className="header">
                            <LogoThemyda />
                            <SearchInput />
                            <p style={{color :'#000', backgroundColor:'lightblue', cursor:'pointer', borderRadius:'20px', padding:'5px 10px'}}
                               onClick={()=> handleThemeChange(changeTheme, theme)}
                            >Mode</p>
                            <HeaderButtons />
                        </div>
                    </div>
                    :
                    <div className='container-header-dark'>

                        <div className='header-logo-container'>
                            <img src={themyda} alt="themydaLogo" width='227px' height='54px'/>
                        </div>
                        <div className='header-container-links'>
                            <a href="/about">About</a>
                            <a href="/features">Features</a>
                            <a href="/develop">Develop</a>
                            <a href="/community">Community</a>
                            <a href="/blog">Blog</a>
                            <p style={{color :'#000', backgroundColor:'lightblue', cursor:'pointer', borderRadius:'20px', padding:'5px 10px'}}
                                onClick={()=> handleThemeChange(changeTheme, theme)}
                            >Mode</p>
                        </div>
                        <div className='header-container-buttons' style={{position:'relative'}}>
                            <button className='login-button'>LOGIN</button>
                            <button className='register-button'>REGISTER</button>
                            <div className='settings-container'>
                                <div style={{position:'absolute', top:'7.75px', left:'215.25px'}}>
                                    <img style={{backgroundColor:'#FFFFFF1F'}} src={lineHeader} alt='line' width='2px' height='25px'/>
                                </div>
                                <button className='settings-button'>
                                    <img  src={wheel} alt='settings' width='29px' height='29px'/>
                                </button>
                            </div>
                        </div>
                    </div>
            }

        </>
    )
}
export default Header