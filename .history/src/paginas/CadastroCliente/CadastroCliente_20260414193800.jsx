import Principal from "../../componentes/Principal/Principal";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import { useState } from "react";
import { formatarComMascara, MASCARA_CELULAR, MASCARA_CPF, MASCARA_EMAIL} from "../../utils/formatarComMascara";
import validarCPF from "../../utils/validarCPF";
import validarEmail from "../../utils/validarEmail";

import { toast } from 'react-toastify';

function CadastroCliente() {
  const [cliente, setCliente] = useState({
    nome: "",
    cpf: "",
    dataNascimento: "",
    celular: "",
    email: "",
    foto: null,
  });

  const salvar = () => {
    if(!cliente.nome){}
    console.log("Cliente salvo:", cliente);
  }

  return (
    <Principal titulo="Novo Cliente">
      <CampoCustomizado
        label="Nome"
        value={cliente.nome}
        onChange={(e) => setCliente({ ...cliente, nome: e.target.value })}
    />
      <CampoCustomizado 
      label="CPF"
        value={cliente.cpf}
        onChange={(e) => setCliente({ ...cliente, cpf: formatarComMascara(e.target.value,MASCARA_CPF) })} 
        onBlur={(e)=>{

          if(e.target.value.trim() && !validarCPF(e.target.value)){
            toast.error("CPF inválido");

          }
          
        }}
    />
      <CampoCustomizado type="date" 
      label="Data Nascimento"
      value={cliente.dataNascimento}
      onChange={(e)=> setCliente({...cliente, dataNascimento: e.target.value})}
    />
      <CampoCustomizado type="tel" 
      label="Celular" 
      value={cliente.celular}
      onChange={(e)=>
         setCliente({...cliente, celular: formatarComMascara(e.target.value, MASCARA_CELULAR)})
    }
    />
      <CampoCustomizado type="email"
       label="Email"
       value={cliente.email}
       onChange={(e) => setCliente({...cliente, email:e.target.value,})} 
       onBlur ={(e)=>{
        if(e.target.value.trim() && !validarEmail(e.target.value)){
          toast.error("Email inválido")
        }

       }}
       />
       
       <CampoCustomizado
       
       type="file"
       accept="image/*"
       label="Foto"
       onChange={(e)=>{

        const image = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) =>{
          setCliente({...cliente, foto: event.target.result});
        };
        reader.readAsDataURL(image);
      }}
       />
       {cliente.foto &&(
        <img
        src={cliente.foto}
        alt="Pré-visualização"
        style={{width: '150px', marginTop:'10px'}}
        />
       )}
      <BotaoCustomizado tipo="primario" aoClicar={salvar} >Salvar</BotaoCustomizado>
    </Principal>
  );
}

export default CadastroCliente;
