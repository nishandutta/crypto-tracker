import { CryptoAsset } from '../types'

export function simulateAssetUpdate(asset: CryptoAsset): CryptoAsset {
  const randomDelta = () => Math.random() * 2 - 1 // -1% to +1%
  const updatedPrice = +(asset.price * (1 + randomDelta() / 100)).toFixed(2)
  const updatedChange1h = +(asset.change1h + randomDelta()).toFixed(2)
  const updatedChange24h = +(asset.change24h + randomDelta()).toFixed(2)
  const updatedChange7d = +(asset.change7d + randomDelta()).toFixed(2)
  const updatedVolume24h = +(
    asset.volume24h *
    (1 + randomDelta() / 100)
  ).toFixed(0)

  return {
    ...asset,
    price: updatedPrice,
    change1h: updatedChange1h,
    change24h: updatedChange24h,
    change7d: updatedChange7d,
    volume24h: updatedVolume24h,
  }
}
