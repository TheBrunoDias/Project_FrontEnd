//REACT HOOKS
import { useContext, useState } from 'react'


//LIBRIRIES
import Switch from 'react-switch'

//CONTEXTS
import { ThemeContext } from 'styled-components';
import { useTheme } from '../../contexts/global';

//STYLES 
import { Container, Divider, SocialContainer, LeftContainer, RightContainer, ListItem } from './style';

//ICONS
import { FiSun, FiFacebook, FiInstagram, FiGithub, FiPhone } from 'react-icons/fi';
import { BsMoon } from 'react-icons/bs';
import { RiTeamLine } from 'react-icons/ri';
import { HiOutlinePuzzle } from 'react-icons/hi';
import { CgGames } from 'react-icons/cg';

//THEMES
import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';

//COMPONENTS
import DropDown from '../dropdown';
import NavLink from '../link';


export default function NavBar() {

    //HOOKS
    const [check, setCheck] = useState(false);

    //CONTEXTS
    const { colors } = useContext(ThemeContext);
    const { theme, setTheme } = useTheme();

    return (
        <Container>
            <nav>
                <LeftContainer>
                    <NavLink path="/"><h1>Uniamericon</h1></NavLink>
                    <SocialContainer>
                        <a href="/" target="_blank"><FiFacebook size={20} color={colors.text_featured} /></a>
                        <a href="/" target="_blank"><FiInstagram size={20} color={colors.text_featured} /></a>
                        <a href="/" target="_blank"> <FiGithub size={20} color={colors.text_featured} /></a>
                    </SocialContainer>
                </LeftContainer>

                <RightContainer>

                    <DropDown title="Saiba Mais">
                        <ListItem><NavLink path="/about-us"> <RiTeamLine /> Sobre Nós</NavLink></ListItem>
                        <hr width="100%" />
                        <ListItem><NavLink path="/about-tea"><HiOutlinePuzzle /> Sobre o TEA</NavLink></ListItem>
                        <hr width="100%" />
                        <ListItem><NavLink path="/"><CgGames /> Jogos</NavLink></ListItem>
                        <hr width="100%" />
                        <ListItem><NavLink path="/"><FiPhone /> Fale Conosco</NavLink></ListItem>
                    </DropDown>

                    <Switch
                        onChange={() => {
                            setTheme(theme.title === 'light' ? dark : light);
                            setCheck(!check);
                        }}
                        checked={check}
                        checkedIcon={<FiSun color={colors.secondary} size={20} style={{ height: 30, marginLeft: 5 }} />}
                        uncheckedIcon={<BsMoon color={colors.secondary} size={20} style={{ height: 30, marginLeft: 5 }} />}
                        height={30}
                        width={60}
                        onHandleColor={colors.primary}
                        offHandleColor={colors.primary}
                        offColor={colors.background_primary}
                        onColor={colors.background_primary}
                    />
                    <Divider />
                    <NavLink path="/login">Entrar</NavLink>
                </RightContainer>
            </nav>
        </Container>
    );
}