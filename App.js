// Purpose: Main entry point for the application. This file is responsible for rendering the Main component.
import { SafeAreaProvider } from "react-native-safe-area-context";
import Main from "./_components/Main";

export default function App() {
  return (
    <SafeAreaProvider>
      <Main />
    </SafeAreaProvider>
  );
}
