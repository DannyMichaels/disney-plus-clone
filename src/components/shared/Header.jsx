import styled from 'styled-components';
import { COLORS, IMAGES } from '../../utils/globalUtils';

const links = [
  {
    title: 'Home',
    path: '/home',
    imgSrc: '/images/home-icon.svg',
  },
  {
    title: 'Search',
    path: '#',
    imgSrc: '/images/search-icon.svg',
  },
  {
    title: 'Watchlist',
    path: '#',
    imgSrc: '/images/watchlist-icon.svg',
  },
  {
    title: 'Originals',
    path: '#',
    imgSrc: '/images/original-icon.svg',
  },
  {
    title: 'Movies',
    path: '#',
    imgSrc: '/images/movie-icon.svg',
  },
  {
    title: 'Series',
    path: '#',
    imgSrc: '/images/series-icon.svg',
  },
];

const Header = () => (
  <Nav>
    <Logo>
      <img src={IMAGES.DISNEY_LOGO} alt="Disney+" />
    </Logo>

    <>
      <NavMenu>
        {links.map((link) => (
          <a href={link.path}>
            <img src={link.imgSrc} alt={link.title} />
            <span>{link.title.toUpperCase()}</span>
          </a>
        ))}
      </NavMenu>
    </>
  </Nav>
);

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: ${COLORS.DARK_BLUE_2};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  transition: opacity 0.5s ease-out;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    // this is the element with the white underline hover
    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: '';
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;

        /* transform origin tells it to go from left to center when hovering*/
        transform-origin: left center;
        transform: scaleX(0); // all the way left
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden; // it's actually there the whole time.
        width: auto;
      }
    }

    &:hover {
      span:before {
        //prettier-ignore
        transform: scaleX(1); // this does the nice horizontal expanding when hovering
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export default Header;
