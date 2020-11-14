//STYLES
import { AsideArea, Categories } from './style';

//COMPONENTS
import NavLink from '../link';

//ICONS
import { FiSearch } from 'react-icons/fi';

export default function AsideBlog() {
    return (
        <AsideArea>
            <form action="/" method="get">
                <input type="text" name="search" id="search" placeholder="O que está procurando?" />
                <button type="submit"><FiSearch /></button>
            </form>

            <Categories>
                <li>
                    <NavLink path="/">Transtorno do Espectro Autista  </NavLink>
                </li>
                <li>
                    <NavLink path="/"> Transtorno do déficit de atenção com hiperatividade </NavLink>
                </li>
                <li>
                    <NavLink path="/">Sindrome de Down </NavLink>
                </li>
            </Categories>

        </AsideArea>
    );
}