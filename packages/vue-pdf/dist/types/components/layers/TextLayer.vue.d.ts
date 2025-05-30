import type { HighlightEventPayload, HighlightOptions, TextLayerLoadedEventPayload } from "../types";
declare const _default: import("vue").DefineComponent<__VLS_TypePropsToRuntimeProps<{
    page?: import("pdfjs-dist/types/src/display/api").PDFPageProxy | undefined;
    viewport?: import("pdfjs-dist/types/src/display/display_utils").PageViewport | undefined;
    highlightText?: string | string[] | undefined;
    highlightOptions?: HighlightOptions | undefined;
    hightlightPages?: number[] | undefined;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    highlight: (payload: HighlightEventPayload) => void;
    textLoaded: (payload: TextLayerLoadedEventPayload) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_TypePropsToRuntimeProps<{
    page?: import("pdfjs-dist/types/src/display/api").PDFPageProxy | undefined;
    viewport?: import("pdfjs-dist/types/src/display/display_utils").PageViewport | undefined;
    highlightText?: string | string[] | undefined;
    highlightOptions?: HighlightOptions | undefined;
    hightlightPages?: number[] | undefined;
}>>> & {
    onHighlight?: ((payload: HighlightEventPayload) => any) | undefined;
    onTextLoaded?: ((payload: TextLayerLoadedEventPayload) => any) | undefined;
}, {}, {}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
