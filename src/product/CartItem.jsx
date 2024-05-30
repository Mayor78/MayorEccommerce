import React, { useContext } from 'react';
import HomeContext from '../context/HomeContext';
import "../style/new.css"


const CartItem = ({ data }) => {
    const { removeFromCart, addToCart } = useContext(HomeContext);
    const imge ={
        width: '100px',
        height: '100px',
        objectFit: 'cover',
        objectPosition: 'center',
        borderRadius: '10px'
    }
    return (
        <div className="cart-item mb-2">
            <div className=' cart d-sm-inline-flex d-md-flex bg-body-secondary rounded shadow-lg '> 
                <div className='d-flex gap-4 text-black '>
               
                <img src={data.image} alt={data.name}  style={imge}/>
                <h4>{data.name}</h4>
                
                </div>
                
                <div className='d-flex mt-5 my-3 gap-2'>

                <p>${data.price}</p>
               
                <div>
               
                    <div className='d-flex gap-2 border'>
                        <button className='text-white btn btn-danger' onClick={() => removeFromCart(data.id)} >-</button>
                        <h4 className='fs-4 '>{data.quantity}</h4>
                        <button className='text-white btn btn-success' onClick={() => addToCart(data.id)} >+ </button>
                       
                    </div>

                    </div>
                    </div>
                    <div>
                        {/* <h4>subtotal</h4> */}
                        {/* <p>${parseFloat (data.price) * parseInt(data.quantity)}</p> */}
                    </div>
    
               
            </div>
            
            <div>
                
               
                
                
                
            </div>
        </div>
    );
};

export default CartItem;
