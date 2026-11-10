import { services } from '../data/services'
import { arrowIcon, siteUrl } from './site-shell'

export function renderServiceCards(compact = false) {
  return services.map((service, index) => `
    <article class="service-card${compact ? ' service-card-compact' : ''}" id="${service.id}">
      <span class="service-number">${String(index + 1).padStart(2, '0')}</span>
      <h3>${service.title}</h3>
      <p class="service-description">${service.description}</p>
      <ul>${service.items.map((item) => `<li>${item}</li>`).join('')}</ul>
      ${compact ? `<a class="text-link" href="${siteUrl(`/services.html#${service.id}`)}">Service details ${arrowIcon}</a>` : ''}
    </article>
  `).join('')
}