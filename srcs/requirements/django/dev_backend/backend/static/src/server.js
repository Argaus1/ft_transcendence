const express = require("express");
const { ethers } = require("ethers");
require('dotenv').config(); // Load .env variables

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Function to deploy the contract
async function deployContract() {
    const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545");

    // Use private key from the .env file for security
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
    
    const contractJson = require("../hardhat/artifacts/contracts/ScoreStorage.json");

    // Load the compiled contract ABI and bytecode (you need to have them available)
    const abi = contractJson.abi;
    const bytecode = contractJson.bytecode;

    // Create a ContractFactory for deployment
    const ScoreStorage = new ethers.ContractFactory(abi, bytecode, wallet);

    // Deploy the contract
    const scoreStorage = await ScoreStorage.deploy();

    // Wait for the contract to be mined
    await scoreStorage.deployed();

    console.log(`Contract deployed at: ${scoreStorage.address}`);
    return scoreStorage.address; // Return the deployed contract address
}

// POST endpoint to deploy the contract
app.post("/deploy", async (req, res) => {
    try {
        const contractAddress = await deployContract();
        res.json({ address: contractAddress });
    } catch (error) {
        console.error("Deployment error:", error);
        res.status(500).json({ error: error.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
