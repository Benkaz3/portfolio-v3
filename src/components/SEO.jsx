// src/components/SEO.js
import { Helmet } from 'react-helmet';

const SEO = ({ seo }) => (
  <Helmet>
    <title>{seo.pageTitle}</title>
    <meta name="description" content={seo.pageDescription} />
    <link rel="canonical" href={seo.canonicalUrl} />
    {seo.nofollow && <meta name="robots" content="nofollow" />}
    {seo.noindex && <meta name="robots" content="noindex" />}
    {seo.shareImages && seo.shareImages.map((image, index) => (
      <meta key={index} property="og:image" content={image.fields.file.url} />
    ))}
  </Helmet>
);

export default SEO;
