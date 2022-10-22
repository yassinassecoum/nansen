import { AsSeen } from "./components/AsSeen";
import { BackedBy } from "./components/BackedBy";
import { Cta } from "./components/Cta";
import { CtaEnd } from "./components/CtaEnd";
import { Customers } from "./components/Customers";
import { Discover } from "./components/Discover";
import { Footer } from "./components/Footer";
import { Latest } from "./components/Latest";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cta />
      <AsSeen />
      <Discover />
      <BackedBy />
      <Customers />
      <Latest />
      <CtaEnd />
      <Footer />
    </div>
  );
}

export default App;
