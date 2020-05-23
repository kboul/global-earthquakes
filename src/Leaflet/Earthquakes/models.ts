export interface IEarthquakes {
    starttime: string;
    endtime: string;
}

export interface IFeature {
    geometry: any;
    properties: {
        mag: number;
        place: string;
        time: number;
        url: string;
        title: string;
    };
    type: string;
}
