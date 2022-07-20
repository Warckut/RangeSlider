import RangeSliderView from "./RangeSliderView";

class RangeSliderPresenter {
    _rangeSliderView: RangeSliderView;
    constructor(rangeSliderView: RangeSliderView) {
        this._rangeSliderView = rangeSliderView;
    }

    inputHandler(e: any) {
        console.log(this._rangeSliderView.getRangeInput())
        this._rangeSliderView.changeProgress()
    }
}

export default RangeSliderPresenter