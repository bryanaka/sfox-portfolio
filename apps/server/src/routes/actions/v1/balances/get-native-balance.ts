import type { Request, Response } from "hyper-express"
import EtherscanClient from "../../../../lib/etherscan"

const {
  ETHERSCAN_API_KEY,
  TEST_ADDRESS
  //@ts-ignore
} = process.env;

/** 
* fetches the balance of the native token. For Ethereum, that would be ETH. For Polygon, POL, etc.
* 
* This requires at minimum:
* - Address you are checking balances for
*/
export async function getNativeBalance(req: Request, res: Response) {
  const client = new EtherscanClient(ETHERSCAN_API_KEY)
  const nativeBalance = await client.getNativeBalance(TEST_ADDRESS);
  res.json({ balance: nativeBalance });
}