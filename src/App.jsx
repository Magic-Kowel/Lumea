import Products from "./sections/Products";
import ContactUs from "./sections/ContactUs";
import Footer from "./components/Footer";
import Herro from "./sections/Herro";

function App() {
  return (
    <>
      <section>
        <Herro />
      </section>
      <main>
        <Products />
      </main>
      <section>
        <ContactUs />
      </section>
      <Footer />
    </>
  );
}

export default App;
