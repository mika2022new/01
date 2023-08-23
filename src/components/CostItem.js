import './CostItem.css';
import CostDate from './CostDate.js';


function CostItem (props) {

    // const month = props.date.toLocaleString("ru-RU",
    // { month: "long" });

    // const year = props.date.getFullYear();
    
    // const day = props.date.toLocaleString('ru-RU',
    // { day: "2-digit" });

    
    return (
        console.log('1', props),
 
    <div className='cost-item'>

        {/* <div>{props.date.toISOString()}</div> */}

    <CostDate date={props.date}/>

    {/* <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
    </div> */}


        <div className='cost-item__description'>

            <h2>{props.description}</h2>

            <div className='cost-item__price'>${props.amount}</div>

        </div>

    </div> 
    );
}

export default CostItem;