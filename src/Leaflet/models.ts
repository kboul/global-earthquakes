import { Map } from 'leaflet';

export interface ILeaflet {
    leaflet: {
        map: Map;
    };
}

export interface ITilelayer {
    name: string;
    attribution: string;
    url: string;
    checked: boolean;
}
