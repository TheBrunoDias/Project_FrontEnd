//STYLES
import { SectionTitle, AsideArea, Categories } from './style';

//COMPONENTS
import NavLink from '../link';

//ICONS
import { FiSearch } from 'react-icons/fi';

export default function AsideBlog() {
    return (
        <AsideArea>
            <SectionTitle>Procurar</SectionTitle>
            <form action="/" method="get">
                <input type="text" name="search" id="search" placeholder="O que está procurando?" />
                <button type="submit"><FiSearch /></button>
            </form>

            <SectionTitle>Tópicos</SectionTitle>

            <Categories>
                <li>
                    <NavLink path="/">Topico 1 </NavLink>
                </li>
                <li>
                    <NavLink path="/">Topico 2  </NavLink>
                </li>
                <li>
                    <NavLink path="/">Topico 3 </NavLink>
                </li>
                <li>
                    <NavLink path="/">Topico 4 </NavLink>
                </li>
            </Categories>

        </AsideArea>
    );
}