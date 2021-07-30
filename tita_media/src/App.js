import './App.css';
import NavBar from  '../src/components/Molecules/NavBar'
import CenterContainer from  '../src/components/Molecules/CenterContainer'
import MasonryContainer  from  '../src/components/Molecules/MasonryContainer'
import CenterIconContainer from  '../src/components/Molecules/CenterIconContainer'
import CenterContainerButtons from  '../src/components/Molecules/CenterContainerButtons'
import Footer from  '../src/components/Molecules/Footer'

import { ThemeProvider, CssBaseline } from '@material-ui/core'
import theme from '../src/assets/utils/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <NavBar/>
        <CenterContainer/>
        <CenterIconContainer/>
        <CenterContainerButtons/>
        <MasonryContainer/>
        <Footer/>
    </ThemeProvider>
  );
}

export default App;
