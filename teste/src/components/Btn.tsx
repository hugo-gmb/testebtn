import React from 'react'
import './Btn.css'

type BtnProps = {
  size?: 'S' | 'M'
  children?: React.ReactNode
}

export default function Btn({ size = 'S', children }: BtnProps) {
  const cls = `btn ${size === 'M' ? 'btn--m' : 'btn--s'}`
  return <button className={cls}>{children ?? 'Btn'}</button>
}
