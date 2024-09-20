'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { AnimatedLetters, AnimatedText } from '@/components/animated-text'

import { useTheme } from '@/hooks/use-theme'
import { useMounted } from '@/hooks/use-mounted'

import { TechList } from '@/components/TechList'
import { Profile } from '@/components/Profile'
import { MenuPopup } from '@/components/MenuPopup'
import { GridBeam } from '@/components/ui/grid-beam'
import { SectionShell } from '@/components/ui/section-shell'

export const Hero = () => {
	const { theme } = useTheme()
	const mounted = useMounted()

	if (!mounted) return null

	return (
		<SectionShell
			id='intro'
			className='shadow-[inset_0_-40px_15px_-10px_#ededed] transition duration-300 ease-in-out dark:shadow-[inset_0_-40px_15px_-10px_#171717] md:bg-auto w-full mx-auto '
		>
			<GridBeam>
				<div className='flex flex-col lg:flex-row  justify-center items-center text-center w-full mb-36 h-full '>
					<motion.section
						variants={{
							hidden: { transition: { staggerChildren: 0.25, delayChildren: 0.25 } },
							visible: { transition: { staggerChildren: 0.25, delayChildren: 0.25 } }
						}}
						initial='hidden'
						whileInView='visible'
						exit='hidden'
						viewport={{ once: true }}
						className='relative space-y-16 w-full lg:w-1/2 px-6'
					>
						<AnimatePresence>
							<article className=''>
								<AnimatedText
									as='p'
									className='text-xl text-left font-light tracking-widest uppercase text-dark-400 dark:text-dark-200'
									text='Larry Ly'
								/>
								<AnimatedLetters
									as='p'
									text='Data Analyst and Developer'
									className='text-3xl font-black text-left md:text-4xl lg:text-5xl'
									textVariants={{
										hidden: { transition: { staggerChildren: 0.05 } },
										visible: { transition: { staggerChildren: 0.05 } }
									}}
									letterVariants={{
										hidden: { opacity: 0, y: 75 },
										visible: {
											opacity: 1,
											y: 0,
											transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.5 }
										}
									}}
								/>
							</article>
						</AnimatePresence>
						<Profile />
						<TechList />
					</motion.section>
					<motion.section
						variants={{
							hidden: { transition: { staggerChildren: 0.25, delayChildren: 0.25 } },
							visible: { transition: { staggerChildren: 0.25, delayChildren: 0.25 } }
						}}
						initial='hidden'
						whileInView='visible'
						exit='hidden'
						viewport={{ once: true }}
						className='relative container flex flex-col w-full mx-auto lg:w-1/2'
					>
						<div className='h-[30rem] w-full rounded-2xl md:rounded-2xl md:p-4 hidden lg:block'>
							<MenuPopup />
						</div>
					</motion.section>
				</div>
			</GridBeam>
		</SectionShell>
	)
}
