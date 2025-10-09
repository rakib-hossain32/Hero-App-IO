import React from 'react';
import { CircleLoader } from 'react-spinners';

const LoadingSpinner = () => {
    return (
        <div className=' flex flex-col items-center justify-center'>
            <CircleLoader size={200} />
        </div>
    );
};

export default LoadingSpinner;