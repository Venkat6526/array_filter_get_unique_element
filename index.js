function Array_filter_get_unique_element(a) {
    return a.filter((value, index, array) => array.indexOf(value) ===array.lastIndexOf(value));
}

module.exports=Array_filter_get_unique_element;