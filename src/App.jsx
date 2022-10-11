import { useEffect, useState } from 'react';
import './App.css';
import Start from './components/Start';
import Timer from './components/Timer';
import Trivia from './components/Trivia';
import moneyPyramid  from './Data/pyramid';
import data from './Data/questions'
function App() {

  const [userName,setUserName] = useState(null)
  const [questionNumber, setQuestionNumber] = useState(1)
  const [stop, setStop] = useState(false)
  const [earned,setEarned] = useState("$ 0");
  

  
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
