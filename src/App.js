import React from 'react';
import './BoardStyles.css';
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
    jobs: [
      {
        company: "Google",
        position: "Intern",
        boardId: 1,
        id: 1
      },
      {
        company: "Microsoft",
        position: "Intern",
        boardId: 1,
        id: 2
      },
      {
        company: "Facebook",
        position: "Intern",
        boardId: 1,
        id: 3
      }
    ],
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
