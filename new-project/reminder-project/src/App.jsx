import React, {useState} from 'react'
import './App.css'
import List from './List'
import data from './data'

function App() {
  const [people, setPeople] = useState(data)

  return (
      <main>
        <section className="container">
          <h3>{people.length}0 birthday</h3>
          <List people={people}/>
          <button onClick={() => setPeople([])}>Clear All</button>
        </section>
      </main>
  )
}

export default App
