import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className='wrapper'>
        {children}
      </body>
    </html>
  )
}
