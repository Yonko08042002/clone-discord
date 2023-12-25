// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `/`
  | `/channels/:channelID`
  | `/channels/:channelID/:id`
  | `/channels/:channelID/member_safety`
  | `/login`
  | `/register`

export type Params = {
  '/channels/:channelID': { channelID: string }
  '/channels/:channelID/:id': { channelID: string; id: string }
  '/channels/:channelID/member_safety': { channelID: string }
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>()
export const { redirect } = utils<Path, Params>()
