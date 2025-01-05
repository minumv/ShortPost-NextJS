import '@styles/globals.css';

export const metadata = {
    title: 'ShortPost',
    description: 'Discover and Share Short Posts '
}

export default function RootLayout({children}){
  return (
    <html>
        <body>
            <div className='main'>
                <div className='gradient'/>
            </div>

            <main className='app'>
                {children}
            </main>
        </body>
    </html>
  )
}
