import { useState } from 'react';
import './App.css'


const App = () => {

  const [ team, setTeam ] = useState([])
  const [money, setMoney ] = useState(100)
  const [ zombieFighters, setZombieFighters ] =useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pics.craiyon.com/2023-09-17/53298603d70146ccb96fc531de605176.webp',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://cdna.artstation.com/p/assets/images/images/032/193/104/large/juan-martin-seigelschifer-scavenger4.jpg?1605729613',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://i.playboard.app/p/K1feYuWUzXYHLJdjyeqOx7Q8rYsJRCpqb-qln6t64MCU15cxth1s3QD032wRzzJEprbGxGzYhg/default.jpg',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://i.pinimg.com/736x/6c/ee/2c/6cee2ca66239c792a16bf1bad96ad68c.jpg',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://www.blockfort.com/wp-content/uploads/3114/4605/7487/TheEnd.jpg',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://www.blockfort.com/wp-content/uploads/2020/08/AlecEarnhardt.jpg',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://static.wikia.nocookie.net/fabb2c93-ee61-4f65-943c-9c9844c45d31',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://bloody-disgusting.com/wp-content/uploads/2023/01/dani.jpg',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://i.pinimg.com/736x/66/26/13/662613638e07c09971cadd379cdad7e9.jpg',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pics.craiyon.com/2024-04-16/zl1tGT9kT124f6127xQvtw.webp',
    },
  ]
  )
  const [message, setMessage] = useState('Build your team!')

  const handleAddFighter = (zombieFighter) => {
    if(!team.includes(zombieFighter)) {
      setMoney(money - zombieFighter.price)
      setTeam([...team, zombieFighter])
      console.log(team)
    }
    else if (money < zombieFighter.price) {
      setMessage('Not enough balance :(')
    } 
 }
    
  
  const renderedZombieFighters = zombieFighters.map((zombieFighter, index )=> {
    return <ul key={index}>
              <li> 
                <p>
                  <strong>{zombieFighter.name}</strong > <br />
                </p>
                <img src={zombieFighter.img} alt="" /><br />
                <p>
                  Price: ${zombieFighter.price}  <br />
                  Strength: {zombieFighter.strength}  <br />
                  Agility: {zombieFighter.agility}  <br />
                 </p>
                <button onClick={()=> {handleAddFighter(zombieFighter)}} >ADD</button>
              </li> 
            </ul>
  })

      
  const renderedTeam = team.map((teamMember, index) => {
    return  <ul key={index}>
        <li>
          <p><strong>{teamMember.name}</strong ></p>
          <img src={teamMember.img} alt="" />
        </li>
      </ul>
  })

  return (

    <>
      <h1>{ message}</h1>
      <h3>Balance: ${money}</h3>
      <div className="hero">
        <div className="market-container">
          <h2>Marketplace</h2>
          <div className="marketplace">
            {renderedZombieFighters}
          </div>
        </div>
        <div className='team-container'>
          <h2>Your Team</h2>
          <div className="your-team">
            {renderedTeam}
          </div>
        </div>
      </div>
    </>
    
  );
}

export default App

