import Link from 'next/link';
import styled from 'styled-components';
import useStore from '../stores/useStore';

const Navbar = () => {
  const { inc } = useStore();

  return (
    <$NavbarContainer>
      <$Navbar>
        <$NavLogo>
          <Link href='/'>
            <img src='/images/logo.png' alt='logo' />
          </Link>
        </$NavLogo>
        <$NavItem>
          <$NavLink href='/leaderboard'>LEADERBOARD</$NavLink>
          <$NavLink href='/tips'>TIPS & TRICKS</$NavLink>
          <$NavLink href='/profile'>
            <img src='/images/profile.png' alt='' />
          </$NavLink>
        </$NavItem>
      </$Navbar>
    </$NavbarContainer>
  );
};

const $NavbarContainer = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@200&display=swap');
  display: flex;
  justify-content: center;
  width: 100vw;
  margin-top: 12px;
`;
const $Navbar = styled.nav`
  font-family: 'IBM Plex Sans Thai', sans-serif;
  display: flex;
  justify-content: space-between;
  color: white;
  border-bottom: 2px solid rgba(255, 255, 255, 0.2);
  padding: 15px;
  width: 60%;
`;

const $NavLogo = styled.nav`
  display: flex;
  flex: 1;
`;

const $NavItem = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12.5%;
  align-items: center;
  flex: 1;
`;

const $NavLink = styled(Link)`
  text-decoration: none;
  color: white;
`;
export default Navbar;
