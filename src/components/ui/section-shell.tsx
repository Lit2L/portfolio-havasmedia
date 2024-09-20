import type { ComponentPropsWithoutRef } from 'react'

type SectionShellProps = ComponentPropsWithoutRef<'section'>

export const SectionShell = ({ children, ...props }: SectionShellProps) => (
	<section className='container' {...props}>
		{children}
	</section>
)
