import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    safeAreaView: {
        backgroundColor: 'white',
        height: '100%',
    },
    scrollView: {
        paddingBottom: 200,
    },
    viewContainer: {
        width: '100%',
        marginTop: 20,
        height: '100%',
        paddingHorizontal: 20,
    },

    closeIcon: {
        width: 28,
        height: 28,
        marginBottom: 16
    },

    addIcon: {
        width: 28,
        height: 28,
    },

    cameraIcon: {
        width: 28,
        height: 28,
    },

    titleStep: {
        fontSize: 16,
        fontFamily: 'Quicksand_500Medium',
        marginBottom: 4
    },

    titleInfo: {
        fontSize: 28,
        fontFamily: 'Quicksand_700Bold',
    },

    titleName: {
        fontSize: 20,
        fontFamily: 'Quicksand_600SemiBold',
        marginBottom: 10,
        color: '#365486'
    },

    horiItem: {
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between'
    },

    textItems: {
        fontFamily: "Quicksand_600SemiBold",
        fontSize: 20
    },

    checkedItem: {
        padding: 25,
        borderWidth: 1,
        borderRadius: 8,
        marginVertical: 10,
        width: 180,
        alignItems: 'center'
    },

    description: {
        fontSize: 14,
        fontFamily: "Quicksand_400Regular",
        lineHeight: 24,
    },

    container: {
        justifyContent: 'center',
        marginTop: 24
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'flex-start',
        gap: '4%',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 12,
        paddingVertical: 20,
        paddingHorizontal: 16,
        marginBottom: 26,
    },
    buttonText: {
        marginLeft: 8,
        fontSize: 16,
        color: '#333',
        fontWeight: '500',
    },
    imageGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    largeImageWrapper: {
        width: '100%',
        marginBottom: 16,
        position: 'relative',
    },
    largeImage: {
        width: '100%',
        height: 200,
        borderRadius: 8,
    },
    smallImageWrapper: {
        width: '48%',
        marginBottom: 16,
        position: 'relative',
    },
    smallImage: {
        width: '100%',
        height: 150,
        borderWidth: 1,
        borderRadius: 8,
    },
    removeButton: {
        position: 'absolute',
        top: 8,
        right: 8,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 12,
        width: 24,
        height: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    removeText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});