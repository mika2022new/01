
function CostDate (props) {

    const month = props.date.toLocaleString("ru-RU",
    { month: "long" });

    const year = props.date.getFullYear();
    
    const day = props.date.toLocaleString('ru-RU',
    { day: "2-digit" });

    
    return (

        console.log('2', props),

    <div>

            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
    </div>
    
    );
}

export default CostDate;