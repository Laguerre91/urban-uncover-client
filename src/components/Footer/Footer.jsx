import githubLogo from './../../assets/images/github-logo.png'
import './Footer.css'

const Footer = () => {

    return (
        <footer className="Footer">
            <a target="_blank" href="https://github.com/Laguerre91/urban-uncover-client">GitHub Link</a>
            <img className='github-logo' src={githubLogo} alt="Github Logo" />
            <p>©2024</p>
        </footer>
    )
}

export default Footer