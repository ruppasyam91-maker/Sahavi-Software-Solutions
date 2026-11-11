export function initializePageBehavior() {
  const menuToggle = document.querySelector<HTMLButtonElement>('.menu-toggle')
  const mainNav = document.querySelector<HTMLElement>('.main-nav')

  const closeNavigation = () => {
    menuToggle?.setAttribute('aria-expanded', 'false')
    menuToggle?.setAttribute('aria-label', 'Open navigation')
    mainNav?.classList.remove('is-open')
  }

  menuToggle?.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true'
    menuToggle.setAttribute('aria-expanded', String(!isExpanded))
    menuToggle.setAttribute('aria-label', isExpanded ? 'Open navigation' : 'Close navigation')
    mainNav?.classList.toggle('is-open', !isExpanded)
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuToggle?.getAttribute('aria-expanded') === 'true') {
      closeNavigation()
      menuToggle.focus()
    }
  })

  document.addEventListener('click', (event) => {
    const target = event.target
    if (
      target instanceof Node &&
      menuToggle?.getAttribute('aria-expanded') === 'true' &&
      !menuToggle.contains(target) &&
      !mainNav?.contains(target)
    ) {
      closeNavigation()
    }
  })

  mainNav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeNavigation)
  })

  const contactForm = document.querySelector<HTMLFormElement>('#contact-form')
  const formStatus = document.querySelector<HTMLParagraphElement>('.form-status')

  contactForm?.addEventListener('submit', async (event) => {
    event.preventDefault()
    const submitButton = contactForm.querySelector<HTMLButtonElement>('button[type="submit"]')
    if (!submitButton || !formStatus) return

    submitButton.disabled = true
    submitButton.setAttribute('aria-busy', 'true')
    formStatus.dataset.state = 'pending'
    formStatus.textContent = 'Sending your inquiry...'

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(contactForm).entries())),
      })
      let result: { message?: string; error?: string }
      try {
        result = await response.json() as { message?: string; error?: string }
      } catch {
        throw new Error('The contact service returned an unexpected response. Please try again later.')
      }
      if (!response.ok) throw new Error(result.error || 'Unable to send your inquiry right now.')

      formStatus.dataset.state = 'success'
      formStatus.textContent = result.message || 'Your inquiry has been received.'
      contactForm.reset()
    } catch (error) {
      formStatus.dataset.state = 'error'
      formStatus.textContent = error instanceof Error ? error.message : 'Unable to send your inquiry right now.'
    } finally {
      submitButton.disabled = false
      submitButton.removeAttribute('aria-busy')
    }
  })

  const revealElements = document.querySelectorAll('.reveal')
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealElements.forEach((element) => element.classList.add('is-visible'))
    return
  }

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.12 })

  revealElements.forEach((element) => revealObserver.observe(element))
}