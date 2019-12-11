export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Datetime: any,
};

export type CriarRepublicaInput = {
  nome: Scalars['String'],
  endereco: Scalars['String'],
  localizacao: Array<Scalars['Float']>,
  tipo: Tipo,
  descricao: Scalars['String'],
  disponivel: Scalars['Boolean'],
};


export type EditarRepublicaInput = {
  nome?: Maybe<Scalars['String']>,
  endereco?: Maybe<Scalars['String']>,
  localizacao: Array<Scalars['Float']>,
  tipo?: Maybe<Tipo>,
  descricao?: Maybe<Scalars['String']>,
  disponivel?: Maybe<Scalars['Boolean']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  criarRepublica: ResponsePayload,
  editarRepublica: ResponsePayload,
};


export type MutationCriarRepublicaArgs = {
  input: CriarRepublicaInput
};


export type MutationEditarRepublicaArgs = {
  input: EditarRepublicaInput
};

export type Node = {
  id: Scalars['ID'],
};

export type PageInfo = {
   __typename?: 'PageInfo',
  hasNextPage: Scalars['Boolean'],
  hasPreviousPage: Scalars['Boolean'],
  startCursor?: Maybe<Scalars['String']>,
  endCursor?: Maybe<Scalars['String']>,
};

export type Query = {
   __typename?: 'Query',
  node?: Maybe<Node>,
};


export type QueryNodeArgs = {
  id: Scalars['ID']
};

export type Republica = Node & {
   __typename?: 'Republica',
  id: Scalars['ID'],
  nome?: Maybe<Scalars['String']>,
  tipo?: Maybe<Tipo>,
  distancia?: Maybe<Scalars['Int']>,
};

export type ResponsePayload = {
   __typename?: 'ResponsePayload',
  success: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
};

export enum Tipo {
  Feminina = 'FEMININA',
  Masculina = 'MASCULINA',
  Mista = 'MISTA'
}
