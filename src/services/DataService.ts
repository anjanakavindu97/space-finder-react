import { Space } from '../models/Model';

export class DataService {

    public async getSpaces(): Promise<Space[]> {
        const result: Space[] = []
        result.push({
            location: 'Paris',
            name: 'Space1',
            spaceId: '1'
        })
        result.push({
            location: 'London',
            name: 'Space2',
            spaceId: '2'
        })
        result.push({
            location: 'New York',
            name: 'Space3',
            spaceId: '3'
        })
        return result;
    }
}