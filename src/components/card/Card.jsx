import './card.css'
import line from '../../assets/line.png'
import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'


const Card = ({title, price, bestValue,backgroundColor,
    height, shadow,choosePlanBackgroundColor,
    choosePlanTextColor,width, borderColor}) =>{
        const {theme} = useContext(ThemeContext)
    return(
        <>
        {
            !bestValue ? 
            <>
                <div className='card'>
                <div className='type-subscribe'>{title}</div>
                <div className='dollar-price-container'>
                    $
                </div>
                <div>
                    <p className='price-text'>{price}</p>
                </div>
                <div className='card-price-description'>
                    <p className='card-price-options'>Nam sollicitudin dignissim</p>
                    <img src={line} alt="line-between-options" style={{marginBottom:'10px'}}/>
                    <p className='card-price-options'>Cras convallis lacus</p>
                    <img src={line} alt="line-between-options" style={{marginBottom:'10px'}}/>
                    <p className='card-price-options'>Quisque ut metus</p>
                    <img src={line} alt="line-between-options" style={{marginBottom:'10px'}}/>
                    <p className='card-price-options'>Vivamus sit amet</p>
                    <img src={line} alt="line-between-options" style={{marginBottom:'10px'}}/>
                    <p className='card-price-options'>Cras convallis lacus orci</p>
                </div>
                <div className='last-line-price'></div>
                <div className='last-description-card'>
                    <p className='last-description-card-text'>
                        Interdum et malesuada fames ac ante ipsum primis in faucibus.
                    </p>
                </div>
                <div className='choose-plan-card' style={{backgroundColor: choosePlanBackgroundColor, borderRadius: theme === 'dark' ? '39px' : '10px', borderColor: borderColor}}>
                    <p className='choose-plan-card-text'>CHOOSE PLAN</p>
                </div>
                </div>
        </> :
        <div className='card' style={{backgroundColor: backgroundColor, height: height, boxShadow: shadow,width:{width} }}>
            <div className='type-subscribe-bestValue'>
                
                <div className='bestValue-and-Price'>
                <p>{title}</p>
                <p className='price-text'>{price}</p>
                </div>
                <div className='dollar-price-container-bestValue'>
                $
            </div>
            </div>
            <div className='card-price-description-bestValue'>
                <p className='card-price-options'>Nam sollicitudin dignissim</p>
                <img src={line} alt="line-between-options" style={{marginBottom:'10px'}}/>
                <p className='card-price-options'>Cras convallis lacus</p>
                <img src={line} alt="line-between-options" style={{marginBottom:'10px'}}/>
                <p className='card-price-options'>Quisque ut metus</p>
                <img src={line} alt="line-between-options" style={{marginBottom:'10px'}}/>
                <p className='card-price-options'>Vivamus sit amet</p>
                <img src={line} alt="line-between-options" style={{marginBottom:'10px'}}/>
                <p className='card-price-options'>Cras convallis lacus orci</p>
            </div>
            <div className='last-line-price-bestValue'></div>
            <div className='last-description-card'>
                <p className='last-description-card-text'>
                    Interdum et malesuada fames ac ante ipsum primis in faucibus.
                </p>
            </div>
            <div className='choose-plan-card-bestValue' style={{backgroundColor: choosePlanBackgroundColor, borderRadius: theme === 'dark' ? '39px' : '10px'}}>
                <p className='choose-plan-card-text' style={{color: choosePlanTextColor}}>CHOOSE PLAN</p>
            </div>
        </div>
        }
        </>
    )
}
export default Card