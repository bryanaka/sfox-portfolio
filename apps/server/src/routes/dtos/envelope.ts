export type DTORecord = Record<string, unknown>;

export type DTOError = {
  message: string
  code: string
}

export interface DataEnvelope {
  data: DTORecord | DTORecord[]
}

export interface ErrorEnvelope {
  errors: DTOError[]
}