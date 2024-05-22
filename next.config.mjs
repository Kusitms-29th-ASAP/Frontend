import withPlugins from "next-compose-plugins";
import withPWA from "next-pwa";
import typescript from "next-plugin-graphql";

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    domains: ["kr.object.ncloudstorage.com"],
  },
};

export default withPlugins(
  [
    [
      withPWA,
      {
        pwa: {
          dest: "public",
        },
      },
    ],
    [
      typescript,
      {
        typescriptLoaderOptions: {
          transpileOnly: false,
        },
      },
    ],
  ],
  nextConfig
);
