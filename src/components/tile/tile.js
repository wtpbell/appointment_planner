import React from 'react';

const Tile = ({ name, description }) => {
    return (
        <>
            <p className='contact-name'>{ name }</p>
            {Object.values(description).map((value, index) => (
                <p key={index} className='description'>{ value }</p>
            ))}
        </>
    )
}

export default Tile;
