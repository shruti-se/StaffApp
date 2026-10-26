import './Cardlist.css'
function Card(props)
{

  return(
    <div className="column">

    <img src ={props.image} alt = 'person' width={150} height={200}/>
    <h3>{props.name}</h3>
    <p>{props.position}</p>


    </div>

  )

}
export default Card;