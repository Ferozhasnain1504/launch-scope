import type { NextConfig } from "next";
import { TURBOPACK_CLIENT_MIDDLEWARE_MANIFEST } from "next/dist/shared/lib/constants";

const nextConfig: NextConfig = {
  typescript : {
    ignoreBuildErrors : true,
  },
  eslint : {
    ignoreDuringBuilds : true,
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns:[
      {
        protocol: 'https',
        hostname: '*',
      }
    ]
  },
  experimental : {
    cacheComponents: true,
  },
  devIndicators : {
    appIsrStatus : true,
    buildActivity : true,
    buildActivityPosition : 'bottom-right',

  }
};

export default nextConfig;
