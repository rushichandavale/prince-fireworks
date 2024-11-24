import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import ContactUsPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import SafetyTips from "./pages/SafetyTips";

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="safety-tips" element={<SafetyTips />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
