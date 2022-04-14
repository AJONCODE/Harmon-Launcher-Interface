import { ChainId, JSBI, Percent, Token, WETH, Fraction } from 'harmony-swap-sdk'
import { AbstractConnector } from '@web3-react/abstract-connector'

import { injected } from '../connectors'

export const ROUTER_ADDRESS = '0x7d2Bb6328bE14594bb6E05d4Aa4bb2A8734bcA38'; 

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

export const HARL = new Token(ChainId.HARMONY, '0x4518231a8fdf6ac553b9bbd51bbb86825b583263', 6, 'HARL', 'HarmonyLauncher')
export const ETH = new Token(ChainId.HARMONY, '0x6983D1E6DEf3690C4d616b13597A09e6193EA013', 8, '1ETH', 'Eth')
export const DAI = new Token(ChainId.HARMONY, '0xEf977d2f931C1978Db5F6747666fa1eACB0d0339', 8, '1DAI', 'Dai Stablecoin')
export const USDC = new Token(ChainId.HARMONY, '0x985458e523db3d53125813ed68c274899e9dfab4', 8, '1USDC', 'USD Coin')


// a list of tokens by chain
type ChainTokenList = {
  readonly [chainId in ChainId]: Token[]
}

export const ONE = WETH[ChainId.HARMONY];
// TODO this is only approximate, it's actually based on blocks
export const PROPOSAL_LENGTH_IN_DAYS = 7

export const GOVERNANCE_ADDRESS = '0x5e4be8Bc9637f0EAA1A755019e06A68ce081D58F'

const UNI_ADDRESS = '0x4518231a8fdf6ac553b9bbd51bbb86825b583263'

export const UNI: { [chainId in ChainId]: Token } = {
  [ChainId.HARMONY]: new Token(ChainId.HARMONY, UNI_ADDRESS, 18, 'HARL', 'HarmonyLauncher'),
  [ChainId.HARMONY_TESTNET]: new Token(ChainId.HARMONY_TESTNET, UNI_ADDRESS, 18, 'UNI', 'Uniswap')
}

// TODO: specify merkle distributor for mainnet
export const MERKLE_DISTRIBUTOR_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.HARMONY]: '0x4087F566796b46eEB01A38174c06E2f9924eAea8'
}

const WETH_ONLY: ChainTokenList = {
  [ChainId.HARMONY_TESTNET]: [WETH[ChainId.HARMONY_TESTNET]],
  [ChainId.HARMONY]: [WETH[ChainId.HARMONY]]
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.HARMONY]: [...WETH_ONLY[ChainId.HARMONY],DAI,ETH, HARL]
}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {
  
}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.HARMONY]: [...WETH_ONLY[ChainId.HARMONY],DAI, HARL]
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: ChainTokenList = {
  ...WETH_ONLY,
  [ChainId.HARMONY]: [...WETH_ONLY[ChainId.HARMONY], DAI]
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token, Token][] } = {
  [ChainId.HARMONY]: [
    [HARL, DAI],
    [ETH, DAI]
  ]
}

export interface WalletInfo {
  connector?: AbstractConnector
  name: string
  iconName: string
  description: string
  href: string | null
  color: string
  primary?: true
  mobile?: true
  mobileOnly?: true
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  INJECTED: {
    connector: injected,
    name: 'Injected',
    iconName: 'arrow-right.svg',
    description: 'Injected web3 provider.',
    href: null,
    color: '#010101',
    primary: true
  },
  METAMASK: {
    connector: injected,
    name: 'MetaMask',
    iconName: 'metamask.png',
    description: 'Easy-to-use browser extension.',
    href: null,
    color: '#E8831D'
  },
  /**WALLET_CONNECT: {
    connector: walletconnect,
    name: 'WalletConnect',
    iconName: 'walletConnectIcon.svg',
    description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
    href: null,
    color: '#4196FC',
    mobile: true
  },
  WALLET_LINK: {
    connector: walletlink,
    name: 'Coinbase Wallet',
    iconName: 'coinbaseWalletIcon.svg',
    description: 'Use Coinbase Wallet app on mobile device',
    href: null,
    color: '#315CF5'
  },
  COINBASE_LINK: {
    name: 'Open in Coinbase Wallet',
    iconName: 'coinbaseWalletIcon.svg',
    description: 'Open in Coinbase Wallet app.',
    href: 'https://go.cb-w.com/mtUDhEZPy1',
    color: '#315CF5',
    mobile: true,
    mobileOnly: true
  },
  FORTMATIC: {
    connector: fortmatic,
    name: 'Fortmatic',
    iconName: 'fortmaticIcon.png',
    description: 'Login using Fortmatic hosted wallet',
    href: null,
    color: '#6748FF',
    mobile: true
  },
  Portis: {
    connector: portis,
    name: 'Portis',
    iconName: 'portisIcon.png',
    description: 'Login using Portis hosted wallet',
    href: null,
    color: '#4A6C9B',
    mobile: true
  }*/
}

export const NetworkContextName = 'NETWORK'

// default allowed slippage, in bips
export const INITIAL_ALLOWED_SLIPPAGE = 50
// 20 minutes, denominated in seconds
export const DEFAULT_DEADLINE_FROM_NOW = 60 * 20

export const BIG_INT_ZERO = JSBI.BigInt(0)

// one basis point
export const ONE_BIPS = new Percent(JSBI.BigInt(1), JSBI.BigInt(10000))
export const ONE_BIPS_FRACTION = new Fraction(JSBI.BigInt(1), JSBI.BigInt(10000));
export const BIPS_BASE = JSBI.BigInt(10000)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%

// used to ensure the user doesn't send so much ETH so they end up with <.01
export const MIN_ETH: JSBI = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(16)) // .01 ETH
export const BETTER_TRADE_LINK_THRESHOLD = new Percent(JSBI.BigInt(75), JSBI.BigInt(10000))

// the Harmony launcher Default token list lives here
export const DEFAULT_TOKEN_LIST_URL = 'https://unpkg.com/harmony-testnet-list@1.0.0/build/harmonydex-default.tokenlist.json'
