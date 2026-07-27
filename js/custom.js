// EMBLA CAROUSEL ************************************************
const wrapperNode = document.querySelector('.carousel-wrapper')

if (wrapperNode && typeof EmblaCarousel === 'function') {
   const viewportNode = wrapperNode.querySelector('.carousel-window')
   const prevButtonNode = wrapperNode.querySelector('.btn-prev')
   const nextButtonNode = wrapperNode.querySelector('.btn-next')

   const emblaApi = EmblaCarousel(viewportNode, { loop: true, align: 'start' })

   prevButtonNode.addEventListener('click', () => emblaApi.scrollPrev(), false)
   nextButtonNode.addEventListener('click', () => emblaApi.scrollNext(), false)
}

// ANIMATION ************************************************
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
const animated = document.querySelectorAll('.effect01, .effect02, .effect03, .effect-img')

if (prefersReduced) {
   animated.forEach((el) => el.classList.add('show'))
} else {
   document.querySelectorAll('section').forEach((section) => {
      const targets = section.querySelectorAll('.effect01, .effect02, .effect03, .effect-img')
      if (!targets.length) return

      const observer = new IntersectionObserver((entries) => {
         entries.forEach((entry) => {
            if (!entry.isIntersecting) return
            targets.forEach((el) => el.classList.add('show'))
            observer.disconnect()
         })
      }, {
         threshold: 0.15,
         rootMargin: '0px 0px -8% 0px'
      })

      observer.observe(section)
   })
}
