import * as myFunctions from "./modules/functions.js";
import * as myRangeSlider from "./modules/rangeslider.js";
import * as myForm from "./modules/form.js";
import * as myBurger from "./modules/burger.js";
import * as myAnchor from "./modules/anchors.js";
import {Select} from "./modules/select/select.js";

myFunctions.isWebp();
myRangeSlider.rangeSlider();
myForm.form();
myBurger.onBurger();
myAnchor.onAnchor();

import Swiper, {Navigation, Pagination} from 'swiper';

const swiper = new Swiper();

const select = new Select('#select', {
    placeholder: 'Выберите тип системы',
    // selectedId: '1',
    data: [
        {id: '1', value: 'Sed ut perspiciatis'},
        {id: '2', value: 'Nemo enim ipsam'},
        {id: '3', value: 'Et harum quidem'},
        {id: '4', value: 'Temporibus autem'},
        {id: '5', value: 'Itaque earum rerum'},
        {id: '6', value: 'Sed ut perspiciatis'},
        {id: '7', value: 'Nemo enim ipsam'},
        {id: '8', value: 'Et harum quidem'},
        {id: '9', value: 'Temporibus autem'},
        {id: '10', value: 'Itaque earum rerum'},
        {id: '11', value: 'Sed ut perspiciatis'},
        {id: '12', value: 'Nemo enim ipsam'},
        {id: '13', value: 'Et harum quidem'},
        {id: '14', value: 'Temporibus autem'},
        {id: '15', value: 'Itaque earum rerum'}
    ],
    onSelect(item) {
        console.log('selected item', item);
    }
});

window.s = select