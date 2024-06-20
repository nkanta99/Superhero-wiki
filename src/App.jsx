import {useState} from 'react'
import {allHeroes} from './HeroData';
import './App.css'

const App = () => {
  const [favourites, setFavourites] = useState([]);

  const handleAddToFaves = (hero) => {
    let newFaveArr = [...favourites];
    newFaveArr.push(hero);
    setFavourites(newFaveArr);
  };

  const handleRemove = (index) => {
    let newFaveArr = [...favourites];
    newFaveArr.splice(index, 1);
    setFavourites(newFaveArr);
  };
 

  return (

    <div>
      <h1>My Superhero Wiki</h1>

      <div>
        <h3>My Favourite Heroes</h3>
         {favourites.map((faveHero, index) => {
          return <Favourites key={index} favHeroData={faveHero} removeFave={() => handleRemove(index)}/>
        })}
      </div>

      <div>
        <h3>All Heroes</h3>
        {allHeroes.map((heroInfo, index) => {
          return <HeroCard key={index} heroObj={heroInfo} faveFunc={handleAddToFaves}/>
        })}
      </div>
    </div>
  )
};

const Favourites = ({favHeroData, removeFave}) => {
  return (
    <div>
        <p>{favHeroData.hero}</p>
        <button onClick={removeFave}>X</button>
    </div>
  )
}

const HeroCard = (props) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <p>HERO: {props.heroObj.hero}</p>

      {show && (
      <div>
        <p>INFO: {props.heroObj.info}</p>
        <p>VILLAIN: {props.heroObj.villain}</p>
      </div>
      )}
      <button onClick={() => setShow(!show)}>{show ? "HIDE INFO" : "SHOW INFO"}</button>
      <button onClick={() => props.faveFunc(props.heroObj)}>Add to Faves</button>
    </>
  )
}

export default App
