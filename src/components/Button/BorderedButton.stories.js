import React from 'react';
import Button from "./Button"

// meta data 
export default {
    title: 'Form/Button/Bordered', //mandatory
    component:Button
}

export const Primary = () => <Button variant="primary" kind="bordered">Primary</Button>
export const Secondary = () => <Button variant="secondary" kind="bordered">Secondary</Button>
export const Success = () => <Button variant="success" kind="bordered">Success</Button>
export const Warning = () => <Button variant="warning" kind="bordered">Warning</Button>
export const Danger = () => <Button variant="danger" kind="bordered">Danger</Button>
export const Info = () => <Button variant="info" kind="bordered">Info</Button>
export const Light = () => <Button variant="light" kind="bordered">Light</Button>
export const Dark = () => <Button variant="dark" kind="bordered">Dark</Button>
