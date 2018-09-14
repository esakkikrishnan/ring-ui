window.source = {
  "title": "Form Ng",
  "url": "form-ng.html",
  "type": "js",
  "content": "import angular from 'angular';\nimport AngularElastic from '@jetbrains/angular-elastic';\n\nimport MessageBundle from '../message-bundle-ng/message-bundle-ng';\nimport '../input/input.scss';\nimport styles from '../error-bubble/error-bubble.css';\n\nimport overrideStyles from './error-bubble-ng.css';\n\n/**\n * @name Form Ng\n * @category Legacy Angular\n * @description Provides an Angular wrapper for Form.\n * @example-file ./form-ng.examples.html\n */\n\nconst angularModule = angular.module('Ring.form', [MessageBundle, AngularElastic]);\n\nangularModule.factory('getFormErrorMessages',\n  function getFormErrorMessagesDirective(RingMessageBundle) {\n    function msg(id, formError) {\n      const messageBundleId = `form_${id}`;\n      if (RingMessageBundle.hasOwnProperty(messageBundleId)) {\n        return RingMessageBundle[messageBundleId]();\n      }\n\n      const formErrors = (formError && formError[id]) || [];\n      for (let j = 0; j < formErrors.length; ++j) {\n        if (formErrors[j] && formErrors[j].message) {\n          return formErrors[j].message;\n        }\n      }\n\n      return undefined;\n    }\n\n    return formErrors => {\n      const errorMessages = [];\n      for (const key in formErrors) {\n        if (formErrors.hasOwnProperty(key) && formErrors[key]) {\n          errorMessages.push(msg(key, formErrors));\n        }\n      }\n      return errorMessages;\n    };\n  });\n\n/**\n * <div rg-error-bubble=\"form.name\"></div>\n * @param {object} error-bubble Ng-model for this control\n *\n * Where form.name is a reference to angularJS form input\n */\nangularModule.directive('rgErrorBubble', function rgErrorBubbleDirective(getFormErrorMessages) {\n  return {\n    scope: {\n      errorBubble: '&rgErrorBubble'\n    },\n\n    replace: true,\n    template: `\n<div class=\"${styles.errorBubble} ${overrideStyles.errorBubbleNg}\" ng-show=\"active\" ng-style=\"style\">\n  <div ng-repeat=\"errorMessage in getFormErrorMessages(errorBubble().$error)\">{{ errorMessage }}</div>\n</div>`,\n    link: function link(scope, iElement, iAttrs) {\n      scope.style = {};\n\n      const siblings = Array.from(iElement[0].parentNode.children);\n      let element;\n      let tagName;\n\n      for (let i = 0; i < siblings.length; i++) {\n        tagName = siblings[i].tagName.toLowerCase();\n\n        if (tagName === 'input' || tagName === 'textarea') {\n          element = siblings[i];\n          break;\n        }\n      }\n\n      scope.material = iAttrs.material !== undefined;\n\n      scope.$watch(() => {\n        const result = scope.errorBubble();\n\n        return result.$invalid && result.$dirty;\n      }, active => {\n        scope.active = active;\n\n        if (active && element) {\n          scope.style.left = element.offsetWidth + 2;\n        }\n      });\n\n      scope.getFormErrorMessages = getFormErrorMessages;\n    }\n  };\n});\n/**\n * <input name=\"confirm\" type=\"password\" rg-equal-value=\"data.password\" ng-model=\"data.confirm\">\n * Constraint to be user for confirm password fields.\n */\nangularModule.directive('rgEqualValue', function rgEqualValueDirective() {\n  return {\n    require: 'ngModel',\n\n    link: function link(scope, iElement, iAttrs, ngModelCtrl) {\n      const element = iElement[0];\n\n      function assertEqual(thisValue, thatValue) {\n        ngModelCtrl.$setValidity('equalvalue', thisValue === thatValue);\n      }\n\n      scope.$watch(iAttrs.rgEqualValue, value => {\n        assertEqual(element.value, value);\n      });\n\n      element.addEventListener('keyup', () => {\n        const thatValue = scope.$eval(iAttrs.rgEqualValue);\n        scope.$apply(() => {\n          assertEqual(element.value, thatValue);\n        });\n      });\n    }\n  };\n});\n/**\n * <input name=\"name\" required type=\"text\" ng-class=\"form.name | rgInputClass:submitted\" ng-model=\"name\">\n *\n * Is intended to be used for the value of ng-class. Accepts a reference to an angularJS form input\n */\nangularModule.filter('rgInputClass', () => (input, submitted) => ({\n  'ring-input': true,\n  'ring-input_error': input.$invalid && (input.$dirty || submitted),\n  'ring-input_correct': !input.$invalid && (input.$dirty || submitted)\n}));\n/**\n * <form rg-form-autofill-fix ...>\n *\n * Fixes Chrome bug: https://github.com/angular/angular.js/issues/1460\n */\nangularModule.directive('rgFormAutofillFix', $timeout => ({\n  require: '?form',\n  priority: 10,\n\n  link: function link($scope, element, attrs, form) {\n    if (form) {\n      const POLL_INTERVAL = 150;\n      const MAX_COUNT = 5;\n      let promise;\n      let count = 0;\n\n      (function poll() {\n        let filled;\n\n        angular.forEach(element.find('input'), elem => {\n          const $elem = angular.element(elem);\n          const controller = $elem.controller('ngModel');\n          const val = $elem.val();\n          const type = $elem.attr('type');\n\n          if (controller && val && type !== 'checkbox' && type !== 'radio') {\n            controller.$setViewValue(val);\n            filled = true;\n          }\n        });\n\n        if (!filled || count < MAX_COUNT) {\n          promise = $timeout(poll, POLL_INTERVAL);\n          count++;\n        }\n      }());\n\n      element.on('$destroy', () => {\n        $timeout.cancel(promise);\n      });\n\n    }\n  }\n}));\n\nexport default angularModule.name;\n",
  "examples": [
    {
      "name": "Form Ng",
      "url": "examples/form-ng/form-ng.html",
      "disableAutoSize": false,
      "files": [
        {
          "type": "html",
          "content": "\n\n<div ng-app=\"Example.form\" ng-strict-di style=\"width: 700px\"\n  ng-controller=\"FormExampleCtrl as formExampleCtrl\">\n\n  <form class=\"ring-form\" name=\"ExampleForm\" novalidate>\n    <span class=\"ring-form__title\">Form Title</span>\n\n    <div class=\"ring-form__group\">\n      <rg-input size=\"M\" required ng-model=\"formExampleCtrl.inputValue\" label=\"Medium Input\" name=\"inputMD\" type=\"text\"></rg-input>\n      <div rg-error-bubble=\"ExampleForm.inputMD\"></div>\n    </div>\n\n    <div class=\"ring-form__group\">\n      <rg-select size=\"M\" options=\"item.name for item in formExampleCtrl.data track by item.name\"></rg-select>\n      <div class=\"ring-form__control__description\">I am a simple description</div>\n    </div>\n\n    <div class=\"ring-form__group\">\n      <div>\n        <rg-checkbox ng-model=\"formExampleCtrl.checkedModel\">Checkbox 1</rg-checkbox>\n      </div>\n      <div>\n        <rg-checkbox ng-model=\"formExampleCtrl.checkedModel\">Checkbox 2</rg-checkbox>\n      </div>\n      <div>\n        <rg-checkbox>Checkbox 3</rg-checkbox>\n      </div>\n      <div>\n        <rg-checkbox>Checkbox 4</rg-checkbox>\n      </div>\n    </div>\n\n    <div class=\"ring-form__footer\">\n      <rg-button mode=\"primary\" ng-click=\"ExampleForm.$validate()\">Save</rg-button>\n      <rg-button>Cancel</rg-button>\n    </div>\n  </form>\n</div>\n\n  ",
          "showCode": true
        },
        {
          "type": "js",
          "content": "\nimport angular from 'angular';\n\nimport '@jetbrains/ring-ui/components/form/form.scss';\n\nimport ButtonNg from '@jetbrains/ring-ui/components/button-ng/button-ng';\nimport SelectNg from '@jetbrains/ring-ui/components/select-ng/select-ng';\nimport CheckboxNg from '@jetbrains/ring-ui/components/checkbox-ng/checkbox-ng';\nimport FormNg from '@jetbrains/ring-ui/components/form-ng/form-ng';\nimport InputNg from '@jetbrains/ring-ui/components/input-ng/input-ng';\n\nangular.module('Example.form', [FormNg, CheckboxNg, SelectNg, ButtonNg, InputNg]).\ncontroller('FormExampleCtrl', function ($scope) {\n  this.checkedModel = true;\n  this.data = [{name: 'Ada'}, {name: 'Nik'}];\n});\n  ",
          "showCode": true
        }
      ]
    }
  ],
  "description": "Provides an Angular wrapper for Form.",
  "attrs": {
    "name": "Form Ng",
    "category": "Legacy Angular",
    "description": "Provides an Angular wrapper for Form.",
    "example-file": "./form-ng.examples.html"
  }
};