import React, { useEffect, useState } from "react";
import FormLogin from "../../Components/FormLogin";
import InitialScreen from "../../Components/InitialScreen";

export default function LoginPage() {
 
  const [exibirLogin, setExibirLogin] = useState(false);  

  useEffect(() => {
  
    if (!exibirLogin) {
      setTimeout(function () {
        setExibirLogin(true);
      }, 2000);
    }

  }, [exibirLogin]);


  return (
    <>
      {!exibirLogin && <InitialScreen />}
      {exibirLogin && <FormLogin texto={"Entrar"} />}
    </>
  );
}
