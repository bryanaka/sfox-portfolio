# sFOX Portfolio

We are building a small portfolio application that will display balances of cryptocurrencies for EVM blockchains using the Etherscan API.

## Requirements
- pnpm (or npm)
- nodejs 22

## Setup

## Application Structure

This application is a monorepo, with both a server and a client (client is not built yet). 

### Client

TBD

### Server

The top-level files are mostly just set up, but here is the breakdown:

- `main.ts` - entrypoint for the application
- `server.ts` - creates the server and adds middleware and the router
- `router.ts` - creates the core router and where additional routes are added

the server application is split into two main folders for now:

#### lib

lib holds any library specific code, which is doing interaction with Etherscan.

#### routes

Routes hold route level code. While in most application, this would probably be broken down into different folders, we are keeping it simple for now. Feel free to add additional structure as you see fit.

##### DTOs

DTOs or Data Transfer Objects are the objects that are transfered to and from the client. This folder will primarily be used for types, not as much code.

Right now, we have defined the top level envelopes we would like to adhere to, which are the root schema used in our responses.

We also have a file for balance related DTOs, but have not defined them.

##### Actions

Actions are the handlers for a given route. They should all take a request and response and be async.

### Cryptocurrency Context

The main concepts you need to know for this application are as follows

#### Chain and Chain ID

The chain id is an identifier for the given blockchain being used as defined by EIP 155. By default in this application, it is chain id 1, or ethereum mainnet.

#### Native Coin (Balance)

Every blockchain has a native currency to that chain that is used to pay fees. On Bitcoin, this is bitcoin. On Ethereum, ether, etc. Worth noting that many networks may also use ether, i.e. Base uses ether.

The transfer of this token is usually consiedered the most basic transaction you can do on chains.

#### ERC-20 Token (Balance)

ERC-20 is a standard used to define tokens on an EVM based blockchain. By coding smart contracts to adhere to the token standard, we have a unified way of accessing data about the token. 

For example, USDC, UNI, ENS are all tokens that adhere to the ERC-20 standard.

## Documentation
Hyperexpress Documentation: https://github.com/kartikk221/hyper-express/tree/master/docs

Etherscan Docs: https://docs.etherscan.io/api-reference/

Etherscan Docs for Token Balance: https://docs.etherscan.io/api-reference/endpoint/tokenbalance?playground=open