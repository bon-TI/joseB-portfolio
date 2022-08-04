import Head from 'next/head'
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Skills from '../components/home/Skills';
import Cards from '../components/home/Cards';

function Home() {
  return (
    <div>
      <Head>
        <title>JosBIz | Front-end Web Developer</title>
        <meta name="description" content="Jose Bolivar's Portfolio"/>
      </Head>
      <Hero />
      <About />
      <Cards />
      <Skills />
      
    </div>
  )
}

export default Home;
