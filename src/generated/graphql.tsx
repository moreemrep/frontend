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


export type Coordenadas = {
   __typename?: 'Coordenadas',
  latitude: Scalars['Float'],
  longitude: Scalars['Float'],
};

export type CoordenadasInput = {
  latitude: Scalars['Float'],
  longitude: Scalars['Float'],
};

export type CriarRepublicaInput = {
  nome: Scalars['String'],
  endereco: Scalars['String'],
  localizacao: CoordenadasInput,
  tipo: Tipo,
  descricao: Scalars['String'],
  disponivel: Scalars['Boolean'],
  mostrarNoMapa: Scalars['Boolean'],
};

export type CriarRepublicaPayload = {
   __typename?: 'CriarRepublicaPayload',
  republica?: Maybe<RepublicaUser>,
  success: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
};

export type CriarUniversidadeInput = {
  nome: Scalars['String'],
  sigla: Scalars['String'],
  localizacao: CoordenadasInput,
};


export type EditarRepublicaInput = {
  nome?: Maybe<Scalars['String']>,
  endereco?: Maybe<Scalars['String']>,
  localizacao: CoordenadasInput,
  tipo?: Maybe<Tipo>,
  descricao?: Maybe<Scalars['String']>,
  disponivel?: Maybe<Scalars['Boolean']>,
  mostrarNoMapa?: Maybe<Scalars['Boolean']>,
};

export type LoginPayload = {
   __typename?: 'LoginPayload',
  republica: RepublicaUser,
  success: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
};

export type Mutation = {
   __typename?: 'Mutation',
  criarUniversidade: ResponsePayload,
  criarRepublica: CriarRepublicaPayload,
  editarRepublica: ResponsePayload,
  login: LoginPayload,
  procurarRepublica: ProcurarRepublicaPayload,
  procurarUniversidade: ProcurarUniversidadePayload,
};


export type MutationCriarUniversidadeArgs = {
  input: CriarUniversidadeInput
};


export type MutationCriarRepublicaArgs = {
  input: CriarRepublicaInput
};


export type MutationEditarRepublicaArgs = {
  input: EditarRepublicaInput
};


export type MutationProcurarRepublicaArgs = {
  input: ProcurarRepublicaInput
};


export type MutationProcurarUniversidadeArgs = {
  input: ProcurarUniversidadeInput
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

export type ProcurarRepublicaInput = {
  universidade: Scalars['ID'],
  tipo: Tipo,
  distancia: Scalars['Int'],
};

export type ProcurarRepublicaPayload = {
   __typename?: 'ProcurarRepublicaPayload',
  republicas: Array<RepublicaPayload>,
  centro: Coordenadas,
  success: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
};

export type ProcurarUniversidadeInput = {
  nome?: Maybe<Scalars['String']>,
  sigla?: Maybe<Scalars['String']>,
};

export type ProcurarUniversidadePayload = {
   __typename?: 'ProcurarUniversidadePayload',
  universidades: Array<Universidade>,
  success: Scalars['Boolean'],
  error?: Maybe<Scalars['String']>,
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

export type RepublicaPayload = {
   __typename?: 'RepublicaPayload',
  distancia: Scalars['Float'],
  nome: Scalars['String'],
  descricao: Scalars['String'],
  localizacao?: Maybe<Coordenadas>,
};

export type RepublicaUser = Node & {
   __typename?: 'RepublicaUser',
  id: Scalars['ID'],
  nome: Scalars['String'],
  endereco: Scalars['String'],
  localizacao: Coordenadas,
  tipo: Tipo,
  mostrarNoMapa: Scalars['Boolean'],
  disponivel: Scalars['Boolean'],
  descricao: Scalars['String'],
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

export type Universidade = Node & {
   __typename?: 'Universidade',
  id: Scalars['ID'],
  nome: Scalars['String'],
  sigla: Scalars['String'],
  localizacao: Coordenadas,
};
