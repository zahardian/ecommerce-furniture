import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CartPage from "./pages/CartPage";
import { useState } from "react";
import ProductList from "./components/ProductList";

type BlogPost = {
  id: number;
  title: string;
  date: string;
  author: string;
  category: string;
  image: string;
  alt: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Unique products in 2023.",
    date: "2022-11-27",
    author: "Admin",
    category: "deco",
    image: "/blog-1.jpg",
    alt: "Unique products that will impress your home in 2023.",
  },
  {
    id: 2,
    title: "Navy Blue & White Striped Area Rugs",
    date: "2022-11-25",
    author: "Admin",
    category: "deco",
    image: "/blog-2.jpg",
    alt: "Navy Blue & White Striped Area Rugs",
  },
  {
    id: 3,
    title: "Furniex White Coated Staircase Floating",
    date: "2022-11-18",
    author: "Admin",
    category: "deco",
    image: "/blog-3.jpg",
    alt: "Furniex White Coated Staircase Floating",
  },
];

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}

function App() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Bisa diganti dengan API call atau logic lain
    alert(`Subscribed with email: ${email}`);
    setEmail("");
  };

  const handleAddToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const handleDecreaseQuantity = (id: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleIncreaseQuantity = (id: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  return (
    <div className="max-w-7xl mx-auto">
      <BrowserRouter>
        <Navbar cartCount={cart.length} />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <section
                  id="home"
                  className="relative overflow-hidden pt-10 lg:h-[800px]"
                >
                  <div className="pt-16 sm:pt-24 lg:pt-40 lg:pb-48">
                    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                      {/* Text */}
                      <div className="sm:max-w-lg">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                          Zaniture-Furniture Manufacturer
                        </h1>
                        <p className="mt-4 text-xl text-gray-500">
                          We start from design inspiration, select high-quality
                          materials, Zaniture customized service, comfort
                          without compromise
                        </p>
                      </div>

                      {/* Desktop Layout */}
                      <div className="hidden lg:block mt-10">
                        <div
                          aria-hidden="true"
                          className="pointer-events-none relative lg:mx-auto lg:w-full lg:max-w-7xl"
                        >
                          <div className="absolute transform lg:top-1/2 lg:left-1/2 lg:translate-x-8 lg:-translate-y-1/2">
                            <div className="flex items-center space-x-6 lg:space-x-8">
                              {/* ...sama persis seperti codingan awal desktop */}
                              <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                  <img
                                    src="/hero-1.jpg"
                                    alt=""
                                    className="size-full object-cover"
                                  />
                                </div>
                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                  <img
                                    src="/hero-2.jpg"
                                    alt=""
                                    className="size-full object-cover"
                                  />
                                </div>
                              </div>
                              <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                  <img
                                    src="/hero-3.jpg"
                                    alt=""
                                    className="size-full object-cover"
                                  />
                                </div>
                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                  <img
                                    src="/hero-4.jpg"
                                    alt=""
                                    className="size-full object-cover"
                                  />
                                </div>
                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                  <img
                                    src="/hero-5.jpg"
                                    alt=""
                                    className="size-full object-cover"
                                  />
                                </div>
                              </div>
                              <div className="grid shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                  <img
                                    src="/hero1.jpg"
                                    alt=""
                                    className="size-full object-cover"
                                  />
                                </div>
                                <div className="h-64 w-44 overflow-hidden rounded-lg">
                                  <img
                                    src="/hero2.jpg"
                                    alt=""
                                    className="size-full object-cover"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Mobile / Tablet Layout */}
                      <div className="lg:hidden mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
                        <div className="h-40 w-full overflow-hidden rounded-lg">
                          <img
                            src="/hero-1.jpg"
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="h-40 w-full overflow-hidden rounded-lg">
                          <img
                            src="/hero-2.jpg"
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="h-40 w-full overflow-hidden rounded-lg">
                          <img
                            src="/hero-3.jpg"
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="h-40 w-full overflow-hidden rounded-lg">
                          <img
                            src="/hero-4.jpg"
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="h-40 w-full overflow-hidden rounded-lg">
                          <img
                            src="/hero-5.jpg"
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="h-40 w-full overflow-hidden rounded-lg">
                          <img
                            src="/hero1.jpg"
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="h-40 w-full overflow-hidden rounded-lg">
                          <img
                            src="/hero2.jpg"
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Button */}
                      <div className="mt-6">
                        <button
                          onClick={() => {
                            const section = document.getElementById("products");
                            section?.scrollIntoView({ behavior: "smooth" });
                          }}
                          className="cursor-pointer inline-block rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-center font-medium text-white hover:bg-indigo-700"
                        >
                          To Explore
                        </button>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="about" className="pt-40 px-4 sm:px-6 lg:px-20">
                  <div className="text-center mb-10">
                    <h1 className="text-2xl sm:text-3xl font-bold mb-3">
                      About Us
                    </h1>
                    <p className="text-gray-700 text-sm sm:text-base max-w-2xl mx-auto">
                      Based on our rich expertise in this area for more than 11
                      years,we have established long-term cooperation
                      partnerships with many customers covering North
                      America,South America,Europe and Asia. All of our products
                      comply with international quality standards and are
                      greatly appreciated throughout the world.
                    </p>
                  </div>

                  <img
                    src="/banner-bg.jpg"
                    alt="Banner About"
                    className="w-full h-64 sm:h-80 object-cover rounded-lg"
                  />
                </section>

                <section id="products" className="pt-20">
                  <ProductList onAddToCart={handleAddToCart} />
                </section>

                <section id="contact" className="pt-20">
                  {/*--blog--*/}
                  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Title */}
                    <div className="flex justify-between items-center mb-8">
                      <h2 className="text-2xl font-bold">Explore our blog</h2>
                      <a className="text-indigo-600 flex items-center gap-1 hover:underline">
                        <span>View All</span>
                        {/* ion-icon bisa diganti React Icon */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </a>
                    </div>

                    {/* Blog Grid */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {blogPosts.map((post) => (
                        <li key={post.id}>
                          <div className="bg-white rounded-lg shadow overflow-hidden">
                            <div className="relative">
                              <img
                                src={post.image}
                                alt={post.alt}
                                className="w-full h-48 object-cover"
                                loading="lazy"
                              />
                              <a className="absolute bottom-2 right-2 bg-indigo-600 text-white px-3 py-1 rounded flex items-center gap-1 text-sm hover:bg-indigo-700">
                                <span>Read more</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={2}
                                  stroke="currentColor"
                                  className="w-4 h-4"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4v16m8-8H4"
                                  />
                                </svg>
                              </a>
                            </div>
                            <div className="p-4">
                              <h3 className="text-lg font-semibold mb-2">
                                <a className="hover:text-indigo-600">
                                  {post.title}
                                </a>
                              </h3>
                              <ul className="flex flex-wrap gap-2 text-sm text-gray-500">
                                <li>
                                  {new Date(post.date).toLocaleDateString()}
                                </li>
                                <li>by {post.author}</li>
                                <li>in {post.category}</li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/*--contact--*/}
                  <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
                    <div className="bg-gray-200 rounded-lg shadow-lg p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
                      {/* Content */}
                      <div className="text-center sm:text-left">
                        <h2 className="text-2xl font-bold mb-2">
                          Our Newsletter
                        </h2>
                        <p className="text-gray-600">
                          Subscribe our newsletter and get discount 50% off
                        </p>
                      </div>

                      {/* Form */}
                      <form
                        onSubmit={handleSubmit}
                        className="flex w-full sm:w-auto gap-2"
                      >
                        <input
                          type="email"
                          name="email_address"
                          placeholder="Your email address"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="flex-1 px-4 py-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <button
                          type="submit"
                          aria-label="subscribe"
                          className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors flex items-center justify-center"
                        >
                          {/* Arrow icon */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </button>
                      </form>
                    </div>
                  </div>
                  {/*--footer--*/}
                  <footer className="text-gray-800 py-12">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                      {/* Top Section */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                        {/* Brand */}
                        <div>
                          <a className="text-2xl font-bold text-black mb-4 inline-block">
                            Zaniture
                          </a>
                          <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                              {/* Location Icon */}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 11c1.5 0 2.7-1.2 2.7-2.7S13.5 5.6 12 5.6 9.3 6.8 9.3 8.3 10.5 11 12 11z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 21s-6-5.33-6-10c0-3.31 2.69-6 6-6s6 2.69 6 6c0 4.67-6 10-6 10z"
                                />
                              </svg>
                              <address className="not-italic">
                                Zaniture, Chicago, USA 2023
                              </address>
                            </li>
                            <li className="flex items-center gap-2">
                              {/* Phone Icon */}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M3 5a2 2 0 012-2h3.28a2 2 0 011.94 1.5l.72 2.88a2 2 0 01-.45 2.1l-2.2 2.2a16 16 0 006.22 6.22l2.2-2.2a2 2 0 012.1-.45l2.88.72a2 2 0 011.5 1.94V19a2 2 0 01-2 2h-1C7.82 21 3 16.18 3 10V5z"
                                />
                              </svg>
                              <a
                                href="tel:+1234567890"
                                className="hover:text-blue-800"
                              >
                                +1234567890
                              </a>
                            </li>
                            <li className="flex gap-3 mt-2">
                              {/* Social Icons */}
                              <a className="hover:text-sky-600">
                                <svg
                                  className="w-5 h-5"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M22 12a10 10 0 10-11 9.95V15h-3v-3h3v-2c0-3 1.8-4.7 4.5-4.7 1.3 0 2.6.2 2.6.2v3H15c-1.5 0-2 .9-2 1.9v2h3.4l-.4 3H13v6.95A10 10 0 0022 12z" />
                                </svg>
                              </a>
                              <a className="hover:text-sky-600">
                                <svg
                                  className="w-5 h-5"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M23 3a10.9 10.9 0 01-3.14.86A4.48 4.48 0 0022.4.36a9.07 9.07 0 01-2.88 1.1A4.52 4.52 0 0016.88 0c-2.5 0-4.52 2-4.52 4.5 0 .35.04.7.1 1.03-3.76-.2-7.1-1.97-9.33-4.67a4.48 4.48 0 00-.61 2.27c0 1.57.8 2.96 2.02 3.77a4.52 4.52 0 01-2.05-.57v.06c0 2.2 1.57 4.05 3.64 4.46a4.5 4.5 0 01-2.04.08c.58 1.8 2.25 3.12 4.23 3.16A9.06 9.06 0 010 19.54a12.78 12.78 0 006.92 2.03c8.3 0 12.84-6.87 12.84-12.83 0-.2 0-.42-.01-.63A9.22 9.22 0 0023 3z" />
                                </svg>
                              </a>
                              <a className="hover:text-sky-600">
                                <svg
                                  className="w-5 h-5"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M22.5 3h-21a1.5 1.5 0 00-1.5 1.5v15a1.5 1.5 0 001.5 1.5h21a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0022.5 3zM12 18.75a6.75 6.75 0 110-13.5 6.75 6.75 0 010 13.5zm0-11.25a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm6-1.5a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0z" />
                                </svg>
                              </a>
                            </li>
                          </ul>
                        </div>

                        {/* Footer Links */}
                        <div>
                          <p className="font-semibold mb-2">
                            Help & Information
                          </p>
                          <ul className="space-y-1">
                            <li>
                              <a className="hover:text-white">
                                Help & Contact Us
                              </a>
                            </li>
                            <li>
                              <a className="hover:text-white">
                                Returns & Refunds
                              </a>
                            </li>
                            <li>
                              <a className="hover:text-white">Online Stores</a>
                            </li>
                            <li>
                              <a className="hover:text-white">
                                Terms & Conditions
                              </a>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <p className="font-semibold mb-2">About Us</p>
                          <ul className="space-y-1">
                            <li>
                              <a className="hover:text-white">About Us</a>
                            </li>
                            <li>
                              <a className="hover:text-white">What We Do</a>
                            </li>
                            <li>
                              <a className="hover:text-white">FAQ Page</a>
                            </li>
                            <li>
                              <a className="hover:text-white">Contact Us</a>
                            </li>
                          </ul>
                        </div>

                        {/* Newsletter */}
                        <div>
                          <p className="font-semibold mb-2">Newsletter</p>
                          <form
                            onSubmit={(e) => {
                              e.preventDefault();
                              alert(`Subscribed: ${email}`);
                              setEmail("");
                            }}
                            className="flex gap-2 mb-4"
                          >
                            <input
                              type="email"
                              placeholder="Your email address"
                              required
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                            <button
                              type="submit"
                              className="bg-indigo-600 px-3 py-2 rounded-md hover:bg-indigo-700 text-white flex items-center"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-5 h-5"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                              </svg>
                            </button>
                          </form>
                          <div className="flex flex-wrap gap-2 text-sm">
                            <a className="hover:text-white">Term & Condition</a>
                            <a className="hover:text-white">Policy</a>
                            <a className="hover:text-white">Map</a>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Section */}
                      <div className="border-t border-gray-700 pt-4 text-center text-sm">
                        <p>
                          &copy; 2023 All Rights Reserved by{" "}
                          <a className="hover:text-white">codewithzaza</a>.
                        </p>
                      </div>
                    </div>
                  </footer>
                </section>
              </div>
            }
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cart}
                onRemove={handleRemoveFromCart}
                onDecrease={handleDecreaseQuantity}
                onIncrease={handleIncreaseQuantity}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
