import React from 'react';//importando o react
import { BrowserRouter, Route, Switch } from 'react-router-dom';//o que precisa ficar com todas as rotas pra que as outras rotas funcionem

import Logon from './pages/Logon';//importando a primeira pagina
import Register from './pages/Register';//importando a primeira pagina
import Profile from './pages/Profile';//importando a primeira pagina
import NewIncident from './pages/NewIncident'; //importando a primeira pagina

//rotas tbm serão um componente então vamos exportar
export default function Routes(){
    return (
        <BrowserRouter>
            { /*Garantir que uma rota seja chamada por momento*/ }
            <Switch>
                <Route path="/" exact component={Logon}/> {/*o caminho que tem ser exatamente esse para mostrar*/}
                <Route path="/register" component={Register}/>
               
                <Route path="/profile" component={Profile}/>
                <Route path="/incidents/new" component={NewIncident}/>


            </Switch>
        </BrowserRouter>
    );
}