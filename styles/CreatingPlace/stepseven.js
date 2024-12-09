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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 400,
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    price: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#000',
    },
    priceInput: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#000',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        minWidth: 100,
        textAlign: 'center',
    },
    editButton: {
        marginLeft: 10,
    },
    subText: {
        fontSize: 16,
        color: '#7d7d7d',
        marginTop: 10,
    },
    subPrice: {
        fontWeight: 'bold',
        color: '#000',
    },

    containerNotifi: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 10,
        paddingVertical: 20,
        shadowColor: '#000',
        width: '100%',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 3,
    },
    icon: {
        marginRight: 10,
    },
    text: {
        fontSize: 14,
        fontWeight: '400',
        width: '90%',
        color: '#000',
    },
    priceNotifi: {
        fontWeight: '600',
    },
});