/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://webbriks.com', // Your website URL
    generateRobotsTxt: true, // Generates a robots.txt file
    sitemapSize: 5000,
    exclude: ["/admin", "/dashboard"], // Exclude private pages if needed
  };
  