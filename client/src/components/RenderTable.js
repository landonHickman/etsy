import React from "react";
import { Table, Label } from "semantic-ui-react";

//pass in data i.e. table={data} then it outputs a mapped over array in jsx.
const RenderTable = (props) => {
  const { seller_name, seller_email, products } = props;

  return (
    <>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <Label
          color="black"
          horizontal
          style={{ display: "flex", alignItems: "center", width: '200px', justifyContent: 'center' }}
        >
          <h3 style={{margin: "0px", paddingRight: "10px"}}>{seller_name} </h3>
        </Label>
        <h5 style={{ margin: "0px", paddingTop: "3px" }}>{seller_email}</h5>
      </div>
      <Table fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Item</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Category</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {products.map((p) => (
            <Table.Row key={p.product_id}>
              <Table.Cell>{p.product_name}</Table.Cell>
              <Table.Cell>${p.price}</Table.Cell>
              <Table.Cell>{p.description}</Table.Cell>
              <Table.Cell>{p.category}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </>
  );
};
export default RenderTable;
