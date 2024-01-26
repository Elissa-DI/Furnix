import '@styles/globals.css';
import Navbar from '@components/navbar';

// export const metadata = {
//     title: 'PromptForge',
//     description: 'Discover and share AI prompts'
// }

const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <head>
                {/* <link rel="shortcut icon" href="/assets/images/logo.svg" /> */}
            </head>
            <body>
                <main className='app'>
                    <Navbar />
                    {children}
                </main>
            </body>
        </html>
    )
}

export default RootLayout