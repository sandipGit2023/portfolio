export default defineEventHandler(async(event) => {
  const config = useRuntimeConfig()
  const baseUrl = config.public.siteUrl || 'https://sandipghodasara.com'

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Sandip Ghodasara - Software Development Services',
    'description': 'Senior Software Engineer providing Laravel, Vue.js, React, and Node.js development services',
    'url': baseUrl,
    'telephone': '+919173420297',
    'email': 'ghodasarasandip011@gmail.com',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Gota',
      'addressLocality': 'Ahmedabad',
      'addressRegion': 'Gujarat',
      'postalCode': '380061',
      'addressCountry': 'IN',
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': 23.0225,
      'longitude': 72.5714,
    },
    'openingHours': 'Mo-Su 09:00-18:00',
    'priceRange': '$$',
    'currenciesAccepted': 'INR, USD',
    'paymentAccepted': 'Cash, Credit Card, Bank Transfer',
    'areaServed': [
      {
        '@type': 'Country',
        'name': 'India',
      },
      {
        '@type': 'City',
        'name': 'Ahmedabad',
      },
    ],
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'Software Development Services',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Laravel Development',
            'description': 'Custom Laravel applications and APIs',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Vue.js Development',
            'description': 'Modern Vue.js frontend applications',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'React Development',
            'description': 'React.js applications and components',
          },
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Service',
            'name': 'Node.js Development',
            'description': 'Backend services and APIs',
          },
        },
      ],
    },
    'founder': {
      '@type': 'Person',
      'name': 'Sandip Ghodasara',
      'jobTitle': 'Senior Software Engineer',
    },
  }

  setHeader(event, 'Content-Type', 'application/json')
  return localBusinessSchema
})
