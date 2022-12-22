export interface IPermissoes {
    usuarios: {
        create: boolean;
        read: boolean;
        update: boolean;
        delete: boolean;
    };
    clientes: {
        create: boolean;
        read: boolean;
        update: boolean;
        delete: boolean;
        precosExclusivos: boolean;
    };
    produtos: {
        create: boolean;
        read: boolean;
        update: boolean;
        delete: boolean;
    };
    vendedores: {
        create: boolean;
        read: boolean;
        update: boolean;
        delete: boolean;
        clientesExclusivos: boolean;
    };
    fornecedores: {
        create: boolean;
        read: boolean;
        update: boolean;
        delete: boolean;
    };
    pedidosCompra: {
        create: boolean;
        read: boolean;
        update: boolean;
        delete: boolean;
    };
    notasFiscais: {
        create: boolean;
        read: boolean;
        update: boolean;
        delete: boolean;
    };
    pedidosVenda: {
        create: boolean;
        read: boolean;
        update: boolean;
        delete: boolean;
        selecionarVendedor: boolean;
    };
    aReceber: {
        create: boolean;
        read: boolean;
        update: boolean;
        delete: boolean;
    };
    aPagar: {
        create: boolean;
        read: boolean;
        update: boolean;
        delete: boolean;
    };
    configuracoes: {
        dadosDaConta: boolean;
        gruposUsuarios: boolean;
        listasPrecos: boolean;
        configuracoesNfe: boolean;
        certificados: boolean;
    };
}
