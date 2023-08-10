export type Attribute = {
    label: string
    valueKey: string
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