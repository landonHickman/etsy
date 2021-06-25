import React from "react";
import {Table, Header, Icon} from "semantic-ui-react";

const FindProductItems = (props) => {
  const {items} = props
    if(items.length === 0){
      return (
        <div style={{textAlign: 'center'}}>
          <Header as='h2' icon>
          <Icon name='ban' color='red'/>
            No Items
          </Header>
        </div>
      )
    }
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
          {items.map(i => {
            return (
              <Table.Row key={i.id}>
                <Table.Cell>{i.item}</Table.Cell>
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
export default FindProductItems;