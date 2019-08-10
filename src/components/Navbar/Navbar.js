import React,{useState} from 'react'
import styled from 'styled-components';
import Logo from './Logo/Logo';
import NavItems from './NavItems/NavItems';
import Hamburger from './Hamburger/Hamburger';
import SideDrawer from './SideDrawer/SideDrawer';

const NavWrapper = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:4rem;
    z-index:10;
    background:var(--color-dark-1);
    box-shadow:0 3px 2rem rgba(0,0,0,.18);
    padding:0 7rem;
    display:flex;
    justify-content:space-between;
    align-items:center;

    @media ${props=>props.theme.media.medium}{
        padding:0 3rem;
    }
    @media ${props=>props.theme.media.smallest}{
        padding:0 2rem;
    }
`
const MobileView = styled.div`
    @media ${props=>props.theme.media.medium}{
        display:block;
    }
    height:100%;
`

const DesktopView = styled.div`
    @media ${props=>props.theme.media.medium}{
        display:none;
    }
`
const Navbar = () => {
    const [isOpen,setOpen] = useState(false);
    const handleOpen=()=>{
        setOpen(!isOpen);
    }
    return (
        <>
            <NavWrapper>
                <Logo/>
                <DesktopView>
                <NavItems />
                </DesktopView>
                <Hamburger handleOpen={()=>handleOpen()} isOpen={isOpen}/>
            </NavWrapper>

            <SideDrawer isOpen={isOpen}>
                <MobileView>
                    <NavItems clicked={()=>handleOpen()}/>
                </MobileView>
            </SideDrawer>
        </>
    )
}

export default Navbar
