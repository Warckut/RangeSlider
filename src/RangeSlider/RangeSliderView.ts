import * as $ from 'jquery'
import { rangeSliderOptions } from '.';
import RangeSliderPresenter from "./RangeSliderPresenter";

class RangeSliderView {
  $rangeInput: JQuery<HTMLElement>;
  $progress: JQuery<HTMLElement>;

  template = (options: rangeSliderOptions) => `
    <div class="progress-bar">
      <div class="progress-bar__diapason"/>
    </div>
    <div class="range-input js-range-input">
      <input type="range" min="0" max="10000" value="${options.value[0]}" class="range-input__min"/>
      <input type="range" min="0" max="10000" value="${options.value[1]}" class="range-input__max"/>
    </div>
  `
  _rangeSliderPresenter: RangeSliderPresenter;

  constructor() {
    this._rangeSliderPresenter = new RangeSliderPresenter(this);
  }

  setBinding() {
    this.$rangeInput = $('.js-range-input input');
    this.$progress = $('.progress-bar__diapason');
    this.$rangeInput.each((i: number, element: any) => {
      let $element: JQuery<HTMLElement> = $(element)
      $element.on("input", this._rangeSliderPresenter.inputHandler.bind(this._rangeSliderPresenter))
    })
  }

  getRangeInput(): any {
    return {
      min: Number($(this.$rangeInput[0]).val()),
      max: Number($(this.$rangeInput[1]).val())
    }
  }

  setRangeInput(minValue: number, maxValue: number): void {
    $(this.$rangeInput[0]).val(maxValue - 500);
    $(this.$rangeInput[1]).val(minValue + 500);
  }

  changeProgress() {
    // this.$progress.css('left', "0%")
  }
}

export default RangeSliderView;

// this.$rangeInput.each((i: number, element: any) => {
//   let $element: JQuery<HTMLElement> = $(element)
//   $element.on("input", (e) => {
//       let minVal = Number($($rangeInput[0]).val());
//       let maxVal =  Number($($rangeInput[1]).val());
//       // debugger
//       if (maxVal - minVal < 500) {
//           if (e.target.className === 'range-input__min')
//               $($rangeInput[0]).val(maxVal - 500);
//           else
//               $($rangeInput[1]).val(minVal + 500);
//       } else {
//           $progress.css('left', (minVal / Number($($rangeInput[0]).attr("max"))) * 100 + "%")
//           $progress.css("right", 100 - (maxVal / Number($($rangeInput[1]).attr("max"))) * 100 + "%")
//       }
// })