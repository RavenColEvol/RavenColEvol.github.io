import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import svgpack from './../../assest/Icons/symbol-defs.svg';

const BackTopIcon = styled.a`
    position:fixed;
    bottom:3rem;
    right:3rem;
    display:inline-block;
    background:var(--color-primary-1);
    color:white;
    transition:.25s all linear;
    border-radius:50%;
    @media ${props=>props.theme.media.medium}
    {
        bottom:1.5rem;
        right:1.5rem;
    }
    &.show{
        width:2rem;
        height:2rem;
        display:block;
    }
    &.hide{
        width:0;
        height:0;
        diplay:none;
        font-size:0;
    }
`
const Centered = styled.div`
    display:flex;
    width:100%;
    height:100%;
    align-items:center;
    justify-content:center;
`
const BackTop = () => {
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.pageYOffset>window.innerHeight){
                setShow(true);
            }
            else{
                setShow(false);
            }
        })
    })
    const [show,setShow] = useState(false);
    return (
        <BackTopIcon className={show?'show':'hide'} href="#header">
            <Centered>
                <svg className={`icon icon-circle-up`} fill="white" width='20px' height='20px'>
                    <use xlinkHref={`${svgpack}#icon-circle-up`}> </use>
                </svg>
            </Centered>
        </BackTopIcon>
    )
}

export default BackTop
