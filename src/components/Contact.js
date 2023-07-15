import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom'

const Contact = () => {
    const {id} = useParams()
    return(
        <div> <h1>Contact page</h1><br/>


            <Link to= '/contact/:id'>Click here</Link>
        </div>
    )
}

export default Contact


