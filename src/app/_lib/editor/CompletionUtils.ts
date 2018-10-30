import { Property } from './Property';

export class CompletionUtils {

    public static getKeywords(properties: Property[]): any {

        return new Map<string, Property>(properties.map<[string, Property]>(property => [property.name, property]));

    }
}
