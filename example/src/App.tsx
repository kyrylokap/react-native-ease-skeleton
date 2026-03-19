import { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import { LegendList } from '@legendapp/list';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { MassiveProfileCard } from './components/MassiveProfileCard';

export default function App() {
  const [listType, setListType] = useState<'flash' | 'legend'>('flash');
  const [users, setUsers] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://dummyjson.com/users?limit=1500')
        .then((res) => res.json())
        .then((data) => {
          setUsers(data.users);
          setIsLoading(false); //comment to test skeleton
        })
        .catch((err) => {
          console.error(err);
          setIsLoading(false); //comment to test skeleton
        });
    }, 2000);
  }, []);

  const displayData = isLoading
    ? Array.from({ length: 1500 }, (_, i) => ({
        id: `skeleton-${i}`,
        isSkeleton: true,
      }))
    : users;

  const renderItem = useCallback(
    ({ item }: { item: any }) => {
      return <MassiveProfileCard item={item} isLoading={isLoading} />;
    },
    [isLoading]
  );

  const keyExtractor = useCallback((item: any) => item.id.toString(), []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, listType === 'flash' && styles.activeTab]}
            onPress={() => setListType('flash')}
          >
            <Text
              style={[
                styles.tabText,
                listType === 'flash' && styles.activeTabText,
              ]}
            >
              FlashList
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, listType === 'legend' && styles.activeTab]}
            onPress={() => setListType('legend')}
          >
            <Text
              style={[
                styles.tabText,
                listType === 'legend' && styles.activeTabText,
              ]}
            >
              LegendList
            </Text>
          </TouchableOpacity>
        </View>

        {listType === 'flash' ? (
          <FlashList
            data={displayData}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            // @ts-expect-error TS cannot infer strict type here
            estimatedItemSize={445}
          />
        ) : (
          <LegendList
            data={displayData}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            estimatedItemSize={445}
          />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  tabContainer: {
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'center',
    gap: 12,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 24,
    backgroundColor: '#111',
    borderWidth: 1,
    borderColor: '#222',
  },
  activeTab: {
    backgroundColor: '#FFF',
    borderColor: '#FFF',
  },
  tabText: {
    color: '#888',
    fontWeight: '600',
    fontSize: 15,
  },
  activeTabText: {
    color: '#000',
    fontWeight: '700',
  },
});
