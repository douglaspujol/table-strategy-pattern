export type CountryCode = 'US' | 'AR' | 'BR'

export type DataAPIBrasil = {
  number: string
  name: string
  phone: string
  profession: string
  weight: number
  height: number
  status: string
}

export type DataAPIArgentina = {
  number: string
  name: string
  phone: string
  profession: string
  weight: number
  height: number
  status: string
  cidade: string
  estado: string
  salario: number
}

export type DataAPIAmericano = {
  id: number
  titulo: string
  descricao: string
  ativo: boolean
  dataCriacao: string
  cidade: string
  estado: string
  salario: number
}

export type DataAPI = DataAPIBrasil | DataAPIArgentina | DataAPIAmericano

export type DataAPIMap = {
  BR: DataAPIBrasil
  AR: DataAPIArgentina
  US: DataAPIAmericano
}
