import 'boxicons';
import { useSelector } from 'react-redux';
function ButtonRemoveFav(props) {
    const {removeMovieFavorite, movie} = props
    return (
        <button  type="submit" onClick={() => removeMovieFavorite(movie) }>
           <box-icon name='heart' color='red' type='solid' ></box-icon>
        </button>
    )

}

export default ButtonRemoveFav