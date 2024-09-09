import createMiddleware from 'next-intl/middleware';

const middleware = createMiddleware({
  // Add locales you want in the app
  locales: ['hy', 'en', 'ru'],

  // Default locale if no match
  defaultLocale: 'hy',
});

export default middleware;

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(hy|en|ru)/:page*'],
};