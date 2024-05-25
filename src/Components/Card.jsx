import React, { useContext, useEffect, useState } from 'react';
import { mycontext } from '../App';
import "../Components/Card.css"

const Card = () => {
    const [data,setData]=useContext(mycontext)
    const [value ,setValue] = useState(data)
    const [changed,setChanged] = useState(false)
     function add(e,ope){
        if(ope === "plus"){
         value[e].quantity +=1
            setChanged(true)
      
        }
        else{
            if(value[e].quantity < 1) return;
            value[e].quantity -=1
            setChanged(true)  
        }
    }
    useEffect(()=>{
        setValue(value)
        setChanged(false)
    },[changed])
    return (
        <div>
            {data?.map((element,index)=>{
                return(
                    <div key={element.id}>
                        <div className='cart'>
                        <div className='products'>
                        <div className='productimage'>
                            <img src={element.image}/>
                            </div> 
                           
                            <div className='productdetails'>
                            <div className='img_price'>
                           <div className='product_img_text'>

                            
                            <h3>{element.title}</h3>
                           
                            <div className='incdec'>
                            
                            <button type='button' className='minus' onClick={()=> add(index,"remove")}>-</button>
                            <p className='quantity'> {element.quantity} </p>
                            <button type='button' className='plus' onClick={()=> add(index,"plus")}>+</button>
                            <p className='qprice'><span>{element.price}</span></p>
                            </div>
                            </div>
</div>
                           
                            <p><span>Brand :</span> {element.brand}</p>
                            <p><span >Description : </span>{element.description}</p>
                            <p><span>In Stock : </span><span className='offer'>{element.stock}</span></p>
                            <p><span>Rating : </span>{element.rating}</p>
                            <div className='remove'>
                            <p><span>Discount Price : </span><span className='offer'>{element.discountPercentage}</span></p>
                            <button type='button' className='removebtn rem' onClick={()=>{value[index].quantity=1,setChanged(true)}}>Remove</button>
                            </div>
                            <hr/>
                            <p className="price">Price Per Item :<span > {element.price}</span></p>
                            <p className="price">Discount Amount : <span className='offer'>{element.discountprice}</span> </p>
                            <p className="price">Final Price : <span className='final'> ${element.finalprice}</span></p>
                            <p className="price">Total Price :<span className='total'>${element.quantity*element.finalprice}</span> </p>
                            <div className='pay'>
                                
                            <button type='button' className='paynow'>Pay now</button>
                            </div>
                    </div>
                    </div>
                    </div>
                    </div>
                )
            })}
        </div>
    );
};

export default Card;