import React from 'react'
import Container from './../../components/Container/Container'
import Title from './../../components/textUtil/Title/Title'
import Projects from './Projects/Projects';

const Portfolio = () => {
    return (
        <div id="portfolio">
            <Container>
                <Title>Portfolio</Title>

                <Projects/>
            </Container>
        </div>
    )
}

export default Portfolio