import React from 'react';

export const FecharIcon = (props) => {
    return (
        <svg viewBox="0 0 53 53" fill="none" {...props}>
            <path
                d="M26.5,4A22.5,22.5,0,1,1,4,26.5,22.52,22.52,0,0,1,26.5,4m0-4A26.5,26.5,0,1,0,53,26.5,26.49,26.49,0,0,0,26.5,0Z"
            />
            <rect
                x="24" 
                y="10" 
                width="5" 
                height="33" 
                transform="translate(-10.98 26.5) rotate(-45)"
            />
            <rect
                x="24" 
                y="10" 
                width="5" 
                height="33" 
                transform="translate(26.5 63.98) rotate(-135)"
            />
        </svg>
    );
}