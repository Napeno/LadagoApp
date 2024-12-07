import { StyleSheet, Text, View } from "react-native";
import React from "react";

const IntroductionScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Nhà mình ở gần sông Thu Bồn. Chỉ mất 5' để đi bộ đến Phố cổ Hội An.
        Khách sẽ được sử dụng toàn bộ ngôi nhà khi thuê, nhà rộng 100m2 bao gồm
        1 phòng ngủ, bể sục matxa ngoài trời. Nhà mình thiết kế theo phong cách
        Nhật Bản nên không gian cũng tối giản, không cầu kỳ nhưng đủ rộng rãi
        thoải mái cho cặp đôi. Vì là nhà gỗ nên cách âm sẽ không như nhà bê tông
        hiện đại, đôi khi bạn sẽ nghe tiếng ồn từ khu vực xung quanh như là
        tiếng chó sủa :D. Hi vọng đây sẽ là trải nghiệm vui khi bạn ở Zen House.
      </Text>
      <Text style={styles.text}>
        Tiện nghi khách có quyền sử dụng Bể sục matxa ngoài trời là điểm nhấn
        của Zen House. Sau khi dạo quanh phố cổ Hội An, bạn có thể trở về nhà và
        tận hưởng khi ở trong bồn sục ngoài trời.
      </Text>
      <Text style={styles.text}>
        Những điều cần lưu ý khác: Nhà chúng tôi gần phố cổ Hội An, chỉ 5 phút
        đi bộ. CAMERA AN NINH: Vì sự an toàn và an ninh của bạn, camera an ninh
        được lắp đặt tại các không gian chung như cổng chính, hàng rào xung
        quanh hồ bơi và cửa sau. Họ sẽ ghi hình 24/7. Quyền riêng tư của bạn
        được tôn trọng.
      </Text>
    </View>
  );
};

export default IntroductionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
    color: "#333",
  },
});
