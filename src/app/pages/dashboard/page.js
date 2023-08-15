import { getUsers } from "@/app/functions/handlerAcessAPI";

export default async function Dashboard() {
   const usuarios = getUsers()
    return (
        <div>
            <h1>Dashboard</h1>
            {usuarios.map ((usuarios => {
                return(
<h1>
    <p>{usuarios.nome}</p>
    <p>{usuarios.email}</p>
    <p>{usuarios.password}</p>
    

</h1>
                )
}))}
        </div>
    );
};