import { StyleSheet, Text, View } from 'react-native';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import LandingPage from './components/LandingPage';

export default function App() {
  return (
    <LandingPage />
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
