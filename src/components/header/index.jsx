//STYLES FROM STYLED-COMPONENT
import HomeHeader from './style';

export default function Header({ title, subtitle }) {
  return (
    <HomeHeader>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </HomeHeader>
  );
}
