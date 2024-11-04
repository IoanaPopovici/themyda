import './pricing.css'
import group from '../../assets/group.png'
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react'
const Pricing = () =>{
    const { theme } = useContext(ThemeContext);
    return(
        <>
            <div className="container-pricing">
                <h1 className={`pricing-text ${theme === 'dark' ? 'dark-mode-text':''}`}>Pricing and Plan</h1>
                <img src={group} alt="pricing-image" className='pricing-img'/>
            </div>
            
            <div className='pricing-description'>
                <p className={`pricing-description-text ${theme === 'dark' ? 'dark-mode-text':''}`}>Donec dignissim, odio ac imperdiet luctus, ante nisl accumsan justo, et venenatis ante metus pellentesque sem.</p>
            </div>
        </>
    )
}
export default Pricing;