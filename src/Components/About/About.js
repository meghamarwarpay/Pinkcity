// pages/about.js

import Image from "next/image";
import img from '../../assets/pinkcityimg/productsmarque/about.jpg'

export default function About() {
  return (
    <>
    <div className="container py-5">
    <div className="row align-items-center">
            {/* Left Column (Image) */}
            <div className="col-md-6">
              <div className="image-container mb-4 mb-md-0">
                <Image
                  src={img}
                  alt="About Us"
                  className="img-fluid rounded shadow-lg"
                />
              </div>
            </div>
    
            {/* Right Column (Content) */}
            <div className="col-md-6">
              <h1 className="text-pink mb-3">About PinkCity Infotech Solution Pvt Ltd.</h1>
              <p className="text-muted ">
                At PinkCity Infotech Solution Pvt Ltd., we aim to provide a seamless shopping experience for our customers, offering everything from gadgets to fashion and home essentials. With a customer-first approach, we have revolutionized the online shopping experience, combining affordability, quality, and convenience all in one platform.
              </p>
    
              <div className="vision mb-4">
                <h3 className="text-dark">Our Vision</h3>
                <p className="text-muted">
                  Our vision is to be the leading online platform that offers a diverse range of products, ensuring quality, convenience, and satisfaction for all our customers. We aspire to continuously improve, innovate, and provide the best shopping experience, empowering our customers with the tools to live their best lives.
                </p>
              </div>
    
              <div className="mission mb-4">
                <h3 className="text-dark">Our Mission</h3>
                <p className="text-muted">
                  We are committed to enhancing the lives of our customers by delivering top-quality products at affordable prices. Our mission is to bridge the gap between the best brands and our customers, ensuring that every purchase brings joy and satisfaction. We focus on making shopping easier, faster, and more enjoyable.
                </p>
              </div>
    
              <div className="why-choose-us">
                <h3 className="text-dark mb-3">Why Choose Us?</h3>
                <ul className="list-unstyled">
                  <li className="mb-2"><i className="bi bi-check-circle text-success"></i> Wide Selection of Products</li>
                  <li className="mb-2"><i className="bi bi-check-circle text-success"></i> Quality Assurance from Trusted Brands</li>
                  <li className="mb-2"><i className="bi bi-check-circle text-success"></i> Fast, Reliable, and Secure Delivery</li>
                  <li className="mb-2"><i className="bi bi-check-circle text-success"></i> Exceptional Customer Support, 24/7</li>
                  <li className="mb-2"><i className="bi bi-check-circle text-success"></i> Easy Returns and Hassle-free Refunds</li>
                  <li><i className="bi bi-check-circle text-success"></i> Exclusive Deals and Discounts for Loyal Customers</li>
                </ul>
              </div>
              
           
            </div>
          </div>
    <div className="bg-gray-50 py-8 px-6 sm:px-10 md:px-20">
    

      <header className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-pink-600">About PinkCIty Infotech Solution Pvt Ltd.</h1>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-pink-500 mb-4">Our Vision</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          At PinkCIty Infotech Solution Pvt Ltd., our vision is to provide a seamless shopping experience for all your needs, whether it’s the latest gadgets, trendy fashion, home essentials, or more. We aim to be your one-stop destination for all things shopping.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-pink-500 mb-4">Why Choose Us?</h2>
        <ul className="space-y-4 text-lg text-gray-700">
          <li className="flex items-center">
            <span className="mr-2 text-pink-600">✔</span> <strong>Wide Selection:</strong> From electronics to fashion, we have it all.
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-pink-600">✔</span> <strong>Quality Assurance:</strong> We ensure the highest quality products for our customers.
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-pink-600">✔</span> <strong>Fast Delivery:</strong> Quick and reliable shipping options to get your order to you in no time.
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-pink-600">✔</span> <strong>Customer Support:</strong> Our team is here to assist you every step of the way, ensuring a hassle-free shopping experience.
          </li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-pink-500 mb-4">Our Story</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          PinkCIty Infotech Solution Pvt Ltd. started with a simple mission: to make shopping online easier, faster, and more enjoyable for everyone. From humble beginnings, we’ve grown into a trusted platform offering millions of products to customers around the world.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-pink-500 mb-4">Our Commitment</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          We are committed to providing our customers with an exceptional online shopping experience. Our goal is not just to sell products, but to make every shopping experience convenient, personalized, and enjoyable for you.
        </p>
      </section>
      
    </div>
    </div></>
  );
}
