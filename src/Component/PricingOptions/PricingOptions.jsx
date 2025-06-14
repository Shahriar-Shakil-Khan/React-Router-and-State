import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';


const PricingOptions = ({pricingPromise}) => {

    const pricingData=use(pricingPromise)
    
    return (
        <div>
            <h2 className='text-5xl'>Get our Membership</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 '>
                {
                   pricingData.map((pricing)=><PricingCard key={pricing.id} pricing={pricing}></PricingCard>) 
                }
            </div>
        </div>
    );
};

export default PricingOptions;