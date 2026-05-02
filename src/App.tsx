import {
  Navbar,
  Hero,
  Features,
  Testimonials,
  Press,
  Pricing,
  CallToAction,
  Footer,
} from "./components";

function App() {
  return (
    <>
      <section id="title">
        <div className="container-fluid">
          <Navbar />
          <Hero />
        </div>
      </section>
      <Features />
      <Testimonials />
      <Press />
      <Pricing />
      <CallToAction />
      <Footer />
    </>
  );
}

export default App;
