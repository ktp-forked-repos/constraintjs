/** Declaration file generated by dts-gen */

export = constraintjs;

declare function constraintjs(value:any[], options?:constraintjs.ArrayConstraintOptions): constraintjs.ArrayConstraint;
declare function constraintjs(node:Node): constraintjs.Binding;
declare function constraintjs(value:{[key:string]:any}, options?:constraintjs.MapConstraintOptions): constraintjs.MapConstraint;
declare function constraintjs(value:any, options?:constraintjs.ConstraintOptions): constraintjs.Constraint;

declare namespace constraintjs {
    export interface ArrayConstraintOptions {
        equals:(a:any,b:any)=>boolean,
        value:any[]
    }
    export class ArrayConstraint {
        constructor(options?: ArrayConstraintOptions);
        concat(...args: any[]): any[];
        destroy(silent: boolean): void;
        every(filter: Function, thisArg?: any): boolean;
        filter(callback:Function, thisArg?:any): any[];
        forEach(callback: Function, thisArg?: any): this;
        indexOf(item: any, equality_check?: Function): number;
        indexWhere(filter: Function, thisArg?: any): number;
        item(): any[];
        item(key: number): any;
        item(key: number, value: any): any;
        itemConstraint(key: number|Constraint): Constraint;
        join(separator:string): string;
        lastIndexOf(item: any, equality_check?: Function): number;
        lastIndexWhere(filter: Function, thisArg?: any): number;
        length(): number;
        map(callback: Function, thisArg: any): any[];
        pop(): any;
        push(...args: any[]): number;
        reverse(): any[];
        setEqualityCheck(equality_check: any): any;
        setValue(arr: any[]): this;
        shift(): any;
        slice(begin?:number, end?:number): any[];
        some(filter: Function, thisArg?: any): boolean;
        sort(compare?:Function): any[];
        splice(index: number, howmany?: number, ...adding: any[]): any[];
        toArray(): any[];
        toString(): string;
        unshift(): number;

        static BREAK: {};
    }

    export interface BindingOptions {
        getter?:Function,
        setter?:Function,
        init_val?:any,
        targets?:Node[]
    }
    export class Binding {
        constructor(options?: BindingOptions);

        destroy(): void;
        pause(): this;
        resume(): this;
        throttle(min_delay?: number): this;
    }

    export class CJSEvent {
        constructor(parent: any, filter: any, onAddTransition: any, onRemoveTransition: any);
        guard(filter: any, filter_eq: any): any;
    }

    export interface ConstraintOptions {
        literal?:boolean,
        auto_add_outgoing_dependencies?:boolean,
        auto_add_incoming_dependencies?:boolean,
        cache_value?:boolean,
        check_on_nullify?:boolean,
        context?:any,
        equals?:(a:any,b:any)=>boolean,
        run_on_add_listener?:boolean
    }
    export class Constraint {
        constructor(value: any, options?: ConstraintOptions);
        abs(): number;
        acos(): number;
        add(...args: any[]): Constraint;
        and(...args: any[]): Constraint;
        asin(): number;
        atan(): number;
        atan2(other:Constraint|number): number;
        bitwiseAnd(...args: any[]): Constraint;
        bitwiseNot(...args: any[]): Constraint;
        bitwiseOr(...args: any[]): Constraint;
        ceil(): Constraint;
        cos(): Constraint;
        destroy(silent?: boolean): this;
        div(arg:any): Constraint;
        eq(other:any): Constraint;
        eqStrict(other:any): Constraint;
        exp(arg:any): Constraint;
        floor(): Constraint;
        ge(arg:any): Constraint;
        get(auto_add_outgoing?: boolean): any;
        gt(arg:any): Constraint;
        iif(true_val: any, other_val: any): Constraint;
        inFSM(fsm: FSM, values: [string,any]): this;
        instanceOf(arg:any): Constraint;
        invalidate(): this;
        isValid(): boolean;
        le(arg:any): Constraint;
        leftShift(): Constraint;
        log(): Constraint;
        lt(arg:any): Constraint;
        max(...args: any[]): Constraint;
        min(...args: any[]): Constraint;
        mod(arg:any): Constraint;
        mul(arg:any): Constraint;
        neg(): Constraint;
        neq(arg:any): Constraint;
        neqStrict(arg:any): Constraint;
        not(): Constraint;
        offChange(callback: Function, thisArg?: any): any;
        onChange(callback: Function, thisArg?: any, ...args: any[]): this;
        onChangeWithPriority(priority:number, callback: Function, thisArg?: any, ...args: any[]): this;
        or(...args: any[]): Constraint;
        pauseGetter(temporaryValue?:any): this;
        pos(...args: any[]): Constraint;
        pow(arg:any): Constraint;
        prop(...args: string[]): Constraint;
        remove(silent?: boolean): this;
        resumeGetter(value?:any): this;
        rightShift(): Constraint;
        round(): number;
        set(value: any, options?: {literal?:boolean, silent?:boolean}): this;
        setOption(options: ConstraintOptions): this;
        setOption(key:"auto_add_outgoing_dependencies", value:boolean): this;
        setOption(key:"auto_add_incoming_dependencies", value:boolean): this;
        setOption(key:"cache_value", value:boolean): this;
        setOption(key:"check_on_nullify", value:boolean): this;
        setOption(key:"literal", value:boolean): this;
        setOption(key:"run_on_add_listener", value:boolean): this;
        setOption(key:"context", value:any): this;
        setOption(key:"equals", value:(a:any,b:any)=>boolean): this;
        sin(): Constraint;
        sqrt(): Constraint;
        sub(...args: any[]): Constraint;
        tan(): Constraint;
        toFloat(): Constraint;
        toInt(): Constraint;
        typeOf(): Constraint;
        unsignedRightShift(): Constraint
        xor(arg:any): Constraint;
    }

