// Internet Explorer 6-11
// @ts-ignore
const isIE = /*@cc_on!@*/false || !!document['documentMode'];

function loadScript(scriptUrl: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.setAttribute('src', scriptUrl);
    document.head.appendChild(script);
    return script;
}

function loadScriptAsync(scriptUrl: string): HTMLScriptElement {
    const script = document.createElement('script');
    script.setAttribute('src', scriptUrl);
    script.setAttribute('async', "async");
    document.head.appendChild(script);
    return script;
}

if (isIE) {
    loadScript('./dist/polyfill.js');
    loadScript('./dist/custom-elements-es5-adapter.js');
    loadScriptAsync('./dist/es5-bundle.js');
} else {
    loadScriptAsync('./dist/es-next-bundle.js');
}
