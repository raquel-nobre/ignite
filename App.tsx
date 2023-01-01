
import { NewGroup } from "@screens/NewGroup"; 
import { ActivityIndicator, StatusBar } from "react-native";
import { useFonts, Roboto_400Regular, Roboto_700Bold  } from '@expo-google-fonts/roboto';
import { ThemeProvider} from 'styled-components'
import theme from "./src/theme";
import { Loading } from "@components/Loading";

export default function App() {
  const [fontsLoader] = useFonts({ Roboto_400Regular, Roboto_700Bold});
 
  return (
    <ThemeProvider theme={theme}> 
     <StatusBar
      barStyle="light-content"
      
     />
      { fontsLoader ? <NewGroup/> : <Loading/>}
    </ThemeProvider>
    
  );
}


