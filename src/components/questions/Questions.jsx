import './questions.css'
import group from '../../assets/group.png'
import arrow from '../../assets/arrow.png'
import chevron from '../../assets/chevron.png'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

const Questions = () =>{
    const {theme} = useContext(ThemeContext)
    return(
        <div className='container-questions'>
            <div className='left-box'>
                <div className='frequently-ask'>
                    <div className='frequently-box'>
                        <p className={`frequently-text ${theme === 'dark' ? 'dark-mode-text' : ''}`}>Frequently asked questions</p>
                        <div style={{marginTop: '25px'}}>
                            <img src={group} alt='group' />
                        </div>
                    </div>
                
                </div>
                <div className='visitFAQ visitCommon'>
                    <div className='visit-box'>
                        <p>Visit FAQ center</p>
                    </div>
                    <div className='arrow-ask'>
                        <img src={arrow} alt="arrow"/>
                    </div>
                </div>
                <div className='visitBlog visitCommon'>
                    <div className='visit-box'>
                        <p>Visit our blog</p>
                    </div>
                        <div className='arrow-ask'>
                            <img src={arrow} alt="arrow"/>
                        </div>
                    </div>
                <div className='askHelp visitCommon'>
                    <div className='visit-box'>
                        <p>Ask for more help</p>
                    </div>
                    <div className='arrow-ask'>
                        <img src={arrow} alt="arrow"/>
                    </div>
                </div>
            </div>
            <div className='right-box'>
                <div className='container-accordion'>
                    <div className='accordion'>
                        <div className='accordion-title-container'>
                            <p className='accordion-title'>Pellentesque ac bibendum tortor?</p>
                            <div>
                                <img src={chevron} alt="arrow"/>
                            </div>
                        </div>
                        <div>
                            <p className='accordion-description'>Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor.</p>
                        </div>
                    </div>
                </div>
                <div className='closed-accordion'>
                    <p className='accordion-title'>Pellentesque ac bibendum tortor?</p>
                    <div>
                        <img src={chevron} alt="arrow"/>
                    </div>
                </div>
                <div className='closed-accordion'>
                    <p className='accordion-title'>Pellentesque ac bibendum tortor?</p>
                    <div>
                        <img src={chevron} alt="arrow"/>
                    </div>
                </div>
                <div className='closed-accordion'>
                    <p className='accordion-title'>Pellentesque ac bibendum tortor?</p>
                    <div>
                        <img src={chevron} alt="arrow"/>
                    </div>
                </div>
                <div className='closed-accordion'>
                    <p className='accordion-title'>Pellentesque ac bibendum tortor?</p>
                    <div>
                        <img src={chevron} alt="arrow"/>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Questions;