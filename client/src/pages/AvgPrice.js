import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

const AvgPrice = () => {
  const [sellerNames , setSellerNames] = useState([])
  const [avgPrice, setAvgPrice] = useState([])

  useEffect(() => {
    getSellers();
  }, []);

  const getSellers = async () => {
    try {
      let res = await axios.get("/api/sellers/avg_price");
      normalizeSellers(res.data);
    } catch(err){
      console.log(err);
      console.log(err.response);
    }
  };

  const normalizeSellers = (norm) => {
    const name = norm.map((n) => {
      return n.name 
    });
    setSellerNames(name)
    const avg = norm.map((n) => {
      return n.average_price
    })
    setAvgPrice(avg)
  };

  const data = {
    labels: sellerNames,
    datasets: [
      {
        label: "Average Price",
        data: avgPrice,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: 
        {
          ticks: {
            callback: function(value){
              return '$' + value;
            }
          },
        },
    },
  };

  return (
    <div>
      <h1>Average Price of Seller Product</h1>
      <Bar data={data} options={options} />
    </div>
  );
};
export default AvgPrice;
