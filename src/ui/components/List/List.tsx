import { Button } from "@mui/material"
import {
  ListStyled,
  ItemsList,
  Photo,
  InfoList,
  Name,
  Description
} from "./List.style"
import { Pet } from '../../../data/@types/Pet'
import { TextService } from '../../../data/services/TextService'

interface ListProps {
  pets: Pet[];
}

export default function List(props: ListProps) {
  const maxSizeText = 200;

  return (
    <ListStyled>
      {props.pets.map(pet => (
        <ItemsList key={pet.id}>
          <Photo src={pet.photo} alt={pet.name}></Photo>
          <InfoList>
            <Name>{pet.name}</Name>
            <Description>
              {TextService.limitText(pet.description, maxSizeText)}
            </Description>
            <Button
              variant="contained"
              fullWidth>
              Adotar {pet.name}
            </Button>
          </InfoList>
        </ItemsList>
      ))}
    </ListStyled> 
  )
} 