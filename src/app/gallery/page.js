import Image from 'next/image'
import BasicPage from '@comps/templates/basicPage'

const pageData = {
  title: 'Photo\'s by Paul Le Houillier',
}

export default function Gallery() {
  return (
    <main>
      <BasicPage pageData={pageData}/>
    </main>
  )
}
