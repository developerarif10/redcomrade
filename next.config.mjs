/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
        port: "",
        pathname: "/shadcn.png",
      },
      {
        protocol: "https",
        hostname: "dummyimage.com",
        port: "",
        pathname: "/720x600",
      },
    ],
  },
};

export default nextConfig;
