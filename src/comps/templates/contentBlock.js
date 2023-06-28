import React from 'react'

const ContentBlock = ({children}) => {
    const renderBlock = () => {
        return (
        <div className='rounded border shadow-lg border-secondary mx-auto p-4 border-1'>
            <div>
                {children}
            </div>
        </div>
        )
    }
    const render = () => {
        return (
        <div className='container row mx-auto'>
            <div className='col-1'></div>
            <div className='col-10'>
                {renderBlock()}
            </div>
            <div className='col-1'></div>

        </div>
        )
    }
    return (
        render()
    )
}

export default ContentBlock
