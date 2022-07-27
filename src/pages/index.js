import Head from 'next/head'
import Hero from '../components/Hero';
import About from '../components/About';

function Home() {
  return (
    <div>
      <Head>
        <title>JosBIz | Front-end Web Developer</title>
        <meta name="description" content="Jose Bolivar's Portfolio"/>
      </Head>
      <Hero />
      <About />

      
    </div>
  )
}

export default Home;
