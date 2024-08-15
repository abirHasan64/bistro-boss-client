import React from 'react';

const SectionTittle = ({heading, subHeading}) => {
    return (
        <div className='md:w-3/12 mx-auto my-8'>
            <p className='text-yellow-500  mb-2 text-center font-semibold text-lg'>---{subHeading}---</p>
            <h3 className='text-3xl text-center uppercase border-y-4 py-4'>{heading}</h3>
            
        </div>
    );
};

export default SectionTittle;