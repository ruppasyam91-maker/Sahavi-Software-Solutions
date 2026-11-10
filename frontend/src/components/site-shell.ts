export type PageName = 'index' | 'about' | 'services' | 'technologies' | 'contact'

export const arrowIcon = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M10 5l5 5-5 5" /></svg>'
export const siteUrl = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`

export function renderHeader(currentPage: PageName) {
  return `
    <header class="site-header">
      <a class="brand" href="${siteUrl('/index.html')}" aria-label="Sahavi Software Solutions home">
        <img class="brand-logo" src="${siteUrl('/sahavi-logo.svg')}" alt="Sahavi Software Solutions - We Grow Together">
      </a>
      <button class="menu-toggle" aria-label="Open navigation" aria-expanded="false" type="button"><span></span><span></span></button>
      <nav class="main-nav" aria-label="Main navigation">
        <a href="${siteUrl('/index.html')}"${currentPage === 'index' ? ' aria-current="page"' : ''}>Home</a>
        <a href="${siteUrl('/about.html')}"${currentPage === 'about' ? ' aria-current="page"' : ''}>About Us</a>
        <a href="${siteUrl('/services.html')}"${currentPage === 'services' ? ' aria-current="page"' : ''}>Services</a>
        <a href="${siteUrl('/technologies.html')}"${currentPage === 'technologies' ? ' aria-current="page"' : ''}>Technologies</a>
        <a class="nav-cta" href="${siteUrl('/contact.html')}"${currentPage === 'contact' ? ' aria-current="page"' : ''}>Contact Us ${arrowIcon}</a>
      </nav>
    </header>
  `
}

export function renderFooter() {
  return `
    <footer class="site-footer">
      <a class="brand footer-brand" href="${siteUrl('/index.html')}" aria-label="Sahavi Software Solutions home"><img class="brand-logo" src="${siteUrl('/sahavi-logo.svg')}" alt="Sahavi Software Solutions - We Grow Together"></a>
      <p>Oracle EPM expertise. Smarter financial planning. Better business performance.</p>
      <span class="footer-focus">ORACLE EPM CONSULTING</span>
    </footer>
  `
}