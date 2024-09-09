export const dynamic = 'force-dynamic';

import { redirect } from 'next/navigation';

export default function NotFound() {
  // Redirect to the home page
  redirect('/');

  return null;
}