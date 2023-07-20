import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Modal,
  TextInput,
  View,
  Pressable,
} from 'react-native';

function App(): JSX.Element {
  const [value, setValue] = React.useState('');
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{value}</Text>

      <Pressable style={styles.button} onPress={() => setIsModalOpen(true)}>
        <Text style={styles.buttonText}>Open modal</Text>
      </Pressable>

      <Modal
        visible={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        transparent>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <TextInput
              style={styles.textInput}
              value={value}
              onChangeText={setValue}
            />
            <Pressable
              style={styles.button}
              onPress={() => setIsModalOpen(false)}>
              <Text style={styles.buttonText}>Close modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#333',
    fontSize: 24,
    textAlign: 'center',
  },
  button: {
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2f4cd3',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    gap: 16,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  modal: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#EEE',
    borderWidth: 1,
    marginTop: 'auto',
    justifyContent: 'flex-end',
    gap: 16,
    padding: 16,
    borderRadius: 8,
    borderColor: '#BBB',
  },
  textInput: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: '#333',
    borderWidth: 1,
    borderColor: '#BBB',
  },
});

export default App;
