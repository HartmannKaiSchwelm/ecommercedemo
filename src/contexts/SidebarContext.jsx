import React, { useState, createContext, useContext} from 'react'
import PropTypes from 'prop-types';

export const SidebarContext = createContext();
const SidebarProvider = ({children}) => {

  //sidebar state
  const [isOpen, setIsOpen] = useState(false);
  
  const handleClose = () => {
    setIsOpen(!isOpen);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };
  return (
    <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose, handleOpen }}>
      {children}
    </SidebarContext.Provider>
  )
}
SidebarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SidebarProvider