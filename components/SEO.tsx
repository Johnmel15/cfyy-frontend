import Head from "next/head";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogDescription?: string;
}

export default function SEO({
  title = "Caring 4 You and Yours",
  description = "Nursing Care That Comes to You, Let us provide you with high-quality care! We are licensed, bonded and insured.",
  keywords = "Nursing Care, Caregiving, Care Plan, Afforadable Care, Health Aid",
  ogImage = "/images/cffy.png",
  ogDescription = "Nursing Care That Comes to You.",
}: SEOProps) {
  const fullTitle = `${title} | Caring 4 You and Yours`;

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Caring 4 You and Yours" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content="website" />
      <meta name="robots" content="index, follow" />
    </Head>
  );
}
