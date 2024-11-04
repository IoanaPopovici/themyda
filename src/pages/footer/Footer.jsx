import React, { useContext, useState } from 'react';
import './footer.css';
import LogoThemyda from '../../logoThemyda/LogoThemyda';
import getApp from '../../assets/getApp.png';
import footerQr from '../../assets/footerQr.png';
import listLinks from '../../assets/listLinks.png';
import { ThemeContext } from '../../context/ThemeContext';
import themydaLight from '../../assets/themydaLight.png';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import linkedin from '../../assets/linkedin.png';
import twiteer from '../../assets/twiteer.png';
import androidGlobe from '../../assets/androidGlobe.png';
import chevron from '../../assets/chevron.png';

const Footer = () => {
    const { theme } = useContext(ThemeContext);
    const [selectedLanguage, setSelectedLanguage] = useState('en');

    const languages = [
        { value: 'En', label: 'English' },
        { value: 'Ro', label: 'Romanian' },
        { value: 'Fr', label: 'French' },
        { value: 'Es', label: 'Spanish' },
    ];

    const handleLanguageChange = (event) => {
        const language = event.target.value;
        setSelectedLanguage(language);
        console.log(`Selected language: ${language}`);
    };

    return (
        <>
            {
                theme === 'light' ?
                    <div className='container-footer'>
                        <div className='themyda-get-app'>
                            <LogoThemyda />
                            <div><img src={getApp} alt="get-app" /></div>
                        </div>
                        <div className='text-and-qr'>
                            <p className='footer-text'>
                                Download now and discover events or activities near you, create new memories and make new connections.
                            </p>
                            <div>
                                <img src={footerQr} alt="footerQr" />
                            </div>
                        </div>
                        <div className='footer-links'>
                            <p>About us</p>
                            <p>Blog</p>
                            <p>Help</p>
                            <p>Privacy & Policy</p>
                            <p>Terms of use</p>
                        </div>
                        <div className='rights-reserved'>
                            <p>© 2024 Themyda. All rights reserved.</p>
                            <div>
                                <img src={listLinks} alt='listLinks' />
                            </div>
                        </div>
                    </div>
                    :
                    <div className='container-footer-dark-mode'>
                        <div className='container-footer-logo-boxes'>
                            <div className='themyda-logo-dark-box'>
                                <div className='themyda-container'>
                                    <img src={themydaLight} alt="themydaLogo" width="227px" height="54px" />
                                </div>
                                <div className='container-text-footer-logo'>
                                    <p className='themyda-footer-text'>Nam posuere accumsan porta. Integer id orci sed ante tincidunt tincidunt sit amet sed libero.</p>
                                    <p className='themyda-footer-original-text'>© Imajin Theme 2023</p>
                                </div>
                            </div>
                            <div className='footer-boxes'>
                                <div className='footer-single-box box-company'>
                                    <h4>Company</h4>
                                    <div className='footer-box-text'>
                                        <p>Donec dignissim</p>
                                        <p>Curabitur egestas</p>
                                        <p>Nam posuere</p>
                                        <p>Aenean facilisis</p>
                                    </div>
                                </div>
                                <div className='footer-single-box box-services'>
                                    <h4>Services</h4>
                                    <div className='footer-box-text'>
                                        <p>Cras convallis</p>
                                        <p>Vestibulum faucibus</p>
                                        <p>Quisque lacinia purus</p>
                                        <p>Aliquam nec ex</p>
                                    </div>
                                </div>
                                <div className='footer-single-box box-resources'>
                                    <h4>Resources</h4>
                                    <div className='footer-box-text box-resources-text'>
                                        <p>Suspendisse porttitor</p>
                                        <p>Nam posuere</p>
                                        <p>Curabitur egestas </p>
                                    </div>
                                </div>
                            </div>
                            <div className='footer-links-language'>
                                <div className='footer-links'>
                                    <div>
                                        <img src={facebook} style={{ width: '37.5px', height: '37.5px' }} alt='linkLogo' />
                                    </div>
                                    <div>
                                        <img src={twiteer} style={{ width: '37.5px', height: '37.5px' }} alt='linkLogo' />

                                    </div>
                                    <div>
                                    <   img src={linkedin} style={{ width: '37.5px', height: '37.5px' }} alt='linkLogo' />
                                    </div>
                                    <div>
                                        <img src={instagram} style={{ width: '37.5px', height: '37.5px' }} alt='linkLogo' />
                                    </div>
                                </div>
                                <div className='footer-language'>
                                    <img src={androidGlobe} alt="Globe Icon" style={{ width: '19.5px', height: '19.5px' }} />
                                    <select className='select-language-dw' value={selectedLanguage} onChange={handleLanguageChange}>
                                        {languages.map((lang) => (
                                            <option key={lang.value} value={lang.value}>
                                                {lang.label} - {lang.value}
                                            </option>
                                        ))}
                                    </select>
                                    <img className='chevron' src={chevron} alt='chevron' style={{width: '15px', height:'8.48px', cursor: 'pointer' }}
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
            }
        </>
    );
}

export default Footer;

