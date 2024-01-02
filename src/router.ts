// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `/`
  | `/blog`
  | `/careers`
  | `/channels/:orgID`
  | `/channels/:orgID/:channelID`
  | `/channels/:orgID/member_safety`
  | `/discover`
  | `/download`
  | `/login`
  | `/nitro`
  | `/register`
  | `/safety`
  | `/servers`

export type Params = {
  '/channels/:orgID': { orgID: string }
  '/channels/:orgID/:channelID': { orgID: string; channelID: string }
  '/channels/:orgID/member_safety': { orgID: string }
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>()
export const { redirect } = utils<Path, Params>()
