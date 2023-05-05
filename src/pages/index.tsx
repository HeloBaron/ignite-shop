import Image from "next/image";
import { HomeContainer, Product } from "../styles/pages/home";

import logo from '../assets/logo.svg'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={logo} width={520} height={480} alt=""/>

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={logo} width={520} height={480} alt=""/>

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
