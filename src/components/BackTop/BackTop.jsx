import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import Icon from '../Icon/Icon'

const BackTopIcon = styled.a`
    position:fixed;
    bottom:3rem;
    right:3rem;
    z-index: 99;
    display:inline-block;
    background:var(--color-primary-1);
    color:var(--color-white-1);
    transition:.2s opacity linear;
    border-radius:50%;
    width:3rem;
    height:3rem;
    @media ${props=>props.theme.media.medium}
    {
        bottom:1.5rem;
        right:1.5rem;
        width: 2rem;
        height: 2rem;
    }
    &.show{
        display:block;
        pointer-events: all;
        opacity: 1;
    }
    &.hide{
        opacity: 0;
        pointer-events: none;
    }
`

const UpSvg = styled(Icon)`
    width: 25px;
    height: 25px;
    @media ${props=>props.theme.media.medium}
    {
        width: 20px;
        height: 20px;
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
                <UpSvg icon="circle-up" className={`icon icon-circle-up`} fill="white" />
            </Centered>
        </BackTopIcon>
    )
}

export default BackTop
