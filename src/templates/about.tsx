'use client'
import { Paragraph } from '@/components/Paragraph'
import Image from 'next/image'

import { motion } from 'framer-motion'

export default function About() {
	const images = [
		'https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60',
		'https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60',
		'https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60',
		'https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
	]
	return (
		<div>
			<div className='grid grid-cols-2 md:grid-cols-4 gap-10 my-10'>
				{images.map((image, index) => (
					<motion.div
						key={image}
						initial={{
							opacity: 0,
							y: -50,
							rotate: 0
						}}
						animate={{
							opacity: 1,
							y: 0,
							rotate: index % 2 === 0 ? 3 : -3
						}}
						transition={{ duration: 0.2, delay: index * 0.1 }}
					>
						<Image
							src={image}
							width={200}
							height={400}
							alt='about'
							className='rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200'
						/>
					</motion.div>
				))}
				{/*
        // <Image
        //   src="https://images.unsplash.com/photo-1692544350322-ac70cfd63614?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60 hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692374227159-2d3592f274c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692005561659-cdba32d1e4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // />
        // <Image
        //   src="https://images.unsplash.com/photo-1692445381633-7999ebc03730?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        //   width={200}
        //   height={400}
        //   alt="about"
        //   className="rounded-md object-cover transform -rotate-3 shadow-xl block w-full h-40 md:h-60  hover:rotate-0 transition duration-200"
        // /> */}
			</div>

			<div className='max-w-4xl'>
				<Paragraph className=' mt-4'>
					Hey there, I&apos;m John Doe - a passionate developer, avid writer, and a connoisseur of
					awesome design. Welcome to my corner of the digital world!
				</Paragraph>
				<Paragraph className=' mt-4'>
					Since the early days of my journey, I&apos;ve been captivated by the art of crafting
					exceptional digital experiences. As a developer, I thrive on turning lines of code into
					functional and elegant solutions. My goal is to not just create software, but to build
					digital marvels that seamlessly merge form and function.
				</Paragraph>

				<Paragraph className=' mt-4'>
					But my journey doesn&apos;t stop at coding. With a heart full of words and a mind brimming
					with ideas, I&apos;ve ventured into the realm of writing. From tech articles that unravel
					complex concepts to creative tales that ignite the imagination, I weave words to inform,
					entertain, and inspire.
				</Paragraph>
				<Paragraph className=' mt-4'>
					What sets me apart is my unwavering appreciation for design. I believe that aesthetics and
					usability go hand in hand. My eye for awesome design ensures that every project I
					undertake not only works flawlessly under the hood but also looks stunning on the surface.
				</Paragraph>
				<Paragraph className=' mt-4'>
					Through this website, I aim to share my insights, experiences, and creations with you.
					Whether you&apos;re a fellow developer seeking solutions, a fellow writer in search of
					inspiration, or simply someone who appreciates the finer aspects of design, there&apos;s
					something here for you.
				</Paragraph>
				<Paragraph className=' mt-4'>
					Join me on this journey of bytes and narratives, logic and creativity, code and prose.
					Together, we can explore the boundless possibilities of technology and storytelling, all
					while reveling in the sheer beauty of thoughtful design.
				</Paragraph>
				<Paragraph className=' mt-4'>
					Thank you for being here, and I can&apos;t wait to embark on this adventure with you.
				</Paragraph>
			</div>
		</div>
	)
}

// 'use client'

// import { motion } from 'framer-motion'
// import { IoLogoFigma } from 'react-icons/io5'
// import {
// 	SiNeovim,
// 	SiNextdotjs,
// 	SiPrisma,
// 	SiReact,
// 	SiTailwindcss,
// 	SiTypescript
// } from 'react-icons/si'
// import { AnimatedText } from '@components/animated-text'
// import { SectionHeader } from '@components/ui/section-header'
// import { SectionShell } from '@components/ui/section-shell'
// import Image from 'next/image'
// import { useMounted } from '@hooks/use-mounted'
// import { useTheme } from '@hooks/use-theme'
// import { cn } from '@utils/cn'
// const MotionImage = motion(Image)

// export const About = () => {
// 	const { theme } = useTheme()
// 	const mounted = useMounted()

// 	if (!mounted) return null
// 	return (
// 		<SectionShell id='about'>
// 			<SectionHeader heading='About' />

// 			<motion.section
// 				variants={{
// 					visible: { transition: { staggerChildren: 0.25 } }
// 				}}
// 				initial='hidden'
// 				whileInView='visible'
// 				exit='hidden'
// 				viewport={{ once: true }}
// 				className='gap-y-10 md:ml-24 md:gap-x-8 lg:gap-x-16 relative grid grid-cols-12 mt-24'
// 			>
// 				<AnimatedText
// 					as='p'
// 					className='col-span-full text-dark-400 dark:text-dark-200 md:col-span-6 xl:col-span-8 text-lg font-light leading-relaxed'
// 					text='Get a brief look at who I am and what I do. If you would like to know more about me and my interests, you can.'
// 				/>
// 				{/* <MotionLinkButton */}
// 				{/*   href='/about' */}
// 				{/*   motionProps={{ */}
// 				{/*     variants: { */}
// 				{/*       hidden: { opacity: 0, y: 50 }, */}
// 				{/*       visible: { opacity: 1, y: 0, transition: { ease: 'circOut', duration: 0.5 } }, */}
// 				{/*     }, */}
// 				{/*   }} */}
// 				{/*   className='col-span-full md:col-start-7 xl:col-start-9' */}
// 				{/* > */}
// 				{/*   More about me */}
// 				{/* </MotionLinkButton> */}
// 			</motion.section>

