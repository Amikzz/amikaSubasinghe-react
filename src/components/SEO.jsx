import { Helmet } from "react-helmet-async";

const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = "website",
  schema,
}) => {
  const siteTitle =
    "Amika Subasinghe | Software Engineer & Full-Stack Developer";
  const defaultDescription =
    "Amika Subasinghe, a Full Stack Developer and Software Engineer from Sri Lanka, builds scalable and high-performance web and mobile applications using modern technologies like React, Node.js, Laravel, Flutter, and AWS. Explore his portfolio showcasing projects in web development, API integration, cloud engineering, and responsive UI/UX design.";
  const siteUrl = "https://amikasubasinghe.com.lk";
  const defaultImage = `${siteUrl}/logo.png`;

  const metaTitle = title ? `${title} | Amika Subasinghe` : siteTitle;
  const metaDescription = description || defaultDescription;
  const metaImage = image
    ? image.startsWith("http")
      ? image
      : `${siteUrl}${image}`
    : defaultImage;
  const metaUrl = url
    ? url.startsWith("http")
      ? url
      : `${siteUrl}${url}`
    : siteUrl;

  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Amika Subasinghe",
    url: siteUrl,
    image: defaultImage,
    sameAs: [
      "https://github.com/Start-sys",
      "https://www.linkedin.com/in/amikasubasinghe/",
      "https://www.facebook.com/amika.subasinghe.3",
      "https://www.instagram.com/amika_subasinghe/",
    ],
    jobTitle: "Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance / Self-Employed",
    },
    description: defaultDescription,
  };

  const finalSchema = schema || defaultSchema;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={metaUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:site_name" content="Amika Subasinghe" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />

      {/* Schema.org JSON-LD */}
      <script type="application/ld+json">{JSON.stringify(finalSchema)}</script>
    </Helmet>
  );
};

export default SEO;
