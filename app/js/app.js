import IMask from 'imask'

document.addEventListener('DOMContentLoaded', () => {

  /* hamburger & mobile menu */

  const hamburger = document.querySelector('.hamburger')
  const navContent = document.querySelector('.nav-content')

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active') // hamburger animation

    // toggle the element visibility

    navContent.classList.toggle('active')
  })

  /* input mask for typing phone number */

  const tel = document.querySelector('.input-tel')
  const mask = new IMask(tel, {
    mask: '+7(000)000-00-00',
    lazy: false
  })

  /* modals */

  const addReviewBtn = document.getElementById('add-review')

  const reviewForm = document.querySelector('.review-form')
  const overlay = document.querySelector('.overlay')
  const closeModalBtn = document.querySelector('.modal-close-button')
  const discountModal = document.querySelector('.discount-modal')

  addReviewBtn.addEventListener('click', () => {
    overlay.classList.add('active')
    reviewForm.classList.add('active')
    document.body.classList.add('no-scroll')
  })

  closeModalBtn.addEventListener('click', () => {
    overlay.classList.remove('active')
    reviewForm.classList.remove('active')
    reviewModal.classList.remove('active')
    document.body.classList.remove('no-scroll')
  })

  overlay.addEventListener('click', () => {
    overlay.classList.remove('active')
    reviewForm.classList.remove('active')
    reviewModal.classList.remove('active')
    discountModal.classList.remove('active')
    document.body.classList.remove('no-scroll')
  })

  /* rating selectable */

  document.querySelectorAll('.rating-selectable input').forEach(item => {
    item.addEventListener('click', e => {
      document.querySelectorAll('.rating-selectable span').forEach(item => {
        item.classList.remove('checked')
      })
      item.parentNode.classList.add('checked')
    })
  })

  /* upload files */

  const uploadReviewPhoto = document.getElementById('upload-review-photo')
  const uploadReviewPhotoBtn = document.getElementById('upload-review-photo-btn')

  uploadReviewPhotoBtn.addEventListener('click', () => {
    uploadReviewPhoto.click()
  })

  /* view review */

  const reviewModal = document.querySelector('.review-modal')

  document.querySelectorAll('.review-img').forEach(item => {
    item.addEventListener('click', e => {
      let parent = e.target.parentNode
      let name = parent.querySelector('.review-title').textContent
      let text = parent.querySelector('.review-text').textContent
      let rate = parent.querySelector('.rating').getAttribute('data-rate')
      let photo = e.target.getAttribute('src')

      document.querySelector('.review-full-title').textContent = name
      document.querySelector('.review-full-text').textContent = text
      document.querySelector('.review-full .rating').setAttribute('data-rate', rate)
      document.querySelector('.review-full-img').setAttribute('src', photo)

      overlay.classList.add('active')
      reviewModal.classList.add('active')
      document.body.classList.add('no-scroll')
    })
  })

  /* slider mobile */

  const swiperMobile = new Swiper('.swiper-mobile', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  })

  /* slider other-products */

  const swiperOtherProducts = new Swiper('.swiper-other-products', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  })

  /* slide desktop */

  const galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 5,
    loopedSlides: 5,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  })

  const galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    loop: true,
    loopedSlides: 5,
    thumbs: {
      swiper: galleryThumbs,
    },
  })

  /* order form validation */

  const orderForm = document.querySelector('.order-form')
  const input = orderForm.querySelector('.input-tel')
  const phoneRegExp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/

  orderForm.addEventListener('submit', e => {
    e.preventDefault() // no reload !!

    const validate = phoneRegExp.test(input.value)

    if (!validate) {
      input.classList.add('failed')
      orderForm.querySelector('.error-text').textContent = 'Введите корректный номер'
    } else {
      input.classList.remove('failed')
      orderForm.querySelector('.error-text').textContent = ''
    }

    // отправлять данные здесь
  })
})
