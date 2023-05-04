// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
export const apiEndpoint = `https://${process.env.PRISMIC_ID}.cdn.prismic.io/api/v2`;

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = process.env.PRISMIC_ACCESS_TOKEN;

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
  if (doc.type === "home_page") return "/";
  else if (doc.type === "about_page") return `/about`;
  else if (doc.type === "why_us_page") return `/why-us`;
  else if (doc.type === "services_page") return `/services`;
  else if (doc.type === "partners_page") return `/partners`;
  else if (doc.type === "contact_page") return `/contact`;
  else if (doc.type === "blog_page") return `/blogs`;
  else if (doc.type === "privacy_policy_page") return `/privacy-policy`;
  else if (doc.type === "service_page") return `/${doc.uid}`;
  else if (doc.type === "blog_post") return `/blog/${doc.uid}`;
  return "/";
};

// Additional helper function for Next/Link component
export const hrefResolver = (doc) => {
  if (doc.type === "home_page") return "/";
  else if (doc.type === "about_page") return `/about`;
  else if (doc.type === "why_us_page") return `/why-us`;
  else if (doc.type === "services_page") return `/services`;
  else if (doc.type === "partners_page") return `/partners`;
  else if (doc.type === "contact_page") return `/contact`;
  else if (doc.type === "blog_page") return `/blogs`;
  else if (doc.type === "privacy_policy_page") return `/privacy-policy`;
  else if (doc.type === "service_page") return `/$[slug]`;
  else if (doc.type === "blog_post") return `/blog/[slug]`;
  return "/";
};
