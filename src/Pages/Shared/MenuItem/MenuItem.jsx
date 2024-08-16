import React from 'react';

const MenuItem = ({item}) => {
    const {name, image, recipe, price} = item;
    return (
        <div className='flex space-x-4'>
            <img style={{borderRadius: '0 200px 200px 200px'}} className='w-[90px] h-[90px]' src={image} alt={name} />
            <div>
                <h3 className='uppercase font-semibold'>{name}</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-600'>${price}</p>
        </div>
    );
};

export default MenuItem;