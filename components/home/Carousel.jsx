import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from "../../constants";

const Carousel = () => {
  const slides = [
    "https://d3ls91xgksobn.cloudfront.net/651x434,fit/etuovimedia/images/property/import/300/673300/0e76b9541118d347871c0e0e51d244c4/69570ecde99b28b82390b180164ea5b9/ORIGINAL.jpeg",
    "https://d3ls91xgksobn.cloudfront.net/651x434,fit/etuovimedia/images/property/import/300/673300/0e76b9541118d347871c0e0e51d244c4/69570ecde99b28b82390b180164ea5b9/ORIGINAL.jpeg",
    "https://d3ls91xgksobn.cloudfront.net/651x434,fit/etuovimedia/images/property/import/300/673300/0e76b9541118d347871c0e0e51d244c4/69570ecde99b28b82390b180164ea5b9/ORIGINAL.jpeg",
  ];
  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{
          borderRadius: 15,
          width: "95%",
          marginTop: 15,
        }}
        autoplay
        circleLoop
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: "center",
  },
});
