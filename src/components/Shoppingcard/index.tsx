import { Card, CardBody, CardFooter, CardHeader, Cardicon, CardIconContainer, CardImageContainer, CardTitles, Pricing, ProdPrice, ProdSubPrice, Productdetail, ProductName } from "./shopcardstyled"
import vector from '../../assets/vector.svg'
import Circle from "../Circle"
import { SlBasket } from 'react-icons/sl';

type shoppingCardProps = {
    id?: number
    productName: string
    detail: string
    price: number
    image: string
}

function ShoppingCard({
    productName,
    detail,
    price,
    image
}: shoppingCardProps){
    return (
        <Card>
            <CardIconContainer>
                <Cardicon src={vector} alt="" />
            </CardIconContainer>
            <CardHeader>
                <CardImageContainer>
                    <img src={image} alt={productName}/>
                </CardImageContainer>
            </CardHeader>
            <CardBody>
                <CardTitles>
                    <ProductName>{productName}</ProductName>
                    <Productdetail>{detail}</Productdetail>
                </CardTitles>
                <CardFooter>
                    <Pricing>
                        <ProdPrice>{price} грн</ProdPrice>
                        <ProdSubPrice>1 шт</ProdSubPrice>
                    </Pricing>
                    <Circle size="47px" Icon={SlBasket} isShadow={true}/>
                </CardFooter>
            </CardBody>
        </Card>
    )
}

export default ShoppingCard