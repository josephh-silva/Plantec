import { Link } from "react-router-dom"

function Navigation(){
    return(
        <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/cad"}>Cadastro de vegetais </Link>
            <Link to={"/plantations"}>Plantações</Link>
        </nav>
    )
}
export default Navigation