// import Image from 'next/image'
import styles from './page.module.css'
import { generatePageMetadata } from '@/services/generatePageMetadata'

export const generateMetadata = generatePageMetadata('Home')

export default function Home() {
  return (
    <main>
      <header>
        <h1>NextJS practice</h1>
      </header>
    </main>
  )
}
