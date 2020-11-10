import {SectionTitle, AsideArea} from './style';

import {FiSearch } from 'react-icons/fi';

export default function AsideBlog() {
    return (
        <AsideArea>
            <SectionTitle>Procurar</SectionTitle>
            <form action="/" method="get">
                <input type="text" name="search" id="search" placeholder="O que está procurando?" />
                <button type="submit"><FiSearch /></button>
            </form>
        </AsideArea>
    );
}