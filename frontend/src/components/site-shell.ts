export type PageName = 'index' | 'about' | 'services' | 'contact' | 'privacy'

export const arrowIcon = '<svg viewBox="0 0 20 20" aria-hidden="true"><path d="M4 10h11M10 5l5 5-5 5" /></svg>'
export const siteUrl = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`

export function renderHeader(currentPage: PageName) {
  return `
    <a class="skip-link" href="#main-content">Skip to main content</a>
    <header class="site-header">
      <a class="brand" href="${siteUrl('/index.html')}" aria-label="Sahavi Software Solutions home">
        <img class="brand-logo" src="${siteUrl('/sahavi-logo.svg')}" alt="Sahavi Software Solutions - We Grow Together">
      </a>
      <button class="menu-toggle" aria-label="Open navigation" aria-expanded="false" aria-controls="site-navigation" type="button"><span></span><span></span></button>
      <nav class="main-nav" id="site-navigation" aria-label="Main navigation">
        <a href="${siteUrl('/index.html')}"${currentPage === 'index' ? ' aria-current="page"' : ''}>Home</a>
        <a href="${siteUrl('/about.html')}"${currentPage === 'about' ? ' aria-current="page"' : ''}>About Us</a>
        <a href="${siteUrl('/services.html')}"${currentPage === 'services' ? ' aria-current="page"' : ''}>Services</a>
        <a class="nav-cta" href="${siteUrl('/contact.html')}"${currentPage === 'contact' ? ' aria-current="page"' : ''}>Contact Us ${arrowIcon}</a>
      </nav>
    </header>
  `
}

export function renderFooter() {
  return `
    <footer class="site-footer">
      <a class="brand footer-brand" href="${siteUrl('/index.html')}" aria-label="Sahavi Software Solutions home"><img class="brand-logo" src="${siteUrl('/sahavi-logo.svg')}" alt="Sahavi Software Solutions - We Grow Together"></a>
      <p><a href="${siteUrl('/index.html')}">Oracle EPM Expertise Across Planning | Performance Management.</a></p>
      <a class="footer-policy" href="${siteUrl('/privacy.html')}">Privacy</a>
      <span class="footer-focus">ORACLE EPM CONSULTING</span>
    </footer>
  `
}