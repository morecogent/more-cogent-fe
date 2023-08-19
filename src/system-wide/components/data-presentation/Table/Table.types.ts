export type Attribute = {
    label: string
    // Need a better name - it picks a property from every item
    propertyTransform: (item: any) => any
    fn?: (item: any) => any
}

export type Action = {
    variant: string
    label: string
    fn: (item: any) => void
}

export interface ITableProps {
    schema: Attribute[]
    data: Array<any>
    actions: Action[]
}