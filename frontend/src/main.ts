import './style.css'

const arrowIcon = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M10 5l5 5-5 5" /></svg>'

const services = [
  {
    id: 'implementation',
    title: 'Oracle EPM Implementation',
    description: 'Plan and deliver an Oracle EPM foundation aligned to finance processes, reporting needs, and business goals.',
    items: ['EPBCS and PBCS implementation', 'Planning model and application setup', 'Business rules, forms, and workflows', 'Testing, launch, and enablement'],
  },
  {
    id: 'support',
    title: 'EPM Support & Maintenance',
    description: 'Keep critical planning applications stable, current, and ready for each planning cycle.',
    items: ['Production support and troubleshooting', 'Application and metadata maintenance', 'Performance reviews and optimization', 'Enhancements and release readiness'],
  },
  {
    id: 'development',
    title: 'EPM Application Development',
    description: 'Extend Oracle EPM with maintainable calculations, automation, and finance-focused application experiences.',
    items: ['Groovy and Calculation Manager rules', 'Essbase calculation scripts', 'Forms, dashboards, and runtime prompts', 'DataGrid APIs and form automation'],
  },
  {
    id: 'migration',
    title: 'EPM Migration',
    description: 'Move planning applications and data with a controlled approach to readiness, validation, and cutover.',
    items: ['Cloud and on-premises migration planning', 'Application and metadata migration', 'Data reconciliation and validation', 'Cutover planning and post-migration support'],
  },
  {
    id: 'consulting',
    title: 'EPM Consulting',
    description: 'Get focused advice across financial planning, application design, integrations, and delivery decisions.',
    items: ['Financial planning and budgeting', 'Workforce, revenue, and expense planning', 'EPM architecture and design guidance', 'Specialist functional and technical consulting'],
  },
]

const technologies = [
  { name: 'Oracle EPBCS', category: 'Planning', description: 'Enterprise Planning and Budgeting Cloud for connected financial and operational plans.' },
  { name: 'Oracle PBCS', category: 'Planning', description: 'Planning and Budgeting Cloud Service for structured budgeting and forecasting.' },
  { name: 'Oracle FCCS', category: 'Consolidation', description: 'Financial Consolidation and Close Cloud for close and consolidation processes.' },
  { name: 'Oracle ARCS', category: 'Reconciliation', description: 'Account Reconciliation Cloud for governed, trackable reconciliation work.' },
  { name: 'Oracle EDMCS', category: 'Data management', description: 'Enterprise Data Management Cloud for controlled enterprise data changes.' },
  { name: 'Oracle EPM Automate', category: 'Automation', description: 'Command-line automation for repeatable Oracle EPM administration tasks.' },
  { name: 'Groovy', category: 'Development', description: 'Business rules and application logic built for Oracle EPM workflows.' },
  { name: 'Essbase Calc Scripts', category: 'Calculation', description: 'Purpose-built calculation scripts for Essbase planning applications.' },
]

const page = window.location.pathname.split('/').pop()?.replace(/\.html$/, '') || 'index'
const serviceCards = (compact = false) => services.map((service) => `
  <article class="service-card${compact ? ' service-card-compact' : ''}" id="${service.id}">
    <span class="service-number">${String(services.indexOf(service) + 1).padStart(2, '0')}</span>
    <h3>${service.title}</h3>
    <p class="service-description">${service.description}</p>
    <ul>${service.items.map((item) => `<li>${item}</li>`).join('')}</ul>
    ${compact ? `<a class="text-link" href="/services.html#${service.id}">Service details ${arrowIcon}</a>` : ''}
  </article>
`).join('')

const header = `
  <header class="site-header">
    <a class="brand" href="/index.html" aria-label="Sahavi Software Solutions home">
      <img class="brand-logo" src="/sahavi-logo.svg" alt="Sahavi Software Solutions - We Grow Together">
    </a>
    <button class="menu-toggle" aria-label="Open navigation" aria-expanded="false" type="button"><span></span><span></span></button>
    <nav class="main-nav" aria-label="Main navigation">
      <a href="/index.html"${page === 'index' ? ' aria-current="page"' : ''}>Home</a>
      <a href="/about.html"${page === 'about' ? ' aria-current="page"' : ''}>About Us</a>
      <details class="nav-dropdown">
        <summary${page === 'services' ? ' aria-current="page"' : ''}>Services <span aria-hidden="true">⌄</span></summary>
        <div class="dropdown-menu">
          <a class="dropdown-overview" href="/services.html">All EPM services</a>
          ${services.map((service) => `<a href="/services.html#${service.id}">${service.title}</a>`).join('')}
        </div>
      </details>
      <a href="/technologies.html"${page === 'technologies' ? ' aria-current="page"' : ''}>Technologies</a>
      <a class="nav-cta" href="/contact.html"${page === 'contact' ? ' aria-current="page"' : ''}>Contact Us ${arrowIcon}</a>
    </nav>
  </header>
`

