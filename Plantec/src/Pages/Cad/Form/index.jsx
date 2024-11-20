
import "./index.css"
import { useState, useEffect, useRef } from "react"
import api from "../../../services/index"
import Plantation from "../../../assets/plantation.jpg"
import Tree from "../../../assets/tree.png"

import ListPlants from "../ListPlants"
function Form (){
  const [plants, setPlants] = useState([]);
  const inputNamePlant = useRef();
  const typePlant = useRef(); // Removido o null
  const description = useRef();

  // Função para obter plantas da API
  async function getPlants() {
      const plantsApi = await api.get("/api/plants");
      setPlants(plantsApi.data);
      console.log(plants);
  }

  // Função para criar uma nova planta
  async function createPlant(ev) {
      ev.preventDefault();

      await api.post("/api/newPlant", {
          namePlant: inputNamePlant.current.value,
          typeOfPlant: typePlant.current.value,
          descriptionOfPlant: description.current.value,
      });

      // Limpa os campos após a operação
      inputNamePlant.current.value = '';
      typePlant.current.value = '';
      description.current.value = '';

      await getPlants(); // Atualiza a lista de plantas
  }

  // Função para deletar uma planta
  async function deletePlant(id) {
      await api.delete(`/api/deletePlant/${id}`);
      getPlants();
  }

  // Atualiza a lista de plantas ao montar o componente
  useEffect(() => {
      getPlants();
  }, []);
  
    return(
        <div className="containerForm container-fluid">
          <div className='row container-one'>
            <div className="col-4 container-one">
            <div className=" header">
                <img src={Tree} alt="tree" />
                <div className="bar"></div>
                <span>Cadastro</span>
              </div>
              <div className="description">
              <h1>Plantec</h1>
              <p>
                Um novo jeito de cuidar das suas <br />
                plantações
              </p>
              </div>
            </div>
            <div className="col-4 img-div">
              <img src={Plantation} alt="" />
            </div>
            <form className=' col-4 form-container' onSubmit={createPlant}> 
              <h2>Cadastro de vegetais</h2>
              <div className="divs">
                <label htmlFor="namePlant">Nome da especie</label>
                <input type="text" name="namePlant" id="namePlant" ref={inputNamePlant} />
              </div>
              <div className="divs">
                <label htmlFor="typePlant">Tipo de planta</label>
                <input type="text" name="typePlant" id="typePlant" ref={typePlant} />
              </div>
              <div className="divs">
                <label htmlFor="description">Descrição</label>
                <textarea name="description" id="description" placeholder="Deixe aqui a sua descrição" ref={description}></textarea>
              </div>
              <button type="submit" >Enviar</button> 
            </form>
          </div>
           <ListPlants deletePlant={deletePlant} plants={plants}/>
        </div>
    )
}
export default Form