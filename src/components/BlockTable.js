import Table from 'react-bootstrap/Table';

function BlockTable({blocks,getTransaction}) {
    console.log(blocks);
    const blocksRow = []

    blocks.forEach((element,index) => {
      blocksRow.push(<tr key={element.hash}>
        <td> 
          <input type='radio'
            id="toggle-check"
            name="radio1"
            onClick={(e) => {
              getTransaction(blocks[index].hash);
            }
          }
          >
          </input>
        </td>
        <td> {element.number} </td>
        <td> {element.hash.slice(0,5)+'......'+element.hash.slice(60)} </td>
        <td> {element.parentHash.slice(0,5)+'......'+element.parentHash.slice(60)} </td>
        <td> {element.miner.slice(0,10)+'......'+element.miner.slice(30)} </td>
        <td> {element.transactions.length} </td>
      </tr>)
    });

    if (blocksRow != null) {
        return (
        <Table striped bordered hover size="sm" responsive="sm">
        <thead>
          <tr>
            <th>Get Transactions</th>
            <th>Block Number</th>
            <th>Hash</th>
            <th>Parent Hash</th>
            <th>Miner</th>
            <th>Transactions</th>
          </tr>
        </thead>
        <tbody>
          {blocksRow}
        </tbody>
      </Table>
      );  
    }
  
}

export default BlockTable;