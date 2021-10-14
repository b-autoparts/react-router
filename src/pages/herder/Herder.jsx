/* eslint-disable jsx-a11y/alt-text */
import * as React from 'react';
import { Header } from '@fluentui/react-northstar';
import './header.css'
export function Herders(){
    return (
        <div className="app-header">
        <img className="app-logo" src="/images/logo.png" />
        <Header
          className="app-header-font"
          as="h2"
          content="BROTHER AUTO PARTS & ENGINEERING COMPANY LIMITED"
        />
      </div>
    )
}