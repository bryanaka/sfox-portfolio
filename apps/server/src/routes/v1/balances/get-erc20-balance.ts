import type { Request, Response } from "hyper-express"
import EtherscanClient from "../../../lib/etherscan"

const {
  ETHERSCAN_API_KEY,
  TEST_ADDRESS,
  ENS_CONTRACT_ADDRESS
  //@ts-ignore
} = process.env;

export async function getERC20Balance(req: Request, res: Response) {
  
}