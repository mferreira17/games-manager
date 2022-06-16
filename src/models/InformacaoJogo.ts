export default interface IJogo {
    
    readonly nome: string 
    readonly dataLancamento : Date
    readonly imagem : string
    readonly rawgGameId: number
    plataforma: string
}