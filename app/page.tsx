'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <main className="bg-[#FAFDF3] text-[#1D1F1E]">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center text-center px-6 pt-12 pb-20 sm:px-8 sm:pt-16 sm:pb-24"
      >
        <p className="max-w-md text-sm mb-3 sm:text-base">
          Transform your skincare routine with premium products that restore,
          protect, and enhance your natural glow every day.
        </p>
        <h1 className="text-4xl font-bold leading-tight mb-4 sm:text-5xl">
          GLOW<br />NATURALLY
        </h1>
        <div className="relative w-64 h-80 mb-6 sm:w-80 sm:h-96">
          <Image
            src="/images/women1.png"
            alt="Hero"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <button className="bg-black text-white px-5 py-2 rounded-full text-sm sm:px-6 sm:py-3 sm:text-base">
          Shop Now
        </button>
      </motion.section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-6 py-10 text-center sm:px-8 sm:py-16"
      >
        <h2 className="text-2xl font-semibold mb-4 sm:text-3xl">
          Your Skin Deserves the Best Care
        </h2>
        <ul className="text-left max-w-xl mx-auto space-y-4 sm:text-lg">
          <li><strong>01 Bio Ingredients</strong> – Healthy, radiant skin powered by nature.</li>
          <li><strong>02 Everything Natural</strong> – Perfect for your unique needs.</li>
          <li><strong>03 All Handmade</strong> – Pure care, pure glow.</li>
        </ul>
      </motion.section>

      {/* Product Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-6 py-10 sm:px-8 sm:py-16"
      >
        <h3 className="text-center text-xl font-medium mb-8 sm:text-2xl">
          Best Selling Products
        </h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ProductCard img="/images/women4.png" title="ALYA SKIN CLEANSER" price="$20.00" />
          <ProductCard img="/images/women5.png" title="RITUAL OF SAKURA" price="$14.99" />
          <ProductCard img="/images/women6.png" title="THE BODY LOTION" price="$18.99" />
        </div>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-6 py-10 sm:px-8 sm:py-16"
      >
        <h4 className="text-xl font-medium text-center mb-6 sm:text-2xl">
          Answers to Your Skincare Questions
        </h4>
        <div className="max-w-xl mx-auto space-y-4 sm:text-lg">
          <FAQItem q="Are your products safe for sensitive skin?" />
          <FAQItem q="Are your products cruelty-free?" />
          <FAQItem q="What’s your return policy?" />
          <FAQItem q="Do you ship internationally?" />
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-[#1D1F1E] text-white text-center py-6 mt-10 sm:py-8">
        <p>Join The Skincare Community Now.</p>
        <p className="mt-2">Get in Touch: contact.skincare.com</p>
      </footer>
    </main>
  );
}

function ProductCard({ img, title, price }: { img: string; title: string; price: string }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow text-center">
      <div className="relative w-full h-64 mb-4">
        <Image src={img} alt={title} layout="fill" objectFit="contain" className="rounded-lg" />
      </div>
      <h5 className="font-semibold mb-1">{title}</h5>
      <p className="text-sm text-gray-500">From {price}</p>
    </div>
  );
}

function FAQItem({ q }: { q: string }) {
  return (
    <div className="border-b pb-2">
      <p className="font-medium">+ {q}</p>
    </div>
  );
}
