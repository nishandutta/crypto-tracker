import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './redux/store'
import { updateAssets } from './redux/cryptoSlice'
import { simulateAssetUpdate } from './utils/simulateUpdates'
import TableRow from './components/tableRow'

function App() {
  const dispatch = useDispatch()
  const assets = useSelector((state: RootState) => state.crypto.assets)

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedAssets = assets.map(simulateAssetUpdate)
      dispatch(updateAssets(updatedAssets))
    }, 1500)

    return () => clearInterval(interval)
  }, [assets, dispatch])

  return (
    <div className='p-4 overflow-x-auto'>
      <h1 className='text-2xl font-bold mb-4 text-center'>
        🚀💰 Crypto Price Tracker
      </h1>
      <table className='min-w-[1000px] w-full table-auto border-collapse'>
        <thead className='bg-gray-100 dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-300'>
          <tr>
            <th className='py-2 px-4 text-left text-xs'>#</th>
            <th className='py-2 px-4 text-left text-xs'>Name</th>
            <th className='py-2 px-4 text-right text-xs'>Price</th>
            <th className='py-2 px-4 text-right text-xs'>1h %</th>
            <th className='py-2 px-4 text-right text-xs'>24h %</th>
            <th className='py-2 px-4 text-right text-xs'>7d %</th>
            <th className='py-2 px-4 text-right text-xs items-center'>
              Market Cap ⓘ
            </th>
            <th className='py-2 px-4 text-right text-xs items-center'>
              24h Volume ⓘ
            </th>
            <th className='py-2 px-4 text-right text-xs items-center'>
              Circulating Supply ⓘ
            </th>
            <th className='py-2 px-4 text-right text-xs'>Last 7 days</th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, i) => (
            <TableRow key={asset.id} asset={asset} index={i + 1} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
