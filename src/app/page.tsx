import { Hero } from '@/templates/hero'
import { Resume } from '@/templates/resume'

export default function Home() {
	return (
		<main className='min-h-screen w-full relative pt-28 mx-auto xl:max-w-6xl'>
			<Hero />
			<Resume />
		</main>
	)
}
