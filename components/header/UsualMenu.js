import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'
import Chip from '@material-ui/core/Chip'
import Typography from '@material-ui/core/Typography';

import styled from 'styled-components'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faSun } from '@fortawesome/free-regular-svg-icons'
import Context from '../../context'
import { useState, useContext } from 'react'
import dynamic from 'next/dynamic'

const SearchBar = dynamic(() => import('./SearchBar'), { ssr: false })

export default function UsualMenu({ isMenuOpen, setIsMenuOpen, data, error }) {
  const { isDarkModeOn, toggleColorMode} = useContext(Context)
  const [ isSublistOpen, setIsSublistOpen ] = useState(false)
  
  return (
    <div>
    <ListUsualMenu component="nav" aria-label="secondary mailbox folders">
      <ListItem button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`${isMenuOpen ? 'underscored' : ''}`}>
        <ListItemText primary="Categories" />
      </ListItem>
      <Collapse in={isMenuOpen} timeout="auto" unmountOnExit className="dropDownMenuList">
        <List component="div" disablePadding>
        <a onClick={() => setIsMenuOpen(false)}>
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
      
      <Link href="whatsapp.me">
        <a onClick={() => setIsMenuOpen(false)}>
          <ListItem button>
            <ListItemText primary="Contack" />
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
        aria-label={`Press to ${isDarkModeOn ? 'switch to light mode' : 'switch to dark mode'}`}
      >
        {
          isDarkModeOn ? (
            <FontAwesomeIcon icon={faMoon} size="lg" />
          ) : (
            <FontAwesomeIcon icon={faSun} size="lg" />
          )
        }        
      </ListItem>
      <SearchBar />
    </ListUsualMenu>
    </div>
  )
}

const ListUsualMenu = styled(List)`
  display: flex;
  > .underscored {
    border-bottom: 2px solid #B875CD;
  }
  > .dropDownMenuList {
    position: absolute;
    top: 57px;    
    max-width: 282px;
    max-height: 250px;
    background-color: white;
    border-radius: 0 0 15px 15px;
    overflow: auto;
  }
  a {
    text-decoration: none;
    color: black;
    white-space: nowrap;
    > div > div {
      cursor: pointer;
    }
  }
  > :nth-child(3) {
    border-radius: 30px;
  }
  > :last-child {
    border-radius: 30px;
  }
`
