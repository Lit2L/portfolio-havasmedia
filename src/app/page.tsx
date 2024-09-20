import { Hero } from '@/templates/hero'
import { Milestones } from '@/templates/milestones'
import { Projects } from '@/templates/projects'
import { Resume } from '@/templates/resume'

export default function Home() {
	return (
		<main className='min-h-screen w-full relative pt-28 mx-auto xl:max-w-6xl md:max-w-xl lg:max-w-5xl border-4'>
			<Hero />
			<Resume />
			<Projects />
			<Milestones />
		</main>
	)
}
