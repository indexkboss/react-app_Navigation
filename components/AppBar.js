import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function AppBar({ title }) {
  const { logout } = useContext(AuthContext);

  return (
    <View style={styles.bar}>
      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity style={styles.logoutButton} onPress={logout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    height: 60,
    backgroundColor: "#af2ab1ff", 
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  logoutButton: {
    backgroundColor: "#007AFF", 
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 6,
  },
  logoutText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
