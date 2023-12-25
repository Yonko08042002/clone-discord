// Generouted, changes to this file will be overriden
/* eslint-disable */

import { components, hooks, utils } from '@generouted/react-router/client'

export type Path =
  | `/`
  | `/login`
  | `/orgs/:orgID/groups/:groupID`
  | `/orgs/:orgID/groups/:groupID/member_safety`
  | `/register`

export type Params = {
  '/orgs/:orgID/groups/:groupID': { orgID: string; groupID: string }
  '/orgs/:orgID/groups/:groupID/member_safety': { orgID: string; groupID: string }
}

export type ModalPath = never

export const { Link, Navigate } = components<Path, Params>()
export const { useModals, useNavigate, useParams } = hooks<Path, Params, ModalPath>()
export const { redirect } = utils<Path, Params>()
