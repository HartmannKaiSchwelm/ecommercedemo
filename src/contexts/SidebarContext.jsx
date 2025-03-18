import React, { useState, createContext, useContext, useEffect} from 'react'
import PropTypes from 'prop-types';

export const SidebarContext = createContext();

const SidebarProvider = ({children}) => {

  //sidebar state
  const [isOpen, setIsOpen] = useState(false);

  
  
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden', 'pr-[15px]')
    } else {
      document.body.classList.remove('overflow-hidden', 'pr-[15px]')
    }
  }, [isOpen]) // Wichtig: Effekt bei Änderung von isOpen
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