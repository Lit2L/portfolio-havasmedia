import { Container } from '@/components/Container'
import { Heading } from '@/components/Heading'
import { Products } from '@/components/Products'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Projects | Larry Ly',
	description: 'Recently build applications.'
}

export default function Projects() {
	return (
		<Container>
			<span className='text-4xl'>⚡</span>
			<Heading className='font-black mb-10'> My Recent Applications </Heading>

			<Products />
		</Container>
	)
}
