import "./globals.scss";
import SiteHeader from "@/components/site-header";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata = {
  title: {
    default: "Sandesh Vairagar — AI, software & the work in between",
    template: "%s | Sandesh Vairagar",
  },
  description:
    "Sandesh Vairagar is a third-year Computer Science and Engineering student specializing in Artificial Intelligence, building practical AI, machine learning and full-stack applications.",
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  openGraph: {
    type: "profile",
    title: "Sandesh Vairagar — AI, software & the work in between",
    description: "An evolving journey through creativity, engineering and intelligence.",
    ...(siteUrl ? { images: [{ url: "/assets/sandesh-primary-portrait.jpeg", width: 1254, height: 1254, alt: "Sandesh Vairagar in a dark suit against a black studio background" }] } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandesh Vairagar — AI, software & the work in between",
    description: "An evolving journey through creativity, engineering and intelligence.",
    ...(siteUrl ? { images: ["/assets/sandesh-primary-portrait.jpeg"] } : {}),
  },
  robots: { index: true, follow: true },
};

const personData = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  name: "Sandesh Vairagar — AI, software & the work in between",
  mainEntity: {
    "@type": "Person",
    name: "Sandesh Vairagar",
    jobTitle: "Computer Science and Engineering student specializing in Artificial Intelligence",
    description:
      "Third-year student building applications across generative AI, machine learning, computer vision and full-stack software engineering.",
    email: "mailto:vairagarsandesh45@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pimpri-Chinchwad",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    sameAs: [
      "https://www.linkedin.com/in/sandesh-vairagar/",
      "https://github.com/Sandesh64753",
      "https://leetcode.com/u/Sandesh1548/",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Nutan Maharashtra Institute of Engineering and Technology",
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Instrument+Serif:ital@0;1&family=Space+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        <SiteHeader />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personData).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
