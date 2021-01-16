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
    mask: '+7 (000)000-00-00',
    lazy: false
  })

  /* add review */

  const addReviewBtn = document.getElementById('add-review')
  const reviewForm = document.querySelector('.review-form')
  const overlay = document.querySelector('.overlay')
  const closeModalBtn = document.querySelector('.modal-close-button')

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
  const reviewModalBtn = reviewModal.querySelector('.modal-close-button')

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

  reviewModalBtn.addEventListener('click', () => {
    reviewModal.classList.remove('active')
    overlay.classList.remove('active')
    document.body.classList.remove('no-scroll')
  })

  /* slider mobile */

  const swiper = new Swiper('.swiper-mobile', {
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

})
