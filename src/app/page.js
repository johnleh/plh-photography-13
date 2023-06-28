import Image from 'next/image'
import BasicPage from '@comps/templates/basicPage'

const pageData = {
  title: 'Paul Le Houillier\'s Photography',
}

export default function Home() {
  return (
    <main>
      <BasicPage pageData={pageData}/>
    </main>
  ) 
}
