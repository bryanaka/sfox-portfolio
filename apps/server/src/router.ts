import { Router } from 'hyper-express';
import { getNativeBalance } from './routes/v1/balances/get-native-balance';
import BalanceActions from './routes/v1/balances';


export function createAppRouter() {
  const router = new Router();
  
  // routes go here
  router.get('/hello', async (req, res) => {
    res.json({ world: true })
  })

  router.get('/balance', BalanceActions.getNativeBalance)
  router.get('/balance/:contractAddress', BalanceActions.getERC20Balance)

  return router;
}
