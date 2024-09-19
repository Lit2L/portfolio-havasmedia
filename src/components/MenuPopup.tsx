'use client'
import React, { useState } from 'react'
import { HoveredLink, Menu, MenuItem, ProductItem } from './ui/menu-popup'
import { cn } from '@/lib/utils'
import { Logo } from './ui/logo'
import { TextureButton } from './ui/texture-button'

export function MenuPopup() {
	return (
		<div className='relative w-full flex flex-col items-center justify-center h-[20rem] dark:bg-grid-neutral-100/5 bg-grid-neutral-500/20'>
			<Navbar className='' />
			<div className='absolute -z-50 top-1/3 opacity-40 '>
				<Logo />
			</div>
		</div>
	)
}

function Navbar({ className }: { className?: string }) {
	const [active, setActive] = useState<string | null>(null)
	return (
		<div className={cn('inset-x-0 h-[30rem] mx-auto z-0', className)}>
			<Menu setActive={setActive}>
				<MenuItem setActive={setActive} active={active} item='Nerds Fighting'>
					{/* <div className='text-sm gap-10 p-4 border-border dark:border-darkBorder shadow-light dark:shadow-dark rounded-base border-2 bg-[#f7f7f7] transition-all hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none w-[20rem] text-secondaryBlack'> */}
					<TextureButton variant='minimal' className=''>
						<ProductItem
							title='Nerds Fighting'
							href='/#applications'
							src='/nerds-collage1.webp'
							description='Kickboxing & Martial Arts Club'
						/>
					</TextureButton>
				</MenuItem>
				<MenuItem setActive={setActive} active={active} item='Hippo Docs'>
					<TextureButton variant='icon'>
						<ProductItem
							title='Hippo Docs'
							href='/#applications'
							src='/hippo-collage.webp'
							description='Legal Document Prepping Business.'
						/>
					</TextureButton>
				</MenuItem>
				<MenuItem setActive={setActive} active={active} item='Louvair'>
					<TextureButton variant='minimal'>
						<ProductItem
							title='Louvair'
							href='/#applications'
							src='/louvair-collage.webp'
							description='E-commerce store for a fragrance business.'
						/>
					</TextureButton>
				</MenuItem>
				<MenuItem setActive={setActive} active={active} item='Swim Coach'>
					<TextureButton variant='minimal'>
						<ProductItem
							title='Swim Coach App'
							// href='https://louvair.com'
							href='/#applications'
							src='/adam-collage.webp'
							description='Application for swim coaches to manage their teams.'
						/>
					</TextureButton>
				</MenuItem>
			</Menu>
		</div>
	)
}
