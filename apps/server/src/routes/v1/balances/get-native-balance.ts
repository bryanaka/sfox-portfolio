import type { Request, Response } from "hyper-express"
import EtherscanClient from "../../../lib/etherscan"

const {
  ETHERSCAN_API_KEY,
  TEST_ADDRESS
  //@ts-ignore
} = process.env;

export async function getNativeBalance(req: Request, res: Response) {
  const client = new EtherscanClient(ETHERSCAN_API_KEY)
  const response = await client.getNativeBalance(TEST_ADDRESS);
  res.json(response);
}