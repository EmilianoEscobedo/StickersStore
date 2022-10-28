import { useContext, useState } from 'react'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import Contexts from '../context/Contexts'
export default function PayPalBtn() {
    const [paidFor, setPaidFor] = useState(false)
    const [error, setError] = useState(null);
    const { total } = useContext(Contexts)
    
    const handleApprove = (orderID) => {
        setPaidFor(true)
    }

    if(paidFor){
        alert('Gracias wachi!')
    }
    if(error){
        alert(error);
    }

    return (
        <PayPalScriptProvider>
            <PayPalButtons
                onClick = {(data,actions)=>{
                    return actions.resolve();
                }}
                createOrder = {(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: total,
                                },
                            },
                        ],
                    });
                }}
                onApprove = { async (data, action) => {
                    const order = await action.order.capture();
                    console.log('order', order);

                    handleApprove(data.orderID); 
                }}
                onCancel={() => {

                }}
                onError={(err) => {
                    setError(err);
                    console.log('PayPal checkout onError ', err)
                }}
            />
        </PayPalScriptProvider>
    )
    }

