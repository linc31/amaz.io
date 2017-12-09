import React from 'react';

const Catalog = (props) => {

  return (
    <div>
      Product Name: &nbsp;
      {props.products 
      ? 
      props.products.map((product, idx) => <li key={idx}>{product.name}</li>) 
      : 
      <h1>sloading</h1>}
    </div>
  )
}

export default Catalog;