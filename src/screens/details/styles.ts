import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#272B30',
  },

  name: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#FFE300',
    marginBottom: 10,
  },
  description: {
    fontSize: 30,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  descriptionBold: {
    fontWeight: 'bold',
  },
  filmsContainer: {
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    borderRadius: 5,
    margin: 20,
  },
  filmsTitle: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFE300',
    marginBottom: 10,
    textTransform: 'uppercase',
  },
});
