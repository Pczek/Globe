export const ContractAddress = '0xf87e31492faf9a91b02ee0deaad50d51d56d5d4d'
export const LANDInterface= {
  "contractName": "LANDRegistry",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "proxyOwner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "x",
          "type": "int256"
        },
        {
          "name": "y",
          "type": "int256"
        }
      ],
      "name": "ownerOfLand",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "user",
          "type": "address"
        }
      ],
      "name": "setLatestToNow",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "x",
          "type": "int256"
        },
        {
          "name": "y",
          "type": "int256"
        },
        {
          "name": "beneficiary",
          "type": "address"
        }
      ],
      "name": "assignNewParcel",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "x",
          "type": "int256[]"
        },
        {
          "name": "y",
          "type": "int256[]"
        }
      ],
      "name": "ownerOfLandMany",
      "outputs": [
        {
          "name": "",
          "type": "address[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "x",
          "type": "int256[]"
        },
        {
          "name": "y",
          "type": "int256[]"
        },
        {
          "name": "data",
          "type": "string"
        }
      ],
      "name": "updateManyLandData",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "holder",
          "type": "address"
        }
      ],
      "name": "assetsOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "assetId",
          "type": "uint256"
        }
      ],
      "name": "safeHolderOf",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "beneficiary",
          "type": "address"
        }
      ],
      "name": "authorizeDeploy",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "x",
          "type": "int256"
        },
        {
          "name": "y",
          "type": "int256"
        },
        {
          "name": "to",
          "type": "address"
        }
      ],
      "name": "transferLand",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "b",
          "type": "bytes"
        }
      ],
      "name": "bytesToAddress",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "data",
          "type": "bytes"
        }
      ],
      "name": "initialize",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "x",
          "type": "int256"
        },
        {
          "name": "y",
          "type": "int256"
        }
      ],
      "name": "landData",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "x",
          "type": "int256[]"
        },
        {
          "name": "y",
          "type": "int256[]"
        },
        {
          "name": "to",
          "type": "address"
        }
      ],
      "name": "transferManyLand",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "assetId",
          "type": "uint256"
        }
      ],
      "name": "exists",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "operator",
          "type": "address"
        },
        {
          "name": "assetHolder",
          "type": "address"
        }
      ],
      "name": "isOperatorAuthorizedFor",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "ping",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "x",
          "type": "int256"
        },
        {
          "name": "y",
          "type": "int256"
        }
      ],
      "name": "encodeTokenId",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "currentContract",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "description",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "decodeTokenId",
      "outputs": [
        {
          "name": "",
          "type": "int256"
        },
        {
          "name": "",
          "type": "int256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "x",
          "type": "int256[]"
        },
        {
          "name": "y",
          "type": "int256[]"
        },
        {
          "name": "beneficiary",
          "type": "address"
        }
      ],
      "name": "assignMultipleParcels",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "landOf",
      "outputs": [
        {
          "name": "",
          "type": "int256[]"
        },
        {
          "name": "",
          "type": "int256[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "x",
          "type": "int256[]"
        },
        {
          "name": "y",
          "type": "int256[]"
        }
      ],
      "name": "clearLand",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "assetId",
          "type": "uint256"
        }
      ],
      "name": "destroy",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "x",
          "type": "int256"
        },
        {
          "name": "y",
          "type": "int256"
        }
      ],
      "name": "exists",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "assetId",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "assetId",
          "type": "uint256"
        }
      ],
      "name": "assetData",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "operator",
          "type": "address"
        },
        {
          "name": "authorized",
          "type": "bool"
        }
      ],
      "name": "authorizeOperator",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "assetId",
          "type": "uint256"
        }
      ],
      "name": "safeAssetData",
      "outputs": [
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "assetId",
          "type": "uint256"
        },
        {
          "name": "userData",
          "type": "bytes"
        }
      ],
      "name": "transfer",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "holder",
          "type": "address"
        }
      ],
      "name": "assetCount",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "holder",
          "type": "address"
        },
        {
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "assetByIndex",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "x",
          "type": "int256"
        },
        {
          "name": "y",
          "type": "int256"
        },
        {
          "name": "data",
          "type": "string"
        }
      ],
      "name": "updateLandData",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "assetId",
          "type": "uint256"
        }
      ],
      "name": "holderOf",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "to",
          "type": "address"
        },
        {
          "name": "assetId",
          "type": "uint256"
        },
        {
          "name": "userData",
          "type": "bytes"
        },
        {
          "name": "operatorData",
          "type": "bytes"
        }
      ],
      "name": "transfer",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "beneficiary",
          "type": "address"
        }
      ],
      "name": "forbidDeploy",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "assetId",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "userData",
          "type": "bytes"
        },
        {
          "indexed": false,
          "name": "operatorData",
          "type": "bytes"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "assetId",
          "type": "uint256"
        },
        {
          "indexed": true,
          "name": "holder",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "data",
          "type": "string"
        }
      ],
      "name": "Update",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "holder",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "authorized",
          "type": "bool"
        }
      ],
      "name": "AuthorizeOperator",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "_prevOwner",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "OwnerUpdate",
      "type": "event"
    }
  ],
  "bytecode": "0x60606040527394405c3223089a942b7597db96dc60fca17b0e3a601060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550613d54806100a96000396000f300606060405260043610610204576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063025313a21461020957806306fdde031461025e5780631080f251146102ec578063133cbe3a1461035857806318160ddd146103915780631cc69ac1146103ba5780631d4b11e4146104055780631e4c7736146104f45780632c62fa10146105d157806333683ec61461065f578063341f13f2146106c257806335e64aaa146106fb57806342526e4e14610746578063439fab91146107e35780634c4bf936146108405780634dad9003146108e55780634f558e791461099e57806355ef2913146109d95780635c36b18614610a495780636fb7e58814610a5e578063721d7d8e14610a9e5780637284e41614610af35780637efd911214610b815780638668a41614610bbf578063885363eb14610c785780638da5cb5b14610d4e57806395d89b4114610da35780639cf6699714610e315780639d11877014610ecb578063a8d8812714610eee578063a9059cbb14610f32578063ac823a7e14610f74578063b0994d4a14611010578063b2d96b8114611054578063be45fd62146110f0578063bffa925814611175578063d2953f84146111c2578063d4dd159414611218578063dbacc23714611287578063e9b07bbf146112ea578063f2fde38b146113b2578063fd7a1b00146113eb575b600080fd5b341561021457600080fd5b61021c611424565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561026957600080fd5b61027161144a565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102b1578082015181840152602081019050610296565b50505050905090810190601f1680156102de5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156102f757600080fd5b61031660048080359060200190919080359060200190919050506114f2565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561036357600080fd5b61038f600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061150e565b005b341561039c57600080fd5b6103a46115ae565b6040518082815260200191505060405180910390f35b34156103c557600080fd5b610403600480803590602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506115b8565b005b341561041057600080fd5b61049d60048080359060200190820180359060200190808060200260200160405190810160405280939291908181526020018383602002808284378201915050505050509190803590602001908201803590602001908080602002602001604051908101604052809392919081815260200183836020028082843782019150505050505091905050611639565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156104e05780820151818401526020810190506104c5565b505050509050019250505060405180910390f35b34156104ff57600080fd5b6105cf6004808035906020019082018035906020019080806020026020016040519081016040528093929190818152602001838360200280828437820191505050505050919080359060200190820180359060200190808060200260200160405190810160405280939291908181526020018383602002808284378201915050505050509190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050611734565b005b34156105dc57600080fd5b610608600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506117a0565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561064b578082015181840152602081019050610630565b505050509050019250505060405180910390f35b341561066a57600080fd5b610680600480803590602001909190505061183d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156106cd57600080fd5b6106f9600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506118a5565b005b341561070657600080fd5b610744600480803590602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611959565b005b341561075157600080fd5b6107a1600480803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050611971565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156107ee57600080fd5b61083e600480803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050611a3e565b005b341561084b57600080fd5b61086a6004808035906020019091908035906020019091905050611b55565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156108aa57808201518184015260208101905061088f565b50505050905090810190601f1680156108d75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156108f057600080fd5b61099c6004808035906020019082018035906020019080806020026020016040519081016040528093929190818152602001838360200280828437820191505050505050919080359060200190820180359060200190808060200260200160405190810160405280939291908181526020018383602002808284378201915050505050509190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611b77565b005b34156109a957600080fd5b6109bf6004808035906020019091905050611beb565b604051808215151515815260200191505060405180910390f35b34156109e457600080fd5b610a2f600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611c41565b604051808215151515815260200191505060405180910390f35b3415610a5457600080fd5b610a5c611cd5565b005b3415610a6957600080fd5b610a886004808035906020019091908035906020019091905050611d1b565b6040518082815260200191505060405180910390f35b3415610aa957600080fd5b610ab1611d6f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3415610afe57600080fd5b610b06611d94565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610b46578082015181840152602081019050610b2b565b50505050905090810190601f168015610b735780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3415610b8c57600080fd5b610ba26004808035906020019091905050611e3c565b604051808381526020018281526020019250505060405180910390f35b3415610bca57600080fd5b610c766004808035906020019082018035906020019080806020026020016040519081016040528093929190818152602001838360200280828437820191505050505050919080359060200190820180359060200190808060200260200160405190810160405280939291908181526020018383602002808284378201915050505050509190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611ea1565b005b3415610c8357600080fd5b610caf600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611f6e565b604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b83811015610cf6578082015181840152602081019050610cdb565b50505050905001838103825284818151815260200191508051906020019060200280838360005b83811015610d38578082015181840152602081019050610d1d565b5050505090500194505050505060405180910390f35b3415610d5957600080fd5b610d6161216c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3415610dae57600080fd5b610db6612192565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610df6578082015181840152602081019050610ddb565b50505050905090810190601f168015610e235780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3415610e3c57600080fd5b610ec96004808035906020019082018035906020019080806020026020016040519081016040528093929190818152602001838360200280828437820191505050505050919080359060200190820180359060200190808060200260200160405190810160405280939291908181526020018383602002808284378201915050505050509190505061223a565b005b3415610ed657600080fd5b610eec600480803590602001909190505061230d565b005b3415610ef957600080fd5b610f186004808035906020019091908035906020019091905050612372565b604051808215151515815260200191505060405180910390f35b3415610f3d57600080fd5b610f72600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061238e565b005b3415610f7f57600080fd5b610f9560048080359060200190919050506123c0565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610fd5578082015181840152602081019050610fba565b50505050905090810190601f1680156110025780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561101b57600080fd5b611052600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035151590602001909190505061247b565b005b341561105f57600080fd5b6110756004808035906020019091905050612533565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156110b557808201518184015260208101905061109a565b50505050905090810190601f1680156110e25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156110fb57600080fd5b611173600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050612647565b005b341561118057600080fd5b6111ac600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061266a565b6040518082815260200191505060405180910390f35b34156111cd57600080fd5b611202600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506126b6565b6040518082815260200191505060405180910390f35b341561122357600080fd5b611285600480803590602001909190803590602001909190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050612786565b005b341561129257600080fd5b6112a8600480803590602001909190505061285a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156112f557600080fd5b6113b0600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050612897565b005b34156113bd57600080fd5b6113e9600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506128aa565b005b34156113f657600080fd5b611422600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506129a4565b005b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b611452613bba565b60048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114e85780601f106114bd576101008083540402835291602001916114e8565b820191906000526020600020905b8154815290600101906020018083116114cb57829003601f168201915b5050505050905090565b60006115066115018484611d1b565b61285a565b905092915050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561156757fe5b42600e60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050565b6000600754905090565b600f60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151561161057600080fd5b61163461161d8484611d1b565b826020604051908101604052806000815250612a58565b505050565b611641613bce565b611649613bce565b600080855111151561165a57600080fd5b8351855114151561166a57600080fd5b84516040518059106116795750595b90808252806020026020018201604052509150600090505b8451811015611729576116d285828151811015156116ab57fe5b9060200190602002015185838151811015156116c357fe5b906020019060200201516114f2565b82828151811015156116e057fe5b9060200190602002019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508080600101915050611691565b819250505092915050565b60008251845114151561174657600080fd5b600090505b835181101561179a5761178d848281518110151561176557fe5b90602001906020020151848381518110151561177d57fe5b9060200190602002015184612786565b808060010191505061174b565b50505050565b6117a8613be2565b600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548060200260200160405190810160405280929190818152602001828054801561183157602002820191906000526020600020905b81548152602001906001019080831161181d575b50505050509050919050565b6000806009600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008173ffffffffffffffffffffffffffffffffffffffff161415151561189c57600080fd5b80915050919050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156118fe57fe5b6001600f60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b61196c816119678585611d1b565b61238e565b505050565b6000806000806000809350600186510392505b6000600184011115611a3257858381518110151561199e57fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f0100000000000000000000000000000000000000000000000000000000000000027f0100000000000000000000000000000000000000000000000000000000000000900491506002600184885103030260100a820290508084019350828060019003935050611984565b83945050505050919050565b6040805190810160405280601181526020017f446563656e7472616c616e64204c414e4400000000000000000000000000000081525060049080519060200190611a89929190613bf6565b506040805190810160405280600481526020017f4c414e440000000000000000000000000000000000000000000000000000000081525060059080519060200190611ad5929190613bf6565b50606060405190810160405280603381526020017f436f6e747261637420746861742073746f7265732074686520446563656e747281526020017f616c616e64204c414e442072656769737472790000000000000000000000000081525060069080519060200190611b48929190613bf6565b50611b5281612bbe565b50565b611b5d613bba565b611b6f611b6a8484611d1b565b6123c0565b905092915050565b600082518451141515611b8957600080fd5b600090505b8351811015611be557611bd882611bd38684815181101515611bac57fe5b906020019060200201518685815181101515611bc457fe5b90602001906020020151611d1b565b61238e565b8080600101915050611b8e565b50505050565b6000806009600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b6000600c60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b42600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550565b60006fffffffffffffffffffffffffffffffff82167fffffffffffffffffffffffffffffffff0000000000000000000000000000000070010000000000000000000000000000000085021617905092915050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b611d9c613bba565b60068054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611e325780601f10611e0757610100808354040283529160200191611e32565b820191906000526020600020905b815481529060010190602001808311611e1557829003601f168201915b5050505050905090565b60008060008060807fffffffffffffffffffffffffffffffff0000000000000000000000000000000086169060020a900491506fffffffffffffffffffffffffffffffff85169050611e8d82612c0a565b611e9682612c0a565b935093505050915091565b6000600f60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515611efb57600080fd5b600090505b8351811015611f6857611f5b611f448583815181101515611f1d57fe5b906020019060200201518584815181101515611f3557fe5b90602001906020020151611d1b565b836020604051908101604052806000815250612a58565b8080600101915050611f00565b50505050565b611f76613c76565b611f7e613c76565b611f86613c76565b611f8e613c76565b600080600080600860008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050604051805910611fe45750595b90808252806020026020018201604052509550600860008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490506040518059106120475750595b90808252806020026020018201604052509450600860008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490509150600090505b8181101561215b5761210c600860008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020828154811015156120fb57fe5b906000526020600020900154611e3c565b809450819550505083868281518110151561212357fe5b906020019060200201818152505082858281518110151561214057fe5b906020019060200201818152505080806001019150506120a4565b858597509750505050505050915091565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61219a613bba565b60058054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156122305780601f1061220557610100808354040283529160200191612230565b820191906000526020600020905b81548152906001019060200180831161221357829003601f168201915b5050505050905090565b60008060008351855114151561224f57600080fd5b600092505b845183101561230657612295858481518110151561226e57fe5b90602001906020020151858581518110151561228657fe5b90602001906020020151611d1b565b91506122a08261285a565b90506301e133804203600e60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156122f9576122f882612c5a565b5b8280600101935050612254565b5050505050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561236657fe5b61236f81612c5a565b50565b60006123866123818484611d1b565b611beb565b905092915050565b6123bc8282602060405190810160405280600081525060006020604051908101604052806000815250612d74565b5050565b6123c8613bba565b600b60008381526020019081526020016000208054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561246f5780601f106124445761010080835404028352916020019161246f565b820191906000526020600020905b81548152906001019060200180831161245257829003601f168201915b50505050509050919050565b80156124a65761248b8233611c41565b15151561249757600080fd5b6124a18233612ed5565b6124c6565b6124b08233611c41565b15156124bb57600080fd5b6124c58233612f6e565b5b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167ffe1dcbb12493a4af760875b0c328b264e6397b8bd47cdc249df0444b4daf1cbc83604051808215151515815260200191505060405180910390a35050565b61253b613bba565b60006009600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415151561259457600080fd5b600b60008381526020019081526020016000208054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561263b5780601f106126105761010080835404028352916020019161263b565b820191906000526020600020905b81548152906001019060200180831161261e57829003601f168201915b50505050509050919050565b61266583838360006020604051908101604052806000815250612d74565b505050565b6000600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490509050919050565b6000600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490508210151561270857600080fd5b6f800000000000000000000000000000008210151561272657600080fd5b600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110151561277257fe5b906000526020600020900154905092915050565b6127908383611d1b565b3373ffffffffffffffffffffffffffffffffffffffff166009600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614806128365750612835336009600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16611c41565b5b151561284157600080fd5b61285461284e8585611d1b565b83613007565b50505050565b60006009600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6128a48484843385612d74565b50505050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561290357fe5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561296057600080fd5b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156129fd57fe5b6000600f60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b60006009600085815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515612ab057600080fd5b612abb828483613145565b828273ffffffffffffffffffffffffffffffffffffffff1660007f8988d59efc2c4547ef86c88f6543963bab0cea94f8e486e619c7c3a790db93be3385604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018060200180602001838103835284818151815260200191508051906020019080838360005b83811015612b6e578082015181840152602081019050612b53565b50505050905090810190601f168015612b9b5780820380516001836020036101000a031916815260200191505b5083810382526000815260200160200194505050505060405180910390a4505050565b612bc781611971565b600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000806f800000000000000000000000000000008316141515612c51577fffffffffffffffffffffffffffffffff0000000000000000000000000000000082179050612c55565b8190505b919050565b60006009600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008173ffffffffffffffffffffffffffffffffffffffff1614151515612cb857600080fd5b612cc2818361317c565b612ccb82613459565b8160008273ffffffffffffffffffffffffffffffffffffffff167f8988d59efc2c4547ef86c88f6543963bab0cea94f8e486e619c7c3a790db93be33604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018060200180602001838103835260008152602001602001838103825260008152602001602001935050505060405180910390a45050565b8460008173ffffffffffffffffffffffffffffffffffffffff1614151515612d9b57600080fd5b84868073ffffffffffffffffffffffffffffffffffffffff166009600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151515612e0b57600080fd5b863373ffffffffffffffffffffffffffffffffffffffff166009600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161480612eb25750612eb1336009600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16611c41565b5b1515612ebd57600080fd5b612eca8989898989613494565b505050505050505050565b6001600c60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b6000600c60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b61301082611beb565b151561301b57600080fd5b80600b60008481526020019081526020016000209080519060200190613042929190613bf6565b503373ffffffffffffffffffffffffffffffffffffffff166009600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16837f47c705b9219229ad762fca605f08fb024a3415d0ae78af5d319820c72e510414846040518080602001828103825283818151815260200191508051906020019080838360005b838110156131075780820151818401526020810190506130ec565b50505050905090810190601f1680156131345780820380516001836020036101000a031916815260200191505b509250505060405180910390a45050565b61314f8383613916565b80600b60008481526020019081526020016000209080519060200190613176929190613bf6565b50505050565b6000806000600a60008581526020019081526020016000205492506131b360016131a58761266a565b613a1490919063ffffffff16565b9150600860008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110151561320157fe5b906000526020600020900154905060006009600086815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600860008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020848154811015156132af57fe5b9060005260206000209001819055506000600860008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208381548110151561330c57fe5b906000526020600020900181905550600860008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548091906001900361336d9190613c8a565b506000600860008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050141561340557600860008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006134049190613cb6565b5b6000600a60008681526020019081526020016000208190555082600a60008381526020019081526020016000208190555061344c6001600754613a1490919063ffffffff16565b6007819055505050505050565b6020604051908101604052806000815250600b60008381526020019081526020016000209080519060200190613490929190613bf6565b5050565b6000806009600087815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691506134d7828761317c565b6134e18787613916565b6134ea87613a2d565b156137a157600d60009054906101000a900460ff1615151561350b57600080fd5b6001600d60006101000a81548160ff021916908315150217905550613565876040805190810160405280600c81526020017f494173736574486f6c6465720000000000000000000000000000000000000000815250613a40565b905060008173ffffffffffffffffffffffffffffffffffffffff161415151561358d57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16633bde307287848a8989896040518763ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808781526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001806020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001838103835286818151815260200191508051906020019080838360005b838110156136ba57808201518184015260208101905061369f565b50505050905090810190601f1680156136e75780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015613720578082015181840152602081019050613705565b50505050905090810190601f16801561374d5780820380516001836020036101000a031916815260200191505b5098505050505050505050600060405180830381600087803b151561377157600080fd5b6102c65a03f1151561378257600080fd5b5050506000600d60006101000a81548160ff0219169083151502179055505b858773ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8988d59efc2c4547ef86c88f6543963bab0cea94f8e486e619c7c3a790db93be878988604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018060200180602001838103835285818151815260200191508051906020019080838360005b8381101561386a57808201518184015260208101905061384f565b50505050905090810190601f1680156138975780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b838110156138d05780820151818401526020810190506138b5565b50505050905090810190601f1680156138fd5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a450505050505050565b6000826009600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506139738361266a565b9050600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548060010182816139c69190613cd7565b91600052602060002090016000849091909150555080600a600084815260200190815260200160002081905550613a096001600754613b9c90919063ffffffff16565b600781905550505050565b6000828211151515613a2257fe5b818303905092915050565b600080823b905060008111915050919050565b6000601060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663aabbb8ca84846040518082805190602001908083835b602083101515613ab75780518252602082019150602081019050602083039250613a92565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001826000191660001916815260200192505050602060405180830381600087803b1515613b7957600080fd5b6102c65a03f11515613b8a57600080fd5b50505060405180519050905092915050565b6000808284019050838110151515613bb057fe5b8091505092915050565b602060405190810160405280600081525090565b602060405190810160405280600081525090565b602060405190810160405280600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10613c3757805160ff1916838001178555613c65565b82800160010185558215613c65579182015b82811115613c64578251825591602001919060010190613c49565b5b509050613c729190613d03565b5090565b602060405190810160405280600081525090565b815481835581811511613cb157818360005260206000209182019101613cb09190613d03565b5b505050565b5080546000825590600052602060002090810190613cd49190613d03565b50565b815481835581811511613cfe57818360005260206000209182019101613cfd9190613d03565b5b505050565b613d2591905b80821115613d21576000816000905550600101613d09565b5090565b905600a165627a7a7230582040078a3de66840bb9fdbe57b73aad6aed0e9cb90ae173d6c2cc3c459d13024a80029",
  "deployedBytecode": "0x606060405260043610610204576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063025313a21461020957806306fdde031461025e5780631080f251146102ec578063133cbe3a1461035857806318160ddd146103915780631cc69ac1146103ba5780631d4b11e4146104055780631e4c7736146104f45780632c62fa10146105d157806333683ec61461065f578063341f13f2146106c257806335e64aaa146106fb57806342526e4e14610746578063439fab91146107e35780634c4bf936146108405780634dad9003146108e55780634f558e791461099e57806355ef2913146109d95780635c36b18614610a495780636fb7e58814610a5e578063721d7d8e14610a9e5780637284e41614610af35780637efd911214610b815780638668a41614610bbf578063885363eb14610c785780638da5cb5b14610d4e57806395d89b4114610da35780639cf6699714610e315780639d11877014610ecb578063a8d8812714610eee578063a9059cbb14610f32578063ac823a7e14610f74578063b0994d4a14611010578063b2d96b8114611054578063be45fd62146110f0578063bffa925814611175578063d2953f84146111c2578063d4dd159414611218578063dbacc23714611287578063e9b07bbf146112ea578063f2fde38b146113b2578063fd7a1b00146113eb575b600080fd5b341561021457600080fd5b61021c611424565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561026957600080fd5b61027161144a565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156102b1578082015181840152602081019050610296565b50505050905090810190601f1680156102de5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156102f757600080fd5b61031660048080359060200190919080359060200190919050506114f2565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561036357600080fd5b61038f600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061150e565b005b341561039c57600080fd5b6103a46115ae565b6040518082815260200191505060405180910390f35b34156103c557600080fd5b610403600480803590602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506115b8565b005b341561041057600080fd5b61049d60048080359060200190820180359060200190808060200260200160405190810160405280939291908181526020018383602002808284378201915050505050509190803590602001908201803590602001908080602002602001604051908101604052809392919081815260200183836020028082843782019150505050505091905050611639565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156104e05780820151818401526020810190506104c5565b505050509050019250505060405180910390f35b34156104ff57600080fd5b6105cf6004808035906020019082018035906020019080806020026020016040519081016040528093929190818152602001838360200280828437820191505050505050919080359060200190820180359060200190808060200260200160405190810160405280939291908181526020018383602002808284378201915050505050509190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050611734565b005b34156105dc57600080fd5b610608600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506117a0565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561064b578082015181840152602081019050610630565b505050509050019250505060405180910390f35b341561066a57600080fd5b610680600480803590602001909190505061183d565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156106cd57600080fd5b6106f9600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506118a5565b005b341561070657600080fd5b610744600480803590602001909190803590602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611959565b005b341561075157600080fd5b6107a1600480803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050611971565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156107ee57600080fd5b61083e600480803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050611a3e565b005b341561084b57600080fd5b61086a6004808035906020019091908035906020019091905050611b55565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156108aa57808201518184015260208101905061088f565b50505050905090810190601f1680156108d75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156108f057600080fd5b61099c6004808035906020019082018035906020019080806020026020016040519081016040528093929190818152602001838360200280828437820191505050505050919080359060200190820180359060200190808060200260200160405190810160405280939291908181526020018383602002808284378201915050505050509190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611b77565b005b34156109a957600080fd5b6109bf6004808035906020019091905050611beb565b604051808215151515815260200191505060405180910390f35b34156109e457600080fd5b610a2f600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611c41565b604051808215151515815260200191505060405180910390f35b3415610a5457600080fd5b610a5c611cd5565b005b3415610a6957600080fd5b610a886004808035906020019091908035906020019091905050611d1b565b6040518082815260200191505060405180910390f35b3415610aa957600080fd5b610ab1611d6f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3415610afe57600080fd5b610b06611d94565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610b46578082015181840152602081019050610b2b565b50505050905090810190601f168015610b735780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3415610b8c57600080fd5b610ba26004808035906020019091905050611e3c565b604051808381526020018281526020019250505060405180910390f35b3415610bca57600080fd5b610c766004808035906020019082018035906020019080806020026020016040519081016040528093929190818152602001838360200280828437820191505050505050919080359060200190820180359060200190808060200260200160405190810160405280939291908181526020018383602002808284378201915050505050509190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611ea1565b005b3415610c8357600080fd5b610caf600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611f6e565b604051808060200180602001838103835285818151815260200191508051906020019060200280838360005b83811015610cf6578082015181840152602081019050610cdb565b50505050905001838103825284818151815260200191508051906020019060200280838360005b83811015610d38578082015181840152602081019050610d1d565b5050505090500194505050505060405180910390f35b3415610d5957600080fd5b610d6161216c565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b3415610dae57600080fd5b610db6612192565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610df6578082015181840152602081019050610ddb565b50505050905090810190601f168015610e235780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b3415610e3c57600080fd5b610ec96004808035906020019082018035906020019080806020026020016040519081016040528093929190818152602001838360200280828437820191505050505050919080359060200190820180359060200190808060200260200160405190810160405280939291908181526020018383602002808284378201915050505050509190505061223a565b005b3415610ed657600080fd5b610eec600480803590602001909190505061230d565b005b3415610ef957600080fd5b610f186004808035906020019091908035906020019091905050612372565b604051808215151515815260200191505060405180910390f35b3415610f3d57600080fd5b610f72600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190505061238e565b005b3415610f7f57600080fd5b610f9560048080359060200190919050506123c0565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610fd5578082015181840152602081019050610fba565b50505050905090810190601f1680156110025780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b341561101b57600080fd5b611052600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091908035151590602001909190505061247b565b005b341561105f57600080fd5b6110756004808035906020019091905050612533565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156110b557808201518184015260208101905061109a565b50505050905090810190601f1680156110e25780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34156110fb57600080fd5b611173600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050612647565b005b341561118057600080fd5b6111ac600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190505061266a565b6040518082815260200191505060405180910390f35b34156111cd57600080fd5b611202600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919080359060200190919050506126b6565b6040518082815260200191505060405180910390f35b341561122357600080fd5b611285600480803590602001909190803590602001909190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050612786565b005b341561129257600080fd5b6112a8600480803590602001909190505061285a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34156112f557600080fd5b6113b0600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190803590602001908201803590602001908080601f01602080910402602001604051908101604052809392919081815260200183838082843782019150505050505091905050612897565b005b34156113bd57600080fd5b6113e9600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506128aa565b005b34156113f657600080fd5b611422600480803573ffffffffffffffffffffffffffffffffffffffff169060200190919050506129a4565b005b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b611452613bba565b60048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156114e85780601f106114bd576101008083540402835291602001916114e8565b820191906000526020600020905b8154815290600101906020018083116114cb57829003601f168201915b5050505050905090565b60006115066115018484611d1b565b61285a565b905092915050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561156757fe5b42600e60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050565b6000600754905090565b600f60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151561161057600080fd5b61163461161d8484611d1b565b826020604051908101604052806000815250612a58565b505050565b611641613bce565b611649613bce565b600080855111151561165a57600080fd5b8351855114151561166a57600080fd5b84516040518059106116795750595b90808252806020026020018201604052509150600090505b8451811015611729576116d285828151811015156116ab57fe5b9060200190602002015185838151811015156116c357fe5b906020019060200201516114f2565b82828151811015156116e057fe5b9060200190602002019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508080600101915050611691565b819250505092915050565b60008251845114151561174657600080fd5b600090505b835181101561179a5761178d848281518110151561176557fe5b90602001906020020151848381518110151561177d57fe5b9060200190602002015184612786565b808060010191505061174b565b50505050565b6117a8613be2565b600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548060200260200160405190810160405280929190818152602001828054801561183157602002820191906000526020600020905b81548152602001906001019080831161181d575b50505050509050919050565b6000806009600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008173ffffffffffffffffffffffffffffffffffffffff161415151561189c57600080fd5b80915050919050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156118fe57fe5b6001600f60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b61196c816119678585611d1b565b61238e565b505050565b6000806000806000809350600186510392505b6000600184011115611a3257858381518110151561199e57fe5b9060200101517f010000000000000000000000000000000000000000000000000000000000000090047f0100000000000000000000000000000000000000000000000000000000000000027f0100000000000000000000000000000000000000000000000000000000000000900491506002600184885103030260100a820290508084019350828060019003935050611984565b83945050505050919050565b6040805190810160405280601181526020017f446563656e7472616c616e64204c414e4400000000000000000000000000000081525060049080519060200190611a89929190613bf6565b506040805190810160405280600481526020017f4c414e440000000000000000000000000000000000000000000000000000000081525060059080519060200190611ad5929190613bf6565b50606060405190810160405280603381526020017f436f6e747261637420746861742073746f7265732074686520446563656e747281526020017f616c616e64204c414e442072656769737472790000000000000000000000000081525060069080519060200190611b48929190613bf6565b50611b5281612bbe565b50565b611b5d613bba565b611b6f611b6a8484611d1b565b6123c0565b905092915050565b600082518451141515611b8957600080fd5b600090505b8351811015611be557611bd882611bd38684815181101515611bac57fe5b906020019060200201518685815181101515611bc457fe5b90602001906020020151611d1b565b61238e565b8080600101915050611b8e565b50505050565b6000806009600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614159050919050565b6000600c60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b42600e60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550565b60006fffffffffffffffffffffffffffffffff82167fffffffffffffffffffffffffffffffff0000000000000000000000000000000070010000000000000000000000000000000085021617905092915050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b611d9c613bba565b60068054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015611e325780601f10611e0757610100808354040283529160200191611e32565b820191906000526020600020905b815481529060010190602001808311611e1557829003601f168201915b5050505050905090565b60008060008060807fffffffffffffffffffffffffffffffff0000000000000000000000000000000086169060020a900491506fffffffffffffffffffffffffffffffff85169050611e8d82612c0a565b611e9682612c0a565b935093505050915091565b6000600f60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515611efb57600080fd5b600090505b8351811015611f6857611f5b611f448583815181101515611f1d57fe5b906020019060200201518584815181101515611f3557fe5b90602001906020020151611d1b565b836020604051908101604052806000815250612a58565b8080600101915050611f00565b50505050565b611f76613c76565b611f7e613c76565b611f86613c76565b611f8e613c76565b600080600080600860008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050604051805910611fe45750595b90808252806020026020018201604052509550600860008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490506040518059106120475750595b90808252806020026020018201604052509450600860008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490509150600090505b8181101561215b5761210c600860008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020828154811015156120fb57fe5b906000526020600020900154611e3c565b809450819550505083868281518110151561212357fe5b906020019060200201818152505082858281518110151561214057fe5b906020019060200201818152505080806001019150506120a4565b858597509750505050505050915091565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61219a613bba565b60058054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156122305780601f1061220557610100808354040283529160200191612230565b820191906000526020600020905b81548152906001019060200180831161221357829003601f168201915b5050505050905090565b60008060008351855114151561224f57600080fd5b600092505b845183101561230657612295858481518110151561226e57fe5b90602001906020020151858581518110151561228657fe5b90602001906020020151611d1b565b91506122a08261285a565b90506301e133804203600e60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205410156122f9576122f882612c5a565b5b8280600101935050612254565b5050505050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561236657fe5b61236f81612c5a565b50565b60006123866123818484611d1b565b611beb565b905092915050565b6123bc8282602060405190810160405280600081525060006020604051908101604052806000815250612d74565b5050565b6123c8613bba565b600b60008381526020019081526020016000208054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561246f5780601f106124445761010080835404028352916020019161246f565b820191906000526020600020905b81548152906001019060200180831161245257829003601f168201915b50505050509050919050565b80156124a65761248b8233611c41565b15151561249757600080fd5b6124a18233612ed5565b6124c6565b6124b08233611c41565b15156124bb57600080fd5b6124c58233612f6e565b5b3373ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167ffe1dcbb12493a4af760875b0c328b264e6397b8bd47cdc249df0444b4daf1cbc83604051808215151515815260200191505060405180910390a35050565b61253b613bba565b60006009600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415151561259457600080fd5b600b60008381526020019081526020016000208054600181600116156101000203166002900480601f01602080910402602001604051908101604052809291908181526020018280546001816001161561010002031660029004801561263b5780601f106126105761010080835404028352916020019161263b565b820191906000526020600020905b81548152906001019060200180831161261e57829003601f168201915b50505050509050919050565b61266583838360006020604051908101604052806000815250612d74565b505050565b6000600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490509050919050565b6000600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020805490508210151561270857600080fd5b6f800000000000000000000000000000008210151561272657600080fd5b600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110151561277257fe5b906000526020600020900154905092915050565b6127908383611d1b565b3373ffffffffffffffffffffffffffffffffffffffff166009600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614806128365750612835336009600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16611c41565b5b151561284157600080fd5b61285461284e8585611d1b565b83613007565b50505050565b60006009600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6128a48484843385612d74565b50505050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561290357fe5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561296057600080fd5b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156129fd57fe5b6000600f60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b60006009600085815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515612ab057600080fd5b612abb828483613145565b828273ffffffffffffffffffffffffffffffffffffffff1660007f8988d59efc2c4547ef86c88f6543963bab0cea94f8e486e619c7c3a790db93be3385604051808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018060200180602001838103835284818151815260200191508051906020019080838360005b83811015612b6e578082015181840152602081019050612b53565b50505050905090810190601f168015612b9b5780820380516001836020036101000a031916815260200191505b5083810382526000815260200160200194505050505060405180910390a4505050565b612bc781611971565b600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6000806f800000000000000000000000000000008316141515612c51577fffffffffffffffffffffffffffffffff0000000000000000000000000000000082179050612c55565b8190505b919050565b60006009600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008173ffffffffffffffffffffffffffffffffffffffff1614151515612cb857600080fd5b612cc2818361317c565b612ccb82613459565b8160008273ffffffffffffffffffffffffffffffffffffffff167f8988d59efc2c4547ef86c88f6543963bab0cea94f8e486e619c7c3a790db93be33604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018060200180602001838103835260008152602001602001838103825260008152602001602001935050505060405180910390a45050565b8460008173ffffffffffffffffffffffffffffffffffffffff1614151515612d9b57600080fd5b84868073ffffffffffffffffffffffffffffffffffffffff166009600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614151515612e0b57600080fd5b863373ffffffffffffffffffffffffffffffffffffffff166009600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161480612eb25750612eb1336009600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16611c41565b5b1515612ebd57600080fd5b612eca8989898989613494565b505050505050505050565b6001600c60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b6000600c60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b61301082611beb565b151561301b57600080fd5b80600b60008481526020019081526020016000209080519060200190613042929190613bf6565b503373ffffffffffffffffffffffffffffffffffffffff166009600084815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16837f47c705b9219229ad762fca605f08fb024a3415d0ae78af5d319820c72e510414846040518080602001828103825283818151815260200191508051906020019080838360005b838110156131075780820151818401526020810190506130ec565b50505050905090810190601f1680156131345780820380516001836020036101000a031916815260200191505b509250505060405180910390a45050565b61314f8383613916565b80600b60008481526020019081526020016000209080519060200190613176929190613bf6565b50505050565b6000806000600a60008581526020019081526020016000205492506131b360016131a58761266a565b613a1490919063ffffffff16565b9150600860008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208281548110151561320157fe5b906000526020600020900154905060006009600086815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600860008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020848154811015156132af57fe5b9060005260206000209001819055506000600860008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208381548110151561330c57fe5b906000526020600020900181905550600860008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548091906001900361336d9190613c8a565b506000600860008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050141561340557600860008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006134049190613cb6565b5b6000600a60008681526020019081526020016000208190555082600a60008381526020019081526020016000208190555061344c6001600754613a1490919063ffffffff16565b6007819055505050505050565b6020604051908101604052806000815250600b60008381526020019081526020016000209080519060200190613490929190613bf6565b5050565b6000806009600087815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1691506134d7828761317c565b6134e18787613916565b6134ea87613a2d565b156137a157600d60009054906101000a900460ff1615151561350b57600080fd5b6001600d60006101000a81548160ff021916908315150217905550613565876040805190810160405280600c81526020017f494173736574486f6c6465720000000000000000000000000000000000000000815250613a40565b905060008173ffffffffffffffffffffffffffffffffffffffff161415151561358d57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff16633bde307287848a8989896040518763ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808781526020018673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001806020018473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200180602001838103835286818151815260200191508051906020019080838360005b838110156136ba57808201518184015260208101905061369f565b50505050905090810190601f1680156136e75780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b83811015613720578082015181840152602081019050613705565b50505050905090810190601f16801561374d5780820380516001836020036101000a031916815260200191505b5098505050505050505050600060405180830381600087803b151561377157600080fd5b6102c65a03f1151561378257600080fd5b5050506000600d60006101000a81548160ff0219169083151502179055505b858773ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8988d59efc2c4547ef86c88f6543963bab0cea94f8e486e619c7c3a790db93be878988604051808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018060200180602001838103835285818151815260200191508051906020019080838360005b8381101561386a57808201518184015260208101905061384f565b50505050905090810190601f1680156138975780820380516001836020036101000a031916815260200191505b50838103825284818151815260200191508051906020019080838360005b838110156138d05780820151818401526020810190506138b5565b50505050905090810190601f1680156138fd5780820380516001836020036101000a031916815260200191505b509550505050505060405180910390a450505050505050565b6000826009600084815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506139738361266a565b9050600860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080548060010182816139c69190613cd7565b91600052602060002090016000849091909150555080600a600084815260200190815260200160002081905550613a096001600754613b9c90919063ffffffff16565b600781905550505050565b6000828211151515613a2257fe5b818303905092915050565b600080823b905060008111915050919050565b6000601060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663aabbb8ca84846040518082805190602001908083835b602083101515613ab75780518252602082019150602081019050602083039250613a92565b6001836020036101000a03801982511681845116808217855250505050505090500191505060405180910390206000604051602001526040518363ffffffff167c0100000000000000000000000000000000000000000000000000000000028152600401808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001826000191660001916815260200192505050602060405180830381600087803b1515613b7957600080fd5b6102c65a03f11515613b8a57600080fd5b50505060405180519050905092915050565b6000808284019050838110151515613bb057fe5b8091505092915050565b602060405190810160405280600081525090565b602060405190810160405280600081525090565b602060405190810160405280600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10613c3757805160ff1916838001178555613c65565b82800160010185558215613c65579182015b82811115613c64578251825591602001919060010190613c49565b5b509050613c729190613d03565b5090565b602060405190810160405280600081525090565b815481835581811511613cb157818360005260206000209182019101613cb09190613d03565b5b505050565b5080546000825590600052602060002090810190613cd49190613d03565b50565b815481835581811511613cfe57818360005260206000209182019101613cfd9190613d03565b5b505050565b613d2591905b80821115613d21576000816000905550600101613d09565b5090565b905600a165627a7a7230582040078a3de66840bb9fdbe57b73aad6aed0e9cb90ae173d6c2cc3c459d13024a80029",
  "sourceMap": "216:3899:2:-;;;195:42:14;97:141;;;;;;;;;;;;;;;;;;;;129:10:9;121:5;;:18;;;;;;;;;;;;;;;;;;216:3899:2;;;;;;",
  "deployedSourceMap": "216:3899:2:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;145:25:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;475:68:19;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2427:112:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1352:88;;;;;;;;;;;;;;;;;;;;;;;;;;;;709:77:19;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;735:168:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2543:306;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;3919:194:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1832:103:19;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;1047:160:19;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;510:110:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;3430:99;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;146:278:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;305:201:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3287:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3533:198:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;837:101:19;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1977:156;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1286:62:2;;;;;;;;;;;;;;1779:137;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;111:30:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;623:82:19;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1920:216:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;907:234;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2853:430;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;55:20:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;547:72:19;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1444:302:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1145:79;;;;;;;;;;;;;;;;;;;;;;;;;;2321:102;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5161:107:19;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1211:102;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2137:393:19;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1317:144;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5272:129:19;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1513:108;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1625:203;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3763:152:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;942:101:19;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5405:168;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;578:124:8;;;;;;;;;;;;;;;;;;;;;;;;;;;;623:108:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;145:25:11;;;;;;;;;;;;;:::o;475:68:19:-;512:6;;:::i;:::-;533:5;526:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;475:68;:::o;2427:112:2:-;2483:7;2505:29;2514:19;2528:1;2531;2514:13;:19::i;:::-;2505:8;:29::i;:::-;2498:36;;2427:112;;;;:::o;1352:88::-;474:5:8;;;;;;;;;;;460:19;;:10;:19;;;453:27;;;;;;1432:3:2;1413:10;:16;1424:4;1413:16;;;;;;;;;;;;;;;:22;;;;1352:88;:::o;709:77:19:-;753:7;775:6;;768:13;;709:77;:::o;735:168:2:-;816:16;:28;833:10;816:28;;;;;;;;;;;;;;;;;;;;;;;;;808:37;;;;;;;;851:47;861:19;875:1;878;861:13;:19::i;:::-;882:11;851:47;;;;;;;;;;;;;:9;:47::i;:::-;735:168;;;:::o;2543:306::-;2607:9;;:::i;:::-;2687:22;;:::i;:::-;2746:6;2643:1;2632;:8;:12;2624:21;;;;;;;;2671:1;:8;2659:1;:8;:20;2651:29;;;;;;;;2726:1;:8;2712:23;;;;;;;;;;;;;;;;;;;;;;;;2687:48;;2755:1;2746:10;;2741:85;2762:1;:8;2758:1;:12;2741:85;;;2796:23;2808:1;2810;2808:4;;;;;;;;;;;;;;;;;;2814:1;2816;2814:4;;;;;;;;;;;;;;;;;;2796:11;:23::i;:::-;2785:5;2791:1;2785:8;;;;;;;;;;;;;;;;;:34;;;;;;;;;;;2772:3;;;;;;;2741:85;;;2839:5;2832:12;;2543:306;;;;;;:::o;3919:194::-;4031:6;4011:1;:8;3999:1;:8;:20;3991:29;;;;;;;;4040:1;4031:10;;4026:83;4047:1;:8;4043:1;:12;4026:83;;;4070:32;4085:1;4087;4085:4;;;;;;;;;;;;;;;;;;4091:1;4093;4091:4;;;;;;;;;;;;;;;;;;4097;4070:14;:32::i;:::-;4057:3;;;;;;;4026:83;;;3919:194;;;;:::o;1832:103:19:-;1889:9;;:::i;:::-;1913;:17;1923:6;1913:17;;;;;;;;;;;;;;;1906:24;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1832:103;;;:::o;1047:160::-;1107:7;1122:14;1139:9;:18;1149:7;1139:18;;;;;;;;;;;;;;;;;;;;;1122:35;;1181:1;1171:6;:11;;;;1163:20;;;;;;;;1196:6;1189:13;;1047:160;;;;:::o;510:110:2:-;474:5:8;;;;;;;;;;;460:19;;:10;:19;;;453:27;;;;;;611:4:2;579:16;:29;596:11;579:29;;;;;;;;;;;;;;;;:36;;;;;;;;;;;;;;;;;;510:110;:::o;3430:99::-;3491:33;3500:2;3504:19;3518:1;3521;3504:13;:19::i;:::-;3491:8;:33::i;:::-;3430:99;;;:::o;146:278:8:-;201:7;216:11;242:6;285;312:11;230:1;216:15;;260:1;251;:8;:10;242:19;;237:155;269:1;265;263;:3;:7;237:155;;;299:1;301;299:4;;;;;;;;;;;;;;;;;;;;294:10;;;285:19;;358:1;353;351;340;:8;:12;:14;339:20;332:2;:28;326:1;:35;312:49;;379:6;369:16;;;;272:3;;;;;;;;237:155;;;412:6;397:22;;146:278;;;;;;;:::o;305:201:2:-;350:27;;;;;;;;;;;;;;;;;;:5;:27;;;;;;;;;;;;:::i;:::-;;383:16;;;;;;;;;;;;;;;;;;:7;:16;;;;;;;;;;;;:::i;:::-;;405:68;;;;;;;;;;;;;;;;;;;;;;;:12;:68;;;;;;;;;;;;:::i;:::-;;479:22;496:4;479:16;:22::i;:::-;305:201;:::o;3287:109::-;3340:6;;:::i;:::-;3361:30;3371:19;3385:1;3388;3371:13;:19::i;:::-;3361:9;:30::i;:::-;3354:37;;3287:109;;;;:::o;3533:198::-;3642:6;3622:1;:8;3610:1;:8;:20;3602:29;;;;;;;;3651:1;3642:10;;3637:90;3658:1;:8;3654:1;:12;3637:90;;;3681:39;3690:2;3694:25;3708:1;3710;3708:4;;;;;;;;;;;;;;;;;;3714:1;3716;3714:4;;;;;;;;;;;;;;;;;;3694:13;:25::i;:::-;3681:8;:39::i;:::-;3668:3;;;;;;;3637:90;;;3533:198;;;;:::o;837:101:19:-;891:4;932:1;910:9;:18;920:7;910:18;;;;;;;;;;;;;;;;;;;;;:23;;;;903:30;;837:101;;;:::o;1977:156::-;2074:4;2095:10;:23;2106:11;2095:23;;;;;;;;;;;;;;;:33;2119:8;2095:33;;;;;;;;;;;;;;;;;;;;;;;;;2088:40;;1977:156;;;;:::o;1286:62:2:-;1340:3;1315:10;:22;1326:10;1315:22;;;;;;;;;;;;;;;:28;;;;1286:62::o;1779:137::-;1837:4;220:66:3;1896:1:2;1891:19;121:66:3;316:35;1863:1:2;1858:16;1857:29;1856:55;1849:62;;1779:137;;;;:::o;111:30:11:-;;;;;;;;;;;;;:::o;623:82:19:-;667:6;;:::i;:::-;688:12;681:19;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;623:82;:::o;1920:216:2:-;1976:3;1981;1992:6;2032;2023:3;121:66:3;2002:5:2;:16;2001:25;;;;;1992:34;;220:66:3;2042:5:2;:17;2032:28;;2074:27;2099:1;2074:24;:27::i;:::-;2103;2128:1;2103:24;:27::i;:::-;2066:65;;;;1920:216;;;;;:::o;907:234::-;1038:6;998:16;:28;1015:10;998:28;;;;;;;;;;;;;;;;;;;;;;;;;990:37;;;;;;;;1047:1;1038:10;;1033:104;1054:1;:8;1050:1;:12;1033:104;;;1077:53;1087:25;1101:1;1103;1101:4;;;;;;;;;;;;;;;;;;1107:1;1109;1107:4;;;;;;;;;;;;;;;;;;1087:13;:25::i;:::-;1114:11;1077:53;;;;;;;;;;;;;:9;:53::i;:::-;1064:3;;;;;;;1033:104;;;907:234;;;;:::o;2853:430::-;2905:5;;:::i;:::-;2912;;:::i;:::-;2925:14;;:::i;:::-;2982;;:::i;:::-;3040:10;3056;3072:11;3120:6;2952:9;:16;2962:5;2952:16;;;;;;;;;;;;;;;:23;;;;2942:34;;;;;;;;;;;;;;;;;;;;;;;;2925:51;;3009:9;:16;3019:5;3009:16;;;;;;;;;;;;;;;:23;;;;2999:34;;;;;;;;;;;;;;;;;;;;;;;;2982:51;;3086:9;:16;3096:5;3086:16;;;;;;;;;;;;;;;:23;;;;3072:37;;3129:1;3120:10;;3115:144;3136:6;3132:1;:10;3115:144;;;3176:34;3190:9;:16;3200:5;3190:16;;;;;;;;;;;;;;;3207:1;3190:19;;;;;;;;;;;;;;;;;;;3176:13;:34::i;:::-;3157:53;;;;;;;;3225:6;3218:1;3220;3218:4;;;;;;;;;;;;;;;;;:13;;;;;3246:6;3239:1;3241;3239:4;;;;;;;;;;;;;;;;;:13;;;;;3144:3;;;;;;;3115:144;;;3273:1;3276;3265:13;;;;2853:430;;;;;;;;;:::o;55:20:9:-;;;;;;;;;;;;;:::o;547:72:19:-;586:6;;:::i;:::-;607:7;600:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;547:72;:::o;1444:302:2:-;1534:6;1573:11;1620:14;1514:1;:8;1502:1;:8;:20;1494:29;;;;;;;;1543:1;1534:10;;1529:213;1550:1;:8;1546:1;:12;1529:213;;;1587:25;1601:1;1603;1601:4;;;;;;;;;;;;;;;;;;1607:1;1609;1607:4;;;;;;;;;;;;;;;;;;1587:13;:25::i;:::-;1573:39;;1637:16;1646:6;1637:8;:16::i;:::-;1620:33;;1692:7;1686:3;:13;1665:10;:18;1676:6;1665:18;;;;;;;;;;;;;;;;:34;1661:75;;;1711:16;1720:6;1711:8;:16::i;:::-;1661:75;1560:3;;;;;;;1529:213;;;1444:302;;;;;:::o;1145:79::-;474:5:8;;;;;;;;;;;460:19;;:10;:19;;;453:27;;;;;;1202:17:2;1211:7;1202:8;:17::i;:::-;1145:79;:::o;2321:102::-;2372:4;2391:27;2398:19;2412:1;2415;2398:13;:19::i;:::-;2391:6;:27::i;:::-;2384:34;;2321:102;;;;:::o;5161:107:19:-;5228:35;5240:2;5244:7;5228:35;;;;;;;;;;;;;5257:1;5228:35;;;;;;;;;;;;;:11;:35::i;:::-;5161:107;;:::o;1211:102::-;1268:6;;:::i;:::-;1289:10;:19;1300:7;1289:19;;;;;;;;;;;1282:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1211:102;;;:::o;2137:393::-;2216:10;2212:257;;;2245:45;2269:8;2279:10;2245:23;:45::i;:::-;2244:46;2236:55;;;;;;;;2299:39;2317:8;2327:10;2299:17;:39::i;:::-;2212:257;;;2367:45;2391:8;2401:10;2367:23;:45::i;:::-;2359:54;;;;;;;;2421:41;2441:8;2451:10;2421:19;:41::i;:::-;2212:257;2502:10;2474:51;;2492:8;2474:51;;;2514:10;2474:51;;;;;;;;;;;;;;;;;;;;;;2137:393;;:::o;1317:144::-;1378:6;;:::i;:::-;1422:1;1400:9;:18;1410:7;1400:18;;;;;;;;;;;;;;;;;;;;;:23;;;;1392:32;;;;;;;;1437:10;:19;1448:7;1437:19;;;;;;;;;;;1430:26;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1317:144;;;:::o;5272:129::-;5355:41;5367:2;5371:7;5380:8;5390:1;5355:41;;;;;;;;;;;;;:11;:41::i;:::-;5272:129;;;:::o;1513:108::-;1570:7;1592:9;:17;1602:6;1592:17;;;;;;;;;;;;;;;:24;;;;1585:31;;1513:108;;;:::o;1625:203::-;1699:7;1730:9;:17;1740:6;1730:17;;;;;;;;;;;;;;;:24;;;;1722:5;:32;1714:41;;;;;;;;1778:6;1769:5;:16;1761:25;;;;;;;;1799:9;:17;1809:6;1799:17;;;;;;;;;;;;;;;1817:5;1799:24;;;;;;;;;;;;;;;;;;;1792:31;;1625:203;;;;:::o;3763:152:2:-;3842:19;3856:1;3859;3842:13;:19::i;:::-;4852:10:19;4830:32;;:9;:18;4840:7;4830:18;;;;;;;;;;;;;;;;;;;;;:32;;;:100;;;;4875:55;4899:10;4911:9;:18;4921:7;4911:18;;;;;;;;;;;;;;;;;;;;;4875:23;:55::i;:::-;4830:100;4822:109;;;;;;;;3876:34:2;3884:19;3898:1;3901;3884:13;:19::i;:::-;3905:4;3876:7;:34::i;:::-;3763:152;;;;:::o;942:101:19:-;998:7;1020:9;:18;1030:7;1020:18;;;;;;;;;;;;;;;;;;;;;1013:25;;942:101;;;:::o;5405:168::-;5508:60;5520:2;5524:7;5533:8;5543:10;5555:12;5508:11;:60::i;:::-;5405:168;;;;:::o;578:124:8:-;474:5;;;;;;;;;;;460:19;;:10;:19;;;453:27;;;;;;668:5;;;;;;;;;;;655:18;;:9;:18;;;;647:27;;;;;;;;688:9;680:5;;:17;;;;;;;;;;;;;;;;;;578:124;:::o;623:108:2:-;474:5:8;;;;;;;;;;;460:19;;:10;:19;;;453:27;;;;;;721:5:2;689:16;:29;706:11;689:29;;;;;;;;;;;;;;;;:37;;;;;;;;;;;;;;;;;;623:108;:::o;4135:237:19:-;4250:1;4228:9;:18;4238:7;4228:18;;;;;;;;;;;;;;;;;;;;;:23;;;4220:32;;;;;;;;4259:39;4271:11;4284:7;4293:4;4259:11;:39::i;:::-;4330:7;4317:11;4305:62;;4314:1;4305:62;4339:10;4357:4;4305:62;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4135:237:19;;;:::o;496:78:8:-;549:20;564:4;549:14;:20::i;:::-;541:5;;:28;;;;;;;;;;;;;;;;;;496:78;:::o;2140:177:2:-;2209:3;2244:1;2233:6;2224:5;:16;:21;;2220:70;;;121:66:3;2266:5:2;:16;2255:28;;;;2220:70;2306:5;2295:17;;2140:177;;;;:::o;4376:242:19:-;4426:14;4443:9;:18;4453:7;4443:18;;;;;;;;;;;;;;;;;;;;;4426:35;;4485:1;4475:6;:11;;;;4467:20;;;;;;;;4494:33;4511:6;4519:7;4494:16;:33::i;:::-;4533:25;4550:7;4533:16;:25::i;:::-;4585:7;4582:1;4574:6;4565:48;;;4594:10;4565:48;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4376:242;;:::o;5577:302::-;5714:2;5027:1;5012:11;:16;;;;5004:25;;;;;;;;5745:7;5754:2;5142;5120:24;;:9;:18;5130:7;5120:18;;;;;;;;;;;;;;;;;;;;;:24;;;;5112:33;;;;;;;;5783:7;4852:10;4830:32;;:9;:18;4840:7;4830:18;;;;;;;;;;;;;;;;;;;;;:32;;;:100;;;;4875:55;4899:10;4911:9;:18;4921:7;4911:18;;;;;;;;;;;;;;;;;;;;;4875:23;:55::i;:::-;4830:100;4822:109;;;;;;;;5820:54;5828:2;5832:7;5841:8;5851;5861:12;5820:7;:54::i;:::-;5151:1;5035;;5577:302;;;;;;:::o;2534:115::-;2640:4;2609:10;:18;2620:6;2609:18;;;;;;;;;;;;;;;:28;2628:8;2609:28;;;;;;;;;;;;;;;;:35;;;;;;;;;;;;;;;;;;2534:115;;:::o;2653:118::-;2761:5;2730:10;:18;2741:6;2730:18;;;;;;;;;;;;;;;:28;2749:8;2730:28;;;;;;;;;;;;;;;;:36;;;;;;;;;;;;;;;;;;2653:118;;:::o;6550:182::-;6620:15;6627:7;6620:6;:15::i;:::-;6612:24;;;;;;;;6664:4;6642:10;:19;6653:7;6642:19;;;;;;;;;;;:26;;;;;;;;;;;;:::i;:::-;;6710:10;6674:53;;6690:9;:18;6700:7;6690:18;;;;;;;;;;;;;;;;;;;;;6674:53;;6681:7;6674:53;6722:4;6674:53;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6550:182:19;;:::o;3047:140::-;3125:24;3137:2;3141:7;3125:11;:24::i;:::-;3178:4;3156:10;:19;3167:7;3156:19;;;;;;;;;;;:26;;;;;;;;;;;;:::i;:::-;;3047:140;;;:::o;3191:807::-;3263:18;3312:22;3366:19;3284:13;:22;3298:7;3284:22;;;;;;;;;;;;3263:43;;3337:23;3358:1;3337:16;3348:4;3337:10;:16::i;:::-;:20;;:23;;;;:::i;:::-;3312:48;;3388:9;:15;3398:4;3388:15;;;;;;;;;;;;;;;3404:14;3388:31;;;;;;;;;;;;;;;;;;;3366:53;;3447:1;3426:9;:18;3436:7;3426:18;;;;;;;;;;;;:22;;;;;;;;;;;;;;;;;;3579:11;3549:9;:15;3559:4;3549:15;;;;;;;;;;;;;;;3565:10;3549:27;;;;;;;;;;;;;;;;;;:41;;;;3655:1;3621:9;:15;3631:4;3621:15;;;;;;;;;;;;;;;3637:14;3621:31;;;;;;;;;;;;;;;;;;:35;;;;3662:9;:15;3672:4;3662:15;;;;;;;;;;;;;;;:24;;;;;;;;;;;;:::i;:::-;;3796:1;3770:9;:15;3780:4;3770:15;;;;;;;;;;;;;;;:22;;;;:27;3766:70;;;3814:9;:15;3824:4;3814:15;;;;;;;;;;;;;;;;3807:22;;;;:::i;:::-;3766:70;3918:1;3893:13;:22;3907:7;3893:22;;;;;;;;;;;:26;;;;3954:10;3925:13;:26;3939:11;3925:26;;;;;;;;;;;:39;;;;3980:13;3991:1;3980:6;;:10;;:13;;;;:::i;:::-;3971:6;:22;;;;3191:807;;;;;:::o;4002:87::-;4060:24;;;;;;;;;;;;;:10;:19;4071:7;4060:19;;;;;;;;;;;:24;;;;;;;;;;;;:::i;:::-;;4002:87;:::o;5884:621::-;6013:14;6209:17;6030:9;:18;6040:7;6030:18;;;;;;;;;;;;;;;;;;;;;6013:35;;6054:33;6071:6;6079:7;6054:16;:33::i;:::-;6093:24;6105:2;6109:7;6093:11;:24::i;:::-;6128:15;6140:2;6128:11;:15::i;:::-;6124:307;;;6162:11;;;;;;;;;;;6161:12;6153:21;;;;;;;;6196:4;6182:11;;:18;;;;;;;;;;;;;;;;;;6229:33;6243:2;6229:33;;;;;;;;;;;;;;;;;;:13;:33::i;:::-;6209:53;;6291:1;6278:9;:14;;;;6270:23;;;;;;;;6315:9;6302:39;;;6342:7;6351:6;6359:2;6363:8;6373;6383:12;6302:94;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6419:5:19;6405:11;;:19;;;;;;;;;;;;;;;;;;6124:307;6458:7;6454:2;6437:63;;6446:6;6437:63;;;6467:8;6477;6487:12;6437:63;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1;8:100;33:3;30:1;27:2;8:100;;;99:1;94:3;90;84:5;80:1;75:3;71;64:6;52:2;49:1;45:3;40:15;;8:100;;;12:14;3:109;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5884:621:19;;;;;;;:::o;2811:232::-;2906:14;2897:2;2876:9;:18;2886:7;2876:18;;;;;;;;;;;;:23;;;;;;;;;;;;;;;;;;2923:14;2934:2;2923:10;:14::i;:::-;2906:31;;2944:9;:13;2954:2;2944:13;;;;;;;;;;;;;;;:27;;;;;;;;;;;:::i;:::-;;;;;;;;;;2963:7;2944:27;;;;;;;3003:6;2978:13;:22;2992:7;2978:22;;;;;;;;;;;:31;;;;3025:13;3036:1;3025:6;;:10;;:13;;;;:::i;:::-;3016:6;:22;;;;2811:232;;;:::o;836:110:20:-;894:7;921:1;916;:6;;909:14;;;;;;940:1;936;:5;929:12;;836:110;;;;:::o;6762:148:19:-;6820:4;6832:9;6878:4;6866:11;6858:25;;6904:1;6897:4;:8;6890:15;;6762:148;;;;:::o;436:199:14:-;518:7;544:31;;;;;;;;;;;:55;;;600:4;616:10;606:21;;;;;;;;;;;;;36:153:-1;66:2;61:3;58:2;51:6;36:153;;;182:3;176:5;171:3;164:6;98:2;93:3;89;82:19;;123:2;118:3;114;107:19;;148:2;143:3;139;132:19;;36:153;;;274:1;267:3;263:2;259:3;254;250;246;315:4;311:3;305;299:5;295:3;356:4;350:3;344:5;340:3;389:7;380;377:2;372:3;365:6;3:399;;;;;;;;;;;;;;;;;;;544:84:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;537:91;;436:199;;;;:::o;1008:129:20:-;1066:7;1081:9;1097:1;1093;:5;1081:17;;1116:1;1111;:6;;1104:14;;;;;;1131:1;1124:8;;1008:129;;;;;:::o;216:3899:2:-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "pragma solidity ^0.4.18;\n\nimport '../Storage.sol';\n\nimport '../upgradable/Ownable.sol';\n\nimport '../upgradable/IApplication.sol';\n\nimport 'erc821/contracts/StandardAssetRegistry.sol';\n\nimport './ILANDRegistry.sol';\n\ncontract LANDRegistry is Storage,\n  Ownable, StandardAssetRegistry,\n  ILANDRegistry\n{\n\n  function initialize(bytes data) public {\n    _name = 'Decentraland LAND';\n    _symbol = 'LAND';\n    _description = 'Contract that stores the Decentraland LAND registry';\n    super.initialize(data);\n  }\n\n  function authorizeDeploy(address beneficiary) public onlyOwner {\n    authorizedDeploy[beneficiary] = true;\n  }\n  function forbidDeploy(address beneficiary) public onlyOwner {\n    authorizedDeploy[beneficiary] = false;\n  }\n\n  function assignNewParcel(int x, int y, address beneficiary) public {\n    require(authorizedDeploy[msg.sender]);\n    _generate(encodeTokenId(x, y), beneficiary, '');\n  }\n\n  function assignMultipleParcels(int[] x, int[] y, address beneficiary) public {\n    require(authorizedDeploy[msg.sender]);\n    for (uint i = 0; i < x.length; i++) {\n      _generate(encodeTokenId(x[i], y[i]), beneficiary, '');\n    }\n  }\n\n  function destroy(uint256 assetId) onlyOwner public {\n    _destroy(assetId);\n  }\n\n  //\n  // Inactive keys after 1 year lose ownership\n  //\n\n  function ping() public {\n    latestPing[msg.sender] = now;\n  }\n\n  function setLatestToNow(address user) onlyOwner public {\n    latestPing[user] = now;\n  }\n\n  function clearLand(int[] x, int[] y) public {\n    require(x.length == y.length);\n    for (uint i = 0; i < x.length; i++) {\n      uint landId = encodeTokenId(x[i], y[i]);\n      address holder = holderOf(landId);\n      if (latestPing[holder] < now - 1 years) {\n        _destroy(landId);\n      }\n    }\n  }\n\n  //\n  // LAND Getters\n  //\n\n  function encodeTokenId(int x, int y) view public returns (uint) {\n    return ((uint(x) * factor) & clearLow) | (uint(y) & clearHigh);\n  }\n\n  function decodeTokenId(uint value) view public returns (int, int) {\n    uint x = (value & clearLow) >> 128;\n    uint y = (value & clearHigh);\n    return (expandNegative128BitCast(x), expandNegative128BitCast(y));\n  }\n\n  function expandNegative128BitCast(uint value) pure internal returns (int) {\n    if (value & (1<<127) != 0) {\n      return int(value | clearLow);\n    }\n    return int(value);\n  }\n\n  function exists(int x, int y) view public returns (bool) {\n    return exists(encodeTokenId(x, y));\n  }\n\n  function ownerOfLand(int x, int y) view public returns (address) {\n    return holderOf(encodeTokenId(x, y));\n  }\n\n  function ownerOfLandMany(int[] x, int[] y) view public returns (address[]) {\n    require(x.length > 0);\n    require(x.length == y.length);\n\n    address[] memory addrs = new address[](x.length);\n    for (uint i = 0; i < x.length; i++) {\n      addrs[i] = ownerOfLand(x[i], y[i]);\n    }\n\n    return addrs;\n  }\n\n  function landOf(address owner) public view returns (int[], int[]) {\n    int[] memory x = new int[](_assetsOf[owner].length);\n    int[] memory y = new int[](_assetsOf[owner].length);\n\n    int assetX;\n    int assetY;\n    uint length = _assetsOf[owner].length;\n    for (uint i = 0; i < length; i++) {\n      (assetX, assetY) = decodeTokenId(_assetsOf[owner][i]);\n      x[i] = assetX;\n      y[i] = assetY;\n    }\n\n    return (x, y);\n  }\n\n  function landData(int x, int y) view public returns (string) {\n    return assetData(encodeTokenId(x, y));\n  }\n\n  //\n  // Transfer LAND\n  //\n\n  function transferLand(int x, int y, address to) public {\n    transfer(to, encodeTokenId(x, y));\n  }\n\n  function transferManyLand(int[] x, int[] y, address to) public {\n    require(x.length == y.length);\n    for (uint i = 0; i < x.length; i++) {\n      transfer(to, encodeTokenId(x[i], y[i]));\n    }\n  }\n\n  //\n  // Update LAND\n  //\n\n  function updateLandData(int x, int y, string data) public onlyOperatorOrHolder(encodeTokenId(x, y)) {\n    return _update(encodeTokenId(x, y), data);\n  }\n\n  function updateManyLandData(int[] x, int[] y, string data) public {\n    require(x.length == y.length);\n    for (uint i = 0; i < x.length; i++) {\n      updateLandData(x[i], y[i], data);\n    }\n  }\n}\n",
  "sourcePath": "/Users/nuqu/Repositories/land/contracts/land/LANDRegistry.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/nuqu/Repositories/land/contracts/land/LANDRegistry.sol",
      "exportedSymbols": {
        "LANDRegistry": [
          822
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "^",
            "0.4",
            ".18"
          ]
        },
        "id": 159,
        "name": "PragmaDirective",
        "src": "0:24:2"
      },
      {
        "attributes": {
          "SourceUnit": 15,
          "absolutePath": "/Users/nuqu/Repositories/land/contracts/Storage.sol",
          "file": "../Storage.sol",
          "scope": 823,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 160,
        "name": "ImportDirective",
        "src": "26:24:2"
      },
      {
        "attributes": {
          "SourceUnit": 1042,
          "absolutePath": "/Users/nuqu/Repositories/land/contracts/upgradable/Ownable.sol",
          "file": "../upgradable/Ownable.sol",
          "scope": 823,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 161,
        "name": "ImportDirective",
        "src": "52:35:2"
      },
      {
        "attributes": {
          "SourceUnit": 917,
          "absolutePath": "/Users/nuqu/Repositories/land/contracts/upgradable/IApplication.sol",
          "file": "../upgradable/IApplication.sol",
          "scope": 823,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 162,
        "name": "ImportDirective",
        "src": "89:40:2"
      },
      {
        "attributes": {
          "SourceUnit": 2607,
          "absolutePath": "erc821/contracts/StandardAssetRegistry.sol",
          "file": "erc821/contracts/StandardAssetRegistry.sol",
          "scope": 823,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 163,
        "name": "ImportDirective",
        "src": "131:52:2"
      },
      {
        "attributes": {
          "SourceUnit": 158,
          "absolutePath": "/Users/nuqu/Repositories/land/contracts/land/ILANDRegistry.sol",
          "file": "./ILANDRegistry.sol",
          "scope": 823,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 164,
        "name": "ImportDirective",
        "src": "185:29:2"
      },
      {
        "attributes": {
          "contractDependencies": [
            14,
            157,
            842,
            1041,
            1055,
            1191,
            1452,
            1634,
            1802,
            2606
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            822,
            157,
            2606,
            1452,
            1802,
            1041,
            14,
            842,
            1634,
            1055,
            1191
          ],
          "name": "LANDRegistry",
          "scope": 823
        },
        "children": [
          {
            "attributes": {
              "arguments": [
                null
              ]
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "Storage",
                  "referencedDeclaration": 14,
                  "type": "contract Storage"
                },
                "id": 165,
                "name": "UserDefinedTypeName",
                "src": "241:7:2"
              }
            ],
            "id": 166,
            "name": "InheritanceSpecifier",
            "src": "241:7:2"
          },
          {
            "attributes": {
              "arguments": [
                null
              ]
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "Ownable",
                  "referencedDeclaration": 1041,
                  "type": "contract Ownable"
                },
                "id": 167,
                "name": "UserDefinedTypeName",
                "src": "252:7:2"
              }
            ],
            "id": 168,
            "name": "InheritanceSpecifier",
            "src": "252:7:2"
          },
          {
            "attributes": {
              "arguments": [
                null
              ]
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "StandardAssetRegistry",
                  "referencedDeclaration": 2606,
                  "type": "contract StandardAssetRegistry"
                },
                "id": 169,
                "name": "UserDefinedTypeName",
                "src": "261:21:2"
              }
            ],
            "id": 170,
            "name": "InheritanceSpecifier",
            "src": "261:21:2"
          },
          {
            "attributes": {
              "arguments": [
                null
              ]
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "ILANDRegistry",
                  "referencedDeclaration": 157,
                  "type": "contract ILANDRegistry"
                },
                "id": 171,
                "name": "UserDefinedTypeName",
                "src": "286:13:2"
              }
            ],
            "id": 172,
            "name": "InheritanceSpecifier",
            "src": "286:13:2"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "initialize",
              "payable": false,
              "scope": 822,
              "stateMutability": "nonpayable",
              "superFunction": 1022,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "data",
                      "scope": 196,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes",
                          "type": "bytes storage pointer"
                        },
                        "id": 173,
                        "name": "ElementaryTypeName",
                        "src": "325:5:2"
                      }
                    ],
                    "id": 174,
                    "name": "VariableDeclaration",
                    "src": "325:10:2"
                  }
                ],
                "id": 175,
                "name": "ParameterList",
                "src": "324:12:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 176,
                "name": "ParameterList",
                "src": "344:0:2"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "string storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1602,
                              "type": "string storage ref",
                              "value": "_name"
                            },
                            "id": 177,
                            "name": "Identifier",
                            "src": "350:5:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "446563656e7472616c616e64204c414e44",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "string",
                              "type": "literal_string \"Decentraland LAND\"",
                              "value": "Decentraland LAND"
                            },
                            "id": 178,
                            "name": "Literal",
                            "src": "358:19:2"
                          }
                        ],
                        "id": 179,
                        "name": "Assignment",
                        "src": "350:27:2"
                      }
                    ],
                    "id": 180,
                    "name": "ExpressionStatement",
                    "src": "350:27:2"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "string storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1604,
                              "type": "string storage ref",
                              "value": "_symbol"
                            },
                            "id": 181,
                            "name": "Identifier",
                            "src": "383:7:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "4c414e44",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "string",
                              "type": "literal_string \"LAND\"",
                              "value": "LAND"
                            },
                            "id": 182,
                            "name": "Literal",
                            "src": "393:6:2"
                          }
                        ],
                        "id": 183,
                        "name": "Assignment",
                        "src": "383:16:2"
                      }
                    ],
                    "id": 184,
                    "name": "ExpressionStatement",
                    "src": "383:16:2"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "string storage ref"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1606,
                              "type": "string storage ref",
                              "value": "_description"
                            },
                            "id": 185,
                            "name": "Identifier",
                            "src": "405:12:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "436f6e747261637420746861742073746f7265732074686520446563656e7472616c616e64204c414e44207265676973747279",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "string",
                              "type": "literal_string \"Contract that stores the Decentraland LAND registry\"",
                              "value": "Contract that stores the Decentraland LAND registry"
                            },
                            "id": 186,
                            "name": "Literal",
                            "src": "420:53:2"
                          }
                        ],
                        "id": 187,
                        "name": "Assignment",
                        "src": "405:68:2"
                      }
                    ],
                    "id": 188,
                    "name": "ExpressionStatement",
                    "src": "405:68:2"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes_memory_ptr",
                                  "typeString": "bytes memory"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "initialize",
                              "referencedDeclaration": 1022,
                              "type": "function (bytes memory)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 2812,
                                  "type": "contract super LANDRegistry",
                                  "value": "super"
                                },
                                "id": 189,
                                "name": "Identifier",
                                "src": "479:5:2"
                              }
                            ],
                            "id": 191,
                            "name": "MemberAccess",
                            "src": "479:16:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 174,
                              "type": "bytes memory",
                              "value": "data"
                            },
                            "id": 192,
                            "name": "Identifier",
                            "src": "496:4:2"
                          }
                        ],
                        "id": 193,
                        "name": "FunctionCall",
                        "src": "479:22:2"
                      }
                    ],
                    "id": 194,
                    "name": "ExpressionStatement",
                    "src": "479:22:2"
                  }
                ],
                "id": 195,
                "name": "Block",
                "src": "344:162:2"
              }
            ],
            "id": 196,
            "name": "FunctionDefinition",
            "src": "305:201:2"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "authorizeDeploy",
              "payable": false,
              "scope": 822,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "beneficiary",
                      "scope": 210,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 197,
                        "name": "ElementaryTypeName",
                        "src": "535:7:2"
                      }
                    ],
                    "id": 198,
                    "name": "VariableDeclaration",
                    "src": "535:19:2"
                  }
                ],
                "id": 199,
                "name": "ParameterList",
                "src": "534:21:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 202,
                "name": "ParameterList",
                "src": "573:0:2"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 1010,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 200,
                    "name": "Identifier",
                    "src": "563:9:2"
                  }
                ],
                "id": 201,
                "name": "ModifierInvocation",
                "src": "563:9:2"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 841,
                                  "type": "mapping(address => bool)",
                                  "value": "authorizedDeploy"
                                },
                                "id": 203,
                                "name": "Identifier",
                                "src": "579:16:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 198,
                                  "type": "address",
                                  "value": "beneficiary"
                                },
                                "id": 204,
                                "name": "Identifier",
                                "src": "596:11:2"
                              }
                            ],
                            "id": 205,
                            "name": "IndexAccess",
                            "src": "579:29:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "74727565",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "bool",
                              "type": "bool",
                              "value": "true"
                            },
                            "id": 206,
                            "name": "Literal",
                            "src": "611:4:2"
                          }
                        ],
                        "id": 207,
                        "name": "Assignment",
                        "src": "579:36:2"
                      }
                    ],
                    "id": 208,
                    "name": "ExpressionStatement",
                    "src": "579:36:2"
                  }
                ],
                "id": 209,
                "name": "Block",
                "src": "573:47:2"
              }
            ],
            "id": 210,
            "name": "FunctionDefinition",
            "src": "510:110:2"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "forbidDeploy",
              "payable": false,
              "scope": 822,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "beneficiary",
                      "scope": 224,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 211,
                        "name": "ElementaryTypeName",
                        "src": "645:7:2"
                      }
                    ],
                    "id": 212,
                    "name": "VariableDeclaration",
                    "src": "645:19:2"
                  }
                ],
                "id": 213,
                "name": "ParameterList",
                "src": "644:21:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 216,
                "name": "ParameterList",
                "src": "683:0:2"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 1010,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 214,
                    "name": "Identifier",
                    "src": "673:9:2"
                  }
                ],
                "id": 215,
                "name": "ModifierInvocation",
                "src": "673:9:2"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 841,
                                  "type": "mapping(address => bool)",
                                  "value": "authorizedDeploy"
                                },
                                "id": 217,
                                "name": "Identifier",
                                "src": "689:16:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 212,
                                  "type": "address",
                                  "value": "beneficiary"
                                },
                                "id": 218,
                                "name": "Identifier",
                                "src": "706:11:2"
                              }
                            ],
                            "id": 219,
                            "name": "IndexAccess",
                            "src": "689:29:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "66616c7365",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "bool",
                              "type": "bool",
                              "value": "false"
                            },
                            "id": 220,
                            "name": "Literal",
                            "src": "721:5:2"
                          }
                        ],
                        "id": 221,
                        "name": "Assignment",
                        "src": "689:37:2"
                      }
                    ],
                    "id": 222,
                    "name": "ExpressionStatement",
                    "src": "689:37:2"
                  }
                ],
                "id": 223,
                "name": "Block",
                "src": "683:48:2"
              }
            ],
            "id": 224,
            "name": "FunctionDefinition",
            "src": "623:108:2"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "assignNewParcel",
              "payable": false,
              "scope": 822,
              "stateMutability": "nonpayable",
              "superFunction": 25,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "x",
                      "scope": 250,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "int256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "int",
                          "type": "int256"
                        },
                        "id": 225,
                        "name": "ElementaryTypeName",
                        "src": "760:3:2"
                      }
                    ],
                    "id": 226,
                    "name": "VariableDeclaration",
                    "src": "760:5:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "y",
                      "scope": 250,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "int256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "int",
                          "type": "int256"
                        },
                        "id": 227,
                        "name": "ElementaryTypeName",
                        "src": "767:3:2"
                      }
                    ],
                    "id": 228,
                    "name": "VariableDeclaration",
                    "src": "767:5:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "beneficiary",
                      "scope": 250,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 229,
                        "name": "ElementaryTypeName",
                        "src": "774:7:2"
                      }
                    ],
                    "id": 230,
                    "name": "VariableDeclaration",
                    "src": "774:19:2"
                  }
                ],
                "id": 231,
                "name": "ParameterList",
                "src": "759:35:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 232,
                "name": "ParameterList",
                "src": "802:0:2"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2775,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 233,
                            "name": "Identifier",
                            "src": "808:7:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 841,
                                  "type": "mapping(address => bool)",
                                  "value": "authorizedDeploy"
                                },
                                "id": 234,
                                "name": "Identifier",
                                "src": "816:16:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2772,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 235,
                                    "name": "Identifier",
                                    "src": "833:3:2"
                                  }
                                ],
                                "id": 236,
                                "name": "MemberAccess",
                                "src": "833:10:2"
                              }
                            ],
                            "id": 237,
                            "name": "IndexAccess",
                            "src": "816:28:2"
                          }
                        ],
                        "id": 238,
                        "name": "FunctionCall",
                        "src": "808:37:2"
                      }
                    ],
                    "id": 239,
                    "name": "ExpressionStatement",
                    "src": "808:37:2"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                  "typeString": "literal_string \"\""
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2287,
                              "type": "function (uint256,address,string memory)",
                              "value": "_generate"
                            },
                            "id": 240,
                            "name": "Identifier",
                            "src": "851:9:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    },
                                    {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    420
                                  ],
                                  "referencedDeclaration": 420,
                                  "type": "function (int256,int256) view returns (uint256)",
                                  "value": "encodeTokenId"
                                },
                                "id": 241,
                                "name": "Identifier",
                                "src": "861:13:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 226,
                                  "type": "int256",
                                  "value": "x"
                                },
                                "id": 242,
                                "name": "Identifier",
                                "src": "875:1:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 228,
                                  "type": "int256",
                                  "value": "y"
                                },
                                "id": 243,
                                "name": "Identifier",
                                "src": "878:1:2"
                              }
                            ],
                            "id": 244,
                            "name": "FunctionCall",
                            "src": "861:19:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 230,
                              "type": "address",
                              "value": "beneficiary"
                            },
                            "id": 245,
                            "name": "Identifier",
                            "src": "882:11:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "string",
                              "type": "literal_string \"\"",
                              "value": ""
                            },
                            "id": 246,
                            "name": "Literal",
                            "src": "895:2:2"
                          }
                        ],
                        "id": 247,
                        "name": "FunctionCall",
                        "src": "851:47:2"
                      }
                    ],
                    "id": 248,
                    "name": "ExpressionStatement",
                    "src": "851:47:2"
                  }
                ],
                "id": 249,
                "name": "Block",
                "src": "802:101:2"
              }
            ],
            "id": 250,
            "name": "FunctionDefinition",
            "src": "735:168:2"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "assignMultipleParcels",
              "payable": false,
              "scope": 822,
              "stateMutability": "nonpayable",
              "superFunction": 36,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "x",
                      "scope": 295,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "int256[] memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "length": null,
                          "type": "int256[] storage pointer"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "int",
                              "type": "int256"
                            },
                            "id": 251,
                            "name": "ElementaryTypeName",
                            "src": "938:3:2"
                          }
                        ],
                        "id": 252,
                        "name": "ArrayTypeName",
                        "src": "938:5:2"
                      }
                    ],
                    "id": 253,
                    "name": "VariableDeclaration",
                    "src": "938:7:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "y",
                      "scope": 295,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "int256[] memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "length": null,
                          "type": "int256[] storage pointer"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "int",
                              "type": "int256"
                            },
                            "id": 254,
                            "name": "ElementaryTypeName",
                            "src": "947:3:2"
                          }
                        ],
                        "id": 255,
                        "name": "ArrayTypeName",
                        "src": "947:5:2"
                      }
                    ],
                    "id": 256,
                    "name": "VariableDeclaration",
                    "src": "947:7:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "beneficiary",
                      "scope": 295,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 257,
                        "name": "ElementaryTypeName",
                        "src": "956:7:2"
                      }
                    ],
                    "id": 258,
                    "name": "VariableDeclaration",
                    "src": "956:19:2"
                  }
                ],
                "id": 259,
                "name": "ParameterList",
                "src": "937:39:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 260,
                "name": "ParameterList",
                "src": "984:0:2"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2775,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 261,
                            "name": "Identifier",
                            "src": "990:7:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 841,
                                  "type": "mapping(address => bool)",
                                  "value": "authorizedDeploy"
                                },
                                "id": 262,
                                "name": "Identifier",
                                "src": "998:16:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2772,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 263,
                                    "name": "Identifier",
                                    "src": "1015:3:2"
                                  }
                                ],
                                "id": 264,
                                "name": "MemberAccess",
                                "src": "1015:10:2"
                              }
                            ],
                            "id": 265,
                            "name": "IndexAccess",
                            "src": "998:28:2"
                          }
                        ],
                        "id": 266,
                        "name": "FunctionCall",
                        "src": "990:37:2"
                      }
                    ],
                    "id": 267,
                    "name": "ExpressionStatement",
                    "src": "990:37:2"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "assignments": [
                            269
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "i",
                              "scope": 295,
                              "stateVariable": false,
                              "storageLocation": "default",
                              "type": "uint256",
                              "value": null,
                              "visibility": "internal"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "uint",
                                  "type": "uint256"
                                },
                                "id": 268,
                                "name": "ElementaryTypeName",
                                "src": "1038:4:2"
                              }
                            ],
                            "id": 269,
                            "name": "VariableDeclaration",
                            "src": "1038:6:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 270,
                            "name": "Literal",
                            "src": "1047:1:2"
                          }
                        ],
                        "id": 271,
                        "name": "VariableDeclarationStatement",
                        "src": "1038:10:2"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "<",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 269,
                              "type": "uint256",
                              "value": "i"
                            },
                            "id": 272,
                            "name": "Identifier",
                            "src": "1050:1:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "length",
                              "referencedDeclaration": null,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 253,
                                  "type": "int256[] memory",
                                  "value": "x"
                                },
                                "id": 273,
                                "name": "Identifier",
                                "src": "1054:1:2"
                              }
                            ],
                            "id": 274,
                            "name": "MemberAccess",
                            "src": "1054:8:2"
                          }
                        ],
                        "id": 275,
                        "name": "BinaryOperation",
                        "src": "1050:12:2"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "++",
                              "prefix": false,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 269,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 276,
                                "name": "Identifier",
                                "src": "1064:1:2"
                              }
                            ],
                            "id": 277,
                            "name": "UnaryOperation",
                            "src": "1064:3:2"
                          }
                        ],
                        "id": 278,
                        "name": "ExpressionStatement",
                        "src": "1064:3:2"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "tuple()",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        },
                                        {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        },
                                        {
                                          "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                          "typeString": "literal_string \"\""
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2287,
                                      "type": "function (uint256,address,string memory)",
                                      "value": "_generate"
                                    },
                                    "id": 279,
                                    "name": "Identifier",
                                    "src": "1077:9:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "uint256",
                                      "type_conversion": false
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_int256",
                                              "typeString": "int256"
                                            },
                                            {
                                              "typeIdentifier": "t_int256",
                                              "typeString": "int256"
                                            }
                                          ],
                                          "overloadedDeclarations": [
                                            420
                                          ],
                                          "referencedDeclaration": 420,
                                          "type": "function (int256,int256) view returns (uint256)",
                                          "value": "encodeTokenId"
                                        },
                                        "id": 280,
                                        "name": "Identifier",
                                        "src": "1087:13:2"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "int256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 253,
                                              "type": "int256[] memory",
                                              "value": "x"
                                            },
                                            "id": 281,
                                            "name": "Identifier",
                                            "src": "1101:1:2"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 269,
                                              "type": "uint256",
                                              "value": "i"
                                            },
                                            "id": 282,
                                            "name": "Identifier",
                                            "src": "1103:1:2"
                                          }
                                        ],
                                        "id": 283,
                                        "name": "IndexAccess",
                                        "src": "1101:4:2"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "int256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 256,
                                              "type": "int256[] memory",
                                              "value": "y"
                                            },
                                            "id": 284,
                                            "name": "Identifier",
                                            "src": "1107:1:2"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 269,
                                              "type": "uint256",
                                              "value": "i"
                                            },
                                            "id": 285,
                                            "name": "Identifier",
                                            "src": "1109:1:2"
                                          }
                                        ],
                                        "id": 286,
                                        "name": "IndexAccess",
                                        "src": "1107:4:2"
                                      }
                                    ],
                                    "id": 287,
                                    "name": "FunctionCall",
                                    "src": "1087:25:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 258,
                                      "type": "address",
                                      "value": "beneficiary"
                                    },
                                    "id": 288,
                                    "name": "Identifier",
                                    "src": "1114:11:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "string",
                                      "type": "literal_string \"\"",
                                      "value": ""
                                    },
                                    "id": 289,
                                    "name": "Literal",
                                    "src": "1127:2:2"
                                  }
                                ],
                                "id": 290,
                                "name": "FunctionCall",
                                "src": "1077:53:2"
                              }
                            ],
                            "id": 291,
                            "name": "ExpressionStatement",
                            "src": "1077:53:2"
                          }
                        ],
                        "id": 292,
                        "name": "Block",
                        "src": "1069:68:2"
                      }
                    ],
                    "id": 293,
                    "name": "ForStatement",
                    "src": "1033:104:2"
                  }
                ],
                "id": 294,
                "name": "Block",
                "src": "984:157:2"
              }
            ],
            "id": 295,
            "name": "FunctionDefinition",
            "src": "907:234:2"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "destroy",
              "payable": false,
              "scope": 822,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "assetId",
                      "scope": 307,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 296,
                        "name": "ElementaryTypeName",
                        "src": "1162:7:2"
                      }
                    ],
                    "id": 297,
                    "name": "VariableDeclaration",
                    "src": "1162:15:2"
                  }
                ],
                "id": 298,
                "name": "ParameterList",
                "src": "1161:17:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 301,
                "name": "ParameterList",
                "src": "1196:0:2"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 1010,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 299,
                    "name": "Identifier",
                    "src": "1179:9:2"
                  }
                ],
                "id": 300,
                "name": "ModifierInvocation",
                "src": "1179:9:2"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2324,
                              "type": "function (uint256)",
                              "value": "_destroy"
                            },
                            "id": 302,
                            "name": "Identifier",
                            "src": "1202:8:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 297,
                              "type": "uint256",
                              "value": "assetId"
                            },
                            "id": 303,
                            "name": "Identifier",
                            "src": "1211:7:2"
                          }
                        ],
                        "id": 304,
                        "name": "FunctionCall",
                        "src": "1202:17:2"
                      }
                    ],
                    "id": 305,
                    "name": "ExpressionStatement",
                    "src": "1202:17:2"
                  }
                ],
                "id": 306,
                "name": "Block",
                "src": "1196:28:2"
              }
            ],
            "id": 307,
            "name": "FunctionDefinition",
            "src": "1145:79:2"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "ping",
              "payable": false,
              "scope": 822,
              "stateMutability": "nonpayable",
              "superFunction": 39,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 308,
                "name": "ParameterList",
                "src": "1299:2:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 309,
                "name": "ParameterList",
                "src": "1309:0:2"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 828,
                                  "type": "mapping(address => uint256)",
                                  "value": "latestPing"
                                },
                                "id": 310,
                                "name": "Identifier",
                                "src": "1315:10:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "sender",
                                  "referencedDeclaration": null,
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 2772,
                                      "type": "msg",
                                      "value": "msg"
                                    },
                                    "id": 311,
                                    "name": "Identifier",
                                    "src": "1326:3:2"
                                  }
                                ],
                                "id": 312,
                                "name": "MemberAccess",
                                "src": "1326:10:2"
                              }
                            ],
                            "id": 313,
                            "name": "IndexAccess",
                            "src": "1315:22:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2774,
                              "type": "uint256",
                              "value": "now"
                            },
                            "id": 314,
                            "name": "Identifier",
                            "src": "1340:3:2"
                          }
                        ],
                        "id": 315,
                        "name": "Assignment",
                        "src": "1315:28:2"
                      }
                    ],
                    "id": 316,
                    "name": "ExpressionStatement",
                    "src": "1315:28:2"
                  }
                ],
                "id": 317,
                "name": "Block",
                "src": "1309:39:2"
              }
            ],
            "id": 318,
            "name": "FunctionDefinition",
            "src": "1286:62:2"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "setLatestToNow",
              "payable": false,
              "scope": 822,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "user",
                      "scope": 332,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 319,
                        "name": "ElementaryTypeName",
                        "src": "1376:7:2"
                      }
                    ],
                    "id": 320,
                    "name": "VariableDeclaration",
                    "src": "1376:12:2"
                  }
                ],
                "id": 321,
                "name": "ParameterList",
                "src": "1375:14:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 324,
                "name": "ParameterList",
                "src": "1407:0:2"
              },
              {
                "attributes": {
                  "arguments": [
                    null
                  ]
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 1010,
                      "type": "modifier ()",
                      "value": "onlyOwner"
                    },
                    "id": 322,
                    "name": "Identifier",
                    "src": "1390:9:2"
                  }
                ],
                "id": 323,
                "name": "ModifierInvocation",
                "src": "1390:9:2"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 828,
                                  "type": "mapping(address => uint256)",
                                  "value": "latestPing"
                                },
                                "id": 325,
                                "name": "Identifier",
                                "src": "1413:10:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 320,
                                  "type": "address",
                                  "value": "user"
                                },
                                "id": 326,
                                "name": "Identifier",
                                "src": "1424:4:2"
                              }
                            ],
                            "id": 327,
                            "name": "IndexAccess",
                            "src": "1413:16:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2774,
                              "type": "uint256",
                              "value": "now"
                            },
                            "id": 328,
                            "name": "Identifier",
                            "src": "1432:3:2"
                          }
                        ],
                        "id": 329,
                        "name": "Assignment",
                        "src": "1413:22:2"
                      }
                    ],
                    "id": 330,
                    "name": "ExpressionStatement",
                    "src": "1413:22:2"
                  }
                ],
                "id": 331,
                "name": "Block",
                "src": "1407:33:2"
              }
            ],
            "id": 332,
            "name": "FunctionDefinition",
            "src": "1352:88:2"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "clearLand",
              "payable": false,
              "scope": 822,
              "stateMutability": "nonpayable",
              "superFunction": 48,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "x",
                      "scope": 393,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "int256[] memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "length": null,
                          "type": "int256[] storage pointer"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "int",
                              "type": "int256"
                            },
                            "id": 333,
                            "name": "ElementaryTypeName",
                            "src": "1463:3:2"
                          }
                        ],
                        "id": 334,
                        "name": "ArrayTypeName",
                        "src": "1463:5:2"
                      }
                    ],
                    "id": 335,
                    "name": "VariableDeclaration",
                    "src": "1463:7:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "y",
                      "scope": 393,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "int256[] memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "length": null,
                          "type": "int256[] storage pointer"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "int",
                              "type": "int256"
                            },
                            "id": 336,
                            "name": "ElementaryTypeName",
                            "src": "1472:3:2"
                          }
                        ],
                        "id": 337,
                        "name": "ArrayTypeName",
                        "src": "1472:5:2"
                      }
                    ],
                    "id": 338,
                    "name": "VariableDeclaration",
                    "src": "1472:7:2"
                  }
                ],
                "id": 339,
                "name": "ParameterList",
                "src": "1462:18:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 340,
                "name": "ParameterList",
                "src": "1488:0:2"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2775,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 341,
                            "name": "Identifier",
                            "src": "1494:7:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "length",
                                  "referencedDeclaration": null,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 335,
                                      "type": "int256[] memory",
                                      "value": "x"
                                    },
                                    "id": 342,
                                    "name": "Identifier",
                                    "src": "1502:1:2"
                                  }
                                ],
                                "id": 343,
                                "name": "MemberAccess",
                                "src": "1502:8:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "length",
                                  "referencedDeclaration": null,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 338,
                                      "type": "int256[] memory",
                                      "value": "y"
                                    },
                                    "id": 344,
                                    "name": "Identifier",
                                    "src": "1514:1:2"
                                  }
                                ],
                                "id": 345,
                                "name": "MemberAccess",
                                "src": "1514:8:2"
                              }
                            ],
                            "id": 346,
                            "name": "BinaryOperation",
                            "src": "1502:20:2"
                          }
                        ],
                        "id": 347,
                        "name": "FunctionCall",
                        "src": "1494:29:2"
                      }
                    ],
                    "id": 348,
                    "name": "ExpressionStatement",
                    "src": "1494:29:2"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "assignments": [
                            350
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "i",
                              "scope": 393,
                              "stateVariable": false,
                              "storageLocation": "default",
                              "type": "uint256",
                              "value": null,
                              "visibility": "internal"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "uint",
                                  "type": "uint256"
                                },
                                "id": 349,
                                "name": "ElementaryTypeName",
                                "src": "1534:4:2"
                              }
                            ],
                            "id": 350,
                            "name": "VariableDeclaration",
                            "src": "1534:6:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 351,
                            "name": "Literal",
                            "src": "1543:1:2"
                          }
                        ],
                        "id": 352,
                        "name": "VariableDeclarationStatement",
                        "src": "1534:10:2"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "<",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 350,
                              "type": "uint256",
                              "value": "i"
                            },
                            "id": 353,
                            "name": "Identifier",
                            "src": "1546:1:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "length",
                              "referencedDeclaration": null,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 335,
                                  "type": "int256[] memory",
                                  "value": "x"
                                },
                                "id": 354,
                                "name": "Identifier",
                                "src": "1550:1:2"
                              }
                            ],
                            "id": 355,
                            "name": "MemberAccess",
                            "src": "1550:8:2"
                          }
                        ],
                        "id": 356,
                        "name": "BinaryOperation",
                        "src": "1546:12:2"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "++",
                              "prefix": false,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 350,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 357,
                                "name": "Identifier",
                                "src": "1560:1:2"
                              }
                            ],
                            "id": 358,
                            "name": "UnaryOperation",
                            "src": "1560:3:2"
                          }
                        ],
                        "id": 359,
                        "name": "ExpressionStatement",
                        "src": "1560:3:2"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "assignments": [
                                361
                              ]
                            },
                            "children": [
                              {
                                "attributes": {
                                  "constant": false,
                                  "name": "landId",
                                  "scope": 393,
                                  "stateVariable": false,
                                  "storageLocation": "default",
                                  "type": "uint256",
                                  "value": null,
                                  "visibility": "internal"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "name": "uint",
                                      "type": "uint256"
                                    },
                                    "id": 360,
                                    "name": "ElementaryTypeName",
                                    "src": "1573:4:2"
                                  }
                                ],
                                "id": 361,
                                "name": "VariableDeclaration",
                                "src": "1573:11:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "uint256",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        },
                                        {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        420
                                      ],
                                      "referencedDeclaration": 420,
                                      "type": "function (int256,int256) view returns (uint256)",
                                      "value": "encodeTokenId"
                                    },
                                    "id": 362,
                                    "name": "Identifier",
                                    "src": "1587:13:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "int256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 335,
                                          "type": "int256[] memory",
                                          "value": "x"
                                        },
                                        "id": 363,
                                        "name": "Identifier",
                                        "src": "1601:1:2"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 350,
                                          "type": "uint256",
                                          "value": "i"
                                        },
                                        "id": 364,
                                        "name": "Identifier",
                                        "src": "1603:1:2"
                                      }
                                    ],
                                    "id": 365,
                                    "name": "IndexAccess",
                                    "src": "1601:4:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "int256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 338,
                                          "type": "int256[] memory",
                                          "value": "y"
                                        },
                                        "id": 366,
                                        "name": "Identifier",
                                        "src": "1607:1:2"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 350,
                                          "type": "uint256",
                                          "value": "i"
                                        },
                                        "id": 367,
                                        "name": "Identifier",
                                        "src": "1609:1:2"
                                      }
                                    ],
                                    "id": 368,
                                    "name": "IndexAccess",
                                    "src": "1607:4:2"
                                  }
                                ],
                                "id": 369,
                                "name": "FunctionCall",
                                "src": "1587:25:2"
                              }
                            ],
                            "id": 370,
                            "name": "VariableDeclarationStatement",
                            "src": "1573:39:2"
                          },
                          {
                            "attributes": {
                              "assignments": [
                                372
                              ]
                            },
                            "children": [
                              {
                                "attributes": {
                                  "constant": false,
                                  "name": "holder",
                                  "scope": 393,
                                  "stateVariable": false,
                                  "storageLocation": "default",
                                  "type": "address",
                                  "value": null,
                                  "visibility": "internal"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "name": "address",
                                      "type": "address"
                                    },
                                    "id": 371,
                                    "name": "ElementaryTypeName",
                                    "src": "1620:7:2"
                                  }
                                ],
                                "id": 372,
                                "name": "VariableDeclaration",
                                "src": "1620:14:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "address",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        1877
                                      ],
                                      "referencedDeclaration": 1877,
                                      "type": "function (uint256) view returns (address)",
                                      "value": "holderOf"
                                    },
                                    "id": 373,
                                    "name": "Identifier",
                                    "src": "1637:8:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 361,
                                      "type": "uint256",
                                      "value": "landId"
                                    },
                                    "id": 374,
                                    "name": "Identifier",
                                    "src": "1646:6:2"
                                  }
                                ],
                                "id": 375,
                                "name": "FunctionCall",
                                "src": "1637:16:2"
                              }
                            ],
                            "id": 376,
                            "name": "VariableDeclarationStatement",
                            "src": "1620:33:2"
                          },
                          {
                            "attributes": {
                              "falseBody": null
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "<",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 828,
                                          "type": "mapping(address => uint256)",
                                          "value": "latestPing"
                                        },
                                        "id": 377,
                                        "name": "Identifier",
                                        "src": "1665:10:2"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 372,
                                          "type": "address",
                                          "value": "holder"
                                        },
                                        "id": 378,
                                        "name": "Identifier",
                                        "src": "1676:6:2"
                                      }
                                    ],
                                    "id": 379,
                                    "name": "IndexAccess",
                                    "src": "1665:18:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "operator": "-",
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 2774,
                                          "type": "uint256",
                                          "value": "now"
                                        },
                                        "id": 380,
                                        "name": "Identifier",
                                        "src": "1686:3:2"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "hexvalue": "31",
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "subdenomination": "years",
                                          "token": "number",
                                          "type": "int_const 31536000",
                                          "value": "1"
                                        },
                                        "id": 381,
                                        "name": "Literal",
                                        "src": "1692:7:2"
                                      }
                                    ],
                                    "id": 382,
                                    "name": "BinaryOperation",
                                    "src": "1686:13:2"
                                  }
                                ],
                                "id": 383,
                                "name": "BinaryOperation",
                                "src": "1665:34:2"
                              },
                              {
                                "children": [
                                  {
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "isStructConstructorCall": false,
                                          "lValueRequested": false,
                                          "names": [
                                            null
                                          ],
                                          "type": "tuple()",
                                          "type_conversion": false
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": [
                                                {
                                                  "typeIdentifier": "t_uint256",
                                                  "typeString": "uint256"
                                                }
                                              ],
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 2324,
                                              "type": "function (uint256)",
                                              "value": "_destroy"
                                            },
                                            "id": 384,
                                            "name": "Identifier",
                                            "src": "1711:8:2"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 361,
                                              "type": "uint256",
                                              "value": "landId"
                                            },
                                            "id": 385,
                                            "name": "Identifier",
                                            "src": "1720:6:2"
                                          }
                                        ],
                                        "id": 386,
                                        "name": "FunctionCall",
                                        "src": "1711:16:2"
                                      }
                                    ],
                                    "id": 387,
                                    "name": "ExpressionStatement",
                                    "src": "1711:16:2"
                                  }
                                ],
                                "id": 388,
                                "name": "Block",
                                "src": "1701:35:2"
                              }
                            ],
                            "id": 389,
                            "name": "IfStatement",
                            "src": "1661:75:2"
                          }
                        ],
                        "id": 390,
                        "name": "Block",
                        "src": "1565:177:2"
                      }
                    ],
                    "id": 391,
                    "name": "ForStatement",
                    "src": "1529:213:2"
                  }
                ],
                "id": 392,
                "name": "Block",
                "src": "1488:258:2"
              }
            ],
            "id": 393,
            "name": "FunctionDefinition",
            "src": "1444:302:2"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "encodeTokenId",
              "payable": false,
              "scope": 822,
              "stateMutability": "view",
              "superFunction": 57,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "x",
                      "scope": 420,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "int256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "int",
                          "type": "int256"
                        },
                        "id": 394,
                        "name": "ElementaryTypeName",
                        "src": "1802:3:2"
                      }
                    ],
                    "id": 395,
                    "name": "VariableDeclaration",
                    "src": "1802:5:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "y",
                      "scope": 420,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "int256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "int",
                          "type": "int256"
                        },
                        "id": 396,
                        "name": "ElementaryTypeName",
                        "src": "1809:3:2"
                      }
                    ],
                    "id": 397,
                    "name": "VariableDeclaration",
                    "src": "1809:5:2"
                  }
                ],
                "id": 398,
                "name": "ParameterList",
                "src": "1801:14:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 420,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 399,
                        "name": "ElementaryTypeName",
                        "src": "1837:4:2"
                      }
                    ],
                    "id": 400,
                    "name": "VariableDeclaration",
                    "src": "1837:4:2"
                  }
                ],
                "id": 401,
                "name": "ParameterList",
                "src": "1836:6:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 401
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "|",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "&",
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isInlineArray": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          },
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "operator": "*",
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "isStructConstructorCall": false,
                                              "lValueRequested": false,
                                              "names": [
                                                null
                                              ],
                                              "type": "uint256",
                                              "type_conversion": true
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": [
                                                    {
                                                      "typeIdentifier": "t_int256",
                                                      "typeString": "int256"
                                                    }
                                                  ],
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": true,
                                                  "lValueRequested": false,
                                                  "type": "type(uint256)",
                                                  "value": "uint"
                                                },
                                                "id": 402,
                                                "name": "ElementaryTypeNameExpression",
                                                "src": "1858:4:2"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 395,
                                                  "type": "int256",
                                                  "value": "x"
                                                },
                                                "id": 403,
                                                "name": "Identifier",
                                                "src": "1863:1:2"
                                              }
                                            ],
                                            "id": 404,
                                            "name": "FunctionCall",
                                            "src": "1858:7:2"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 837,
                                              "type": "uint256",
                                              "value": "factor"
                                            },
                                            "id": 405,
                                            "name": "Identifier",
                                            "src": "1868:6:2"
                                          }
                                        ],
                                        "id": 406,
                                        "name": "BinaryOperation",
                                        "src": "1858:16:2"
                                      }
                                    ],
                                    "id": 407,
                                    "name": "TupleExpression",
                                    "src": "1857:18:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 831,
                                      "type": "uint256",
                                      "value": "clearLow"
                                    },
                                    "id": 408,
                                    "name": "Identifier",
                                    "src": "1878:8:2"
                                  }
                                ],
                                "id": 409,
                                "name": "BinaryOperation",
                                "src": "1857:29:2"
                              }
                            ],
                            "id": 410,
                            "name": "TupleExpression",
                            "src": "1856:31:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "&",
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "uint256",
                                      "type_conversion": true
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_int256",
                                              "typeString": "int256"
                                            }
                                          ],
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "type": "type(uint256)",
                                          "value": "uint"
                                        },
                                        "id": 411,
                                        "name": "ElementaryTypeNameExpression",
                                        "src": "1891:4:2"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 397,
                                          "type": "int256",
                                          "value": "y"
                                        },
                                        "id": 412,
                                        "name": "Identifier",
                                        "src": "1896:1:2"
                                      }
                                    ],
                                    "id": 413,
                                    "name": "FunctionCall",
                                    "src": "1891:7:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 834,
                                      "type": "uint256",
                                      "value": "clearHigh"
                                    },
                                    "id": 414,
                                    "name": "Identifier",
                                    "src": "1901:9:2"
                                  }
                                ],
                                "id": 415,
                                "name": "BinaryOperation",
                                "src": "1891:19:2"
                              }
                            ],
                            "id": 416,
                            "name": "TupleExpression",
                            "src": "1890:21:2"
                          }
                        ],
                        "id": 417,
                        "name": "BinaryOperation",
                        "src": "1856:55:2"
                      }
                    ],
                    "id": 418,
                    "name": "Return",
                    "src": "1849:62:2"
                  }
                ],
                "id": 419,
                "name": "Block",
                "src": "1843:73:2"
              }
            ],
            "id": 420,
            "name": "FunctionDefinition",
            "src": "1779:137:2"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "decodeTokenId",
              "payable": false,
              "scope": 822,
              "stateMutability": "view",
              "superFunction": 66,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "value",
                      "scope": 454,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 421,
                        "name": "ElementaryTypeName",
                        "src": "1943:4:2"
                      }
                    ],
                    "id": 422,
                    "name": "VariableDeclaration",
                    "src": "1943:10:2"
                  }
                ],
                "id": 423,
                "name": "ParameterList",
                "src": "1942:12:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 454,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "int256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "int",
                          "type": "int256"
                        },
                        "id": 424,
                        "name": "ElementaryTypeName",
                        "src": "1976:3:2"
                      }
                    ],
                    "id": 425,
                    "name": "VariableDeclaration",
                    "src": "1976:3:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 454,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "int256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "int",
                          "type": "int256"
                        },
                        "id": 426,
                        "name": "ElementaryTypeName",
                        "src": "1981:3:2"
                      }
                    ],
                    "id": 427,
                    "name": "VariableDeclaration",
                    "src": "1981:3:2"
                  }
                ],
                "id": 428,
                "name": "ParameterList",
                "src": "1975:10:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        430
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "x",
                          "scope": 454,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 429,
                            "name": "ElementaryTypeName",
                            "src": "1992:4:2"
                          }
                        ],
                        "id": 430,
                        "name": "VariableDeclaration",
                        "src": "1992:6:2"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": ">>",
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isInlineArray": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "&",
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 422,
                                      "type": "uint256",
                                      "value": "value"
                                    },
                                    "id": 431,
                                    "name": "Identifier",
                                    "src": "2002:5:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 831,
                                      "type": "uint256",
                                      "value": "clearLow"
                                    },
                                    "id": 432,
                                    "name": "Identifier",
                                    "src": "2010:8:2"
                                  }
                                ],
                                "id": 433,
                                "name": "BinaryOperation",
                                "src": "2002:16:2"
                              }
                            ],
                            "id": 434,
                            "name": "TupleExpression",
                            "src": "2001:18:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "313238",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 128",
                              "value": "128"
                            },
                            "id": 435,
                            "name": "Literal",
                            "src": "2023:3:2"
                          }
                        ],
                        "id": 436,
                        "name": "BinaryOperation",
                        "src": "2001:25:2"
                      }
                    ],
                    "id": 437,
                    "name": "VariableDeclarationStatement",
                    "src": "1992:34:2"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        439
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "y",
                          "scope": 454,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 438,
                            "name": "ElementaryTypeName",
                            "src": "2032:4:2"
                          }
                        ],
                        "id": 439,
                        "name": "VariableDeclaration",
                        "src": "2032:6:2"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "&",
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 422,
                                  "type": "uint256",
                                  "value": "value"
                                },
                                "id": 440,
                                "name": "Identifier",
                                "src": "2042:5:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 834,
                                  "type": "uint256",
                                  "value": "clearHigh"
                                },
                                "id": 441,
                                "name": "Identifier",
                                "src": "2050:9:2"
                              }
                            ],
                            "id": 442,
                            "name": "BinaryOperation",
                            "src": "2042:17:2"
                          }
                        ],
                        "id": 443,
                        "name": "TupleExpression",
                        "src": "2041:19:2"
                      }
                    ],
                    "id": 444,
                    "name": "VariableDeclarationStatement",
                    "src": "2032:28:2"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 428
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "tuple(int256,int256)"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "int256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 482,
                                  "type": "function (uint256) pure returns (int256)",
                                  "value": "expandNegative128BitCast"
                                },
                                "id": 445,
                                "name": "Identifier",
                                "src": "2074:24:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 430,
                                  "type": "uint256",
                                  "value": "x"
                                },
                                "id": 446,
                                "name": "Identifier",
                                "src": "2099:1:2"
                              }
                            ],
                            "id": 447,
                            "name": "FunctionCall",
                            "src": "2074:27:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "int256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 482,
                                  "type": "function (uint256) pure returns (int256)",
                                  "value": "expandNegative128BitCast"
                                },
                                "id": 448,
                                "name": "Identifier",
                                "src": "2103:24:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 439,
                                  "type": "uint256",
                                  "value": "y"
                                },
                                "id": 449,
                                "name": "Identifier",
                                "src": "2128:1:2"
                              }
                            ],
                            "id": 450,
                            "name": "FunctionCall",
                            "src": "2103:27:2"
                          }
                        ],
                        "id": 451,
                        "name": "TupleExpression",
                        "src": "2073:58:2"
                      }
                    ],
                    "id": 452,
                    "name": "Return",
                    "src": "2066:65:2"
                  }
                ],
                "id": 453,
                "name": "Block",
                "src": "1986:150:2"
              }
            ],
            "id": 454,
            "name": "FunctionDefinition",
            "src": "1920:216:2"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "expandNegative128BitCast",
              "payable": false,
              "scope": 822,
              "stateMutability": "pure",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "value",
                      "scope": 482,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint",
                          "type": "uint256"
                        },
                        "id": 455,
                        "name": "ElementaryTypeName",
                        "src": "2174:4:2"
                      }
                    ],
                    "id": 456,
                    "name": "VariableDeclaration",
                    "src": "2174:10:2"
                  }
                ],
                "id": 457,
                "name": "ParameterList",
                "src": "2173:12:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 482,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "int256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "int",
                          "type": "int256"
                        },
                        "id": 458,
                        "name": "ElementaryTypeName",
                        "src": "2209:3:2"
                      }
                    ],
                    "id": 459,
                    "name": "VariableDeclaration",
                    "src": "2209:3:2"
                  }
                ],
                "id": 460,
                "name": "ParameterList",
                "src": "2208:5:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "falseBody": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "!=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "&",
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 456,
                                  "type": "uint256",
                                  "value": "value"
                                },
                                "id": 461,
                                "name": "Identifier",
                                "src": "2224:5:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isInlineArray": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "type": "int_const 170141183460469231731687303715884105728"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "commonType": {
                                        "typeIdentifier": "t_rational_170141183460469231731687303715884105728_by_1",
                                        "typeString": "int_const 170141183460469231731687303715884105728"
                                      },
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "operator": "<<",
                                      "type": "int_const 170141183460469231731687303715884105728"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "hexvalue": "31",
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "subdenomination": null,
                                          "token": "number",
                                          "type": "int_const 1",
                                          "value": "1"
                                        },
                                        "id": 462,
                                        "name": "Literal",
                                        "src": "2233:1:2"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "hexvalue": "313237",
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": true,
                                          "lValueRequested": false,
                                          "subdenomination": null,
                                          "token": "number",
                                          "type": "int_const 127",
                                          "value": "127"
                                        },
                                        "id": 463,
                                        "name": "Literal",
                                        "src": "2236:3:2"
                                      }
                                    ],
                                    "id": 464,
                                    "name": "BinaryOperation",
                                    "src": "2233:6:2"
                                  }
                                ],
                                "id": 465,
                                "name": "TupleExpression",
                                "src": "2232:8:2"
                              }
                            ],
                            "id": 466,
                            "name": "BinaryOperation",
                            "src": "2224:16:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 467,
                            "name": "Literal",
                            "src": "2244:1:2"
                          }
                        ],
                        "id": 468,
                        "name": "BinaryOperation",
                        "src": "2224:21:2"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "functionReturnParameters": 460
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "int256",
                                  "type_conversion": true
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "type": "type(int256)",
                                      "value": "int"
                                    },
                                    "id": 469,
                                    "name": "ElementaryTypeNameExpression",
                                    "src": "2262:3:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "commonType": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      },
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "operator": "|",
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 456,
                                          "type": "uint256",
                                          "value": "value"
                                        },
                                        "id": 470,
                                        "name": "Identifier",
                                        "src": "2266:5:2"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 831,
                                          "type": "uint256",
                                          "value": "clearLow"
                                        },
                                        "id": 471,
                                        "name": "Identifier",
                                        "src": "2274:8:2"
                                      }
                                    ],
                                    "id": 472,
                                    "name": "BinaryOperation",
                                    "src": "2266:16:2"
                                  }
                                ],
                                "id": 473,
                                "name": "FunctionCall",
                                "src": "2262:21:2"
                              }
                            ],
                            "id": 474,
                            "name": "Return",
                            "src": "2255:28:2"
                          }
                        ],
                        "id": 475,
                        "name": "Block",
                        "src": "2247:43:2"
                      }
                    ],
                    "id": 476,
                    "name": "IfStatement",
                    "src": "2220:70:2"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 460
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "int256",
                          "type_conversion": true
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "type": "type(int256)",
                              "value": "int"
                            },
                            "id": 477,
                            "name": "ElementaryTypeNameExpression",
                            "src": "2302:3:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 456,
                              "type": "uint256",
                              "value": "value"
                            },
                            "id": 478,
                            "name": "Identifier",
                            "src": "2306:5:2"
                          }
                        ],
                        "id": 479,
                        "name": "FunctionCall",
                        "src": "2302:10:2"
                      }
                    ],
                    "id": 480,
                    "name": "Return",
                    "src": "2295:17:2"
                  }
                ],
                "id": 481,
                "name": "Block",
                "src": "2214:103:2"
              }
            ],
            "id": 482,
            "name": "FunctionDefinition",
            "src": "2140:177:2"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "exists",
              "payable": false,
              "scope": 822,
              "stateMutability": "view",
              "superFunction": 75,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "x",
                      "scope": 499,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "int256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "int",
                          "type": "int256"
                        },
                        "id": 483,
                        "name": "ElementaryTypeName",
                        "src": "2337:3:2"
                      }
                    ],
                    "id": 484,
                    "name": "VariableDeclaration",
                    "src": "2337:5:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "y",
                      "scope": 499,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "int256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "int",
                          "type": "int256"
                        },
                        "id": 485,
                        "name": "ElementaryTypeName",
                        "src": "2344:3:2"
                      }
                    ],
                    "id": 486,
                    "name": "VariableDeclaration",
                    "src": "2344:5:2"
                  }
                ],
                "id": 487,
                "name": "ParameterList",
                "src": "2336:14:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 499,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 488,
                        "name": "ElementaryTypeName",
                        "src": "2372:4:2"
                      }
                    ],
                    "id": 489,
                    "name": "VariableDeclaration",
                    "src": "2372:4:2"
                  }
                ],
                "id": 490,
                "name": "ParameterList",
                "src": "2371:6:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 490
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "bool",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                499,
                                1865
                              ],
                              "referencedDeclaration": 1865,
                              "type": "function (uint256) view returns (bool)",
                              "value": "exists"
                            },
                            "id": 491,
                            "name": "Identifier",
                            "src": "2391:6:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    },
                                    {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    420
                                  ],
                                  "referencedDeclaration": 420,
                                  "type": "function (int256,int256) view returns (uint256)",
                                  "value": "encodeTokenId"
                                },
                                "id": 492,
                                "name": "Identifier",
                                "src": "2398:13:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 484,
                                  "type": "int256",
                                  "value": "x"
                                },
                                "id": 493,
                                "name": "Identifier",
                                "src": "2412:1:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 486,
                                  "type": "int256",
                                  "value": "y"
                                },
                                "id": 494,
                                "name": "Identifier",
                                "src": "2415:1:2"
                              }
                            ],
                            "id": 495,
                            "name": "FunctionCall",
                            "src": "2398:19:2"
                          }
                        ],
                        "id": 496,
                        "name": "FunctionCall",
                        "src": "2391:27:2"
                      }
                    ],
                    "id": 497,
                    "name": "Return",
                    "src": "2384:34:2"
                  }
                ],
                "id": 498,
                "name": "Block",
                "src": "2378:45:2"
              }
            ],
            "id": 499,
            "name": "FunctionDefinition",
            "src": "2321:102:2"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "ownerOfLand",
              "payable": false,
              "scope": 822,
              "stateMutability": "view",
              "superFunction": 84,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "x",
                      "scope": 516,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "int256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "int",
                          "type": "int256"
                        },
                        "id": 500,
                        "name": "ElementaryTypeName",
                        "src": "2448:3:2"
                      }
                    ],
                    "id": 501,
                    "name": "VariableDeclaration",
                    "src": "2448:5:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "y",
                      "scope": 516,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "int256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "int",
                          "type": "int256"
                        },
                        "id": 502,
                        "name": "ElementaryTypeName",
                        "src": "2455:3:2"
                      }
                    ],
                    "id": 503,
                    "name": "VariableDeclaration",
                    "src": "2455:5:2"
                  }
                ],
                "id": 504,
                "name": "ParameterList",
                "src": "2447:14:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 516,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 505,
                        "name": "ElementaryTypeName",
                        "src": "2483:7:2"
                      }
                    ],
                    "id": 506,
                    "name": "VariableDeclaration",
                    "src": "2483:7:2"
                  }
                ],
                "id": 507,
                "name": "ParameterList",
                "src": "2482:9:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 507
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "address",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                1877
                              ],
                              "referencedDeclaration": 1877,
                              "type": "function (uint256) view returns (address)",
                              "value": "holderOf"
                            },
                            "id": 508,
                            "name": "Identifier",
                            "src": "2505:8:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    },
                                    {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    420
                                  ],
                                  "referencedDeclaration": 420,
                                  "type": "function (int256,int256) view returns (uint256)",
                                  "value": "encodeTokenId"
                                },
                                "id": 509,
                                "name": "Identifier",
                                "src": "2514:13:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 501,
                                  "type": "int256",
                                  "value": "x"
                                },
                                "id": 510,
                                "name": "Identifier",
                                "src": "2528:1:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 503,
                                  "type": "int256",
                                  "value": "y"
                                },
                                "id": 511,
                                "name": "Identifier",
                                "src": "2531:1:2"
                              }
                            ],
                            "id": 512,
                            "name": "FunctionCall",
                            "src": "2514:19:2"
                          }
                        ],
                        "id": 513,
                        "name": "FunctionCall",
                        "src": "2505:29:2"
                      }
                    ],
                    "id": 514,
                    "name": "Return",
                    "src": "2498:36:2"
                  }
                ],
                "id": 515,
                "name": "Block",
                "src": "2492:47:2"
              }
            ],
            "id": 516,
            "name": "FunctionDefinition",
            "src": "2427:112:2"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "ownerOfLandMany",
              "payable": false,
              "scope": 822,
              "stateMutability": "view",
              "superFunction": 96,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "x",
                      "scope": 583,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "int256[] memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "length": null,
                          "type": "int256[] storage pointer"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "int",
                              "type": "int256"
                            },
                            "id": 517,
                            "name": "ElementaryTypeName",
                            "src": "2568:3:2"
                          }
                        ],
                        "id": 518,
                        "name": "ArrayTypeName",
                        "src": "2568:5:2"
                      }
                    ],
                    "id": 519,
                    "name": "VariableDeclaration",
                    "src": "2568:7:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "y",
                      "scope": 583,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "int256[] memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "length": null,
                          "type": "int256[] storage pointer"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "int",
                              "type": "int256"
                            },
                            "id": 520,
                            "name": "ElementaryTypeName",
                            "src": "2577:3:2"
                          }
                        ],
                        "id": 521,
                        "name": "ArrayTypeName",
                        "src": "2577:5:2"
                      }
                    ],
                    "id": 522,
                    "name": "VariableDeclaration",
                    "src": "2577:7:2"
                  }
                ],
                "id": 523,
                "name": "ParameterList",
                "src": "2567:18:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 583,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address[] memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "length": null,
                          "type": "address[] storage pointer"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "address",
                              "type": "address"
                            },
                            "id": 524,
                            "name": "ElementaryTypeName",
                            "src": "2607:7:2"
                          }
                        ],
                        "id": 525,
                        "name": "ArrayTypeName",
                        "src": "2607:9:2"
                      }
                    ],
                    "id": 526,
                    "name": "VariableDeclaration",
                    "src": "2607:9:2"
                  }
                ],
                "id": 527,
                "name": "ParameterList",
                "src": "2606:11:2"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2775,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 528,
                            "name": "Identifier",
                            "src": "2624:7:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": ">",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "length",
                                  "referencedDeclaration": null,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 519,
                                      "type": "int256[] memory",
                                      "value": "x"
                                    },
                                    "id": 529,
                                    "name": "Identifier",
                                    "src": "2632:1:2"
                                  }
                                ],
                                "id": 530,
                                "name": "MemberAccess",
                                "src": "2632:8:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "hexvalue": "30",
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "lValueRequested": false,
                                  "subdenomination": null,
                                  "token": "number",
                                  "type": "int_const 0",
                                  "value": "0"
                                },
                                "id": 531,
                                "name": "Literal",
                                "src": "2643:1:2"
                              }
                            ],
                            "id": 532,
                            "name": "BinaryOperation",
                            "src": "2632:12:2"
                          }
                        ],
                        "id": 533,
                        "name": "FunctionCall",
                        "src": "2624:21:2"
                      }
                    ],
                    "id": 534,
                    "name": "ExpressionStatement",
                    "src": "2624:21:2"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2775,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 535,
                            "name": "Identifier",
                            "src": "2651:7:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "length",
                                  "referencedDeclaration": null,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 519,
                                      "type": "int256[] memory",
                                      "value": "x"
                                    },
                                    "id": 536,
                                    "name": "Identifier",
                                    "src": "2659:1:2"
                                  }
                                ],
                                "id": 537,
                                "name": "MemberAccess",
                                "src": "2659:8:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "length",
                                  "referencedDeclaration": null,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 522,
                                      "type": "int256[] memory",
                                      "value": "y"
                                    },
                                    "id": 538,
                                    "name": "Identifier",
                                    "src": "2671:1:2"
                                  }
                                ],
                                "id": 539,
                                "name": "MemberAccess",
                                "src": "2671:8:2"
                              }
                            ],
                            "id": 540,
                            "name": "BinaryOperation",
                            "src": "2659:20:2"
                          }
                        ],
                        "id": 541,
                        "name": "FunctionCall",
                        "src": "2651:29:2"
                      }
                    ],
                    "id": 542,
                    "name": "ExpressionStatement",
                    "src": "2651:29:2"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        546
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "addrs",
                          "scope": 583,
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "type": "address[] memory",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "length": null,
                              "type": "address[] storage pointer"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "address",
                                  "type": "address"
                                },
                                "id": 544,
                                "name": "ElementaryTypeName",
                                "src": "2687:7:2"
                              }
                            ],
                            "id": 545,
                            "name": "ArrayTypeName",
                            "src": "2687:9:2"
                          }
                        ],
                        "id": 546,
                        "name": "VariableDeclaration",
                        "src": "2687:22:2"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "address[] memory",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "type": "function (uint256) pure returns (address[] memory)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "length": null,
                                  "type": "address[] storage pointer"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "name": "address",
                                      "type": "address"
                                    },
                                    "id": 547,
                                    "name": "ElementaryTypeName",
                                    "src": "2716:7:2"
                                  }
                                ],
                                "id": 548,
                                "name": "ArrayTypeName",
                                "src": "2716:9:2"
                              }
                            ],
                            "id": 549,
                            "name": "NewExpression",
                            "src": "2712:13:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "length",
                              "referencedDeclaration": null,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 519,
                                  "type": "int256[] memory",
                                  "value": "x"
                                },
                                "id": 550,
                                "name": "Identifier",
                                "src": "2726:1:2"
                              }
                            ],
                            "id": 551,
                            "name": "MemberAccess",
                            "src": "2726:8:2"
                          }
                        ],
                        "id": 552,
                        "name": "FunctionCall",
                        "src": "2712:23:2"
                      }
                    ],
                    "id": 553,
                    "name": "VariableDeclarationStatement",
                    "src": "2687:48:2"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "assignments": [
                            555
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "i",
                              "scope": 583,
                              "stateVariable": false,
                              "storageLocation": "default",
                              "type": "uint256",
                              "value": null,
                              "visibility": "internal"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "uint",
                                  "type": "uint256"
                                },
                                "id": 554,
                                "name": "ElementaryTypeName",
                                "src": "2746:4:2"
                              }
                            ],
                            "id": 555,
                            "name": "VariableDeclaration",
                            "src": "2746:6:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 556,
                            "name": "Literal",
                            "src": "2755:1:2"
                          }
                        ],
                        "id": 557,
                        "name": "VariableDeclarationStatement",
                        "src": "2746:10:2"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "<",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 555,
                              "type": "uint256",
                              "value": "i"
                            },
                            "id": 558,
                            "name": "Identifier",
                            "src": "2758:1:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "length",
                              "referencedDeclaration": null,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 519,
                                  "type": "int256[] memory",
                                  "value": "x"
                                },
                                "id": 559,
                                "name": "Identifier",
                                "src": "2762:1:2"
                              }
                            ],
                            "id": 560,
                            "name": "MemberAccess",
                            "src": "2762:8:2"
                          }
                        ],
                        "id": 561,
                        "name": "BinaryOperation",
                        "src": "2758:12:2"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "++",
                              "prefix": false,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 555,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 562,
                                "name": "Identifier",
                                "src": "2772:1:2"
                              }
                            ],
                            "id": 563,
                            "name": "UnaryOperation",
                            "src": "2772:3:2"
                          }
                        ],
                        "id": 564,
                        "name": "ExpressionStatement",
                        "src": "2772:3:2"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "=",
                                  "type": "address"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "type": "address"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 546,
                                          "type": "address[] memory",
                                          "value": "addrs"
                                        },
                                        "id": 565,
                                        "name": "Identifier",
                                        "src": "2785:5:2"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 555,
                                          "type": "uint256",
                                          "value": "i"
                                        },
                                        "id": 566,
                                        "name": "Identifier",
                                        "src": "2791:1:2"
                                      }
                                    ],
                                    "id": 567,
                                    "name": "IndexAccess",
                                    "src": "2785:8:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "address",
                                      "type_conversion": false
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_int256",
                                              "typeString": "int256"
                                            },
                                            {
                                              "typeIdentifier": "t_int256",
                                              "typeString": "int256"
                                            }
                                          ],
                                          "overloadedDeclarations": [
                                            516
                                          ],
                                          "referencedDeclaration": 516,
                                          "type": "function (int256,int256) view returns (address)",
                                          "value": "ownerOfLand"
                                        },
                                        "id": 568,
                                        "name": "Identifier",
                                        "src": "2796:11:2"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "int256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 519,
                                              "type": "int256[] memory",
                                              "value": "x"
                                            },
                                            "id": 569,
                                            "name": "Identifier",
                                            "src": "2808:1:2"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 555,
                                              "type": "uint256",
                                              "value": "i"
                                            },
                                            "id": 570,
                                            "name": "Identifier",
                                            "src": "2810:1:2"
                                          }
                                        ],
                                        "id": 571,
                                        "name": "IndexAccess",
                                        "src": "2808:4:2"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "int256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 522,
                                              "type": "int256[] memory",
                                              "value": "y"
                                            },
                                            "id": 572,
                                            "name": "Identifier",
                                            "src": "2814:1:2"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 555,
                                              "type": "uint256",
                                              "value": "i"
                                            },
                                            "id": 573,
                                            "name": "Identifier",
                                            "src": "2816:1:2"
                                          }
                                        ],
                                        "id": 574,
                                        "name": "IndexAccess",
                                        "src": "2814:4:2"
                                      }
                                    ],
                                    "id": 575,
                                    "name": "FunctionCall",
                                    "src": "2796:23:2"
                                  }
                                ],
                                "id": 576,
                                "name": "Assignment",
                                "src": "2785:34:2"
                              }
                            ],
                            "id": 577,
                            "name": "ExpressionStatement",
                            "src": "2785:34:2"
                          }
                        ],
                        "id": 578,
                        "name": "Block",
                        "src": "2777:49:2"
                      }
                    ],
                    "id": 579,
                    "name": "ForStatement",
                    "src": "2741:85:2"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 527
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 546,
                          "type": "address[] memory",
                          "value": "addrs"
                        },
                        "id": 580,
                        "name": "Identifier",
                        "src": "2839:5:2"
                      }
                    ],
                    "id": 581,
                    "name": "Return",
                    "src": "2832:12:2"
                  }
                ],
                "id": 582,
                "name": "Block",
                "src": "2618:231:2"
              }
            ],
            "id": 583,
            "name": "FunctionDefinition",
            "src": "2543:306:2"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "landOf",
              "payable": false,
              "scope": 822,
              "stateMutability": "view",
              "superFunction": 107,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "owner",
                      "scope": 674,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 584,
                        "name": "ElementaryTypeName",
                        "src": "2869:7:2"
                      }
                    ],
                    "id": 585,
                    "name": "VariableDeclaration",
                    "src": "2869:13:2"
                  }
                ],
                "id": 586,
                "name": "ParameterList",
                "src": "2868:15:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 674,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "int256[] memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "length": null,
                          "type": "int256[] storage pointer"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "int",
                              "type": "int256"
                            },
                            "id": 587,
                            "name": "ElementaryTypeName",
                            "src": "2905:3:2"
                          }
                        ],
                        "id": 588,
                        "name": "ArrayTypeName",
                        "src": "2905:5:2"
                      }
                    ],
                    "id": 589,
                    "name": "VariableDeclaration",
                    "src": "2905:5:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 674,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "int256[] memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "length": null,
                          "type": "int256[] storage pointer"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "int",
                              "type": "int256"
                            },
                            "id": 590,
                            "name": "ElementaryTypeName",
                            "src": "2912:3:2"
                          }
                        ],
                        "id": 591,
                        "name": "ArrayTypeName",
                        "src": "2912:5:2"
                      }
                    ],
                    "id": 592,
                    "name": "VariableDeclaration",
                    "src": "2912:5:2"
                  }
                ],
                "id": 593,
                "name": "ParameterList",
                "src": "2904:14:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "assignments": [
                        597
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "x",
                          "scope": 674,
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "type": "int256[] memory",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "length": null,
                              "type": "int256[] storage pointer"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "int",
                                  "type": "int256"
                                },
                                "id": 595,
                                "name": "ElementaryTypeName",
                                "src": "2925:3:2"
                              }
                            ],
                            "id": 596,
                            "name": "ArrayTypeName",
                            "src": "2925:5:2"
                          }
                        ],
                        "id": 597,
                        "name": "VariableDeclaration",
                        "src": "2925:14:2"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "int256[] memory",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "type": "function (uint256) pure returns (int256[] memory)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "length": null,
                                  "type": "int256[] storage pointer"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "name": "int",
                                      "type": "int256"
                                    },
                                    "id": 598,
                                    "name": "ElementaryTypeName",
                                    "src": "2946:3:2"
                                  }
                                ],
                                "id": 599,
                                "name": "ArrayTypeName",
                                "src": "2946:5:2"
                              }
                            ],
                            "id": 600,
                            "name": "NewExpression",
                            "src": "2942:9:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "length",
                              "referencedDeclaration": null,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "uint256[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1613,
                                      "type": "mapping(address => uint256[] storage ref)",
                                      "value": "_assetsOf"
                                    },
                                    "id": 601,
                                    "name": "Identifier",
                                    "src": "2952:9:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 585,
                                      "type": "address",
                                      "value": "owner"
                                    },
                                    "id": 602,
                                    "name": "Identifier",
                                    "src": "2962:5:2"
                                  }
                                ],
                                "id": 603,
                                "name": "IndexAccess",
                                "src": "2952:16:2"
                              }
                            ],
                            "id": 604,
                            "name": "MemberAccess",
                            "src": "2952:23:2"
                          }
                        ],
                        "id": 605,
                        "name": "FunctionCall",
                        "src": "2942:34:2"
                      }
                    ],
                    "id": 606,
                    "name": "VariableDeclarationStatement",
                    "src": "2925:51:2"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        610
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "y",
                          "scope": 674,
                          "stateVariable": false,
                          "storageLocation": "memory",
                          "type": "int256[] memory",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "length": null,
                              "type": "int256[] storage pointer"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "int",
                                  "type": "int256"
                                },
                                "id": 608,
                                "name": "ElementaryTypeName",
                                "src": "2982:3:2"
                              }
                            ],
                            "id": 609,
                            "name": "ArrayTypeName",
                            "src": "2982:5:2"
                          }
                        ],
                        "id": 610,
                        "name": "VariableDeclaration",
                        "src": "2982:14:2"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "int256[] memory",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "type": "function (uint256) pure returns (int256[] memory)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "length": null,
                                  "type": "int256[] storage pointer"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "name": "int",
                                      "type": "int256"
                                    },
                                    "id": 611,
                                    "name": "ElementaryTypeName",
                                    "src": "3003:3:2"
                                  }
                                ],
                                "id": 612,
                                "name": "ArrayTypeName",
                                "src": "3003:5:2"
                              }
                            ],
                            "id": 613,
                            "name": "NewExpression",
                            "src": "2999:9:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "length",
                              "referencedDeclaration": null,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "uint256[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1613,
                                      "type": "mapping(address => uint256[] storage ref)",
                                      "value": "_assetsOf"
                                    },
                                    "id": 614,
                                    "name": "Identifier",
                                    "src": "3009:9:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 585,
                                      "type": "address",
                                      "value": "owner"
                                    },
                                    "id": 615,
                                    "name": "Identifier",
                                    "src": "3019:5:2"
                                  }
                                ],
                                "id": 616,
                                "name": "IndexAccess",
                                "src": "3009:16:2"
                              }
                            ],
                            "id": 617,
                            "name": "MemberAccess",
                            "src": "3009:23:2"
                          }
                        ],
                        "id": 618,
                        "name": "FunctionCall",
                        "src": "2999:34:2"
                      }
                    ],
                    "id": 619,
                    "name": "VariableDeclarationStatement",
                    "src": "2982:51:2"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        null
                      ],
                      "initialValue": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "assetX",
                          "scope": 674,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "int256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "int",
                              "type": "int256"
                            },
                            "id": 620,
                            "name": "ElementaryTypeName",
                            "src": "3040:3:2"
                          }
                        ],
                        "id": 621,
                        "name": "VariableDeclaration",
                        "src": "3040:10:2"
                      }
                    ],
                    "id": 622,
                    "name": "VariableDeclarationStatement",
                    "src": "3040:10:2"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        null
                      ],
                      "initialValue": null
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "assetY",
                          "scope": 674,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "int256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "int",
                              "type": "int256"
                            },
                            "id": 623,
                            "name": "ElementaryTypeName",
                            "src": "3056:3:2"
                          }
                        ],
                        "id": 624,
                        "name": "VariableDeclaration",
                        "src": "3056:10:2"
                      }
                    ],
                    "id": 625,
                    "name": "VariableDeclarationStatement",
                    "src": "3056:10:2"
                  },
                  {
                    "attributes": {
                      "assignments": [
                        627
                      ]
                    },
                    "children": [
                      {
                        "attributes": {
                          "constant": false,
                          "name": "length",
                          "scope": 674,
                          "stateVariable": false,
                          "storageLocation": "default",
                          "type": "uint256",
                          "value": null,
                          "visibility": "internal"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "uint",
                              "type": "uint256"
                            },
                            "id": 626,
                            "name": "ElementaryTypeName",
                            "src": "3072:4:2"
                          }
                        ],
                        "id": 627,
                        "name": "VariableDeclaration",
                        "src": "3072:11:2"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "member_name": "length",
                          "referencedDeclaration": null,
                          "type": "uint256"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "uint256[] storage ref"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1613,
                                  "type": "mapping(address => uint256[] storage ref)",
                                  "value": "_assetsOf"
                                },
                                "id": 628,
                                "name": "Identifier",
                                "src": "3086:9:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 585,
                                  "type": "address",
                                  "value": "owner"
                                },
                                "id": 629,
                                "name": "Identifier",
                                "src": "3096:5:2"
                              }
                            ],
                            "id": 630,
                            "name": "IndexAccess",
                            "src": "3086:16:2"
                          }
                        ],
                        "id": 631,
                        "name": "MemberAccess",
                        "src": "3086:23:2"
                      }
                    ],
                    "id": 632,
                    "name": "VariableDeclarationStatement",
                    "src": "3072:37:2"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "assignments": [
                            634
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "i",
                              "scope": 674,
                              "stateVariable": false,
                              "storageLocation": "default",
                              "type": "uint256",
                              "value": null,
                              "visibility": "internal"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "uint",
                                  "type": "uint256"
                                },
                                "id": 633,
                                "name": "ElementaryTypeName",
                                "src": "3120:4:2"
                              }
                            ],
                            "id": 634,
                            "name": "VariableDeclaration",
                            "src": "3120:6:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 635,
                            "name": "Literal",
                            "src": "3129:1:2"
                          }
                        ],
                        "id": 636,
                        "name": "VariableDeclarationStatement",
                        "src": "3120:10:2"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "<",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 634,
                              "type": "uint256",
                              "value": "i"
                            },
                            "id": 637,
                            "name": "Identifier",
                            "src": "3132:1:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 627,
                              "type": "uint256",
                              "value": "length"
                            },
                            "id": 638,
                            "name": "Identifier",
                            "src": "3136:6:2"
                          }
                        ],
                        "id": 639,
                        "name": "BinaryOperation",
                        "src": "3132:10:2"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "++",
                              "prefix": false,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 634,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 640,
                                "name": "Identifier",
                                "src": "3144:1:2"
                              }
                            ],
                            "id": 641,
                            "name": "UnaryOperation",
                            "src": "3144:3:2"
                          }
                        ],
                        "id": 642,
                        "name": "ExpressionStatement",
                        "src": "3144:3:2"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "=",
                                  "type": "tuple()"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isInlineArray": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "type": "tuple(int256,int256)"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 621,
                                          "type": "int256",
                                          "value": "assetX"
                                        },
                                        "id": 643,
                                        "name": "Identifier",
                                        "src": "3158:6:2"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 624,
                                          "type": "int256",
                                          "value": "assetY"
                                        },
                                        "id": 644,
                                        "name": "Identifier",
                                        "src": "3166:6:2"
                                      }
                                    ],
                                    "id": 645,
                                    "name": "TupleExpression",
                                    "src": "3157:16:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "tuple(int256,int256)",
                                      "type_conversion": false
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_uint256",
                                              "typeString": "uint256"
                                            }
                                          ],
                                          "overloadedDeclarations": [
                                            454
                                          ],
                                          "referencedDeclaration": 454,
                                          "type": "function (uint256) view returns (int256,int256)",
                                          "value": "decodeTokenId"
                                        },
                                        "id": 646,
                                        "name": "Identifier",
                                        "src": "3176:13:2"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "uint256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "type": "uint256[] storage ref"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 1613,
                                                  "type": "mapping(address => uint256[] storage ref)",
                                                  "value": "_assetsOf"
                                                },
                                                "id": 647,
                                                "name": "Identifier",
                                                "src": "3190:9:2"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 585,
                                                  "type": "address",
                                                  "value": "owner"
                                                },
                                                "id": 648,
                                                "name": "Identifier",
                                                "src": "3200:5:2"
                                              }
                                            ],
                                            "id": 649,
                                            "name": "IndexAccess",
                                            "src": "3190:16:2"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 634,
                                              "type": "uint256",
                                              "value": "i"
                                            },
                                            "id": 650,
                                            "name": "Identifier",
                                            "src": "3207:1:2"
                                          }
                                        ],
                                        "id": 651,
                                        "name": "IndexAccess",
                                        "src": "3190:19:2"
                                      }
                                    ],
                                    "id": 652,
                                    "name": "FunctionCall",
                                    "src": "3176:34:2"
                                  }
                                ],
                                "id": 653,
                                "name": "Assignment",
                                "src": "3157:53:2"
                              }
                            ],
                            "id": 654,
                            "name": "ExpressionStatement",
                            "src": "3157:53:2"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "=",
                                  "type": "int256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "type": "int256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 597,
                                          "type": "int256[] memory",
                                          "value": "x"
                                        },
                                        "id": 655,
                                        "name": "Identifier",
                                        "src": "3218:1:2"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 634,
                                          "type": "uint256",
                                          "value": "i"
                                        },
                                        "id": 656,
                                        "name": "Identifier",
                                        "src": "3220:1:2"
                                      }
                                    ],
                                    "id": 657,
                                    "name": "IndexAccess",
                                    "src": "3218:4:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 621,
                                      "type": "int256",
                                      "value": "assetX"
                                    },
                                    "id": 658,
                                    "name": "Identifier",
                                    "src": "3225:6:2"
                                  }
                                ],
                                "id": 659,
                                "name": "Assignment",
                                "src": "3218:13:2"
                              }
                            ],
                            "id": 660,
                            "name": "ExpressionStatement",
                            "src": "3218:13:2"
                          },
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "=",
                                  "type": "int256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": true,
                                      "type": "int256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 610,
                                          "type": "int256[] memory",
                                          "value": "y"
                                        },
                                        "id": 661,
                                        "name": "Identifier",
                                        "src": "3239:1:2"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 634,
                                          "type": "uint256",
                                          "value": "i"
                                        },
                                        "id": 662,
                                        "name": "Identifier",
                                        "src": "3241:1:2"
                                      }
                                    ],
                                    "id": 663,
                                    "name": "IndexAccess",
                                    "src": "3239:4:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 624,
                                      "type": "int256",
                                      "value": "assetY"
                                    },
                                    "id": 664,
                                    "name": "Identifier",
                                    "src": "3246:6:2"
                                  }
                                ],
                                "id": 665,
                                "name": "Assignment",
                                "src": "3239:13:2"
                              }
                            ],
                            "id": 666,
                            "name": "ExpressionStatement",
                            "src": "3239:13:2"
                          }
                        ],
                        "id": 667,
                        "name": "Block",
                        "src": "3149:110:2"
                      }
                    ],
                    "id": 668,
                    "name": "ForStatement",
                    "src": "3115:144:2"
                  },
                  {
                    "attributes": {
                      "functionReturnParameters": 593
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isInlineArray": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "tuple(int256[] memory,int256[] memory)"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 597,
                              "type": "int256[] memory",
                              "value": "x"
                            },
                            "id": 669,
                            "name": "Identifier",
                            "src": "3273:1:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 610,
                              "type": "int256[] memory",
                              "value": "y"
                            },
                            "id": 670,
                            "name": "Identifier",
                            "src": "3276:1:2"
                          }
                        ],
                        "id": 671,
                        "name": "TupleExpression",
                        "src": "3272:6:2"
                      }
                    ],
                    "id": 672,
                    "name": "Return",
                    "src": "3265:13:2"
                  }
                ],
                "id": 673,
                "name": "Block",
                "src": "2919:364:2"
              }
            ],
            "id": 674,
            "name": "FunctionDefinition",
            "src": "2853:430:2"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "landData",
              "payable": false,
              "scope": 822,
              "stateMutability": "view",
              "superFunction": 116,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "x",
                      "scope": 691,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "int256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "int",
                          "type": "int256"
                        },
                        "id": 675,
                        "name": "ElementaryTypeName",
                        "src": "3305:3:2"
                      }
                    ],
                    "id": 676,
                    "name": "VariableDeclaration",
                    "src": "3305:5:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "y",
                      "scope": 691,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "int256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "int",
                          "type": "int256"
                        },
                        "id": 677,
                        "name": "ElementaryTypeName",
                        "src": "3312:3:2"
                      }
                    ],
                    "id": 678,
                    "name": "VariableDeclaration",
                    "src": "3312:5:2"
                  }
                ],
                "id": 679,
                "name": "ParameterList",
                "src": "3304:14:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "",
                      "scope": 691,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 680,
                        "name": "ElementaryTypeName",
                        "src": "3340:6:2"
                      }
                    ],
                    "id": 681,
                    "name": "VariableDeclaration",
                    "src": "3340:6:2"
                  }
                ],
                "id": 682,
                "name": "ParameterList",
                "src": "3339:8:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 682
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "string memory",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                1911
                              ],
                              "referencedDeclaration": 1911,
                              "type": "function (uint256) view returns (string memory)",
                              "value": "assetData"
                            },
                            "id": 683,
                            "name": "Identifier",
                            "src": "3361:9:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    },
                                    {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    420
                                  ],
                                  "referencedDeclaration": 420,
                                  "type": "function (int256,int256) view returns (uint256)",
                                  "value": "encodeTokenId"
                                },
                                "id": 684,
                                "name": "Identifier",
                                "src": "3371:13:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 676,
                                  "type": "int256",
                                  "value": "x"
                                },
                                "id": 685,
                                "name": "Identifier",
                                "src": "3385:1:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 678,
                                  "type": "int256",
                                  "value": "y"
                                },
                                "id": 686,
                                "name": "Identifier",
                                "src": "3388:1:2"
                              }
                            ],
                            "id": 687,
                            "name": "FunctionCall",
                            "src": "3371:19:2"
                          }
                        ],
                        "id": 688,
                        "name": "FunctionCall",
                        "src": "3361:30:2"
                      }
                    ],
                    "id": 689,
                    "name": "Return",
                    "src": "3354:37:2"
                  }
                ],
                "id": 690,
                "name": "Block",
                "src": "3348:48:2"
              }
            ],
            "id": 691,
            "name": "FunctionDefinition",
            "src": "3287:109:2"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "transferLand",
              "payable": false,
              "scope": 822,
              "stateMutability": "nonpayable",
              "superFunction": 125,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "x",
                      "scope": 709,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "int256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "int",
                          "type": "int256"
                        },
                        "id": 692,
                        "name": "ElementaryTypeName",
                        "src": "3452:3:2"
                      }
                    ],
                    "id": 693,
                    "name": "VariableDeclaration",
                    "src": "3452:5:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "y",
                      "scope": 709,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "int256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "int",
                          "type": "int256"
                        },
                        "id": 694,
                        "name": "ElementaryTypeName",
                        "src": "3459:3:2"
                      }
                    ],
                    "id": 695,
                    "name": "VariableDeclaration",
                    "src": "3459:5:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "to",
                      "scope": 709,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 696,
                        "name": "ElementaryTypeName",
                        "src": "3466:7:2"
                      }
                    ],
                    "id": 697,
                    "name": "VariableDeclaration",
                    "src": "3466:10:2"
                  }
                ],
                "id": 698,
                "name": "ParameterList",
                "src": "3451:26:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 699,
                "name": "ParameterList",
                "src": "3485:0:2"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                2406,
                                2424,
                                2445
                              ],
                              "referencedDeclaration": 2406,
                              "type": "function (address,uint256)",
                              "value": "transfer"
                            },
                            "id": 700,
                            "name": "Identifier",
                            "src": "3491:8:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 697,
                              "type": "address",
                              "value": "to"
                            },
                            "id": 701,
                            "name": "Identifier",
                            "src": "3500:2:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    },
                                    {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    420
                                  ],
                                  "referencedDeclaration": 420,
                                  "type": "function (int256,int256) view returns (uint256)",
                                  "value": "encodeTokenId"
                                },
                                "id": 702,
                                "name": "Identifier",
                                "src": "3504:13:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 693,
                                  "type": "int256",
                                  "value": "x"
                                },
                                "id": 703,
                                "name": "Identifier",
                                "src": "3518:1:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 695,
                                  "type": "int256",
                                  "value": "y"
                                },
                                "id": 704,
                                "name": "Identifier",
                                "src": "3521:1:2"
                              }
                            ],
                            "id": 705,
                            "name": "FunctionCall",
                            "src": "3504:19:2"
                          }
                        ],
                        "id": 706,
                        "name": "FunctionCall",
                        "src": "3491:33:2"
                      }
                    ],
                    "id": 707,
                    "name": "ExpressionStatement",
                    "src": "3491:33:2"
                  }
                ],
                "id": 708,
                "name": "Block",
                "src": "3485:44:2"
              }
            ],
            "id": 709,
            "name": "FunctionDefinition",
            "src": "3430:99:2"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "transferManyLand",
              "payable": false,
              "scope": 822,
              "stateMutability": "nonpayable",
              "superFunction": 136,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "x",
                      "scope": 754,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "int256[] memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "length": null,
                          "type": "int256[] storage pointer"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "int",
                              "type": "int256"
                            },
                            "id": 710,
                            "name": "ElementaryTypeName",
                            "src": "3559:3:2"
                          }
                        ],
                        "id": 711,
                        "name": "ArrayTypeName",
                        "src": "3559:5:2"
                      }
                    ],
                    "id": 712,
                    "name": "VariableDeclaration",
                    "src": "3559:7:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "y",
                      "scope": 754,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "int256[] memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "length": null,
                          "type": "int256[] storage pointer"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "int",
                              "type": "int256"
                            },
                            "id": 713,
                            "name": "ElementaryTypeName",
                            "src": "3568:3:2"
                          }
                        ],
                        "id": 714,
                        "name": "ArrayTypeName",
                        "src": "3568:5:2"
                      }
                    ],
                    "id": 715,
                    "name": "VariableDeclaration",
                    "src": "3568:7:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "to",
                      "scope": 754,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "type": "address"
                        },
                        "id": 716,
                        "name": "ElementaryTypeName",
                        "src": "3577:7:2"
                      }
                    ],
                    "id": 717,
                    "name": "VariableDeclaration",
                    "src": "3577:10:2"
                  }
                ],
                "id": 718,
                "name": "ParameterList",
                "src": "3558:30:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 719,
                "name": "ParameterList",
                "src": "3596:0:2"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2775,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 720,
                            "name": "Identifier",
                            "src": "3602:7:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "length",
                                  "referencedDeclaration": null,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 712,
                                      "type": "int256[] memory",
                                      "value": "x"
                                    },
                                    "id": 721,
                                    "name": "Identifier",
                                    "src": "3610:1:2"
                                  }
                                ],
                                "id": 722,
                                "name": "MemberAccess",
                                "src": "3610:8:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "length",
                                  "referencedDeclaration": null,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 715,
                                      "type": "int256[] memory",
                                      "value": "y"
                                    },
                                    "id": 723,
                                    "name": "Identifier",
                                    "src": "3622:1:2"
                                  }
                                ],
                                "id": 724,
                                "name": "MemberAccess",
                                "src": "3622:8:2"
                              }
                            ],
                            "id": 725,
                            "name": "BinaryOperation",
                            "src": "3610:20:2"
                          }
                        ],
                        "id": 726,
                        "name": "FunctionCall",
                        "src": "3602:29:2"
                      }
                    ],
                    "id": 727,
                    "name": "ExpressionStatement",
                    "src": "3602:29:2"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "assignments": [
                            729
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "i",
                              "scope": 754,
                              "stateVariable": false,
                              "storageLocation": "default",
                              "type": "uint256",
                              "value": null,
                              "visibility": "internal"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "uint",
                                  "type": "uint256"
                                },
                                "id": 728,
                                "name": "ElementaryTypeName",
                                "src": "3642:4:2"
                              }
                            ],
                            "id": 729,
                            "name": "VariableDeclaration",
                            "src": "3642:6:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 730,
                            "name": "Literal",
                            "src": "3651:1:2"
                          }
                        ],
                        "id": 731,
                        "name": "VariableDeclarationStatement",
                        "src": "3642:10:2"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "<",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 729,
                              "type": "uint256",
                              "value": "i"
                            },
                            "id": 732,
                            "name": "Identifier",
                            "src": "3654:1:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "length",
                              "referencedDeclaration": null,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 712,
                                  "type": "int256[] memory",
                                  "value": "x"
                                },
                                "id": 733,
                                "name": "Identifier",
                                "src": "3658:1:2"
                              }
                            ],
                            "id": 734,
                            "name": "MemberAccess",
                            "src": "3658:8:2"
                          }
                        ],
                        "id": 735,
                        "name": "BinaryOperation",
                        "src": "3654:12:2"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "++",
                              "prefix": false,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 729,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 736,
                                "name": "Identifier",
                                "src": "3668:1:2"
                              }
                            ],
                            "id": 737,
                            "name": "UnaryOperation",
                            "src": "3668:3:2"
                          }
                        ],
                        "id": 738,
                        "name": "ExpressionStatement",
                        "src": "3668:3:2"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "tuple()",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_address",
                                          "typeString": "address"
                                        },
                                        {
                                          "typeIdentifier": "t_uint256",
                                          "typeString": "uint256"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        2406,
                                        2424,
                                        2445
                                      ],
                                      "referencedDeclaration": 2406,
                                      "type": "function (address,uint256)",
                                      "value": "transfer"
                                    },
                                    "id": 739,
                                    "name": "Identifier",
                                    "src": "3681:8:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 717,
                                      "type": "address",
                                      "value": "to"
                                    },
                                    "id": 740,
                                    "name": "Identifier",
                                    "src": "3690:2:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "uint256",
                                      "type_conversion": false
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            {
                                              "typeIdentifier": "t_int256",
                                              "typeString": "int256"
                                            },
                                            {
                                              "typeIdentifier": "t_int256",
                                              "typeString": "int256"
                                            }
                                          ],
                                          "overloadedDeclarations": [
                                            420
                                          ],
                                          "referencedDeclaration": 420,
                                          "type": "function (int256,int256) view returns (uint256)",
                                          "value": "encodeTokenId"
                                        },
                                        "id": 741,
                                        "name": "Identifier",
                                        "src": "3694:13:2"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "int256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 712,
                                              "type": "int256[] memory",
                                              "value": "x"
                                            },
                                            "id": 742,
                                            "name": "Identifier",
                                            "src": "3708:1:2"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 729,
                                              "type": "uint256",
                                              "value": "i"
                                            },
                                            "id": 743,
                                            "name": "Identifier",
                                            "src": "3710:1:2"
                                          }
                                        ],
                                        "id": 744,
                                        "name": "IndexAccess",
                                        "src": "3708:4:2"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": true,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "type": "int256"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 715,
                                              "type": "int256[] memory",
                                              "value": "y"
                                            },
                                            "id": 745,
                                            "name": "Identifier",
                                            "src": "3714:1:2"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 729,
                                              "type": "uint256",
                                              "value": "i"
                                            },
                                            "id": 746,
                                            "name": "Identifier",
                                            "src": "3716:1:2"
                                          }
                                        ],
                                        "id": 747,
                                        "name": "IndexAccess",
                                        "src": "3714:4:2"
                                      }
                                    ],
                                    "id": 748,
                                    "name": "FunctionCall",
                                    "src": "3694:25:2"
                                  }
                                ],
                                "id": 749,
                                "name": "FunctionCall",
                                "src": "3681:39:2"
                              }
                            ],
                            "id": 750,
                            "name": "ExpressionStatement",
                            "src": "3681:39:2"
                          }
                        ],
                        "id": 751,
                        "name": "Block",
                        "src": "3673:54:2"
                      }
                    ],
                    "id": 752,
                    "name": "ForStatement",
                    "src": "3637:90:2"
                  }
                ],
                "id": 753,
                "name": "Block",
                "src": "3596:135:2"
              }
            ],
            "id": 754,
            "name": "FunctionDefinition",
            "src": "3533:198:2"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "name": "updateLandData",
              "payable": false,
              "scope": 822,
              "stateMutability": "nonpayable",
              "superFunction": 145,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "x",
                      "scope": 778,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "int256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "int",
                          "type": "int256"
                        },
                        "id": 755,
                        "name": "ElementaryTypeName",
                        "src": "3787:3:2"
                      }
                    ],
                    "id": 756,
                    "name": "VariableDeclaration",
                    "src": "3787:5:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "y",
                      "scope": 778,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "int256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "int",
                          "type": "int256"
                        },
                        "id": 757,
                        "name": "ElementaryTypeName",
                        "src": "3794:3:2"
                      }
                    ],
                    "id": 758,
                    "name": "VariableDeclaration",
                    "src": "3794:5:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "data",
                      "scope": 778,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 759,
                        "name": "ElementaryTypeName",
                        "src": "3801:6:2"
                      }
                    ],
                    "id": 760,
                    "name": "VariableDeclaration",
                    "src": "3801:11:2"
                  }
                ],
                "id": 761,
                "name": "ParameterList",
                "src": "3786:27:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 768,
                "name": "ParameterList",
                "src": "3863:0:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 2362,
                      "type": "modifier (uint256)",
                      "value": "onlyOperatorOrHolder"
                    },
                    "id": 762,
                    "name": "Identifier",
                    "src": "3821:20:2"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "isStructConstructorCall": false,
                      "lValueRequested": false,
                      "names": [
                        null
                      ],
                      "type": "uint256",
                      "type_conversion": false
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            },
                            {
                              "typeIdentifier": "t_int256",
                              "typeString": "int256"
                            }
                          ],
                          "overloadedDeclarations": [
                            420
                          ],
                          "referencedDeclaration": 420,
                          "type": "function (int256,int256) view returns (uint256)",
                          "value": "encodeTokenId"
                        },
                        "id": 763,
                        "name": "Identifier",
                        "src": "3842:13:2"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 756,
                          "type": "int256",
                          "value": "x"
                        },
                        "id": 764,
                        "name": "Identifier",
                        "src": "3856:1:2"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "overloadedDeclarations": [
                            null
                          ],
                          "referencedDeclaration": 758,
                          "type": "int256",
                          "value": "y"
                        },
                        "id": 765,
                        "name": "Identifier",
                        "src": "3859:1:2"
                      }
                    ],
                    "id": 766,
                    "name": "FunctionCall",
                    "src": "3842:19:2"
                  }
                ],
                "id": 767,
                "name": "ModifierInvocation",
                "src": "3821:41:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 768
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                },
                                {
                                  "typeIdentifier": "t_string_memory_ptr",
                                  "typeString": "string memory"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2589,
                              "type": "function (uint256,string memory)",
                              "value": "_update"
                            },
                            "id": 769,
                            "name": "Identifier",
                            "src": "3876:7:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "type": "uint256",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    },
                                    {
                                      "typeIdentifier": "t_int256",
                                      "typeString": "int256"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    420
                                  ],
                                  "referencedDeclaration": 420,
                                  "type": "function (int256,int256) view returns (uint256)",
                                  "value": "encodeTokenId"
                                },
                                "id": 770,
                                "name": "Identifier",
                                "src": "3884:13:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 756,
                                  "type": "int256",
                                  "value": "x"
                                },
                                "id": 771,
                                "name": "Identifier",
                                "src": "3898:1:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 758,
                                  "type": "int256",
                                  "value": "y"
                                },
                                "id": 772,
                                "name": "Identifier",
                                "src": "3901:1:2"
                              }
                            ],
                            "id": 773,
                            "name": "FunctionCall",
                            "src": "3884:19:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 760,
                              "type": "string memory",
                              "value": "data"
                            },
                            "id": 774,
                            "name": "Identifier",
                            "src": "3905:4:2"
                          }
                        ],
                        "id": 775,
                        "name": "FunctionCall",
                        "src": "3876:34:2"
                      }
                    ],
                    "id": 776,
                    "name": "Return",
                    "src": "3869:41:2"
                  }
                ],
                "id": 777,
                "name": "Block",
                "src": "3863:52:2"
              }
            ],
            "id": 778,
            "name": "FunctionDefinition",
            "src": "3763:152:2"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "updateManyLandData",
              "payable": false,
              "scope": 822,
              "stateMutability": "nonpayable",
              "superFunction": 156,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "x",
                      "scope": 821,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "int256[] memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "length": null,
                          "type": "int256[] storage pointer"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "int",
                              "type": "int256"
                            },
                            "id": 779,
                            "name": "ElementaryTypeName",
                            "src": "3947:3:2"
                          }
                        ],
                        "id": 780,
                        "name": "ArrayTypeName",
                        "src": "3947:5:2"
                      }
                    ],
                    "id": 781,
                    "name": "VariableDeclaration",
                    "src": "3947:7:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "y",
                      "scope": 821,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "int256[] memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "length": null,
                          "type": "int256[] storage pointer"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "int",
                              "type": "int256"
                            },
                            "id": 782,
                            "name": "ElementaryTypeName",
                            "src": "3956:3:2"
                          }
                        ],
                        "id": 783,
                        "name": "ArrayTypeName",
                        "src": "3956:5:2"
                      }
                    ],
                    "id": 784,
                    "name": "VariableDeclaration",
                    "src": "3956:7:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "data",
                      "scope": 821,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 785,
                        "name": "ElementaryTypeName",
                        "src": "3965:6:2"
                      }
                    ],
                    "id": 786,
                    "name": "VariableDeclaration",
                    "src": "3965:11:2"
                  }
                ],
                "id": 787,
                "name": "ParameterList",
                "src": "3946:31:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 788,
                "name": "ParameterList",
                "src": "3985:0:2"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2775,
                              "type": "function (bool) pure",
                              "value": "require"
                            },
                            "id": 789,
                            "name": "Identifier",
                            "src": "3991:7:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "commonType": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              },
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "==",
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "length",
                                  "referencedDeclaration": null,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 781,
                                      "type": "int256[] memory",
                                      "value": "x"
                                    },
                                    "id": 790,
                                    "name": "Identifier",
                                    "src": "3999:1:2"
                                  }
                                ],
                                "id": 791,
                                "name": "MemberAccess",
                                "src": "3999:8:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "member_name": "length",
                                  "referencedDeclaration": null,
                                  "type": "uint256"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 784,
                                      "type": "int256[] memory",
                                      "value": "y"
                                    },
                                    "id": 792,
                                    "name": "Identifier",
                                    "src": "4011:1:2"
                                  }
                                ],
                                "id": 793,
                                "name": "MemberAccess",
                                "src": "4011:8:2"
                              }
                            ],
                            "id": 794,
                            "name": "BinaryOperation",
                            "src": "3999:20:2"
                          }
                        ],
                        "id": 795,
                        "name": "FunctionCall",
                        "src": "3991:29:2"
                      }
                    ],
                    "id": 796,
                    "name": "ExpressionStatement",
                    "src": "3991:29:2"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "assignments": [
                            798
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "i",
                              "scope": 821,
                              "stateVariable": false,
                              "storageLocation": "default",
                              "type": "uint256",
                              "value": null,
                              "visibility": "internal"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "uint",
                                  "type": "uint256"
                                },
                                "id": 797,
                                "name": "ElementaryTypeName",
                                "src": "4031:4:2"
                              }
                            ],
                            "id": 798,
                            "name": "VariableDeclaration",
                            "src": "4031:6:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 799,
                            "name": "Literal",
                            "src": "4040:1:2"
                          }
                        ],
                        "id": 800,
                        "name": "VariableDeclarationStatement",
                        "src": "4031:10:2"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "<",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 798,
                              "type": "uint256",
                              "value": "i"
                            },
                            "id": 801,
                            "name": "Identifier",
                            "src": "4043:1:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "length",
                              "referencedDeclaration": null,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 781,
                                  "type": "int256[] memory",
                                  "value": "x"
                                },
                                "id": 802,
                                "name": "Identifier",
                                "src": "4047:1:2"
                              }
                            ],
                            "id": 803,
                            "name": "MemberAccess",
                            "src": "4047:8:2"
                          }
                        ],
                        "id": 804,
                        "name": "BinaryOperation",
                        "src": "4043:12:2"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "++",
                              "prefix": false,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 798,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 805,
                                "name": "Identifier",
                                "src": "4057:1:2"
                              }
                            ],
                            "id": 806,
                            "name": "UnaryOperation",
                            "src": "4057:3:2"
                          }
                        ],
                        "id": 807,
                        "name": "ExpressionStatement",
                        "src": "4057:3:2"
                      },
                      {
                        "children": [
                          {
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "type": "tuple()",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        },
                                        {
                                          "typeIdentifier": "t_int256",
                                          "typeString": "int256"
                                        },
                                        {
                                          "typeIdentifier": "t_string_memory_ptr",
                                          "typeString": "string memory"
                                        }
                                      ],
                                      "overloadedDeclarations": [
                                        778
                                      ],
                                      "referencedDeclaration": 778,
                                      "type": "function (int256,int256,string memory)",
                                      "value": "updateLandData"
                                    },
                                    "id": 808,
                                    "name": "Identifier",
                                    "src": "4070:14:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "int256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 781,
                                          "type": "int256[] memory",
                                          "value": "x"
                                        },
                                        "id": 809,
                                        "name": "Identifier",
                                        "src": "4085:1:2"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 798,
                                          "type": "uint256",
                                          "value": "i"
                                        },
                                        "id": 810,
                                        "name": "Identifier",
                                        "src": "4087:1:2"
                                      }
                                    ],
                                    "id": 811,
                                    "name": "IndexAccess",
                                    "src": "4085:4:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "type": "int256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 784,
                                          "type": "int256[] memory",
                                          "value": "y"
                                        },
                                        "id": 812,
                                        "name": "Identifier",
                                        "src": "4091:1:2"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 798,
                                          "type": "uint256",
                                          "value": "i"
                                        },
                                        "id": 813,
                                        "name": "Identifier",
                                        "src": "4093:1:2"
                                      }
                                    ],
                                    "id": 814,
                                    "name": "IndexAccess",
                                    "src": "4091:4:2"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 786,
                                      "type": "string memory",
                                      "value": "data"
                                    },
                                    "id": 815,
                                    "name": "Identifier",
                                    "src": "4097:4:2"
                                  }
                                ],
                                "id": 816,
                                "name": "FunctionCall",
                                "src": "4070:32:2"
                              }
                            ],
                            "id": 817,
                            "name": "ExpressionStatement",
                            "src": "4070:32:2"
                          }
                        ],
                        "id": 818,
                        "name": "Block",
                        "src": "4062:47:2"
                      }
                    ],
                    "id": 819,
                    "name": "ForStatement",
                    "src": "4026:83:2"
                  }
                ],
                "id": 820,
                "name": "Block",
                "src": "3985:128:2"
              }
            ],
            "id": 821,
            "name": "FunctionDefinition",
            "src": "3919:194:2"
          }
        ],
        "id": 822,
        "name": "ContractDefinition",
        "src": "216:3899:2"
      }
    ],
    "id": 823,
    "name": "SourceUnit",
    "src": "0:4116:2"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-02-02T00:30:59.642Z"
}