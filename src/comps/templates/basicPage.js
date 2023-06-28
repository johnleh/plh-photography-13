
export default function BasicPage({pageData,children}) {
  return (
    <main>
        <div className='text-center'>
            <p className='page-title'>{pageData.title}</p>
            <p className='w-75 mx-auto'>{pageData.paragraph1}</p>
            <div className='page-content'>
                {children}
            </div>
            <p className='page-title'>{pageData.paragraph2}</p>
        </div>
    </main>
  )
}
