import './App.css';
import ProductCard from './components/ProductCard';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';


function App() {
  return (
    <div className="app">

      <Header storeName="Marie Maison Interiors" />

      <Hero
  title="Elevated Interiors for Timeless Living"
  subtitle="Discover thoughtfully designed pieces that bring warmth, elegance, and comfort into your home."
  buttonText="Shop Collection"
/>


      <div className="product-container">

        <ProductCard
          name="Designer Pendant Light"
          price="199.99"
          image="https://placehold.co/600x400"
          description="A statement lighting fixture designed to enhance dining rooms, kitchens, and modern living spaces with elegant style."
        />

        <ProductCard
          name="Brass Floor Mirror"
          price="279.99"
          image="https://placehold.co/600x400"
          description="A full-length brass mirror that adds depth, warmth, and sophistication to any interior."
        />

        <ProductCard
          name="Linen Sofa Throw"
          price="54.99"
          image="https://placehold.co/600x400"
          description="A soft textured linen throw blanket that brings comfort and a refined touch to your sofa or lounge area."
        />

      </div>

<Footer
  storeName="Marie Maison Interiors"
  email="hello@mariemaisoninteriors.com"
  location="Louisville, Kentucky"
/>

    </div>
  );
}

export default App;