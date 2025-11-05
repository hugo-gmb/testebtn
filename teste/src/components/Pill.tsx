import React from 'react'
import './Pill.css'

/** Figma reference for this component
 * URL: https://www.figma.com/design/cTpufNx1x2cVb2Nu7Z6ZqK/sync-lib-mcp?node-id=18-28&m=dev
 * Node: 18:28
 */
export const FIGMA_DESIGN_URL_PILL =
  'https://www.figma.com/design/cTpufNx1x2cVb2Nu7Z6ZqK/sync-lib-mcp?node-id=18-28&m=dev'
export const FIGMA_NODE_ID_PILL = '18:28'

type PillProps = {
  label?: string
}

export default function Pill({ label = '' }: PillProps) {
  return (
    <div
      className="pill"
      data-figma-url={FIGMA_DESIGN_URL_PILL}
      data-figma-node={FIGMA_NODE_ID_PILL}
      role="group"
      aria-label={label || 'Figma component'}
    >
      <span className="pill__label">{label}</span>
    </div>
  )
}
