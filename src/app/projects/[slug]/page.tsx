import { Container } from '@/components/Container'

import { SingleProduct } from '@/components/Product'
import { Products } from '@/components/Products'
import { products } from '@/constants/project-constants'
import { Product } from '@/types/products-types'
import { Metadata } from 'next'
import Image from 'next/image'
import { redirect } from 'next/navigation'

type Props = {
	params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const slug = params.slug
	const product = products.find((p) => p.slug === slug) as Product | undefined
	if (product) {
		return {
			title: product.title,
			description: product.description
		}
	} else {
		return {
			title: 'Projects | Larry Ly',
			description:
				'Larry is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences'
		}
	}
}

export default function SingleProjectPage({ params }: { params: { slug: string } }) {
	const slug = params.slug
	const product = products.find((p) => p.slug === slug)

	if (!product) {
		redirect('/projects')
	}
	return (
		<Container>
			<SingleProduct product={product} />
		</Container>
	)
}
