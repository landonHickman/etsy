import React from "react";
import {Table} from "semantic-ui-react";

const RenderCategoryItems = (props) => {
  const {categoryItems} = props
      
  return (
    <>
      <Table fixed>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Item</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {categoryItems.map(i => {
            return (
              <Table.Row key={i.id}>
                <Table.Cell>{i.name}</Table.Cell>
                <Table.Cell>${i.price}</Table.Cell>
                <Table.Cell>{i.description}</Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
      </Table>
    </>
  );
};
export default RenderCategoryItems;