import React from 'react';
import Card from './Card';

function SearchList({filteredBrands}) {

    const filtered=filteredBrands.map(brand => <Card Key={brand.id} brand={brand} /> );
    return (<>
            {filtered} 
            </>
    );
}

export default SearchList
 