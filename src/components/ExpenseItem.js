import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExportItem (props){
    const month = props.date.toLocaleString('en-US',{month:'long'})
    const day = props.date.toLocaleString('en-US',{day:'2-digit'})
    const year = props.date.getFullYear() 
    return (
        <div className="expense-item">
           <ExpenseDate month={month} day={day} year={year}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </div>
    )
}

export default ExportItem;