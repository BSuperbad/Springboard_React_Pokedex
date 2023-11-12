import Pokecard from "./Pokecard";
import "./Pokedex.css"


const Pokedex = ({pokemon}) => {
  return (
    <div className="Pokedex">
      <div className="Pokedex-cards">
        {pokemon.map(p=>(
          <Pokecard key={p.id} id={p.id} name={p.name} img={p.img} type={p.type} base_experience={p.base_experience} />
        ))}
      </div>
    </div>
  )
}
    

export default Pokedex;