// 'use server'

import BasketCard from '@/components/BasketCard/BasketCard'
import styles from './page.module.scss'
import { basketParams } from '@/constants'
import Button from '@/components/ui/Button/Button'

export default function ShopBasket() {
	return (
		<div>
			<h2 className={styles.title}>Shopping Cart</h2>
			<div className={styles.basketParams}>
				{basketParams.map(param => (
					<div key={param.label} className={styles.basketParam}>{param.label}</div>
				))}
			</div>
			<div>
				<BasketCard />
			</div>
			<div>
				<div className={styles.totalPrice}>Total Price: $30.58</div>
				{/* <Button func={() => {}}>Checkout</Button> */}
			</div>
		</div>
	)
}
