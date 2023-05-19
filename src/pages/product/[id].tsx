import { useRouter } from "next/router"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"


export default function Product() {
    const { query } = useRouter()
    
    return(
    <ProductContainer>
        <ImageContainer>

        </ImageContainer>

        <ProductDetails>
            <h1>Camiseta X</h1>
            <span>R$ 79,90</span>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In sapiente doloribus natus error eos facilis culpa incidunt maxime nulla ratione, nobis placeat! Nisi exercitationem ea magni facere doloremque sed nesciunt.</p>

            <button>Comprar agora</button>
        </ProductDetails>
    </ProductContainer>
    )
}