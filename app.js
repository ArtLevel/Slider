// Находим нужные элементы
const upButton = document.querySelector('#up-button')
const downButton = document.querySelector('#down-button')

const container = document.querySelector('#container')
const sidebar = document.querySelector('#sidebar')
const mainSlide = document.querySelector('#main-slide')

const slidesCount = mainSlide.querySelectorAll('div').length

let activeSlideIndex = 0

// Вычисляем сколько картинок в слайдере и умножаем их на высоту в 100 раз
sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

// При клике на кнопку up, выполняем действия:
upButton.addEventListener('click', () => {
	// Вызываем функцию changeSlide с параметром 'up'
	changeSlide('up')
})

// При клике на кнопку down, выполняем действия:
downButton.addEventListener('click', () => {
	// Вызываем функцию changeSlide с параметром 'down'
	changeSlide('down')
})

// Считываем событие нажатие клавиши
document.addEventListener('keydown', (event) => {
	// Проверяем если человек нажал на кнопку вверх, вызываем функцию changeSlide с параметром 'up'
	if(event.key === 'ArrowUp') {
		changeSlide('up')

		// Добавляем стиль hover эффекта, на кнопку upButton, и через 500ms убираем его
		upButton.style.color = '#222'
		setTimeout(() => {
			upButton.style.color = ''
		}, 500)
	}
	// Проверяем если человек нажал на кнопку вниз, вызываем функцию changeSlide с параметром 'down'
	else if(event.key === 'ArrowDown') {
		changeSlide('down')

		// Добавляем стиль hover эффекта, на кнопку downButton, и через 500ms убираем его
		downButton.style.color = '#222'
		setTimeout(() => {
			downButton.style.color = ''
		}, 500)
	}
})

// Функция отвечает за слайдер и перемещение блоков sidebar и mainSlide
function changeSlide(direction) {
	// Проверяем с каким параметром вызвана функция,
	// и выполняем действие по подсчёту текучего слайдера
	if(direction === 'up') {
		activeSlideIndex++
		if(activeSlideIndex === slidesCount) {
			activeSlideIndex = 0
		}
	} else if(direction === 'down') {
			activeSlideIndex--
			if(activeSlideIndex < 0) {
				activeSlideIndex = slidesCount - 1
			}
	}

	// Вычисляем высоту container
	const height = container.clientHeight

	// Вычисляем на сколько px должен сместиться mainSlide, чтобы показать следующую картинку
	mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`

	// Вычисляем на сколько px должен сместиться sidebar, чтобы показать следующий блок с текстом
	sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}