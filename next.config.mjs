// next.config.mjs
import withPlugins from "next-compose-plugins";
import withPWA from "next-pwa";
import typescript from "next-plugin-graphql";
// Import other plugins as needed

const nextConfig = {
  reactStrictMode: true,
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
    // Add other plugins as needed
  ],
  nextConfig
);
