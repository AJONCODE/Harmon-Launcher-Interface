import { ChainId } from 'harmony-swap-sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
 
  [ChainId.HARMONY_TESTNET]: '0xD41D00128F0001777E13c1B2E4b2b4d9Eb95f0bB',
  [ChainId.HARMONY]: "0x937D9A5a7948e1E5f5F232841d27C9AAE068A163"
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
