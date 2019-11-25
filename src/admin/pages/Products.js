import React, { useState, useEffect } from 'react';
import { getProducts } from '../../Api';
const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getAllProducts = async () => {
          try {
            setLoading("true");
            const res = await getProducts();
            console.log('res===>', res)
            setProducts(res);
          } catch (err) {
              console.log('err in fetching producta', err)
            setLoading("null");
          }
        }
        getAllProducts();
    },[]);

    return (
        <div>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">name</th>
                            <th scope="col">mrp</th>
                            <th scope="col">price</th>
                            <th scope="col">category</th>
                            <th scope="col">subcategory</th>
                            <th scope="col">onsale</th>
                            <th scope="col">featured</th>
                            <th scope="col">description</th>
                            <th scope="col">status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products && products.data && products.data.length>0 && 
                        products.data.map((product,i)=>
                            <tr key={i}>
                                <th scope="row">{i}</th>
                                <th scope="col">{product.name}</th>
                                <th scope="col">{product.mrp}</th>
                                <th scope="col">{product.price}</th>
                                <th scope="col">{product.category}</th>
                                <th scope="col">{product.subcategory}</th>
                                <th scope="col">{product.onsale}</th>
                                <th scope="col">{product.featured}</th>
                                <th scope="col">{product.description ? product.description : '-'}</th>
                                <th scope="col">{product.status}</th>
                            </tr>
                        )}
                       
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Products;