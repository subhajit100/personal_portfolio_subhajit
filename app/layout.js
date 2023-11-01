import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Personal Portfolio Website- Subhajit Adhikary',
  description: "This is my Personal Portfolio website created using NextJs. It includes my achievements, projects, certification, skills and contact me section. I am open to freelance projects in MERN stack for clients at the rate of 10$/hour. I have good expertise in Javascript and React. I love building end to end web apps with complex functionalities. Let's connect and build something great.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
