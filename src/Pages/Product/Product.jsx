
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../axios";
const Product =()=>{
    const params = useParams()
    const [product, setProduct]= useState({})
    
    useEffect(()=> {
        axios.get(`/product/${params.id}`)
        .then((data)=> {
            setProduct(data)

        })

    },[])
    return(
        <div className="product">
            <div className="container">
                <div className="product__content">
                    <div className="product__content-left">
                        <img src={product.image} alt={product.title} />
                    </div>
                    <div className="product__content-right">
                        <h2>{product.title}</h2>
                        <p>{product.descr}</p>
                        <p>{product.price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;