const footer = `
  <footer class="site-footer">
    <a class="brand footer-brand" href="/index.html" aria-label="Sahavi Software Solutions home"><img class="brand-logo" src="/sahavi-logo.svg" alt="Sahavi Software Solutions - We Grow Together"></a>
    <p>Oracle EPM expertise. Smarter financial planning. Better business performance.</p>
    <span class="footer-focus">ORACLE EPM CONSULTING</span>
  </footer>
`

const homePage = `
  <section class="hero page-home" id="home">
    <div class="hero-grid">
      <div class="hero-copy reveal">
        <div class="eyebrow"><span></span> ORACLE EPM CONSULTING & STAFFING</div>
        <h1>Oracle EPM.<br><em>expertise for</em><br>finance teams.</h1>
        <p class="hero-intro">Sahavi Software Solutions helps finance teams plan with confidence through focused Oracle EPM consulting, implementation, and support.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="/contact.html">Discuss your EPM goals ${arrowIcon}</a>
          <a class="text-link" href="/services.html">Explore services ${arrowIcon}</a>
        </div>
        <div class="hero-proof"><span class="proof-rule"></span><p>Specialists in Oracle Enterprise Performance Management</p></div>
      </div>
      <div class="planning-visual reveal" aria-label="Connected financial plans for workforce, revenue, and expenses">
        <div class="visual-orbit orbit-one"></div><div class="visual-orbit orbit-two"></div>
        <div class="visual-label"><span class="pulse-dot"></span> CONNECTED PLANNING</div>
        <div class="visual-center"><span class="center-kicker">ORACLE</span><strong>EPM</strong><span class="center-caption">FINANCE CLOUD</span></div>
        <div class="node node-workforce"><span class="node-icon">01</span><strong>Workforce</strong><small>People plan</small></div>
        <div class="node node-revenue"><span class="node-icon">02</span><strong>Revenue</strong><small>Growth plan</small></div>
        <div class="node node-expense"><span class="node-icon">03</span><strong>Expenses</strong><small>Cost plan</small></div>
        <div class="visual-foot"><span>ONE PLAN</span><b>↗</b><span>BETTER DECISIONS</span></div>
      </div>
    </div>
    <a class="scroll-cue" href="#overview" aria-label="Scroll to company overview"><span></span></a>
  </section>
  <section class="overview-section section-pad" id="overview">
    <div class="section-heading reveal"><div><div class="eyebrow eyebrow-blue"><span></span> SAHAVI SOFTWARE SOLUTIONS</div><h2>Built around the work<br><em>finance teams do.</em></h2></div><p>We bring functional understanding and technical delivery together across Oracle EPM, helping organizations improve how they plan, close, and manage performance.</p></div>
    <div class="highlight-grid">
      <article><span>01</span><h3>Finance-led delivery</h3><p>Planning solutions shaped around real budgeting, forecasting, and close processes.</p></article>
      <article><span>02</span><h3>Oracle EPM focus</h3><p>Consulting, application development, integrations, and support in one specialist practice.</p></article>
      <article><span>03</span><h3>Support beyond launch</h3><p>Practical expertise for implementation, enhancements, migration, and ongoing operations.</p></article>
    </div>
  </section>
  <section class="service-section section-pad" id="services">
    <div class="section-heading reveal"><div><div class="eyebrow eyebrow-blue"><span></span> OUR SERVICES</div><h2>Oracle EPM, from design<br><em>through delivery.</em></h2></div><a class="text-link" href="/services.html">View all services ${arrowIcon}</a></div>
    <div class="service-grid">${serviceCards(true)}</div>
  </section>
  <section class="expertise-section" id="expertise">
    <div class="expertise-inner section-pad"><div class="expertise-copy reveal"><div class="eyebrow"><span></span> TECHNOLOGY EXPERTISE</div><h2>Deep in the<br><em>Oracle EPM stack.</em></h2><p>Focused capability across Oracle planning, close, reconciliation, data management, automation, and calculation technologies.</p><a class="button button-light" href="/technologies.html">Explore technologies ${arrowIcon}</a></div><div class="technology-panel reveal"><div class="tech-panel-heading"><span>CORE CAPABILITIES</span><span class="tech-live"><i></i> ORACLE EPM</span></div><div class="tech-grid">${technologies.map((technology, index) => `<div class="tech-item"><span class="tech-index">${String(index + 1).padStart(2, '0')}</span><span>${technology.name}</span></div>`).join('')}</div></div></div>
  </section>
  <section class="staffing-section section-pad"><div class="staffing-layout"><div class="staffing-title reveal"><div class="eyebrow eyebrow-blue"><span></span> EPM STAFFING</div><h2>People who know<br><em>your platform.</em></h2></div><div class="staffing-content reveal"><p>Bring in Oracle EPBCS, PBCS, functional, technical, Groovy, and Essbase specialists for the work ahead.</p><a class="text-link dark-link" href="/contact.html">Find your EPM specialist ${arrowIcon}</a></div><div class="staffing-note reveal"><span class="note-mark">S.</span><p>Contract and permanent placements aligned to your project and team.</p><span class="note-line"></span></div></div></section>
  <section class="home-contact section-pad"><div><div class="eyebrow eyebrow-blue"><span></span> READY TO GET STARTED?</div><h2>Let's talk about<br><em>your EPM goals.</em></h2></div><a class="button button-primary" href="/contact.html">Contact Sahavi ${arrowIcon}</a></section>
`

