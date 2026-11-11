import { services } from '../data/services'
import { siteUrl } from './site-shell'

export function renderServiceCards(compact = false, serviceList = services, showNumbers = true) {
  return serviceList.map((service, index) => `
    <article class="service-card${compact ? ' service-card-compact' : ''}" id="${service.id}">
      ${showNumbers ? `<span class="service-number">${String(index + 1).padStart(2, '0')}</span>` : ''}
      ${compact
        ? `<h3><a href="${siteUrl(`/services.html#${service.id}`)}">${service.title}</a></h3>
          <p class="service-description">${service.description}</p>`
        : `<h3>${service.title}</h3>
          <p class="service-description">${service.description}</p>
          <ul>${service.items.map((item) => `<li>${item}</li>`).join('')}</ul>`}
    </article>
  `).join('')
}