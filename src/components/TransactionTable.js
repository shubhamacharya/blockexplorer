import Table from 'react-bootstrap/Table';

function TransactionTable({transactions}) {
    const transactionsRow = []
    transactions.forEach((element,index) => {
        transactionsRow.push(<tr key={element.transactionHash}>
        <td> {index+1} </td>
        <td> {element.transactionHash.slice(0,5)+'......'+element.transactionHash.slice(60)} </td>
        <td> {element.contractAddress ?? '-'} </td>
        <td> {element.from.slice(0,5)+'......'+element.from.slice(30)} </td>
        <td> {element.to.slice(0,10)+'......'+element.to.slice(30)} </td>
      </tr>)
    });

    if (transactionsRow != null) {
        return (
        <Table striped bordered hover size="sm" responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Hash</th>
            <th>Contract Address</th>
            <th>From</th>
            <th>To</th>
          </tr>
        </thead>
        <tbody>
          {transactionsRow}
        </tbody>
      </Table>
      );  
    }
  
}

export default TransactionTable;