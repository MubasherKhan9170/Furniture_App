import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import styles from "./productCardView.style";
import { Ionicons } from "@expo/vector-icons"; 
import { COLORS } from "../../constants";
import { useNavigation } from "@react-navigation/native";

export default function ProductCardView() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
      <View style={styles.container}>
        <View style={styles.imageContaier}>
            <Image
                source={{uri: "https://d3ls91xgksobn.cloudfront.net/651x434,fit/etuovimedia/images/property/import/300/673300/0e76b9541118d347871c0e0e51d244c4/69570ecde99b28b82390b180164ea5b9/ORIGINAL.jpeg"}}
                style={styles.image}
            />
        </View>

        <View style={styles.details}>
        <Text style={styles.title} numberOfLines={1}>Product</Text>
        <Text style={styles.supplier} numberOfLines={1}>Product</Text>
        <Text style={styles.price}>$2353</Text>
      </View>
      <TouchableOpacity style={styles.addBtn}>
        <Ionicons name="add-circle" size={35} color={COLORS.primary}/>
      </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
