import {
  Switch,
  Text,
  View,
  Image,
  ActionSheetIOS,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight,
  Button,
  TouchableWithoutFeedback,
  Pressable,
  Platform,
  Alert,
  ToastAndroid,
} from 'react-native';
import React from 'react';

export default function App() {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [timesPressed, setTimesPressed] = React.useState(0);

  let textLog = '';
  if (timesPressed > 1) {
    textLog = timesPressed + 'x onPress';
  } else if (timesPressed > 0) {
    textLog = 'onPress';
  }

  const [result, setResult] = React.useState('🔮');

  const showToast = () => {
    ToastAndroid.show('A pikachu appeared nearby !', ToastAndroid.SHORT);
  };

  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      'All Your Base Are Belong To Us',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
  };

  const showToastWithGravityAndOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      'A wild toast appeared!',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
  };

  const onPress = () => {
    if (Platform.OS === 'ios') {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ['Evet', 'Hayır', 'İptal'],
          cancelButtonIndex: 2,
        },
        buttonIndex => {
          if (buttonIndex === 0) {
            // cancel action
          } else if (buttonIndex === 1) {
            setResult(String(Math.floor(Math.random() * 100) + 1));
          } else if (buttonIndex === 2) {
            setResult('🔮');
          }
        },
      );
    } else {
      Alert.alert('Sil', 'Silmek');
    }
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <Text>App</Text>

        <Pressable
          onPress={() => {
            onPress();
          }}
          style={({pressed}) => [
            {
              backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
            },
            styles.wrapperCustom,
          ]}>
          {({pressed}) => (
            <Text style={styles.text}>{pressed ? 'Pressed!' : 'Press Me'}</Text>
          )}
        </Pressable>

        {/* <TouchableHighlight
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => alert('Pressed!')}>
          <MyComponent />
        </TouchableHighlight>

        <TouchableWithoutFeedback onPress={() => alert('Pressed!')}>
          <MyComponent />
        </TouchableWithoutFeedback> */}

        <Button title="Toggle Toast" onPress={() => showToast()} />
        <Button
          title="Toggle Toast With Gravity"
          onPress={() => showToastWithGravity()}
        />
        <Button
          title="Toggle Toast With Gravity & Offset"
          onPress={() => showToastWithGravityAndOffset()}
        />

        <TouchableOpacity
          onPress={() => alert('Bana Tıkladın')}
          activeOpacity={0.1}
          style={{
            backgroundColor: '#81b0ff',
            padding: 10,
            borderRadius: 10,
            width: 150,
            height: 50,
          }}>
          <Text>Bana Tıkla</Text>
        </TouchableOpacity>
        <Button
          onPress={() => alert('Bana Tıkladın')}
          title="Bana Tıkla"
          color={'red'}
        />
        {/* <Switch
          // trackColor={{false: '#767577', true: '#81b0ff'}}
          // thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        /> */}
        <Image
          source={require('./assets/horse.webp')}
          style={{width: 100, height: 200}}
        />
        <Image
          source={{
            uri: 'https://icdn.ensonhaber.com/crop/1200x675/resimler/galeri/at-turleri.jpg',
          }}
          style={{width: Dimensions.get('screen').width * 0.33, height: 300}}
          resizeMode="contain"
        />
        <Image
          source={{
            uri: 'https://icdn.ensonhaber.com/crop/1200x675/resimler/galeri/at-turleri.jpg',
          }}
          style={{width: 300, height: 300}}
          resizeMode="contain"
        />
        <Image
          source={{
            uri: 'https://icdn.ensonhaber.com/crop/1200x675/resimler/galeri/at-turleri.jpg',
          }}
          style={{width: 300, height: 300}}
          resizeMode="contain"
        />
        <Image
          source={{
            uri: 'https://icdn.ensonhaber.com/crop/1200x675/resimler/galeri/at-turleri.jpg',
          }}
          style={{width: 300, height: 300}}
          resizeMode="contain"
        />
        <Image
          source={{
            uri: 'https://icdn.ensonhaber.com/crop/1200x675/resimler/galeri/at-turleri.jpg',
          }}
          style={{width: 300, height: 300}}
          resizeMode="contain"
        />
        <Image
          source={{
            uri: 'https://icdn.ensonhaber.com/crop/1200x675/resimler/galeri/at-turleri.jpg',
          }}
          style={{width: 300, height: 300}}
          resizeMode="contain"
        />
        <Image
          source={{
            uri: 'https://icdn.ensonhaber.com/crop/1200x675/resimler/galeri/at-turleri.jpg',
          }}
          style={{width: 300, height: 300}}
          resizeMode="contain"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
  },
});
