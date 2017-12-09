import React from 'react';

const Catalog = (props) => {
  return (
    <div>
      <p> Product Name: &nbsp;
      {props.products ? props.products[4].name : <h1>sloading</h1>}
      </p>
    </div>
  )
}

export default Catalog;