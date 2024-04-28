/** @type {import('next').NextConfig} */
// eslint-disable-next-line import/no-extraneous-dependencies
import withBundleAnalyzer from "@next/bundle-analyzer";

const nextConfig = withBundleAnalyzer({
    eslint: {
        dirs: ["."]
    },
    poweredByHeader: false,
    trailingSlash: true,
    basePath: "",
    reactStrictMode: true
});

export default nextConfig;
