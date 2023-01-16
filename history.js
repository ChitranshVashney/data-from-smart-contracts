const axios = require('axios');
const fs = require('fs');
const json2csv = require('json2csv');

// Smart contract address
const contractAddress = "Nft contract address";

// Wallet address to retrieve the transaction history for
const accountAddress = "account address";

const apiKey = "Api key of alchemy";

const options = {fields: ['transactionHash', 'args._from', 'args._to', 'args._value', 'timestamp']};


axios.get(`//Write alchemy api url to call the address data`, {
    params: {
        from: accountAddress,
        to: accountAddress,
        apikey: apiKey
    }
}).then(response => {
    if (!response || !response.data) {
        console.log("Error: No data received from the API");
        return;
    }
    const data = response.data;
    const csv = json2csv.parse(data, options);
    fs.writeFileSync('./transactions.csv', csv);
    console.log('File saved successfully!');
}).catch(error => {
    console.log(`Error: ${error}`);
});

