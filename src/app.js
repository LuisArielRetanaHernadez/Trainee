/* eslint-disable react/react-in-jsx-scope */

import { useEffect, useState } from 'react'

// dotenv
import * as dotenv from 'dotenv'

dotenv.config()

export default function App () {
  const [fact, setFact] = useState(' ')

  const CAT_RANDOM_FACT = 'https://catfact.ninja/fact'

  useEffect(() => {
    fetch(CAT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => setFact(data.fact))
  }, [])

  useEffect(() => {

  }, [fact])

  return (
    <div>
      <h1>App</h1>
     { fact && <p>{fact}</p> }
    </div>
  )
}
