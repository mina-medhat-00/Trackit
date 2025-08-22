import { StyleSheet } from "react-native";

/**
 * A centralized stylesheet.
 * This stylesheet defines styles for containers, headers, tasks, modals, inputs, search bars, and footers.
 *
 */
export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#121212",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "#fff",
  },
  taskContainer: {
    backgroundColor: "#1f1f1f",
    padding: 15,
    marginVertical: 5,
    borderRadius: 8,
    boxShadow: "0px 2px 4px rgba(0,0,0,0.7)",
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  taskDescription: {
    fontSize: 14,
    color: "#aaa",
    marginTop: 4,
  },
  dateText: {
    fontSize: 12,
    color: "#aaa",
    marginVertical: 6,
  },
  completed: {
    textDecorationLine: "line-through",
    color: "#888",
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  modalContent: {
    width: "90%",
    backgroundColor: "#1e1e1e",
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#fff",
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    backgroundColor: "#2c2c2c",
    color: "#fff",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#222",
    margin: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    color: "#fff",
    paddingVertical: 6,
  },
  footer: {
    paddingVertical: 10,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#333",
  },
  footerText: {
    color: "#aaa",
    fontSize: 14,
  },
});
