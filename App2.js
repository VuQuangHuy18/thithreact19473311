import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'


const DATA = [
    {

        title: 'All',
    },
    {

        title: 'Roadbike',
    },
    {

        title: 'Moutain',
    },
    {

        title: 'Roadbike',
    },
    {

        title: 'Moutain',
    },
];
const Item = ({ title }) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
);




const App2 = () => {
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <View style={{ flexDirection: 'row' }}>
                    <Text > The world's</Text>
                    <Text style={{ fontWeight: "bold", color: "orange" }}> Best Bike</Text>
                </View>
                <Text style={{ fontWeight: "bold", margin: 20 }}>Catogory</Text>

            </View>

            <FlatList style={{ flex: 1 }}
                horizontal={true}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <View style={styles.body}>

                <View style={{ flexDirection: 'row' }}>

                    <View style={{flex:1}}>
                        <Image style={styles.img} source={require('./assets/xadaphome.png')} />
                        <Text>Pinarell Bike</Text>
                        <Text style={{ fontWeight: 'bold' }}>$ 1,800.00</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Image style={styles.img} source={require('./assets/xadaphome.png')} />
                        <Text>Route Bike</Text>
                        <Text style={{ fontWeight: 'bold' }}>$ 1,700.00</Text>
                    </View>

                </View>

                <View style={{ flexDirection: 'row' }}>

                    <View style={{flex:1}}>
                        <Image style={styles.img} source={require('./assets/xadaphome.png')} />
                        <Text>Pinarell Bike</Text>
                        <Text style={{ fontWeight: 'bold' }}>$ 1,800.00</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Image style={styles.img} source={require('./assets/xadaphome.png')} />
                        <Text>Pinarell Bike</Text>
                        <Text style={{ fontWeight: 'bold' }}>$ 1,800.00</Text>
                    </View>

                </View>


            </View>

        </View>
    )
}

export default App2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"

    },
    header: {
        flex: 1,
    },
    item: {

        backgroundColor: "gray",
        marginVertical: 8,
        marginHorizontal: 16,
        height: 20,
        borderRadius: 3,

    },
    title: {
        fontSize: 15,
    },
    body: {
        flex: 6,


    },
    img: {
        width: "70%",
        height: "50%"
    },

})