// 			<section className='gap-y-10 md:ml-24 md:grid md:gap-x-8 lg:gap-x-16 relative flex flex-col-reverse grid-cols-12 mt-24'>
// 				<section className='col-span-full md:col-span-6 xl:col-span-8'>
// 					<motion.article
// 						variants={{
// 							visible: { transition: { staggerChildren: 0.15, delayChildren: 0.25 } }
// 						}}
// 						initial='hidden'
// 						whileInView='visible'
// 						exit='hidden'
// 						viewport={{ once: true }}
// 					>
// 						<AnimatedText
// 							as='h3'
// 							text='Who am I'
// 							className='text-dark-200 dark:text-dark-400 text-sm tracking-wider uppercase'
// 						/>
// 						<AnimatedText
// 							as='p'
// 							text="My name is Larry Ly and I'm a self-taught developer and overall app builder."
// 							className='text-dark-400 dark:text-dark-200 mt-6 text-lg font-light leading-relaxed'
// 						/>
// 						<AnimatedText
// 							as='p'
// 							text='i do it.'
// 							className='text-dark-400 dark:text-dark-200 mt-6 text-lg font-light leading-relaxed'
// 						/>
// 						<AnimatedText
// 							as='p'
// 							text='I enjoy the constant change in the technologies used in the area and love diving into new frameworks and technologies.'
// 							className='text-dark-400 dark:text-dark-200 mt-6 text-lg font-light leading-relaxed'
// 						/>
// 						<AnimatedText
// 							as='p'
// 							text='Spending time customizing, improving and tinkering with my work environment and tools is something I enjoy a lot, as it is something I use for many hours daily. It allows me to have it exactly as I desire. For instance, I use Neovim as my editor of choice, I have built multiple custom mechanical keyboards, and I use Colemak DHk as my keyboard layout.'
// 							className='text-dark-400 dark:text-dark-200 mt-6 text-lg font-light leading-relaxed'
// 						/>
// 					</motion.article>

// 					<motion.section
// 						variants={{
// 							visible: { transition: { staggerChildren: 0.15, delayChildren: 0.25 } }
// 						}}
// 						initial='hidden'
// 						whileInView='visible'
// 						exit='hidden'
// 						viewport={{ once: true }}
// 						className='col-span-full mt-14 md:col-span-6 xl:col-span-8 overflow-hidden'
// 					>
// 						<AnimatedText
// 							as='h3'
// 							text='Tech I enjoy'
// 							className='text-dark-200 dark:text-dark-400 text-sm tracking-wider uppercase'
// 						/>
// 						<motion.div
// 							variants={{
// 								hidden: { y: 50, opacity: 0 },
// 								visible: {
// 									y: 0,
// 									opacity: 1,
// 									transition: { duration: 0.5, ease: 'circOut' }
// 								}
// 							}}
// 							className='text-dark-300 flex flex-wrap gap-6 mt-6'
// 						>
// 							<IoLogoFigma size={28} title='Figma' />
// 							<SiNeovim size={28} title='Neovim' />
// 							<SiTypescript size={28} title='TypeScript' />
// 							<SiReact size={28} title='React.js' />
// 							<SiNextdotjs size={28} title='Next.js' />
// 							<SiTailwindcss size={28} title='TailwindCSS' />
// 							<SiPrisma size={28} title='Prisma' />
// 						</motion.div>
// 					</motion.section>
// 				</section>

// 				<motion.figure
// 					variants={{
// 						hidden: { scaleX: 0, originX: 0 },
// 						visible: {
// 							scaleX: 1,
// 							opacity: 1,
// 							transition: {
// 								duration: 0.75,
// 								ease: [0.9, 0.1, 0.3, 0.96],
// 								when: 'beforeChildren',
// 								delayChildren: 0.15,
// 								delay: 0.25
// 							}
// 						}
// 					}}
// 					initial='hidden'
// 					whileInView='visible'
// 					exit='hidden'
// 					viewport={{ once: true }}
// 					className={cn(
// 						'mb-6 w-2/3 self-start md:col-span-full md:col-start-7 md:mb-0 md:w-full xl:col-start-9 relative aspect-square rounded-full shadow-xl shadow-black/50',
// 						{
// 							'bg-dark-100': theme === 'light',
// 							'bg-dark-700': theme === 'dark'
// 						}
// 					)}
// 				>
// 					<MotionImage
// 						variants={{
// 							hidden: { opacity: 0 },
// 							visible: {
// 								opacity: 1,
// 								transition: { duration: 0.5, ease: [0.6, 0.5, 0.5, 0.9] }
// 							}
// 						}}
// 						fill
// 						quality={95}
// 						src='/LarryProfileBW.png'
// 						alt='Portrait of Larry Ly'
// 						loading='lazy'
// 						className='rounded-full'
// 					/>
// 				</motion.figure>
// 			</section>
// 		</SectionShell>
// 	)
// }
