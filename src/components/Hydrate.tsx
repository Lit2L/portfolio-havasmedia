'use client'

import { Work_Sans } from 'next/font/google'
import { ReactNode, useEffect, useState } from 'react'

import { cn } from '@/lib/utils'
import localFont from 'next/font/local'
// import { useThemeStore } from '../store'
// import { SessionProvider } from 'next-auth/react'
const workSans = Work_Sans({ subsets: ['latin'] })

const geistSans = localFont({
	src: '../app/fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900'
})
const geistMono = localFont({
	src: '../app/fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900'
})

const goldenSignature = localFont({
	src: '../app/fonts/GoldenSignature.otf',
	variable: '--font-golden-signature',
	weight: '100 900'
})

export default function Hydrate({ children }: { children: ReactNode }) {
	const [isHydrated, setIsHydrated] = useState(false)
	// const themeStore = useThemeStore()

	// Waits til Nextjs rehydration completes
	useEffect(() => {
		setIsHydrated(true)
	}, [])

	return (
		// <SessionProvider>
		<>
			{isHydrated ? (
				<body
					className={cn(
						`${workSans.className} ${geistMono.variable} ${goldenSignature.variable} bg-background workSans antialiased text-foreground transition-colors duration-300 ease-in-out max-w-full w-full relative min-h-screen }`
					)}
				>
					{children}
				</body>
			) : (
				<body></body>
			)}

			{/* </SessionProvider> */}
		</>
	)
}
