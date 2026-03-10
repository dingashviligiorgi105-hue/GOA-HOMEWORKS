import { useEffect, useState } from 'react'

function App() {
  const [input, setInput] = useState('')
  const [coins, setCoins] = useState([])

  useEffect(() => {
    if (input === '') {
      setCoins([])
      return
    }

    fetch(`https://api.coingecko.com/api/v3/search?query=${input}`)
      .then((res) => res.json())
      .then((data) => {
        setCoins(data.coins)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [input])

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-2xl font-bold text-center mb-4">Coin Search</h1>

        <input
          type="text"
          placeholder="Search coin..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full border border-gray-300 rounded-lg p-3 mb-4"
        />

        <div className="space-y-3">
          {coins.map((coin) => (
            <div
              key={coin.id}
              className="flex items-center gap-4 border rounded-lg p-3 bg-gray-50"
            >
              <img src={coin.thumb} alt={coin.name} className="w-10 h-10" />

              <div>
                <h2 className="font-bold">{coin.name}</h2>
                <p className="text-sm text-gray-600">
                  Price: {coin.market_cap_rank}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
