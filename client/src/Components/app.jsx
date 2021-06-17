import React,  {useState, useEffect} from 'react'
import axios from 'axios'
//XML UI of client
const ClientComponent = (clientInfo) => {
    let {clientName, clientNumber} = clientInfo 
    return <div>
        <div>
        <h2>Client Name:</h2>
        <h3>{clientName}</h3>
        </div>
        <div>
        <h2>Client Order:</h2>
        <h3>{clientNumber}</h3>
        </div>
    </div>
}

//XML UI of order
const OrderComponent = ({orderName, orderQuantity, orderType}) => {
    return <div>
        Order Info:
        {orderQuantity} {orderName} {orderType}
    </div>
}

const App = () => {
    const [clientName, setClientName] = useState([])
    const [clientNumber, setClientNumber] = useState([])
    const [orderName, setOrderName] = useState([])
    const [orderQuantity, setOrderQuantity] = useState([])
    const [orderType, setOrderType] = useState([])
//useEffect on every occurrence of what? API call/response? How to seperate multiple incoming orders/calls?
    
    useEffect (() => {
        fetchData()
    }, [])
//Dummy API call/response
    const fetchData = () => {
        axios.get('http://localhost:3005/speechToText')
        .then(response => {
            // console.log(response.data)
            let {clientName, clientNumber, orderName, orderQuantity, orderType} = response.data[0]
            setClientName(clientName[0])
            setClientNumber(clientNumber[0])
            setOrderName(orderName[0])
            setOrderQuantity(orderQuantity[0])
            setOrderType(orderType[0])
        })
        .catch(error => {
            console.error(error)
        })
    }

    return (
        <div className="app">
            <div>
            <ClientComponent clientName={clientName} clientNumber={clientNumber}/>
            </div>
            <div>
            <OrderComponent orderName={orderName} orderType={orderType} orderQuantity={orderQuantity}/>
            </div>
        </div>
    )
}
export default App