import React from 'react';
import Card from './Card';

const Container = props => 

<div className="container h-100 mb-2">
{props.products.map(item =>(
<div className = "w-100 p-4">
<Card
 title={item.title}
 thumbnail ={item.thumbnail}
 price={item.price}
 description={item.description}
 />

</div>
))}
</div>
 export default Container;
