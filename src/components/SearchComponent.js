import { React, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

import { getTransactionReceiptByHash } from '../utils';
import { alignPropType } from 'react-bootstrap/esm/types';

function SearchComponent() {
const [txHash, setHash] = useState('');
const [transaction, setTransaction] = useState({});

function handleSearch(event) {
    if(txHash)
    {
       getTransactionReceiptByHash(txHash).then(result => {
        setTransaction(result);
       });
       console.log(transaction);
    }
}

return (
<div>
    <Form.Label htmlFor="inputPassword5">Transaction Hash</Form.Label>
    <Form.Control
    type="text"
    id="transactionHash"
    aria-describedby="transactionHashInp"
    onChange={e => setHash(e.target.value)}
    />
    <Form.Text id="transactionHashInp" >
    </Form.Text>
    <Button variant="primary" onClick={handleSearch}>Get Info</Button>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Transaction Information</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Transaction Index : {transaction.transactionIndex}</ListGroup.Item>
        <ListGroup.Item>To : {transaction.to}</ListGroup.Item>
        <ListGroup.Item>From : {transaction.from}</ListGroup.Item>
        <ListGroup.Item>Block Number : {transaction.blockNumber}</ListGroup.Item>
        <ListGroup.Item>Block Hash : {transaction.blockHash}</ListGroup.Item>
      </ListGroup>
    </Card>

</div>
)
}

export default SearchComponent