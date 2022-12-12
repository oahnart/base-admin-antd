import React from "react"
import "./style.css"

interface Props {
  overlay?: any
}

export default function Loading(props: Props) {
  const { overlay } = props

  return <div className="bg-loading">
    <div className="content-loading">
      <div className="border-loading"></div>
      <div className="icon-loading">ART N GUIDE</div>
    </div>
  </div>
}
