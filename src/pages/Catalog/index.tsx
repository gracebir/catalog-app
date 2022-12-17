import React from "react";
import Circle from "../../components/Circle";
import Dropdown from "../../components/Dropdown";
import ShoppingCard from "../../components/Shoppingcard";
import SideCard from "../../components/SideCard";
import SideCategory from "../../components/SideCategory";
import Titles from "../../components/Titles";
import { pagenumbers, products } from "../../data";
import left from '../../assets/left.svg'
import {
  CatalogContainer,
  CatalogProductCategorySection,
  CatalogProductContainer,
  CatalogProductSection,
  DivCat,
  DivCatText,
  Divider,
  InfoPara,
  InfoSection,
  InfoTextSection,
  InfoTitle,
  InfoTitleWrap,
  PageCircle,
  PageCircletext,
  PageNavigation,
  PageNumbers,
  PageNumberSection,
  ProductCardSection,
} from "./catalogStyled";
import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";

function Catalog() {
  return (
    <Divider>
      <CatalogContainer>
        <Titles isSubtitle={true} />
        <CatalogProductContainer>
          <DivCat>
            <DivCatText>Показано 621 товарів</DivCatText>
            <Dropdown />
          </DivCat>
          <CatalogProductSection>
            <CatalogProductCategorySection>
              <SideCard />
              <SideCategory />
            </CatalogProductCategorySection>
            <ProductCardSection>
              {products.map((product, i) => (
                <ShoppingCard
                  productName={product.productName}
                  price={product.price}
                  detail={product.detail}
                  image={product.image}
                />
              ))}
            </ProductCardSection>
          </CatalogProductSection>
        </CatalogProductContainer>
        <PageNumberSection>
          <PageNavigation>
            <Circle Icon={BiChevronLeft} size={"30px"} isShadow={false} />
            <PageNumbers>
              {pagenumbers.map((page, i) => (
                <PageCircle key={i}>
                  <PageCircletext>{page}</PageCircletext>
                </PageCircle>
              ))}
            </PageNumbers>
            <Circle Icon={BiChevronRight} size={"30px"} isShadow={false} />
          </PageNavigation>
        </PageNumberSection>
      </CatalogContainer>
      <InfoSection>
        <InfoTextSection>
            <InfoTitleWrap>
                <img height={"25px"} src={left} alt="" />
                <InfoTitle>Засоби захисту рослин</InfoTitle>
            </InfoTitleWrap>
            <InfoPara>
                Засоби захисту рослин поділяють на чотири основні види: механічні, хімічні, біологічні та агротехнічні. Проте найраціональніше - це їх одночасне, правильне поєднання. Найпоширеніший метод - це хімічний. Існують тисячі різних видів препаратів хімічного захисту. Але не варто їх плутати, а тим більше об′єднувати з хімічними добривами. Методи їх впливу на рослини абсолютно протилежні.
            </InfoPara>
            <InfoPara>
                Необхідно знати і розрізняти хімічні засоби захисту рослин. Адже ці препарати мають суоро визначений об′єкт впливу (збудник хвороби, комахи-шкідники, вид або родина бур′янів).
            </InfoPara>
            <InfoPara>
                Отрутохімікати не терплять халатності. Це той тип препарату, який недостатньо просто розвести у воді і обприскати ним рослини. Якщо отрутохімікати неправильно застосувати, то вони можуть завдати шкоди вам, корисним комахам, урожаю.
            </InfoPara>
        </InfoTextSection>
      </InfoSection>
    </Divider>
  );
}

export default Catalog;
