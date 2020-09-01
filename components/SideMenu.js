import React from 'react';
import { ScrollView, View, Text, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { TouchableOpacity } from 'react-native-gesture-handler';
Icon.loadFont();



const SideMenu = ({ navigation, drawerNavigation }) => {

    const NavLink = ({ name, size, text, onPress }) =>
        <TouchableOpacity onPress={() => onPress()}>
            <View
                style={styles.navLink}>
                <View style={styles.iconArea}>
                    <Icon
                        name={name}
                        size={size}
                        color={'grey'}
                    />

                </View>
                <View style={styles.textArea}>
                    <Text style={styles.navLinkText}>{text}</Text>
                </View>
            </View >
        </TouchableOpacity >

    return (
        <View style={styles.container}>
            <View style={styles.panel}>
                <View style={styles.avatar}></View>
                <Text style={styles.email}>meuEmail@mock.com</Text>
            </View>
            <ScrollView>
                <NavLink
                    name={'user-plus'}
                    size={36}
                    text="Convidar Amigos"
                    onPress={() => console.warn('em desenvolvimento')}
                />
                <NavLink
                    name={'paper-plane'}
                    size={34}
                    text="Feed"
                    onPress={() => console.warn('em desenvolvimento')}
                />
                <NavLink
                    name={'star'}
                    size={36}
                    text="Conquistas"
                    onPress={() => console.warn('em desenvolvimento')}
                />
                <NavLink
                    name={'user'}
                    size={38}
                    text="Perfil"
                    onPress={() => console.warn('em desenvolvimento')}
                />
                <NavLink
                    name={'sign-out'}
                    size={36}
                    text="Logout"
                    onPress={() => navigation.navigate('Login')}
                />
                {/* <Text onPress={() => navigation.navigate('Login')}>Logout</Text> */}
            </ScrollView>
        </View>
    );
}

const sizes = Dimensions.get('screen');
const styles = StyleSheet.create({
    container: {
        height: sizes.height,
        flex: 1
    },
    panel: {
        borderColor: '#fff',
        borderTopWidth: 20,
        borderTopColor: '#525252',
        height: 150,
        backgroundColor: "#666",
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    avatar: {
        width: 74,
        height: 74,
        backgroundColor: "#000",
        marginLeft: 25,
        borderRadius: 64
    },
    email: {
        marginLeft: 25,
        marginTop: 15
    },
    navLink: {
        height: 60,
        alignItems: "center",
        justifyContent: 'space-between',

        paddingRight: 20,
        flexDirection: "row"
    },
    navLinkText: {

    },
    iconArea: {

        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    textArea: {

        flex: 2
    }
})

export default SideMenu;