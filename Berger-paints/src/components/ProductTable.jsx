// import { tr } from "date-fns/locale";
import React from "react";
import "../CSS/ProductTable.css"
import { tr } from "date-fns/locale";
const ProductData=[
    {
       id:"123A",
       details:[
        {
            qty:10,
            price:2000,
            cnn:700,
        },
        {
            qty:20,
            price:3800,
            cnn:1300,

        },
        {  
            qty:30,
            price:5800,
            cnn:2100,


        }

       ]
       
    },
    
    {
        id:"456B",
        details:[
            {
                qty:10,
                price:3000,
                cnn:750,

            },
            {
                qty:20,
                price:5900,
                cnn:1400,
        

            }
        ]
        
    },
    {
        id:"789C",
        details:[
            {
                qty:10,
                price:3000,
                cnn:700,

            },
        ]
        
    },
]
const ProductTable=()=>{
    
    return(
        <div>
        <table className=" border-double border-[1px] p-4 w-[80vw] mt-20 mx-[5vw] text-center text-blue-300">
            <tr>
                <th>
                    Product ID
                </th>
                <th>
                     Quantity
                </th>
                <th>
                    Price

                </th>
                <th>
                    CNN

                </th>
            </tr>
            {ProductData.map((item)=>(
                <>
                <tr >
                    <td rowSpan={item.details.length} >
                        {item.id}


                    </td>

                    <td>
                        {item.details[0].qty}
                    </td>
                    <td>
                        {item.details[0].price}

                    </td>
                    <td>

                        {item.details[0].cnn}
                    </td>

                </tr>
                {item.details.map((it,idx)=>{
                    if (idx!=0) return(
                        <tr>
                        <td>
                            {it.qty}
                        </td>
                        <td>
                            {it.price}
                        </td>
                        <td>
                            {it.cnn}
                        </td>
                    </tr>

                    )

                    

                })}
                </>


                
            ))}

        </table>
        </div>
    )
}
export default ProductTable;