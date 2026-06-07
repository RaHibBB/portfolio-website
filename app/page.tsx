import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { createPageMetadata } from "@/lib/metadata";
import { site } from "@/lib/site";

export const metadata = createPageMetadata({
  title: `${site.person.name} | ${site.person.title}`,
  description: site.description,
  path: "/"
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.person.name,
      alternateName: site.person.displayName,
      url: site.url,
      email: `mailto:${site.person.email}`,
      jobTitle: site.person.title,
      worksFor: {
        "@type": "Organization",
        name: "Greatness Digital"
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: site.person.location
      },
      sameAs: site.socials
        .filter((social) => social.href.startsWith("http"))
        .map((social) => social.href)
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      name: site.name,
      url: site.url,
      inLanguage: "en-US",
      description: site.description,
      author: {
        "@id": `${site.url}/#person`
      }
    }
  ]
};

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}

