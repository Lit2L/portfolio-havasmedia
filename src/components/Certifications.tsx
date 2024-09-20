import BlurFade from '@/components/ui/blur-fade'
import { CertificationCard } from '@/components/ui/certification-card'
import { DATA } from '@/data/resume'
import { SectionShell } from '@/components/ui/section-shell'
import { SectionHeader } from '@/components/ui/section-header'

export const Certifications = () => {
	const BLUR_FADE_DELAY = 0.04
	return (
		<SectionShell id='education'>
			<SectionHeader heading='Education' />

			<div className='flex min-h-0 flex-col gap-y-3'>
				{DATA.certifications.map((certification, id) => (
					<BlurFade key={certification.school} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
						<CertificationCard
							key={certification.school}
							href={certification.href}
							logoUrl={certification.logoUrl}
							altText={certification.school}
							title={certification.school}
							subtitle={certification.degree}
							period={`${certification.start} - ${certification.end}`}
						/>
					</BlurFade>
				))}
			</div>
		</SectionShell>
	)
}
