/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/things-to-do-in-itaewon", destination: "/south-korea/seoul/guides/things-to-do-itaewon", permanent: true },
      { source: "/navigate-seoul-the-ultimate-mrt-map-guide", destination: "/travel-tips/seoul-subway-guide", permanent: true },
      { source: "/the-evolution-of-k-pop-a-journey-through-time", destination: "/travel-tips/k-pop-history", permanent: true },
      { source: "/10-most-handsome-kpop-male-idols-2025", destination: "/travel-tips/k-pop-male-idols", permanent: true },
      { source: "/where-to-shop-for-streetwear-in-hongdae", destination: "/south-korea/seoul/guides/streetwear-hongdae", permanent: true },
      { source: "/south-korea/seoul/guides/pc-bang-gaming-seoul", destination: "/top-pc-bang-internet-cafes-in-seoul-for-gaming", permanent: true },
      { source: "/travel-tips/top-pc-bang-internet-cafes-in-seoul-for-gaming", destination: "/top-pc-bang-internet-cafes-in-seoul-for-gaming", permanent: true },
      { source: "/what-is-sansachun", destination: "/travel-tips/sansachun-drink-guide", permanent: true },
      { source: "/travel-tips/arex-train-schedule", destination: "/arex-train-schedule", permanent: true },
      { source: "/travel-tips/arex-airport-train-guide", destination: "/arex-train-schedule", permanent: true },
      { source: "/travel-tips/buying-bedding-in-south-korea", destination: "/buying-bedding-in-south-korea", permanent: true },
      { source: "/invest-smart-top-korean-won-currency-etfs-unveiled", destination: "/travel-tips/korean-won-etf-guide", permanent: true },
    ];
  },
  async rewrites() {
    return [
      { source: "/arex-train-schedule", destination: "/travel-tips/arex-train-schedule" },
      { source: "/buying-bedding-in-south-korea", destination: "/travel-tips/buying-bedding-in-south-korea" },
      {
        source: "/top-pc-bang-internet-cafes-in-seoul-for-gaming",
        destination: "/travel-tips/top-pc-bang-internet-cafes-in-seoul-for-gaming",
      },
    ];
  },
};

export default nextConfig;
