import {Link, useParams} from 'react-router-dom';
import products from '../data';

const SingleProduct = () => {
    const {productID} = useParams();

    const product = products.find ((product) => product.id === productID);

    const {image, name} = product;
    
  return (
    <div className='single-product'>
      <img src={image} alt={name}/>
      <h5>{name}</h5>
      <Link to = '/product' >Back to Product</Link>
    </div>
  );
};

export default SingleProduct;
