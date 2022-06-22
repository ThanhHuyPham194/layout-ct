import React from 'react'
import { Outlet, Route } from "react-router-dom";
import { useEffect } from "react";

export default function AboutTemplate(props) {
    useEffect(() => {
        window.scrollTo(0,0)
    })
  return (
    <>AboutTemplate</>
  )
}


