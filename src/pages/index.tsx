import type { NextPage } from 'next'  
import List from '../ui/components/List/List'
import Title from '../ui/components/Title/Title' 

function MeuComponente(){
  return <div>TreinaWeb</div>
}

const Home: NextPage = () => {
  return (
    <> 
      <Title 
        title=" titulo aqui" 
        subtitle={
        <span>Com um pequeno valor mensal, você <br></br> pode <b>adotar um pet virtualmente</b></span>
        }>
      </Title> 
      <List>
        pets={[
          {
            id: 1,
            name: 'Bidu',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, velit corporis rem, error reprehenderit cum incidunt doloremque eligendi eaque ducimus eveniet dolorem nostrum fugiat vel, maiores illo officiis aliquam ratione.',
            photo: '/imagens/dog1.jpg'
          },
          {
            id: 2,
            name: 'Bidu',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, velit corporis rem, error reprehenderit cum incidunt doloremque eligendi eaque ducimus eveniet dolorem nostrum fugiat vel, maiores illo officiis aliquam ratione.',
            photo: '/imagens/dog1.jpg'
          },
        ]}
      </List>      
    </>
  )
}

export default Home
