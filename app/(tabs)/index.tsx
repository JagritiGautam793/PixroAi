import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import TemplateCard from "../../components/TemplateCard";

const TEMPLATE_DATA = [
  {
    id: "1",
    image: "https://picsum.photos/200",
    category: "Photography",
    isSelected: false,
  },
  {
    id: "2",
    image: "https://picsum.photos/200/300?random=2",
    category: "Photography",
    isSelected: false,
  },
  {
    id: "3",
    image: "https://picsum.photos/200?random=3",
    category: "Photography",
    isSelected: false,
  },
  {
    id: "4",
    image: "https://picsum.photos/200?random=4",
    category: "Photography",
    isSelected: false,
  },
  {
    id: "5",
    image: "https://picsum.photos/200?random=5",
    category: "Photography",
    isSelected: false,
  },
  {
    id: "6",
    image: "https://picsum.photos/200?random=6",
    category: "Photography",
    isSelected: false,
  },
  {
    id: "7",
    image: "https://picsum.photos/200?random=7",
    category: "Photography",
    isSelected: false,
  },
  {
    id: "8",
    image: "https://picsum.photos/200/300?random=8",
    category: "Photography",
    isSelected: false,
  },
  {
    id: "9",
    image: "https://picsum.photos/200?random=9",
    category: "Photography",
    isSelected: false,
  },
  {
    id: "10",
    image: "https://picsum.photos/200?random=10",
    category: "Photography",
    isSelected: false,
  },
  {
    id: "11",
    image: "https://picsum.photos/200?random=11",
    category: "Photography",
    isSelected: false,
  },
  {
    id: "12",
    image: "https://picsum.photos/200?random=12",
    category: "Photography",
    isSelected: false,
  },
];

const Index = () => {
  const [templates, setTemplates] = useState(TEMPLATE_DATA);
  const [prompt, setPrompt] = useState("");

  const suggestedTemplates = templates.slice(0, 6);
  const monochromeTemplates = templates.slice(6, 12);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ height: 150, width: "100%" }}>
        <View style={styles.header}>
          <Ionicons name="arrow-back" size={30} color="white" />
          <Text style={styles.text}>Photography</Text>
          <Image
            source={{ uri: "https://avatar.iran.liara.run/public/35" }}
            style={styles.avatar}
          />
        </View>

        <View style={styles.iconContainer}>
          <View style={styles.iconBox}>
            <Feather name="home" size={28} color="#00FF7F" />
            <Text style={styles.iconText}>Home</Text>
          </View>
          <View style={styles.divider} />
          <View style={styles.iconBox}>
            <Feather name="video" size={28} color="#15F5BA" />
            <Text style={styles.iconText}>Videos</Text>
          </View>
          <View style={styles.iconBox}>
            <MaterialIcons name="photo-camera-back" size={28} color="#FF5580" />
            <Text style={styles.iconText}>Photography</Text>
          </View>
          <View style={styles.iconBox}>
            <Feather name="smile" size={28} color="#EBF400" />
            <Text style={styles.iconText}>In Action</Text>
          </View>
          <View style={styles.iconBox}>
            <Feather name="star" size={28} color="#FF8F00" />
            <Text style={styles.iconText}>Commercial</Text>
          </View>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.input}>
          <Feather
            name="search"
            size={20}
            color="#7C878E"
            style={{ marginLeft: 20 }}
          />
          <TextInput
            style={styles.inputText}
            placeholder="Search for keyword ‘flowers’..."
            placeholderTextColor="#7C878E"
          />
        </View>

        <View style={styles.describe}>
          <TextInput
            value={prompt}
            onChangeText={setPrompt}
            style={styles.describeText}
            placeholder="Describe the scene around your product..."
            placeholderTextColor="#CCCCCC"
          />
          <Image
            style={styles.star}
            source={require("../../assets/image.png")}
          />
        </View>

        {/* Suggested Templates  */}
        <Text style={styles.heading1}>Or Try Suggested Templates</Text>
        <FlatList
          style={{ marginTop: 20, padding: 2 }}
          data={suggestedTemplates}
          numColumns={3}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{
            justifyContent: "space-between",
            paddingHorizontal: 15,
          }}
          renderItem={({ item }) => (
            <TemplateCard
              item={item}
              onPress={() =>
                setTemplates((prev) =>
                  prev.map((t) =>
                    t.id === item.id
                      ? { ...t, isSelected: !t.isSelected }
                      : { ...t, isSelected: false }
                  )
                )
              }
            />
          )}
        />

        {/* Monochrome Templates */}
        <Text style={styles.heading1}>Monochrome</Text>
        <FlatList
          style={{ marginTop: 20, padding: 2 }}
          data={monochromeTemplates}
          numColumns={3}
          keyExtractor={(item) => item.id}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{
            justifyContent: "space-between",
            paddingHorizontal: 15,
          }}
          renderItem={({ item }) => (
            <TemplateCard
              item={item}
              onPress={() =>
                setTemplates((prev) =>
                  prev.map((t) =>
                    t.id === item.id
                      ? { ...t, isSelected: !t.isSelected }
                      : { ...t, isSelected: false }
                  )
                )
              }
            />
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: { backgroundColor: "#1A1D1E", flex: 1 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    width: "100%",
    padding: 20,
    backgroundColor: "#1A1D1E",
  },
  text: {
    color: "#FFFFFF",
    fontFamily: "Urbanist",
    fontWeight: 700,
    fontSize: 20,
  },
  avatar: { width: 34, height: 34, borderRadius: 0.72, borderColor: "#E0E0E0" },
  iconContainer: {
    height: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
    marginTop: 22,
  },
  iconBox: { alignItems: "center", justifyContent: "center" },
  iconText: {
    color: "#7C878E",
    fontFamily: "Regular",
    fontSize: 10,
    fontWeight: 400,
    marginTop: 5,
  },
  divider: {
    width: 2,
    backgroundColor: "#454545",
    marginHorizontal: 6,
    alignSelf: "stretch",
  },
  input: {
    backgroundColor: "#343839",
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 10,
    marginTop: 20,
    height: 45,
    flexDirection: "row",
    alignItems: "center",
  },
  inputText: {
    flex: 1,
    color: "#7C878E",
    fontWeight: "400",
    fontSize: 13,
    fontFamily: "Regular",
    marginLeft: 4,
  },
  describe: {
    borderWidth: 1,
    borderRadius: 12,
    borderColor: "#454545",
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
    height: 100,
    padding: 15,
    position: "relative",
  },
  describeText: {
    fontFamily: "Regular",
    fontWeight: "400",
    fontSize: 13,
    color: "#CCCCCC",
    marginTop: -10,
  },
  star: { width: 20, height: 20, position: "absolute", top: 60, right: 10 },
  heading1: {
    color: "#CCCCCC",
    fontWeight: "400",
    fontSize: 13,
    fontFamily: "Regular",
    marginLeft: 15,
    marginTop: 10,
  },
});
