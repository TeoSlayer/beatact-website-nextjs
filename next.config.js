const withPreCompression = require('@moxy/next-pre-compression');
const nextConfig = require('next/config');
module.exports = withPreCompression({ ...nextConfig });