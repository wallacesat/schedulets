export interface Equipe {
  id: number
  name: string
}
export interface Agenda {
  horarios?: Date[]
  equipes?: Equipe[]
}
export interface Response {
  data?: Agenda
}
