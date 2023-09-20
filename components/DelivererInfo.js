import { useState, useEffect } from 'react';
import { Pressable, Text, TextField } from 'react-native'
import axios from 'axios'

export default function DelivererInfo() {
    const [deliverer, setDeliverer] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    useEffect(async () => {
        setIsLoading(true);
        const response = await axios.get('https:/localhost:3001/checkPickupStatus')
        const res = await response.json()
        setDeliverer(res.user)
        setIsLoading(false)
    }, [])
    return (
        <BgImg>
            <Text>PARTNER DETAILS</Text>
            {isLoading && <Text>Loading...</Text>}
            {!isLoading && (
                <View>
                    <Info label="Name" details={deliverer.name} />
                    <Info label="Phone Number" details={deliverer.phno} />
                    <Info label="Email" details={deliverer.email} />
                    <Info label="Status" details={deliverer.status} />
                    <Pressable>
                        <Text>CONFIRM DELIVERY</Text>
                    </Pressable>
                </View>
            )
            }
        </BgImg>

    )
}