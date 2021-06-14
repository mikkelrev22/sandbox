import React,  {useState, useEffect} from 'react'

//XML UI of client
const ClientComponent = ({clientInfo}) => {
    return <div>
        this is the client:
        {clientInfo}
    </div>
}

//XML UI of order
const OrderComponent = ({orderInfo}) => {
    return <div>
        this is the order:
        {orderInfo}
    </div>
}

const App = () => {
    const [clientInfo, setClientInfo] = useState([])
    const [orderInfo, setOrderInfo] = useState([])

//useEffect on every occurrence of what? API call/response? How to seperate multiple incoming orders/calls?
    
    // setInterval(()=>{fetchData(), 10000})
//Dummy API call/response
    const fetchData = () => {
        fetch('localhost:3005')
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.error(error)
        })
    }

    return (
        <div className="app">
            <div>
            <ClientComponent clientInfo={clientInfo}/>
            </div>
            <div>
            <OrderComponent orderInfo={orderInfo}/>
            </div>
        </div>
    )
}
export default App