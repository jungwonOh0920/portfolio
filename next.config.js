/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // loader: "imgix",
    // path: "https://s3.us-west-2.amazonaws.com/",
    domains: [
      'www.notion.so',
      's3.us-west-2.amazonaws.com/',
      'images.unsplash.com'
    ]
  }
}

module.exports = nextConfig
