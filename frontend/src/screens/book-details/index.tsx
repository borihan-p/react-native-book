import React from 'react';
import {Text, Image, ScrollView} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../types';
import {styles} from '../../style';

interface BookDetailScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'BookDetails'>;
  route: RouteProp<RootStackParamList, 'BookDetails'>;
}

export function BookDetailScreen(props: BookDetailScreenProps): JSX.Element {
  const book = props.route.params;
  return (
    <ScrollView>
      <Text style={styles.textLine}>
        <Text style={styles.bookProp}>ID:</Text> {book.id}
      </Text>
      <Text style={styles.textLine}>
        <Text style={styles.bookProp}>Title:</Text> {book.title}
      </Text>
      <Text style={styles.textLine}>
        <Text style={styles.bookProp}>Author:</Text> {book.author}
      </Text>
      <Text style={styles.textLine}>
        <Text style={styles.bookProp}>Description:</Text> {book.description}
      </Text>
      {/* <Text style={styles.textLine}>coverImageUrl: {book.coverImageUrl}</Text> */}
      <Image style={styles.bookImage} source={{uri: book.coverImageUrl}} />
    </ScrollView>
  );
}
