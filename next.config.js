/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BASE_URL: 'https://api.dictionaryapi.dev/api/v2/entries/en/',
  },
}

module.exports = nextConfig
