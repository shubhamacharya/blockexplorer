import { Alchemy, Network } from 'alchemy-sdk';

const settings = {
    apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET,
};
const alchemy = new Alchemy(settings);

async function getBlockNumber() {
    const blockNumber = await alchemy.core.getBlockNumber();
    return blockNumber
}

async function getLastTenBlocks() {
    let lastTenBlocks = [];
    const blockNumber = await alchemy.core.getBlockNumber();
    for (let index = blockNumber; index > blockNumber-10; index--) {
        lastTenBlocks.push(await alchemy.core.getBlock(index));
    }
    return lastTenBlocks;
}

async function getTransactionReceipts(blockHash){
    return await alchemy.core.getTransactionReceipts({blockHash})
}

async function getTransactionReceiptByHash(transactionHash){
    return await alchemy.core.getTransactionReceipt(transactionHash);
}

export { getBlockNumber, 
         getLastTenBlocks, 
         getTransactionReceipts, 
         getTransactionReceiptByHash
        }