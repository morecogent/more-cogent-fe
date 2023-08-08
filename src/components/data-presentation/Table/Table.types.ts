export type Attribute = {
    label: string
    valueKey: string
    fn?: any
}

type Callback = {
    (item): void
}

export type Action = {
    variant: string
    function: Callback
    label: string
}

export interface ITableProps {
    schema: Attribute[]
    data: Array<any>
    actions: Action[]
}