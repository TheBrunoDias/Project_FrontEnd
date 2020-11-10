//REACT HOOKS
import { useContext, useState } from 'react'

//LIBRIRIES
import Switch from 'react-switch'

//CONTEXTS
import { ThemeContext } from 'styled-components';
import { useTheme } from '../../contexts/global';

//STYLES 
import { Container, NavLink, Divider, SocialContainer, LeftContainer, RightContainer, ListItem} from './style';

//ICONS
import { FiSun, FiFacebook, FiInstagram, FiGithub, FiPhone} from 'react-icons/fi';
import { BsMoon } from 'react-icons/bs';
import {RiTeamLine} from 'react-icons/ri';
import {HiOutlinePuzzle} from 'react-icons/hi';
import {CgGames} from 'react-icons/cg';

//THEMES
import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';
import DropDown from '../dropdown';


export default function Header() {

    //HOOKS
    const [check, setCheck] = useState(false);


    //CONTEXTS
    const { colors } = useContext(ThemeContext);
    const { theme, setTheme } = useTheme();

    return (
        <Container>
            <LeftContainer>
                <NavLink to="/"><h1>Uniamericon</h1></NavLink>
                <SocialContainer>
                    <a href="/" target="_blank"><FiFacebook size={20} color={colors.text_featured} /></a>
                    <a href="/" target="_blank"><FiInstagram size={20} color={colors.text_featured} /></a>
                    <a href="/" target="_blank"> <FiGithub size={20} color={colors.text_featured} /></a>
                </SocialContainer>
            </LeftContainer>

            <RightContainer>

                <DropDown title="Saiba Mais">
                        <ListItem><NavLink to="/"> <RiTeamLine/> Sobre Nós</NavLink></ListItem>
                        <hr width="100%"/>
                        <ListItem><NavLink to="/"><HiOutlinePuzzle/> Sobre o TEA</NavLink></ListItem>
                        <hr width="100%"/>
                        <ListItem><NavLink to="/"><CgGames/> Jogos</NavLink></ListItem>
                        <hr width="100%"/>
                        <ListItem><NavLink to="/"><FiPhone/> Fale Conosco</NavLink></ListItem>
                </DropDown>

                <Switch
                    onChange={() => {
                        setTheme(theme.title === 'light' ? dark : light);
                        setCheck(!check);
                    }}
                    checked={check}
                    checkedIcon={<FiSun color={colors.text} size={20} style={{ height: 30, marginLeft: 5 }} />}
                    uncheckedIcon={<BsMoon color={colors.text} size={20} style={{ height: 30, marginLeft: 5 }} />}
                    height={30}
                    width={60}
                    onHandleColor={colors.text}
                    offHandleColor={colors.text}
                    offColor={colors.background}
                    onColor={colors.background}
                />
                <Divider />
               <NavLink to="/">Entrar</NavLink>
            </RightContainer>

        </Container>
    );
}