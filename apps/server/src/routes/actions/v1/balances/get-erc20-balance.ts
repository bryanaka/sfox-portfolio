import type { Request, Response } from "hyper-express"
import EtherscanClient from "../../../../lib/etherscan"

const {
  ETHERSCAN_API_KEY,
  TEST_ADDRESS,
  ENS_CONTRACT_ADDRESS
  //@ts-ignore
} = process.env;

/** 
* fetches the balance of a given ERC-20 Token. 
* 
* This requires at minimum:
* - Address you are checking balances for
* - Contract Address of the ERC-20 token (see example ENS contract address)
*/
export async function getERC20Balance(req: Request, res: Response) {
  
}