import React from 'react'

import { twMerge } from 'tailwind-merge'
import { DM_Sans } from 'next/font/google'

// Font files can be colocated inside of `app`
const DMSans = DM_Sans({
	weight: ['400', '500', '700'],
	subsets: ['latin']
})

export const Heading = ({
	className,
	children,
	as: Tag = 'h1'
}: {
	className?: string
	children: React.ReactNode
	as?: keyof JSX.IntrinsicElements
}) => {
	return (
		<Tag
			className={twMerge(
				DMSans.className,
				'text-base md:text-xl lg:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary',
				className
			)}
		>
			{children}
		</Tag>
	)
}
