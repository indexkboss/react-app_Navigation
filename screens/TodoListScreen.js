import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useEffect } from "react";
import AppBar from "../components/AppBar";

//  ZUSTAND (ACTIVE)
   
import { useTodoStore } from "../store/useTodoStore";

export default function TodoListScreen({ navigation }) {
  const { todos, addTodo } = useTodoStore();

  useEffect(() => {
    addTodo({ id: 1, title: "Faire les courses" });
    addTodo({ id: 2, title: "Sortir le chien" });
    addTodo({ id: 3, title: "Coder une app RN" });
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <AppBar />

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Détails", item)}
          >
            <Text style={{ padding: 10, fontSize: 18 }}>
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

// REDUX 

// import { useSelector, useDispatch } from "react-redux";
// import { addTodo } from "../store/todosSlice";

// const todos = useSelector(state => state.todos);
// const dispatch = useDispatch();

// useEffect(() => {
//   dispatch(addTodo({ id: 1, title: "Faire les courses" }));
//   dispatch(addTodo({ id: 2, title: "Sortir le chien" }));
//   dispatch(addTodo({ id: 3, title: "Coder une app RN" }));
// }, []);
