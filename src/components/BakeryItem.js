import '../App.css';
import { Button } from '@mui/material'

// TODO: create a component that displays a single bakery item
const BakeryItem = (props) => {
    const { 
        newBakeryItem,
        onButtonClick
    } = props;

    const addItem = () => {
        onButtonClick(newBakeryItem);
    }

    return (
        <div className='BakeryItem'>
            <img src={newBakeryItem.image} alt={newBakeryItem.description}></img>
            <p>{newBakeryItem.name}</p>
            <p>{newBakeryItem.price}</p>
            <Button onClick={ addItem } variant="outlined">Add Item to Cart</Button>
        </div>
    )
}

export default BakeryItem;