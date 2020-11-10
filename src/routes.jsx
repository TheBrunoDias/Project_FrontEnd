//REACT ROUTER DOM
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//GLOBAL STYLES AND STYLE CONTEXT FROM STYLED-COMPONENTS
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';

//COMPONENTS
import Header from './components/header';

//PAGES
import Home from './pages/home';
import Blog from './pages/blog';

//CONTEXT
import { useTheme } from './contexts/global'
import Footer from './components/footer';

export default function Routes() {

    const { theme } = useTheme();

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/blog' component={Blog} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </ThemeProvider>
    );
}


