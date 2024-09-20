import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { Metadata } from 'next'

import About from '@/components/About'

export const metadata: Metadata = {
	title: 'About | John Doe',
	description:
		'Larry is a software engineer and a full-stack developer with a passion for building digital products and web applications.'
}

export default function AboutPage() {
	return (
		<Container>
			<span className='text-4xl'></span>
			<Heading className='font-black'>I&apos;m Larry!</Heading>
			<About />
		</Container>
	)
}
