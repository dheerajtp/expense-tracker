import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  accountListItemContainer: {
    backgroundColor: "white",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 5,
  },
  accountListItemName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  accountListPercentage: {},
  accountContainer: {
    gap: 5,
    padding: 5,
  },
  accountHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
});

export default styles;
