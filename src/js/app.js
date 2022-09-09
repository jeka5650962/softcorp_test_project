import * as myFunctions from "./modules/functions.js";
import * as myRangeSlider from "./modules/rangeslider.js";
import * as myForm from "./modules/form.js";
import {Select} from "./modules/select/select.js";

myFunctions.isWebp();
myRangeSlider.rangeSlider();
myForm.form();

import Swiper, {Navigation, Pagination} from 'swiper';

const swiper = new Swiper();

const select = new Select();