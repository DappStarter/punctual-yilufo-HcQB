require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea problem occur trophy figure render remove coffee hockey private orange gesture'; 
let testAccounts = [
"0x719aaa2d3d0faf82dfff53f61d65abfbcc53e1746b243318b89488392226166d",
"0x6b6d8f62a4ad30c545afb29cdc451933cd3acae3d0765454d4f3abf6d9af1e41",
"0xac4dedc667eacc87d6cd9b3baa088f466031365a6fbcdef2643a1251abd4ffe5",
"0xffcf7d19fe871f76cf4a4dd00fb77281a3fc1df8740af60530c2d5541d1ef3f7",
"0x05515f25cbae04951e46ce440a2c188e8fc88509835deec106d47210156ea6d4",
"0x4e7cb295c7864f5b038a491f2835b77f7efc278d206ecdcbe59f93b2af6c8396",
"0x18840a94639b7dd041d00d5771c9a34016ca4c7e572f44ef869c777b4d2e4e04",
"0x59c3e41306602e9da41620aacfb36898a97d537148239e4e74dae9e70d837bc8",
"0x9cb58c98c250b5f78f4a039d453904b05da70fa86895025597559446aac8a600",
"0xd8010c04fdda031b1cc23de0f5b41966abd1c842450c49ab3897093782d062cb"
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

