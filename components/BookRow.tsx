import { Image, View, StyleSheet, Platform,Text } from "react-native";
import Book from "@/models/book";
import { Link } from "expo-router";

export function BookRow({ book }: { book: Book }) {
  return (
    <Link
      href={{
        pathname: "/userbookdetail",
        params: { bookId: book.id },
      }}
    >
      <Text>Book</Text>
      <View style={styles.bookRow}>
        <Image
          source={{ uri: book.image }}
          style={styles.image}
          alt={book.title}
        />
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  bookRow: {
    width: 125,
    height: 200,
    backgroundColor: "#222629",
    borderRadius: 20,
    color: "white",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    marginRight: 10,
    cursor: "pointer",
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },
});
