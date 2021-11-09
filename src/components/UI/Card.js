import './Card.css'

//reusable wrapper
const Card = (props) =>{
    //takes in other class names beside default card class name
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>
    //children is reserved, 
}

export default Card