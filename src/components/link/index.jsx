import StyledLink from './style';

export default function NavLink({ children, path }) {
    return (
        <StyledLink to={path}>{children}</StyledLink>
    );
}