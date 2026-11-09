import Header from './components/Header'
import Hero from './components/Hero'
import Strip from './components/Strip'
import Services from './components/Services'
import About from './components/About'
import Process from './components/Process'
import Work from './components/Work'
import Banner from './components/Banner'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Strip />
        <Services />
        <About />
        <Process />
        <Work />
        <Banner />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
