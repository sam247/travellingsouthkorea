/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/travel-tips/korean-sexuality", destination: "/korean-sexuality", permanent: true },
      { source: "/travel-tips/gonjiam-haunted-asylum", destination: "/gonjiam-haunted-asylum", permanent: true },
      { source: "/gonjiam-asylum", destination: "/gonjiam-haunted-asylum", permanent: true },
      { source: "/things-to-do-in-itaewon", destination: "/south-korea/seoul/itaewon/category/things-to-do", permanent: true },
      { source: "/navigate-seoul-the-ultimate-mrt-map-guide", destination: "/travel-tips/seoul-subway-guide", permanent: true },
      { source: "/the-evolution-of-k-pop-a-journey-through-time", destination: "/travel-tips/k-pop-history", permanent: true },
      { source: "/10-most-handsome-kpop-male-idols-2025", destination: "/travel-tips/k-pop-male-idols", permanent: true },
      { source: "/travel-tips/most-beautiful-korean-actresses", destination: "/most-beautiful-korean-actresses", permanent: true },
      { source: "/where-to-shop-for-streetwear-in-hongdae", destination: "/south-korea/seoul/guides/streetwear-hongdae", permanent: true },
      { source: "/south-korea/seoul/guides/pc-bang-gaming-seoul", destination: "/top-pc-bang-internet-cafes-in-seoul-for-gaming", permanent: true },
      { source: "/travel-tips/top-pc-bang-internet-cafes-in-seoul-for-gaming", destination: "/top-pc-bang-internet-cafes-in-seoul-for-gaming", permanent: true },
      { source: "/what-is-sansachun", destination: "/travel-tips/sansachun-drink-guide", permanent: true },
      { source: "/travel-tips/south-korean-terms-of-endearment", destination: "/south-korean-terms-of-endearment", permanent: true },
      { source: "/travel-tips/arex-train-schedule", destination: "/arex-train-schedule", permanent: true },
      { source: "/travel-tips/arex-airport-train-guide", destination: "/arex-train-schedule", permanent: true },
      { source: "/travel-tips/buying-bedding-in-south-korea", destination: "/buying-bedding-in-south-korea", permanent: true },
      { source: "/travel-tips/seoul-subway-cheat-sheet", destination: "/seoul-subway-a-cheat-sheet", permanent: true },
      { source: "/travel-tips/jeju-loveland", destination: "/jeju-loveland", permanent: true },
      { source: "/travel-tips/how-bad-is-air-quality-in-south-korea", destination: "/how-bad-is-air-quality-in-south-korea", permanent: true },
      { source: "/invest-smart-top-korean-won-currency-etfs-unveiled", destination: "/travel-tips/korean-won-etf-guide", permanent: true },
      { source: "/travel-tips/most-popular-korean-bikini-models-in-2025", destination: "/most-popular-korean-bikini-models-in-2025", permanent: true },
      { source: "/culture/most-popular-korean-bikini-models-2025", destination: "/most-popular-korean-bikini-models-in-2025", permanent: true },
      { source: "/most-popular-korean-bikini-models-in-2024", destination: "/most-popular-korean-bikini-models-in-2025", permanent: true },
      { source: "/most-popular-korean-bikini-models-in-2023", destination: "/most-popular-korean-bikini-models-in-2025", permanent: true },
      { source: "/most-popular-korean-bikini-models-in-2022", destination: "/most-popular-korean-bikini-models-in-2025", permanent: true },
      { source: "/travel-tips/top-korean-plus-sized-models-in-2025", destination: "/top-korean-plus-sized-models-in-2025", permanent: true },
      { source: "/top-korean-plus-sized-models-in-2024", destination: "/top-korean-plus-sized-models-in-2025", permanent: true },
      { source: "/top-korean-plus-sized-models-in-2023", destination: "/top-korean-plus-sized-models-in-2025", permanent: true },
    ];
  },
  async rewrites() {
    return [
      { source: "/arex-train-schedule", destination: "/travel-tips/arex-train-schedule" },
      { source: "/buying-bedding-in-south-korea", destination: "/travel-tips/buying-bedding-in-south-korea" },
      { source: "/seoul-subway-a-cheat-sheet", destination: "/travel-tips/seoul-subway-cheat-sheet" },
      { source: "/jeju-loveland", destination: "/travel-tips/jeju-loveland" },
      { source: "/korean-sexuality", destination: "/travel-tips/korean-sexuality" },
      { source: "/gonjiam-haunted-asylum", destination: "/travel-tips/gonjiam-haunted-asylum" },
      {
        source: "/top-pc-bang-internet-cafes-in-seoul-for-gaming",
        destination: "/travel-tips/top-pc-bang-internet-cafes-in-seoul-for-gaming",
      },
      {
        source: "/south-korean-terms-of-endearment",
        destination: "/travel-tips/south-korean-terms-of-endearment",
      },
      {
        source: "/breweries-in-south-korea",
        destination: "/travel-tips/breweries-in-south-korea",
      },
      {
        source: "/what-is-maeshilju",
        destination: "/travel-tips/what-is-maeshilju",
      },
      {
        source: "/most-beautiful-korean-actresses",
        destination: "/travel-tips/most-beautiful-korean-actresses",
      },
      {
        source: "/how-bad-is-air-quality-in-south-korea",
        destination: "/travel-tips/how-bad-is-air-quality-in-south-korea",
      },
      {
        source: "/most-popular-korean-bikini-models-in-2025",
        destination: "/travel-tips/most-popular-korean-bikini-models-in-2025",
      },
      {
        source: "/top-korean-plus-sized-models-in-2025",
        destination: "/travel-tips/top-korean-plus-sized-models-in-2025",
      },
    ];
  },
};

export default nextConfig;
