/**
 * ACTION TYPES
 */
export enum ProdutosTypes {
  LOAD_REQUEST = '@produtos/LOAD_REQUEST',
  LOAD_SUCCESS = '@produtos/LOAD_SUCCESS',
  LOAD_FAILURE = '@produtos/LOAD_FAILURE',
}

/**
 * DATA TYPES
 */
export interface Produto {
  id: number
  titulo: string
  tempo: number
  disponivel: boolean
  preco: number
  descricao: string
  selecionado: boolean
}

/**
 * STATE TYPE
 */
export interface ProdutosState {
  readonly data: Produto[]
  readonly loading: boolean
  readonly error: boolean
}
