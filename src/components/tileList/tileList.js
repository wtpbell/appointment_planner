import React from 'react';
import Tile from './components/tile/Tile';

const TileList = ({contacts}) => {
    return (
        <>
            {contacts.map((contact, index) => (
                <Tile key={index} name={contact.name} description={contact.description} />
            ))}
        </>
    )
}

export default TileList;