import { AppProps } from 'next/app'
import Head from 'next/head'
import { DefaultSeo } from 'next-seo'

const ApiRouteApp = ({ Component, pageProps }: AppProps) => {
	return (
		<>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'crossorigin'} />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Cinzel:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
			<DefaultSeo
				title='API routes with Next.js'
				description='A mini repo to test API routes with Next.js'
			/>
			<Component {...pageProps} />
		</>
	)
}

export default ApiRouteApp