import { ScrollView, Text, View } from 'react-native'
import { Card } from 'react-native-elements'
import { useSelector } from 'react-redux'
import { baseUrl} from '../shared/baseUrl'

const FeaturedItem = ({ item }) => {
    if (item) {
        return(
            <Card containerStyle={{ padding: 0}}>
                <Card.Image source={{ uri: baseUrl + item.image}}>
                    <View style = {{ justifyContent: 'center', flex: 1 }}></View>
                        <Text
                            style={{
                                color: 'white',
                                textAlign: 'center',
                                fontSize: 20
                            }}
                        >
                            {item.name}
                        </Text>
                </Card.Image>
                <Text style={{ margin: 20}}>{item.description}</Text>
            </Card>
        )
    }
    return <View />
}


const HomeScreen = () => {
    const campsites = useSelector((state) => state.campsites)
    const promotions = useSelector((state) => state.promotions)
    const partners = useSelector((state) => state.partners)

    const featCampsite = campsites.campsitesArray.find((item) => item.featured)
    const featPromotions = promotions.promotionsArray.find((item) => item.featured)
    const featPartners = partners.partnersArray.find((item) => item.featured)
    
 
    
    return(
        <ScrollView>
            <FeaturedItem item={featCampsite} />
            <FeaturedItem item={featPromotions} />
            <FeaturedItem item={featPartners} />
        </ScrollView>
    )
   
}

export default HomeScreen