import React from 'react'
import { Dropdown, Menu,Image } from 'semantic-ui-react'

const SignedIn = ({handleSignOut}) => {
  return (
    <div>
        <Menu.Item>
                <Image avatar spaced="right" src= "https://img.a.transfermarkt.technology/portrait/big/8198-1631656078.jpg?lm=1"/>
                <Dropdown pointing="top left" text="Cristiano Ronaldo">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={handleSignOut} text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
    </div>
  )
}

export default SignedIn