import React from 'react';
import PropTypes from 'prop-types'; // Static import  เท่านั้น

function Product({ item }) {
  const productImage = require(`../../assets/${item.imageURL}`);  //  สามารถเลือกค่า่ได้ไม่จำเป็นต้องimport
  return (
    <li className="Products">
      <a href={`/update-product/${item.id}`}>
        <img className="Products__image" src={productImage} alt={item.name} />
        <div className="Products__name">{item.name}</div>
        <small className="Products__type">{item.type}</small>
      </a>
    </li>
  );
}

Product.propTypes = {
  item: PropTypes.object.isRequired
};

export default Product;
