import React from 'react'
import NavText from '../widgets/NavText';
import { scrollToSection } from '../functions';

export default function NavLinks(props) {

    const navLinks = [{ name: "Works", link: "works" }, { name: "About", link: "about" }, { name: "Blog", link: "blog" }]

    const scroll = (id) => {
        if (props.toggleMenu) {
            props.toggleMenu()
        }
        scrollToSection(id)
    }

    return (
        navLinks.map((item) => (
            <NavText onClick={() => scroll(item.link)}>
                {item.name}
            </NavText>
        ))
    )
}
