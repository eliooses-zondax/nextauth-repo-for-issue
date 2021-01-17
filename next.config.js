const withMDX = require('@next/mdx')({
	extension: /\.mdx?$/,
	options: {
	  remarkPlugins: [],
	  rehypePlugins: [],
	},
  })

module.exports = withMDX({
	pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
	distDir: "nextjs",
	env: {
		FIREBASE_PROJECT_ID: "FIREBASE_PROJECT_ID",
	},
	experimental: {
		sprFlushToDisk: false,
	},
})
