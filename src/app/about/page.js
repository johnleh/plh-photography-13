import Image from 'next/image'
import BasicPage from '@comps/templates/basicPage'
import ContentBlock from '@comps/templates/contentBlock'

const pageData = {
  title: 'Who is Paul Le Houillier?',
  paragraph1: 'Paul Le Houillier is a photographer based in the Boston area. He specializes in landscape and nature photography, but also enjoys photographing people, architecture, and events.',
}

export default function About() {
  return (
    <main>
      <ContentBlock>
        <BasicPage pageData={pageData}/>
      </ContentBlock>
    </main>
  )
}
