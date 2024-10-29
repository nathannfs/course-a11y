import './globals.css'

import Provider from './provider'

export const metadata = {
  title: 'Desenvolvendo uma web acessível - Rocketseat Blog',
  description: 'Blog da Rocketseat',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
