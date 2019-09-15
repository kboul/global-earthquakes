export interface IFeature {
    properties: {
        mag: number;
        place: string;
        time: number;
        url: string;
        title: string;
    };
    geometry: any;
}
