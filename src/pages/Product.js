import {Link, Outlet} from 'react-router-dom';
import products from '../data';

const Product = () => {
    return (
        <section className='product'>
            <h2>Product</h2>
            <div className='product'>{products.map((product) => {
                return (
                    <article key = {product.id}>
                        <h5>{product.name}</h5>
                        <Link className='btn' to={`/product/${product.id}`}>More Info</Link>
                    </article>
                )
            })}</div>
        </section>
    )
};
export default Product;