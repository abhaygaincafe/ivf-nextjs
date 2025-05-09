
import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterCreator?: string;
  twitterSite?: string;
  structuredData?: Record<string, any>;
  whatsappMeta?: boolean;
  alternateLanguages?: {
    [key: string]: string;
  };
  cityName?: string;
}

// Define interfaces for meta tags to fix TypeScript errors
interface NameContentMeta {
  name: string;
  content: string;
}

interface PropertyContentMeta {
  property: string;
  content: string;
}

type MetaTag = NameContentMeta | PropertyContentMeta;

/**
 * SEOHead Component
 * 
 * Provides comprehensive SEO metadata for any page
 * To use: Include this component at the top of each page component
 */
const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords = '',
  canonicalUrl,
  ogImage = 'https://rituivf.com/opengraph-image-p98pqg.png',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  twitterCreator = '@RituIVF',
  twitterSite = '@RituIVF',
  structuredData,
  whatsappMeta = true,
  alternateLanguages,
  cityName
}) => {
  // Ensure title doesn't exceed recommended length
  const formattedTitle = title.length > 60 ? `${title.substring(0, 57)}...` : title;
  
  // Ensure description doesn't exceed recommended length
  const formattedDescription = description.length > 160 ? `${description.substring(0, 157)}...` : description;

  // Convert structuredData to a safe string
  const safeStructuredData = React.useMemo(() => {
    if (!structuredData) return null;

    try {
      // Use our safer JSON stringification approach
      return safeJsonStringify(structuredData);
    } catch (error) {
      console.error('Failed to process structuredData:', error);
      return null;
    }
  }, [structuredData]);

  // Create safe alternateLanguages object
  const safeAlternateLanguages = React.useMemo(() => {
    if (!alternateLanguages) return null;
    
    try {
      const safeLanguages: Record<string, string> = {};
      
      Object.entries(alternateLanguages).forEach(([key, value]) => {
        if (typeof key === 'string' && typeof value === 'string') {
          safeLanguages[key] = value;
        }
      });
      
      return safeLanguages;
    } catch (error) {
      console.error('Failed to process alternateLanguages:', error);
      return null;
    }
  }, [alternateLanguages]);

  // Prepare a safe object for helmet to avoid symbols
  const helmetTitle = formattedTitle;
  const helmetMeta = React.useMemo(() => {
    // Create an array of meta tags that is guaranteed to be safe for React Helmet
    const metaTags: MetaTag[] = [
      { name: "description", content: formattedDescription },
    ];
    
    if (keywords) {
      metaTags.push({ name: "keywords", content: keywords });
    }
    
    if (cityName) {
      metaTags.push(
        { name: "geo.placename", content: cityName },
        { name: "geo.region", content: "IN-RJ" },
        { name: "geo.position", content: "26.9124;75.7873" },
        { name: "ICBM", content: "26.9124, 75.7873" }
      );
    }
    
    // Open Graph / Facebook
    metaTags.push(
      { property: "og:type", content: ogType },
      { property: "og:title", content: helmetTitle },
      { property: "og:description", content: formattedDescription },
      { property: "og:image", content: ogImage }
    );
    
    if (ogImage) {
      metaTags.push(
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" }
      );
    }
    
    if (canonicalUrl) {
      metaTags.push({ property: "og:url", content: canonicalUrl });
    }
    
    metaTags.push({ property: "og:site_name", content: "Ritu IVF" });
    
    // Twitter
    metaTags.push(
      { name: "twitter:card", content: twitterCard },
      { name: "twitter:title", content: helmetTitle },
      { name: "twitter:description", content: formattedDescription },
      { name: "twitter:image", content: ogImage },
      { name: "twitter:site", content: twitterSite },
      { name: "twitter:creator", content: twitterCreator }
    );
    
    if (canonicalUrl) {
      metaTags.push({ name: "twitter:url", content: canonicalUrl });
    }
    
    // WhatsApp rich preview metadata
    if (whatsappMeta) {
      metaTags.push(
        { property: "og:image:alt", content: `${helmetTitle} - Ritu IVF` },
        { property: "og:locale", content: "en_IN" },
        { property: "og:locale:alternate", content: "hi_IN" },
        { property: "og:image:type", content: "image/jpeg" }
      );
    }
    
    return metaTags;
  }, [
    formattedDescription, 
    keywords, 
    cityName, 
    ogType, 
    helmetTitle, 
    ogImage, 
    canonicalUrl, 
    twitterCard, 
    twitterSite, 
    twitterCreator, 
    whatsappMeta
  ]);
  
  // Safe links
  const helmetLinks = React.useMemo(() => {
    const links = [];
    
    if (canonicalUrl) {
      links.push({ rel: "canonical", href: canonicalUrl });
    }
    
    // Alternate language versions
    if (safeAlternateLanguages) {
      Object.entries(safeAlternateLanguages).forEach(([lang, url]) => {
        links.push({
          rel: "alternate",
          hrefLang: lang,
          href: url
        });
      });
    }
    
    return links;
  }, [canonicalUrl, safeAlternateLanguages]);
  
  return (
    <Helmet
      title={helmetTitle}
      meta={helmetMeta}
      link={helmetLinks}
    >
      {/* Structured data for rich snippets */}
      {safeStructuredData && (
        <script type="application/ld+json">{safeStructuredData}</script>
      )}
    </Helmet>
  );
};

/**
 * A safer version of JSON.stringify that handles problematic values like
 * Symbols, functions, circular references, etc.
 */
function safeJsonStringify(data: any): string {
  const seen = new WeakSet();
  
  return JSON.stringify(data, (key, value) => {
    // Handle circular references
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return '[Circular Reference]';
      }
      seen.add(value);
    }
    
    // Convert symbols to strings
    if (typeof value === 'symbol') {
      return String(value);
    }
    
    // Skip functions
    if (typeof value === 'function') {
      return undefined;
    }
    
    // Handle dates (convert to ISO string)
    if (value instanceof Date) {
      return value.toISOString();
    }
    
    return value;
  });
}

export default SEOHead;
