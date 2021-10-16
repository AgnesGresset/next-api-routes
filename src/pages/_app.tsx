import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'

const ApiRouteApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<DefaultSeo
				title='API routes with Next.js'
				description='A mini repo to test API routes with Next.js'
			/>
			<Component {...pageProps} />
		</>
	)
}

export default ApiRouteApp