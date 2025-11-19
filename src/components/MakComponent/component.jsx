import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export function MakComponent(value) {
    if(value.value < 2) {
        return value.value * 100000;
    } else {
        let v = value.value * 100000;
        return <><span style={{color: 'red'}}>
            {v}
        </span></>;
    }
}
