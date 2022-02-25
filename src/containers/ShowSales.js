import React from "react";
import Sale from "../components/Sales";
import { DataSales } from "../Helper";

export default function ShowSales(){
  return(
    <div className="container-sales">
      {     
        DataSales().map(({image, description, client, price},i) =>{
          return <Sale key={i} description={description} image={image} client={client} price={price}/>;
        })
      }
    </div>
  );
}

