import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    safeAreaView: {
        backgroundColor: 'white',
        height: '100%',
    },
    scrollView: {

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
        backgroundColor: 'white',
        padding:20,
        borderRadius: 10,
        marginVertical: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 2,
        height: 300,
        justifyContent: 'center',
        alignContent: 'center'
    },
    image: {
        width: 150,
        height: 150,
        alignSelf:'center',
        marginBottom: 20
    },
});