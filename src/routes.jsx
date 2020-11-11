//REACT ROUTER DOM
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//GLOBAL STYLES AND STYLE CONTEXT FROM STYLED-COMPONENTS
import GlobalStyles from './styles/global';
import { ThemeProvider } from 'styled-components';

//COMPONENTS
import NavBar from './components/navbar';

//PAGES
import Landing from './pages/landing';
import Blog from './pages/blog/blog';
import BlogSingle from './pages/blog/single';
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
                    <Route path='/' exact component={Landing} />
                    <Route path='/blog' exact component={Blog} />
                    <Route path='/blog/single' component={BlogSingle} />
                    <PageNotFound/>
                </Switch>
                <Footer />
            </BrowserRouter>
        </ThemeProvider>
    );
}


