import React from "react"
import App from "next/app"
import Head from "next/head"
import { ThemeProvider } from "styled-components"

const theme = {
	device: {
		mobileS: "320px",
		mobileM: "375px",
		mobileL: "425px",
		tablet: "768px",
		laptop: "1025px",
		laptopL: "1440px",
		desktop: "2560px"
	},
	color: {
		primary: "#03a9f4",
		primaryLight: "#67daff"
	}
}

class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props
		return (
			<>
				<style jsx global>
					{`
						body {
							margin: 0;
							font-family: -apple-system, BlinkMacSystemFont,
								"Segoe UI", Roboto, Oxygen-Sans, Ubuntu,
								Cantarell, "Helvetica Neue", sans-serif;
						}
					`}
				</style>
				<Head>
					<title>Stop The Spread</title>
					<meta charSet='utf-8' />
				</Head>

				<ThemeProvider theme={theme}>
					<Component {...pageProps} />
				</ThemeProvider>
			</>
		)
	}
}

export default MyApp
