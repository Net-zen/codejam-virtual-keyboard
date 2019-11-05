const Keyboard = {
  elements: {
    input: null,
    main: null,
    keysContainer: null,
    keys: []
  },
  
  properties: {
    value: '',
    capsLock: false,
    lang: '', 
    keyLayout: [
      {shifted_ru: 'Ё', shifted_en: '~', keyCode: 192, ru: 'ё', en: '\`', width: 1, dark: 0},
      {shifted: '!', keyCode: 49, value: '1', width: 1},
      {shifted_ru: '"', shifted_en: '@', keyCode: 50, value: '2', width: 1, dark: 0},
      {shifted_ru: '№', shifted_en: '#', keyCode: 51, value: '3', width: 1, dark: 0},
      {shifted_ru: ';', shifted_en: '$', keyCode: 52, value: '4', width: 1, dark: 0},
      {shifted: '%', keyCode: 53, value: '5', width: 1, dark: 0},
      {shifted_ru: ':', shifted_en: '^', keyCode: 54, value: '6', width: 1, dark: 0},
      {shifted_ru: '?', shifted_en: '&', keyCode: 55, value: '7', width: 1, dark: 0},
      {shifted: '*', keyCode: 56, value: '8', width: 1, dark: 0},
      {shifted: '(', keyCode: 57, value: '9', width: 1, dark: 0},
      {shifted: ')', keyCode: 48, value: '0', width: 1, dark: 0},
      {shifted: '_', keyCode: 189, value: '-', width: 1},
      {shifted: '+', keyCode: 187, value: '=', width: 1},
      {keyCode: 8, title: 'Backspace', width: 3, dark: 1, lineBreak: true},
      {keyCode: 9, value: '\t', title: 'Tab', width: 2, dark: 2},
      {shifted_ru: 'Й', shifted_en: 'Q', keyCode: 81, en: 'q', ru:'й', width: 1, dark: 0},
      {shifted_ru: 'Ц', shifted_en: 'W', keyCode: 87, en: 'w', ru:'ц', width: 1, dark: 0},
      {shifted_ru: 'У', shifted_en: 'E', keyCode: 69, en: 'e', ru:'у', width: 1, dark: 0},
      {shifted_ru: 'К', shifted_en: 'R', keyCode: 82, en: 'r', ru:'к', width: 1, dark: 0},
      {shifted_ru: 'Е', shifted_en: 'T', keyCode: 84, en: 't', ru:'е', width: 1, dark: 0},
      {shifted_ru: 'Н', shifted_en: 'Y', keyCode: 89, en: 'y', ru:'н', width: 1, dark: 0},
      {shifted_ru: 'Г', shifted_en: 'U', keyCode: 85, en: 'u', ru:'г', width: 1, dark: 0},
      {shifted_ru: 'Ш', shifted_en: 'I', keyCode: 73, en: 'i', ru:'ш', width: 1, dark: 0},
      {shifted_ru: 'Щ', shifted_en: 'O', keyCode: 79, en: 'o', ru:'щ', width: 1, dark: 0},
      {shifted_ru: 'З', shifted_en: 'P', keyCode: 80, en: 'p', ru:'з', width: 1, dark: 0},
      {shifted_ru: 'Х', shifted_en: '{', keyCode: 219, en: '[', ru:'х', width: 1, dark: 0},
      {shifted_ru: 'Ъ', shifted_en: '}', keyCode: 221, en: ']', ru:'ъ', width: 1, dark: 0},
      {keyCode: 46, value: 'Del', title: 'Del', width: 1, dark: 1, lineBreak: true},
      {keyCode: 20, title: 'Caps Lock', width: 3, dark: 1},
      {shifted_ru: 'Ф', shifted_en: 'A', keyCode: 65, en: 'a', ru:'ф', width: 1, dark: 0},
      {shifted_ru: 'Ы', shifted_en: 'S', keyCode: 83, en: 's', ru:'ы', width: 1, dark: 0},
      {shifted_ru: 'В', shifted_en: 'D', keyCode: 68, en: 'd', ru:'в', width: 1, dark: 0},
      {shifted_ru: 'А', shifted_en: 'F', keyCode: 70, en: 'f', ru:'а', width: 1, dark: 0},
      {shifted_ru: 'П', shifted_en: 'G', keyCode: 71, en: 'g', ru:'п', width: 1, dark: 0},
      {shifted_ru: 'Р', shifted_en: 'H', keyCode: 72, en: 'h', ru:'р', width: 1, dark: 0},
      {shifted_ru: 'О', shifted_en: 'J', keyCode: 74, en: 'j', ru:'о', width: 1, dark: 0},
      {shifted_ru: 'Л', shifted_en: 'K', keyCode: 75, en: 'k', ru:'л', width: 1, dark: 0},
      {shifted_ru: 'Д', shifted_en: 'L', keyCode: 76, en: 'l', ru:'д', width: 1, dark: 0},
      {shifted_ru: 'Ж', shifted_en: ':', keyCode: 186, en: ';', ru:'ж', width: 1, dark: 0},
      {shifted_ru: 'Э', shifted_en: '"', keyCode: 222, en: "'", ru:'э', width: 1, dark: 0},
      {keyCode: 13, value: '\n', title: 'Enter', width: 3, dark: 1, lineBreak: true},
      {keyCode: 16, code: 'ShiftLeft', title: 'Shift', width: 3, dark: 1, extra: true},
      {shifted_ru: 'Я', shifted_en: 'Z', keyCode: 90, en: 'z', ru:'я', width: 1, dark: 0},
      {shifted_ru: 'Ч', shifted_en: 'X', keyCode: 88, en: 'x', ru:'ч', width: 1, dark: 0},
      {shifted_ru: 'С', shifted_en: 'C', keyCode: 67, en: 'c', ru:'с', width: 1, dark: 0},
      {shifted_ru: 'М', shifted_en: 'v', keyCode: 86, en: 'v', ru:'м', width: 1, dark: 0},
      {shifted_ru: 'И', shifted_en: 'B', keyCode: 66, en: 'b', ru:'и', width: 1, dark: 0},
      {shifted_ru: 'Т', shifted_en: 'N', keyCode: 78, en: 'n', ru:'т', width: 1, dark: 0},
      {shifted_ru: 'Ь', shifted_en: 'M', keyCode: 77, en: 'm', ru:'ь', width: 1, dark: 0},
      {shifted_ru: 'Б', shifted_en: '<', keyCode: 188, en: ',', ru:'б', width: 1, dark: 0},
      {shifted_ru: 'Ю', shifted_en: '>', keyCode: 190, en: '.', ru:'ю', width: 1, dark: 0},
      {shifted_ru: '?', shifted_en: ',', keyCode: 191, en: '/', ru:'.', width: 1, dark: 0},
      {keyCode: 38, value: '↑', title: '↑', width: 1, dark: 1},
      {keyCode: 16, code: 'ShiftRight', title: 'Shift', width: 2, dark: 1, extra: 16, lineBreak: true},
      {keyCode: 17, code: 'ControlLeft', title: 'Ctrl', width: 1, dark: 1, extra: true},
      {keyCode: 91, code: 'MetaLeft', title: 'Win', width: 1, dark: 1},
      {keyCode: 18, code: 'AltLeft', title: 'Alt', width: 1, dark: 1, extra: true},
      {keyCode: 32, value: ' ', code: 'Space', title: '', width: 4, dark: 1},
      {keyCode: 18, code: 'AltRight', title: 'Alt', width: 1, dark: 1, extra: 18},
      {keyCode: 17, code: 'ControlRight', title: 'Ctrl', width: 1, dark: 1, extra: 17},
      {keyCode: 37, value: '←', title: '←', width: 1, dark: 1},
      {keyCode: 40, value: '↓', title: '↓', width: 1, dark: 1},
      {keyCode: 39, value: '→', title: '→', width: 1, dark: 1},
    ]
  },

  init() {
    this.lang = window.localStorage.getItem('lang') || 'ru';
    this.elements.main = document.createElement('div');
    this.elements.keysContainer = document.createElement('div');

    this.elements.main.classList.add('keyboard', 'keyboard-hidden');
    this.elements.keysContainer.classList.add('keyboard--keys');
    this.elements.keysContainer.appendChild(this._createKeys());
    this.elements.keys = this.elements.keysContainer.querySelectorAll('.keyboard--key');
    this.elements.input = document.createElement('textarea');
    this.elements.input.classList.add('input');

    
    document.body.appendChild(this.elements.input);
    this.elements.main.appendChild(this.elements.keysContainer);
    document.body.appendChild(this.elements.main);
  },

  _createKeys() {
    const fragment = document.createDocumentFragment();
    let rowFragment = document.createDocumentFragment();
    let keyboardRow = document.createElement('div');
    keyboardRow.classList.add('keyboard--row');


    this.properties.keyLayout.forEach(key => {
      const keyElement = document.createElement('button');

      // Add attributes/classes
      keyElement.setAttribute('type', 'button');
      keyElement.classList.add('keyboard--key');

      if (key.dark) keyElement.classList.add('keyboard--key-dark');

      switch (key.width) {
        case 2:
          keyElement.classList.add('keyboard--key-wide');
          break;
        case 3:
          keyElement.classList.add('keyboard--key-wider');
          break;
        case 4:
          keyElement.classList.add('keyboard--key-extra_wide');
          break;
      }

//       switch (key.keyCode) {
//           case 8:
//               keyElement.textContent = key.value;
// /* 
//               keyElement.addEventListener('click', () => {
//                   this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
//                   this._triggerEvent('oninput');
//               }); */

//               break;

//           case 20:
//               keyElement.textContent = key.title;

//               keyElement.addEventListener('click', () => {
//                   this._toggleCapsLock();
//                   keyElement.classList.toggle('keyboard--key-active', this.properties.capsLock);
//               });

//               break;

//           case 13:
//               keyElement.textContent = key.title;

//               keyElement.addEventListener('click', () => {
//                   this.properties.value += '\n';
//                   this._triggerEvent('oninput');
//               });

//               break;

//           case 32:
//               keyElement.textContent = key.title;

//               keyElement.addEventListener('click', () => {
//                   this.properties.value += ' ';
//                   this._triggerEvent('oninput');
//               });

//               break;
//           case 16:
//               keyElement.textContent = key.title;

//               keyElement.addEventListener('click', () => {
//                   // this.properties.value += '\n';
//                   this._triggerEvent('oninput');
//               });

//               break;

//           default:
            if (key[this.lang]){
              keyElement.textContent = key[this.lang];
            } else if (key.value && key.value !== '\n' && key.value !== '\t') {
              keyElement.textContent = key.value;
            } else {
              keyElement.textContent = key.title;
            }

              keyElement.addEventListener('mousedown', (evt) => {
                console.log('evt: ', evt);
                this.properties.keyLayout.forEach(key => {
                  if (key.domElement === evt.target) {
                    this.onMouseDown(key, evt);
                  }
                });
              // this.properties.value += this.properties.capsLock ? key.toUpperCase() : key.toLowerCase();
                
              });

              // break;
      // }
      
      keyboardRow.appendChild(keyElement)
      key.domElement = keyElement;
      rowFragment.appendChild(keyboardRow);
      fragment.appendChild(rowFragment);

      if (key.lineBreak) {
        rowFragment = document.createDocumentFragment();
        keyboardRow = document.createElement('div');
        keyboardRow.classList.add('keyboard--row');
      }
  });

  return fragment;
  },

  _toggleCapsLock() {
    this.properties.capsLock = !this.properties.capsLock;

    this.properties.keyLayout.forEach(key => {
      if (key.ru || key.en) {
        key.domElement.textContent = this.properties.capsLock ? key.domElement.textContent.toUpperCase() : key.domElement.textContent.toLowerCase();
      }
      if (key.keyCode === 20) {
        key.domElement.classList.toggle('keyboard--key-active');
      }
    });
    
  },

  onMouseDown(key, evt) {
    console.log('evt: ', evt);
    this.elements.input.focus();
    console.log('key: ', key);
    console.log('key.keyCode: ', key.keyCode);

    if (key.keyCode === 20) {
      this._toggleCapsLock();
    }
    let value = key[this.lang] || key.value;
    if (value) {
      if (this.properties.capsLock) {
          value = value.toUpperCase();
      }
      if (evt.shiftKey) {
          if (key['shifted_' + this.lang] || key['shifted']) {
              value = key['shifted_' + this.lang] || key['shifted'];
          }
          value = this.properties.capsLock ? value.toLowerCase() : value.toUpperCase();
        }
        this.elements.input.value += value;
      }
    if (key.keyCode === 8) {
      this.elements.input.value = this.elements.input.value.substring(0, this.elements.input.value.length - 1);
    } 

    
    this.elements.input.focus();
  }

}


window.addEventListener('DOMContentLoaded', function () {
  Keyboard.init();
});