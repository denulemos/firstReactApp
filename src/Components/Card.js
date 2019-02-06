import React from 'react';

const Card = ({thumbnail, title, description, price}) =>(
<div className="d-flex flex-row bg-light p-4">
<img className='' src={thumbnail} alt="Card" />
<div className="pl-4">
<h5 className=''>{title}</h5>
<p className=''>{description}</p>
<p className=''>${price}</p>
</div></div>
   
   );
export default Card;