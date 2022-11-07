export interface IPedidoVenda {
    id: number,
    numero: number,
    vendedorId: number,
    clienteId: number,
    usuarioId: number,
    desconto: number,
    valorBruto: number,
    valorLiquido: number,
    status: string,
    dataCriacao: string,
    observacoes: string
}