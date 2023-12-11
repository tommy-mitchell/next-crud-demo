/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
	reactStrictMode: true,

	/**
	 * If you are using `appDir` then you must comment the below `i18n` config out.
	 *
	 * @see https://github.com/vercel/next.js/issues/41980
	 */
	i18n: {
		locales: ["en"],
		defaultLocale: "en",
	},

	// https://github.com/webpack/webpack/issues/13290#issuecomment-1188760779
	webpack: (webpackConfig, { webpack }) => {
		webpackConfig.plugins.push(
			new webpack.NormalModuleReplacementPlugin(
				/^node:/, // @ts-expect-error
				(resource) => {
					resource.request = resource.request.replace(/^node:/, "");
				},
			),
		);

		return webpackConfig;
	},
};

export default config;
