import React from 'react';
import { Button, StyleSheet, View, Image, Dimensions } from 'react-native';
import LogoPhoenix from '../assets/logo_phoenix/Phoenix-17.png'
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
        flexDirection: 'row-reverse',
        alignItems: 'center',
        justifyContent: "space-between",
        paddingTop: 10,
        paddingBottom: 15,
        paddingLeft: 10,
        paddingRight: 10
    },
    logo: {
        width: 48,
        height: 48
    }

})
export default Header;


