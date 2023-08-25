import React from 'react';

function ProductDescription({name, description}) {
    return (
        <div>
        
        <p>{name}</p>
        <p><i>{description}</i></p>
        </div>
    );
}

export default ProductDescription;