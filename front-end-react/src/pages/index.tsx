import type { NextPage } from 'next'
import List from '../ui/components/List/List'
import Title from '../ui/components/Title/Title'
import { Dialog, TextField, Grid, DialogActions, Button, Snackbar } from '@mui/material'
import { useIndex } from '../data/hooks/pages/useIndex'; 
 
const Home: NextPage = () => {
  const {
    listaPets,
    petSelected,
    setPetSelected,
    email,
    setEmail,
    price,
    setPrice,
    msg, 
    setMsg,
    adopt
  } = useIndex();

  return (
    <>
      <Title
        title="titulo aqui"
        subtitle={
          <span>Com um pequeno valor mensal, você <br /> pode <b>adotar um pet virtualmente</b>
          </span>
        }
      />

      <List
        pets={listaPets}
        onSelect={(pet) => setPetSelected(pet)}
      />
      
      <Dialog
        open={petSelected !== null}
        fullWidth
        PaperProps={{ sx: { p: 5 } }}
        onClose={() => setPetSelected(null)}
      >
        <Grid container spacing={2} >
          <Grid item xs={12} >
            <TextField
              label={'E-mail'}
              type={'email'}            
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              label='Valor'
              type={'number'}
              fullWidth 
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            /> 
          </Grid>
        </Grid>
        <DialogActions sx={{ mt: 5 }}>
          <Button 
            color={'secondary'}
            onClick={() => setPetSelected(null)} 
          >
            Cancelar
          </Button>
          <Button 
            variant={'contained'} 
            onClick={() => adopt()}
          >
            Confimar adoção
          </Button>
        </DialogActions> 
      </Dialog>

      <Snackbar 
        open={msg.length > 0}
        message={msg}
        autoHideDuration={2500}
        onClose={() => setMsg('')}
      /> 
    </>
  )
}

export default Home
