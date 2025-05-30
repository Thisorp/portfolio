import { createRouter, createWebHistory } from 'vue-router'
import Loader from '../views/Loader.vue'
import Office from '../views/Office.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Loader,
      meta: {
        title: 'Portfolio | Thysorp - Développeur Web',
        metaTags: [
          {
            rel: 'canonical',
            href: 'https://thysorp.id.vn'
          },
          {
            name: 'title',
            content: 'Portfolio | Thysorp - Développeur Web'
          },
          {
            name: 'description',
            content:
              "Découvrez le portfolio de Thysorp, développeur web full stack passionné, Création de sites et applications web et mobiles avec JS, PHP, SQL et leurs frameworks, ainsi qu'en DevOps."
          },
          {
            name: 'keywords',
            content: 'portfolio, thysorp, développeur web, full stack, sites web, applications web, applications mobiles, JS, PHP, SQL, ORM, frameworks, DevOps'
          },
          {
            name: 'author',
            content: 'Thysorp'
          },
          {
            name: 'robots',
            content: 'index, follow'
          },
          {
            name: 'theme-color',
            content: '#000000'
          },
          {
            name: 'mobile-web-app-capable',
            content: 'yes'
          },
          {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
          },
          {
            name: 'apple-mobile-web-app-title',
            content: 'Portfolio | Thisorp - Développeur Web'
          },
          {
            name: 'application-name',
            content: 'Portfolio | Thisorp - Développeur Web'
          },
          {
            name: 'twitter:card',
            content: 'summary'
          },
          {
            name: 'twitter:title',
            content: 'Portfolio | Thisorp - Développeur Web'
          },
          {
            name: 'twitter:description',
            content:
              "Découvrez le portfolio de Thisorp, développeur web full stack passionné, Création de sites et applications web et mobiles avec JS, PHP, SQL et leurs frameworks, ainsi qu'en DevOps."
          },
          {
            name: 'twitter:image',
            content: 'https://thisorp.id.vn/img/logo-portfolio-black.webp'
          },
          {
            name: 'twitter:image:alt',
            content: 'Logo Portfolio Thisorp'
          },
          {
            property: 'og:type',
            content: 'website'
          },
          {
            property: 'og:title',
            content: 'Portfolio | Thisorp - Développeur Web'
          },
          {
            property: 'og:description',
            content:
              "Découvrez le portfolio de Thisorp, développeur web full stack passionné, Création de sites et applications web et mobiles avec JS, PHP, SQL et leurs frameworks, ainsi qu'en DevOps."
          },
          {
            property: 'og:site_name',
            content: 'Portfolio | Thisorp - Développeur Web'
          },
          {
            property: 'og:url',
            content: 'https://thisorp.id.vn'
          },
          {
            property: 'og:image',
            content: 'https://thisorp.id.vn/img/logo-portfolio-black.webp'
          },
          {
            property: 'og:image:alt',
            content: 'Logo Portfolio Thysorp'
          },
          {
            property: 'og:locale',
            content: 'fr_FR'
          },
          {
            property: 'og:locale:alternate',
            content: 'en_US'
          }
        ]
      }
    },
    {
      path: '/office',
      name: 'Office',
      component: Office,
      meta: {
        title: 'Bureau | Thisorp - Développeur Web',
        metaTags: [
          {
            rel: 'canonical',
            href: 'https://thysorp.id.vn/office'
          },
          {
            name: 'title',
            content: 'Bureau | Thisorp - Développeur Web'
          },
          {
            name: 'description',
            content:
              "Découvrez le bureau de Thisorp, développeur web full stack passionné, Création de sites et applications web et mobiles avec JS, PHP, SQL et leurs frameworks, ainsi qu'en DevOps."
          },
          {
            name: 'keywords',
            content: 'bureau, thisorp, développeur web, full stack, sites web, applications web, applications mobiles, JS, PHP, SQL, ORM, frameworks, DevOps'
          },
          {
            name: 'author',
            content: 'Thisorp'
          },
          {
            name: 'robots',
            content: 'index, follow'
          },
          {
            name: 'theme-color',
            content: '#000000'
          },
          {
            name: 'mobile-web-app-capable',
            content: 'yes'
          },
          {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
          },
          {
            name: 'apple-mobile-web-app-title',
            content: 'Bureau | Thisorp - Développeur Web'
          },
          {
            name: 'application-name',
            content: 'Bureau | Thisorp - Développeur Web'
          },
          {
            name: 'twitter:card',
            content: 'summary'
          },
          {
            name: 'twitter:title',
            content: 'Bureau | Thisorp - Développeur Web'
          },
          {
            name: 'twitter:description',
            content:
              "Découvrez le bureau de Thisorp, développeur web full stack passionné, Création de sites et applications web et mobiles avec JS, PHP, SQL et leurs frameworks, ainsi qu'en DevOps."
          },
          {
            name: 'twitter:image',
            content: 'https://thisorp.id.vn/img/logo-portfolio-black.webp'
          },
          {
            name: 'twitter:image:alt',
            content: 'Logo Portfolio Thisorp'
          },
          {
            name: 'og:type',
            content: 'website'
          },
          {
            name: 'og:title',
            content: 'Bureau | Thisorp - Développeur Web'
          },
          {
            name: 'og:description',
            content:
              "Découvrez le bureau de Thisorp, développeur web full stack passionné, Création de sites et applications web et mobiles avec JS, PHP, SQL et leurs frameworks, ainsi qu'en DevOps."
          },
          {
            name: 'og:site_name',
            content: 'Bureau | Thisorp - Développeur Web'
          },
          {
            name: 'og:url',
            content: 'https://thisorp.id.vn/office'
          },
          {
            name: 'og:image',
            content: 'https://thisorp.id.vn/img/logo-portfolio-black.webp'
          },
          {
            name: 'og:image:alt',
            content: 'Logo Portfolio Thisorp'
          },
          {
            name: 'og:locale',
            content: 'fr_FR'
          },
          {
            name: 'og:locale:alternate',
            content: 'en_US'
          }
        ]
      }
    }
  ]
})

export default router
