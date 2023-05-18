import React from 'react'
import { useEffect, useState } from 'react';
import * as utils from '../utils.js'
import BlockTable from './BlockTable';
import TransactionTable from './TransactionTable';

function Home() {
  const [blockNumber, setBlockNumber] = useState('');
  const [lastTenBlocks, setLastTenBlocks] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    utils.getBlockNumber().then(numb => {
      setBlockNumber(numb);
    });

    utils.getLastTenBlocks().then(prevBlocks => {
      setLastTenBlocks(prevBlocks);
    })

  },[]);

  function getTransaction(blockHash) {
    utils.getTransactionReceipts(blockHash).then(result => {
      setTransactions(result.receipts.splice(0,10));
    });
  }
  return (
    <div>
        <BlockTable blocks={lastTenBlocks} getTransaction={getTransaction}/>
        <TransactionTable transactions={transactions}/>
    </div>
  )
}

export default Home