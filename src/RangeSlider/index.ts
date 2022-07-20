import * as $ from 'jquery'
import RangeSliderView from "./RangeSliderView";

export interface MyOptions {
    stepSize: number,
    orientation: "horizontal" | "vertical",
    value: number | Array<number>,
    valueAboveSlider: boolean
}

// plugin definition
$.fn.rangeSlider = function(this: JQuery, options: MyOptions): JQuery {
    function changeValue(value: number | Array<number>): void {
        // изменение значения
    }
    
    return this.each(function (this: HTMLElement): void {
        const view = new RangeSliderView()
        $(this).append(view.template)
        view.setBinding();
        // do something
    });

    // 
}

declare global {
    interface JQuery {
        rangeSlider(options: MyOptions): this;
    }
}