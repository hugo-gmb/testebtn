import React from 'react'
import './Btn.css'

/**
 * Figma design reference
 * https://www.figma.com/design/cTpufNx1x2cVb2Nu7Z6ZqK/sync-lib-mcp?node-id=6-13&m=dev
 * Node id: 6:13
 */

export const FIGMA_DESIGN_URL =
  'https://www.figma.com/design/cTpufNx1x2cVb2Nu7Z6ZqK/sync-lib-mcp?node-id=6-13&m=dev'
export const FIGMA_NODE_ID = '6:13'

type BtnProps = {
  size?: 'S' | 'M' | 'L'
  children?: React.ReactNode
}

export default function Btn({ size = 'S', children }: BtnProps) {
  const cls = `btn ${size === 'M' ? 'btn--m' : size === 'L' ? 'btn--l' : 'btn--s'}`
  return (
    <button
      className={cls}
      data-figma-url={FIGMA_DESIGN_URL}
      data-figma-node={FIGMA_NODE_ID}
      data-figma-size={size}
    >
      {children ?? 'Btn'}
    </button>
  )
}
