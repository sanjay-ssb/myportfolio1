import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'
import {FaHackerrank} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/sanjay-bhandari-ssb" target='_blank'><BsLinkedin size={25}/></a>
        <a href="https://www.github.com/sanjay-ssb" target='_blank'><FaGithubSquare size={25}/></a>
        <a href="https://www.hackerrank.com/sanjay_bhandari6" target='_blank'><FaHackerrank size={25}/></a>
        <a href="https://www.leetcode.com/sanjay-ssb" target='_blank'><SiLeetcode size={25}/></a>
    </div>
  )
}

export default HeaderSocials