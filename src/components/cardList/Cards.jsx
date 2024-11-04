import React, { useState, useEffect, useContext } from 'react';
import './cards.css';
import Card from '../card/Card';
import { ThemeContext } from '../../context/ThemeContext';

const Cards = () => {
    const [billingType, setBillingType] = useState('monthly');
    const {theme} = useContext(ThemeContext)
    useEffect(() => {
        const savedBillingType = localStorage.getItem('billingType') || 'monthly';
        setBillingType(savedBillingType);
    }, []);

    const handleChangeTypeMonthlyOrYearly = (type) => {
        setBillingType(type);
        localStorage.setItem('billingType', type);
    };

    return (
        <div className='container-cards'>
            <div className='type-month-year'>
                <p 
                    className={`text-type ${billingType === 'monthly' ? 'black-card' : ''}`} 
                    onClick={() => handleChangeTypeMonthlyOrYearly('monthly')}
                >
                    MONTHLY
                </p>
                <p 
                    className={`text-type ${billingType === 'yearly' ? 'black-card' : ''}`} 
                    onClick={() => handleChangeTypeMonthlyOrYearly('yearly')}
                >
                    YEARLY
                </p>
            </div>
            { billingType === 'monthly' ?
           ( <div className='choose-plan'>
                <Card title='PRO' price={19}bestValue={false}/>
                <Card title='BEST VALUE' price={45} 
                    bestValue={true} 
                    shadow='0 0 49px -2px rgba(0, 0, 0, 0.19)' 
                    backgroundColor='#000000DE'
                    height='568px'
                    width='319px'
                    choosePlanBackgroundColor={`${theme === 'dark' ? '#84FFFF': 'rgba(218, 194, 228, 1)'}`}
                    choosePlanTextColor={'rgba(0, 96, 100, 1)'}
                />
                <Card 
                    title='VIP' 
                    price={99}bestValue={false} 
                />
            </div>):
            (<div className='choose-plan yearly-billing'>
                <Card 
                    title='FREE' 
                    price={0}bestValue={false}
                />
                <Card 
                    title='BEST VALUE' 
                    price={10} 
                    bestValue={true} 
                    shadow='0 0 49px -2px rgba(0, 0, 0, 0.19)' 
                    backgroundColor='#000000DE'
                    height='568px'
                    width='319px'
                    choosePlanBackgroundColor={`${theme === 'dark' ? '#84FFFF': 'rgba(218, 194, 228, 1)'}`}
                    choosePlanTextColor={'rgba(0, 96, 100, 1)'}
                    borderColor={theme === 'dark' ? '#84FFFF' :'#DAC2E4'}
                />
                <Card 
                    title='FREE' 
                    price={50}bestValue={false}
                    choosePlanBackgroundColor={`${theme === 'dark' ? '#000000': ''}`}
                    borderColor={theme === 'dark' ? '#000' :'#fff'}
                />
                <Card 
                    title='VIP' 
                    price={99}bestValue={false}
                    choosePlanBackgroundColor={`${theme === 'dark' ? '#000000': ''}`}
                    borderColor={theme === 'dark' ? '#000' :'#fff'}
                />
            </div>)}
        </div>
    )
}
export default Cards;