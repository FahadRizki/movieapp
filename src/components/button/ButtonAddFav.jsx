import 'boxicons'
import './buttonaddfav.css'
function ButtonAddFav(props) {
    const {handleAddFavorite, movie, isFavorite} = props
    return (
        <button onClick={() => handleAddFavorite(movie)} className="add-fav">
            <box-icon name='heart' color={isFavorite ? 'red' : 'white'}  ></box-icon> 
        </button>
    )
       
    
   

  
}

export default ButtonAddFav