import { CryptoAsset } from '../types'
import BitcoinChart from './bitcoinChart'

interface Props {
  asset: CryptoAsset
  index: number
}

export default function TableRow({ asset, index }: Props) {
  const percentColor = (value: number) =>
    value > 0 ? 'text-green-600' : value < 0 ? 'text-red-600' : 'text-gray-600'

  const formatNumber = (num: number) =>
    Intl.NumberFormat('en-US', { notation: 'compact' }).format(num)

  return (
    <tr className='text-sm border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 items-center'>
      <td className='py-2 px-4'>{index}</td>
      <td className='py-2 px-4'>
        <div className='flex gap-2 items-center'>
          <img src={asset.logo} alt={asset.name} className='w-5 h-5' />
          <div className='font-semibold'>
            {asset.name}
            <span className='text-xs text-gray-500 pl-2'>{asset.symbol}</span>
          </div>
        </div>
      </td>

      <td className='py-2 px-4 text-right'>${asset.price.toLocaleString()}</td>

      <td className={`py-2 px-4 text-right ${percentColor(asset.change1h)}`}>
        <span className='text-xs items-center'>
          {asset.change1h > 0 ? '▲' : '▼'}
        </span>{' '}
        {asset.change1h.toString()[0] === '-'
          ? asset.change1h.toFixed(2).toString().slice(1)
          : asset.change1h.toFixed(2)}
        %{/* {asset.change1h.toFixed(2)}% */}
      </td>

      <td className={`py-2 px-4 text-right ${percentColor(asset.change24h)}`}>
        <span className='text-xs items-center'>
          {asset.change24h > 0 ? '▲' : '▼'}
        </span>{' '}
        {asset.change24h.toString()[0] === '-'
          ? asset.change24h.toFixed(2).toString().slice(1)
          : asset.change24h.toFixed(2)}
        {/* {asset.change24h.toFixed(2)}% */}
      </td>

      <td className={`py-2 px-4 text-right ${percentColor(asset.change7d)}`}>
        <span className='text-xs items-center'>
          {asset.change7d > 0 ? '▲' : '▼'}
        </span>{' '}
        {asset.change7d.toString()[0] === '-'
          ? asset.change7d.toFixed(2).toString().slice(1)
          : asset.change7d.toFixed(2)}
        {/* {asset.change7d.toFixed(2)}% */}
      </td>

      <td className='py-2 px-4 text-right'>
        ${asset.marketCap.toLocaleString()}
      </td>

      <td className='py-2 px-4 text-right'>
        ${asset.volume24h.toLocaleString()}
      </td>

      <td className='py-2 px-4 text-right'>
        {formatNumber(asset.circulatingSupply)} {asset.symbol}
      </td>

      <td className='py-2 px-4 justify-items-end'>
        <BitcoinChart staticVal={asset.circulatingSupply} />
      </td>
    </tr>
  )
}
