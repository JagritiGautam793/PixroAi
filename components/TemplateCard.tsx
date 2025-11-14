import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";

interface TemplateCardProps {
  item: {
    id: string;
    image: string;
    category: string;
    isSelected: boolean;
  };
  onPress: () => void;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ item, onPress }) => {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <View style={styles.imgContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        {item.isSelected && (
          <View style={styles.checkContainer}>
            <Ionicons
              name="checkmark-circle"
              size={30}
              color="#00FF7F"
              style={styles.checkIcon}
            />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default TemplateCard;

const styles = StyleSheet.create({
  cardContainer: {
    width: 110,
    marginBottom: 18,
    marginRight: 4,
  },
  imgContainer: {
    width: 105,
    height: 105,
    position: "relative",
    gap: 5,
  },
  image: {
    width: "100%",
    height: 105,
    borderRadius: 10,
  },
  checkContainer: {
    position: "absolute",
    top: 1,
    right: -2,
    width: 30,
    height: 30,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
  },
  checkIcon: {
    position: "absolute",
    top: 5,
    right: 5,
  },
});
