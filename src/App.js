import React from 'react';
import './App.css';
import BoardContainer from './components/BoardContainer'

function App() {
  return (
    <div className="App">
      <BoardContainer boards={data}/>
    </div>
  );
}

let data = [
  {
    name: "Wishlist",
    jobs: [],
    id: 1
  },
  {
    name: "Applied",
    jobs: [],
    id: 2
  },
  {
    name: "Interview",
    jobs: [],
    id: 3
  },
  {
    name: "Offer",
    jobs: [],
    id: 4
  },
  {
    name: "Rejected",
    jobs: [],
    id: 5
  },
]

export default App;
