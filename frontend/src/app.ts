import './style.css'
import { initializePageBehavior } from './components/page-behavior'
import { renderFooter, renderHeader, type PageName } from './components/site-shell'
import * as aboutPage from './pages/about'
import * as contactPage from './pages/contact'
import * as homePage from './pages/home'
import * as servicesPage from './pages/services'
import * as technologiesPage from './pages/technologies'

const pages: Record<PageName, { title: string; content: string }> = {
  index: homePage,
  about: aboutPage,
  services: servicesPage,
  technologies: technologiesPage,
  contact: contactPage,
}

const pageName = window.location.pathname.split('/').pop()?.replace(/\.html$/, '') || 'index'
const currentPage: PageName = pageName in pages ? pageName as PageName : 'index'
const page = pages[currentPage]

document.title = page.title
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `<a class="skip-link" href="#main-content">Skip to content</a>${renderHeader(currentPage)}<main id="main-content">${page.content}</main>${renderFooter()}`
initializePageBehavior()