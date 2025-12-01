interface EtherscanClientOptions {
  chainId: number
}

interface EtherscanNativeBalanceResponse {
  status: '1' | '0';
  message: 'OK' | 'NOTOK';
  result: string;
}


export default class EtherscanClient {
  baseURL: string = 'https://api.etherscan.io/v2/api';
  
  apikey: string;

  chainId: number;

  constructor(apiKey: string, options: Partial<EtherscanClientOptions> = {}) {
    this.apikey = apiKey
    this.chainId = options.chainId || 1;
  }

  async getNativeBalance(address: string): Promise<string> {
    const queryParams: Record<string, string> = { 
      apikey: this.apikey,
      chainid: `${this.chainId}`,
      module: 'account',
      action: 'balance',
      address: address,
      tag: 'latest'
    }

    const queryString = new URLSearchParams(queryParams).toString();

    const url = `${this.baseURL}?${queryString}`
    const response = await fetch(url);
    const data: EtherscanNativeBalanceResponse = await response.json();
    if (data.message === 'OK') {
      return data.result
    } 
    throw new Error(`Failed to fetch native balance from etherscan: status=${data.status} result=${data.result}`)
  }
}