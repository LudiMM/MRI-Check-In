import React from 'react';
import NavigationBar from './NavigationBar';

export default function Header(props) {
  return <NavigationBar title={props.title} BackButton={props.BackButton} />;
}
