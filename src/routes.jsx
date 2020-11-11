//REACT ROUTER DOM
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//GLOBAL STYLES AND STYLE CONTEXT FROM STYLED-COMPONENTS
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';

//COMPONENTS
import NavBar from './components/navbar';

//PAGES
import Home from './pages/home';
import Blog from './pages/blog';
import PageNotFound from './pages/notfound';

//CONTEXT
import { useTheme } from './contexts/global'
import Footer from './components/footer';

export default function Routes() {

    const { theme } = useTheme();

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/blog' component={Blog} />
                    <PageNotFound/>
                </Switch>
                <Footer />
            </BrowserRouter>
        </ThemeProvider>
    );
}


