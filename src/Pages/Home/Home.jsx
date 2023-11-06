import { Link } from "react-router-dom";
import axios from "../../axios";
import React, { useEffect, useState } from "react";
const Home =()=>{
    const [product, setProduct]= useState([])
    useEffect(()=>{
        axios.get('/product')
        .then(({data})=>{
            setProduct(data)
        })
    },[])
    return(
        <div className="home">
          <div className="container">
             <div className="home__content">
            {
                product.map((item)=>(
                    <div className="home__cart">
                        <Link style={{color:'black'}} to={`/product/${item.id}`}>
                            <img className="home__img" src={item.image} alt=""/>
                            <h2>{item.title}</h2>
                            <p>{item.price}</p>
                            <span>{item.descr}</span>
                        </Link>
                    </div>

                ))
            }
          </div>
          </div>
        </div>
    );
};

export default Home;