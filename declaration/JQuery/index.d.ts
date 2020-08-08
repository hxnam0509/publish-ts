interface JQuery {
    stickyTableHeaders(option: { [key: string]: any }): JQuery;

    updateTableModeInToolbar(): void;

    tooltip(options?: any): void;

    dropDown(type: string, options: { [key: string]: any }): JQuery;

    tipsy: { [key: string]: any };

    bind(events: string, handler: (eventObject: JQueryEventObject, ...args: any[]) => any): JQuery;

    parent(until: JQuery, selector?: string): JQuery;

    spin(visible: boolean): JQuery;

    nthCol(index: number): JQuery;

    removeTableResizable(opt: { [key: string]: any }): JQuery;

    tableResizable(opt: { [key: string]: any }): JQuery;

    toggleFixedColumnWidth(): JQuery;

    toggleFluidColumnWidth(): JQuery;
}
