import css from "./News.module.css";
import NewsItem from "./NewsItem/NewsItem";

function News(props) {

	let arrayData = [
		{
			id: 1,
			title: 'Коментарий',
			class: 'coments',
			text: 'Актуальная информация, глобальные отключения, ремонты т д',
		}, {
			id: 2,
			title: 'Коментарий',
			text: 'Актуальная информация, глобальные отключения, ремонты т д',
		}, {
			id: 3,
			title: 'Коментарий',
			text: 'Актуальная информация, глобальные отключения, ремонты т д',
		}, {
			id: 4,
			title: 'Коментарий',
			text: 'Актуальная информация, глобальные отключения, ремонты т д',
		}, {
			id: 5,
			title: 'Коментарий',
			text: 'Актуальная информация, глобальные отключения, ремонты т д',
		}, {
			id: 6,
			title: 'Коментарий',
			text: `Таким образом реализация намеченных плановых заданий способствует подготовки и реализации форм развития. Не следует, однако забывать, что постоянное информационно-пропагандистское обеспечение нашей деятельности требуют определения и уточнения модели развития. Не следует, однако забывать, что постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки систем массового участия.
			Товарищи! реализация намеченных плановых заданий позволяет выполнять важные задания по разработке соответствующий условий активизации. Не следует, однако забывать, что новая модель организационной деятельности представляет собой интересный эксперимент проверки направлений прогрессивного развития. С другой стороны дальнейшее развитие различных форм деятельности требуют определения и уточнения соответствующий условий активизации. Равным образом дальнейшее развитие различных форм деятельности требуют от нас анализа новых предложений. Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности представляет собой интересный эксперимент проверки модели развития.
			Значимость этих проблем настолько очевидна, что реализация намеченных плановых заданий в значительной степени обуславливает создание дальнейших направлений развития. Не следует, однако забывать, что постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании новых предложений.Актуальная информация, глобальные отключения, ремонты т д`,
		}, {
			id: 7,
			title: 'Коментарий',
			image: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/ElevatorPatentOtis1861.jpg',
			text: 'Актуальная информация, глобальные отключения, ремонты т д',
		},
	]

	let news = arrayData.map(n => <NewsItem id={n.id} title={n.title} class={n.class} text={n.text} image={n.image} />)


	return (
		<div className={css.News}>
			{news}
		</div>
	)
}

export default News;