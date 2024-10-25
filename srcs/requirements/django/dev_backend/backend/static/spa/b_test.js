import { ethers } from 'https://cdn.jsdelivr.net/npm/ethers@5.7.2/dist/ethers.esm.min.js';
import { Page } from '../src/pages.js';

const contractAddress = '0x8Ca63fc442524c5AD4297680b5144C2929B01AFd';

const contractABI = [
	{
		"inputs": [],
		"name": "getScores",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "user1",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "score1",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "user2",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "score2",
						"type": "uint256"
					}
				],
				"internalType": "struct ScoreContract.Score[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "scores",
		"outputs": [
			{
				"internalType": "string",
				"name": "user1",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "score1",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "user2",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "score2",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_user1",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_score1",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_user2",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_score2",
				"type": "uint256"
			}
		],
		"name": "submitScore",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	}
];

export class Btest extends Page {
    constructor() {
        super();
        this.scoreContract = null; // Will be initialized later
        this.template = `
            <h1>B Test Page</h1>
            <form id="score-form1">
                <label for="user1">User 1:</label>
                <input type="text" id="user1" name="user1" required>
                <label for="score1">Score 1:</label>
                <input type="number" id="score1" name="score1" required>
                <br>
                <label for="user2">User 2:</label>
                <input type="text" id="user2" name="user2" required>
                <label for="score2">Score 2:</label>
                <input type="number" id="score2" name="score2" required>
                <br>
                <button type="submit">Submit Scores</button>
            </form>
            <p id="feedback"></p>
        `;
    }
    
    render() {
        super.render(); // Call the parent render method
        this.init(); // Now attach the listener here
    }

	async init() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            await provider.send("eth_requestAccounts", []);
            const signer = provider.getSigner();

            // Log the current account address
            const address = await signer.getAddress();
            console.log('Connected account:', address);

            console.log('Loaded contract ABI:', contractABI);
            this.scoreContract = new ethers.Contract(contractAddress, contractABI, signer);
            this.addEventListeners();
        } else {
            console.error('Please install MetaMask!');
            this.showFeedback('Please install MetaMask!', 'error');
        }
    }


    addEventListeners() {
        console.log('Adding event listener to form');
        const form = document.getElementById('score-form1');
        if (form) {
            form.addEventListener('submit', async (e) => {
                e.preventDefault(); // Prevent the default form submission behavior

                const user1 = document.getElementById('user1').value.trim();
                const score1 = document.getElementById('score1').value.trim();
                const user2 = document.getElementById('user2').value.trim();
                const score2 = document.getElementById('score2').value.trim();

                if (!user1 || !score1 || !user2 || !score2) {
                    this.showFeedback('All fields are required.', 'error');
                    return;
                }

                if (isNaN(score1) || isNaN(score2)) {
                    this.showFeedback('Scores must be numbers.', 'error');
                    return;
                }

                try {
                    console.log('Sending transaction to submit scores...');
                    const tx = await this.scoreContract.submitScore(user1, parseInt(score1), user2, parseInt(score2));
                    console.log('Transaction sent:', tx);

                    // Wait for the transaction to be mined
                    const receipt = await tx.wait();
                    console.log('Transaction confirmed:', receipt);

                    this.showFeedback('Scores submitted successfully!', 'success');
                    form.reset(); // Reset the form after submission

                    // Optional: Update the UI with the latest scores or other relevant data without refreshing
                } catch (error) {
                    console.error('Error submitting scores:', error);
                    this.showFeedback('Error submitting scores.', 'error');
                }
            });
        } else {
            console.error('Form not found');
        }
    }

    showFeedback(message, type) {
        const feedbackElement = document.getElementById('feedback');
        feedbackElement.textContent = message;
        feedbackElement.className = type; // You can add styles based on the type
    }
}

// Instantiate and initialize the Btest class
const btest = new Btest();
btest.render();
