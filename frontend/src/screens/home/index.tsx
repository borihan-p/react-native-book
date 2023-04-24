import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View, Button} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';

import {styles} from '../../style';
import {Book, RootStackParamList} from '../../types';
import {CONFIG} from '../../config';

interface HomeScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
  route: RouteProp<RootStackParamList, 'Home'>;
}

export function HomeScreen(props: HomeScreenProps): JSX.Element {
  const {navigation} = props;
  const [data, setData] = useState<Book[]>([]);

  const getBooks = async () => {
    try {
      const apiEndpoint = new URL('/book', CONFIG.API_URL).href;
      const response = await fetch(apiEndpoint);
      const bookData = await response.json();
      setData(bookData);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getBooks();
  }, []);

  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          {Array.isArray(data) &&
            data.length > 0 &&
            data.map(book => (
              <View key={book.id} style={styles.item}>
                <Text style={styles.textLine}>
                  <Text style={styles.bookProp}>Title:</Text> {book.title}
                </Text>
                <Text style={styles.textLine}>
                  <Text style={styles.bookProp}>Author:</Text> {book.author}
                </Text>
                <Button title="Go to Book Details" onPress={() => navigation.push('BookDetails', book)} />
              </View>
            ))}
          {Array.isArray(data) && data.length === 0 && <Text>No data</Text>}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
