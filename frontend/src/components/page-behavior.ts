export function initializePageBehavior() {
  const menuToggle = document.querySelector<HTMLButtonElement>('.menu-toggle')
  const mainNav = document.querySelector<HTMLElement>('.main-nav')

  menuToggle?.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true'
    menuToggle.setAttribute('aria-expanded', String(!isExpanded))
    menuToggle.setAttribute('aria-label', isExpanded ? 'Open navigation' : 'Close navigation')
    mainNav?.classList.toggle('is-open', !isExpanded)
  })

  mainNav?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menuToggle?.setAttribute('aria-expanded', 'false')
      menuToggle?.setAttribute('aria-label', 'Open navigation')
      mainNav?.classList.remove('is-open')
    })
  })

  const contactForm = document.querySelector<HTMLFormElement>('#contact-form')
  const formStatus = document.querySelector<HTMLParagraphElement>('.form-status')

  contactForm?.addEventListener('submit', async (event) => {
    event.preventDefault()
    const submitButton = contactForm.querySelector<HTMLButtonElement>('button[type="submit"]')
    if (!submitButton || !formStatus) return

    submitButton.disabled = true
    formStatus.dataset.state = 'pending'
    formStatus.textContent = 'Sending your inquiry...'

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(contactForm).entries())),
      })
      const result = await response.json() as { message?: string; error?: string }
      if (!response.ok) throw new Error(result.error || 'Unable to send your inquiry right now.')

      formStatus.dataset.state = 'success'
      formStatus.textContent = result.message || 'Your inquiry has been received.'
      contactForm.reset()
    } catch (error) {
      formStatus.dataset.state = 'error'
      formStatus.textContent = error instanceof Error ? error.message : 'Unable to send your inquiry right now.'
    } finally {
      submitButton.disabled = false
    }
  })

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.12 })

  document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element))
}