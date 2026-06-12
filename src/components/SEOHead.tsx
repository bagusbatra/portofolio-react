import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
}

const SITE_NAME = "Bagus Batra";
const BASE_URL = "https://bagusbatra.dev";
const DEFAULT_OG_IMAGE = "/og-image.svg";

export default function SEOHead({
  title,
  description,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  canonicalUrl,
}: SEOHeadProps) {
  const fullTitle = `${title} | ${SITE_NAME}`;
  const url = canonicalUrl || BASE_URL;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${BASE_URL}${ogImage}`} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${BASE_URL}${ogImage}`} />
    </Helmet>
  );
}
