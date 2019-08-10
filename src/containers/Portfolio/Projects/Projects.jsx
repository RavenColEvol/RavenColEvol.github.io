import React from 'react'
import Project from './Project/Project'
import asilverse from '../../../assest/projects/asilverse.png'
import reactMovie from '../../../assest/projects/react-movie.png'
import blockchain from '../../../assest/projects/blockchain.png'
import frontEnd from '../../../assest/projects/front_end.png'
const Projects = () => {
    return (
        <>
            <Project target  title={'Asilverse Site'} stack={'HTML5-CSS3-JS-BOOTSTRAP4'} imgurl={asilverse} link={'http://ravencolevol.github.io/intershala'}>
                After IV Sem of engineering college when I was applying for internships from internshala. I got few replies and they sent me task of building sites for them even though I was not selected in anyone of them but still I learnt many cool stuffs like Owl Carousel, Svg fonts, etc.
            </Project>
            <Project target reverse title={'React Movie App'} stack={'React-ReactRouter-API-HTML5-CSS3-BOOTSTRAP4'} imgurl={reactMovie} link={'https://raven-movie.netlify.com/'}>
                This is a Movie App which uses tmdb api . After completing React Course and lot of youtube videos on react I was searching for any app idea I can create with react then I found this because in such apps there is a proper use of react components. This app is similar to that of imdb. It is not responsive right now.
            </Project>
            <Project target title={'Node Js Blockchain'} stack={'Node-js-HTML5-CSS-BOOTSTRAP'} imgurl={blockchain} link={'https://github.com/RavenColEvol/blockchain-javascript-completed'}>
                After Hackathon 2018 held in my college one of my class mate made a "Decenteralised Voting System" at that time I didn't knew what blockchain is what decenteralise mean but looking curious faces of judge in that project also kindled me to checkout what actually blockchain is, after that i found one course on udemy Creating Blockchain with javascript I decided to take that course and learnt many thing about blockchain technology and I've decided to be a blockchain developer in future.
            </Project>
            <Project target reverse title={'Front End Project'} stack={'React-CSS3-HTML5'} imgurl={frontEnd} link={'https://quirky-benz-623058.netlify.com/'}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore omnis saepe dolores reiciendis error, voluptates optio nobis amet nam deserunt blanditiis consectetur exercitationem vero possimus commodi cum itaque debitis soluta!
            </Project>
        </>
    )
}

export default Projects
