"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/erc721/[id]";
exports.ids = ["pages/api/erc721/[id]"];
exports.modules = {

/***/ "./pages/api/erc721/[id].js":
/*!**********************************!*\
  !*** ./pages/api/erc721/[id].js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n//web/nft-app/pages/api/erc721\nconst metadata = {\n    1: {\n        attributes: [\n            {\n                trait_type: \"Shape\",\n                value: \"Circle\"\n            },\n            {\n                trait_type: \"Mood\",\n                value: \"Sad\"\n            }, \n        ],\n        description: \"A sad circle.\",\n        image: \"https://i.imgur.com/Qkw9N0A.jpeg\",\n        name: \"Sad Circle\"\n    },\n    2: {\n        attributes: [\n            {\n                trait_type: \"Shape\",\n                value: \"Rectangle\"\n            },\n            {\n                trait_type: \"Mood\",\n                value: \"Angry\"\n            }, \n        ],\n        description: \"An angry rectangle.\",\n        image: \"https://i.imgur.com/SMneO6k.jpeg\",\n        name: \"Angry Rectangle\"\n    },\n    3: {\n        attributes: [\n            {\n                trait_type: \"Shape\",\n                value: \"Triangle\"\n            },\n            {\n                trait_type: \"Mood\",\n                value: \"Bored\"\n            }, \n        ],\n        description: \"An bored triangle.\",\n        image: \"https://i.imgur.com/hMVRFoJ.jpeg\",\n        name: \"Bored Triangle\"\n    }\n};\nfunction handler(req, res) {\n    res.status(200).json(metadata[req.query.id] || {\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZXJjNzIxL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLEVBQThCO0FBQzlCLEtBQUssQ0FBQ0EsUUFBUSxHQUFHLENBQUM7SUFDaEIsQ0FBQyxFQUFFLENBQUM7UUFDRkMsVUFBVSxFQUFFLENBQUM7WUFDWCxDQUFDO2dCQUNDQyxVQUFVLEVBQUUsQ0FBTztnQkFDbkJDLEtBQUssRUFBRSxDQUFRO1lBQ2pCLENBQUM7WUFDRCxDQUFDO2dCQUNDRCxVQUFVLEVBQUUsQ0FBTTtnQkFDbEJDLEtBQUssRUFBRSxDQUFLO1lBQ2QsQ0FBQztRQUNILENBQUM7UUFDREMsV0FBVyxFQUFFLENBQWU7UUFDNUJDLEtBQUssRUFBRSxDQUFrQztRQUN6Q0MsSUFBSSxFQUFFLENBQVk7SUFDcEIsQ0FBQztJQUNELENBQUMsRUFBRSxDQUFDO1FBQ0ZMLFVBQVUsRUFBRSxDQUFDO1lBQ1gsQ0FBQztnQkFDQ0MsVUFBVSxFQUFFLENBQU87Z0JBQ25CQyxLQUFLLEVBQUUsQ0FBVztZQUNwQixDQUFDO1lBQ0QsQ0FBQztnQkFDQ0QsVUFBVSxFQUFFLENBQU07Z0JBQ2xCQyxLQUFLLEVBQUUsQ0FBTztZQUNoQixDQUFDO1FBQ0gsQ0FBQztRQUNEQyxXQUFXLEVBQUUsQ0FBcUI7UUFDbENDLEtBQUssRUFBRSxDQUFrQztRQUN6Q0MsSUFBSSxFQUFFLENBQWlCO0lBQ3pCLENBQUM7SUFDRCxDQUFDLEVBQUUsQ0FBQztRQUNGTCxVQUFVLEVBQUUsQ0FBQztZQUNYLENBQUM7Z0JBQ0NDLFVBQVUsRUFBRSxDQUFPO2dCQUNuQkMsS0FBSyxFQUFFLENBQVU7WUFDbkIsQ0FBQztZQUNELENBQUM7Z0JBQ0NELFVBQVUsRUFBRSxDQUFNO2dCQUNsQkMsS0FBSyxFQUFFLENBQU87WUFDaEIsQ0FBQztRQUNILENBQUM7UUFDREMsV0FBVyxFQUFFLENBQW9CO1FBQ2pDQyxLQUFLLEVBQUUsQ0FBa0M7UUFDekNDLElBQUksRUFBRSxDQUFnQjtJQUN4QixDQUFDO0FBQ0gsQ0FBQztBQUVjLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQ3pDQSxHQUFHLENBQUNDLE1BQU0sQ0FBQyxHQUFHLEVBQUVDLElBQUksQ0FBQ1gsUUFBUSxDQUFDUSxHQUFHLENBQUNJLEtBQUssQ0FBQ0MsRUFBRSxLQUFLLENBQUM7SUFBQSxDQUFDO0FBQ25ELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZnQtYXBwLy4vcGFnZXMvYXBpL2VyYzcyMS9baWRdLmpzPzhiYmQiXSwic291cmNlc0NvbnRlbnQiOlsiLy93ZWIvbmZ0LWFwcC9wYWdlcy9hcGkvZXJjNzIxXG5jb25zdCBtZXRhZGF0YSA9IHtcbiAgMToge1xuICAgIGF0dHJpYnV0ZXM6IFtcbiAgICAgIHtcbiAgICAgICAgdHJhaXRfdHlwZTogXCJTaGFwZVwiLFxuICAgICAgICB2YWx1ZTogXCJDaXJjbGVcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRyYWl0X3R5cGU6IFwiTW9vZFwiLFxuICAgICAgICB2YWx1ZTogXCJTYWRcIixcbiAgICAgIH0sXG4gICAgXSxcbiAgICBkZXNjcmlwdGlvbjogXCJBIHNhZCBjaXJjbGUuXCIsXG4gICAgaW1hZ2U6IFwiaHR0cHM6Ly9pLmltZ3VyLmNvbS9Ra3c5TjBBLmpwZWdcIixcbiAgICBuYW1lOiBcIlNhZCBDaXJjbGVcIixcbiAgfSxcbiAgMjoge1xuICAgIGF0dHJpYnV0ZXM6IFtcbiAgICAgIHtcbiAgICAgICAgdHJhaXRfdHlwZTogXCJTaGFwZVwiLFxuICAgICAgICB2YWx1ZTogXCJSZWN0YW5nbGVcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRyYWl0X3R5cGU6IFwiTW9vZFwiLFxuICAgICAgICB2YWx1ZTogXCJBbmdyeVwiLFxuICAgICAgfSxcbiAgICBdLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFuIGFuZ3J5IHJlY3RhbmdsZS5cIixcbiAgICBpbWFnZTogXCJodHRwczovL2kuaW1ndXIuY29tL1NNbmVPNmsuanBlZ1wiLFxuICAgIG5hbWU6IFwiQW5ncnkgUmVjdGFuZ2xlXCIsXG4gIH0sXG4gIDM6IHtcbiAgICBhdHRyaWJ1dGVzOiBbXG4gICAgICB7XG4gICAgICAgIHRyYWl0X3R5cGU6IFwiU2hhcGVcIixcbiAgICAgICAgdmFsdWU6IFwiVHJpYW5nbGVcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRyYWl0X3R5cGU6IFwiTW9vZFwiLFxuICAgICAgICB2YWx1ZTogXCJCb3JlZFwiLFxuICAgICAgfSxcbiAgICBdLFxuICAgIGRlc2NyaXB0aW9uOiBcIkFuIGJvcmVkIHRyaWFuZ2xlLlwiLFxuICAgIGltYWdlOiBcImh0dHBzOi8vaS5pbWd1ci5jb20vaE1WUkZvSi5qcGVnXCIsXG4gICAgbmFtZTogXCJCb3JlZCBUcmlhbmdsZVwiLFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICByZXMuc3RhdHVzKDIwMCkuanNvbihtZXRhZGF0YVtyZXEucXVlcnkuaWRdIHx8IHt9KTtcbn1cbiJdLCJuYW1lcyI6WyJtZXRhZGF0YSIsImF0dHJpYnV0ZXMiLCJ0cmFpdF90eXBlIiwidmFsdWUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwibmFtZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzdGF0dXMiLCJqc29uIiwicXVlcnkiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/erc721/[id].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/erc721/[id].js"));
module.exports = __webpack_exports__;

})();