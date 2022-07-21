import './style.css';
// const $ = require('jquery')
import * as $ from 'jquery'
import RangeSliderView from './RangeSlider/RangeSliderView';
import './RangeSlider/index'

let $slider = $(".js-range-slider").rangeSlider({
    stepSize: 1, 
    orientation: "horizontal",
    value: [1000, 2000],
    valueAboveSlider: false 
})
$slider.render()



// $.fn.rangeSlider.options = { 
//     stepSize: 1,
//     orientation: 'horizontal',
//     value: [2500,6000],
//     valueAboveSlider: false
// }

// $('#id').rangeSlider()

// let $rangeInput: JQuery<HTMLElement> = $('.js-range-input input');
// let $progress: JQuery<HTMLElement> = $('.range-slider__progress');

// $.parseHTML()

// $rangeInput.each((i: number, element: any) => {
//     let $element: JQuery<HTMLElement> = $(element)
//     $element.on("input", (e) => {
//         let minVal = Number($($rangeInput[0]).val());
//         let maxVal =  Number($($rangeInput[1]).val());
//         // debugger
//         if (maxVal - minVal < 500) {
//             if (e.target.className === 'range-input__min')
//                 $($rangeInput[0]).val(maxVal - 500);
//             else
//                 $($rangeInput[1]).val(minVal + 500);
//         } else {
//             $progress.css('left', (minVal / Number($($rangeInput[0]).attr("max"))) * 100 + "%")
//             $progress.css("right", 100 - (maxVal / Number($($rangeInput[1]).attr("max"))) * 100 + "%")
//         }
//     })
// })

// const view = new RangeSliderView()

// $.fn.myPlugin()
// $('#id').myPlugin()