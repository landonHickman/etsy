import React from "react";
import { Table } from "semantic-ui-react";

//pass in data i.e. table={data} then it outputs a mapped over array in jsx.
const RenderTable = ({ table }) => {
  console.log("table", table);

  

  const renderT = () => {
    return table.map((d) => {
      
        return (
          <div key={d.product_id}>
            <h4>{d.seller_name + ` ` + d.seller_email}</h4>
            <Table fixed>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Description</Table.HeaderCell>
                  <Table.HeaderCell>Price</Table.HeaderCell>
                  <Table.HeaderCell>Category</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
    
              <Table.Body>
                <Table.Row>
                  <Table.Cell>{d.product_name}</Table.Cell>
                  <Table.Cell>{d.description}</Table.Cell>
                  <Table.Cell>{d.price} </Table.Cell>
                  <Table.Cell>{d.category} </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        );
    });
  }
  
  return (
    <div>
      {renderT()}
    </div>
  )
  
};
export default RenderTable;
