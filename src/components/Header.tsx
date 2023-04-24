import styles from './Header.module.css' //Precisa dar um nome para o arquivo funcionar

import igniteLogo from '../assets/ignite-logo.svg';

export function Header() {
  return (
    <header className={styles.header}>
      {" "}
      {/* className para nao confundir com class do js e chaves para puxar o arquivo css */}
      <img src={igniteLogo} alt="Logotipo do Ingnite" /> {/*Quando usar {chaves} tirar as "aspas" */}
    </header>
  )
}