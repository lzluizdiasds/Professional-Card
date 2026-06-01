
import { useState } from 'react'
import Avatar from './components/avatar'
import ProfileInfo from './components/ProfileInfo'
import LinkList from './components/LinkList'

const links = [
  {label: '🐙 GitHub', url:'https://github.com/lzluizdiasds'},
  {label: '💼 LinkedIn', url: 'https://www.linkedin.com/in/luiz-dias-artigas-junior-49a5a7214/'},
  {label: '📧 Email', url: 'mailto:lusdiasskt@gmail.com'},
]

function App() {
  const [isLight, setIsLight] = useState(false)

  const toggleTheme = () => {
    setIsLight(!isLight)
    document.body.classList.toggle('light')
  }

  return (
    <div className="container">
      <button className="theme-btn" onClick={toggleTheme}>
        {isLight ? '🌙' : '☀️'}
      </button>
      <div className="card">
        <Avatar src="https://github.com/lzluizdiasds.png" alt="Minha Foto" />
        <ProfileInfo 
        name="Luiz Dias Artigas Junior"
        bio="Fui Empresario/Barbeiro por 11 Anos e Agora em Transição paraDesenvolvedor Front-end em Construção..."
        />
        <LinkList links={links}/>

      </div>
    </div>
  )
}
export default App;