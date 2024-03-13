import {useEffect , useState} from "react"
import Card from "../components/Card"

function Produts() {

    const [produts , setProducts] = useState([]);
    

    useEffect(() => {
        fetch("https://strapi-store-server.onrender.com/api/products")
        .then(res => res.json())
        .then(data => {
            setProducts(data.data)
        })
        .catch(err => {
            console.log(err);
        })
    })

  return (
    <div className="container mt-3 d-flex flex-wrap justify-content-center gap-3">

        {
            produts.map ((product, index ) => {
                return(
                    <Card key={index} product = {product}></Card>
                )
            })
        }
    </div>
  )
}

export default Produts