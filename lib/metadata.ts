import type { Metadata } from "next";
import { site } from "@/lib/site";

type PageMetadata = {
  title: string;
  description: string;
  path?: string;
};

export function createPageMetadata({
  title,
  description,
  path = "/"
}: PageMetadata): Metadata {
  const canonical = new URL(path, site.url).toString();

  return {
    title,
    description,
    alternates: {
      canonical
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: site.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: `${site.person.name} - ${site.person.title}`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/opengraph-image"]
    }
  };
}

