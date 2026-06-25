import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { siteConfig } from '@/config/site';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/assets/og-image.svg',
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} portfolio preview`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} | ${siteConfig.title}`,
    description: siteConfig.description,
    images: ['/assets/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetBrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased" suppressHydrationWarning>
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            (function () {
              try {
                var storedTheme = localStorage.getItem('theme');
                var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                var theme = storedTheme || (prefersDark ? 'dark' : 'light');
                document.documentElement.classList.toggle('dark', theme === 'dark');
                document.documentElement.dataset.theme = theme;
              } catch (_) {
                document.documentElement.dataset.theme = 'light';
              }
            })();
          `}
        </Script>
        <Script id="extension-attribute-cleanup" strategy="beforeInteractive">
          {`
            (function () {
              var ATTRS = ['bis_skin_checked','bis_register','data-demoway-document-id'];

              function stripAttrs(root) {
                if (!root || !root.attributes) return;
                for (var j = root.attributes.length - 1; j >= 0; j--) {
                  var name = root.attributes[j].name;
                  if (ATTRS.indexOf(name) !== -1 || name.indexOf('__processed_') === 0) {
                    root.removeAttribute(name);
                  }
                }
              }

              function scan(root) {
                if (!root) return;
                stripAttrs(root);
                var nodes = root.querySelectorAll ? root.querySelectorAll('*') : [];
                for (var i = 0; i < nodes.length; i++) stripAttrs(nodes[i]);
              }

              // Strip immediately
              scan(document.documentElement);

              // Watch dynamically — catches attributes before React hydrates
              if (typeof MutationObserver !== 'undefined') {
                var obs = new MutationObserver(function (mutations) {
                  for (var i = 0; i < mutations.length; i++) {
                    var m = mutations[i];
                    if (m.type === 'attributes') stripAttrs(m.target);
                    if (m.addedNodes) {
                      for (var k = 0; k < m.addedNodes.length; k++) {
                        if (m.addedNodes[k].nodeType === 1) scan(m.addedNodes[k]);
                      }
                    }
                  }
                });
                obs.observe(document.documentElement, {
                  attributes: true,
                  childList: true,
                  subtree: true,
                });
              }
            })();
          `}
        </Script>
        <div className="grid-pattern fixed inset-0 -z-10 opacity-80" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
