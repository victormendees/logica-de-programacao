let temLeite = true
let idLeite = "Leite "
let temOvos = false
let idOvos = "Ovos"
let possuiItens = "Item adicionado ao carrinho: "
let itemEmFalta = "Item indisponivel: "
let itens = ""

if (temLeite===true) {
itens = "Leite"
console.log (possuiItens + idLeite)
}

else if (temLeite===false) {
console.log (itemEmFalta + idLeite)
}

else {
console.log ("Codigo indisponivel, entre em contato com o suporte")
}

if (temOvos===true) {
itens = "Ovos"
console.log (possuiItens + idOvos)
}

else if (temOvos===false) {
console.log (itemEmFalta + idOvos)
}

else {
console.log ("Codigo indisponivel, entre em contato com o suporte")
}