export type DTORecord = Record<string, unknown>;

export type DTOError = {
  message: string
  code?: string
}

/**
* The main response envolope to be used by 2XX statuses
*/
export interface DataEnvelope {
  data: DTORecord | DTORecord[]
}

/**
* The error respsonse envolope to be used by 4XX/5XX statuses
*/
export interface ErrorEnvelope {
  errors: DTOError[]
}
