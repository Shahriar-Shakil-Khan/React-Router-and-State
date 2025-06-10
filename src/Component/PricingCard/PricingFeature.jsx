import { SendHorizonal } from 'lucide-react';
import React from 'react';

const PricingFeature = ({feature}) => {
    
    return (
       <p><SendHorizonal></SendHorizonal> {feature}</p> 
    );
};

export default PricingFeature;