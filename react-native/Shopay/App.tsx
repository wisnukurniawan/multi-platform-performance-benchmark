/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useEffect, useRef } from 'react';
import ProductGrid from './product_grid';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function App() {
    const isMounted = useRef(false);

  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      console.log("AppLaunch: JS First Render (useEffect mount): " + Date.now() + " ms");
    }
  }, []);

  return <SafeAreaProvider><ProductGrid /></SafeAreaProvider>;
}

export default App;
