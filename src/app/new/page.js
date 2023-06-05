// import Image from 'next/image'
import styles from './page.module.css'
import { generatePageMetadata } from '@/services/generatePageMetadata'

export const generateMetadata = generatePageMetadata('New questionnaire')

export default function Home() {
  return (
    <main>
      <header>
        <h1>New questionnaire</h1>
      </header>
    </main>
  )
}
