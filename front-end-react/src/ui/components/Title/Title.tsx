import { TitleStyled, SubTitle } from "./Title.style";

interface TitleProps {
  title: string;
  // ? = indica que a propriedade é opcional
  // string | JSX.Element = podemos passar uma string ou um elemento, ex: <div>
  subtitle?: string | JSX.Element;
}

export default function Title(props: TitleProps){
  return (
    <div>
      <TitleStyled>{props.title}</TitleStyled>
      <SubTitle>{props.subtitle}</SubTitle>
    </div>
  )
}