import {
  randAbbreviation,
  randFullName,
  randNumber,
  randPastDate,
  randUrl,
  randWeekday,
} from '@ngneat/falso'

export const mockRemoteLoadPlanetsModel = (): any => ({
  name: randFullName(),
  rotation_period: randNumber().toString(),
  orbital_period: randNumber().toString(),
  diameter: randNumber().toString(),
  climate: randWeekday(),
  gravity: randNumber().toString(),
  terrain: randAbbreviation(),
  surface_water: randNumber().toString(),
  population: randNumber().toString(),
  residents: randUrl({ length: 5 }),
  films: randUrl({ length: 5 }),
  created: randPastDate().toString(),
  edited: randPastDate().toString(),
  url: randUrl(),
})

export const mockRemoteLoadPlanetsListModel = (): any => [
  mockRemoteLoadPlanetsModel(),
  mockRemoteLoadPlanetsModel(),
]
