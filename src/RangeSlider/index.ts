import * as $ from 'jquery'
import RangeSliderView from "./RangeSliderView";

export interface rangeSliderOptions {
    stepSize: number,
    orientation: "horizontal" | "vertical",
    value: Array<number>,
    valueAboveSlider: boolean
}

interface IChangeValue {
    (value: number): void;
}

interface IRender {
    (): JQuery
}

interface IRangeSlider {
    (this: JQuery, options: rangeSliderOptions): {
        changeValue: IChangeValue, 
        render : IRender
    };
}

declare global {
    interface JQuery {
        rangeSlider: IRangeSlider
    }
}

$.fn.rangeSlider = function(this: JQuery, options: rangeSliderOptions) {
    const view = new RangeSliderView()
    const render = () => {
        return this.each(function (this: HTMLElement): void {
            $(this).append(view.template({...options}))
            view.setBinding();
        });
    }

    const changeValue = (value: number) => {
        // view
    }

    return {
        render,
        changeValue
    }
}