import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Start from './components/Start';
import Timer from './components/Timer';
import Trivia from './components/Trivia';
function App() {

  const [userName,setUserName] = useState(null)
  const [questionNumber, setQuestionNumber] = useState(1)
  const [stop, setStop] = useState(false)
  const [earned,setEarned] = useState("$ 0");
  const moneyPyramid = useMemo (()=>
    [
      {id:1,amount:"$ 100"},
      {id:2,amount:"$ 200"},
      {id:3,amount:"$ 300"},
      {id:4,amount:"$ 400"},
      {id:5,amount:"$ 500"},
      {id:6,amount:"$ 600"},
      {id:7,amount:"$ 700"},
      {id:8,amount:"$ 800"},
      {id:9,amount:"$ 900"},
      {id:10,amount:"$ 1000"},
      {id:11,amount:"$ 1110"},
      {id:12,amount:"$ 1210"},
      {id:13,amount:"$ 1310"},
      {id:14,amount:"$ 1110"},
      {id:15,amount:"$ 5012"}
    ].reverse()
  ,[]);

  const data=[
    {
      id:1,
      question: "What is my Name?",
      answers:[
      {
        text:"Sanjay",
        correct: true,
      },
      {
        text:"Honey Singh",
        correct: false,
      },
      {
        text:"Elon Musk",
        correct: false,
      },
      {
        text:"Narendra Modi",
        correct: false,
      },
      ]
    },
    {
      id:2,
      question: "What is my Last Name?",
      answers:[
      {
        text:"Kapoor",
        correct: true,
      },
      {
        text:"Rawat",
        correct: false,
      },
      {
        text:"Khan",
        correct: false,
      },
      {
        text:"Singhania",
        correct: false,
      },
      ]
    }
  ]
  useEffect(() => {
    questionNumber >1 && 
    setEarned(moneyPyramid.find(m=> m.id === questionNumber -1).amount);
  }, [moneyPyramid,questionNumber])
  return (
    <div className="App">
      {userName ? (<>
        <div className="main">
        {
          stop ?(<h1 className="endText">You Earned: {earned}</h1>) : 
          (<>
            <div className="top">
            <div className="timer">
              <Timer 
              setStop={setStop}
              questionNumber={questionNumber}
              />
            </div>
          </div>
          <div className="bottom">
            <Trivia data={data} setStop={setStop}
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}
            />
          </div>
            </>)
        }
        
      </div>
      <div className="pyramid">
        <ul className='monyList'>
        {
          moneyPyramid.map((m) => (
            <li className={questionNumber ===m.id ? 
              "moneyListItem active":"moneyListItem"}>
            <span className='moneyListItemNumber'>{m.id}</span>
            <span className='moneyListItemAmount'>{m.amount}</span>
          </li>
          ))
        }
        </ul>
        
          
          
          
      </div>
      </>) : 
      (<>
        <Start setUserName={setUserName}/>
      </>)}
      
    </div>
  );
}

export default App;
