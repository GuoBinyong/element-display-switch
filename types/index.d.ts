
// type ElementDisplaySwitchProps = Partial<ElementDisplaySwitch>;

interface ElementDisplaySwitchProps {
    ele?:EleOpts;  //可选；默认值：document.body；  挂载 容器元素 container 的元素 ；如果是数组类型，则会优先使用第一个能查找到的 dom 元素来作为挂载元素，即：相当于备用挂载元素的列表
    duration?:number;   //显示的持续时间；只有当数值 大于 0 时才生效
    getOffset?:GetOffset;
    updateOptions?:UpdateOptions;   //当调用 updateOptions
}


type ShowOptions = ElementDisplaySwitchProps & {[prop:string]:any};


interface OffsetStyle {
    left?:string;
    right?:string;
    top?:string;
    bottom?:string;
}

type GetOffset = (showOptions:ShowOptions,container:HTMLDivElement,elementDisplaySwitch:ElementDisplaySwitch)=>OffsetStyle|null|undefined

type Ele = string | Element;
type EleOpts = Ele | Ele[];

type UpdateOptions = (showOptions:ShowOptions,container:HTMLDivElement,elementDisplaySwitch:ElementDisplaySwitch)=>void;


/**
 * ElementDisplaySwitch 封装实现了开关显示一个元素的逻辑，可用于全局的loading提示等；
 */
export default class ElementDisplaySwitch {


    /**
     * @param props ?: ElementDisplaySwitchProps    配置 ElementDisplaySwitch 实例属性的对象；
     *
     * ElementDisplaySwitchProps = {ele,duration,getOffset,updateOptions}
     */
    constructor(props?:ElementDisplaySwitchProps);


    /**
     * duration ?: number  显示的持续时间；只有当数值 大于 0 时才生效
     */
    duration?:number;


    /**
     * container ReadOnly : HTMLDivElement    只读；获取容器元素
     */
    get container():HTMLDivElement;


    /**
     * isShow ReadOnly : boolean   是否在显示
     */
    get isShow():boolean;



    /**
     * getOffset : (showOptions,container,elementDisplaySwitch)=>OffsetStyle
     * OffsetStyle = {left:string, right:string, top:string, bottom:string}
     */
    getOffset?:GetOffset;


    /**
     * 更新容器元素的位置
     */
    updatePosition(showOpts:ShowOptions):void;


    /**
     * ele ?: Ele | [Ele]    可选；默认值：document.body；  挂载 容器元素 container 的元素 ；如果是数组类型，则会优先使用第一个能查找到的 dom 元素来作为挂载元素，即：相当于备用挂载元素的列表
     * Ele = Selector | Dom
     */
    ele?:EleOpts;

    /**
     * eleDom : Element    获取 ele 对应的dom 元素
     */
    get eleDom():Element;


    /**
     * 挂载 容器元素 container 到 ele 上；即将 容器元素 追加为 ele 的子元素
     * @param ele ?: Ele    可选；挂载 容器元素 container 的元素;
     * @return {ElementDisplaySwitch}
     */
    mount(ele?:EleOpts):this;



    /**
     * updateOptions : (showOptions,container,elementDisplaySwitch)=>Void
     */
    updateOptions:UpdateOptions;


    /**
     * 显示
     * @param showOpts ? : ShowOptions  显示选项
     *
     * ShowOptions = {...ElementDisplaySwitchProps,...自定义选项}
     */
    show(showOpts:ShowOptions):void;

    /**
     * 隐藏
     */
    hide():void;

  }
