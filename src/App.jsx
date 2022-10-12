import { useEffect, useState ,useMemo} from 'react';
import './App.css';
import Start from './components/Start';
import Timer from './components/Timer';
import Trivia from './components/Trivia';
import data from './Data/questions'
function App() {

  const [userName,setUserName] = useState(null)
  const [questionNumber, setQuestionNumber] = useState(1)
  const [stop, setStop] = useState(false)
  const [earned,setEarned] = useState("$ 0");
  
  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1,000" },
        { id: 6, amount: "$ 2,000" },
        { id: 7, amount: "$ 4,000" },
        { id: 8, amount: "$ 8,000" },
        { id: 9, amount: "$ 16,000" },
        { id: 10, amount: "$ 32,000" },
        { id: 11, amount: "$ 64,000" },
        { id: 12, amount: "$ 125,000" },
        { id: 13, amount: "$ 250,000" },
        { id: 14, amount: "$ 500,000" },
        { id: 15, amount: "$ 1,000,000" },
      ].reverse(),
    []
  );
  
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
