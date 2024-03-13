import {useNavigate} from "react-router-dom"
import "./index.css"

function Card(props) {
    const {title,price , image } = props.product.attributes;
    const {id} = props.product
    const navigate = useNavigate()

    function handleRedirect() {
        navigate(`about/${id}`)
    }

    return (
        <div>
            <div onClick={handleRedirect} className="card" style={{width:"22rem", padding:"10px"}} >
                <img height={200} src={image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h3 className="card-title text-center ">{title}</h3>
                        <h6 className="card-text text-center">${price}</h6>
                    </div>
            </div>
        </div>
    )
}

export default Card