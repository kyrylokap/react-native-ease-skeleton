import { View, StyleSheet, Text } from 'react-native';
import { Skeleton } from 'react-native-ease-skeleton';

export default function App() {
  return (
    <View style={styles.container}>
      <Skeleton
        width={150}
        height={50}
        colorMode="light"
        borderRadius={12}
        show
      />
      <View style={styles.spacer} />
      <Skeleton width={250} height={200} show colorMode="dark">
        <Text style={styles.text}>Content</Text>
      </Skeleton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  spacer: {
    height: 20,
  },
  text: {
    color: 'white',
  },
});
