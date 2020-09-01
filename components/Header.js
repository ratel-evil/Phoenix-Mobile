import React from 'react';
import { Button, StyleSheet, View, Image, Dimensions } from 'react-native';
import LogoPhoenix from '../assets/logo_phoenix/Phoenix-04.png'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native-gesture-handler';
Icon.loadFont();
const Header = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={LogoPhoenix} style={styles.logo} />
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Icon
                    name="dehaze"
                    size={48}
                    color="grey"

                />
            </TouchableOpacity>
        </View>
    );
}

const sizes = Dimensions.get('screen');
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 30,
        paddingRight: 30
    },
    logo: {
        width: 60,
        height: 80
    }

})
export default Header;


