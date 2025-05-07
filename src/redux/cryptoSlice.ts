import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CryptoAsset } from '../types'

interface CryptoState {
  assets: CryptoAsset[]
}

const initialState: CryptoState = {
  assets: [
    {
      id: 'btc',
      name: 'Bitcoin',
      symbol: 'BTC',
      price: 61000,
      change1h: 0.2,
      change24h: -1.5,
      change7d: 4.1,
      marketCap: 1180000000000,
      volume24h: 36000000000,
      circulatingSupply: 195000000,
      maxSupply: 21000000,
      logo: '/logos/bitcoin-btc-logo.png',
      chartImage: '/charts/upandup.jpg',
    },
    {
      id: 'eth',
      name: 'Ethereum',
      symbol: 'ETH',
      price: 3100,
      change1h: -0.3,
      change24h: 2.2,
      change7d: 6.3,
      marketCap: 372000000000,
      volume24h: 18000000000,
      circulatingSupply: 120000000,
      maxSupply: 42000000000,
      logo: '/logos/ethereum-eth-logo.png',
      chartImage: '/charts/upandup.jpg',
    },
    {
      id: 'usdt',
      name: 'Tether',
      symbol: 'USDT',
      price: 1.0,
      change1h: 0.0,
      change24h: 0.0,
      change7d: 0.0,
      marketCap: 95000000000,
      volume24h: 38000000000,
      circulatingSupply: 95000000000,
      maxSupply: 42000000000,
      logo: '/logos/tether-usdt-logo.png',
      chartImage: '/charts/upandup.jpg',
    },
    {
      id: 'bnb',
      name: 'BNB',
      symbol: 'BNB',
      price: 540,
      change1h: -0.1,
      change24h: -0.7,
      change7d: 2.1,
      marketCap: 89000000000,
      volume24h: 1200000000,
      circulatingSupply: 153000000,
      maxSupply: 200000000,
      logo: '/logos/bnb-bnb-logo.png',
      chartImage: '/charts/upandup.jpg',
    },
    {
      id: 'sol',
      name: 'Solana',
      symbol: 'SOL',
      price: 145,
      change1h: 0.5,
      change24h: 3.4,
      change7d: 8.0,
      marketCap: 68000000000,
      volume24h: 2700000000,
      circulatingSupply: 468000000,
      maxSupply: 42000000000,
      logo: '/logos/solana-sol-logo.png',
      chartImage: '/charts/upandup.jpg',
    },
    {
      id: 'xrp',
      name: 'XRP',
      symbol: 'XRP',
      price: 0.63,
      change1h: -0.2,
      change24h: 1.2,
      change7d: -0.5,
      marketCap: 34000000000,
      volume24h: 1100000000,
      circulatingSupply: 54000000000,
      maxSupply: 100000000000,
      logo: '/logos/xrp-xrp-logo.png',
      chartImage: '/charts/upandup.jpg',
    },
  ],
}

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    updateAssets(state, action: PayloadAction<CryptoAsset[]>) {
      state.assets = action.payload
    },
  },
})

export const { updateAssets } = cryptoSlice.actions
export default cryptoSlice.reducer
