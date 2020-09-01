import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
Icon.loadFont()

const Post = (props) => {

    const renderImage = (url) => {
        if (url) {
            // TODO: configurar componente de imagem
        } else {
            return (
                <React.Fragment>
                    <Icon
                        name='file-image-o'
                        size={38}
                        color='grey'
                    ></Icon>
                    <Text style={{color:'grey'}}>Image Missing</Text>
                </React.Fragment>
            )
        }
    }

    return (

        <View style={styles.container}>
            <View style={styles.headerArea}>
                <View style={styles.avatar}></View>
                <View style={styles.avatarDescribe}>
                    <Text>{props.autor}</Text>
                    <Text style={{ color: 'grey' }}>{new Date(Date.parse(props.dataPublicacao)).toLocaleDateString('pt-BR')}</Text>
                </View>
            </View>

            <View style={styles.descriptionArea}>
                <Text>{props.descricao}</Text>
            </View>

            <View style={styles.imageArea}>
                {renderImage(props.urlImage)}
            </View>

            <View style={styles.footer}>

            </View>
        </View>
    );
}
const sizes = Dimensions.get('screen')
const styles = StyleSheet.create({
    container: {
        width: sizes.width - 50,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ccc',
        height: 310


    },
    headerArea: {
        padding: 10,
        flexDirection: 'row',
        height: 50,
    },
    descriptionArea: {
        paddingLeft: 10
    },
    imageArea: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: 200,
        alignItems: "center",
        justifyContent: 'center',
    },
    avatar: {
        width: 36,
        height: 36,
        backgroundColor: '#000',
        borderRadius: 36,
        marginRight: 10,
    },
    footer: {
        padding: 10,
        height: 40,
    }

})
export default Post;