import qs from "query-string";

// setQueryStringWhithoutPageReload
const setQueryStringWithoutPageReload = qsValue => { 
    const newurl = window.location.protocol + "//" +
                   window.location.host + 
                   window.location.pathname + 
                   qsValue;
 
    window.history.pushState({ path: newurl }, "", newurl);
};

// setQueryStringValue
export const setQueryStringValue = ( key, value, queryString = window.location.search ) => { 
    const values = qs.parse(queryString); 
    const newQsValue = qs.stringify({ ...values, [key]: value }); 
    setQueryStringWithoutPageReload(`?${newQsValue}`);
};

// getQueryStringValue
export const getQueryStringValue = ( key, queryString = window.location.search ) => { 
    const values = qs.parse(queryString); 
    return values[key];
};