import { useState, useContext } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import ListSubheader from '@material-ui/core/ListSubheader'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Chip from '@material-ui/core/Chip'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon} from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-regular-svg-icons'
import Context from '../../context'

export default function HamburgerMenu({ isMenuOpen, setIsMenuOpen,}) {
  const { isDarkModeOn, toggleColorMode, } = useContext(Context)
  const [ isSublistOpen, setIsSublistOpen ] = useState(false)

  return (
    <DivHamburgerMenu>
      <div
        className={`hamburgerMenuButton ${!isMenuOpen ? "" : "opened"}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <div></div>
      </div>
      <div className={`menu ${!isMenuOpen ? "" : "visible"}`}>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Menu
            </ListSubheader>
          }
        > 
          <ListItem button onClick={() => setIsSublistOpen(!isSublistOpen)}>
            <ListItemText primary="Categories" />
            {isSublistOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={isSublistOpen} timeout="auto" unmountOnExit>
            <List component="div" >
            <a onClick={() => {setIsMenuOpen(false); setIsSublistOpen(false)}}>
            <ListItem button>
              <Chip
                      label="Berita"
                      variant="outlined"
                      color="primary"
                      size="small"
                    />
            </ListItem>
            <ListItem button>
            <Chip
                      label="Pesan & Laporan"
                      variant="outlined"
                      color="primary"
                      size="small"
                    />
            </ListItem>
            <ListItem button>
            <Chip
                      label="Bincang"
                      variant="outlined"
                      color="primary"
                      size="small"
                    />
            </ListItem>
            <ListItem button>
            <Chip
                      label="Bina Iman"
                      variant="outlined"
                      color="primary"
                      size="small"
                    />
            </ListItem>
            <ListItem button>
            <Chip
                      label="Kesaksian & Pelayanan"
                      variant="outlined"
                      color="primary"
                      size="small"
                    />
            </ListItem>
            <ListItem button>
            <Chip
                      label="Feature"
                      variant="outlined"
                      color="primary"
                      size="small"
                    />
            </ListItem>
            <ListItem button>
            <Chip
                      label="Jeda & Doa"
                      variant="outlined"
                      color="primary"
                      size="small"
                    />
             </ListItem>
            </a>
        </List>
      </Collapse>

          <Link href="/whatsapp.me">
            <a onClick={() => setIsMenuOpen(false)}>
              <ListItem button>
                <ListItemText primary="Contact" />
              </ListItem>
            </a>
          </Link>
          <Link href="/about">
            <a onClick={() => setIsMenuOpen(false)}>
              <ListItem button>
                <ListItemText primary="About" />
              </ListItem>
            </a>
          </Link>
          <ListItem 
            button 
            onClick={e => toggleColorMode(e)} 
            id={`${isDarkModeOn ? 'swithToLightMode' : 'swithToDarkMode'}`}
          >
            {
              isDarkModeOn ? (
                <FontAwesomeIcon icon={faMoon} size="lg" />
              ) : (
                <FontAwesomeIcon icon={faSun} size="lg" />
              )
            }  
            <ListItemText primary={`Dark mode: ${isDarkModeOn ? 'on' : 'off'}`} />      
          </ListItem>
        </List>
      </div>
    </DivHamburgerMenu>
  )
}

const DivHamburgerMenu = styled.div`
  > .hamburgerMenuButton {
    margin-right: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    cursor: pointer;
    transition: all .2s ease-in-out;
    z-index: 2;
    > :first-child {
      width: 36px;
      height: 5px;
      background: black;
      border-radius: 5px;
      transition: all .2s ease-in-out;
      &::before, &::after {
        content: '';
        position: absolute;
        width: 36px;
        height: 5px;
        background: black;
        border-radius: 5px;
        transition: all .2s ease-in-out;
      }
      &::before {
        transform: translateY(-15px);
      }
      &::after {
        transform: translateY(15px);
      }
    }
  }
  > .opened > :first-child {
    background: transparent;
    &::before {
      transform: rotate(45deg);
    }
    &::after {
      transform: rotate(-45deg);
    }
  }
  > :last-child {
    z-index: -1;
    position: fixed;
    top: 69px;
    left: 0;
    background-color: #FFFFFF;
    overflow: hidden;
    width: 100%;
    height: 0;
    transition: height .3s;
    > nav > :nth-child(4) > svg {
      margin-right: 1em;
    }
    > nav > :last-child > svg {
      margin-right: 1em;
    }
  }
  > .visible {
    height: 100%;
    a {
      text-decoration: none;
      color: black;
      > div > div {
        cursor: pointer;
      }
    }
  }
`
