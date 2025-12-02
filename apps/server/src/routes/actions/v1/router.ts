import { Router } from 'hyper-express';
import BalanceActions from './balances';


export function createV1Router() {
  const router = new Router();

  router.get('/balance', BalanceActions.getNativeBalance)
  router.get('/balance/:contractAddress', BalanceActions.getERC20Balance)

  return router;
}
