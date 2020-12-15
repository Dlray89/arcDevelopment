  import Header from '../components/UI/Header'
import { ThemeProvider } from '@material-ui/styles'
import theme from '../components/UI/theme'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Footer from './UI/footer'
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={() => <div style={{height:'350px'}}>Home</div>}   />
        <Route exact path='/services' component={() => <div>Services</div>}   />
        <Route exact path='/customsoftware' component={() => <div>Customer Services</div>}   />
        <Route exact path='/mobileapps' component={() => <div>Mobile Apps</div>}   />
        <Route exact path='/websites' component={() => <div>Websites</div>}   />
        <Route exact path='/revolution' component={() => <div>Revolutions</div>}   />
        <Route exact path='/aboutus' component={() => <div>About</div>}   />
        <Route exact path='/contact' component={() => <div>Contact</div>}   />
        <Route exact path='/estimate' component={() => <div>Esitmate</div>}   />
        <Route exact path='/' component={() => <div>Home</div>}   />
      </Switch>
      <Footer />
      </BrowserRouter>
     
      </ThemeProvider>
  );
}

export default App;