    export class FSM {
        constructor(...args: any[]);
        addEventListener(spec_str: any, callback: any, context: any): any;
        addState(...args: any[]): any;
        addTransition(a: any, b: any, c: any, ...args: any[]): any;
        destroy(): void;
        getState(): string;
        is(state_name: string): boolean;
        off(listener_callback: Function): this;
        on(spec_str: string, callback: Function, context?: any): this;
        removeEventListener(listener_callback: Function): this;
        startsAt(state_name: string): this;
    }

    export interface MapConstraintOptions {
        hash?: (x:any)=>any,
        valuehash: false|Function,
        equals?: (a:any, b:any) => boolean,
        valueequals?: (a:any, b:any) => boolean,
        value?: {[key:string]:any},
        keys?: any[],
        values?: any[],
        literal_values?:boolean,
        create_unsubstantiated?:boolean
    }
    export class MapConstraint {
        constructor(options?: any);
        clear(silent?: boolean): this;
        destroy(silent: any): void;
        entries(): any;
        forEach(func: Function, thisArg?: any): this;
        get(key: any): any;
        getOrPut(key: any, create_fn: any, create_fn_context: any, index: any, literal: any): any;
        has(key: any): boolean;
        indexOf(key: any): number;
        isEmpty(): boolean;
        item(arg0: any, arg1: any, arg2: any, ...args: any[]): any;
        itemConstraint(key: any): any;
        keyForValue(value: any, eq_check?: (a:any,b:any)=>boolean): any;
        keys(): {key:any, value:any}[];
        move(key: any, to_index: number): this;
        moveIndex(old_index: number, new_index: number): this;
        put(key: any, value: any, index?: number, literal?: boolean): this;
        remove(key: any, silent?: boolean): this;
        setEqualityCheck(equality_check: (a:any,b:any)=>boolean): this;
        setHash(hash: (a:any)=>any): this;
        setValueEqualityCheck(vequality_check: (a:any,b:any)=>boolean): this;
        setValueHash(vhash: (a:any)=>any): any;
        size(): number;
        toObject(key_map_fn?: Function): {[key:string]:any};
        values(): any[];
        static BREAK: { };
    }

    const version: string;
    export function array(options?: ArrayConstraintOptions): ArrayConstraint;
    export function arrayDiff(from_val: any[], to_val: any[], equality_check?: (a:any,b:any)=>boolean): { added:{item:any,to:number,to_item:any}[], removed:{from:number,from_item:any}[], moved:{item:any, from:number, insert_at:number, move_from:number, to:number}[], index_changed:{from:number, from_item:any, item:any, to:number, to_item:any}[] };
    export function bindAttr(element: Node, values: {[key:string]:any}): Binding;
    export function bindAttr(element: Node, key:string, value:Constraint|string): Binding;
    export function bindCSS(element: Node, values: {[key:string]:any}): Binding;
    export function bindCSS(element: Node, value:Constraint|string): Binding;
    export function bindChildren(element: Node, ...args: any[]): Binding;
    export function bindClass(element: Node, ...args: any[]): Binding;
    export function bindHTML(element: Node, ...args: any[]): Binding;
    export function bindText(element: Node, ...values: any[]): Binding;
    export function bindValue(element: Node, ...args: any[]): Binding;
    export function constraint(value: any, options?: ConstraintOptions): any;
    export function createParsedConstraint(str: string, context: {[key:string]:any}): Constraint;
    export function createTemplate(template_str: string|Node):Function;
    export function createTemplate(template_str: string|Node, context:{[key:string]:any}, parent?:Node):Node;
    export function destroyTemplate(dom_node: Node): typeof constraintjs;
    export function fsm(...args: any[]): any;
    export function get(obj: any, autoAddOutgoing?: boolean): any;
    export function inFSM(fsm: FSM, values: any): Constraint;
    export function inputValue(inp: Node): Constraint;
    export function isArrayConstraint(obj: any): boolean;
    export function isConstraint(obj: any): boolean;
    export function isFSM(obj: any): boolean;
    export function isMapConstraint(obj: any): boolean;
    export function liven(func: Function, options?: {context?:any,run_on_create?:boolean,pause_while_running?:boolean,on_destroy?:Function}): {pause:()=>void,resume:()=>void,run:Function};
    export function map(options?: MapConstraintOptions): MapConstraint;
    export function memoize(getter_fn: Function, options?: {hash?:Function,equals?:(a:any,b:any)=>boolean,context?:any,literal_values?:boolean}): {destroy:(silent?:boolean)=>void,each:(fn:Function)=>void};
    export function noConflict(): typeof constraintjs;
    export function on(event_type: any, ...args: any[]): any;
    export function pauseTemplate(dom_node: Node): typeof constraintjs;
    export function registerCustomPartial(name: string, options?: {createNode:Function, onAdd:(n:Node)=>any, onRemove:(n:Node)=>any, pause:(n:Node)=>any, resume:(n:Node)=>any, destroyNode:(n:Node)=>any}) :typeof constraintjs;
    export function registerPartial(name: string, value: string): typeof constraintjs;
    export function removeDependency(fromNode: Constraint, toNode: Constraint): void;
    export function resumeTemplate(dom_node: Node): typeof constraintjs;
    export function signal(): void;
    export function toString(): string;
    export function unregisterPartial(name: string): typeof constraintjs;
    export function wait(): void;
} 