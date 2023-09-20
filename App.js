import { StyleSheet, Text, View } from 'react-native';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import LandingPage from './components/LandingPage';
import PickupRequest from './components/PickupRequest';

export default function App() {
  return (
    <SignupForm />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF7900',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
