import AuthCard from '@/components/AuthCard/AuthCard'

export default function ProductItem({
	params: { id },
}: {
	params: { id: string }
}) {
	return (
		<div>
			<AuthCard />
		</div>
	)
}
