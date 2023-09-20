import { useState, useEffect } from 'react'
import BgImg from './BgImg';
import { Text, FlatList } from 'react-native'
import Delivery from './Delivery';

export default function PendingPickups() {
    const [pickups, setPickups] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    useEffect(async () => {
        setIsLoading(true);
        const response = await axios.get('https:/localhost:3001/checkPickupStatus')
        const res = await response.json()
        setPickups(res.user)
        setIsLoading(false)
    }, [])
    return (
        <BgImg>
            <Text>PENDING DELIVERIES</Text>
            {isLoading && <Text>Loading...</Text>}
            {!isLoading && <FlatList data={pickups} renderItem={({ item, index }) => {
                <Delivery key={index} id={index} from={item.pickupFrom} to={item.deliverTo} />
            }} />
            }
        </BgImg>
    )
}