const aboutPage = `
  <section class="page-hero section-pad"><div class="eyebrow eyebrow-blue"><span></span> ABOUT SAHAVI</div><h1>Oracle EPM focus.<br><em>Finance-first thinking.</em></h1><p>Sahavi Software Solutions is a specialized Oracle EPM consulting and professional staffing company. We help organizations get more from their planning and performance management platforms.</p></section>
  <section class="about-intro section-pad"><div class="about-lead"><span class="eyebrow eyebrow-blue"><span></span> WHO WE ARE</span><h2>Specialists in the systems<br>behind better decisions.</h2></div><div class="about-copy"><p>Our work spans the Oracle EPM lifecycle: implementation, application development, integrations, migration, and ongoing support. We connect financial goals with the models, data, and applications that make planning useful.</p><p>Our teams combine Oracle EPM functional knowledge with technical delivery experience, helping finance and technology stakeholders move forward together.</p></div></section>
  <section class="values-section section-pad"><article><span class="value-index">01 / MISSION</span><h2>Make EPM work<br><em>for the business.</em></h2><p>Deliver focused Oracle EPM expertise that helps finance teams plan, adapt, and operate with confidence.</p></article><article><span class="value-index">02 / VISION</span><h2>Better planning.<br><em>Better outcomes.</em></h2><p>Help organizations build connected, dependable performance management practices that support better decisions.</p></article></section>
  <section class="expertise-section"><div class="expertise-inner section-pad"><div class="expertise-copy"><div class="eyebrow"><span></span> OUR EXPERTISE</div><h2>One platform.<br><em>Many ways to help.</em></h2><p>From Oracle EPBCS and PBCS to FCCS, ARCS, EDMCS, and Essbase, we bring consulting and delivery experience across the Oracle EPM ecosystem.</p><a class="button button-light" href="/services.html">Explore our services ${arrowIcon}</a></div><div class="technology-panel"><div class="tech-panel-heading"><span>HOW WE SUPPORT YOU</span></div><div class="about-expertise-list"><span>Implementation & migration</span><span>Application development</span><span>Support & maintenance</span><span>Consulting & staffing</span></div></div></div></section>
`

