import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap');
    
    *{
        margin:0;
        padding:0;
        box-sizing:inherit;
    }

    html{
        box-sizing:border-box;
        ${props => {
            const { currTheme, colors, media } = props.theme;
            return (`
            --color-primary-1: ${colors[currTheme]['color-primary-1']};
            --color-primary-2: ${colors[currTheme]['color-primary-2']};
            --color-primary-3: ${colors[currTheme]['color-primary-3']};
            --color-dark-1: ${colors[currTheme]['color-dark-1']};
            --color-dark-2: ${colors[currTheme]['color-dark-2']};
            --color-white-1: ${colors[currTheme]['color-white-1']};
            --color-white-2: ${colors[currTheme]['color-white-2']};
    
            --media-medium: ${media.medium};
            `)
        }}
        scroll-behavior:smooth;
    }

    body{
        font-family:'Montserrat',sans-serif;
        font-size:62.5%;
        font-weight:400;
        line-height:1.4;
        background:var(--color-dark-1);
        color:var(--color-white-1);
        overflow-x:hidden;
    }

    @media ${props=>props.theme.media.smallest}{
        font-size:55%;
    }

    a,input{
        text-decoration:none;
        border:none;
    }

    ::selection {
        ${props=> {
            const { colors, currTheme } = props.theme;
            return `
                background: ${colors[currTheme]['color-primary-1']};
                color: ${currTheme === 'light' ?  'var(--color-dark-1)' : 'var(--color-white-1)'};
            `
        }}
    }
`
