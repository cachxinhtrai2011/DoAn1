import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="https://coreui.io" target="_blank" rel="noopener noreferrer">UIT</a>
        <span className="ml-1">&copy; 2021 Quản Lý vốn Doanh Nghiệp.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">ReactJS</span>
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">Blockchain for React</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)