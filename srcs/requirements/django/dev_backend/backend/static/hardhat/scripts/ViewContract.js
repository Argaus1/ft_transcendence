const { ethers } = require('ethers');
const fs = require('fs');
const path = require('path');

// Replace with your contract's ABI and deployed address
const contractAddress = '0x8Ca63fc442524c5AD4297680b5144C2929B01AFd';

// Fetch the ABI from the local file
function fetchABI() {
    const abiPath = path.join(__dirname, '../artifacts/contracts/ScoreContract.sol/ScoreContract.json');
    const data = JSON.parse(fs.readFileSync(abiPath, 'utf8'));
    return data.abi;
}

// Main function to interact with the contract
async function main() {
    // Connect to Ethereum using Infura or Alchemy
    const provider = new ethers.providers.InfuraProvider('sepolia', '61d1075ff12549fda15f68b38cf765ea');
    // Or using Alchemy
    // const provider = new ethers.providers.AlchemyProvider('sepolia', 'YOUR_ALCHEMY_API_KEY');

    // Fetch the ABI
    const contractABI = fetchABI();

    // Create contract instance
    const scoreContract = new ethers.Contract(contractAddress, contractABI, provider);

    // Call getScores function
    try {
        const scores = await scoreContract.getScores();
        console.log('Scores:', scores);
    } catch (error) {
        console.error('Error fetching scores:', error);
    }
}

// Call the main function
main();
