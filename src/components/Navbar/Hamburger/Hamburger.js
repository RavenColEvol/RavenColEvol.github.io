import React from "react";
import styled from "styled-components";

const HamburgerIcon = styled.div`
    text-align: center;
    width:  30px;
    position: relative;
    transition: all .25s ease-in-out;
    display:none;

    &:before {
			content:  "";
			position: absolute;
			width:    100%;
			height:   100%;
			top:      0;
			left:     0;
			
			border-radius: 50%;
			border: 5px solid #3aa395;
			box-shadow: 0 0 10px 3px #3aa395, inset 0 0 10px 3px #3aa395;
			
			transform: scale( 0 );
    }
    
    &.hamburger-active {
			&:before {
				animation: ripple-effect .4s 0s ease-in-out 1 forwards;
			}
			& > span { background-color: var(--color-primary-3);}
			& > span:nth-child( 2 ) { opacity: 0; transform: translateX( -100% ); }
			& > span:nth-child( 1 ) { transform: translateY( 9px ) rotateZ( 135deg ); }
			& > span:nth-child( 3 ) { transform: translateY( -9px ) rotateZ( -135deg ); }
    }

    & > span {
			width:   100%;
			height:  4px;
			display: block;
			margin:  .3rem 0;
			border-radius:3px;
			background-color: var(--color-primary-3);
			transition: all .35s ease-in-out;
		}

    @media ${(props) => props.theme.media.medium}{
			display:block;
    }
`;
const Hamburger = ({ handleOpen, isOpen }) => {
  return (
    <HamburgerIcon
      onClick={handleOpen}
      className={isOpen ? "hamburger-active" : ""}
    >
      <span></span>
      <span></span>
      <span></span>
    </HamburgerIcon>
  );
};

export default Hamburger;
