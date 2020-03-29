import React from 'react'
import Project from './Project/Project'
import {graphql, useStaticQuery} from 'gatsby'

const Projects = () => {

    const data = useStaticQuery(graphql`
        query {
            fuddulist: file(relativePath: { eq: "fuddulist.webp" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
            bootstrap: file(relativePath: { eq: "bootstrap.webp" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
            blockchain: file(relativePath: { eq: "blockchain.webp" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
            movie: file(relativePath: { eq: "react-movie.webp" }) {
                childImageSharp {
                    fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                    }
                }
            }
        } 
    `)

    return (
        <>
            <Project target  title={'Dark Bootstrap'} stack={'HTML5-CSS3-JS-BOOTSTRAP4'} imgurl={data.bootstrap.childImageSharp.fluid} link={'https://ravencolevol.github.io/bootstrap-dark-mode/'}>
                This is more of a frontend project I made to fulfill my need of having a css file which can easily turn any bootstrap project to dark mode easily.
                I didn't find any such project online so I thought to create one by myself.
            </Project>
            <Project target reverse title={'Fuddu List'} stack={'React-Express-Mongodb-Redux-Antd'} imgurl={data.fuddulist.childImageSharp.fluid} link={'https://fuddulist.herokuapp.com/'}>
                This whole I created within few days that too from scratch and didn't followed any tutorial for that . I'm happy with this yet another todo app i created, it looks clean 
                and gives feedback through alert. I've used antd and it was the first time I've used formik and yup .
            </Project>
            <Project target title={'React Movie App'} stack={'React-ReactRouter-API-HTML5-CSS3-BOOTSTRAP4'} imgurl={data.movie.childImageSharp.fluid} link={'https://raven-movie.netlify.com/'}>
                This is a Movie App which uses tmdb api . After completing React Course and lot of youtube videos on react I was searching for any app idea I can create with react then I found this because in such apps there is a proper use of react components. This app is similar to that of imdb. It is not responsive right now.
            </Project>
            <Project target reverse title={'Node Js Blockchain'} stack={'Node-js-HTML5-CSS-BOOTSTRAP'} imgurl={data.blockchain.childImageSharp.fluid} link={'https://github.com/RavenColEvol/blockchain-javascript-completed'}>
                After Hackathon 2018 held in my college one of my class mate made a "Decenteralised Voting System" at that time I didn't knew what blockchain is what decenteralise mean but looking curious faces of judge in that project also kindled me to checkout what actually blockchain is, after that i found one course on udemy Creating Blockchain with javascript I decided to take that course and learnt many thing about blockchain technology and I've decided to be a blockchain developer in future.
            </Project>
        </>
    )
}

export default Projects
