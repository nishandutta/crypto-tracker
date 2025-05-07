import { LineChart, Line, ResponsiveContainer } from 'recharts'
import { useMemo } from 'react'

type ChartValue = {
  staticVal: number
}

const getMaxDigit = (num: number) => {
  return Math.max(...num.toString().split('').map(Number))
}

const generateRandomData = (points: number) =>
  Array.from({ length: points }, () => ({
    value: parseFloat((Math.random() * 9 + 1).toFixed(2)),
  }))

export default function SparklineChart({ staticVal }: ChartValue) {
  const sparklineData = useMemo(() => {
    const points = getMaxDigit(staticVal)
    return generateRandomData(points)
  }, [staticVal])

  return (
    <div style={{ width: 160, height: 80 }}>
      <ResponsiveContainer>
        <LineChart data={sparklineData}>
          <Line
            type='monotone'
            dataKey='value'
            stroke='#4ade80'
            strokeWidth={3}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
