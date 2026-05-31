import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Products } from "@/components/site/Products";
import { Why } from "@/components/site/Why";
import { Gallery } from "@/components/site/Gallery";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Labbaik International — Premium Wet Blue Leather Supplier" },
      { name: "description", content: "Chrome-tanned wet blue hides — bovine, buffalo, goat and sheep — supplied to global tanneries with reliable grading and full export documentation." },
      { property: "og:title", content: "Labbaik International — Premium Wet Blue Leather Supplier" },
      { property: "og:description", content: "Premium Wet Blue Supplier for Global Tanneries. Hands-on quality, consistent grading, end-to-end export coordination." },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Labbaik International",
          description: "Premium Wet Blue Supplier for Global Tanneries",
          email: "info@labbaikglobal.in",
          telephone: "+91-8637-67-8637",
          address: {
            "@type": "PostalAddress",
            streetAddress: "26, Tannery Street, Peria Agraharam",
            addressLocality: "Erode",
            postalCode: "638005",
            addressRegion: "Tamil Nadu",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <About />
      <Products />
      <Why />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingActions />
    </main>
  );
}
