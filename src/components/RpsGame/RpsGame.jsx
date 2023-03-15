import React, {useState, useEffect} from 'react'

const RpsGame = () => {
    const [userChoice,setUserChoice] = useState('rock');
    const [botChoice,setBotChoice] = useState('rock');
    const [userPoints,setUserPoints] = useState(0);
    const [botPoints,setBotPoints] = useState(0);
    const [turnResult,setTurnResult] = useState(null);
    const [result,setResult] = useState('');
    const [gameOver,setGameOver] = useState(false);
    const [round,setRound] = useState(0);

    const choices = ['rock','paper','scissors'];

    const handleOnClick =(choice)=>{
        if(gameOver === false){
            setUserChoice(choice);
            generateBotChoice();
            setRound(round+1);
        }
    };

    const generateBotChoice= () =>{
        const randomChoice = choices[Math.floor(Math.random()* choices.length)];
        setBotChoice(randomChoice)
    }

    const reset =()=>{
        window.location.reload()
    }

    useEffect(()=>{
        const comboMoves = userChoice + botChoice
        if (userPoints <=4 && botPoints <=4){
            if(comboMoves === 'rockscissors' || comboMoves == 'paperrock' || comboMoves == 'scissorspaper'){
                const updatedUserPoints = userPoints+1
                setUserPoints(updatedUserPoints)
                setTurnResult('You got the point')
                if (updatedUserPoints === 5){
                    setGameOver(true)
                    setResult('You Win')
                }
            }else if(comboMoves === 'scissorsrock' || comboMoves == 'rockpaper' || comboMoves == 'rockscissors'){
                const updatedBotPoints = botPoints+1
                setBotPoints(updatedBotPoints)
                setTurnResult('Bot got the point')
                if (updatedBotPoints === 5){
                    setGameOver(true)
                    setResult('You Lose')
                }
            }else{
                setTurnResult('No one got a point')
            }
        }
    },[userChoice, botChoice])

  return (
    <div className='mt-10'>
        <h1 className='flex justify-center text-white text-3xl'>RPS GAME.</h1>
        <score className='flex justify-around mt-10'>
            <h1 className=' text-xl text-[#8db5ff]'>Your points : {userPoints}</h1>
            <h1></h1>
            <h1 className=' text-xl text-[#ff8d8d]'>Bot points : {botPoints}</h1>
        </score>
        <choice className="flex justify-around items-center mt-10">
            <user>
                <img src={process.env.PUBLIC_URL+`/images/${userChoice}.png`} alt=''/>
            </user>
            <di >
                <h1 className='text-[#ffffff] text-4xl'>VS</h1>
            </di>
            <bot>
                <img src={process.env.PUBLIC_URL+`/images/${botChoice}.png`} alt=''/>
            </bot>
        </choice>
        <div className='flex justify-center mt-10'>
            {choices.map((choice,index)=>{
                return (
                <button className='m-1 my-10 w-[150px] h-[40px] hover:bg-[#365f24] hover:border-[#172c0d] bg-[#172c0d] border border-[#365f24] rounded-md text-white text-2xl' key={index} onClick={()=> handleOnClick(choice)}>
                    {choice}
                </button>
                )
            })}
        </div>

        <result className='flex flex-col items-center'>
            <h1 className='text-white  text-2xl'>Round : {round}</h1>
            <h1 className='text-4xl text-[#768181] mt-6 '>{result}</h1>
        </result>
        <div className='flex justify-center'>
            {gameOver  &&
                <button className='hover:bg-[#365f24] flex justify-center text-2xl text-white items-center mt-10 bg-[#00300a] px-4 border rounded-lg h-[40px] mb-10 z-50' onClick={()=> reset()}> Restart Game</button>
            }
        </div>
    </div>
  )
}

export default RpsGame