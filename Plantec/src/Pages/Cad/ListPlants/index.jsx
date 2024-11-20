import GreenHouse from '../../../assets/greenhouse.jpg'
import './index.css'
function ListPlants({plants, deletePlant}){
    return(
        <div className="plantsList container-fluid">
          {plants.map((plant) => (
            <div key={plant.id} className='informations'>
              <div className="img">
                <img src={GreenHouse} alt="estufa" />
              </div>
              <div className="texts">
              <h2>{plant.namePlant}</h2>
              <div>
                <p>Tipo de planta: {plant.typeOfPlant}</p>
                <p>Descrição: {plant.descriptionOfPlant}</p>
              </div>
              <button onClick={() => deletePlant(plant.id)}>Deletar</button>
              </div>
            </div>
          ))}
        </div>
    )
}

export default ListPlants