import Link from 'next/link';
import { unstable_rootParams } from 'next/server';

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'de' }, { lang: 'fr' }, { lang: 'es' }];
}

export default async function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  const root = await unstable_rootParams();

  return (
    <html lang={root.lang}>
      <body>
        <Link href="/en">Home</Link> | <Link href="/en/photo">Photo</Link>
        <hr />
        {children}
        {modal}
      </body>
    </html>
  );
}
