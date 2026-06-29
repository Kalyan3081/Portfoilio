import TopNav from "./components/TopNav";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import About from "./components/About";

function App() {
  return (
    <div className="overflow-hidden text-neutral-300 selection:bg-blue-300 selection:text-black">
      <div className="fixed top-0 -z-10 w-full h-full">
        <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#2765EB_100%)]"></div>
      </div>

      <TopNav />

      <div className="container mx-auto w-full px-5">
        <Intro />
        <About />
        <ContactMe />
        <Footer />
      </div>
    </div>
  );
}

export default App;
