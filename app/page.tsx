import Products from '@/components/Products/Products'
import Categories from '@/components/Categories/Categories'
import Slider from '@/components/Slider/Slider'

/*
	TODO:
		- Придумать оптимизированный способ получение и обработки книг 
		- Придумать способ загрузки книг без дубликатов
		- Настроить отправку товаров в корзину +
		- Сделать мобильную версию
		- Доделать анимации
		- Сделать Preloader и страницу ошибки
		- Сделать Popup отдельной карточки книги
		- Доделать аутентификацию пользователя через поля ввода
		- Сделать валидацию форм и кастомизировать поле пароля
		- Сделать SEO
		- Ускорить загрузку сайта
		- Оптимизация
		- Тесты


	Version with database:
		- Натянуть весь проект на базу данных
		- Сделать возможность регистрации пользователя

	Version with API Routes (Bad Version):
		- Сделать вторую версию проекта под старую директорию /pages и переделать проект под устаревшие API Routes

*/




export default function Home() {
	return (
		<>
			<Slider />
			<div className='flex relative justify-end mb-[100px]'>
				<Categories />
				<Products />
			</div>
		</>
	)
}
