import { useState, useEffect } from "react";
import { Pet } from '../../@types/Pet';
import { ApiService } from "../../services/ApiService";
import { AxiosError } from "axios";

export function useIndex(){
  const [listaPets, setListPet] = useState<Pet[]>([]),
    // estados
    [petSelected, setPetSelected] = useState<Pet | null >(null),
    [email, setEmail] = useState(''),
    [price, setPrice] = useState(''),
    [msg, setMsg] = useState('');

  // array de depêndencias
  useEffect(() => {
    ApiService.get('/pets')
      .then((resp) => {
        setListPet(resp.data)
      })
  }, []) 
  
  // limpa modal sempre que for fechada
  useEffect(() => {
    if(petSelected === null){
      ClearForm();
    }  
  }, [petSelected])

  function adopt(){
    if(petSelected !== null){
      if(valiteDataAdopt()){
        ApiService.post('/adocoes', {
          pet_id: petSelected.id,
          email,
          price
        })
          .then(() => {
            setPetSelected(null)
            setMsg('Pet adotado com sucesso!'); 
          })
          .catch((error: AxiosError) => {
            setMsg(error.response?.data.message)
          })
      } else {
        setMsg('Preencha todos os campos obrigatórios')
      }
    }
  }

  function valiteDataAdopt(){
    return email.length > 0 && price.length > 0;
  }

  function ClearForm(){
    setEmail('');
    setPrice('');
  }

  return {
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
  };
}