import React, { useContext, useEffect, useState } from 'react';
import { mycontext } from '../App';
import "../Components/Card.css"

const Card = () => {
    const [data,setData]=useContext(mycontext)
    const [value ,setValue] = useState(data)
    const [changed,setChanged] = useState(false)

    const [totalqty, setTotalqty] = useState(0);
    const [totalcost, setTotalcost] = useState(0);


     function add(e,ope){
        if(ope === "plus"){
         value[e].quantity +=1
            setChanged(true)
      
        }
        else{
            if(value[e].quantity <= 1) return;
            value[e].quantity -=1
            setChanged(true)  
        }
    }


    const remove=(id)=>{
        const prevData = data?.filter(product => product.id !== id)
       
        setData(prevData);  
        setChanged(true)  

    }

    useEffect(()=>{

        const totalqty = data?.reduce((acc, product) => acc + product.quantity , 0);
        setTotalqty(totalqty);

        const totalcost = data?.reduce((acc, product) => acc + product.quantity*  product.finalprice, 0);
        setTotalcost(totalcost);

        setValue(value)
        setChanged(false)

    },[changed])
    return (
        <div>
             <div className='totalvalueofcart'>
                <div className='totalcart'>
                    <h1>Totalquantity:{totalqty}</h1>
                    <h1>TotalPrice:{totalcost}</h1>
                </div>
                </div>
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
                            <button type='button' className='removebtn rem' onClick={()=>{remove(element.id)}}>Remove</button>
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