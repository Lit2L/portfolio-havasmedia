import type { Metadata } from 'next'
import './globals.css'
import Hydrate from '@/components/Hydrate'
import { TailwindIndicator } from '@/components/TailwindIndicator'
import { FloatingNavDock } from '@/components/FloatingDock'
import { MobileNav } from '@/components/mobile-navigation'
import { Providers } from '@/components/Providers'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
	title: 'Larry Ly - Frontend developer',
	description: `I'm a self-taught designer & frontend developer, focused on user experience, accessibility and modern web technologies.`
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<Hydrate>
				<Providers>
					<MobileNav />
					{children}

					<FloatingNavDock />
					<TailwindIndicator />
					<Footer />
				</Providers>
			</Hydrate>
		</html>
	)
}
