import { News } from '../models/news';

export let AllNews: News[] = [{
    title: 'Workshop',
    description: 'All students from school Ceda Ribic attended great workshop that' +
        'focused on making creative basic materials like paper, cardboard, etc...',
    pictureUrl: 'workshop.jpg',
    date: '1.1.2018',
},
{
    title: 'Field trip',
    description: 'Students from school Ceda Ribic went to field trip that' +
        'included preparation and cleanin of camp places in nearby camping area called Borkovac',
    pictureUrl: 'fieldtrip.jpg',
    date: '2.2.2018',
},
{
    title: 'Fair',
    description: 'Traditionally organized fair where students could buy/sell self-made stuff.' +
        'Even was organized in agreement with other nearby school in order to accomplish higher number of children',
    pictureUrl: 'fair.jpg',
    date: '3.3.2018',
},
];
