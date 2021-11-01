export const GoToLogin = (history) => {
    history.push("/login")
}
export const GoToSignUp = (history) => {
    history.push("/cadastro")
}
export const GoToAddRecipes = (history) => {
    history.push("/Adicionar-Receita")
}
export const GoToDetail = (history, id) => {
    history.push(`/detalhe/${id}`)
}
export const GoToRecipeList = (history) => {
    history.push("/")
}