import i18next from 'i18next';
import React from 'react'
import {  Dropdown } from 'react-bootstrap'
import { initReactI18next, useTranslation } from 'react-i18next';


i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          "calculator": "Calculator"
        }
      },
      hi: {
        translation: {
          "calculator": "कैलकुलेटर"
        }
      },
      sa: {
        translation: {
          "calculator": "गणकम्"
        }
      },
      es: {
        translation: {
          "calculator": "calculadora"
        }
      },
      zh: {
        translation: {
          "calculator": "计算器"
        }
      }
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });

export default function Calculator() {
    const { t } = useTranslation();

  return (
    <>
        <h1>{t('calculator')}</h1>
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" className='size="lg"'>
                Languages
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        <div class="container">
            <form action="" name="calc" class="calculator">
                <input type="text" class="value" readonly name="txt" />
                <span class="num clear" onclick="calc.txt.value=''"><i>C</i></span>
                <span class="num" onclick="calc.txt.value+='/'"><i>/</i></span>
                <span class="num" onclick="calc.txt.value+='*'"><i>*</i></span>
                <span class="num" onclick="calc.txt.value+='7'"><i>7</i></span>
                <span class="num" onclick="calc.txt.value+='8'"><i>8</i></span>
                <span class="num" onclick="calc.txt.value+='9'"><i>9</i></span>
                <span class="num" onclick="calc.txt.value+='-'"><i>-</i></span>
                <span class="num" onclick="calc.txt.value+='4'"><i>4</i></span>
                <span class="num" onclick="calc.txt.value+='5'"><i>5</i></span>
                <span class="num" onclick="calc.txt.value+='6'"><i>6</i></span>
                <span class="num plus" onclick="calc.txt.value+='+'"><i>+</i></span>
                <span class="num" onclick="calc.txt.value+='1'"><i>1</i></span>
                <span class="num" onclick="calc.txt.value+='2'"><i>2</i></span>
                <span class="num" onclick="calc.txt.value+='3'"><i>3</i></span>
                <span class="num" onclick="calc.txt.value+='0'"><i>0</i></span>
                <span class="num" onclick="calc.txt.value+='00'"><i>00</i></span>
                <span class="num" onclick="calc.txt.value+='.'"><i>.</i></span>

                <span class="num equal"onclick="document.calc.txt.value=eval(calc.txt.value)">
                    <i>=</i>
                </span>
            </form>
        </div>
    </>
  )
}
