import axios from 'axios'
import { useEffect } from 'react';
import BgImg from './BgImg';
import { Text, FlatList } from 'react-native';
import Delivery from './Delivery';

export default function AvailableDeliveries() {
    const [deliveries, setDeliveries] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(async () => {
        setIsLoading(true);
        const response = await axios.get('https://localhost:3001/availablePickups')
        const res = await response.json()
        setDeliveries(res)
        setIsLoading(false);
    }, [])
    return (
        <BgImg>
            <Text>AVAILABLE DELIVERIES</Text>
            {isLoading && <Text>Loading...</Text>}
            {!isLoading && <FlatList data={deliveries} renderItem={({ item, index }) => (
                <Delivery key={index} id={index} from={item.pickupFrom} to={item.deliverTo} />
            )} />}
        </BgImg>
    );
}