require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom private boil suggest name return still assault gesture casual frame genius'; 
let testAccounts = [
"0xc58f87040eb94527f0036e9a57810eeb81126507f92227f837778556537ce591",
"0x46276d66840b20a02debaf8152a1a6fe291f20d8a856f36fbe85e3c4b68665d0",
"0x0cc298482c3c5238f98b3df65ecaf4a9fecddc12b6f52fcdba8ddcf896966bf0",
"0x54e3ef1dbd2b37a842400cb069160a3a3fa6e3e23086a5f5487b717b6cf413ae",
"0x9312668fbe7236f5bf786dc0d7706af582af362aa6c245dbf492cc957f4278f5",
"0xddde3dd00f893ee81426fb33be1cc011bd0ba37726abb8c169d2d4ca7100aaf4",
"0x862aba66441528f9cbad91018d3f152f1a3a9a20f13b4a3bcd63ed423b3c7a03",
"0x070adc655a88b0721652cd3d9c4869c41058ccb5db547bc67f2d19bf60ed3ba3",
"0x8c5c12b5317c5dbf925874607509d9e9601a014081b74f64695cd9478314cb1c",
"0xcc27228c1bd05876d9c49daffb7fd0d0e1ff974127f48a4c31ff9a7a6746b9e5"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

