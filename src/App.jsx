import {
  Header,
  Hero,
  Beneficios,
  Products,
  CTA,
  Footer,
} from './components';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Beneficios />
        <Products />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

export default App;
