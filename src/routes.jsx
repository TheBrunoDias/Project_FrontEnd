//REACT ROUTER DOM
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//GLOBAL STYLES AND STYLE CONTEXT FROM STYLED-COMPONENTS
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';


//COMPONENTS
import Header from './components/header';
import Home from './pages/home';

//CONTEXT
import {useTheme} from './contexts/global' 

export default function Routes() {

    const {theme} = useTheme();

    return (
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route path='/' exact component={Home} />
                    </Switch>
                </BrowserRouter>
            </ThemeProvider>
    );
}