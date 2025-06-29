const clientes = document.getElementById("listaClientes");

fetch("https://crudcrud.com/api/cdb0328c2b9840e1bca850e942470695/clientes")
.then(resposta => resposta.json())
.then((listaDeClientes) => {
    listaDeClientes.forEach(cliente => {
        const item = document.createElement("li");
        item.innerHTML = `${cliente.nome}; ${cliente.email} <button onClick = "remove('${cliente._id}')">x</button>`;
        clientes.appendChild(item)
    })
})

document.getElementById("cadastrar").addEventListener("click", ()=>{
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    fetch("https://crudcrud.com/api/cdb0328c2b9840e1bca850e942470695/clientes", {
    method: "POST",
    headers: {
        "Content-Type":"application/json"
    },
    body: JSON.stringify({nome: nome, email: email})
    })
    .then(resposta => resposta.json())
    .then((cliente) =>{
        const item = document.createElement("li");
        item.innerHTML =`${cliente.nome}; ${cliente.email} <button onclick = "remove('${cliente._id}')">x</button>`;
        clientes.appendChild(item);
    })
})

function remove(id){
    const button = window.event.target;
    const item = button.parentElement;

    fetch(`https://crudcrud.com/api/cdb0328c2b9840e1bca850e942470695/clientes/${id}`,{
        method: "DELETE",
    })
    .then(() =>{
        item.remove()
    })
}