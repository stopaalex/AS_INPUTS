var cssString = ".AS-INPUT *{box-sizing:border-box;}.AS-INPUT {position: relative;border: 1px solid #c5c5c5;border-radius: 4px;margin: 1em;}.AS-INPUT input {border: none;width: 100%;height: 100%;padding: 16px;border-radius: 4px;outline: none;}.AS-INPUT .label {position: absolute;top: 50%;transform: translate(16px, -50%);transition: 250ms;}.AS-INPUT input:valid + .label {transform: translate(8px, calc(-100% - 16px));background: #ffffff;padding: 2px;font-size: .75em;color: #999}.AS-INPUT .clear {position: absolute;top: 50%;right: 0;transform: translate(-16px, -50%);cursor: pointer;display: none;background: #c5c5c5;width: 16px;height: 16px;justify-content: center;align-items: center;border-radius: 100%;color: #666666;border: 1px solid transparent;transition: 150ms;}.AS-INPUT .clear:hover {border: 1px solid #000000;}.AS-INPUT input:valid:focus ~ .clear {display: flex;}.AS-INPUT input:valid:hover ~ .clear {display: flex;}.AS-INPUT input:focus {border: 1px solid blue;}.AS-INPUT input:focus:valid {border: 1px solid #00cc00;}.AS-INPUT .clear:hover {display: flex;}.AS-INPUT .required {position: absolute;top: 2px;right: 2px;width: 7px;height: 7px;border-radius: 7px;background: red;}.AS-INPUT input:valid ~ .required {background: #00cc00;}.AS-INPUT input:-webkit-autofill,.AS-INPUT input:-webkit-autofill:hover, .AS-INPUT input:-webkit-autofill:focus {box-shadow: inset 0 0 0px 100000px white;}.AS-INPUT input:-webkit-autofill + .label {transform: translate(8px, calc(-100% - 16px));background: #ffffff;padding: 2px;font-size: .75em;color: #999}"

var create_inputs = function() {
  // let inputs = document.querySelectorAll('div[data-custominput]');
  
  let inputs = document.querySelectorAll('div[AS_INPUT]');
  // console.log(test)
  
  for(let i=0;i<inputs.length;i++){
    // --- add in the class names
    inputs[i].classList.add('AS-INPUT')
    
    let text = '', type = '', required = '', width = '';
    
    for (let x=0;x<inputs[i].attributes.length;x++) {
      // --- checking for the text
      if (inputs[i].attributes[x].name === 'as_input_text') {text = inputs[i].attributes[x].value;}
      
      // --- checking if it is a password
      if (inputs[i].attributes[x].name === 'as_input_password') {type = 'password';}
      
      // --- checking if it's required
      if (inputs[i].attributes[x].name === 'as_input_required') {required = '<div class="required"></div>'}
      
      // --- checking for a specific width
      if (inputs[i].attributes[x].name === 'as_input_width') {inputs[i].style.width=inputs[i].attributes[x].value + 'px'}
    }
    // --- if the type is not a password set it to 'text'
    if(type !== 'password'){type='text'}    
    
    // --- crerate the id for the element
    let id = '';
    if (inputs[i].id){ id = inputs[i].id}
    else {id = text.replace(/ /g, '') + i}
    
    // let width = '';
    // if (inputs[i].dataset.width){inputs[i].style.width = inputs[i].dataset.width + 'px';}
    
    let html = '<input type="' + type + '" required id="' + id + '">\
                <div class="label">' + text + '</div>\
                <div class="clear" onClick="javascript: var x = this.parentElement.children; for (var i=0;i<x.length;i++){if(x[i].localName === \'input\'){var a = x[i]}} a.value=\'\'">x</div>' + required + '<style>' + cssString + '</style>'
    inputs[i].innerHTML = html;
  }
};

create_inputs();var cssString = ".AS-INPUT *{box-sizing:border-box;}.AS-INPUT {position: relative;border: 1px solid #c5c5c5;border-radius: 4px;margin: 1em;}.AS-INPUT input {border: none;width: 100%;height: 100%;padding: 16px;border-radius: 4px;outline: none;}.AS-INPUT .label {position: absolute;top: 50%;transform: translate(16px, -50%);transition: 250ms;}.AS-INPUT input:valid + .label {transform: translate(8px, calc(-100% - 16px));background: #ffffff;padding: 2px;font-size: .75em;color: #999}.AS-INPUT .clear {position: absolute;top: 50%;right: 0;transform: translate(-16px, -50%);cursor: pointer;display: none;background: #c5c5c5;width: 16px;height: 16px;justify-content: center;align-items: center;border-radius: 100%;color: #666666;border: 1px solid transparent;transition: 150ms;}.AS-INPUT .clear:hover {border: 1px solid #000000;}.AS-INPUT input:valid:focus ~ .clear {display: flex;}.AS-INPUT input:valid:hover ~ .clear {display: flex;}.AS-INPUT input:focus {border: 1px solid blue;}.AS-INPUT input:focus:valid {border: 1px solid #00cc00;}.AS-INPUT .clear:hover {display: flex;}.AS-INPUT .required {position: absolute;top: 2px;right: 2px;width: 7px;height: 7px;border-radius: 7px;background: red;}.AS-INPUT input:valid ~ .required {background: #00cc00;}.AS-INPUT input:-webkit-autofill,.AS-INPUT input:-webkit-autofill:hover, .AS-INPUT input:-webkit-autofill:focus {box-shadow: inset 0 0 0px 100000px white;}.AS-INPUT input:-webkit-autofill + .label {transform: translate(8px, calc(-100% - 16px));background: #ffffff;padding: 2px;font-size: .75em;color: #999}"

var create_inputs = function() {
  // let inputs = document.querySelectorAll('div[data-custominput]');
  
  let inputs = document.querySelectorAll('div[AS_INPUT]');
  // console.log(test)
  
  for(let i=0;i<inputs.length;i++){
    // --- add in the class names
    inputs[i].classList.add('AS-INPUT')
    
    let text = '', type = '', required = '', width = '';
    
    for (let x=0;x<inputs[i].attributes.length;x++) {
      // --- checking for the text
      if (inputs[i].attributes[x].name === 'as_input_text') {text = inputs[i].attributes[x].value;}
      
      // --- checking if it is a password
      if (inputs[i].attributes[x].name === 'as_input_password') {type = 'password';}
      
      // --- checking if it's required
      if (inputs[i].attributes[x].name === 'as_input_required') {required = '<div class="required"></div>'}
      
      // --- checking for a specific width
      if (inputs[i].attributes[x].name === 'as_input_width') {inputs[i].style.width=inputs[i].attributes[x].value + 'px'}
    }
    // --- if the type is not a password set it to 'text'
    if(type !== 'password'){type='text'}    
    
    // --- crerate the id for the element
    let id = '';
    if (inputs[i].id){ id = inputs[i].id}
    else {id = text.replace(/ /g, '') + i}
    
    // let width = '';
    // if (inputs[i].dataset.width){inputs[i].style.width = inputs[i].dataset.width + 'px';}
    
    let html = '<input type="' + type + '" required id="' + id + '">\
                <div class="label">' + text + '</div>\
                <div class="clear" onClick="javascript: var x = this.parentElement.children; for (var i=0;i<x.length;i++){if(x[i].localName === \'input\'){var a = x[i]}} a.value=\'\'">x</div>' + required + '<style>' + cssString + '</style>'
    inputs[i].innerHTML = html;
  }
};

create_inputs();
