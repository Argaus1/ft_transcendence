async function main() {
	const ScoreContract = await ethers.getContractFactory("ScoreContract");
 
	// Start deployment, returning a promise that resolves to a contract object
	const score_contract = await ScoreContract.deploy();
	console.log("Contract deployed to address:", score_contract.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
	 console.error(error);
	 process.exit(1);
   });