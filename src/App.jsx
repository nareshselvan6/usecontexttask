import React, { createContext, useState } from 'react';
import Card from './Components/Card';
import iphone_9 from "../images/iphone9.jpg"
import iphonex from "../images/iphonex.jpg"
import samsung from "../images/samsung9.jpg"
import OPPOF19 from "../images/oppof19.jpg"
import Huawei from "../images/Huawei_P30.jpg"

export const mycontext=createContext('')
const App = () => {

  let products=[
      {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: "$549",
        discountPercentage: "12.96%",
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        image:iphone_9,
        discountprice:"$69",
        quantity:1,
        finalprice:480,
        // totalprice:

    },
      {
        id: 2,
        title: "iPhone X",
        description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        price: "$899",
        discountPercentage: "17.94%",
        rating: 4.44,
        stock: 34,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        image: iphonex,
        discountprice:"$161",
        quantity:1,
        finalprice:738,
        // totalprice:

    },
      {
        id: 3,
        title: "Samsung Universe 9",
        description: "Samsung's new variant which goes beyond Galaxy to the Universe",
        price: "$1249",
        discountPercentage: "15.46%",
        rating: 4.09,
        stock: 36,
        brand: "Samsung",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        image: samsung,
        discountprice:"$193",
        quantity:1,
        finalprice:1056,
        // totalprice:
    },

      {
        id: 4,
        title: "OPPOF19",
        description: "OPPO F19 is officially announced on April 2021.",
        price: "$280",
        discountPercentage: "17.91%",
        rating: 4.3,
        stock: 123,
        brand: "OPPO",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        image: OPPOF19,
        discountprice:"$50",
        quantity:1,
        finalprice:230,
        // totalprice:
    },{
            id: 5,
            title: "Huawei P30",
            description: "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
            price: "$499",
            discountPercentage: "10.58%",
            rating: 4.09,
            stock: 32,
            brand: "Huawei",
            category: "smartphones",
            thumbnail: "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
            image:Huawei,
            discountprice:"$53",
            quantity:1,
            finalprice:446,
            // totalprice:
    }
  ]
  const [data,setData]=useState(products)
  return (
    <>
      <mycontext.Provider value={[data,setData]}>
        <Card/>
      </mycontext.Provider>
    </>
  );
};

export default App;