var cssString = ".input *{box-sizing:border-box;}.input {position: relative;border: 1px solid #c5c5c5;border-radius: 4px;margin: 1em;}.input input {border: none;width: 100%;height: 100%;padding: 16px;border-radius: 4px;outline: none;}.input .label {position: absolute;top: 50%;transform: translate(16px, -50%);transition: 250ms;}.input input:valid + .label {transform: translate(8px, calc(-100% - 16px));background: #ffffff;padding: 2px;font-size: .75em;color: #999}.input .clear {position: absolute;top: 50%;right: 0;transform: translate(-16px, -50%);cursor: pointer;display: none;background: #c5c5c5;width: 16px;height: 16px;justify-content: center;align-items: center;border-radius: 100%;color: #666666;border: 1px solid transparent;transition: 150ms;}.input .clear:hover {border: 1px solid #000000;}.input input:valid:focus ~ .clear {display: flex;}.input input:valid:hover ~ .clear {display: flex;}.input input:focus {border: 1px solid blue;}.input input:focus:valid {border: 1px solid #00cc00;}.input .clear:hover {display: flex;}.input .required {position: absolute;top: 2px;right: 2px;width: 7px;height: 7px;border-radius: 7px;background: red;}.input input:valid ~ .required {background: #00cc00;}.input input:-webkit-autofill,.input input:-webkit-autofill:hover, .input input:-webkit-autofill:focus {box-shadow: inset 0 0 0px 100000px white;}.input input:-webkit-autofill + .label {transform: translate(8px, calc(-100% - 16px));background: #ffffff;padding: 2px;font-size: .75em;color: #999}"

var create_inputs = function() {
  let inputs = document.querySelectorAll('div[data-custominput]');
  
  for(let i=0;i<inputs.length;i++){
    let id = '';
    // --- if check for an id that exists
    if (inputs[i].id){ id = inputs[i].id}
    else {id = inputs[i].dataset.custominput.replace(/ /g, '') + i}
    
    let type = '';
    // --- if check for password type
    if (inputs[i].dataset.custominput.toLowerCase().indexOf('password') != -1){type='password'}
    else {type = 'text'}
    
    let width = '';
    if (inputs[i].dataset.width){inputs[i].style.width = inputs[i].dataset.width + 'px';}
    
    // console.log(inputs[i].dataset.required)
    let required = '';
    try {
      inputs[i].dataset.required.toString();
      required = '<div class="required"></div>'
    } catch(e) {}
    
    let html = '<input type="' + type + '" required id="' + id + '">\
                <div class="label">' + inputs[i].dataset.custominput + '</div>\
                <div class="clear" onClick="javascript: var x = this.parentElement.children; for (var i=0;i<x.length;i++){if(x[i].localName === \'input\'){var a = x[i]}} a.value=\'\'">x</div>' + required + '<style>' + cssString + '</style>'
    inputs[i].innerHTML = html;
  }
};

create_inputs();

