import Image from 'next/image'
import BasicPage from '@comps/templates/basicPage'

const pageData = {
  title: 'Loading...',
}

export default function Home() {
  return (
    <main>
      <BasicPage pageData={pageData}/>
    </main>
  ) 
}
