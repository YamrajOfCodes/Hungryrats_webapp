import React from 'react'
import Adminsidebar from '../../Components/Admincommonlayout/Adminsidebar'

const CommonLayout = ({children}) => {
  return (
    <Adminsidebar children={children}/>
  )
}

export default CommonLayout
