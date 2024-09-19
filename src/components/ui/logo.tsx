import Image from 'next/image'
import { useTheme } from '@/hooks/use-theme'
import LogoLight from '../../../public/LarryLogoB.png'
import LogoDark from '../../../public/LarryLogoB.png'
import Link from 'next/link'

export const Logo = () => {
	const { theme } = useTheme()
	const activeTheme = theme === 'dark' ? 'light' : 'dark'

	return (
		<Link href='/' className=''>
			<Image
				src={activeTheme === 'dark' ? LogoLight : LogoDark}
				alt='Larry Ly Logo'
				width={160}
				height={160}
				priority
			/>
		</Link>
	)
}
