import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';

const notifications = [
  {
    id: '1',
    icon: 'https://webcontent.apmsapi.com//WebContent/2/APMS/Articles/8659248-CompareAirportParking_638241577786714156_638461804446749310.png', // Thay thế bằng đường dẫn icon của bạn
    title: 'Confirm Booking',
    content: 'Seahouse has confirmed your booking LDG242537. Thank you for booking.',
    time: '2:00 PM',
  },
  {
    id: '2',
    icon: 'https://www.kablooe.com/wp-content/uploads/2019/08/check_mark.png',
    title: 'Payment Success',
    content: 'You have successfully paid the invoice. A confirmation notification will be sent to you shortly.',
    time: '1:45 PM',
  },
  {
    id: '3',
    icon: 'https://www.pngmart.com/files/23/Error-PNG.png',
    title: 'Payment Failed',
    content: 'Your account does not have enough balance to pay. Please double check before making payment.',
    time: '1:30 PM',
  },
  {
    id: '4',
    icon: 'https://png.pngtree.com/png-vector/20210602/ourmid/pngtree-hot-sale-message-icon-discount-offer-banner-green-png-image_3415214.jpg',
    title: 'Maintenance',
    content: 'Our system is under maintenance. Please make payment later.',
    time: '1:00 PM',
  },
  {
    id: '5',
    icon: 'https://www.pngmart.com/files/23/Error-PNG.png',
    title: 'Payment Failed',
    content: 'Your account does not have enough balance to pay. Please double check before making payment.',
    time: '12:00 PM',
  },
  {
    id: '6',
    icon: 'https://png.pngtree.com/png-vector/20210602/ourmid/pngtree-hot-sale-message-icon-discount-offer-banner-green-png-image_3415214.jpg',
    title: 'Let’s start',
    content: 'Everything is ready. Let’s start choosing your favorite apartment.',
    time: '10:00 PM',
  },
  {
    id: '7',
    icon: 'https://png.pngtree.com/png-vector/20240529/ourlarge/pngtree-the-logo-of-whatsapp-on-a-black-vector-png-image_6972252.png',
    title: 'Confirm Phone Number',
    content: 'Please confirm your phone number before booking',
    time: '9:45 AM',
  },
  {
    id: '8',
    icon: 'https://png.pngtree.com/png-vector/20240529/ourlarge/pngtree-the-logo-of-whatsapp-on-a-black-vector-png-image_6972252.png',
    title: 'Update Account',
    content: 'Your account has some information that hasn’t been filled in yet. Let’s finish.',
    time: '9:30 AM',
  },
  {
    id: '9',
    icon: 'https://png.pngtree.com/png-vector/20240529/ourlarge/pngtree-the-logo-of-whatsapp-on-a-black-vector-png-image_6972252.png',
    title: 'Welcome',
    content: 'Welcome to Ladago. Hope we will stick together for a long time.',
    time: '9:00 AM',
  },
];

const NotificationItem = ({ item }) => (
  <View style={styles.itemContainer}>
    <Image source={{uri: item.icon}} style={styles.icon} />
    <View style={styles.contentContainer}>
      <View style={styles.titleTimeContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>{item.time}</Text>
          <View style={styles.dot} />
        </View>
      </View>
      <Text style={styles.content}>{item.content}</Text>
    </View>
  </View>
);

const NotificationsScreen = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notification</Text>
      </View>
      <FlatList
        data={notifications}
        renderItem={({ item }) => <NotificationItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  icon: {
    width: 45,
    height: 45,
    marginRight: 15,
    resizeMode: 'contain',
  },
  contentContainer: {
    flex: 1,
  },
  titleTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 3
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  time: {
    fontSize: 14,
    color: '#757575',
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#757575',
    marginLeft: 5,
  },
  content: {
    fontSize: 14,
    color: '#757575',
  },
});

export default NotificationsScreen;