export interface PropertyValue {

    name: string;
    description?: string;

}

export interface Property {

    name: string;
    description?: string;
    values: PropertyValue[];

}
