'use strict';

const Keyboard = {
  elements: {
    input: null,
    main: null,
    keysContainer: null
  },

  properties: {
    value: '',
    capsLock: false,
    lang: '',
    keyLayout: [
      {
        shifted_ru: 'Ё', shifted_en: '~', keyCode: 192, ru: 'ё', en: '`', width: 1, dark: 0
      },
      {
        shifted: '!', keyCode: 49, value: '1', width: 1
      },
      {
        shifted_ru: '"', shifted_en: '@', keyCode: 50, value: '2', width: 1, dark: 0
      },
      {
        shifted_ru: '№', shifted_en: '#', keyCode: 51, value: '3', width: 1, dark: 0
      },
      {
        shifted_ru: ';', shifted_en: '$', keyCode: 52, value: '4', width: 1, dark: 0
      },
      {
        shifted: '%', keyCode: 53, value: '5', width: 1, dark: 0
      },
      {
        shifted_ru: ':', shifted_en: '^', keyCode: 54, value: '6', width: 1, dark: 0
      },
      {
        shifted_ru: '?', shifted_en: '&', keyCode: 55, value: '7', width: 1, dark: 0
      },
      {
        shifted: '*', keyCode: 56, value: '8', width: 1, dark: 0
      },
      {
        shifted: '(', keyCode: 57, value: '9', width: 1, dark: 0
      },
      {
        shifted: ')', keyCode: 48, value: '0', width: 1, dark: 0
      },
      {
        shifted: '_', keyCode: 189, value: '-', width: 1
      },
      {
        shifted: '+', keyCode: 187, value: '=', width: 1
      },
      {
        keyCode: 8, title: 'Backspace', width: 3, dark: 1, lineBreak: true
      },
      {
        keyCode: 9, value: '\t', title: 'Tab', width: 2, dark: 2
      },
      {
        shifted_ru: 'Й', shifted_en: 'Q', keyCode: 81, en: 'q', ru: 'й', width: 1, dark: 0
      },
      {
        shifted_ru: 'Ц', shifted_en: 'W', keyCode: 87, en: 'w', ru: 'ц', width: 1, dark: 0
      },
      {
        shifted_ru: 'У', shifted_en: 'E', keyCode: 69, en: 'e', ru: 'у', width: 1, dark: 0
      },
      {
        shifted_ru: 'К', shifted_en: 'R', keyCode: 82, en: 'r', ru: 'к', width: 1, dark: 0
      },
      {
        shifted_ru: 'Е', shifted_en: 'T', keyCode: 84, en: 't', ru: 'е', width: 1, dark: 0
      },
      {
        shifted_ru: 'Н', shifted_en: 'Y', keyCode: 89, en: 'y', ru: 'н', width: 1, dark: 0
      },
      {
        shifted_ru: 'Г', shifted_en: 'U', keyCode: 85, en: 'u', ru: 'г', width: 1, dark: 0
      },
      {
        shifted_ru: 'Ш', shifted_en: 'I', keyCode: 73, en: 'i', ru: 'ш', width: 1, dark: 0
      },
      {
        shifted_ru: 'Щ', shifted_en: 'O', keyCode: 79, en: 'o', ru: 'щ', width: 1, dark: 0
      },
      {
        shifted_ru: 'З', shifted_en: 'P', keyCode: 80, en: 'p', ru: 'з', width: 1, dark: 0
      },
      {
        shifted_ru: 'Х', shifted_en: '{', keyCode: 219, en: '[', ru: 'х', width: 1, dark: 0
      },
      {
        shifted_ru: 'Ъ', shifted_en: '}', keyCode: 221, en: ']', ru: 'ъ', width: 1, dark: 0
      },
      {
        keyCode: 46, title: 'Del', width: 1, dark: 1, lineBreak: true
      },
      {
        keyCode: 20, title: 'Caps Lock', width: 3, dark: 1
      },
      {
        shifted_ru: 'Ф', shifted_en: 'A', keyCode: 65, en: 'a', ru: 'ф', width: 1, dark: 0
      },
      {
        shifted_ru: 'Ы', shifted_en: 'S', keyCode: 83, en: 's', ru: 'ы', width: 1, dark: 0
      },
      {
        shifted_ru: 'В', shifted_en: 'D', keyCode: 68, en: 'd', ru: 'в', width: 1, dark: 0
      },
      {
        shifted_ru: 'А', shifted_en: 'F', keyCode: 70, en: 'f', ru: 'а', width: 1, dark: 0
      },
      {
        shifted_ru: 'П', shifted_en: 'G', keyCode: 71, en: 'g', ru: 'п', width: 1, dark: 0
      },
      {
        shifted_ru: 'Р', shifted_en: 'H', keyCode: 72, en: 'h', ru: 'р', width: 1, dark: 0
      },
      {
        shifted_ru: 'О', shifted_en: 'J', keyCode: 74, en: 'j', ru: 'о', width: 1, dark: 0
      },
      {
        shifted_ru: 'Л', shifted_en: 'K', keyCode: 75, en: 'k', ru: 'л', width: 1, dark: 0
      },
      {
        shifted_ru: 'Д', shifted_en: 'L', keyCode: 76, en: 'l', ru: 'д', width: 1, dark: 0
      },
      {
        shifted_ru: 'Ж', shifted_en: ':', keyCode: 186, en: ';', ru: 'ж', width: 1, dark: 0
      },
      {
        shifted_ru: 'Э', shifted_en: '"', keyCode: 222, en: '\'', ru: 'э', width: 1, dark: 0
      },
      {
        keyCode: 13, value: '\n', title: 'Enter', width: 3, dark: 1, lineBreak: true
      },
      {
        keyCode: 16, code: 'ShiftLeft', title: 'Shift', width: 3, dark: 1, extra: true
      },
      {
        shifted_ru: 'Я', shifted_en: 'Z', keyCode: 90, en: 'z', ru: 'я', width: 1, dark: 0
      },
      {
        shifted_ru: 'Ч', shifted_en: 'X', keyCode: 88, en: 'x', ru: 'ч', width: 1, dark: 0
      },
      {
        shifted_ru: 'С', shifted_en: 'C', keyCode: 67, en: 'c', ru: 'с', width: 1, dark: 0
      },
      {
        shifted_ru: 'М', shifted_en: 'v', keyCode: 86, en: 'v', ru: 'м', width: 1, dark: 0
      },
      {
        shifted_ru: 'И', shifted_en: 'B', keyCode: 66, en: 'b', ru: 'и', width: 1, dark: 0
      },
      {
        shifted_ru: 'Т', shifted_en: 'N', keyCode: 78, en: 'n', ru: 'т', width: 1, dark: 0
      },
      {
        shifted_ru: 'Ь', shifted_en: 'M', keyCode: 77, en: 'm', ru: 'ь', width: 1, dark: 0
      },
      {
        shifted_ru: 'Б', shifted_en: '<', keyCode: 188, en: ',', ru: 'б', width: 1, dark: 0
      },
      {
        shifted_ru: 'Ю', shifted_en: '>', keyCode: 190, en: '.', ru: 'ю', width: 1, dark: 0
      },
      {
        shifted_ru: ',', shifted_en: '?', keyCode: 191, en: '/', ru: '.', width: 1, dark: 0
      },
      {
        keyCode: 38, value: '↑', title: '↑', width: 1, dark: 1
      },
      {
        keyCode: 16, code: 'ShiftRight', title: 'Shift', width: 2, dark: 1, extra: true, lineBreak: true
      },
      {
        keyCode: 17, code: 'ControlLeft', title: 'Ctrl', width: 1, dark: 1, extra: true
      },
      {
        keyCode: 91, code: 'MetaLeft', title: 'Win', width: 1, dark: 1
      },
      {
        keyCode: 18, code: 'AltLeft', title: 'Alt', width: 1, dark: 1, extra: true
      },
      {
        keyCode: 32, value: ' ', code: 'Space', title: '', width: 4, dark: 1
      },
      {
        keyCode: 18, code: 'AltRight', title: 'Alt', width: 1, dark: 1, extra: true
      },
      {
        keyCode: 17, code: 'ControlRight', title: 'Ctrl', width: 1, dark: 1, extra: true
      },
      {
        keyCode: 37, title: '←', width: 1, dark: 1
      },
      {
        keyCode: 40, value: '↓', title: '↓', width: 1, dark: 1
      },
      {
        keyCode: 39, title: '→', width: 1, dark: 1
      }
    ]
  },

  init() {
    this.properties.lang = localStorage.getItem('lang') || 'ru';
    this.elements.main = document.createElement('div');
    this.elements.keysContainer = document.createElement('div');

    this.elements.main.classList.add('keyboard', 'keyboard-hidden');
    this.elements.keysContainer.classList.add('keyboard--keys');
    this.elements.keysContainer.appendChild(this._createKeys());
    this.elements.input = document.createElement('textarea');
    this.elements.input.classList.add('input');


    document.body.appendChild(this.elements.input);
    this.elements.main.appendChild(this.elements.keysContainer);
    document.body.appendChild(this.elements.main);

    window.addEventListener('keydown', evt => {
      this._onKeyDown(evt);
    });
    window.addEventListener('keyup', evt => {
      this._onKeyUp(evt);
    });
  },

  _createKeys() {
    const fragment = document.createDocumentFragment();
    let rowFragment = document.createDocumentFragment();
    let keyboardRow = document.createElement('div');
    keyboardRow.classList.add('keyboard--row');


    this.properties.keyLayout.forEach(key => {
      const keyElement = document.createElement('button');
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
        default:
          break;
      }
      if (key[this.properties.lang]) {
        keyElement.textContent = key[this.properties.lang];
      } else if (key.value && key.value !== '\n' && key.value !== '\t') {
        keyElement.textContent = key.value;
      } else {
        keyElement.textContent = key.title;
      }

      keyElement.addEventListener('click', (evt) => {
        this.properties.keyLayout.forEach(el => {
          if (el.domElement === evt.target) {
            this._onClick(el, evt);
          }
        });
      });
      keyElement.addEventListener('mousedown', (evt) => {
        this.properties.keyLayout.forEach(el => {
          if (el.domElement === evt.target) {
            if (el.keyCode === 16) {
              this._onMouseDown(el, evt);
            }
          }
        });
      });
      keyElement.addEventListener('mouseup', (evt) => {
        this.properties.keyLayout.forEach(el => {
          if (el.domElement === evt.target) {
            if (el.keyCode === 16) {
              this._onMouseUp(el, evt);
            }
          }
        });
      });

      keyboardRow.appendChild(keyElement);
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
      if (key.keyCode === 20) {
        key.domElement.classList.toggle('keyboard--key-active');
      }
    });
    this._redraw();
  },

  _onClick(key, evt) {
    if (key.keyCode === 20) {
      this._toggleCapsLock();
    }

    this._print(key, evt);
  },

  _onMouseDown(key) {
    if (key.keyCode === 16) {
      this._redraw('shiftOn');
    }
  },

  _onMouseUp(key) {
    if (key.keyCode === 16) {
      this._redraw('shiftOff');
    }
  },

  _onKeyDown(evt) {
    evt.preventDefault();
    const element = this._getDomElementToHighlight(evt);
    if (evt.keyCode === 20) {
      this._toggleCapsLock();
    } else {
      element.domElement.classList.add('keyboard--key-active');
    }
    if (evt.keyCode === 18 && evt.ctrlKey) {
      this.switchLang();
    }
    if (evt.keyCode === 16) {
      this._redraw('shiftOn');
    }
    this._print(element, evt);
  },

  _onKeyUp(evt) {
    evt.preventDefault();
    const element = this._getDomElementToHighlight(evt);
    if (evt.keyCode !== 20) {
      element.domElement.classList.remove('keyboard--key-active');
    }
    if (evt.keyCode === 16) {
      this._redraw('shiftOff');
    }
  },

  _print(key, evt) {
    this.elements.input.focus();
    let value = key[this.properties.lang] || key.value;
    if (value) {
      if (this.properties.capsLock) {
        value = value.toUpperCase();
      }
      if (evt.shiftKey) {
        if (key['shifted_' + this.properties.lang] || key.shifted) {
          value = key['shifted_' + this.properties.lang] || key.shifted;
        }
        value = this.properties.capsLock ? value.toLowerCase() : value.toUpperCase();
      }
      const input = this.elements.input;
      if (input.selectionStart <= input.selectionEnd) {
        const startPosition = input.selectionStart + value.length;
        input.value = input.value.slice(0, input.selectionStart) + value + input.value.slice(input.selectionEnd, input.value.length);
        input.selectionStart = startPosition;
        input.selectionEnd = input.selectionStart;
      }
    }
    if (key.keyCode === 8) {
      this._backSpace();
    }
    if (key.keyCode === 46) {
      this._delete();
    }
    if (key.keyCode === 37) {
      this._moveLeft();
    }
    if (key.keyCode === 39) {
      this._moveRight();
    }
  },

  _getDomElementToHighlight(evt) {
    let element;
    this.properties.keyLayout.forEach(key => {
      if (key.keyCode === evt.keyCode) {
        if (key.extra) {
          this.properties.keyLayout.forEach(extraKey => {
            if ((extraKey.code === evt.code)) {
              element = extraKey;
            }
          });
        } else {
          element = key;
        }
      }
    });
    return element;
  },

  switchLang() {
    this.properties.lang = (this.properties.lang === 'ru') ? 'en' : 'ru';
    if (localStorage.getItem('lang')) {
      localStorage.removeItem('lang');
    }
    localStorage.setItem('lang', this.properties.lang);
    this._redraw('lang');
  },

  _redraw(reason) {
    this.properties.keyLayout.forEach(key => {
      if (reason === 'shiftOn') {
        if (key['shifted_' + this.properties.lang] || key.shifted) {
          key.domElement.textContent = key['shifted_' + this.properties.lang] || key.shifted;
        }
      } else if (reason === 'shiftOff') {
        if (key['shifted_' + this.properties.lang] || key.shifted) {
          key.domElement.textContent = key[this.properties.lang] || key.value;
        }
      } else if (reason === 'lang') {
        if (key[this.properties.lang]) {
          key.domElement.textContent = (this.properties.capsLock) ? key[this.properties.lang].toUpperCase() : key[this.properties.lang];
        }
      } else if (key[this.properties.lang]) {
        key.domElement.textContent = (this.properties.capsLock) ? key.domElement.textContent.toUpperCase() : key.domElement.textContent.toLowerCase();
      }
    });
  },

  _delete() {
    const input = this.elements.input;
    if (input.selectionStart < input.value.length) {
      const startPosition = input.selectionStart;
      if (input.selectionStart === input.selectionEnd) {
        input.selectionEnd = input.selectionStart + 1;
      }
      input.value = input.value.slice(0, input.selectionStart) + input.value.slice(input.selectionEnd, input.value.length);
      input.selectionStart = startPosition;
      input.selectionEnd = input.selectionStart;
    }
  },

  _backSpace() {
    const input = this.elements.input;
    if (input.selectionEnd > 0) {
      const startPosition = input.selectionStart;
      if (input.selectionStart === input.selectionEnd) {
        input.selectionStart = startPosition - 1;
        input.value = input.value.slice(0, input.selectionStart) + input.value.slice(input.selectionEnd, input.value.length);
        input.selectionStart = startPosition - 1;
        input.selectionEnd = input.selectionStart;
      } else if (input.selectionStart < input.selectionEnd) {
        input.value = input.value.slice(0, input.selectionStart) + input.value.slice(input.selectionEnd, input.value.length);
        input.selectionStart = startPosition;
        input.selectionEnd = input.selectionStart;
      }
    }
  },

  _moveLeft() {
    if (this.elements.input.selectionStart >= 1) {
      this.elements.input.selectionStart = this.elements.input.selectionStart - 1;
      this.elements.input.selectionEnd = this.elements.input.selectionStart;
    }
  },

  _moveRight() {
    if (this.elements.input.selectionStart < this.elements.input.value.length) {
      this.elements.input.selectionStart = this.elements.input.selectionStart + 1;
      this.elements.input.selectionEnd = this.elements.input.selectionStart;
    }
  }
};

window.addEventListener('DOMContentLoaded', () => {
  Keyboard.init();
});
