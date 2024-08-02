import { SafeAreaView, StyleSheet, Text,View } from "react-native";
import Book from "@/models/book";

import { BookGrid } from "@/components/BookGrid";

export default function HomeScreen() {

  // getUserBooksList(UserId).then((res) => {
  //     setBookList(res);
  // });
  
  return (
    <SafeAreaView style={styles.container}>
      <Text>Library App</Text>
      <BookGrid />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