const servicesPage = `
  <section class="page-hero section-pad"><div class="eyebrow eyebrow-blue"><span></span> ORACLE EPM SERVICES</div><h1>Expertise for every<br><em>stage of EPM.</em></h1><p>From first implementation through ongoing optimization, work with a specialist team across Oracle EPM.</p></section>
  <section class="services-page-section section-pad"><div class="service-grid service-grid-full">${serviceCards()}</div></section>
  <section class="home-contact section-pad"><div><div class="eyebrow eyebrow-blue"><span></span> NEED A SPECIALIST?</div><h2>Let's shape the right<br><em>next step.</em></h2></div><a class="button button-primary" href="/contact.html">Talk with Sahavi ${arrowIcon}</a></section>
`

const technologiesPage = `
  <section class="page-hero section-pad"><div class="eyebrow eyebrow-blue"><span></span> ORACLE EPM TECHNOLOGIES</div><h1>Deep platform knowledge.<br><em>Practical delivery.</em></h1><p>Focused capability across the Oracle EPM tools finance teams use to plan, consolidate, reconcile, manage data, and automate work.</p></section>
  <section class="technology-page-section section-pad"><div class="technology-card-grid">${technologies.map((technology, index) => `<article class="technology-card"><span class="service-number">${String(index + 1).padStart(2, '0')} / ${technology.category.toUpperCase()}</span><h2>${technology.name}</h2><p>${technology.description}</p></article>`).join('')}</div><div class="tech-note"><span class="eyebrow eyebrow-blue"><span></span> DELIVERY CAPABILITIES</span><p>Related expertise includes Calculation Manager, BSO and ASO cube design, Data Maps, Smart Push, metadata management, and Data Integration.</p></div></section>
  <section class="home-contact section-pad"><div><div class="eyebrow eyebrow-blue"><span></span> ORACLE EPM EXPERTISE</div><h2>Have a platform<br><em>challenge in mind?</em></h2></div><a class="button button-primary" href="/contact.html">Discuss your needs ${arrowIcon}</a></section>
`

const contactPage = `
  <section class="page-hero section-pad"><div class="eyebrow eyebrow-blue"><span></span> CONTACT SAHAVI</div><h1>Start a conversation<br><em>about Oracle EPM.</em></h1><p>Tell us what your team is working on. We’ll connect your inquiry with the right EPM expertise.</p></section>
  <section class="contact-section contact-page-section"><div class="contact-inner section-pad"><div class="contact-copy"><div class="eyebrow"><span></span> HOW CAN WE HELP?</div><h2>Let's find your<br><em>next step.</em></h2><p>Share a few details about your project, application, or staffing needs.</p><div class="contact-details"><span class="contact-detail-label">EMAIL</span><a href="mailto:info@sahavisoftware.com">info@sahavisoftware.com</a><span class="contact-detail-label">SPECIALTY</span><p>Oracle EPM consulting, implementation, support, and staffing.</p></div></div>
    <form class="contact-form" id="contact-form">
      <div class="form-row"><label class="form-field">Name<input name="name" type="text" autocomplete="name" maxlength="100" required></label><label class="form-field">Work email<input name="email" type="email" autocomplete="email" maxlength="254" required></label></div>
      <label class="form-field">Company <span>(optional)</span><input name="company" type="text" autocomplete="organization" maxlength="120"></label>
      <label class="form-field">How can we help?<textarea name="message" rows="4" minlength="10" maxlength="3000" required></textarea></label>
      <div class="form-submit"><button class="button button-primary" type="submit">Send inquiry ${arrowIcon}</button><p class="form-status" role="status" aria-live="polite"></p></div>
      <p class="privacy-note">Your details will only be used to respond to your inquiry.</p>
    </form>
  </div></section>
`

const pages: Record<string, { title: string; content: string }> = {
  index: { title: 'Sahavi Software Solutions | Oracle EPM Consulting', content: homePage },
  about: { title: 'About Us | Sahavi Software Solutions', content: aboutPage },
  services: { title: 'Oracle EPM Services | Sahavi Software Solutions', content: servicesPage },
  technologies: { title: 'Oracle EPM Technologies | Sahavi Software Solutions', content: technologiesPage },
  contact: { title: 'Contact Us | Sahavi Software Solutions', content: contactPage },
}

const current = pages[page] || pages.index
document.title = current.title
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `${header}<main>${current.content}</main>${footer}`

const menuToggle = document.querySelector<HTMLButtonElement>('.menu-toggle')
const mainNav = document.querySelector<HTMLElement>('.main-nav')
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

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible')
      observer.unobserve(entry.target)
    }
  })
}, { threshold: 0.12 })

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element))