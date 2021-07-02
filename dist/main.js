/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/assign/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/assign/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ assign)
/* harmony export */ });
function assign(target, dirtyObject) {
  if (target == null) {
    throw new TypeError('assign requires that input parameter not be null or undefined');
  }

  dirtyObject = dirtyObject || {};

  for (var property in dirtyObject) {
    if (dirtyObject.hasOwnProperty(property)) {
      target[property] = dirtyObject[property];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/cloneObject/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/cloneObject/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ cloneObject)
/* harmony export */ });
/* harmony import */ var _assign_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assign/index.js */ "./node_modules/date-fns/esm/_lib/assign/index.js");

function cloneObject(dirtyObject) {
  return (0,_assign_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({}, dirtyObject);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
  /*
   * |     | Unit                           |     | Unit                           |
   * |-----|--------------------------------|-----|--------------------------------|
   * |  a  | AM, PM                         |  A* | Milliseconds in day            |
   * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
   * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
   * |  d  | Day of month                   |  D  | Day of year                    |
   * |  e  | Local day of week              |  E  | Day of week                    |
   * |  f  |                                |  F* | Day of week in month           |
   * |  g* | Modified Julian day            |  G  | Era                            |
   * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
   * |  i! | ISO day of week                |  I! | ISO week of year               |
   * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
   * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
   * |  l* | (deprecated)                   |  L  | Stand-alone month              |
   * |  m  | Minute                         |  M  | Month                          |
   * |  n  |                                |  N  |                                |
   * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
   * |  p! | Long localized time            |  P! | Long localized date            |
   * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
   * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
   * |  s  | Second                         |  S  | Fraction of second             |
   * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
   * |  u  | Extended year                  |  U* | Cyclic year                    |
   * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
   * |  w  | Local week of year             |  W* | Week of month                  |
   * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
   * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
   * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
   *
   * Letters marked by * are not implemented but reserved by Unicode standard.
   *
   * Letters marked by ! are non-standard, but implemented by date-fns:
   * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
   * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
   *   i.e. 7 for Sunday, 1 for Monday, etc.
   * - `I` is ISO week of year, as opposed to `w` which is local week of year.
   * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
   *   `R` is supposed to be used in conjunction with `I` and `i`
   *   for universal ISO week-numbering date, whereas
   *   `Y` is supposed to be used in conjunction with `w` and `e`
   *   for week-numbering date specific to the locale.
   * - `P` is long localized date format
   * - `p` is long localized time format
   */

};
var formatters = {
  // Era
  G: function (date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.y(date, token);
  },
  // Local week-numbering year
  Y: function (date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function (date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(date); // Padding

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(year, token.length);
  },
  // Quarter
  Q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function (date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__.default)(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(week, token.length);
  },
  // ISO week of year
  I: function (date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__.default)(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(isoWeek, token.length);
  },
  // Day of the month
  d: function (date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.d(date, token);
  },
  // Day of year
  D: function (date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__.default)(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dayOfYear, token.length);
  },
  // Day of week
  E: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.h(date, token);
  },
  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.H(date, token);
  },
  // Hour [0-11]
  K: function (date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(hours, token.length);
  },
  // Hour [1-24]
  k: function (date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(hours, token.length);
  },
  // Minute
  m: function (date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.m(date, token);
  },
  // Second
  s: function (date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.s(date, token);
  },
  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__.default.S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function (date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function (date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(month + 1, 2);
  },
  // Day of the month
  d: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function (date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(date.getUTCHours(), token.length);
  },
  // Minute
  m: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function (date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
}

function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
}

function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/);
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
}

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate, dirtyOptions);
  var year = date.getUTCFullYear();
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(firstWeekOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProtectedDayOfYearToken": () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   "isProtectedWeekYearToken": () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   "throwProtectedError": () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(options.firstWeekContainsDate);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(firstWeek, dirtyOptions);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeek(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */

function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInCalendarMonths/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInCalendarMonths/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInCalendarMonths)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInCalendarMonths
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * var result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */

function differenceInCalendarMonths(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
  var monthDiff = dateLeft.getMonth() - dateRight.getMonth();
  return yearDiff * 12 + monthDiff;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMilliseconds/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInMilliseconds
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of milliseconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * const result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */

function differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  return dateLeft.getTime() - dateRight.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInMonths/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInMonths/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInMonths)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../differenceInCalendarMonths/index.js */ "./node_modules/date-fns/esm/differenceInCalendarMonths/index.js");
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compareAsc/index.js */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isLastDayOfMonth/index.js */ "./node_modules/date-fns/esm/isLastDayOfMonth/index.js");





/**
 * @name differenceInMonths
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @description
 * Get the number of full months between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of full months
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * var result = differenceInMonths(new Date(2014, 8, 1), new Date(2014, 0, 31))
 * //=> 7
 */

function differenceInMonths(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateRight);
  var sign = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dateLeft, dateRight);
  var difference = Math.abs((0,_differenceInCalendarMonths_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(dateLeft, dateRight));
  var result; // Check for the difference of less than month

  if (difference < 1) {
    result = 0;
  } else {
    if (dateLeft.getMonth() === 1 && dateLeft.getDate() > 27) {
      // This will check if the date is end of Feb and assign a higher end of month date
      // to compare it with Jan
      dateLeft.setDate(30);
    }

    dateLeft.setMonth(dateLeft.getMonth() - sign * difference); // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
    // If so, result must be decreased by 1 in absolute value

    var isLastMonthNotFull = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dateLeft, dateRight) === -sign; // Check for cases of one full calendar month

    if ((0,_isLastDayOfMonth_index_js__WEBPACK_IMPORTED_MODULE_4__.default)((0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft)) && difference === 1 && (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDateLeft, dateRight) === 1) {
      isLastMonthNotFull = false;
    }

    result = sign * (difference - Number(isLastMonthNotFull));
  } // Prevent negative zero


  return result === 0 ? 0 : result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/differenceInSeconds/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/differenceInSeconds/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ differenceInSeconds)
/* harmony export */ });
/* harmony import */ var _differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../differenceInMilliseconds/index.js */ "./node_modules/date-fns/esm/differenceInMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name differenceInSeconds
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} dateLeft - the later date
 * @param {Date|Number} dateRight - the earlier date
 * @returns {Number} the number of seconds
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * const result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */

function differenceInSeconds(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var diff = (0,_differenceInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDateLeft, dirtyDateRight) / 1000;
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfDay/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfDay/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name endOfDay
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * const result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */

function endOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/endOfMonth/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/endOfMonth/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ endOfMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name endOfMonth
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the end of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * const result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */

function endOfMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  var month = date.getMonth();
  date.setFullYear(date.getFullYear(), month + 1, 0);
  date.setHours(23, 59, 59, 999);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/formatDistance/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/formatDistance/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistance)
/* harmony export */ });
/* harmony import */ var _compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../compareAsc/index.js */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var _differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../differenceInMonths/index.js */ "./node_modules/date-fns/esm/differenceInMonths/index.js");
/* harmony import */ var _differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../differenceInSeconds/index.js */ "./node_modules/date-fns/esm/differenceInSeconds/index.js");
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/cloneObject/index.js */ "./node_modules/date-fns/esm/_lib/cloneObject/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");








var MINUTES_IN_DAY = 1440;
var MINUTES_IN_ALMOST_TWO_DAYS = 2520;
var MINUTES_IN_MONTH = 43200;
var MINUTES_IN_TWO_MONTHS = 86400;
/**
 * @name formatDistance
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words.
 *
 * | Distance between dates                                            | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance between dates | Result               |
 * |------------------------|----------------------|
 * | 0 secs ... 5 secs      | less than 5 seconds  |
 * | 5 secs ... 10 secs     | less than 10 seconds |
 * | 10 secs ... 20 secs    | less than 20 seconds |
 * | 20 secs ... 40 secs    | half a minute        |
 * | 40 secs ... 60 secs    | less than a minute   |
 * | 60 secs ... 90 secs    | 1 minute             |
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The function was renamed from `distanceInWords ` to `formatDistance`
 *   to make its name consistent with `format` and `formatRelative`.
 *
 * - The order of arguments is swapped to make the function
 *   consistent with `differenceIn...` functions.
 *
 *   ```javascript
 *   // Before v2.0.0
 *
 *   distanceInWords(
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     new Date(1986, 3, 4, 11, 32, 0),
 *     { addSuffix: true }
 *   ) //=> 'in about 1 hour'
 *
 *   // v2.0.0 onward
 *
 *   formatDistance(
 *     new Date(1986, 3, 4, 11, 32, 0),
 *     new Date(1986, 3, 4, 10, 32, 0),
 *     { addSuffix: true }
 *   ) //=> 'in about 1 hour'
 *   ```
 *
 * @param {Date|Number} date - the date
 * @param {Date|Number} baseDate - the date to compare with
 * @param {Object} [options] - an object with options.
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @returns {String} the distance in words
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `baseDate` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `formatDistance` property
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * const result = formatDistance(new Date(2014, 6, 2), new Date(2015, 0, 1))
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00, including seconds?
 * const result = formatDistance(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 *   { includeSeconds: true }
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * const result = formatDistance(new Date(2015, 0, 1), new Date(2016, 0, 1), {
 *   addSuffix: true
 * })
 * //=> 'about 1 year ago'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = formatDistance(new Date(2016, 7, 1), new Date(2015, 0, 1), {
 *   locale: eoLocale
 * })
 * //=> 'pli ol 1 jaro'
 */

function formatDistance(dirtyDate, dirtyBaseDate) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__.default;

  if (!locale.formatDistance) {
    throw new RangeError('locale must contain formatDistance property');
  }

  var comparison = (0,_compareAsc_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate, dirtyBaseDate);

  if (isNaN(comparison)) {
    throw new RangeError('Invalid time value');
  }

  var localizeOptions = (0,_lib_cloneObject_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(options);
  localizeOptions.addSuffix = Boolean(options.addSuffix);
  localizeOptions.comparison = comparison;
  var dateLeft;
  var dateRight;

  if (comparison > 0) {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__.default)(dirtyBaseDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__.default)(dirtyDate);
  } else {
    dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__.default)(dirtyDate);
    dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__.default)(dirtyBaseDate);
  }

  var seconds = (0,_differenceInSeconds_index_js__WEBPACK_IMPORTED_MODULE_5__.default)(dateRight, dateLeft);
  var offsetInSeconds = ((0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__.default)(dateRight) - (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__.default)(dateLeft)) / 1000;
  var minutes = Math.round((seconds - offsetInSeconds) / 60);
  var months; // 0 up to 2 mins

  if (minutes < 2) {
    if (options.includeSeconds) {
      if (seconds < 5) {
        return locale.formatDistance('lessThanXSeconds', 5, localizeOptions);
      } else if (seconds < 10) {
        return locale.formatDistance('lessThanXSeconds', 10, localizeOptions);
      } else if (seconds < 20) {
        return locale.formatDistance('lessThanXSeconds', 20, localizeOptions);
      } else if (seconds < 40) {
        return locale.formatDistance('halfAMinute', null, localizeOptions);
      } else if (seconds < 60) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', 1, localizeOptions);
      }
    } else {
      if (minutes === 0) {
        return locale.formatDistance('lessThanXMinutes', 1, localizeOptions);
      } else {
        return locale.formatDistance('xMinutes', minutes, localizeOptions);
      }
    } // 2 mins up to 0.75 hrs

  } else if (minutes < 45) {
    return locale.formatDistance('xMinutes', minutes, localizeOptions); // 0.75 hrs up to 1.5 hrs
  } else if (minutes < 90) {
    return locale.formatDistance('aboutXHours', 1, localizeOptions); // 1.5 hrs up to 24 hrs
  } else if (minutes < MINUTES_IN_DAY) {
    var hours = Math.round(minutes / 60);
    return locale.formatDistance('aboutXHours', hours, localizeOptions); // 1 day up to 1.75 days
  } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
    return locale.formatDistance('xDays', 1, localizeOptions); // 1.75 days up to 30 days
  } else if (minutes < MINUTES_IN_MONTH) {
    var days = Math.round(minutes / MINUTES_IN_DAY);
    return locale.formatDistance('xDays', days, localizeOptions); // 1 month up to 2 months
  } else if (minutes < MINUTES_IN_TWO_MONTHS) {
    months = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('aboutXMonths', months, localizeOptions);
  }

  months = (0,_differenceInMonths_index_js__WEBPACK_IMPORTED_MODULE_7__.default)(dateRight, dateLeft); // 2 months up to 12 months

  if (months < 12) {
    var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH);
    return locale.formatDistance('xMonths', nearestMonth, localizeOptions); // 1 year up to max Date
  } else {
    var monthsSinceStartOfYear = months % 12;
    var years = Math.floor(months / 12); // N years up to 1 years 3 months

    if (monthsSinceStartOfYear < 3) {
      return locale.formatDistance('aboutXYears', years, localizeOptions); // N years 3 months up to N years 9 months
    } else if (monthsSinceStartOfYear < 9) {
      return locale.formatDistance('overXYears', years, localizeOptions); // N years 9 months up to N year 12 months
    } else {
      return locale.formatDistance('almostXYears', years + 1, localizeOptions);
    }
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");









 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Su, Sa        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Su, Sa        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 9. `D` and `DD` tokens represent days of the year but they are ofthen confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The second argument is now required for the sake of explicitness.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   format(new Date(2016, 0, 1))
 *
 *   // v2.0.0 onward
 *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
 *   ```
 *
 * - New format string API for `format` function
 *   which is based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
 *   See [this post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
 *
 * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__.default;
  var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_4__.default)(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__.default)(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__.default)(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__.default[firstCharacter];
      return longFormatter(substring, locale.formatLong, formatterOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__.default[firstCharacter];

    if (formatter) {
      if (!options.useAdditionalWeekYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      if (!options.useAdditionalDayOfYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isLastDayOfMonth/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/date-fns/esm/isLastDayOfMonth/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isLastDayOfMonth)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _endOfDay_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../endOfDay/index.js */ "./node_modules/date-fns/esm/endOfDay/index.js");
/* harmony import */ var _endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../endOfMonth/index.js */ "./node_modules/date-fns/esm/endOfMonth/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




/**
 * @name isLastDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is the last day of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * var result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */

function isLastDayOfMonth(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  return (0,_endOfDay_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(date).getTime() === (0,_endOfMonth_index_js__WEBPACK_IMPORTED_MODULE_3__.default)(date).getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now `isValid` doesn't throw an exception
 *   if the first argument is not an instance of Date.
 *   Instead, argument is converted beforehand using `toDate`.
 *
 *   Examples:
 *
 *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
 *   |---------------------------|---------------|---------------|
 *   | `new Date()`              | `true`        | `true`        |
 *   | `new Date('2016-01-01')`  | `true`        | `true`        |
 *   | `new Date('')`            | `false`       | `false`       |
 *   | `new Date(1488370835081)` | `true`        | `true`        |
 *   | `new Date(NaN)`           | `false`       | `false`       |
 *   | `'2016-01-01'`            | `TypeError`   | `false`       |
 *   | `''`                      | `TypeError`   | `false`       |
 *   | `1488370835081`           | `TypeError`   | `true`        |
 *   | `NaN`                     | `TypeError`   | `false`       |
 *
 *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
 *   that try to coerce arguments to the expected type
 *   (which is also the case with other *date-fns* functions).
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * var result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * var result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyDate);
  return !isNaN(date);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function (dirtyOptions) {
    var options = dirtyOptions || {};
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options = dirtyOptions || {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var value;

    if (Object.prototype.toString.call(parsePatterns) === '[object Array]') {
      value = findIndex(parsePatterns, function (pattern) {
        return pattern.test(matchedString);
      });
    } else {
      value = findKey(parsePatterns, function (pattern) {
        return pattern.test(matchedString);
      });
    }

    value = args.valueCallback ? args.valueCallback(value) : value;
    value = options.valueCallback ? options.valueCallback(value) : value;
    return {
      value: value,
      rest: string.slice(matchedString.length)
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (dirtyString, dirtyOptions) {
    var string = String(dirtyString);
    var options = dirtyOptions || {};
    var matchResult = string.match(args.matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);

    if (!parseResult) {
      return null;
    }

    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    return {
      value: value,
      rest: string.slice(matchedString.length)
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatDistance)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};
function formatDistance(token, count, options) {
  options = options || {};
  var result;

  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token];
  } else if (count === 1) {
    result = formatDistanceLocale[token].one;
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count);
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ formatRelative)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};
function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'] // Note: in English, the names of days of the week and months are capitalized.
  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
  // Generally, formatted dates should look like they are in the middle of a sentence,
  // e.g. in Spanish language the weekdays and months should be in the lowercase.

};
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

function ordinalNumber(dirtyNumber, _dirtyOptions) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`:
  //
  //   var options = dirtyOptions || {}
  //   var unit = String(options.unit)
  //
  // where `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
}

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return Number(quarter) - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__.default)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__.default)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");





/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */

var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__.default,
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__.default,
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__.default,
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__.default,
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__.default,
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__.default)(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__.default)(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__.default)(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/ts/manager/controller.ts":
/*!**************************************!*\
  !*** ./src/ts/manager/controller.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Manager": () => (/* binding */ Manager)
/* harmony export */ });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/ts/manager/model.ts");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/ts/manager/view.ts");


var Manager = /** @class */ (function () {
    function Manager() {
        this.model = new _model__WEBPACK_IMPORTED_MODULE_0__.ManagerModel();
        this.view = new _view__WEBPACK_IMPORTED_MODULE_1__.ManagerView();
    }
    Manager.prototype.draw = function (parent) {
        var _this = this;
        this.model.loadLoggedInUser().then(function () {
            _this.view.draw(parent, _this.model);
        });
    };
    return Manager;
}());



/***/ }),

/***/ "./src/ts/manager/model.ts":
/*!*********************************!*\
  !*** ./src/ts/manager/model.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagerModel": () => (/* binding */ ManagerModel)
/* harmony export */ });
/* harmony import */ var _utils_databaseAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/databaseAPI */ "./src/ts/utils/databaseAPI.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var ManagerModel = /** @class */ (function () {
    function ManagerModel() {
    }
    ManagerModel.prototype.loadLoggedInUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var currentUserId, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        currentUserId = this.getUserCookie();
                        if (!(currentUserId === -1)) return [3 /*break*/, 1];
                        this.currentUser = null;
                        return [3 /*break*/, 3];
                    case 1:
                        _a = this;
                        return [4 /*yield*/, _utils_databaseAPI__WEBPACK_IMPORTED_MODULE_0__.DatabaseAPI.getUserById(Number(currentUserId))];
                    case 2:
                        _a.currentUser = _b.sent();
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ManagerModel.prototype.getCurrentUser = function () {
        return this.currentUser;
    };
    ManagerModel.prototype.setUserCookie = function (id) {
        if (this.currentUser === null)
            return;
        var d = new Date();
        d.setTime(d.getTime() + 7 * 24 * 60 * 60 * 1000); // expires in 7 days
        var expires = 'expires=' + d.toUTCString();
        document.cookie = "userId=" + id + "; expires=" + expires + "; path=/;";
    };
    /**
     * @returns user's id stored in cookies (or -1 if there's no cookie)
     */
    ManagerModel.prototype.getUserCookie = function () {
        var name = 'userId=';
        var decodedCookie = decodeURIComponent(document.cookie);
        var cookieArray = decodedCookie.split(';');
        for (var i = 0; i < cookieArray.length; i++) {
            var cookie = cookieArray[i];
            while (cookie.charAt(0) == ' ') {
                cookie = cookie.substring(1);
            }
            if (cookie.indexOf(name) == 0) {
                return Number(cookie.substring(name.length, cookie.length));
            }
        }
        return -1;
    };
    /**
     * Nicknames can consist of:
     * lower case letters,
     * upper case letters,
     * numbers,
     * underscores and
     * dots.
     */
    ManagerModel.prototype.validateInputData = function (nickname, password) {
        if (nickname === '' || password === '')
            return false;
        if (nickname.length < 4 || nickname.length > 15)
            return false;
        if (password.length < 4 || password.length > 15)
            return false;
        var matchesRegex = /^[a-zA-Z0-9_\.]+$/.exec(nickname);
        return matchesRegex !== null;
    };
    /**
     * @returns a login result message ('success' if login successful)
     */
    ManagerModel.prototype.tryLoginUser = function (nickname, password) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _utils_databaseAPI__WEBPACK_IMPORTED_MODULE_0__.DatabaseAPI.getUserByNickname(nickname)];
                    case 1:
                        user = _a.sent();
                        if (user === null)
                            return [2 /*return*/, "user doesn't exist"];
                        if (user.model.getPassword() !== password)
                            return [2 /*return*/, 'wrong password'];
                        // save current user in cookies
                        this.currentUser = user;
                        this.setUserCookie(this.currentUser.model.getId());
                        return [2 /*return*/, 'success'];
                }
            });
        });
    };
    /**
     * @returns a sign up result message ('success' if login successful)
     */
    ManagerModel.prototype.trySignUpUser = function (nickname, password) {
        return __awaiter(this, void 0, void 0, function () {
            var userWithSameNickname, newUser, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, _utils_databaseAPI__WEBPACK_IMPORTED_MODULE_0__.DatabaseAPI.getUserByNickname(nickname)];
                    case 1:
                        userWithSameNickname = _b.sent();
                        if (userWithSameNickname !== null)
                            return [2 /*return*/, 'nickname already taken'];
                        return [4 /*yield*/, _utils_databaseAPI__WEBPACK_IMPORTED_MODULE_0__.DatabaseAPI.addUser(nickname, password)];
                    case 2:
                        newUser = _b.sent();
                        // save current user in cookies
                        _a = this;
                        return [4 /*yield*/, _utils_databaseAPI__WEBPACK_IMPORTED_MODULE_0__.DatabaseAPI.getUserById(newUser.id)];
                    case 3:
                        // save current user in cookies
                        _a.currentUser = _b.sent();
                        this.setUserCookie(this.currentUser.model.getId());
                        return [2 /*return*/, 'success'];
                }
            });
        });
    };
    ManagerModel.prototype.logoutUser = function () {
        document.cookie =
            'userId=;expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';
        location.reload();
    };
    ManagerModel.prototype.addNewProject = function (p) {
        this.currentUser.model.addProject(p);
    };
    ManagerModel.prototype.deleteProject = function (projId) {
        this.currentUser.model.removeProject(projId);
    };
    return ManagerModel;
}());



/***/ }),

/***/ "./src/ts/manager/view.ts":
/*!********************************!*\
  !*** ./src/ts/manager/view.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManagerView": () => (/* binding */ ManagerView)
/* harmony export */ });
/* harmony import */ var _utils_databaseAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/databaseAPI */ "./src/ts/utils/databaseAPI.ts");
/* harmony import */ var _project_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../project/view */ "./src/ts/project/view.ts");
/* harmony import */ var _utils_taskState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/taskState */ "./src/ts/utils/taskState.ts");
/* harmony import */ var _utils_removeElementsChildren__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/removeElementsChildren */ "./src/ts/utils/removeElementsChildren.ts");
/* harmony import */ var _utils_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/toast */ "./src/ts/utils/toast.ts");
/* harmony import */ var _utils_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/dropdown */ "./src/ts/utils/dropdown.ts");
/* harmony import */ var _utils_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/modal */ "./src/ts/utils/modal.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var ManagerView = /** @class */ (function () {
    function ManagerView() {
        this.container = document.createElement('div');
        this.container.className = 'manager';
    }
    ManagerView.prototype.draw = function (parent, model) {
        this.parent = parent;
        this.parent.appendChild(this.container);
        // check for saved user in cookies
        if (model.getUserCookie() === -1)
            this.drawLoginPage(model);
        else {
            this.drawProfileHeader(model);
            var user = model.getCurrentUser();
            this.drawDashboard(user.model.getProjects(), model);
        }
    };
    ManagerView.prototype.drawLoginPage = function (model) {
        var _this = this;
        var loginContainer = document.createElement('div');
        loginContainer.className = 'loginContainer';
        var logo = document.createElement('img');
        logo.className = 'imgStartPage';
        loginContainer.appendChild(logo);
        var lblTitle = document.createElement('label');
        lblTitle.innerHTML = 'Project manager';
        lblTitle.className = 'title';
        loginContainer.appendChild(lblTitle);
        var btnContainer = document.createElement('div');
        btnContainer.className = 'btnContainer';
        var btnSignUp = document.createElement('button');
        btnSignUp.id = 'btnSignUp';
        btnSignUp.className = 'btn btn-success';
        btnSignUp.innerHTML = 'Sign up';
        btnSignUp.onclick = function () {
            btnContainer.classList.toggle('hide');
            signUpForm.classList.toggle('hide');
            // focus on nickname input field after animation
            setTimeout(function () {
                document.getElementById('inputSignUpNickname').focus();
            }, 1000);
        };
        btnContainer.appendChild(btnSignUp);
        var btnLogin = document.createElement('button');
        btnLogin.id = 'btnLogin';
        btnLogin.className = 'btn btn-light';
        btnLogin.innerHTML = 'Log in';
        btnLogin.onclick = function () {
            btnContainer.classList.toggle('hide');
            loginForm.classList.toggle('hide');
            // focus on nickname input field after animation
            setTimeout(function () {
                document.getElementById('inputLoginNickname').focus();
            }, 1000);
        };
        btnContainer.appendChild(btnLogin);
        loginContainer.appendChild(btnContainer);
        // draw login and sing up forms
        var loginForm = this.drawForm(loginContainer, btnContainer, {
            formType: 'Login',
            lblText: 'Log in to Project Manager',
            btnText: 'Log in',
            callbackFunction: function () {
                // loading animation
                var animation = document.createElement('div');
                animation.className =
                    'spinner-border spinner-border-sm text-light';
                document.getElementById('btnLoginNow').innerHTML =
                    animation.outerHTML;
                // login
                _this.tryLogin(model, loginForm);
            },
        });
        var signUpForm = this.drawForm(loginContainer, btnContainer, {
            formType: 'SignUp',
            lblText: 'Sign up to Project Manager',
            btnText: 'Sign up',
            callbackFunction: function () {
                // loading animation
                var animation = document.createElement('div');
                animation.className =
                    'spinner-border spinner-border-sm text-light';
                document.getElementById('btnSignUpNow').innerHTML =
                    animation.outerHTML;
                // login
                _this.trySignUp(model, signUpForm);
            },
        });
        this.container.appendChild(loginContainer);
    };
    ManagerView.prototype.drawForm = function (parent, btnContainer, data) {
        var loginForm = document.createElement('div');
        loginForm.className = 'loginForm hide';
        var lblLogin = document.createElement('label');
        lblLogin.innerHTML = data.lblText;
        lblLogin.id = 'lblLogin';
        loginForm.appendChild(lblLogin);
        var inputNickname = document.createElement('input');
        inputNickname.id = "input" + data.formType + "Nickname";
        inputNickname.type = 'text';
        inputNickname.className = 'form-control';
        inputNickname.placeholder = 'Nickname';
        loginForm.appendChild(inputNickname);
        var inputPassword = document.createElement('input');
        inputPassword.id = "input" + data.formType + "Password";
        inputPassword.type = 'password';
        inputPassword.className = 'form-control';
        inputPassword.placeholder = 'Password';
        inputPassword.addEventListener('keyup', function (e) {
            if (e.key === 'Enter') {
                data.callbackFunction();
                console.log('refreshed');
            }
        });
        loginForm.appendChild(inputPassword);
        var btnLogin = document.createElement('button');
        btnLogin.id = "btn" + data.formType + "Now";
        btnLogin.className = 'btn btn-success';
        btnLogin.innerHTML = data.btnText;
        btnLogin.onclick = function (e) {
            data.callbackFunction();
            console.log('refreshed');
        };
        loginForm.appendChild(btnLogin);
        var btnGoBack = document.createElement('button');
        btnGoBack.className = 'btn btn-link';
        btnGoBack.innerHTML = 'Back';
        btnGoBack.onclick = function () {
            loginForm.classList.toggle('hide');
            btnContainer.classList.toggle('hide');
        };
        loginForm.appendChild(btnGoBack);
        parent.appendChild(loginForm);
        return loginForm;
    };
    ManagerView.prototype.tryLogin = function (model, loginForm) {
        return __awaiter(this, void 0, void 0, function () {
            var nn, pswd, errorMsg, loginMsg, user, lblError, loginBtn;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        nn = document.getElementById('inputLoginNickname').value;
                        pswd = document.getElementById('inputLoginPassword').value;
                        errorMsg = 'Login failed: ';
                        loginMsg = '';
                        if (!model.validateInputData(nn, pswd)) return [3 /*break*/, 2];
                        return [4 /*yield*/, model.tryLoginUser(nn, pswd)];
                    case 1:
                        loginMsg = _a.sent();
                        if (loginMsg === 'success') {
                            // remove login page
                            document.getElementsByClassName('imgStartPage')[0].remove();
                            document.getElementsByClassName('loginContainer')[0].remove();
                            // draw dashboard
                            this.drawProfileHeader(model);
                            user = model.getCurrentUser();
                            this.drawDashboard(user.model.getProjects(), model);
                            // display success message
                            (0,_utils_toast__WEBPACK_IMPORTED_MODULE_4__.displayPopup)({
                                color: 'green',
                                title: 'Login successful',
                                message: 'Welcome back to the Project Manager!',
                            });
                        }
                        else
                            errorMsg += loginMsg;
                        return [3 /*break*/, 3];
                    case 2:
                        errorMsg += 'Invalid input.';
                        _a.label = 3;
                    case 3:
                        if (loginMsg !== 'success') {
                            lblError = document.getElementById('lblError');
                            if (lblError === null)
                                lblError = document.createElement('label');
                            lblError.id = 'lblError';
                            lblError.innerHTML = errorMsg;
                            loginForm.appendChild(lblError);
                        }
                        loginBtn = document.getElementById('btnLoginNow');
                        if (loginBtn != null)
                            loginBtn.innerHTML = 'Log in';
                        return [2 /*return*/];
                }
            });
        });
    };
    ManagerView.prototype.trySignUp = function (model, loginForm) {
        return __awaiter(this, void 0, void 0, function () {
            var nn, pswd, errorMsg, signupMsg, user, lblError, signupBtn;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        nn = document.getElementById('inputSignUpNickname').value;
                        pswd = document.getElementById('inputSignUpPassword').value;
                        errorMsg = 'Sign up failed: ';
                        signupMsg = '';
                        if (!model.validateInputData(nn, pswd)) return [3 /*break*/, 2];
                        return [4 /*yield*/, model.trySignUpUser(nn, pswd)];
                    case 1:
                        signupMsg = _a.sent();
                        if (signupMsg === 'success') {
                            // remove login page
                            document.getElementsByClassName('imgStartPage')[0].remove();
                            document.getElementsByClassName('loginContainer')[0].remove();
                            // draw dashboard
                            this.drawProfileHeader(model);
                            user = model.getCurrentUser();
                            this.drawDashboard(user.model.getProjects(), model);
                            // display success message
                            (0,_utils_toast__WEBPACK_IMPORTED_MODULE_4__.displayPopup)({
                                color: 'green',
                                title: 'Sign up successful',
                                message: 'Welcome to the Project Manager!',
                            });
                        }
                        else
                            errorMsg += signupMsg;
                        return [3 /*break*/, 3];
                    case 2:
                        errorMsg += 'Invalid input.';
                        _a.label = 3;
                    case 3:
                        if (signupMsg !== 'success') {
                            lblError = document.getElementById('lblError');
                            if (lblError === null)
                                lblError = document.createElement('label');
                            lblError.id = 'lblError';
                            lblError.innerHTML = errorMsg;
                            loginForm.appendChild(lblError);
                        }
                        signupBtn = document.getElementById('btnSignUpNow');
                        if (signupBtn != null)
                            signupBtn.innerHTML = 'Sign up';
                        return [2 /*return*/];
                }
            });
        });
    };
    ManagerView.prototype.drawProfileHeader = function (model) {
        var _this = this;
        var header = document.createElement('div');
        header.className = 'profileHeader';
        this.container.appendChild(header);
        // Project Manager label (top left)
        var title = document.createElement('label');
        title.className = 'headerTitle';
        title.innerHTML = 'Project Manager';
        header.appendChild(title);
        var menu = document.createElement('div');
        menu.className = 'headerMenu';
        header.appendChild(menu);
        // Add project button
        var btnAddProject = document.createElement('button');
        btnAddProject.className = 'btn btn-success menuButton';
        btnAddProject.id = 'btnAddProject';
        btnAddProject.onclick = function () {
            // clear dashboard
            var dashboard = (document.getElementsByClassName('dashboard')[0]);
            if (dashboard) {
                while (dashboard.children[0])
                    dashboard.children[0].remove();
            }
            else {
                dashboard = document.createElement('div');
            }
            dashboard.className = 'dashboard';
            // draw project editor
            var newProj = new _project_view__WEBPACK_IMPORTED_MODULE_1__.ProjectView();
            var user = model.getCurrentUser();
            newProj.drawEditor(dashboard, null, function () { return _this.drawDashboard(user.model.getProjects(), model); }, model);
        };
        var plusIcon = document.createElement('i');
        plusIcon.className = 'fas fa-plus';
        btnAddProject.appendChild(plusIcon);
        menu.appendChild(btnAddProject);
        // Dropdown buttons
        this.drawActionDropdown(menu, model);
        this.drawSortingDropdown(menu, model);
        this.drawFilterDropdown(menu, model);
        this.drawProfileDropdown(menu, model);
    };
    ManagerView.prototype.drawDashboard = function (projects, model) {
        var _this = this;
        if (projects.length === 0) {
            this.drawEmptyDashboard(model);
            return;
        }
        var dashboard = (document.getElementsByClassName('dashboard')[0]);
        if (!dashboard)
            dashboard = document.createElement('div');
        dashboard.className = 'dashboard';
        projects.forEach(function (proj) {
            var user = model.getCurrentUser().model;
            proj.drawPreview(dashboard, function () {
                var projs = user.getProjects();
                _this.drawDashboard(projs, model);
            }, model);
        });
        this.container.appendChild(dashboard);
    };
    ManagerView.prototype.drawEmptyDashboard = function (model) {
        var _this = this;
        if (document.getElementsByClassName('emptyDashboardMessage')[0])
            return;
        var container = document.createElement('div');
        container.className = 'emptyDashboardMessage';
        var imgEmpty = document.createElement('img');
        imgEmpty.className = 'imgEmptyDashboard';
        container.appendChild(imgEmpty);
        var lblMessage = document.createElement('label');
        lblMessage.className = 'lblEmptyDashboard';
        lblMessage.innerHTML = 'Your dashboard is empty...';
        container.appendChild(lblMessage);
        var btnAdd = document.createElement('button');
        btnAdd.id = 'btnAddProjectEmpty';
        btnAdd.className = 'btn btn-success';
        btnAdd.onclick = function () {
            // clear dashboard
            var dashboard = (document.getElementsByClassName('dashboard')[0]);
            if (dashboard) {
                while (dashboard.children[0])
                    dashboard.children[0].remove();
            }
            else {
                dashboard = document.createElement('div');
            }
            dashboard.className = 'dashboard';
            // clear empty dashboard message
            container.remove();
            var newProj = new _project_view__WEBPACK_IMPORTED_MODULE_1__.ProjectView();
            var user = model.getCurrentUser();
            newProj.drawEditor(dashboard, null, function () { return _this.drawDashboard(user.model.getProjects(), model); }, model);
        };
        btnAdd.innerHTML =
            '<i class="fas fa-plus" id="iconPlus"></i>Add project';
        container.appendChild(btnAdd);
        this.container.appendChild(container);
    };
    ManagerView.prototype.drawProfileDropdown = function (parent, model) {
        // User dropdown menu
        var dropdownItems = [];
        // User nickname
        var user = model.getCurrentUser();
        var nicknameItem = document.createElement('button');
        nicknameItem.disabled = true;
        nicknameItem.className = 'dropdown-item';
        nicknameItem.innerHTML = "#" + user.model.getId() + " | " + user.model.nickname;
        dropdownItems.push(nicknameItem);
        // Logout button
        var btnLogout = document.createElement('a');
        btnLogout.className = 'dropdown-item';
        btnLogout.innerHTML = 'Log out';
        btnLogout.onclick = function () { return model.logoutUser(); };
        dropdownItems.push(btnLogout);
        var dropdown = (0,_utils_dropdown__WEBPACK_IMPORTED_MODULE_5__.drawDropdownButton)(parent, 'btnProfileDropdown', dropdownItems);
        var btnProfile = document.createElement('button');
        dropdown.appendChild(btnProfile);
        btnProfile.className = 'btn btn-light dropdown-toggle menuButton';
        btnProfile.id = 'btnProfileDropdown';
        btnProfile.setAttribute('data-toggle', 'dropdown');
        btnProfile.innerHTML = '<i class="fas fa-user iconColor"></i>';
    };
    ManagerView.prototype.drawSortingDropdown = function (parent, model) {
        var _this = this;
        // Sorting dropdown
        var dropdownItems = [];
        // Sort by date added
        var btnSortDateAdded = document.createElement('a');
        btnSortDateAdded.className = 'dropdown-item';
        btnSortDateAdded.innerHTML = 'Date added ✓';
        btnSortDateAdded.onclick = function () {
            return _this.changeSortingMethod('getTimestamp', btnSortDateAdded, dropdownItems, model, true);
        };
        dropdownItems.push(btnSortDateAdded);
        // Sort by urgency
        var btnSortUrgency = document.createElement('a');
        btnSortUrgency.className = 'dropdown-item';
        btnSortUrgency.innerHTML = 'Urgency';
        btnSortUrgency.onclick = function () {
            return _this.changeSortingMethod('getDueDate', btnSortUrgency, dropdownItems, model);
        };
        dropdownItems.push(btnSortUrgency);
        // Sort by number of tasks
        var btnSortTasks = document.createElement('a');
        btnSortTasks.className = 'dropdown-item';
        btnSortTasks.innerHTML = 'Number of tasks';
        btnSortTasks.onclick = function () {
            return _this.changeSortingMethod('getNumOfTasks', btnSortTasks, dropdownItems, model, true);
        };
        dropdownItems.push(btnSortTasks);
        var dropdown = (0,_utils_dropdown__WEBPACK_IMPORTED_MODULE_5__.drawDropdownButton)(parent, 'btnSortDropdown', dropdownItems);
        var btnSortBy = document.createElement('button');
        dropdown.appendChild(btnSortBy);
        btnSortBy.className = 'btn btn-light dropdown-toggle menuButton';
        btnSortBy.id = 'btnSortDropdown';
        btnSortBy.setAttribute('data-toggle', 'dropdown');
        btnSortBy.innerHTML = 'Sort by';
    };
    ManagerView.prototype.drawActionDropdown = function (parent, model) {
        var _this = this;
        // Action dropdown
        var dropdownItems = [];
        // Mark all as finished
        var btnMarkAll = document.createElement('a');
        btnMarkAll.className = 'dropdown-item';
        btnMarkAll.innerHTML = 'Mark all as finished';
        btnMarkAll.onclick = function () {
            // display confirmation message
            (0,_utils_modal__WEBPACK_IMPORTED_MODULE_6__.displayModal)({
                color: 'red',
                title: 'Confirmation',
                message: 'Are you sure you want to mark all projects as finished?',
                buttons: [
                    {
                        text: 'Yes',
                        type: 'primary',
                        callback: function () {
                            // Perform action
                            var user = model.getCurrentUser();
                            user.model.markAllAsFinished();
                            var projects = user.model.getProjects();
                            _utils_databaseAPI__WEBPACK_IMPORTED_MODULE_0__.DatabaseAPI.updateProjects(projects).then(function () {
                                // redraw projects
                                _this.redrawDashboard(projects, model);
                                // notify user
                                (0,_utils_toast__WEBPACK_IMPORTED_MODULE_4__.displayPopup)({
                                    color: 'green',
                                    title: 'Successful action',
                                    message: 'Successfully marked all projects as finished.',
                                });
                            });
                        },
                    },
                    {
                        text: 'No',
                        type: 'secondary',
                        callback: function () { },
                    },
                ],
            });
        };
        dropdownItems.push(btnMarkAll);
        // Delete all
        var btnDeleteAll = document.createElement('a');
        btnDeleteAll.className = 'dropdown-item';
        btnDeleteAll.innerHTML = 'Delete all projects';
        btnDeleteAll.onclick = function () {
            // display confirmation message
            (0,_utils_modal__WEBPACK_IMPORTED_MODULE_6__.displayModal)({
                color: 'red',
                title: 'Confirmation',
                message: 'Are you sure you want to delete all projects?',
                buttons: [
                    {
                        text: 'Yes',
                        type: 'danger',
                        callback: function () {
                            // Perform action
                            var user = model.getCurrentUser();
                            _utils_databaseAPI__WEBPACK_IMPORTED_MODULE_0__.DatabaseAPI.deleteProjects(user.model.getProjects()).then(function () {
                                user.model.setProjects([]);
                                // update ui
                                _this.redrawDashboard([], model);
                                // notify user
                                (0,_utils_toast__WEBPACK_IMPORTED_MODULE_4__.displayPopup)({
                                    color: 'green',
                                    title: 'Successful action',
                                    message: 'Successfully deleted all projects.',
                                });
                            });
                        },
                    },
                    {
                        text: 'No',
                        type: 'secondary',
                        callback: function () { },
                    },
                ],
            });
        };
        dropdownItems.push(btnDeleteAll);
        // Action button
        var dropdown = (0,_utils_dropdown__WEBPACK_IMPORTED_MODULE_5__.drawDropdownButton)(parent, 'btnAction', dropdownItems);
        var btnAction = document.createElement('button');
        dropdown.appendChild(btnAction);
        btnAction.className = 'btn btn-light dropdown-toggle menuButton';
        btnAction.id = 'btnAction';
        btnAction.setAttribute('data-toggle', 'dropdown');
        btnAction.innerHTML = 'Action';
    };
    ManagerView.prototype.drawFilterDropdown = function (parent, model) {
        // Filter dropdown
        var dropdownItems = [];
        var user = model.getCurrentUser();
        var projects = user.model.getProjects();
        // Filter ALL projects
        var btnFilterAll = this.createFilterDropdownItem('All ✓', model, dropdownItems);
        dropdownItems.push(btnFilterAll);
        // Filter TO DO projects
        var btnFilterToDo = this.createFilterDropdownItem('To do', model, dropdownItems, _utils_taskState__WEBPACK_IMPORTED_MODULE_2__.TaskState.TO_DO);
        dropdownItems.push(btnFilterToDo);
        // Filter IN PROGRESS projects
        var btnInProgress = this.createFilterDropdownItem('In progress', model, dropdownItems, _utils_taskState__WEBPACK_IMPORTED_MODULE_2__.TaskState.IN_PROGRESS);
        dropdownItems.push(btnInProgress);
        // Filter FINISHED projects
        var btnFinished = this.createFilterDropdownItem('Finished', model, dropdownItems, _utils_taskState__WEBPACK_IMPORTED_MODULE_2__.TaskState.FINISHED);
        dropdownItems.push(btnFinished);
        // Filter button
        var dropdown = (0,_utils_dropdown__WEBPACK_IMPORTED_MODULE_5__.drawDropdownButton)(parent, 'btnFilterDropdown', dropdownItems);
        var btnFilter = document.createElement('button');
        dropdown.appendChild(btnFilter);
        btnFilter.className = 'btn btn-light dropdown-toggle menuButton';
        btnFilter.id = 'btnFilterDropdown';
        btnFilter.setAttribute('data-toggle', 'dropdown');
        btnFilter.innerHTML = 'Filter';
    };
    ManagerView.prototype.createFilterDropdownItem = function (btnText, model, dropdownItems, state) {
        var _this = this;
        if (state === void 0) { state = null; }
        var btn = document.createElement('a');
        btn.className = 'dropdown-item';
        btn.innerHTML = btnText;
        btn.onclick = function () {
            var user = model.getCurrentUser().model;
            if (state) {
                _this.redrawDashboard(user
                    .getProjects()
                    .filter(function (p) { return p.model.getProjectState() === state; }), model);
            }
            else
                _this.redrawDashboard(user.getProjects(), model);
            _this.changeFilteringCheckmark(dropdownItems, btn);
        };
        return btn;
    };
    ManagerView.prototype.changeFilteringCheckmark = function (dropdownItems, selectedItem) {
        // make this sorting method active
        dropdownItems.map(function (el) { return (el.innerHTML = el.innerHTML.replace(' ✓', '')); });
        selectedItem.innerHTML += ' ✓';
    };
    ManagerView.prototype.changeSortingMethod = function (method, sortingButtonEl, dropdownArray, model, reverseOperators) {
        if (reverseOperators === void 0) { reverseOperators = false; }
        // make this sorting method active
        dropdownArray.map(function (el) { return (el.innerHTML = el.innerHTML.replace(' ✓', '')); });
        sortingButtonEl.innerHTML += ' ✓';
        // apply sorting method
        var user = model.getCurrentUser();
        user.model.sortProjects(method, reverseOperators);
        // redraw dashboard
        this.redrawDashboard(user.model.getProjects(), model);
        // reset filtering method
        var filterDropdownItems = document.getElementById('btnFilterDropdown').parentElement
            .children[0].children;
        var items = Array.from(filterDropdownItems);
        this.changeFilteringCheckmark(items, items[0]);
    };
    ManagerView.prototype.redrawDashboard = function (projects, model) {
        // clear empty dashboard message (if exists)
        var empty = document.getElementsByClassName('emptyDashboardMessage')[0];
        if (empty)
            empty.remove();
        // clear previous dashboard
        var dashboard = document.getElementsByClassName('dashboard')[0];
        (0,_utils_removeElementsChildren__WEBPACK_IMPORTED_MODULE_3__.removeElementsChildren)(dashboard);
        // redraw
        this.drawDashboard(projects, model);
    };
    return ManagerView;
}());



/***/ }),

/***/ "./src/ts/project/controller.ts":
/*!**************************************!*\
  !*** ./src/ts/project/controller.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/ts/project/model.ts");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/ts/project/view.ts");


var Project = /** @class */ (function () {
    function Project(id, name, dueDate, timestamp) {
        this.model = new _model__WEBPACK_IMPORTED_MODULE_0__.ProjectModel(id, name, dueDate, timestamp);
        this.view = new _view__WEBPACK_IMPORTED_MODULE_1__.ProjectView();
    }
    Project.prototype.drawPreview = function (parent, goBackFunctionCallback, managerModel) {
        this.view.drawPreview(parent, this.model, goBackFunctionCallback, managerModel);
    };
    return Project;
}());



/***/ }),

/***/ "./src/ts/project/model.ts":
/*!*********************************!*\
  !*** ./src/ts/project/model.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectModel": () => (/* binding */ ProjectModel)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/formatDistance/index.js");
/* harmony import */ var _utils_taskState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/taskState */ "./src/ts/utils/taskState.ts");


var ProjectModel = /** @class */ (function () {
    function ProjectModel(id, name, dueDate, timestamp) {
        this.id = id;
        this.name = name;
        this.tasks = [];
        this.dueDate = dueDate;
        this.timestamp = timestamp;
    }
    ProjectModel.prototype.getId = function () {
        return this.id;
    };
    ProjectModel.prototype.getTasks = function () {
        return this.tasks;
    };
    ProjectModel.prototype.getNumOfTasks = function () {
        return this.tasks.length;
    };
    ProjectModel.prototype.setTasks = function (t) {
        if (t === null)
            return;
        this.tasks = t;
    };
    ProjectModel.prototype.getDueDate = function () {
        return new Date(this.dueDate);
    };
    ProjectModel.prototype.setDueDate = function (d) {
        this.dueDate = d;
    };
    ProjectModel.prototype.getDueDateFormatted = function () {
        return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__.default)(this.getDueDate(), 'yyyy-MM-dd');
    };
    ProjectModel.prototype.getTimestamp = function () {
        return new Date(this.timestamp);
    };
    ProjectModel.prototype.addTask = function (t) {
        this.tasks.push(t);
    };
    ProjectModel.prototype.removeTask = function (id) {
        this.tasks = this.tasks.filter(function (t) { return t.model.getId() !== id; });
    };
    ProjectModel.prototype.markAsFinished = function () {
        this.tasks.map(function (task) {
            task.model.setState(_utils_taskState__WEBPACK_IMPORTED_MODULE_0__.TaskState.FINISHED);
        });
    };
    ProjectModel.prototype.getPercentageDone = function () {
        if (this.tasks.length === 0)
            return 0;
        var numOfTasks = this.tasks.length;
        var numOfFinishedTasks = this.getNumOfTasksInState(_utils_taskState__WEBPACK_IMPORTED_MODULE_0__.TaskState.FINISHED);
        var numOfInProgressTasks = this.getNumOfTasksInState(_utils_taskState__WEBPACK_IMPORTED_MODULE_0__.TaskState.IN_PROGRESS);
        return Math.round(((numOfFinishedTasks + numOfInProgressTasks / 2) / numOfTasks) * 100);
    };
    ProjectModel.prototype.getNumOfTasksInState = function (state) {
        return this.tasks.reduce(function (acc, curr) {
            if (curr.model.getState() === state)
                acc += 1;
            return acc;
        }, 0);
    };
    ProjectModel.prototype.getTimeRemaining = function (addSuffix, refTime) {
        if (addSuffix === void 0) { addSuffix = false; }
        if (refTime === void 0) { refTime = null; }
        var refferenceTime = refTime ? refTime : this.getDueDate();
        if (refferenceTime < new Date())
            return (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.default)(refferenceTime, new Date(), {
                addSuffix: addSuffix,
            });
        else
            return (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.default)(refferenceTime, new Date()) + ' left';
    };
    ProjectModel.prototype.getProjectState = function () {
        var numOfTasks = this.getNumOfTasks();
        if (numOfTasks === 0)
            return _utils_taskState__WEBPACK_IMPORTED_MODULE_0__.TaskState.TO_DO;
        var result = _utils_taskState__WEBPACK_IMPORTED_MODULE_0__.TaskState.TO_DO;
        for (var i = 0; i < numOfTasks; i++) {
            var currentTaskState = this.tasks[i].model.getState();
            if (currentTaskState === _utils_taskState__WEBPACK_IMPORTED_MODULE_0__.TaskState.IN_PROGRESS ||
                (result === _utils_taskState__WEBPACK_IMPORTED_MODULE_0__.TaskState.FINISHED &&
                    currentTaskState === _utils_taskState__WEBPACK_IMPORTED_MODULE_0__.TaskState.TO_DO)) {
                result = _utils_taskState__WEBPACK_IMPORTED_MODULE_0__.TaskState.IN_PROGRESS;
                break;
            }
            if (currentTaskState === _utils_taskState__WEBPACK_IMPORTED_MODULE_0__.TaskState.FINISHED) {
                result = _utils_taskState__WEBPACK_IMPORTED_MODULE_0__.TaskState.FINISHED;
            }
        }
        return result;
        // const numOfToDoTasks = this.getNumOfTasksInState(TaskState.TO_DO);
        // const numOfInProgressTasks = this.getNumOfTasksInState(TaskState.IN_PROGRESS);
        // const numOfFinishedTasks = this.getNumOfTasksInState(TaskState.FINISHED);
        // if (numOfToDoTasks === numOfTasks) return TaskState.TO_DO;
        // if (numOfInProgressTasks > 0) return TaskState.IN_PROGRESS;
        // if (numOfFinishedTasks === numOfTasks) return TaskState.FINISHED;
        // return TaskState.IN_PROGRESS;
    };
    ProjectModel.prototype.getTasksInState = function (state) {
        return this.tasks.filter(function (t) { return t.model.getState() === state; });
    };
    ProjectModel.prototype.validateProjectInput = function (projectName) {
        if (projectName === '')
            return false;
        return true;
    };
    return ProjectModel;
}());



/***/ }),

/***/ "./src/ts/project/view.ts":
/*!********************************!*\
  !*** ./src/ts/project/view.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectView": () => (/* binding */ ProjectView)
/* harmony export */ });
/* harmony import */ var _utils_databaseAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/databaseAPI */ "./src/ts/utils/databaseAPI.ts");
/* harmony import */ var _task_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../task/controller */ "./src/ts/task/controller.ts");
/* harmony import */ var _utils_taskState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/taskState */ "./src/ts/utils/taskState.ts");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controller */ "./src/ts/project/controller.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model */ "./src/ts/project/model.ts");
/* harmony import */ var _utils_removeElementsChildren__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/removeElementsChildren */ "./src/ts/utils/removeElementsChildren.ts");
/* harmony import */ var _utils_shortenString__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/shortenString */ "./src/ts/utils/shortenString.ts");
/* harmony import */ var _utils_toast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/toast */ "./src/ts/utils/toast.ts");
/* harmony import */ var _utils_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/dropdown */ "./src/ts/utils/dropdown.ts");
/* harmony import */ var _utils_modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/modal */ "./src/ts/utils/modal.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










var ProjectView = /** @class */ (function () {
    function ProjectView() {
        this.container = document.createElement('div');
        this.container.className = 'project';
    }
    ProjectView.prototype.drawPreview = function (parent, model, goBackFunctionCallback, managerModel) {
        var _this = this;
        this.parent = parent;
        var card = document.createElement('div');
        card.className = 'card project';
        card.onclick = function () {
            // remove all project previews
            (0,_utils_removeElementsChildren__WEBPACK_IMPORTED_MODULE_5__.removeElementsChildren)(parent);
            // display project editor
            _this.drawEditor(parent, model, goBackFunctionCallback, managerModel);
        };
        parent.appendChild(card);
        var image = document.createElement('img');
        var randImageNumber = Math.ceil(Math.random() * 6);
        image.className = "card-img-top cardImage cardImage" + randImageNumber;
        card.appendChild(image);
        var body = document.createElement('div');
        body.className = 'card-body';
        card.appendChild(body);
        var title = document.createElement('label');
        title.className = 'card-title';
        title.innerHTML = (0,_utils_shortenString__WEBPACK_IMPORTED_MODULE_6__.shortenString)(model.name, 12);
        body.appendChild(title);
        var percentage = model.getPercentageDone();
        var percentageLabel = document.createElement('hlabel1');
        percentageLabel.className = 'lblProjectPercentage';
        percentageLabel.innerHTML = percentage + "%";
        body.appendChild(percentageLabel);
        var timeLeft = model.getTimeRemaining(true);
        var dueOnLabel = document.createElement('label');
        dueOnLabel.className = 'card-text lblTimeLeft';
        dueOnLabel.innerHTML = "\u2022 " + timeLeft + "</br>\n       \u2022 " + model.getNumOfTasksInState(_utils_taskState__WEBPACK_IMPORTED_MODULE_2__.TaskState.FINISHED) + "/" + model.getNumOfTasks() + " tasks finished";
        body.appendChild(dueOnLabel);
        var progress = document.createElement('div');
        progress.className = 'progress';
        body.appendChild(progress);
        var progressBar = document.createElement('div');
        progressBar.className = "progress-bar";
        progress.appendChild(progressBar);
        setTimeout(function () {
            // animate progress bar after rendering
            progressBar.style.width = percentage + "%";
        }, 0);
    };
    ProjectView.prototype.drawEditor = function (parent, model, goBackFunctionCallback, managerModel) {
        this.parent = parent;
        var newProject = false;
        if (!model) {
            var tomorrowsDate = new Date();
            tomorrowsDate.setDate(tomorrowsDate.getDate() + 1);
            model = new _model__WEBPACK_IMPORTED_MODULE_4__.ProjectModel(undefined, '', tomorrowsDate, new Date());
            newProject = true;
        }
        var editor = document.createElement('div');
        editor.className = 'editor';
        parent.appendChild(editor);
        // header
        this.drawEditorHeader(editor, model, goBackFunctionCallback, newProject, managerModel);
        var separator = document.createElement('hr');
        editor.appendChild(separator);
        // task dashboard
        this.drawTaskDashboard(editor, model);
    };
    ProjectView.prototype.drawEditorHeader = function (parent, model, goBackFunctionCallback, newProject, managerModel) {
        var _this = this;
        var header = document.createElement('div');
        header.className = 'editorHeader';
        parent.appendChild(header);
        var image = document.createElement('img');
        var randImageNumber = Math.ceil(Math.random() * 6);
        image.className = "imgProjectHeader cardImage" + randImageNumber;
        header.appendChild(image);
        var projectHeader = document.createElement('div');
        projectHeader.className = 'projectHeader';
        header.appendChild(projectHeader);
        var inputName = document.createElement('input');
        inputName.id = 'inputProjectName';
        inputName.placeholder = 'Project name';
        inputName.type = 'text';
        inputName.maxLength = 30;
        inputName.className = 'form-control inputProjectName';
        inputName.value = model.name;
        projectHeader.appendChild(inputName);
        var btnBack = document.createElement('button');
        btnBack.className = 'btn btn-light';
        btnBack.innerHTML = 'Back';
        btnBack.onclick = function () {
            // remove editor
            parent.remove();
            // draw dashboard
            goBackFunctionCallback();
        };
        projectHeader.appendChild(btnBack);
        var btnSave = document.createElement('button');
        btnSave.className = 'btn btn-success';
        btnSave.innerHTML = 'Save';
        btnSave.onclick = function () { return __awaiter(_this, void 0, void 0, function () {
            var animation;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        animation = document.createElement('div');
                        animation.className = 'spinner-border spinner-border-sm text-light';
                        btnSave.innerHTML = animation.outerHTML;
                        // short data validation
                        if (!model.validateProjectInput(inputName.value)) {
                            (0,_utils_toast__WEBPACK_IMPORTED_MODULE_7__.displayPopup)({
                                color: 'red',
                                title: 'Invalid input',
                                message: "Project name can't remain empty.",
                            });
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.saveDataFromForm(model, newProject, managerModel)];
                    case 1:
                        _a.sent();
                        // remove editor
                        parent.remove();
                        // draw dashboard
                        goBackFunctionCallback();
                        // display message
                        if (newProject) {
                            (0,_utils_toast__WEBPACK_IMPORTED_MODULE_7__.displayPopup)({
                                color: 'green',
                                title: 'New project',
                                message: 'Successfully added a new project.',
                            });
                        }
                        else {
                            (0,_utils_toast__WEBPACK_IMPORTED_MODULE_7__.displayPopup)({
                                color: 'green',
                                title: 'Successful update',
                                message: 'Successfully updated a project.',
                            });
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        projectHeader.appendChild(btnSave);
        this.drawOptionsDropdown(projectHeader, model, goBackFunctionCallback, managerModel);
        var lblProjectDueDate = document.createElement('label');
        lblProjectDueDate.className = 'lblProjectDueDate';
        lblProjectDueDate.innerHTML = '• Due date:';
        projectHeader.appendChild(lblProjectDueDate);
        var inputProjectDueDate = document.createElement('input');
        inputProjectDueDate.id = 'inputProjectDueDate';
        inputProjectDueDate.className = 'form-control';
        inputProjectDueDate.type = 'date';
        inputProjectDueDate.value = model.getDueDateFormatted();
        inputProjectDueDate.onchange = function () {
            // update TimeLeft label
            _this.evaluateTimeLeft(lblTimeLeft, model, new Date(inputProjectDueDate.value));
        };
        projectHeader.appendChild(inputProjectDueDate);
        var lblTimeLeft = document.createElement('label');
        lblTimeLeft.className = 'lblTimeLeftEditor';
        this.evaluateTimeLeft(lblTimeLeft, model, new Date(inputProjectDueDate.value));
        projectHeader.appendChild(lblTimeLeft);
        var lblTasksDone = document.createElement('label');
        lblTasksDone.className = 'lblTasksDone';
        projectHeader.appendChild(lblTasksDone);
        var lblPercentage = document.createElement('label');
        lblPercentage.id = 'lblPercentage';
        projectHeader.appendChild(lblPercentage);
        var progress = document.createElement('div');
        progress.className = 'progress progressEditor';
        projectHeader.appendChild(progress);
        var progressBar = document.createElement('div');
        progressBar.className = "progress-bar";
        progress.appendChild(progressBar);
        setTimeout(function () {
            // animate progress bar after rendering
            ProjectView.evaluateTasksFinished(lblTasksDone, lblPercentage, progressBar, model);
        }, 0);
    };
    ProjectView.prototype.drawTaskDashboard = function (parent, model) {
        var tasksToDo = model.getTasksInState(_utils_taskState__WEBPACK_IMPORTED_MODULE_2__.TaskState.TO_DO);
        var tasksInProgress = model.getTasksInState(_utils_taskState__WEBPACK_IMPORTED_MODULE_2__.TaskState.IN_PROGRESS);
        var tasksFinished = model.getTasksInState(_utils_taskState__WEBPACK_IMPORTED_MODULE_2__.TaskState.FINISHED);
        var dashboard = document.createElement('div');
        dashboard.className = 'taskDashboard';
        parent.appendChild(dashboard);
        var sectionToDo, sectionInProgress, sectionFinished;
        sectionToDo = this.createSection(model, 'To do', tasksToDo);
        dashboard.appendChild(sectionToDo);
        dashboard.appendChild(this.createSeparator());
        sectionInProgress = this.createSection(model, 'In progress', tasksInProgress);
        dashboard.appendChild(sectionInProgress);
        dashboard.appendChild(this.createSeparator());
        sectionFinished = this.createSection(model, 'Finished', tasksFinished);
        dashboard.appendChild(sectionFinished);
    };
    ProjectView.prototype.drawOptionsDropdown = function (parent, model, goBackFunctionCallback, managerModel) {
        var _this = this;
        var dropdownItems = [];
        // Mark project as finished
        var btnMark = document.createElement('a');
        btnMark.className = 'dropdown-item';
        btnMark.innerHTML = 'Mark as finished';
        btnMark.onclick = function () {
            (0,_utils_modal__WEBPACK_IMPORTED_MODULE_9__.displayModal)({
                title: 'Confirmation',
                message: 'Are you sure you want to mark this project as finished?',
                buttons: [
                    {
                        text: 'Yes',
                        type: 'primary',
                        callback: function () { return __awaiter(_this, void 0, void 0, function () {
                            var dashboard;
                            return __generator(this, function (_a) {
                                // update project in model
                                model.markAsFinished();
                                dashboard = (document.getElementsByClassName('dashboard')[0]);
                                (0,_utils_removeElementsChildren__WEBPACK_IMPORTED_MODULE_5__.removeElementsChildren)(dashboard);
                                this.drawEditor(dashboard, model, goBackFunctionCallback, managerModel);
                                // notify user
                                (0,_utils_toast__WEBPACK_IMPORTED_MODULE_7__.displayPopup)({
                                    color: 'green',
                                    title: 'Successful action',
                                    message: 'Successfully marked project as finished.',
                                });
                                return [2 /*return*/];
                            });
                        }); },
                    },
                    {
                        text: 'No',
                        type: 'secondary',
                        callback: function () { },
                    },
                ],
            });
        };
        dropdownItems.push(btnMark);
        // Delete project
        var btnDelete = document.createElement('a');
        btnDelete.className = 'dropdown-item';
        btnDelete.innerHTML = 'Delete project';
        btnDelete.onclick = function () {
            (0,_utils_modal__WEBPACK_IMPORTED_MODULE_9__.displayModal)({
                title: 'Confirmation',
                message: 'Are you sure you want to delete this project?',
                buttons: [
                    {
                        text: 'Yes',
                        type: 'danger',
                        callback: function () { return __awaiter(_this, void 0, void 0, function () {
                            var dashboard;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        // delete project in model
                                        managerModel.deleteProject(model.getId());
                                        // delete project in database
                                        return [4 /*yield*/, _utils_databaseAPI__WEBPACK_IMPORTED_MODULE_0__.DatabaseAPI.deleteProjects([
                                                new _controller__WEBPACK_IMPORTED_MODULE_3__.Project(model.getId(), model.name, model.getDueDate(), model.getTimestamp()),
                                            ])];
                                    case 1:
                                        // delete project in database
                                        _a.sent();
                                        dashboard = (document.getElementsByClassName('dashboard')[0]);
                                        (0,_utils_removeElementsChildren__WEBPACK_IMPORTED_MODULE_5__.removeElementsChildren)(dashboard);
                                        goBackFunctionCallback();
                                        // notify user
                                        (0,_utils_toast__WEBPACK_IMPORTED_MODULE_7__.displayPopup)({
                                            color: 'green',
                                            title: 'Successful action',
                                            message: 'Successfully deleted project.',
                                        });
                                        return [2 /*return*/];
                                }
                            });
                        }); },
                    },
                    {
                        text: 'No',
                        type: 'secondary',
                        callback: function () { },
                    },
                ],
            });
        };
        dropdownItems.push(btnDelete);
        var dropdown = (0,_utils_dropdown__WEBPACK_IMPORTED_MODULE_8__.drawDropdownButton)(parent, 'btnOptions', dropdownItems);
        var dropdownButton = document.createElement('button');
        dropdown.appendChild(dropdownButton);
        dropdownButton.className = 'btn btn-light';
        dropdownButton.id = 'btnOptions';
        dropdownButton.setAttribute('data-toggle', 'dropdown');
        dropdownButton.innerHTML = '⋮';
    };
    ProjectView.prototype.createSection = function (model, sectionName, tasks) {
        var section = document.createElement('div');
        section.className = 'taskDashboardSection';
        var lblSection = document.createElement('p');
        lblSection.className = 'lblSection';
        lblSection.innerHTML = sectionName;
        section.appendChild(lblSection);
        tasks.forEach(function (t) {
            return t.view.drawPreview(section, t.model, model, sectionName, null);
        });
        var btnAddTask = document.createElement('div');
        btnAddTask.className = 'btnAddTask';
        btnAddTask.onmouseenter = function () {
            lblAddTask.classList.toggle('hide');
        };
        btnAddTask.onmouseleave = btnAddTask.onmouseenter;
        btnAddTask.onclick = function () {
            // create new task
            var state = sectionName === 'To do'
                ? _utils_taskState__WEBPACK_IMPORTED_MODULE_2__.TaskState.TO_DO
                : sectionName === 'In progress'
                    ? _utils_taskState__WEBPACK_IMPORTED_MODULE_2__.TaskState.IN_PROGRESS
                    : _utils_taskState__WEBPACK_IMPORTED_MODULE_2__.TaskState.FINISHED;
            var newTask = new _task_controller__WEBPACK_IMPORTED_MODULE_1__.Task(undefined, '', state);
            // draw task editor
            newTask.view.drawPreview(section, newTask.model, model, sectionName, null, false, newTask);
            // move add task button to bottom
            section.appendChild(btnAddTask);
        };
        section.appendChild(btnAddTask);
        var iconPlus = document.createElement('i');
        iconPlus.className = 'fas fa-plus iconProjectEditor';
        btnAddTask.appendChild(iconPlus);
        var lblAddTask = document.createElement('p');
        lblAddTask.className = 'lblAddTask hide';
        lblAddTask.innerHTML = 'Add task';
        btnAddTask.appendChild(lblAddTask);
        return section;
    };
    ProjectView.prototype.createSeparator = function () {
        var separator = document.createElement('div');
        separator.className = 'separator';
        return separator;
    };
    ProjectView.prototype.evaluateTimeLeft = function (label, model, selectedDate) {
        label.innerHTML = "\u2022 " + model.getTimeRemaining(true, selectedDate);
    };
    ProjectView.evaluateTasksFinished = function (labelTasks, labelPercentage, progressBar, model) {
        labelTasks.innerHTML = "\u2022 " + model.getNumOfTasksInState(_utils_taskState__WEBPACK_IMPORTED_MODULE_2__.TaskState.FINISHED) + "/" + model.getNumOfTasks() + " tasks finished";
        var percentageDone = model.getPercentageDone();
        labelPercentage.innerHTML = percentageDone + "%";
        progressBar.style.width = percentageDone + "%";
    };
    ProjectView.prototype.saveDataFromForm = function (model, newProject, managerModel) {
        return __awaiter(this, void 0, void 0, function () {
            var name, date, user, projModel, projResponse, taskResponse, newProject_1, newProject_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = (document.getElementById('inputProjectName')).value;
                        date = (document.getElementById('inputProjectDueDate')).value;
                        model.name = name;
                        model.setDueDate(new Date(date));
                        if (!newProject) return [3 /*break*/, 2];
                        user = managerModel.getCurrentUser().model;
                        projModel = new _model__WEBPACK_IMPORTED_MODULE_4__.ProjectModel(undefined, model.name, model.getDueDate(), model.getTimestamp());
                        return [4 /*yield*/, _utils_databaseAPI__WEBPACK_IMPORTED_MODULE_0__.DatabaseAPI.addProject(projModel, user.getId())];
                    case 1:
                        projResponse = _a.sent();
                        taskResponse = _utils_databaseAPI__WEBPACK_IMPORTED_MODULE_0__.DatabaseAPI.addTasks(model.getTasks(), projResponse.id);
                        newProject_1 = new _controller__WEBPACK_IMPORTED_MODULE_3__.Project(projResponse.id, model.name, model.getDueDate(), model.getTimestamp());
                        newProject_1.model.setTasks(model.getTasks());
                        managerModel.addNewProject(newProject_1);
                        return [3 /*break*/, 3];
                    case 2:
                        newProject_2 = new _controller__WEBPACK_IMPORTED_MODULE_3__.Project(model.getId(), model.name, model.getDueDate(), model.getTimestamp());
                        newProject_2.model.setTasks(model.getTasks());
                        _utils_databaseAPI__WEBPACK_IMPORTED_MODULE_0__.DatabaseAPI.updateProjects([newProject_2]);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return ProjectView;
}());



/***/ }),

/***/ "./src/ts/task/controller.ts":
/*!***********************************!*\
  !*** ./src/ts/task/controller.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task)
/* harmony export */ });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/ts/task/model.ts");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/ts/task/view.ts");


var Task = /** @class */ (function () {
    function Task(id, name, state) {
        this.model = new _model__WEBPACK_IMPORTED_MODULE_0__.TaskModel(id, name, state);
        this.view = new _view__WEBPACK_IMPORTED_MODULE_1__.TaskView();
    }
    return Task;
}());



/***/ }),

/***/ "./src/ts/task/model.ts":
/*!******************************!*\
  !*** ./src/ts/task/model.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskModel": () => (/* binding */ TaskModel)
/* harmony export */ });
var TaskModel = /** @class */ (function () {
    function TaskModel(id, name, state) {
        this.id = id;
        this.name = name;
        this.state = state;
    }
    TaskModel.prototype.getId = function () {
        return this.id;
    };
    TaskModel.prototype.getState = function () {
        return this.state;
    };
    TaskModel.prototype.setState = function (t) {
        this.state = t;
    };
    TaskModel.prototype.validateNameInput = function (name) {
        if (name === '')
            return false;
        return true;
    };
    return TaskModel;
}());



/***/ }),

/***/ "./src/ts/task/view.ts":
/*!*****************************!*\
  !*** ./src/ts/task/view.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskView": () => (/* binding */ TaskView)
/* harmony export */ });
/* harmony import */ var _utils_databaseAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/databaseAPI */ "./src/ts/utils/databaseAPI.ts");
/* harmony import */ var _project_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../project/view */ "./src/ts/project/view.ts");
/* harmony import */ var _utils_taskState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/taskState */ "./src/ts/utils/taskState.ts");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controller */ "./src/ts/task/controller.ts");
/* harmony import */ var _utils_toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/toast */ "./src/ts/utils/toast.ts");
/* harmony import */ var _utils_shortenString__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/shortenString */ "./src/ts/utils/shortenString.ts");






var TaskView = /** @class */ (function () {
    function TaskView() {
    }
    TaskView.prototype.drawPreview = function (parent, model, projectModel, section, container, switchingSections, newTask) {
        var _this = this;
        if (switchingSections === void 0) { switchingSections = false; }
        if (newTask === void 0) { newTask = null; }
        var firstTime = container === null;
        if (firstTime) {
            this.container = container;
            container = document.createElement('div');
            if (switchingSections)
                parent.insertBefore(container, parent.children[parent.children.length - 1]);
            else
                parent.appendChild(container);
        }
        else {
            while (container.children[0])
                container.children[0].remove();
        }
        container.className = 'taskPreview';
        container.onmouseenter = function () {
            if (iconGoLeft)
                iconGoLeft.classList.remove('hide');
            if (iconGoRight)
                iconGoRight.classList.remove('hide');
        };
        container.onmouseleave = function () {
            if (iconGoLeft)
                iconGoLeft.classList.add('hide');
            if (iconGoRight)
                iconGoRight.classList.add('hide');
        };
        container.onclick = function () {
            while (container.children[0])
                container.children[0].remove();
            _this.drawEditor(container, model, projectModel, section);
        };
        var iconGoLeft = document.createElement('i');
        if (section !== 'To do') {
            iconGoLeft.className =
                'fas fa-chevron-left fa-sm iconGoLeftRight hide';
            iconGoLeft.onclick = function (e) {
                e.stopPropagation();
                var sectionToDo = (parent.parentElement.children[0]);
                var sectionInProgress = (parent.parentElement.children[2]);
                if (section === 'In progress') {
                    model.setState(_utils_taskState__WEBPACK_IMPORTED_MODULE_2__.TaskState.TO_DO);
                    _this.drawPreview(sectionToDo, model, projectModel, 'To do', null, true);
                }
                else if (section === 'Finished') {
                    model.setState(_utils_taskState__WEBPACK_IMPORTED_MODULE_2__.TaskState.IN_PROGRESS);
                    _this.drawPreview(sectionInProgress, model, projectModel, 'In progress', null, true);
                }
                container.remove();
                _this.reevaluateProgress(projectModel);
            };
        }
        container.appendChild(iconGoLeft);
        var lblTaskName = document.createElement('label');
        lblTaskName.innerHTML = (0,_utils_shortenString__WEBPACK_IMPORTED_MODULE_5__.shortenString)(model.name, 9);
        container.appendChild(lblTaskName);
        var iconGoRight = document.createElement('i');
        if (section !== 'Finished') {
            iconGoRight.className =
                'fas fa-chevron-right fa-sm iconGoLeftRight hide';
            iconGoRight.onclick = function (e) {
                e.stopPropagation();
                var sectionFinished = (parent.parentElement.children[4]);
                var sectionInProgress = (parent.parentElement.children[2]);
                if (section === 'In progress') {
                    model.setState(_utils_taskState__WEBPACK_IMPORTED_MODULE_2__.TaskState.FINISHED);
                    _this.drawPreview(sectionFinished, model, projectModel, 'Finished', null, true);
                }
                else if (section === 'To do') {
                    model.setState(_utils_taskState__WEBPACK_IMPORTED_MODULE_2__.TaskState.IN_PROGRESS);
                    _this.drawPreview(sectionInProgress, model, projectModel, 'In progress', null, true);
                }
                container.remove();
                _this.reevaluateProgress(projectModel);
            };
        }
        container.appendChild(iconGoRight);
        if (newTask) {
            // new task
            while (container.children[0])
                container.children[0].remove();
            this.drawEditor(container, model, projectModel, section, newTask);
        }
    };
    TaskView.prototype.drawEditor = function (container, model, projectModel, section, newTask) {
        var _this = this;
        if (newTask === void 0) { newTask = null; }
        container.classList.toggle('expand');
        container.onclick = null;
        var inputTaskName = document.createElement('input');
        inputTaskName.id = 'inputTaskName';
        inputTaskName.placeholder = 'Task name';
        inputTaskName.className = 'form-control inputTaskName';
        inputTaskName.value = model.name;
        container.appendChild(inputTaskName);
        if (newTask)
            inputTaskName.focus();
        var btnSave = document.createElement('button');
        btnSave.className = 'btn btn-success btnSaveTask';
        btnSave.innerHTML = 'Save';
        btnSave.onclick = function (e) {
            e.stopPropagation();
            // task name validation
            if (!model.validateNameInput(inputTaskName.value)) {
                (0,_utils_toast__WEBPACK_IMPORTED_MODULE_4__.displayPopup)({
                    color: 'red',
                    title: 'Invalid input',
                    message: 'Task name cannot remain empty.',
                });
                return;
            }
            // update task name
            model.name = inputTaskName.value;
            // add new task to project
            if (newTask)
                projectModel.addTask(newTask);
            // clear element
            inputTaskName.remove();
            btnSave.remove();
            _this.drawPreview(container.parentElement, model, projectModel, section, container);
            _this.reevaluateProgress(projectModel);
        };
        container.appendChild(btnSave);
        var btnDelete = document.createElement('button');
        btnDelete.className = 'btn btn-danger btnDeleteTask';
        btnDelete.innerHTML = '<i class="fas fa-trash"></i>';
        btnDelete.onclick = function (e) {
            e.stopPropagation();
            // delete task
            projectModel.removeTask(model.getId());
            if (model.getId() !== undefined) {
                _utils_databaseAPI__WEBPACK_IMPORTED_MODULE_0__.DatabaseAPI.deleteTasks([
                    new _controller__WEBPACK_IMPORTED_MODULE_3__.Task(model.getId(), model.name, model.getState()),
                ]);
            }
            // remove container;
            container.remove();
            _this.reevaluateProgress(projectModel);
        };
        container.appendChild(btnDelete);
    };
    TaskView.prototype.reevaluateProgress = function (projectModel) {
        var lblTasksDone = document.getElementsByClassName('lblTasksDone')[0];
        var lblPercentage = document.getElementById('lblPercentage');
        var progress = (document.getElementsByClassName('progress-bar')[0]);
        _project_view__WEBPACK_IMPORTED_MODULE_1__.ProjectView.evaluateTasksFinished(lblTasksDone, lblPercentage, progress, projectModel);
    };
    return TaskView;
}());



/***/ }),

/***/ "./src/ts/user/controller.ts":
/*!***********************************!*\
  !*** ./src/ts/user/controller.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/ts/user/model.ts");
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view */ "./src/ts/user/view.ts");


var User = /** @class */ (function () {
    function User(id, nickname, password) {
        this.model = new _model__WEBPACK_IMPORTED_MODULE_0__.UserModel(id, nickname, password);
        this.view = new _view__WEBPACK_IMPORTED_MODULE_1__.UserView();
    }
    return User;
}());



/***/ }),

/***/ "./src/ts/user/model.ts":
/*!******************************!*\
  !*** ./src/ts/user/model.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserModel": () => (/* binding */ UserModel)
/* harmony export */ });
var UserModel = /** @class */ (function () {
    function UserModel(id, nickname, password) {
        this.id = id;
        this.nickname = nickname;
        this.password = password;
        this.projects = [];
    }
    UserModel.prototype.getId = function () {
        return this.id;
    };
    UserModel.prototype.getPassword = function () {
        return this.password;
    };
    UserModel.prototype.getProjects = function () {
        return this.projects;
    };
    UserModel.prototype.setProjects = function (p) {
        this.projects = p;
    };
    UserModel.prototype.getNumOfProjects = function () {
        return this.projects.length;
    };
    UserModel.prototype.addProject = function (p) {
        this.projects.push(p);
    };
    UserModel.prototype.removeProject = function (id) {
        this.projects = this.projects.filter(function (p) { return p.model.getId() !== id; });
    };
    UserModel.prototype.sortProjects = function (criteria, reverseOperators) {
        if (reverseOperators === void 0) { reverseOperators = false; }
        this.projects.sort(function (a, b) {
            if (a.model[criteria]() < b.model[criteria]())
                return reverseOperators ? 1 : -1;
            else if (a.model[criteria]() > b.model[criteria]())
                return reverseOperators ? -1 : 1;
            return 0;
        });
    };
    UserModel.prototype.markAllAsFinished = function () {
        this.projects.map(function (proj) {
            proj.model.markAsFinished();
        });
    };
    UserModel.prototype.deleteAllProjects = function () {
        this.projects = [];
    };
    return UserModel;
}());



/***/ }),

/***/ "./src/ts/user/view.ts":
/*!*****************************!*\
  !*** ./src/ts/user/view.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserView": () => (/* binding */ UserView)
/* harmony export */ });
var UserView = /** @class */ (function () {
    function UserView() {
        this.container = document.createElement('div');
    }
    return UserView;
}());



/***/ }),

/***/ "./src/ts/utils/databaseAPI.ts":
/*!*************************************!*\
  !*** ./src/ts/utils/databaseAPI.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatabaseAPI": () => (/* binding */ DatabaseAPI)
/* harmony export */ });
/* harmony import */ var _project_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../project/controller */ "./src/ts/project/controller.ts");
/* harmony import */ var _task_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../task/controller */ "./src/ts/task/controller.ts");
/* harmony import */ var _user_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user/controller */ "./src/ts/user/controller.ts");
/* harmony import */ var _toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toast */ "./src/ts/utils/toast.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var DatabaseAPI = /** @class */ (function () {
    function DatabaseAPI() {
    }
    DatabaseAPI.setRootURL = function (url) {
        DatabaseAPI.rootURL = url;
    };
    //#region CONVERSION methods
    /**
     * @param taskData is an array of Tasks (database objects)
     */
    DatabaseAPI.convertTaskFromDbToMvc = function (taskData) {
        if (taskData.length == 0)
            return [];
        var tasks = [];
        taskData.forEach(function (task) {
            tasks.push(new _task_controller__WEBPACK_IMPORTED_MODULE_1__.Task(task.id, task.name, task.state));
        });
        return tasks;
    };
    /**
     * @param projData is an array of Projects (database objects)
     */
    DatabaseAPI.convertProjectFromDbToMvc = function (projData) {
        return __awaiter(this, void 0, void 0, function () {
            var projects, taskPromises;
            return __generator(this, function (_a) {
                if (projData.length == 0)
                    return [2 /*return*/, []];
                projects = [];
                taskPromises = [];
                projData.forEach(function (p) {
                    taskPromises.push(DatabaseAPI.getTasksByProject(p.id));
                });
                return [2 /*return*/, Promise.all(taskPromises).then(function (tasks) {
                        for (var i = 0; i < projData.length; i++) {
                            var newProject = new _project_controller__WEBPACK_IMPORTED_MODULE_0__.Project(projData[i].id, projData[i].name, projData[i].dueDate, projData[i].timestamp);
                            newProject.model.setTasks(tasks[i]);
                            projects.push(newProject);
                        }
                        return projects;
                    })];
            });
        });
    };
    /**
     * @param userData is an array of Users (database objects)
     */
    DatabaseAPI.convertUserFromDbToMvc = function (userData) {
        return __awaiter(this, void 0, void 0, function () {
            var users, projectPromises;
            return __generator(this, function (_a) {
                if (userData.length == 0)
                    return [2 /*return*/, []];
                users = [];
                projectPromises = [];
                userData.forEach(function (u) {
                    projectPromises.push(DatabaseAPI.getProjectsByUser(u.id));
                });
                return [2 /*return*/, Promise.all(projectPromises).then(function (projects) {
                        for (var i = 0; i < userData.length; i++) {
                            var newUser = new _user_controller__WEBPACK_IMPORTED_MODULE_2__.User(userData[i].id, userData[i].nickname, userData[i].password);
                            newUser.model.setProjects(projects[i]);
                            users.push(newUser);
                        }
                        return users;
                    })];
            });
        });
    };
    //#endregion CONVERSION methods
    //#region USER table methods
    DatabaseAPI.getAllUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, fetch(DatabaseAPI.rootURL + "/users")
                        .then(function (data) { return data.json(); })
                        .then(function (userData) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, DatabaseAPI.convertUserFromDbToMvc(userData)];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); })];
            });
        });
    };
    DatabaseAPI.getUserById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, fetch(DatabaseAPI.rootURL + "/users/" + id)
                        .then(function (data) { return data.json(); })
                        .then(function (userData) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, DatabaseAPI.convertUserFromDbToMvc([userData])];
                            case 1: return [2 /*return*/, (_a.sent()).pop()];
                        }
                    }); }); })];
            });
        });
    };
    DatabaseAPI.getUserByNickname = function (nickname) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, fetch(DatabaseAPI.rootURL + "/users?nickname=" + nickname)
                        .then(function (data) { return data.json(); })
                        .then(function (userData) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (userData.length === 0)
                                        return [2 /*return*/, null];
                                    return [4 /*yield*/, DatabaseAPI.convertUserFromDbToMvc(userData)];
                                case 1: return [2 /*return*/, (_a.sent()).pop()];
                            }
                        });
                    }); })];
            });
        });
    };
    DatabaseAPI.addUser = function (nickname, password) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, $.ajax({
                        url: DatabaseAPI.rootURL + "/users",
                        type: 'POST',
                        data: {
                            nickname: nickname,
                            password: password,
                        },
                        async: true,
                    })];
            });
        });
    };
    //#endregion USER table methods
    //#region PROJECT table methods
    DatabaseAPI.getAllProjects = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, fetch(DatabaseAPI.rootURL + "/projects")
                        .then(function (data) { return data.json(); })
                        .then(function (projectData) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, DatabaseAPI.convertProjectFromDbToMvc(projectData)];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); })];
            });
        });
    };
    DatabaseAPI.getProjectsByUser = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, fetch(DatabaseAPI.rootURL + "/users/" + userId + "/projects")
                        .then(function (data) { return data.json(); })
                        .then(function (projectData) { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, DatabaseAPI.convertProjectFromDbToMvc(projectData)];
                            case 1: return [2 /*return*/, _a.sent()];
                        }
                    }); }); })];
            });
        });
    };
    DatabaseAPI.updateProjects = function (projects) {
        return __awaiter(this, void 0, void 0, function () {
            var promises;
            var _this = this;
            return __generator(this, function (_a) {
                promises = [];
                projects.forEach(function (proj) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.updateTasks(proj.model.getTasks(), proj.model.getId())];
                            case 1:
                                _a.sent();
                                promises.push(new Promise(function () {
                                    fetch(DatabaseAPI.rootURL + "/projects/" + proj.model.getId(), {
                                        method: 'PATCH',
                                        headers: {
                                            'Content-Type': 'application/json',
                                        },
                                        body: JSON.stringify({
                                            name: proj.model.name,
                                            dueDate: proj.model.getDueDate(),
                                        }),
                                    });
                                }));
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/, Promise.all(promises)];
            });
        });
    };
    DatabaseAPI.deleteProjects = function (projects) {
        return __awaiter(this, void 0, void 0, function () {
            var promises;
            return __generator(this, function (_a) {
                promises = [];
                projects.forEach(function (proj) {
                    // delete all tasks for that project
                    DatabaseAPI.deleteTasks(proj.model.getTasks());
                    // delete project itself
                    promises.push(new Promise(function (resolve, reject) {
                        fetch(DatabaseAPI.rootURL + "/projects/" + proj.model.getId(), {
                            method: 'DELETE',
                        })
                            .then(function (response) {
                            if (!response.ok) {
                                (0,_toast__WEBPACK_IMPORTED_MODULE_3__.displayPopup)({
                                    color: 'red',
                                    title: 'Delete project',
                                    message: "Failed to delete project " + proj.model.getId() + ".",
                                });
                                reject(response);
                            }
                            else {
                                resolve(response);
                            }
                        })
                            .catch(function (err) { return reject(err); });
                    }));
                });
                return [2 /*return*/, Promise.all(promises)];
            });
        });
    };
    DatabaseAPI.addProject = function (project, userId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, $.ajax({
                        url: DatabaseAPI.rootURL + "/projects",
                        type: 'POST',
                        data: {
                            name: project.name,
                            dueDate: project.getDueDate().toISOString(),
                            timestamp: project.getTimestamp().toISOString(),
                            userId: userId,
                        },
                        async: true,
                    })];
            });
        });
    };
    //#endregion PROJECT table methods
    //#region TASK table methods
    DatabaseAPI.getAllTasks = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, fetch(DatabaseAPI.rootURL + "/tasks")
                        .then(function (data) { return data.json(); })
                        .then(function (taskData) {
                        return DatabaseAPI.convertTaskFromDbToMvc(taskData);
                    })];
            });
        });
    };
    DatabaseAPI.getTasksByProject = function (projId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, fetch(DatabaseAPI.rootURL + "/projects/" + projId + "/tasks")
                        .then(function (data) { return data.json(); })
                        .then(function (taskData) {
                        return DatabaseAPI.convertTaskFromDbToMvc(taskData);
                    })];
            });
        });
    };
    DatabaseAPI.getTaskDataById = function (taskId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, fetch(DatabaseAPI.rootURL + "/tasks/" + taskId)
                        .then(function (response) {
                        if (response.ok)
                            return response;
                        return null;
                    })
                        .then(function (data) {
                        if (data)
                            return data.json();
                        return null;
                    })];
            });
        });
    };
    DatabaseAPI.updateTasks = function (tasks, projectId) {
        return __awaiter(this, void 0, void 0, function () {
            var promises;
            var _this = this;
            return __generator(this, function (_a) {
                promises = [];
                tasks.forEach(function (task) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!(task.model.getId() === undefined)) return [3 /*break*/, 2];
                                // add new task
                                return [4 /*yield*/, DatabaseAPI.addTasks([task], projectId)];
                            case 1:
                                // add new task
                                _a.sent();
                                return [2 /*return*/];
                            case 2:
                                // update existing tasks
                                promises.push(new Promise(function () {
                                    fetch(DatabaseAPI.rootURL + "/tasks/" + task.model.getId(), {
                                        method: 'PATCH',
                                        headers: {
                                            'Content-Type': 'application/json',
                                        },
                                        body: JSON.stringify({
                                            name: task.model.name,
                                            state: task.model.getState(),
                                        }),
                                    });
                                }));
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/, Promise.all(promises)];
            });
        });
    };
    DatabaseAPI.addTasks = function (tasks, projectId) {
        return __awaiter(this, void 0, void 0, function () {
            var promises;
            return __generator(this, function (_a) {
                promises = [];
                tasks.forEach(function (task) {
                    promises.push(new Promise(function () {
                        $.ajax({
                            url: DatabaseAPI.rootURL + "/tasks",
                            type: 'POST',
                            data: {
                                name: task.model.name,
                                state: task.model.getState(),
                                projectId: projectId,
                            },
                            async: true,
                        });
                    }));
                });
                return [2 /*return*/, Promise.all(promises)];
            });
        });
    };
    DatabaseAPI.deleteTasks = function (tasks) {
        return __awaiter(this, void 0, void 0, function () {
            var promises;
            return __generator(this, function (_a) {
                promises = [];
                tasks.forEach(function (task) {
                    promises.push(new Promise(function () {
                        fetch(DatabaseAPI.rootURL + "/tasks/" + task.model.getId(), {
                            method: 'DELETE',
                        });
                    }));
                });
                return [2 /*return*/, Promise.all(promises)];
            });
        });
    };
    return DatabaseAPI;
}());



/***/ }),

/***/ "./src/ts/utils/dropdown.ts":
/*!**********************************!*\
  !*** ./src/ts/utils/dropdown.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawDropdownButton": () => (/* binding */ drawDropdownButton)
/* harmony export */ });
function drawDropdownButton(parent, btnId, items) {
    var dropdown = document.createElement('div');
    dropdown.className = 'dropdown';
    parent.appendChild(dropdown);
    var dropdownMenu = document.createElement('div');
    dropdownMenu.className = 'dropdown-menu dropdown-menu-right';
    dropdownMenu.setAttribute('aria-labelledby', btnId);
    dropdown.appendChild(dropdownMenu);
    items.forEach(function (item) { return dropdownMenu.appendChild(item); });
    return dropdown;
}


/***/ }),

/***/ "./src/ts/utils/modal.ts":
/*!*******************************!*\
  !*** ./src/ts/utils/modal.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayModal": () => (/* binding */ displayModal)
/* harmony export */ });
/**
 * @param data requires TITLE, MESSAGE and BUTTONS property.
 * Each button requires TEXT, TYPE (class name - e.g. 'primary', 'danger', etc.) and CALLBACK FUNCTION.
 */
function displayModal(data) {
    var modal = document.getElementById('modalDialog');
    if (modal !== null)
        modal.remove();
    modal = createModal(data);
    $('.manager')[0].appendChild(modal);
    $('#modalDialog').modal('show');
}
function createModal(data) {
    var modal = document.createElement('div');
    modal.id = 'modalDialog';
    modal.className = 'modal fade';
    modal.tabIndex = -1;
    var dialog = document.createElement('div');
    dialog.className = 'modal-dialog modal-dialog-centered';
    var content = document.createElement('div');
    content.className = 'modal-content';
    var header = document.createElement('div');
    header.className = 'modal-header';
    var title = document.createElement('h5');
    title.className = 'modal-title';
    title.innerHTML = data.title;
    header.appendChild(title);
    var btnClose = document.createElement('button');
    header.appendChild(btnClose);
    btnClose.className = 'close';
    btnClose.setAttribute('data-dismiss', 'modal');
    btnClose.innerHTML = '<span>&times;</span>';
    content.appendChild(header);
    var body = document.createElement('div');
    body.className = 'modal-body';
    var paragraph = document.createElement('p');
    paragraph.innerHTML = data.message;
    body.appendChild(paragraph);
    content.appendChild(body);
    var footer = document.createElement('div');
    footer.className = 'modal-footer';
    data.buttons.forEach(function (btn) {
        var btnElement = document.createElement('button');
        btnElement.className = "btn btn-" + btn.type + " btnModal";
        btnElement.innerHTML = btn.text;
        btnElement.onclick = function () {
            btn.callback();
            $('#modalDialog').modal('toggle');
        };
        footer.appendChild(btnElement);
    });
    content.appendChild(footer);
    dialog.appendChild(content);
    modal.appendChild(dialog);
    return modal;
}


/***/ }),

/***/ "./src/ts/utils/removeElementsChildren.ts":
/*!************************************************!*\
  !*** ./src/ts/utils/removeElementsChildren.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "removeElementsChildren": () => (/* binding */ removeElementsChildren)
/* harmony export */ });
function removeElementsChildren(element) {
    if (element === undefined)
        return;
    while (element.children[0])
        element.removeChild(element.children[0]);
}


/***/ }),

/***/ "./src/ts/utils/shortenString.ts":
/*!***************************************!*\
  !*** ./src/ts/utils/shortenString.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shortenString": () => (/* binding */ shortenString)
/* harmony export */ });
function shortenString(s, length) {
    if (s.length <= length)
        return s;
    // remove last 3 letters
    var shortStr = s.substr(0, length - 3);
    // remove white space at the end
    if (shortStr.charAt(shortStr.length - 1) === ' ')
        shortStr = shortStr.slice(0, shortStr.length - 1);
    return shortStr + '...';
}


/***/ }),

/***/ "./src/ts/utils/taskState.ts":
/*!***********************************!*\
  !*** ./src/ts/utils/taskState.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaskState": () => (/* binding */ TaskState)
/* harmony export */ });
var TaskState;
(function (TaskState) {
    TaskState["TO_DO"] = "To do";
    TaskState["IN_PROGRESS"] = "In progress";
    TaskState["FINISHED"] = "Finished";
})(TaskState || (TaskState = {}));


/***/ }),

/***/ "./src/ts/utils/toast.ts":
/*!*******************************!*\
  !*** ./src/ts/utils/toast.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayPopup": () => (/* binding */ displayPopup)
/* harmony export */ });
/**
 * @param data requires COLOR, TITLE and MESSAGE property
 */
function displayPopup(data) {
    var toast = document.getElementById('toastNotif');
    if (toast !== null)
        toast.remove();
    toast = createPopup(data);
    $('.manager')[0].appendChild(toast);
    $('#toastNotif').toast({ delay: 4000 });
    $('#toastNotif').toast('show');
}
function createPopup(data) {
    var toast = document.createElement('div');
    toast.className = 'toast';
    toast.id = 'toastNotif';
    var toastHeader = document.createElement('div');
    toastHeader.className = 'toast-header';
    toast.appendChild(toastHeader);
    var statusIcon = document.createElement('div');
    statusIcon.className = 'statusIcon';
    statusIcon.style.backgroundColor = data.color;
    toastHeader.appendChild(statusIcon);
    var lblHeader = document.createElement('strong');
    lblHeader.className = 'mr-auto';
    lblHeader.innerHTML = data.title;
    toastHeader.appendChild(lblHeader);
    var time = document.createElement('small');
    toastHeader.appendChild(time);
    var btnClose = document.createElement('button');
    toastHeader.appendChild(btnClose);
    btnClose.type = 'button';
    btnClose.className = 'ml-2 mb-1 close';
    btnClose.setAttribute('data-dismiss', 'toast');
    toastHeader.appendChild(btnClose);
    var span = document.createElement('span');
    span.innerHTML = '&times;';
    btnClose.appendChild(span);
    var body = document.createElement('div');
    body.className = 'toast-body';
    body.innerHTML = data.message;
    toast.appendChild(body);
    return toast;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/ts/main.ts ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_databaseAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/databaseAPI */ "./src/ts/utils/databaseAPI.ts");
/* harmony import */ var _manager_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manager/controller */ "./src/ts/manager/controller.ts");


var dbURL = 'http://localhost:3000';
_utils_databaseAPI__WEBPACK_IMPORTED_MODULE_0__.DatabaseAPI.setRootURL(dbURL);
var manager = new _manager_controller__WEBPACK_IMPORTED_MODULE_1__.Manager();
manager.draw(document.body);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Nsb25lT2JqZWN0L2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbXBhcmVBc2MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbk1vbnRocy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJblNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9lbmRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2VuZE9mTW9udGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zvcm1hdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzTGFzdERheU9mTW9udGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1ZhbGlkL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL21hdGNoL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL3NyYy90cy9tYW5hZ2VyL2NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vc3JjL3RzL21hbmFnZXIvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vc3JjL3RzL21hbmFnZXIvdmlldy50cyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9zcmMvdHMvcHJvamVjdC9jb250cm9sbGVyLnRzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL3NyYy90cy9wcm9qZWN0L21vZGVsLnRzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL3NyYy90cy9wcm9qZWN0L3ZpZXcudHMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vc3JjL3RzL3Rhc2svY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9zcmMvdHMvdGFzay9tb2RlbC50cyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9zcmMvdHMvdGFzay92aWV3LnRzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL3NyYy90cy91c2VyL2NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vc3JjL3RzL3VzZXIvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vc3JjL3RzL3VzZXIvdmlldy50cyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9zcmMvdHMvdXRpbHMvZGF0YWJhc2VBUEkudHMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vc3JjL3RzL3V0aWxzL2Ryb3Bkb3duLnRzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL3NyYy90cy91dGlscy9tb2RhbC50cyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9zcmMvdHMvdXRpbHMvcmVtb3ZlRWxlbWVudHNDaGlsZHJlbi50cyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9zcmMvdHMvdXRpbHMvc2hvcnRlblN0cmluZy50cyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9zcmMvdHMvdXRpbHMvdGFza1N0YXRlLnRzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL3NyYy90cy91dGlscy90b2FzdC50cyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9zcmMvdHMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7OztBQ1RlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNkd0M7QUFDekI7QUFDZixTQUFTLHlEQUFNLEdBQUc7QUFDbEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSDBEO0FBQ1c7QUFDSjtBQUNRO0FBQ2Q7QUFDUTtBQUNOO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxrRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFF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O0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BOMEM7QUFDVztBQUNLO0FBQ2xCO0FBQ29CO0FBQ1E7QUFDMkI7QUFDNkI7QUFDekU7QUFDTTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxxRkFBcUY7QUFDckY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO0lBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUM5QixLQUFLLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRXhCLE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUM7Ozs7Ozs7VUNwREQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7O0FDTmtEO0FBQ0g7QUFFL0MsSUFBTSxLQUFLLEdBQUcsdUJBQXVCLENBQUM7QUFDdEMsc0VBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFOUIsSUFBTSxPQUFPLEdBQVksSUFBSSx3REFBTyxFQUFFLENBQUM7QUFDdkMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvcyhudW1iZXIsIHRhcmdldExlbmd0aCkge1xuICB2YXIgc2lnbiA9IG51bWJlciA8IDAgPyAnLScgOiAnJztcbiAgdmFyIG91dHB1dCA9IE1hdGguYWJzKG51bWJlcikudG9TdHJpbmcoKTtcblxuICB3aGlsZSAob3V0cHV0Lmxlbmd0aCA8IHRhcmdldExlbmd0aCkge1xuICAgIG91dHB1dCA9ICcwJyArIG91dHB1dDtcbiAgfVxuXG4gIHJldHVybiBzaWduICsgb3V0cHV0O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIGRpcnR5T2JqZWN0KSB7XG4gIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2Fzc2lnbiByZXF1aXJlcyB0aGF0IGlucHV0IHBhcmFtZXRlciBub3QgYmUgbnVsbCBvciB1bmRlZmluZWQnKTtcbiAgfVxuXG4gIGRpcnR5T2JqZWN0ID0gZGlydHlPYmplY3QgfHwge307XG5cbiAgZm9yICh2YXIgcHJvcGVydHkgaW4gZGlydHlPYmplY3QpIHtcbiAgICBpZiAoZGlydHlPYmplY3QuaGFzT3duUHJvcGVydHkocHJvcGVydHkpKSB7XG4gICAgICB0YXJnZXRbcHJvcGVydHldID0gZGlydHlPYmplY3RbcHJvcGVydHldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59IiwiaW1wb3J0IGFzc2lnbiBmcm9tIFwiLi4vYXNzaWduL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbG9uZU9iamVjdChkaXJ0eU9iamVjdCkge1xuICByZXR1cm4gYXNzaWduKHt9LCBkaXJ0eU9iamVjdCk7XG59IiwiaW1wb3J0IGxpZ2h0Rm9ybWF0dGVycyBmcm9tIFwiLi4vbGlnaHRGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDRGF5T2ZZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0RheU9mWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xudmFyIGRheVBlcmlvZEVudW0gPSB7XG4gIGFtOiAnYW0nLFxuICBwbTogJ3BtJyxcbiAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gIG5vb246ICdub29uJyxcbiAgbW9ybmluZzogJ21vcm5pbmcnLFxuICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICBldmVuaW5nOiAnZXZlbmluZycsXG4gIG5pZ2h0OiAnbmlnaHQnXG4gIC8qXG4gICAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAgICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICAgKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8IE1pbGxpc2Vjb25kcyBpbiBkYXkgICAgICAgICAgICB8XG4gICAqIHwgIGIgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgIHwgIEIgIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgIHxcbiAgICogfCAgYyAgfCBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2VlayAgfCAgQyogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfFxuICAgKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gICAqIHwgIGUgIHwgTG9jYWwgZGF5IG9mIHdlZWsgICAgICAgICAgICAgIHwgIEUgIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgICAgIHxcbiAgICogfCAgZiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgRiogfCBEYXkgb2Ygd2VlayBpbiBtb250aCAgICAgICAgICAgfFxuICAgKiB8ICBnKiB8IE1vZGlmaWVkIEp1bGlhbiBkYXkgICAgICAgICAgICB8ICBHICB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gICAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAgICogfCAgaSEgfCBJU08gZGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgfCAgSSEgfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgfFxuICAgKiB8ICBqKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8ICBKKiB8IExvY2FsaXplZCBob3VyIHcvbyBkYXkgcGVyaW9kICB8XG4gICAqIHwgIGsgIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgIHwgIEsgIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgIHxcbiAgICogfCAgbCogfCAoZGVwcmVjYXRlZCkgICAgICAgICAgICAgICAgICAgfCAgTCAgfCBTdGFuZC1hbG9uZSBtb250aCAgICAgICAgICAgICAgfFxuICAgKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gICAqIHwgIG4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAgICogfCAgbyEgfCBPcmRpbmFsIG51bWJlciBtb2RpZmllciAgICAgICAgfCAgTyAgfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgfFxuICAgKiB8ICBwISB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICB8ICBQISB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICB8XG4gICAqIHwgIHEgIHwgU3RhbmQtYWxvbmUgcXVhcnRlciAgICAgICAgICAgIHwgIFEgIHwgUXVhcnRlciAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAgICogfCAgciogfCBSZWxhdGVkIEdyZWdvcmlhbiB5ZWFyICAgICAgICAgfCAgUiEgfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgfFxuICAgKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gICAqIHwgIHQhIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgIHwgIFQhIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgIHxcbiAgICogfCAgdSAgfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgfCAgVSogfCBDeWNsaWMgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICAgKiB8ICB2KiB8IFRpbWV6b25lIChnZW5lcmljIG5vbi1sb2NhdC4pICB8ICBWKiB8IFRpbWV6b25lIChsb2NhdGlvbikgICAgICAgICAgICB8XG4gICAqIHwgIHcgIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgIHwgIFcqIHwgV2VlayBvZiBtb250aCAgICAgICAgICAgICAgICAgIHxcbiAgICogfCAgeCAgfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgfCAgWCAgfCBUaW1lem9uZSAoSVNPLTg2MDEpICAgICAgICAgICAgfFxuICAgKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICB8XG4gICAqIHwgIHogIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pIHwgIFoqIHwgVGltZXpvbmUgKGFsaWFzZXMpICAgICAgICAgICAgIHxcbiAgICpcbiAgICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICAgKlxuICAgKiBMZXR0ZXJzIG1hcmtlZCBieSAhIGFyZSBub24tc3RhbmRhcmQsIGJ1dCBpbXBsZW1lbnRlZCBieSBkYXRlLWZuczpcbiAgICogLSBgb2AgbW9kaWZpZXMgdGhlIHByZXZpb3VzIHRva2VuIHRvIHR1cm4gaXQgaW50byBhbiBvcmRpbmFsIChzZWUgYGZvcm1hdGAgZG9jcylcbiAgICogLSBgaWAgaXMgSVNPIGRheSBvZiB3ZWVrLiBGb3IgYGlgIGFuZCBgaWlgIGlzIHJldHVybnMgbnVtZXJpYyBJU08gd2VlayBkYXlzLFxuICAgKiAgIGkuZS4gNyBmb3IgU3VuZGF5LCAxIGZvciBNb25kYXksIGV0Yy5cbiAgICogLSBgSWAgaXMgSVNPIHdlZWsgb2YgeWVhciwgYXMgb3Bwb3NlZCB0byBgd2Agd2hpY2ggaXMgbG9jYWwgd2VlayBvZiB5ZWFyLlxuICAgKiAtIGBSYCBpcyBJU08gd2Vlay1udW1iZXJpbmcgeWVhciwgYXMgb3Bwb3NlZCB0byBgWWAgd2hpY2ggaXMgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAgICogICBgUmAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGBJYCBhbmQgYGlgXG4gICAqICAgZm9yIHVuaXZlcnNhbCBJU08gd2Vlay1udW1iZXJpbmcgZGF0ZSwgd2hlcmVhc1xuICAgKiAgIGBZYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHdgIGFuZCBgZWBcbiAgICogICBmb3Igd2Vlay1udW1iZXJpbmcgZGF0ZSBzcGVjaWZpYyB0byB0aGUgbG9jYWxlLlxuICAgKiAtIGBQYCBpcyBsb25nIGxvY2FsaXplZCBkYXRlIGZvcm1hdFxuICAgKiAtIGBwYCBpcyBsb25nIGxvY2FsaXplZCB0aW1lIGZvcm1hdFxuICAgKi9cblxufTtcbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBFcmFcbiAgRzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBlcmEgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCkgPiAwID8gMSA6IDA7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBBRCwgQkNcbiAgICAgIGNhc2UgJ0cnOlxuICAgICAgY2FzZSAnR0cnOlxuICAgICAgY2FzZSAnR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEEsIEJcblxuICAgICAgY2FzZSAnR0dHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93J1xuICAgICAgICB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG5cbiAgICAgIGNhc2UgJ0dHR0cnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgLy8gT3JkaW5hbCBudW1iZXJcbiAgICBpZiAodG9rZW4gPT09ICd5bycpIHtcbiAgICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoeWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMueShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgWTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBzaWduZWRXZWVrWWVhciA9IGdldFVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgdmFyIHdlZWtZZWFyID0gc2lnbmVkV2Vla1llYXIgPiAwID8gc2lnbmVkV2Vla1llYXIgOiAxIC0gc2lnbmVkV2Vla1llYXI7IC8vIFR3byBkaWdpdCB5ZWFyXG5cbiAgICBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICAgIHZhciB0d29EaWdpdFllYXIgPSB3ZWVrWWVhciAlIDEwMDtcbiAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModHdvRGlnaXRZZWFyLCAyKTtcbiAgICB9IC8vIE9yZGluYWwgbnVtYmVyXG5cblxuICAgIGlmICh0b2tlbiA9PT0gJ1lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vla1llYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9IC8vIFBhZGRpbmdcblxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAgUjogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGlzb1dlZWtZZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGF0ZSk7IC8vIFBhZGRpbmdcblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEV4dGVuZGVkIHllYXIuIFRoaXMgaXMgYSBzaW5nbGUgbnVtYmVyIGRlc2lnbmF0aW5nIHRoZSB5ZWFyIG9mIHRoaXMgY2FsZW5kYXIgc3lzdGVtLlxuICAvLyBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgbG9jYWxpemVycyBhcmUgQi5DLiB5ZWFyczpcbiAgLy8gfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAgLy8gfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAgLy8gfCBBQyAxIHwgICAxIHwgICAxIHxcbiAgLy8gfCBCQyAxIHwgICAxIHwgICAwIHxcbiAgLy8gfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAgLy8gQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICAvLyB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQuXG4gIHU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gUXVhcnRlclxuICBROiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdRJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG5cbiAgICAgIGNhc2UgJ1FRJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICBjYXNlICdRbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICBjYXNlICdRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgIGNhc2UgJ1FRUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICBjYXNlICdRUVFRJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIHF1YXJ0ZXJcbiAgcTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAncSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdxcSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAncW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAncXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdxcXFxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAncXFxcSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnTSc6XG4gICAgICBjYXNlICdNTSc6XG4gICAgICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuTShkYXRlLCB0b2tlbik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgIGNhc2UgJ01vJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICBjYXNlICdNTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgY2FzZSAnTU1NTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcblxuICAgICAgY2FzZSAnTU1NTSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIG1vbnRoXG4gIEw6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAuLi4sIDEyXG4gICAgICBjYXNlICdMJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhtb250aCArIDEpO1xuICAgICAgLy8gMDEsIDAyLCAuLi4sIDEyXG5cbiAgICAgIGNhc2UgJ0xMJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdMbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ0xMTExMJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ0xMTEwnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCB3ZWVrIG9mIHllYXJcbiAgdzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciB3ZWVrID0gZ2V0VVRDV2VlayhkYXRlLCBvcHRpb25zKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ3dvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIod2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWsgb2YgeWVhclxuICBJOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGlzb1dlZWsgPSBnZXRVVENJU09XZWVrKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnSW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29XZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdkbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDRGF0ZSgpLCB7XG4gICAgICAgIHVuaXQ6ICdkYXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5kKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHllYXJcbiAgRDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZlllYXIgPSBnZXRVVENEYXlPZlllYXIoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09ICdEbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRheU9mWWVhciwge1xuICAgICAgICB1bml0OiAnZGF5T2ZZZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXlPZlllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB3ZWVrXG4gIEU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFR1ZVxuICAgICAgY2FzZSAnRSc6XG4gICAgICBjYXNlICdFRSc6XG4gICAgICBjYXNlICdFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdFRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnRUVFRSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgZGF5IG9mIHdlZWtcbiAgZTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChOdGggZGF5IG9mIHdlZWsgd2l0aCBjdXJyZW50IGxvY2FsZSBvciB3ZWVrU3RhcnRzT24pXG4gICAgICBjYXNlICdlJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2VlJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcblxuICAgICAgY2FzZSAnZW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdlZWVlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnZWVlZSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcbiAgYzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBsb2NhbERheU9mV2VlayA9IChkYXlPZldlZWsgLSBvcHRpb25zLndlZWtTdGFydHNPbiArIDgpICUgNyB8fCA3O1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChzYW1lIGFzIGluIGBlYClcbiAgICAgIGNhc2UgJ2MnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcblxuICAgICAgY2FzZSAnY2MnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2NvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnY2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2NjY2MnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIElTTyBkYXkgb2Ygd2Vla1xuICBpOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGlzb0RheU9mV2VlayA9IGRheU9mV2VlayA9PT0gMCA/IDcgOiBkYXlPZldlZWs7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAyXG4gICAgICBjYXNlICdpJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhpc29EYXlPZldlZWspO1xuICAgICAgLy8gMDJcblxuICAgICAgY2FzZSAnaWknOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb0RheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDJuZFxuXG4gICAgICBjYXNlICdpbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb0RheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlXG5cbiAgICAgIGNhc2UgJ2lpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2lpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdpaWlpJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNLCBQTSwgbWlkbmlnaHQsIG5vb25cbiAgYjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID09PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubWlkbmlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2InOlxuICAgICAgY2FzZSAnYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSkudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYmJiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYmInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcbiAgQjogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgaWYgKGhvdXJzID49IDE3KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmV2ZW5pbmc7XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSAxMikge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5hZnRlcm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA+PSA0KSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1vcm5pbmc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubmlnaHQ7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnQic6XG4gICAgICBjYXNlICdCQic6XG4gICAgICBjYXNlICdCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnQkJCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdobycpIHtcbiAgICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuICAgICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDEyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnSG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0hvdXJzKCksIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLkgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTExXVxuICBLOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG5cbiAgICBpZiAodG9rZW4gPT09ICdLbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMS0yNF1cbiAgazogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMjQ7XG5cbiAgICBpZiAodG9rZW4gPT09ICdrbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdtbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDTWludXRlcygpLCB7XG4gICAgICAgIHVuaXQ6ICdtaW51dGUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLm0oZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ3NvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHtcbiAgICAgICAgdW5pdDogJ3NlY29uZCdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMucyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLlMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYWx3YXlzIGAnWidgKVxuICBYOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIGlmICh0aW1lem9uZU9mZnNldCA9PT0gMCkge1xuICAgICAgcmV0dXJuICdaJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAnWCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFgnOlxuICAgICAgY2FzZSAnWFgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYWGBcblxuICAgICAgY2FzZSAnWFhYWFgnOlxuICAgICAgY2FzZSAnWFhYJzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBgJyswMDowMCdgIG9yIGVxdWl2YWxlbnQpXG4gIHg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ3gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4YFxuXG4gICAgICBjYXNlICd4eHh4JzpcbiAgICAgIGNhc2UgJ3h4JzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eHhgXG5cbiAgICAgIGNhc2UgJ3h4eHh4JzpcbiAgICAgIGNhc2UgJ3h4eCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoR01UKVxuICBPOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICdPJzpcbiAgICAgIGNhc2UgJ09PJzpcbiAgICAgIGNhc2UgJ09PTyc6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ09PT08nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0aW9uKVxuICB6OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIFNob3J0XG4gICAgICBjYXNlICd6JzpcbiAgICAgIGNhc2UgJ3p6JzpcbiAgICAgIGNhc2UgJ3p6eic6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lU2hvcnQodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgICAvLyBMb25nXG5cbiAgICAgIGNhc2UgJ3p6enonOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBTZWNvbmRzIHRpbWVzdGFtcFxuICB0OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gTWF0aC5mbG9vcihvcmlnaW5hbERhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAgVDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0aW1lc3RhbXAsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lU2hvcnQob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKTtcbiAgdmFyIG1pbnV0ZXMgPSBhYnNPZmZzZXQgJSA2MDtcblxuICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKTtcbiAgfVxuXG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpICsgZGVsaW1pdGVyICsgYWRkTGVhZGluZ1plcm9zKG1pbnV0ZXMsIDIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXMob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICBpZiAob2Zmc2V0ICUgNjAgPT09IDApIHtcbiAgICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gICAgcmV0dXJuIHNpZ24gKyBhZGRMZWFkaW5nWmVyb3MoTWF0aC5hYnMob2Zmc2V0KSAvIDYwLCAyKTtcbiAgfVxuXG4gIHJldHVybiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IGFkZExlYWRpbmdaZXJvcyhNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKSwgMik7XG4gIHZhciBtaW51dGVzID0gYWRkTGVhZGluZ1plcm9zKGFic09mZnNldCAlIDYwLCAyKTtcbiAgcmV0dXJuIHNpZ24gKyBob3VycyArIGRlbGltaXRlciArIG1pbnV0ZXM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqL1xuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gWWVhclxuICB5OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICAvLyBGcm9tIGh0dHA6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtMzEvdHIzNS1kYXRlcy5odG1sI0RhdGVfRm9ybWF0X3Rva2Vuc1xuICAgIC8vIHwgWWVhciAgICAgfCAgICAgeSB8IHl5IHwgICB5eXkgfCAgeXl5eSB8IHl5eXl5IHxcbiAgICAvLyB8LS0tLS0tLS0tLXwtLS0tLS0tfC0tLS18LS0tLS0tLXwtLS0tLS0tfC0tLS0tLS18XG4gICAgLy8gfCBBRCAxICAgICB8ICAgICAxIHwgMDEgfCAgIDAwMSB8ICAwMDAxIHwgMDAwMDEgfFxuICAgIC8vIHwgQUQgMTIgICAgfCAgICAxMiB8IDEyIHwgICAwMTIgfCAgMDAxMiB8IDAwMDEyIHxcbiAgICAvLyB8IEFEIDEyMyAgIHwgICAxMjMgfCAyMyB8ICAgMTIzIHwgIDAxMjMgfCAwMDEyMyB8XG4gICAgLy8gfCBBRCAxMjM0ICB8ICAxMjM0IHwgMzQgfCAgMTIzNCB8ICAxMjM0IHwgMDEyMzQgfFxuICAgIC8vIHwgQUQgMTIzNDUgfCAxMjM0NSB8IDQ1IHwgMTIzNDUgfCAxMjM0NSB8IDEyMzQ1IHxcbiAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0b2tlbiA9PT0gJ3l5JyA/IHllYXIgJSAxMDAgOiB5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNb250aFxuICBNOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgcmV0dXJuIHRva2VuID09PSAnTScgPyBTdHJpbmcobW9udGggKyAxKSA6IGFkZExlYWRpbmdaZXJvcyhtb250aCArIDEsIDIpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENEYXRlKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXRlLmdldFVUQ0hvdXJzKCkgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZS50b1VwcGVyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlO1xuXG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWVbMF07XG5cbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZSA9PT0gJ2FtJyA/ICdhLm0uJyA6ICdwLm0uJztcbiAgICB9XG4gIH0sXG4gIC8vIEhvdXIgWzEtMTJdXG4gIGg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpICUgMTIgfHwgMTIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ01pbnV0ZXMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgbnVtYmVyT2ZEaWdpdHMgPSB0b2tlbi5sZW5ndGg7XG4gICAgdmFyIG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0VVRDTWlsbGlzZWNvbmRzKCk7XG4gICAgdmFyIGZyYWN0aW9uYWxTZWNvbmRzID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgKiBNYXRoLnBvdygxMCwgbnVtYmVyT2ZEaWdpdHMgLSAzKSk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhmcmFjdGlvbmFsU2Vjb25kcywgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiZnVuY3Rpb24gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAncCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcHAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwcCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkYXRlVGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICB2YXIgbWF0Y2hSZXN1bHQgPSBwYXR0ZXJuLm1hdGNoKC8oUCspKHArKT8vKTtcbiAgdmFyIGRhdGVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMV07XG4gIHZhciB0aW1lUGF0dGVybiA9IG1hdGNoUmVzdWx0WzJdO1xuXG4gIGlmICghdGltZVBhdHRlcm4pIHtcbiAgICByZXR1cm4gZGF0ZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZyk7XG4gIH1cblxuICB2YXIgZGF0ZVRpbWVGb3JtYXQ7XG5cbiAgc3dpdGNoIChkYXRlUGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVUaW1lRm9ybWF0LnJlcGxhY2UoJ3t7ZGF0ZX19JywgZGF0ZUxvbmdGb3JtYXR0ZXIoZGF0ZVBhdHRlcm4sIGZvcm1hdExvbmcpKS5yZXBsYWNlKCd7e3RpbWV9fScsIHRpbWVMb25nRm9ybWF0dGVyKHRpbWVQYXR0ZXJuLCBmb3JtYXRMb25nKSk7XG59XG5cbnZhciBsb25nRm9ybWF0dGVycyA9IHtcbiAgcDogdGltZUxvbmdGb3JtYXR0ZXIsXG4gIFA6IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlclxufTtcbmV4cG9ydCBkZWZhdWx0IGxvbmdGb3JtYXR0ZXJzOyIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDRGF5T2ZZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICBkYXRlLnNldFVUQ01vbnRoKDAsIDEpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlllYXJUaW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIGRpZmZlcmVuY2UgPSB0aW1lc3RhbXAgLSBzdGFydE9mWWVhclRpbWVzdGFtcDtcbiAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZmVyZW5jZSAvIE1JTExJU0VDT05EU19JTl9EQVkpICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIpO1xuXG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDSVNPV2VlayhkYXRlKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGF0ZSkuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZTtcbiAgdmFyIGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IDEgOiB0b0ludGVnZXIobG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlIDogdG9JbnRlZ2VyKG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZmlyc3RXZWVrT2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZOZXh0WWVhciwgZGlydHlPcHRpb25zKTtcbiAgdmFyIGZpcnN0V2Vla09mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZUaGlzWWVhciwgZGlydHlPcHRpb25zKTtcblxuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ1dlZWsoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJ2YXIgcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zID0gWydEJywgJ0REJ107XG52YXIgcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMgPSBbJ1lZJywgJ1lZWVknXTtcbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdCwgaW5wdXQpIHtcbiAgaWYgKHRva2VuID09PSAnWVlZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdEJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnREQnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXCIpKTtcbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHllYXIgPSBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5ID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSAxO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrWWVhcihkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcbiAgdmFyIGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZSAmJiBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU7XG4gIHZhciBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyAxIDogdG9JbnRlZ2VyKGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA6IHRvSW50ZWdlcihvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vlay5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWsuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrLCBkaXJ0eU9wdGlvbnMpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2VlayhkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcbiAgdmFyIGxvY2FsZVdlZWtTdGFydHNPbiA9IGxvY2FsZSAmJiBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy53ZWVrU3RhcnRzT247XG4gIHZhciBkZWZhdWx0V2Vla1N0YXJ0c09uID0gbG9jYWxlV2Vla1N0YXJ0c09uID09IG51bGwgPyAwIDogdG9JbnRlZ2VyKGxvY2FsZVdlZWtTdGFydHNPbik7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSBvcHRpb25zLndlZWtTdGFydHNPbiA9PSBudWxsID8gZGVmYXVsdFdlZWtTdGFydHNPbiA6IHRvSW50ZWdlcihvcHRpb25zLndlZWtTdGFydHNPbik7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvSW50ZWdlcihkaXJ0eU51bWJlcikge1xuICBpZiAoZGlydHlOdW1iZXIgPT09IG51bGwgfHwgZGlydHlOdW1iZXIgPT09IHRydWUgfHwgZGlydHlOdW1iZXIgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuXG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuXG4gIHJldHVybiBudW1iZXIgPCAwID8gTWF0aC5jZWlsKG51bWJlcikgOiBNYXRoLmZsb29yKG51bWJlcik7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgYWRkTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgNzUwIG1pbGxpc2Vjb25kcyB0byAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gYWRkTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MzAuNzUwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciB0aW1lc3RhbXAgPSB0b0RhdGUoZGlydHlEYXRlKS5nZXRUaW1lKCk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gbmV3IERhdGUodGltZXN0YW1wICsgYW1vdW50KTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGNvbXBhcmVBc2NcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gLTEsIDAgb3IgMS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIDEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCxcbiAqIC0xIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kIG9yIDAgaWYgZGF0ZXMgYXJlIGVxdWFsLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjb21wYXJlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY29tcGFyZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIHJlc3VsdCBvZiB0aGUgY29tcGFyaXNvblxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb21wYXJlIDExIEZlYnJ1YXJ5IDE5ODcgYW5kIDEwIEp1bHkgMTk4OTpcbiAqIGNvbnN0IHJlc3VsdCA9IGNvbXBhcmVBc2MobmV3IERhdGUoMTk4NywgMSwgMTEpLCBuZXcgRGF0ZSgxOTg5LCA2LCAxMCkpXG4gKiAvLz0+IC0xXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNvcnQgdGhlIGFycmF5IG9mIGRhdGVzOlxuICogY29uc3QgcmVzdWx0ID0gW1xuICogICBuZXcgRGF0ZSgxOTk1LCA2LCAyKSxcbiAqICAgbmV3IERhdGUoMTk4NywgMSwgMTEpLFxuICogICBuZXcgRGF0ZSgxOTg5LCA2LCAxMClcbiAqIF0uc29ydChjb21wYXJlQXNjKVxuICogLy89PiBbXG4gKiAvLyAgIFdlZCBGZWIgMTEgMTk4NyAwMDowMDowMCxcbiAqIC8vICAgTW9uIEp1bCAxMCAxOTg5IDAwOjAwOjAwLFxuICogLy8gICBTdW4gSnVsIDAyIDE5OTUgMDA6MDA6MDBcbiAqIC8vIF1cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wYXJlQXNjKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgZGlmZiA9IGRhdGVMZWZ0LmdldFRpbWUoKSAtIGRhdGVSaWdodC5nZXRUaW1lKCk7XG5cbiAgaWYgKGRpZmYgPCAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2UgaWYgKGRpZmYgPiAwKSB7XG4gICAgcmV0dXJuIDE7IC8vIFJldHVybiAwIGlmIGRpZmYgaXMgMDsgcmV0dXJuIE5hTiBpZiBkaWZmIGlzIE5hTlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBkaWZmO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRoc1xuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIG1vbnRocyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIG1vbnRocyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgbW9udGhzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIG1vbnRocyBhcmUgYmV0d2VlbiAzMSBKYW51YXJ5IDIwMTQgYW5kIDEgU2VwdGVtYmVyIDIwMTQ/XG4gKiB2YXIgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDgsIDEpLFxuICogICBuZXcgRGF0ZSgyMDE0LCAwLCAzMSlcbiAqIClcbiAqIC8vPT4gOFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgeWVhckRpZmYgPSBkYXRlTGVmdC5nZXRGdWxsWWVhcigpIC0gZGF0ZVJpZ2h0LmdldEZ1bGxZZWFyKCk7XG4gIHZhciBtb250aERpZmYgPSBkYXRlTGVmdC5nZXRNb250aCgpIC0gZGF0ZVJpZ2h0LmdldE1vbnRoKCk7XG4gIHJldHVybiB5ZWFyRGlmZiAqIDEyICsgbW9udGhEaWZmO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgbWlsbGlzZWNvbmRzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxNCAxMjozMDoyMC42MDAgYW5kIDIgSnVseSAyMDE0IDEyOjMwOjIxLjcwMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCAyMSwgNzAwKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCAyMCwgNjAwKVxuICogKVxuICogLy89PiAxMTAwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICByZXR1cm4gZGF0ZUxlZnQuZ2V0VGltZSgpIC0gZGF0ZVJpZ2h0LmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMvaW5kZXguanNcIjtcbmltcG9ydCBjb21wYXJlQXNjIGZyb20gXCIuLi9jb21wYXJlQXNjL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IGlzTGFzdERheU9mTW9udGggZnJvbSBcIi4uL2lzTGFzdERheU9mTW9udGgvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluTW9udGhzXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgZnVsbCBtb250aHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBmdWxsIG1vbnRocyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgZnVsbCBtb250aHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgZnVsbCBtb250aHMgYXJlIGJldHdlZW4gMzEgSmFudWFyeSAyMDE0IGFuZCAxIFNlcHRlbWJlciAyMDE0P1xuICogdmFyIHJlc3VsdCA9IGRpZmZlcmVuY2VJbk1vbnRocyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgbmV3IERhdGUoMjAxNCwgMCwgMzEpKVxuICogLy89PiA3XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluTW9udGhzKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgc2lnbiA9IGNvbXBhcmVBc2MoZGF0ZUxlZnQsIGRhdGVSaWdodCk7XG4gIHZhciBkaWZmZXJlbmNlID0gTWF0aC5hYnMoZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMoZGF0ZUxlZnQsIGRhdGVSaWdodCkpO1xuICB2YXIgcmVzdWx0OyAvLyBDaGVjayBmb3IgdGhlIGRpZmZlcmVuY2Ugb2YgbGVzcyB0aGFuIG1vbnRoXG5cbiAgaWYgKGRpZmZlcmVuY2UgPCAxKSB7XG4gICAgcmVzdWx0ID0gMDtcbiAgfSBlbHNlIHtcbiAgICBpZiAoZGF0ZUxlZnQuZ2V0TW9udGgoKSA9PT0gMSAmJiBkYXRlTGVmdC5nZXREYXRlKCkgPiAyNykge1xuICAgICAgLy8gVGhpcyB3aWxsIGNoZWNrIGlmIHRoZSBkYXRlIGlzIGVuZCBvZiBGZWIgYW5kIGFzc2lnbiBhIGhpZ2hlciBlbmQgb2YgbW9udGggZGF0ZVxuICAgICAgLy8gdG8gY29tcGFyZSBpdCB3aXRoIEphblxuICAgICAgZGF0ZUxlZnQuc2V0RGF0ZSgzMCk7XG4gICAgfVxuXG4gICAgZGF0ZUxlZnQuc2V0TW9udGgoZGF0ZUxlZnQuZ2V0TW9udGgoKSAtIHNpZ24gKiBkaWZmZXJlbmNlKTsgLy8gTWF0aC5hYnMoZGlmZiBpbiBmdWxsIG1vbnRocyAtIGRpZmYgaW4gY2FsZW5kYXIgbW9udGhzKSA9PT0gMSBpZiBsYXN0IGNhbGVuZGFyIG1vbnRoIGlzIG5vdCBmdWxsXG4gICAgLy8gSWYgc28sIHJlc3VsdCBtdXN0IGJlIGRlY3JlYXNlZCBieSAxIGluIGFic29sdXRlIHZhbHVlXG5cbiAgICB2YXIgaXNMYXN0TW9udGhOb3RGdWxsID0gY29tcGFyZUFzYyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSA9PT0gLXNpZ247IC8vIENoZWNrIGZvciBjYXNlcyBvZiBvbmUgZnVsbCBjYWxlbmRhciBtb250aFxuXG4gICAgaWYgKGlzTGFzdERheU9mTW9udGgodG9EYXRlKGRpcnR5RGF0ZUxlZnQpKSAmJiBkaWZmZXJlbmNlID09PSAxICYmIGNvbXBhcmVBc2MoZGlydHlEYXRlTGVmdCwgZGF0ZVJpZ2h0KSA9PT0gMSkge1xuICAgICAgaXNMYXN0TW9udGhOb3RGdWxsID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmVzdWx0ID0gc2lnbiAqIChkaWZmZXJlbmNlIC0gTnVtYmVyKGlzTGFzdE1vbnRoTm90RnVsbCkpO1xuICB9IC8vIFByZXZlbnQgbmVnYXRpdmUgemVyb1xuXG5cbiAgcmV0dXJuIHJlc3VsdCA9PT0gMCA/IDAgOiByZXN1bHQ7XG59IiwiaW1wb3J0IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5TZWNvbmRzXG4gKiBAY2F0ZWdvcnkgU2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIHNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBzZWNvbmRzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IHNlY29uZHMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDE0IDEyOjMwOjA3Ljk5OSBhbmQgMiBKdWx5IDIwMTQgMTI6MzA6MjAuMDAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluU2Vjb25kcyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCAyMCwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgNywgOTk5KVxuICogKVxuICogLy89PiAxMlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJblNlY29uZHMoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkaWZmID0gZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSAvIDEwMDA7XG4gIHJldHVybiBkaWZmID4gMCA/IE1hdGguZmxvb3IoZGlmZikgOiBNYXRoLmNlaWwoZGlmZik7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBlbmRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGVuZCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGVuZCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIGVuZCBvZiBhIGRheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBlbmQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBlbmRPZkRheShuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDAyIDIwMTQgMjM6NTk6NTkuOTk5XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW5kT2ZEYXkoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBkYXRlLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZW5kT2ZNb250aFxuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZW5kIG9mIGEgbW9udGggZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBlbmQgb2YgYSBtb250aCBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIGVuZCBvZiBhIG1vbnRoXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIGVuZCBvZiBhIG1vbnRoIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gZW5kT2ZNb250aChuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDMwIDIwMTQgMjM6NTk6NTkuOTk5XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZW5kT2ZNb250aChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBtb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgZGF0ZS5zZXRGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCksIG1vbnRoICsgMSwgMCk7XG4gIGRhdGUuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IGNvbXBhcmVBc2MgZnJvbSBcIi4uL2NvbXBhcmVBc2MvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5Nb250aHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbk1vbnRocy9pbmRleC5qc1wiO1xuaW1wb3J0IGRpZmZlcmVuY2VJblNlY29uZHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJblNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi9sb2NhbGUvZW4tVVMvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGNsb25lT2JqZWN0IGZyb20gXCIuLi9fbGliL2Nsb25lT2JqZWN0L2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTlVURVNfSU5fREFZID0gMTQ0MDtcbnZhciBNSU5VVEVTX0lOX0FMTU9TVF9UV09fREFZUyA9IDI1MjA7XG52YXIgTUlOVVRFU19JTl9NT05USCA9IDQzMjAwO1xudmFyIE1JTlVURVNfSU5fVFdPX01PTlRIUyA9IDg2NDAwO1xuLyoqXG4gKiBAbmFtZSBmb3JtYXREaXN0YW5jZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzIGluIHdvcmRzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcyBpbiB3b3Jkcy5cbiAqXG4gKiB8IERpc3RhbmNlIGJldHdlZW4gZGF0ZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUmVzdWx0ICAgICAgICAgICAgICB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8IDAgLi4uIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbGVzcyB0aGFuIGEgbWludXRlICB8XG4gKiB8IDMwIHNlY3MgLi4uIDEgbWluIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMSBtaW51dGUgICAgICAgICAgICB8XG4gKiB8IDEgbWluIDMwIHNlY3MgLi4uIDQ0IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWzIuLjQ0XSBtaW51dGVzICAgICB8XG4gKiB8IDQ0IG1pbnMgLi4uIDMwIHNlY3MgLi4uIDg5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgMSBob3VyICAgICAgICB8XG4gKiB8IDg5IG1pbnMgMzAgc2VjcyAuLi4gMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgWzIuLjI0XSBob3VycyB8XG4gKiB8IDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDQxIGhycyA1OSBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgIHwgMSBkYXkgICAgICAgICAgICAgICB8XG4gKiB8IDQxIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDI5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgIHwgWzIuLjMwXSBkYXlzICAgICAgICB8XG4gKiB8IDI5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNDQgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIHwgYWJvdXQgMSBtb250aCAgICAgICB8XG4gKiB8IDQ0IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNTkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIHwgYWJvdXQgMiBtb250aHMgICAgICB8XG4gKiB8IDU5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gMSB5ciAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWzIuLjEyXSBtb250aHMgICAgICB8XG4gKiB8IDEgeXIgLi4uIDEgeXIgMyBtb250aHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgMSB5ZWFyICAgICAgICB8XG4gKiB8IDEgeXIgMyBtb250aHMgLi4uIDEgeXIgOSBtb250aCBzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgb3ZlciAxIHllYXIgICAgICAgICB8XG4gKiB8IDEgeXIgOSBtb250aHMgLi4uIDIgeXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWxtb3N0IDIgeWVhcnMgICAgICB8XG4gKiB8IE4geXJzIC4uLiBOIHlycyAzIG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgTiB5ZWFycyAgICAgICB8XG4gKiB8IE4geXJzIDMgbW9udGhzIC4uLiBOIHlycyA5IG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgb3ZlciBOIHllYXJzICAgICAgICB8XG4gKiB8IE4geXJzIDkgbW9udGhzIC4uLiBOKzEgeXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWxtb3N0IE4rMSB5ZWFycyAgICB8XG4gKlxuICogV2l0aCBgb3B0aW9ucy5pbmNsdWRlU2Vjb25kcyA9PSB0cnVlYDpcbiAqIHwgRGlzdGFuY2UgYmV0d2VlbiBkYXRlcyB8IFJlc3VsdCAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgMCBzZWNzIC4uLiA1IHNlY3MgICAgICB8IGxlc3MgdGhhbiA1IHNlY29uZHMgIHxcbiAqIHwgNSBzZWNzIC4uLiAxMCBzZWNzICAgICB8IGxlc3MgdGhhbiAxMCBzZWNvbmRzIHxcbiAqIHwgMTAgc2VjcyAuLi4gMjAgc2VjcyAgICB8IGxlc3MgdGhhbiAyMCBzZWNvbmRzIHxcbiAqIHwgMjAgc2VjcyAuLi4gNDAgc2VjcyAgICB8IGhhbGYgYSBtaW51dGUgICAgICAgIHxcbiAqIHwgNDAgc2VjcyAuLi4gNjAgc2VjcyAgICB8IGxlc3MgdGhhbiBhIG1pbnV0ZSAgIHxcbiAqIHwgNjAgc2VjcyAuLi4gOTAgc2VjcyAgICB8IDEgbWludXRlICAgICAgICAgICAgIHxcbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIC0gVGhlIGZ1bmN0aW9uIHdhcyByZW5hbWVkIGZyb20gYGRpc3RhbmNlSW5Xb3JkcyBgIHRvIGBmb3JtYXREaXN0YW5jZWBcbiAqICAgdG8gbWFrZSBpdHMgbmFtZSBjb25zaXN0ZW50IHdpdGggYGZvcm1hdGAgYW5kIGBmb3JtYXRSZWxhdGl2ZWAuXG4gKlxuICogLSBUaGUgb3JkZXIgb2YgYXJndW1lbnRzIGlzIHN3YXBwZWQgdG8gbWFrZSB0aGUgZnVuY3Rpb25cbiAqICAgY29uc2lzdGVudCB3aXRoIGBkaWZmZXJlbmNlSW4uLi5gIGZ1bmN0aW9ucy5cbiAqXG4gKiAgIGBgYGphdmFzY3JpcHRcbiAqICAgLy8gQmVmb3JlIHYyLjAuMFxuICpcbiAqICAgZGlzdGFuY2VJbldvcmRzKFxuICogICAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDEwLCAzMiwgMCksXG4gKiAgICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTEsIDMyLCAwKSxcbiAqICAgICB7IGFkZFN1ZmZpeDogdHJ1ZSB9XG4gKiAgICkgLy89PiAnaW4gYWJvdXQgMSBob3VyJ1xuICpcbiAqICAgLy8gdjIuMC4wIG9ud2FyZFxuICpcbiAqICAgZm9ybWF0RGlzdGFuY2UoXG4gKiAgICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTEsIDMyLCAwKSxcbiAqICAgICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMCwgMzIsIDApLFxuICogICAgIHsgYWRkU3VmZml4OiB0cnVlIH1cbiAqICAgKSAvLz0+ICdpbiBhYm91dCAxIGhvdXInXG4gKiAgIGBgYFxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYmFzZURhdGUgLSB0aGUgZGF0ZSB0byBjb21wYXJlIHdpdGhcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5pbmNsdWRlU2Vjb25kcz1mYWxzZV0gLSBkaXN0YW5jZXMgbGVzcyB0aGFuIGEgbWludXRlIGFyZSBtb3JlIGRldGFpbGVkXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmFkZFN1ZmZpeD1mYWxzZV0gLSByZXN1bHQgaW5kaWNhdGVzIGlmIHRoZSBzZWNvbmQgZGF0ZSBpcyBlYXJsaWVyIG9yIGxhdGVyIHRoYW4gdGhlIGZpcnN0XG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBkaXN0YW5jZSBpbiB3b3Jkc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGJhc2VEYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXREaXN0YW5jZWAgcHJvcGVydHlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAyIEp1bHkgMjAxNCBhbmQgMSBKYW51YXJ5IDIwMTU/XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZShuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgbmV3IERhdGUoMjAxNSwgMCwgMSkpXG4gKiAvLz0+ICc2IG1vbnRocydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAxIEphbnVhcnkgMjAxNSAwMDowMDoxNVxuICogLy8gYW5kIDEgSmFudWFyeSAyMDE1IDAwOjAwOjAwLCBpbmNsdWRpbmcgc2Vjb25kcz9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlKFxuICogICBuZXcgRGF0ZSgyMDE1LCAwLCAxLCAwLCAwLCAxNSksXG4gKiAgIG5ldyBEYXRlKDIwMTUsIDAsIDEsIDAsIDAsIDApLFxuICogICB7IGluY2x1ZGVTZWNvbmRzOiB0cnVlIH1cbiAqIClcbiAqIC8vPT4gJ2xlc3MgdGhhbiAyMCBzZWNvbmRzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBmcm9tIDEgSmFudWFyeSAyMDE2XG4gKiAvLyB0byAxIEphbnVhcnkgMjAxNSwgd2l0aCBhIHN1ZmZpeD9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlKG5ldyBEYXRlKDIwMTUsIDAsIDEpLCBuZXcgRGF0ZSgyMDE2LCAwLCAxKSwge1xuICogICBhZGRTdWZmaXg6IHRydWVcbiAqIH0pXG4gKiAvLz0+ICdhYm91dCAxIHllYXIgYWdvJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDEgQXVndXN0IDIwMTYgYW5kIDEgSmFudWFyeSAyMDE1IGluIEVzcGVyYW50bz9cbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2UobmV3IERhdGUoMjAxNiwgNywgMSksIG5ldyBEYXRlKDIwMTUsIDAsIDEpLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICdwbGkgb2wgMSBqYXJvJ1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKGRpcnR5RGF0ZSwgZGlydHlCYXNlRGF0ZSkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUgfHwgZGVmYXVsdExvY2FsZTtcblxuICBpZiAoIWxvY2FsZS5mb3JtYXREaXN0YW5jZSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGZvcm1hdERpc3RhbmNlIHByb3BlcnR5Jyk7XG4gIH1cblxuICB2YXIgY29tcGFyaXNvbiA9IGNvbXBhcmVBc2MoZGlydHlEYXRlLCBkaXJ0eUJhc2VEYXRlKTtcblxuICBpZiAoaXNOYU4oY29tcGFyaXNvbikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0aW1lIHZhbHVlJyk7XG4gIH1cblxuICB2YXIgbG9jYWxpemVPcHRpb25zID0gY2xvbmVPYmplY3Qob3B0aW9ucyk7XG4gIGxvY2FsaXplT3B0aW9ucy5hZGRTdWZmaXggPSBCb29sZWFuKG9wdGlvbnMuYWRkU3VmZml4KTtcbiAgbG9jYWxpemVPcHRpb25zLmNvbXBhcmlzb24gPSBjb21wYXJpc29uO1xuICB2YXIgZGF0ZUxlZnQ7XG4gIHZhciBkYXRlUmlnaHQ7XG5cbiAgaWYgKGNvbXBhcmlzb24gPiAwKSB7XG4gICAgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlCYXNlRGF0ZSk7XG4gICAgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIH0gZWxzZSB7XG4gICAgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgICBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlCYXNlRGF0ZSk7XG4gIH1cblxuICB2YXIgc2Vjb25kcyA9IGRpZmZlcmVuY2VJblNlY29uZHMoZGF0ZVJpZ2h0LCBkYXRlTGVmdCk7XG4gIHZhciBvZmZzZXRJblNlY29uZHMgPSAoZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlUmlnaHQpIC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlTGVmdCkpIC8gMTAwMDtcbiAgdmFyIG1pbnV0ZXMgPSBNYXRoLnJvdW5kKChzZWNvbmRzIC0gb2Zmc2V0SW5TZWNvbmRzKSAvIDYwKTtcbiAgdmFyIG1vbnRoczsgLy8gMCB1cCB0byAyIG1pbnNcblxuICBpZiAobWludXRlcyA8IDIpIHtcbiAgICBpZiAob3B0aW9ucy5pbmNsdWRlU2Vjb25kcykge1xuICAgICAgaWYgKHNlY29uZHMgPCA1KSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2xlc3NUaGFuWFNlY29uZHMnLCA1LCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgMTApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YU2Vjb25kcycsIDEwLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgMjApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YU2Vjb25kcycsIDIwLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgNDApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnaGFsZkFNaW51dGUnLCBudWxsLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgNjApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YTWludXRlcycsIDEsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4TWludXRlcycsIDEsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2xlc3NUaGFuWE1pbnV0ZXMnLCAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneE1pbnV0ZXMnLCBtaW51dGVzLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0gLy8gMiBtaW5zIHVwIHRvIDAuNzUgaHJzXG5cbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgNDUpIHtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4TWludXRlcycsIG1pbnV0ZXMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDAuNzUgaHJzIHVwIHRvIDEuNSBocnNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgOTApIHtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhYm91dFhIb3VycycsIDEsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEuNSBocnMgdXAgdG8gMjQgaHJzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IE1JTlVURVNfSU5fREFZKSB7XG4gICAgdmFyIGhvdXJzID0gTWF0aC5yb3VuZChtaW51dGVzIC8gNjApO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2Fib3V0WEhvdXJzJywgaG91cnMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEgZGF5IHVwIHRvIDEuNzUgZGF5c1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBNSU5VVEVTX0lOX0FMTU9TVF9UV09fREFZUykge1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hEYXlzJywgMSwgbG9jYWxpemVPcHRpb25zKTsgLy8gMS43NSBkYXlzIHVwIHRvIDMwIGRheXNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgTUlOVVRFU19JTl9NT05USCkge1xuICAgIHZhciBkYXlzID0gTWF0aC5yb3VuZChtaW51dGVzIC8gTUlOVVRFU19JTl9EQVkpO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hEYXlzJywgZGF5cywgbG9jYWxpemVPcHRpb25zKTsgLy8gMSBtb250aCB1cCB0byAyIG1vbnRoc1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBNSU5VVEVTX0lOX1RXT19NT05USFMpIHtcbiAgICBtb250aHMgPSBNYXRoLnJvdW5kKG1pbnV0ZXMgLyBNSU5VVEVTX0lOX01PTlRIKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhYm91dFhNb250aHMnLCBtb250aHMsIGxvY2FsaXplT3B0aW9ucyk7XG4gIH1cblxuICBtb250aHMgPSBkaWZmZXJlbmNlSW5Nb250aHMoZGF0ZVJpZ2h0LCBkYXRlTGVmdCk7IC8vIDIgbW9udGhzIHVwIHRvIDEyIG1vbnRoc1xuXG4gIGlmIChtb250aHMgPCAxMikge1xuICAgIHZhciBuZWFyZXN0TW9udGggPSBNYXRoLnJvdW5kKG1pbnV0ZXMgLyBNSU5VVEVTX0lOX01PTlRIKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4TW9udGhzJywgbmVhcmVzdE1vbnRoLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAxIHllYXIgdXAgdG8gbWF4IERhdGVcbiAgfSBlbHNlIHtcbiAgICB2YXIgbW9udGhzU2luY2VTdGFydE9mWWVhciA9IG1vbnRocyAlIDEyO1xuICAgIHZhciB5ZWFycyA9IE1hdGguZmxvb3IobW9udGhzIC8gMTIpOyAvLyBOIHllYXJzIHVwIHRvIDEgeWVhcnMgMyBtb250aHNcblxuICAgIGlmIChtb250aHNTaW5jZVN0YXJ0T2ZZZWFyIDwgMykge1xuICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnYWJvdXRYWWVhcnMnLCB5ZWFycywgbG9jYWxpemVPcHRpb25zKTsgLy8gTiB5ZWFycyAzIG1vbnRocyB1cCB0byBOIHllYXJzIDkgbW9udGhzXG4gICAgfSBlbHNlIGlmIChtb250aHNTaW5jZVN0YXJ0T2ZZZWFyIDwgOSkge1xuICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnb3ZlclhZZWFycycsIHllYXJzLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyBOIHllYXJzIDkgbW9udGhzIHVwIHRvIE4geWVhciAxMiBtb250aHNcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnYWxtb3N0WFllYXJzJywgeWVhcnMgKyAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgIH1cbiAgfVxufSIsImltcG9ydCBpc1ZhbGlkIGZyb20gXCIuLi9pc1ZhbGlkL2luZGV4LmpzXCI7XG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vbG9jYWxlL2VuLVVTL2luZGV4LmpzXCI7XG5pbXBvcnQgc3ViTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9zdWJNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBsb25nRm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB7IGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4sIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbiwgdGhyb3dQcm90ZWN0ZWRFcnJvciB9IGZyb20gXCIuLi9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgUmVnRXhwIGNvbnNpc3RzIG9mIHRocmVlIHBhcnRzIHNlcGFyYXRlZCBieSBgfGA6XG4vLyAtIFt5WVFxTUx3SWREZWNpaEhLa21zXW8gbWF0Y2hlcyBhbnkgYXZhaWxhYmxlIG9yZGluYWwgbnVtYmVyIHRva2VuXG4vLyAgIChvbmUgb2YgdGhlIGNlcnRhaW4gbGV0dGVycyBmb2xsb3dlZCBieSBgb2ApXG4vLyAtIChcXHcpXFwxKiBtYXRjaGVzIGFueSBzZXF1ZW5jZXMgb2YgdGhlIHNhbWUgbGV0dGVyXG4vLyAtICcnIG1hdGNoZXMgdHdvIHF1b3RlIGNoYXJhY3RlcnMgaW4gYSByb3dcbi8vIC0gJygnJ3xbXiddKSsoJ3wkKSBtYXRjaGVzIGFueXRoaW5nIHN1cnJvdW5kZWQgYnkgdHdvIHF1b3RlIGNoYXJhY3RlcnMgKCcpLFxuLy8gICBleGNlcHQgYSBzaW5nbGUgcXVvdGUgc3ltYm9sLCB3aGljaCBlbmRzIHRoZSBzZXF1ZW5jZS5cbi8vICAgVHdvIHF1b3RlIGNoYXJhY3RlcnMgZG8gbm90IGVuZCB0aGUgc2VxdWVuY2UuXG4vLyAgIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nIHNpbmdsZSBxdW90ZVxuLy8gICB0aGVuIHRoZSBzZXF1ZW5jZSB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZSBlbmQgb2YgdGhlIHN0cmluZy5cbi8vIC0gLiBtYXRjaGVzIGFueSBzaW5nbGUgY2hhcmFjdGVyIHVubWF0Y2hlZCBieSBwcmV2aW91cyBwYXJ0cyBvZiB0aGUgUmVnRXhwc1xuXG52YXIgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9beVlRcU1Md0lkRGVjaWhIS2ttc11vfChcXHcpXFwxKnwnJ3wnKCcnfFteJ10pKygnfCQpfC4vZzsgLy8gVGhpcyBSZWdFeHAgY2F0Y2hlcyBzeW1ib2xzIGVzY2FwZWQgYnkgcXVvdGVzLCBhbmQgYWxzb1xuLy8gc2VxdWVuY2VzIG9mIHN5bWJvbHMgUCwgcCwgYW5kIHRoZSBjb21iaW5hdGlvbnMgbGlrZSBgUFBQUFBQUHBwcHBwYFxuXG52YXIgbG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvUCtwK3xQK3xwK3wnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcbnZhciBlc2NhcGVkU3RyaW5nUmVnRXhwID0gL14nKFteXSo/KSc/JC87XG52YXIgZG91YmxlUXVvdGVSZWdFeHAgPSAvJycvZztcbnZhciB1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCA9IC9bYS16QS1aXS87XG4vKipcbiAqIEBuYW1lIGZvcm1hdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBGb3JtYXQgdGhlIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyBpbiB0aGUgZ2l2ZW4gZm9ybWF0LiBUaGUgcmVzdWx0IG1heSB2YXJ5IGJ5IGxvY2FsZS5cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBgZm9ybWF0YCB0b2tlbnMgZGlmZmVyIGZyb20gTW9tZW50LmpzIGFuZCBvdGhlciBsaWJyYXJpZXMuXG4gKiA+IFNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyB3cmFwcGVkIGJldHdlZW4gdHdvIHNpbmdsZSBxdW90ZXMgY2hhcmFjdGVycyAoJykgYXJlIGVzY2FwZWQuXG4gKiBUd28gc2luZ2xlIHF1b3RlcyBpbiBhIHJvdywgd2hldGhlciBpbnNpZGUgb3Igb3V0c2lkZSBhIHF1b3RlZCBzZXF1ZW5jZSwgcmVwcmVzZW50IGEgJ3JlYWwnIHNpbmdsZSBxdW90ZS5cbiAqIChzZWUgdGhlIGxhc3QgZXhhbXBsZSlcbiAqXG4gKiBGb3JtYXQgb2YgdGhlIHN0cmluZyBpcyBiYXNlZCBvbiBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiBodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlXG4gKiB3aXRoIGEgZmV3IGFkZGl0aW9ucyAoc2VlIG5vdGUgNyBiZWxvdyB0aGUgdGFibGUpLlxuICpcbiAqIEFjY2VwdGVkIHBhdHRlcm5zOlxuICogfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUGF0dGVybiB8IFJlc3VsdCBleGFtcGxlcyAgICAgICAgICAgICAgICAgICB8IE5vdGVzIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS18XG4gKiB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHLi5HR0cgIHwgQUQsIEJDICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHRyAgICB8IEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0dHICAgfCBBLCBCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IENhbGVuZGFyIHllYXIgICAgICAgICAgICAgICAgICAgfCB5ICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeW8gICAgICB8IDQ0dGgsIDFzdCwgMHRoLCAxN3RoICAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5ICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXl5ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgfCBZICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCAyMDE3dGggICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVlZICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICAgfCBSICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlIgICAgICB8IC00MywgMDAsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUiAgICAgfCAtMDQzLCAwMDAsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSICAgIHwgLTAwNDMsIDAwMDAsIDAwMDEsIDE5MDAsIDIwMTcgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUlIgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSw3IHxcbiAqIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgICB8IHUgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dSAgICAgIHwgLTQzLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1ICAgICB8IC0wNDMsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXUgICAgfCAtMDA0MywgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1dSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBRdWFydGVyIChmb3JtYXR0aW5nKSAgICAgICAgICAgIHwgUSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRUSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBRdWFydGVyIChzdGFuZC1hbG9uZSkgICAgICAgICAgIHwgcSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxcSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBNb250aCAoZm9ybWF0dGluZykgICAgICAgICAgICAgIHwgTSAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1vICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTSAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU0gICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NTSAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNb250aCAoc3RhbmQtYWxvbmUpICAgICAgICAgICAgIHwgTCAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTCAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTEwgICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMTCAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgIHwgdyAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHdvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3dyAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgIHwgSSAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJSSAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgIHwgZCAgICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZCAgICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgIHwgRCAgICAgICB8IDEsIDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzNjV0aCwgMzY2dGggICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBERCAgICAgIHwgMDEsIDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREREICAgICB8IDAwMSwgMDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREREQgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IERheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICAgICAgfCBFLi5FRUUgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRUUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTdSwgU2EgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgIHwgaSAgICAgICB8IDEsIDIsIDMsIC4uLiwgNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA3dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaSAgICAgIHwgMDEsIDAyLCAuLi4sIDA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWkgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyLDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWlpICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU3UsIFNhICAgICAgICB8IDcgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICB8IGUgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWUgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlZSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFN1LCBTYSAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChzdGFuZC1hbG9uZSkgfCBjICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY28gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2MgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjYyAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjY2MgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTdSwgU2EgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgYS4uYWEgICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYSAgICAgfCBhbSwgcG0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYWEgICB8IGEsIHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICB8IGIuLmJiICAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmIgICAgIHwgYW0sIHBtLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYiAgICB8IGEubS4sIHAubS4sIG5vb24sIG1pZG5pZ2h0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmJiICAgfCBhLCBwLCBuLCBtaSAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICAgfCBCLi5CQkIgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQiAgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkJCICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICAgfCBoICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDEydGggICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhoICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICAgfCBIICAgICAgIHwgMCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSG8gICAgICB8IDB0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhIICAgICAgfCAwMCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICAgfCBLICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMCAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDB0aCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtLICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICAgfCBrICAgICAgIHwgMjQsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga28gICAgICB8IDI0dGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtrICAgICAgfCAyNCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW8gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1tICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc28gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNzICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1MgICAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTUyAgICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy8gWikgICAgICAgIHwgWCAgICAgICB8IC0wOCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYICAgICAgfCAtMDgwMCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFggICAgIHwgLTA4OjAwLCArMDU6MzAsIFogICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWCAgICB8IC0wODAwLCArMDUzMCwgWiwgKzEyMzQ1NiAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFhYICAgfCAtMDg6MDAsICswNTozMCwgWiwgKzEyOjM0OjU2ICAgICAgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICAgfCB4ICAgICAgIHwgLTA4LCArMDUzMCwgKzAwICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHggICAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eCAgICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4ICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCwgKzEyMzQ1NiAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eHggICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAsICsxMjozNDo1NiB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgICB8IE8uLi5PT08gfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBPT09PICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiAgICAgfFxuICogfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgIHwgei4uLnp6eiB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8IDYgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHp6enogICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyLDYgICB8XG4gKiB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICAgfCB0ICAgICAgIHwgNTEyOTY5NTIwICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdHQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICB8IFQgICAgICAgfCA1MTI5Njk1MjA5MDAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBUVCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgIHwgUCAgICAgICB8IDA0LzI5LzE0NTMgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQICAgICAgfCBBcHIgMjksIDE0NTMgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFAgICAgIHwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUCAgICB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgICB8IHAgICAgICAgfCAxMjowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcCAgICAgIHwgMTI6MDA6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwICAgICB8IDEyOjAwOjAwIEFNIEdNVCsyICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcHAgICAgfCAxMjowMDowMCBBTSBHTVQrMDI6MDAgICAgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IENvbWJpbmF0aW9uIG9mIGRhdGUgYW5kIHRpbWUgICAgfCBQcCAgICAgIHwgMDQvMjkvMTQ1MywgMTI6MDAgQU0gICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBwcCAgICB8IEFwciAyOSwgMTQ1MywgMTI6MDA6MDAgQU0gICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUHBwcCAgfCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQcHBwcHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgIHwgMiw3ICAgfFxuICogTm90ZXM6XG4gKiAxLiBcIkZvcm1hdHRpbmdcIiB1bml0cyAoZS5nLiBmb3JtYXR0aW5nIHF1YXJ0ZXIpIGluIHRoZSBkZWZhdWx0IGVuLVVTIGxvY2FsZVxuICogICAgYXJlIHRoZSBzYW1lIGFzIFwic3RhbmQtYWxvbmVcIiB1bml0cywgYnV0IGFyZSBkaWZmZXJlbnQgaW4gc29tZSBsYW5ndWFnZXMuXG4gKiAgICBcIkZvcm1hdHRpbmdcIiB1bml0cyBhcmUgZGVjbGluZWQgYWNjb3JkaW5nIHRvIHRoZSBydWxlcyBvZiB0aGUgbGFuZ3VhZ2VcbiAqICAgIGluIHRoZSBjb250ZXh0IG9mIGEgZGF0ZS4gXCJTdGFuZC1hbG9uZVwiIHVuaXRzIGFyZSBhbHdheXMgbm9taW5hdGl2ZSBzaW5ndWxhcjpcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIExMTEwnLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIE1NTU0nLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkdSdgXG4gKlxuICogMi4gQW55IHNlcXVlbmNlIG9mIHRoZSBpZGVudGljYWwgbGV0dGVycyBpcyBhIHBhdHRlcm4sIHVubGVzcyBpdCBpcyBlc2NhcGVkIGJ5XG4gKiAgICB0aGUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgKHNlZSBiZWxvdykuXG4gKiAgICBJZiB0aGUgc2VxdWVuY2UgaXMgbG9uZ2VyIHRoYW4gbGlzdGVkIGluIHRhYmxlIChlLmcuIGBFRUVFRUVFRUVFRWApXG4gKiAgICB0aGUgb3V0cHV0IHdpbGwgYmUgdGhlIHNhbWUgYXMgZGVmYXVsdCBwYXR0ZXJuIGZvciB0aGlzIHVuaXQsIHVzdWFsbHlcbiAqICAgIHRoZSBsb25nZXN0IG9uZSAoaW4gY2FzZSBvZiBJU08gd2Vla2RheXMsIGBFRUVFYCkuIERlZmF1bHQgcGF0dGVybnMgZm9yIHVuaXRzXG4gKiAgICBhcmUgbWFya2VkIHdpdGggXCIyXCIgaW4gdGhlIGxhc3QgY29sdW1uIG9mIHRoZSB0YWJsZS5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTScpIC8vPT4gJ05vdidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU0nKSAvLz0+ICdOJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogMy4gU29tZSBwYXR0ZXJucyBjb3VsZCBiZSB1bmxpbWl0ZWQgbGVuZ3RoIChzdWNoIGFzIGB5eXl5eXl5eWApLlxuICogICAgVGhlIG91dHB1dCB3aWxsIGJlIHBhZGRlZCB3aXRoIHplcm9zIHRvIG1hdGNoIHRoZSBsZW5ndGggb2YgdGhlIHBhdHRlcm4uXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICd5eXl5eXl5eScpIC8vPT4gJzAwMDAyMDE3J2BcbiAqXG4gKiA0LiBgUVFRUVFgIGFuZCBgcXFxcXFgIGNvdWxkIGJlIG5vdCBzdHJpY3RseSBudW1lcmljYWwgaW4gc29tZSBsb2NhbGVzLlxuICogICAgVGhlc2UgdG9rZW5zIHJlcHJlc2VudCB0aGUgc2hvcnRlc3QgZm9ybSBvZiB0aGUgcXVhcnRlci5cbiAqXG4gKiA1LiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgcGF0dGVybnMgYXJlIEIuQy4geWVhcnM6XG4gKlxuICogICAgfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS18LS0tLS18XG4gKiAgICB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICogICAgfCBCQyAxIHwgICAxIHwgICAwIHxcbiAqICAgIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gKlxuICogICAgQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICogICAgd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkOlxuICpcbiAqICAgIHwgWWVhciB8IGB5eWAgfCBgdXVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS0tfC0tLS0tLXxcbiAqICAgIHwgMSAgICB8ICAgMDEgfCAgIDAxIHxcbiAqICAgIHwgMTQgICB8ICAgMTQgfCAgIDE0IHxcbiAqICAgIHwgMzc2ICB8ICAgNzYgfCAgMzc2IHxcbiAqICAgIHwgMTQ1MyB8ICAgNTMgfCAxNDUzIHxcbiAqXG4gKiAgICBUaGUgc2FtZSBkaWZmZXJlbmNlIGlzIHRydWUgZm9yIGxvY2FsIGFuZCBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgKGBZYCBhbmQgYFJgKSxcbiAqICAgIGV4Y2VwdCBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFycyBhcmUgZGVwZW5kZW50IG9uIGBvcHRpb25zLndlZWtTdGFydHNPbmBcbiAqICAgIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIChjb21wYXJlIFtnZXRJU09XZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRJU09XZWVrWWVhcn1cbiAqICAgIGFuZCBbZ2V0V2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0V2Vla1llYXJ9KS5cbiAqXG4gKiA2LiBTcGVjaWZpYyBub24tbG9jYXRpb24gdGltZXpvbmVzIGFyZSBjdXJyZW50bHkgdW5hdmFpbGFibGUgaW4gYGRhdGUtZm5zYCxcbiAqICAgIHNvIHJpZ2h0IG5vdyB0aGVzZSB0b2tlbnMgZmFsbCBiYWNrIHRvIEdNVCB0aW1lem9uZXMuXG4gKlxuICogNy4gVGhlc2UgcGF0dGVybnMgYXJlIG5vdCBpbiB0aGUgVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogICAgLSBgaWA6IElTTyBkYXkgb2Ygd2Vla1xuICogICAgLSBgSWA6IElTTyB3ZWVrIG9mIHllYXJcbiAqICAgIC0gYFJgOiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICogICAgLSBgdGA6IHNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBUYDogbWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgb2A6IG9yZGluYWwgbnVtYmVyIG1vZGlmaWVyXG4gKiAgICAtIGBQYDogbG9uZyBsb2NhbGl6ZWQgZGF0ZVxuICogICAgLSBgcGA6IGxvbmcgbG9jYWxpemVkIHRpbWVcbiAqXG4gKiA4LiBgWVlgIGFuZCBgWVlZWWAgdG9rZW5zIHJlcHJlc2VudCB3ZWVrLW51bWJlcmluZyB5ZWFycyBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCB5ZWFycy5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqXG4gKiA5LiBgRGAgYW5kIGBERGAgdG9rZW5zIHJlcHJlc2VudCBkYXlzIG9mIHRoZSB5ZWFyIGJ1dCB0aGV5IGFyZSBvZnRoZW4gY29uZnVzZWQgd2l0aCBkYXlzIG9mIHRoZSBtb250aC5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiAtIFRoZSBzZWNvbmQgYXJndW1lbnQgaXMgbm93IHJlcXVpcmVkIGZvciB0aGUgc2FrZSBvZiBleHBsaWNpdG5lc3MuXG4gKlxuICogICBgYGBqYXZhc2NyaXB0XG4gKiAgIC8vIEJlZm9yZSB2Mi4wLjBcbiAqICAgZm9ybWF0KG5ldyBEYXRlKDIwMTYsIDAsIDEpKVxuICpcbiAqICAgLy8gdjIuMC4wIG9ud2FyZFxuICogICBmb3JtYXQobmV3IERhdGUoMjAxNiwgMCwgMSksIFwieXl5eS1NTS1kZCdUJ0hIOm1tOnNzLlNTU3h4eFwiKVxuICogICBgYGBcbiAqXG4gKiAtIE5ldyBmb3JtYXQgc3RyaW5nIEFQSSBmb3IgYGZvcm1hdGAgZnVuY3Rpb25cbiAqICAgd2hpY2ggaXMgYmFzZWQgb24gW1VuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNV0oaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZSkuXG4gKiAgIFNlZSBbdGhpcyBwb3N0XShodHRwczovL2Jsb2cuZGF0ZS1mbnMub3JnL3Bvc3QvdW5pY29kZS10b2tlbnMtaW4tZGF0ZS1mbnMtdjItc3JlYXR5a2k5MWpnKSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqIC0gQ2hhcmFjdGVycyBhcmUgbm93IGVzY2FwZWQgdXNpbmcgc2luZ2xlIHF1b3RlIHN5bWJvbHMgKGAnYCkgaW5zdGVhZCBvZiBzcXVhcmUgYnJhY2tldHMuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gZm9ybWF0IC0gdGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZT0xXSAtIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhciB0b2tlbnMgYFlZYCBhbmQgYFlZWVlgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSBkYXkgb2YgeWVhciB0b2tlbnMgYERgIGFuZCBgRERgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgbG9jYWxpemVgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0TG9uZ2AgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDdcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkYCBpbnN0ZWFkIG9mIGBEYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBmb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDExIEZlYnJ1YXJ5IDIwMTQgaW4gbWlkZGxlLWVuZGlhbiBmb3JtYXQ6XG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDEsIDExKSwgJ01NL2RkL3l5eXknKVxuICogLy89PiAnMDIvMTEvMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDIgSnVseSAyMDE0IGluIEVzcGVyYW50bzpcbiAqIGltcG9ydCB7IGVvTG9jYWxlIH0gZnJvbSAnZGF0ZS1mbnMvbG9jYWxlL2VvJ1xuICogdmFyIHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgXCJkbyAnZGUnIE1NTU0geXl5eVwiLCB7XG4gKiAgIGxvY2FsZTogZW9Mb2NhbGVcbiAqIH0pXG4gKiAvLz0+ICcyLWEgZGUganVsaW8gMjAxNCdcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRXNjYXBlIHN0cmluZyBieSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyczpcbiAqIHZhciByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiwgMTUpLCBcImggJ28nJ2Nsb2NrJ1wiKVxuICogLy89PiBcIjMgbydjbG9ja1wiXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0KGRpcnR5RGF0ZSwgZGlydHlGb3JtYXRTdHIsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGZvcm1hdFN0ciA9IFN0cmluZyhkaXJ0eUZvcm1hdFN0cik7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGUgfHwgZGVmYXVsdExvY2FsZTtcbiAgdmFyIGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZTtcbiAgdmFyIGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IDEgOiB0b0ludGVnZXIobG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlIDogdG9JbnRlZ2VyKG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgbG9jYWxlV2Vla1N0YXJ0c09uID0gbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMud2Vla1N0YXJ0c09uO1xuICB2YXIgZGVmYXVsdFdlZWtTdGFydHNPbiA9IGxvY2FsZVdlZWtTdGFydHNPbiA9PSBudWxsID8gMCA6IHRvSW50ZWdlcihsb2NhbGVXZWVrU3RhcnRzT24pO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gb3B0aW9ucy53ZWVrU3RhcnRzT24gPT0gbnVsbCA/IGRlZmF1bHRXZWVrU3RhcnRzT24gOiB0b0ludGVnZXIob3B0aW9ucy53ZWVrU3RhcnRzT24pOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIGlmICghbG9jYWxlLmxvY2FsaXplKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gbG9jYWxpemUgcHJvcGVydHknKTtcbiAgfVxuXG4gIGlmICghbG9jYWxlLmZvcm1hdExvbmcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBmb3JtYXRMb25nIHByb3BlcnR5Jyk7XG4gIH1cblxuICB2YXIgb3JpZ2luYWxEYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG5cbiAgaWYgKCFpc1ZhbGlkKG9yaWdpbmFsRGF0ZSkpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCB0aW1lIHZhbHVlJyk7XG4gIH0gLy8gQ29udmVydCB0aGUgZGF0ZSBpbiBzeXN0ZW0gdGltZXpvbmUgdG8gdGhlIHNhbWUgZGF0ZSBpbiBVVEMrMDA6MDAgdGltZXpvbmUuXG4gIC8vIFRoaXMgZW5zdXJlcyB0aGF0IHdoZW4gVVRDIGZ1bmN0aW9ucyB3aWxsIGJlIGltcGxlbWVudGVkLCBsb2NhbGVzIHdpbGwgYmUgY29tcGF0aWJsZSB3aXRoIHRoZW0uXG4gIC8vIFNlZSBhbiBpc3N1ZSBhYm91dCBVVEMgZnVuY3Rpb25zOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5cbiAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUpO1xuICB2YXIgdXRjRGF0ZSA9IHN1Yk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUsIHRpbWV6b25lT2Zmc2V0KTtcbiAgdmFyIGZvcm1hdHRlck9wdGlvbnMgPSB7XG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiBmaXJzdFdlZWtDb250YWluc0RhdGUsXG4gICAgd2Vla1N0YXJ0c09uOiB3ZWVrU3RhcnRzT24sXG4gICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgX29yaWdpbmFsRGF0ZTogb3JpZ2luYWxEYXRlXG4gIH07XG4gIHZhciByZXN1bHQgPSBmb3JtYXRTdHIubWF0Y2gobG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSAncCcgfHwgZmlyc3RDaGFyYWN0ZXIgPT09ICdQJykge1xuICAgICAgdmFyIGxvbmdGb3JtYXR0ZXIgPSBsb25nRm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG4gICAgICByZXR1cm4gbG9uZ0Zvcm1hdHRlcihzdWJzdHJpbmcsIGxvY2FsZS5mb3JtYXRMb25nLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKS5tYXRjaChmb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIC8vIFJlcGxhY2UgdHdvIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIHdpdGggb25lIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJcbiAgICBpZiAoc3Vic3RyaW5nID09PSBcIicnXCIpIHtcbiAgICAgIHJldHVybiBcIidcIjtcbiAgICB9XG5cbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09IFwiJ1wiKSB7XG4gICAgICByZXR1cm4gY2xlYW5Fc2NhcGVkU3RyaW5nKHN1YnN0cmluZyk7XG4gICAgfVxuXG4gICAgdmFyIGZvcm1hdHRlciA9IGZvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuXG4gICAgaWYgKGZvcm1hdHRlcikge1xuICAgICAgaWYgKCFvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2VucyAmJiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIGRpcnR5RGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zICYmIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4oc3Vic3RyaW5nKSkge1xuICAgICAgICB0aHJvd1Byb3RlY3RlZEVycm9yKHN1YnN0cmluZywgZGlydHlGb3JtYXRTdHIsIGRpcnR5RGF0ZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmb3JtYXR0ZXIodXRjRGF0ZSwgc3Vic3RyaW5nLCBsb2NhbGUubG9jYWxpemUsIGZvcm1hdHRlck9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmIChmaXJzdENoYXJhY3Rlci5tYXRjaCh1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCkpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdGb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXIgYCcgKyBmaXJzdENoYXJhY3RlciArICdgJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJyk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGNsZWFuRXNjYXBlZFN0cmluZyhpbnB1dCkge1xuICByZXR1cm4gaW5wdXQubWF0Y2goZXNjYXBlZFN0cmluZ1JlZ0V4cClbMV0ucmVwbGFjZShkb3VibGVRdW90ZVJlZ0V4cCwgXCInXCIpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGVuZE9mRGF5IGZyb20gXCIuLi9lbmRPZkRheS9pbmRleC5qc1wiO1xuaW1wb3J0IGVuZE9mTW9udGggZnJvbSBcIi4uL2VuZE9mTW9udGgvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzTGFzdERheU9mTW9udGhcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0aGUgbGFzdCBkYXkgb2YgYSBtb250aD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRoZSBsYXN0IGRheSBvZiBhIG1vbnRoP1xuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdGhlIGxhc3QgZGF5IG9mIGEgbW9udGhcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJcyAyOCBGZWJydWFyeSAyMDE0IHRoZSBsYXN0IGRheSBvZiBhIG1vbnRoP1xuICogdmFyIHJlc3VsdCA9IGlzTGFzdERheU9mTW9udGgobmV3IERhdGUoMjAxNCwgMSwgMjgpKVxuICogLy89PiB0cnVlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNMYXN0RGF5T2ZNb250aChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHJldHVybiBlbmRPZkRheShkYXRlKS5nZXRUaW1lKCkgPT09IGVuZE9mTW9udGgoZGF0ZSkuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNWYWxpZFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB2YWxpZD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgZmFsc2UgaWYgYXJndW1lbnQgaXMgSW52YWxpZCBEYXRlIGFuZCB0cnVlIG90aGVyd2lzZS5cbiAqIEFyZ3VtZW50IGlzIGNvbnZlcnRlZCB0byBEYXRlIHVzaW5nIGB0b0RhdGVgLiBTZWUgW3RvRGF0ZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy90b0RhdGV9XG4gKiBJbnZhbGlkIERhdGUgaXMgYSBEYXRlLCB3aG9zZSB0aW1lIHZhbHVlIGlzIE5hTi5cbiAqXG4gKiBUaW1lIHZhbHVlIG9mIERhdGU6IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuOS4xLjFcbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIC0gTm93IGBpc1ZhbGlkYCBkb2Vzbid0IHRocm93IGFuIGV4Y2VwdGlvblxuICogICBpZiB0aGUgZmlyc3QgYXJndW1lbnQgaXMgbm90IGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKiAgIEluc3RlYWQsIGFyZ3VtZW50IGlzIGNvbnZlcnRlZCBiZWZvcmVoYW5kIHVzaW5nIGB0b0RhdGVgLlxuICpcbiAqICAgRXhhbXBsZXM6XG4gKlxuICogICB8IGBpc1ZhbGlkYCBhcmd1bWVudCAgICAgICAgfCBCZWZvcmUgdjIuMC4wIHwgdjIuMC4wIG9ud2FyZCB8XG4gKiAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLXxcbiAqICAgfCBgbmV3IERhdGUoKWAgICAgICAgICAgICAgIHwgYHRydWVgICAgICAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZSgnMjAxNi0wMS0wMScpYCAgfCBgdHJ1ZWAgICAgICAgIHwgYHRydWVgICAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKCcnKWAgICAgICAgICAgICB8IGBmYWxzZWAgICAgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoMTQ4ODM3MDgzNTA4MSlgIHwgYHRydWVgICAgICAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZShOYU4pYCAgICAgICAgICAgfCBgZmFsc2VgICAgICAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYCcyMDE2LTAxLTAxJ2AgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgJydgICAgICAgICAgICAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGAxNDg4MzcwODM1MDgxYCAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYHRydWVgICAgICAgICB8XG4gKiAgIHwgYE5hTmAgICAgICAgICAgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqXG4gKiAgIFdlIGludHJvZHVjZSB0aGlzIGNoYW5nZSB0byBtYWtlICpkYXRlLWZucyogY29uc2lzdGVudCB3aXRoIEVDTUFTY3JpcHQgYmVoYXZpb3JcbiAqICAgdGhhdCB0cnkgdG8gY29lcmNlIGFyZ3VtZW50cyB0byB0aGUgZXhwZWN0ZWQgdHlwZVxuICogICAod2hpY2ggaXMgYWxzbyB0aGUgY2FzZSB3aXRoIG90aGVyICpkYXRlLWZucyogZnVuY3Rpb25zKS5cbiAqXG4gKiBAcGFyYW0geyp9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHZhbGlkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWxpZCBkYXRlOlxuICogdmFyIHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoMjAxNCwgMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsdWUsIGNvbnZlcnRhYmxlIGludG8gYSBkYXRlOlxuICogdmFyIHJlc3VsdCA9IGlzVmFsaWQoMTM5MzgwNDgwMDAwMClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGludmFsaWQgZGF0ZTpcbiAqIHZhciByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKCcnKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1ZhbGlkKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgcmV0dXJuICFpc05hTihkYXRlKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZEZvcm1hdExvbmdGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlPcHRpb25zKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIHZhciBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5SW5kZXgsIGRpcnR5T3B0aW9ucykge1xuICAgIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICAgIHZhciBjb250ZXh0ID0gb3B0aW9ucy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiAnc3RhbmRhbG9uZSc7XG4gICAgdmFyIHZhbHVlc0FycmF5O1xuXG4gICAgaWYgKGNvbnRleHQgPT09ICdmb3JtYXR0aW5nJyAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIHZhciBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2RlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YXIgX3dpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW193aWR0aF0gfHwgYXJncy52YWx1ZXNbX2RlZmF1bHRXaWR0aF07XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKGRpcnR5SW5kZXgpIDogZGlydHlJbmRleDtcbiAgICByZXR1cm4gdmFsdWVzQXJyYXlbaW5kZXhdO1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlTdHJpbmcsIGRpcnR5T3B0aW9ucykge1xuICAgIHZhciBzdHJpbmcgPSBTdHJpbmcoZGlydHlTdHJpbmcpO1xuICAgIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGg7XG4gICAgdmFyIG1hdGNoUGF0dGVybiA9IHdpZHRoICYmIGFyZ3MubWF0Y2hQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5tYXRjaFBhdHRlcm5zW2FyZ3MuZGVmYXVsdE1hdGNoV2lkdGhdO1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChtYXRjaFBhdHRlcm4pO1xuXG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VQYXR0ZXJucyA9IHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuICAgIHZhciB2YWx1ZTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwocGFyc2VQYXR0ZXJucykgPT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHZhbHVlID0gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKVxuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcmVkaWNhdGUob2JqZWN0W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eVN0cmluZywgZGlydHlPcHRpb25zKSB7XG4gICAgdmFyIHN0cmluZyA9IFN0cmluZyhkaXJ0eVN0cmluZyk7XG4gICAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MubWF0Y2hQYXR0ZXJuKTtcblxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MucGFyc2VQYXR0ZXJuKTtcblxuICAgIGlmICghcGFyc2VSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhwYXJzZVJlc3VsdFswXSkgOiBwYXJzZVJlc3VsdFswXTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKVxuICAgIH07XG4gIH07XG59IiwidmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIHNlY29uZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdoYWxmIGEgbWludXRlJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIG1pbnV0ZScsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBtaW51dGUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBob3VyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSBob3VyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGRheScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGF5cydcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdhYm91dCAxIHdlZWsnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxIHdlZWsnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICdhYm91dCAxIG1vbnRoJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIG1vbnRoJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSB5ZWFyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ292ZXIgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ292ZXIge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdhbG1vc3QgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2FsbW9zdCB7e2NvdW50fX0geWVhcnMnXG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHZhciByZXN1bHQ7XG5cbiAgaWYgKHR5cGVvZiBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl0gPT09ICdzdHJpbmcnKSB7XG4gICAgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dLm9uZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl0ub3RoZXIucmVwbGFjZSgne3tjb3VudH19JywgY291bnQpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuYWRkU3VmZml4KSB7XG4gICAgaWYgKG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgYWdvJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufSIsImltcG9ydCBidWlsZEZvcm1hdExvbmdGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZEZvcm1hdExvbmdGbi9pbmRleC5qc1wiO1xudmFyIGRhdGVGb3JtYXRzID0ge1xuICBmdWxsOiAnRUVFRSwgTU1NTSBkbywgeScsXG4gIGxvbmc6ICdNTU1NIGRvLCB5JyxcbiAgbWVkaXVtOiAnTU1NIGQsIHknLFxuICBzaG9ydDogJ01NL2RkL3l5eXknXG59O1xudmFyIHRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiAnaDptbTpzcyBhIHp6enonLFxuICBsb25nOiAnaDptbTpzcyBhIHonLFxuICBtZWRpdW06ICdoOm1tOnNzIGEnLFxuICBzaG9ydDogJ2g6bW0gYSdcbn07XG52YXIgZGF0ZVRpbWVGb3JtYXRzID0ge1xuICBmdWxsOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbG9uZzogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIG1lZGl1bTogJ3t7ZGF0ZX19LCB7e3RpbWV9fScsXG4gIHNob3J0OiAne3tkYXRlfX0sIHt7dGltZX19J1xufTtcbnZhciBmb3JtYXRMb25nID0ge1xuICBkYXRlOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIHRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiB0aW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgZGF0ZVRpbWU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlVGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRMb25nOyIsInZhciBmb3JtYXRSZWxhdGl2ZUxvY2FsZSA9IHtcbiAgbGFzdFdlZWs6IFwiJ2xhc3QnIGVlZWUgJ2F0JyBwXCIsXG4gIHllc3RlcmRheTogXCIneWVzdGVyZGF5IGF0JyBwXCIsXG4gIHRvZGF5OiBcIid0b2RheSBhdCcgcFwiLFxuICB0b21vcnJvdzogXCIndG9tb3Jyb3cgYXQnIHBcIixcbiAgbmV4dFdlZWs6IFwiZWVlZSAnYXQnIHBcIixcbiAgb3RoZXI6ICdQJ1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdFJlbGF0aXZlKHRva2VuLCBfZGF0ZSwgX2Jhc2VEYXRlLCBfb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UmVsYXRpdmVMb2NhbGVbdG9rZW5dO1xufSIsImltcG9ydCBidWlsZExvY2FsaXplRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCI7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnQicsICdBJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0JDJywgJ0FEJ10sXG4gIHdpZGU6IFsnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaSddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXG4gIHdpZGU6IFsnMXN0IHF1YXJ0ZXInLCAnMm5kIHF1YXJ0ZXInLCAnM3JkIHF1YXJ0ZXInLCAnNHRoIHF1YXJ0ZXInXSAvLyBOb3RlOiBpbiBFbmdsaXNoLCB0aGUgbmFtZXMgb2YgZGF5cyBvZiB0aGUgd2VlayBhbmQgbW9udGhzIGFyZSBjYXBpdGFsaXplZC5cbiAgLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4gIC8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuICAvLyBlLmcuIGluIFNwYW5pc2ggbGFuZ3VhZ2UgdGhlIHdlZWtkYXlzIGFuZCBtb250aHMgc2hvdWxkIGJlIGluIHRoZSBsb3dlcmNhc2UuXG5cbn07XG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICBhYmJyZXZpYXRlZDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICB3aWRlOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ10sXG4gIHNob3J0OiBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ10sXG4gIGFiYnJldmlhdGVkOiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICB3aWRlOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9XG59O1xuXG5mdW5jdGlvbiBvcmRpbmFsTnVtYmVyKGRpcnR5TnVtYmVyLCBfZGlydHlPcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpOyAvLyBJZiBvcmRpbmFsIG51bWJlcnMgZGVwZW5kIG9uIGNvbnRleHQsIGZvciBleGFtcGxlLFxuICAvLyBpZiB0aGV5IGFyZSBkaWZmZXJlbnQgZm9yIGRpZmZlcmVudCBncmFtbWF0aWNhbCBnZW5kZXJzLFxuICAvLyB1c2UgYG9wdGlvbnMudW5pdGA6XG4gIC8vXG4gIC8vICAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge31cbiAgLy8gICB2YXIgdW5pdCA9IFN0cmluZyhvcHRpb25zLnVuaXQpXG4gIC8vXG4gIC8vIHdoZXJlIGB1bml0YCBjYW4gYmUgJ3llYXInLCAncXVhcnRlcicsICdtb250aCcsICd3ZWVrJywgJ2RhdGUnLCAnZGF5T2ZZZWFyJyxcbiAgLy8gJ2RheScsICdob3VyJywgJ21pbnV0ZScsICdzZWNvbmQnXG5cbiAgdmFyIHJlbTEwMCA9IG51bWJlciAlIDEwMDtcblxuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnc3QnO1xuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnbmQnO1xuXG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAncmQnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudW1iZXIgKyAndGgnO1xufVxuXG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gKHF1YXJ0ZXIpIHtcbiAgICAgIHJldHVybiBOdW1iZXIocXVhcnRlcikgLSAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogbW9udGhWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGZvcm1hdHRpbmdWYWx1ZXM6IGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdEZvcm1hdHRpbmdXaWR0aDogJ3dpZGUnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxpemU7IiwiaW1wb3J0IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiO1xuaW1wb3J0IGJ1aWxkTWF0Y2hGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanNcIjtcbnZhciBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL14oXFxkKykodGh8c3R8bmR8cmQpPy9pO1xudmFyIHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXFxkKy9pO1xudmFyIG1hdGNoRXJhUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYnxhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oYlxcLj9cXHM/Y1xcLj98YlxcLj9cXHM/Y1xcLj9cXHM/ZVxcLj98YVxcLj9cXHM/ZFxcLj98Y1xcLj9cXHM/ZVxcLj8pL2ksXG4gIHdpZGU6IC9eKGJlZm9yZSBjaHJpc3R8YmVmb3JlIGNvbW1vbiBlcmF8YW5ubyBkb21pbml8Y29tbW9uIGVyYSkvaVxufTtcbnZhciBwYXJzZUVyYVBhdHRlcm5zID0ge1xuICBhbnk6IFsvXmIvaSwgL14oYXxjKS9pXVxufTtcbnZhciBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXlsxMjM0XS9pLFxuICBhYmJyZXZpYXRlZDogL15xWzEyMzRdL2ksXG4gIHdpZGU6IC9eWzEyMzRdKHRofHN0fG5kfHJkKT8gcXVhcnRlci9pXG59O1xudmFyIHBhcnNlUXVhcnRlclBhdHRlcm5zID0ge1xuICBhbnk6IFsvMS9pLCAvMi9pLCAvMy9pLCAvNC9pXVxufTtcbnZhciBtYXRjaE1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bamZtYXNvbmRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXihqYW58ZmVifG1hcnxhcHJ8bWF5fGp1bnxqdWx8YXVnfHNlcHxvY3R8bm92fGRlYykvaSxcbiAgd2lkZTogL14oamFudWFyeXxmZWJydWFyeXxtYXJjaHxhcHJpbHxtYXl8anVuZXxqdWx5fGF1Z3VzdHxzZXB0ZW1iZXJ8b2N0b2Jlcnxub3ZlbWJlcnxkZWNlbWJlcikvaVxufTtcbnZhciBwYXJzZU1vbnRoUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9eai9pLCAvXmYvaSwgL15tL2ksIC9eYS9pLCAvXm0vaSwgL15qL2ksIC9eai9pLCAvXmEvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldLFxuICBhbnk6IFsvXmphL2ksIC9eZi9pLCAvXm1hci9pLCAvXmFwL2ksIC9ebWF5L2ksIC9eanVuL2ksIC9eanVsL2ksIC9eYXUvaSwgL15zL2ksIC9eby9pLCAvXm4vaSwgL15kL2ldXG59O1xudmFyIG1hdGNoRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bc210d2ZdL2ksXG4gIHNob3J0OiAvXihzdXxtb3x0dXx3ZXx0aHxmcnxzYSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKHN1bnxtb258dHVlfHdlZHx0aHV8ZnJpfHNhdCkvaSxcbiAgd2lkZTogL14oc3VuZGF5fG1vbmRheXx0dWVzZGF5fHdlZG5lc2RheXx0aHVyc2RheXxmcmlkYXl8c2F0dXJkYXkpL2lcbn07XG52YXIgcGFyc2VEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15zL2ksIC9ebS9pLCAvXnQvaSwgL153L2ksIC9edC9pLCAvXmYvaSwgL15zL2ldLFxuICBhbnk6IFsvXnN1L2ksIC9ebS9pLCAvXnR1L2ksIC9edy9pLCAvXnRoL2ksIC9eZi9pLCAvXnNhL2ldXG59O1xudmFyIG1hdGNoRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL14oYXxwfG1pfG58KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pLFxuICBhbnk6IC9eKFthcF1cXC4/XFxzP21cXC4/fG1pZG5pZ2h0fG5vb258KGluIHRoZXxhdCkgKG1vcm5pbmd8YWZ0ZXJub29ufGV2ZW5pbmd8bmlnaHQpKS9pXG59O1xudmFyIHBhcnNlRGF5UGVyaW9kUGF0dGVybnMgPSB7XG4gIGFueToge1xuICAgIGFtOiAvXmEvaSxcbiAgICBwbTogL15wL2ksXG4gICAgbWlkbmlnaHQ6IC9ebWkvaSxcbiAgICBub29uOiAvXm5vL2ksXG4gICAgbW9ybmluZzogL21vcm5pbmcvaSxcbiAgICBhZnRlcm5vb246IC9hZnRlcm5vb24vaSxcbiAgICBldmVuaW5nOiAvZXZlbmluZy9pLFxuICAgIG5pZ2h0OiAvbmlnaHQvaVxuICB9XG59O1xudmFyIG1hdGNoID0ge1xuICBvcmRpbmFsTnVtYmVyOiBidWlsZE1hdGNoUGF0dGVybkZuKHtcbiAgICBtYXRjaFBhdHRlcm46IG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgcGFyc2VQYXR0ZXJuOiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VNb250aFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5OiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgZGF5UGVyaW9kOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICdhbnknLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGVyaW9kUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgbWF0Y2g7IiwiaW1wb3J0IGZvcm1hdERpc3RhbmNlIGZyb20gXCIuL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRMb25nIGZyb20gXCIuL19saWIvZm9ybWF0TG9uZy9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdFJlbGF0aXZlIGZyb20gXCIuL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanNcIjtcbmltcG9ydCBsb2NhbGl6ZSBmcm9tIFwiLi9fbGliL2xvY2FsaXplL2luZGV4LmpzXCI7XG5pbXBvcnQgbWF0Y2ggZnJvbSBcIi4vX2xpYi9tYXRjaC9pbmRleC5qc1wiO1xuLyoqXG4gKiBAdHlwZSB7TG9jYWxlfVxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlIChVbml0ZWQgU3RhdGVzKS5cbiAqIEBsYW5ndWFnZSBFbmdsaXNoXG4gKiBAaXNvLTYzOS0yIGVuZ1xuICogQGF1dGhvciBTYXNoYSBLb3NzIFtAa29zc25vY29ycF17QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2tvc3Nub2NvcnB9XG4gKiBAYXV0aG9yIExlc2hhIEtvc3MgW0BsZXNoYWtvc3Nde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9sZXNoYWtvc3N9XG4gKi9cblxudmFyIGxvY2FsZSA9IHtcbiAgY29kZTogJ2VuLVVTJyxcbiAgZm9ybWF0RGlzdGFuY2U6IGZvcm1hdERpc3RhbmNlLFxuICBmb3JtYXRMb25nOiBmb3JtYXRMb25nLFxuICBmb3JtYXRSZWxhdGl2ZTogZm9ybWF0UmVsYXRpdmUsXG4gIGxvY2FsaXplOiBsb2NhbGl6ZSxcbiAgbWF0Y2g6IG1hdGNoLFxuICBvcHRpb25zOiB7XG4gICAgd2Vla1N0YXJ0c09uOiAwXG4gICAgLyogU3VuZGF5ICovXG4gICAgLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxlOyIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9hZGRNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHN1Yk1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIHN1YnRyYWN0ZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIHN1YnRyYWN0ZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3VidHJhY3QgNzUwIG1pbGxpc2Vjb25kcyBmcm9tIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdWJNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NToyOS4yNTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWJNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCAtYW1vdW50KTtcbn0iLCJpbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IHR5cGVvZiBhcmd1bWVudCA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXQuaW8vZmp1bGVcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJpbXBvcnQgeyBNYW5hZ2VyTW9kZWwgfSBmcm9tICcuL21vZGVsJztcclxuaW1wb3J0IHsgTWFuYWdlclZpZXcgfSBmcm9tICcuL3ZpZXcnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hbmFnZXIge1xyXG4gICAgcHVibGljIG1vZGVsOiBNYW5hZ2VyTW9kZWw7XHJcbiAgICBwdWJsaWMgdmlldzogTWFuYWdlclZpZXc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbCA9IG5ldyBNYW5hZ2VyTW9kZWwoKTtcclxuICAgICAgICB0aGlzLnZpZXcgPSBuZXcgTWFuYWdlclZpZXcoKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KHBhcmVudDogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLm1vZGVsLmxvYWRMb2dnZWRJblVzZXIoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy52aWV3LmRyYXcocGFyZW50LCB0aGlzLm1vZGVsKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEYXRhYmFzZUFQSSB9IGZyb20gJy4uL3V0aWxzL2RhdGFiYXNlQVBJJztcclxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4uL3Byb2plY3QvY29udHJvbGxlcic7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi91c2VyL2NvbnRyb2xsZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hbmFnZXJNb2RlbCB7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRVc2VyOiBVc2VyO1xyXG5cclxuICAgIGFzeW5jIGxvYWRMb2dnZWRJblVzZXIoKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFVzZXJJZCA9IHRoaXMuZ2V0VXNlckNvb2tpZSgpO1xyXG4gICAgICAgIGlmIChjdXJyZW50VXNlcklkID09PSAtMSkgdGhpcy5jdXJyZW50VXNlciA9IG51bGw7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSBhd2FpdCBEYXRhYmFzZUFQSS5nZXRVc2VyQnlJZChcclxuICAgICAgICAgICAgICAgIE51bWJlcihjdXJyZW50VXNlcklkKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRDdXJyZW50VXNlcigpOiBVc2VyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50VXNlcjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRVc2VyQ29va2llKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50VXNlciA9PT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgZC5zZXRUaW1lKGQuZ2V0VGltZSgpICsgNyAqIDI0ICogNjAgKiA2MCAqIDEwMDApOyAvLyBleHBpcmVzIGluIDcgZGF5c1xyXG4gICAgICAgIHZhciBleHBpcmVzID0gJ2V4cGlyZXM9JyArIGQudG9VVENTdHJpbmcoKTtcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBgdXNlcklkPSR7aWR9OyBleHBpcmVzPSR7ZXhwaXJlc307IHBhdGg9LztgO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHJldHVybnMgdXNlcidzIGlkIHN0b3JlZCBpbiBjb29raWVzIChvciAtMSBpZiB0aGVyZSdzIG5vIGNvb2tpZSlcclxuICAgICAqL1xyXG4gICAgZ2V0VXNlckNvb2tpZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHZhciBuYW1lID0gJ3VzZXJJZD0nO1xyXG4gICAgICAgIHZhciBkZWNvZGVkQ29va2llID0gZGVjb2RlVVJJQ29tcG9uZW50KGRvY3VtZW50LmNvb2tpZSk7XHJcbiAgICAgICAgdmFyIGNvb2tpZUFycmF5ID0gZGVjb2RlZENvb2tpZS5zcGxpdCgnOycpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29va2llQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGNvb2tpZSA9IGNvb2tpZUFycmF5W2ldO1xyXG4gICAgICAgICAgICB3aGlsZSAoY29va2llLmNoYXJBdCgwKSA9PSAnICcpIHtcclxuICAgICAgICAgICAgICAgIGNvb2tpZSA9IGNvb2tpZS5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjb29raWUuaW5kZXhPZihuYW1lKSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyKGNvb2tpZS5zdWJzdHJpbmcobmFtZS5sZW5ndGgsIGNvb2tpZS5sZW5ndGgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBOaWNrbmFtZXMgY2FuIGNvbnNpc3Qgb2Y6XHJcbiAgICAgKiBsb3dlciBjYXNlIGxldHRlcnMsXHJcbiAgICAgKiB1cHBlciBjYXNlIGxldHRlcnMsXHJcbiAgICAgKiBudW1iZXJzLFxyXG4gICAgICogdW5kZXJzY29yZXMgYW5kXHJcbiAgICAgKiBkb3RzLlxyXG4gICAgICovXHJcbiAgICB2YWxpZGF0ZUlucHV0RGF0YShuaWNrbmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKG5pY2tuYW1lID09PSAnJyB8fCBwYXNzd29yZCA9PT0gJycpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKG5pY2tuYW1lLmxlbmd0aCA8IDQgfHwgbmlja25hbWUubGVuZ3RoID4gMTUpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKHBhc3N3b3JkLmxlbmd0aCA8IDQgfHwgcGFzc3dvcmQubGVuZ3RoID4gMTUpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc3QgbWF0Y2hlc1JlZ2V4ID0gL15bYS16QS1aMC05X1xcLl0rJC8uZXhlYyhuaWNrbmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoZXNSZWdleCAhPT0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm5zIGEgbG9naW4gcmVzdWx0IG1lc3NhZ2UgKCdzdWNjZXNzJyBpZiBsb2dpbiBzdWNjZXNzZnVsKVxyXG4gICAgICovXHJcbiAgICBhc3luYyB0cnlMb2dpblVzZXIobmlja25hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IERhdGFiYXNlQVBJLmdldFVzZXJCeU5pY2tuYW1lKG5pY2tuYW1lKTtcclxuICAgICAgICBpZiAodXNlciA9PT0gbnVsbCkgcmV0dXJuIFwidXNlciBkb2Vzbid0IGV4aXN0XCI7XHJcblxyXG4gICAgICAgIGlmICh1c2VyLm1vZGVsLmdldFBhc3N3b3JkKCkgIT09IHBhc3N3b3JkKSByZXR1cm4gJ3dyb25nIHBhc3N3b3JkJztcclxuXHJcbiAgICAgICAgLy8gc2F2ZSBjdXJyZW50IHVzZXIgaW4gY29va2llc1xyXG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSB1c2VyO1xyXG4gICAgICAgIHRoaXMuc2V0VXNlckNvb2tpZSh0aGlzLmN1cnJlbnRVc2VyLm1vZGVsLmdldElkKCkpO1xyXG4gICAgICAgIHJldHVybiAnc3VjY2Vzcyc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJucyBhIHNpZ24gdXAgcmVzdWx0IG1lc3NhZ2UgKCdzdWNjZXNzJyBpZiBsb2dpbiBzdWNjZXNzZnVsKVxyXG4gICAgICovXHJcbiAgICBhc3luYyB0cnlTaWduVXBVc2VyKG5pY2tuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIGNvbnN0IHVzZXJXaXRoU2FtZU5pY2tuYW1lID0gYXdhaXQgRGF0YWJhc2VBUEkuZ2V0VXNlckJ5Tmlja25hbWUoXHJcbiAgICAgICAgICAgIG5pY2tuYW1lXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAodXNlcldpdGhTYW1lTmlja25hbWUgIT09IG51bGwpIHJldHVybiAnbmlja25hbWUgYWxyZWFkeSB0YWtlbic7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld1VzZXIgPSBhd2FpdCBEYXRhYmFzZUFQSS5hZGRVc2VyKG5pY2tuYW1lLCBwYXNzd29yZCk7XHJcblxyXG4gICAgICAgIC8vIHNhdmUgY3VycmVudCB1c2VyIGluIGNvb2tpZXNcclxuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gYXdhaXQgRGF0YWJhc2VBUEkuZ2V0VXNlckJ5SWQobmV3VXNlci5pZCk7XHJcbiAgICAgICAgdGhpcy5zZXRVc2VyQ29va2llKHRoaXMuY3VycmVudFVzZXIubW9kZWwuZ2V0SWQoKSk7XHJcbiAgICAgICAgcmV0dXJuICdzdWNjZXNzJztcclxuICAgIH1cclxuXHJcbiAgICBsb2dvdXRVc2VyKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9XHJcbiAgICAgICAgICAgICd1c2VySWQ9O2V4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMSBHTVQ7IHBhdGg9Lyc7XHJcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTmV3UHJvamVjdChwOiBQcm9qZWN0KSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlci5tb2RlbC5hZGRQcm9qZWN0KHApO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVByb2plY3QocHJvaklkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyLm1vZGVsLnJlbW92ZVByb2plY3QocHJvaklkKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEYXRhYmFzZUFQSSB9IGZyb20gJy4uL3V0aWxzL2RhdGFiYXNlQVBJJztcclxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4uL3Byb2plY3QvY29udHJvbGxlcic7XHJcbmltcG9ydCB7IFByb2plY3RWaWV3IH0gZnJvbSAnLi4vcHJvamVjdC92aWV3JztcclxuaW1wb3J0IHsgVGFza1N0YXRlIH0gZnJvbSAnLi4vdXRpbHMvdGFza1N0YXRlJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL3VzZXIvY29udHJvbGxlcic7XHJcbmltcG9ydCB7IE1hbmFnZXJNb2RlbCB9IGZyb20gJy4vbW9kZWwnO1xyXG5pbXBvcnQgeyByZW1vdmVFbGVtZW50c0NoaWxkcmVuIH0gZnJvbSAnLi4vdXRpbHMvcmVtb3ZlRWxlbWVudHNDaGlsZHJlbic7XHJcbmltcG9ydCB7IGRpc3BsYXlQb3B1cCB9IGZyb20gJy4uL3V0aWxzL3RvYXN0JztcclxuaW1wb3J0IHsgZHJhd0Ryb3Bkb3duQnV0dG9uIH0gZnJvbSAnLi4vdXRpbHMvZHJvcGRvd24nO1xyXG5pbXBvcnQgeyBkaXNwbGF5TW9kYWwgfSBmcm9tICcuLi91dGlscy9tb2RhbCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFuYWdlclZpZXcge1xyXG4gICAgcHJpdmF0ZSBwYXJlbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBjb250YWluZXI6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NOYW1lID0gJ21hbmFnZXInO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcocGFyZW50OiBIVE1MRWxlbWVudCwgbW9kZWw6IE1hbmFnZXJNb2RlbCkge1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG4gICAgICAgIHRoaXMucGFyZW50LmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgZm9yIHNhdmVkIHVzZXIgaW4gY29va2llc1xyXG4gICAgICAgIGlmIChtb2RlbC5nZXRVc2VyQ29va2llKCkgPT09IC0xKSB0aGlzLmRyYXdMb2dpblBhZ2UobW9kZWwpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdQcm9maWxlSGVhZGVyKG1vZGVsKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBtb2RlbC5nZXRDdXJyZW50VXNlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdEYXNoYm9hcmQodXNlci5tb2RlbC5nZXRQcm9qZWN0cygpLCBtb2RlbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXdMb2dpblBhZ2UobW9kZWw6IE1hbmFnZXJNb2RlbCkge1xyXG4gICAgICAgIGNvbnN0IGxvZ2luQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbG9naW5Db250YWluZXIuY2xhc3NOYW1lID0gJ2xvZ2luQ29udGFpbmVyJztcclxuXHJcbiAgICAgICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGxvZ28uY2xhc3NOYW1lID0gJ2ltZ1N0YXJ0UGFnZSc7XHJcbiAgICAgICAgbG9naW5Db250YWluZXIuYXBwZW5kQ2hpbGQobG9nbyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxibFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBsYmxUaXRsZS5pbm5lckhUTUwgPSAnUHJvamVjdCBtYW5hZ2VyJztcclxuICAgICAgICBsYmxUaXRsZS5jbGFzc05hbWUgPSAndGl0bGUnO1xyXG4gICAgICAgIGxvZ2luQ29udGFpbmVyLmFwcGVuZENoaWxkKGxibFRpdGxlKTtcclxuXHJcbiAgICAgICAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgYnRuQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdidG5Db250YWluZXInO1xyXG5cclxuICAgICAgICBjb25zdCBidG5TaWduVXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidG5TaWduVXAuaWQgPSAnYnRuU2lnblVwJztcclxuICAgICAgICBidG5TaWduVXAuY2xhc3NOYW1lID0gJ2J0biBidG4tc3VjY2Vzcyc7XHJcbiAgICAgICAgYnRuU2lnblVwLmlubmVySFRNTCA9ICdTaWduIHVwJztcclxuICAgICAgICBidG5TaWduVXAub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgYnRuQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcclxuICAgICAgICAgICAgc2lnblVwRm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBmb2N1cyBvbiBuaWNrbmFtZSBpbnB1dCBmaWVsZCBhZnRlciBhbmltYXRpb25cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRTaWduVXBOaWNrbmFtZScpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0blNpZ25VcCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ0bkxvZ2luID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnRuTG9naW4uaWQgPSAnYnRuTG9naW4nO1xyXG4gICAgICAgIGJ0bkxvZ2luLmNsYXNzTmFtZSA9ICdidG4gYnRuLWxpZ2h0JztcclxuICAgICAgICBidG5Mb2dpbi5pbm5lckhUTUwgPSAnTG9nIGluJztcclxuICAgICAgICBidG5Mb2dpbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBidG5Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xyXG4gICAgICAgICAgICBsb2dpbkZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xyXG5cclxuICAgICAgICAgICAgLy8gZm9jdXMgb24gbmlja25hbWUgaW5wdXQgZmllbGQgYWZ0ZXIgYW5pbWF0aW9uXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0TG9naW5OaWNrbmFtZScpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkxvZ2luKTtcclxuICAgICAgICBsb2dpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChidG5Db250YWluZXIpO1xyXG5cclxuICAgICAgICAvLyBkcmF3IGxvZ2luIGFuZCBzaW5nIHVwIGZvcm1zXHJcbiAgICAgICAgY29uc3QgbG9naW5Gb3JtID0gdGhpcy5kcmF3Rm9ybShsb2dpbkNvbnRhaW5lciwgYnRuQ29udGFpbmVyLCB7XHJcbiAgICAgICAgICAgIGZvcm1UeXBlOiAnTG9naW4nLFxyXG4gICAgICAgICAgICBsYmxUZXh0OiAnTG9nIGluIHRvIFByb2plY3QgTWFuYWdlcicsXHJcbiAgICAgICAgICAgIGJ0blRleHQ6ICdMb2cgaW4nLFxyXG4gICAgICAgICAgICBjYWxsYmFja0Z1bmN0aW9uOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBsb2FkaW5nIGFuaW1hdGlvblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24uY2xhc3NOYW1lID1cclxuICAgICAgICAgICAgICAgICAgICAnc3Bpbm5lci1ib3JkZXIgc3Bpbm5lci1ib3JkZXItc20gdGV4dC1saWdodCc7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuTG9naW5Ob3cnKS5pbm5lckhUTUwgPVxyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5vdXRlckhUTUw7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gbG9naW5cclxuICAgICAgICAgICAgICAgIHRoaXMudHJ5TG9naW4obW9kZWwsIGxvZ2luRm9ybSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3Qgc2lnblVwRm9ybSA9IHRoaXMuZHJhd0Zvcm0obG9naW5Db250YWluZXIsIGJ0bkNvbnRhaW5lciwge1xyXG4gICAgICAgICAgICBmb3JtVHlwZTogJ1NpZ25VcCcsXHJcbiAgICAgICAgICAgIGxibFRleHQ6ICdTaWduIHVwIHRvIFByb2plY3QgTWFuYWdlcicsXHJcbiAgICAgICAgICAgIGJ0blRleHQ6ICdTaWduIHVwJyxcclxuICAgICAgICAgICAgY2FsbGJhY2tGdW5jdGlvbjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gbG9hZGluZyBhbmltYXRpb25cclxuICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLmNsYXNzTmFtZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgJ3NwaW5uZXItYm9yZGVyIHNwaW5uZXItYm9yZGVyLXNtIHRleHQtbGlnaHQnO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0blNpZ25VcE5vdycpLmlubmVySFRNTCA9XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLm91dGVySFRNTDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBsb2dpblxyXG4gICAgICAgICAgICAgICAgdGhpcy50cnlTaWduVXAobW9kZWwsIHNpZ25VcEZvcm0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dpbkNvbnRhaW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0Zvcm0oXHJcbiAgICAgICAgcGFyZW50OiBIVE1MRWxlbWVudCxcclxuICAgICAgICBidG5Db250YWluZXI6IEhUTUxFbGVtZW50LFxyXG4gICAgICAgIGRhdGE6IGFueVxyXG4gICAgKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IGxvZ2luRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGxvZ2luRm9ybS5jbGFzc05hbWUgPSAnbG9naW5Gb3JtIGhpZGUnO1xyXG5cclxuICAgICAgICBjb25zdCBsYmxMb2dpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgbGJsTG9naW4uaW5uZXJIVE1MID0gZGF0YS5sYmxUZXh0O1xyXG4gICAgICAgIGxibExvZ2luLmlkID0gJ2xibExvZ2luJztcclxuICAgICAgICBsb2dpbkZvcm0uYXBwZW5kQ2hpbGQobGJsTG9naW4pO1xyXG5cclxuICAgICAgICBjb25zdCBpbnB1dE5pY2tuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBpbnB1dE5pY2tuYW1lLmlkID0gYGlucHV0JHtkYXRhLmZvcm1UeXBlfU5pY2tuYW1lYDtcclxuICAgICAgICBpbnB1dE5pY2tuYW1lLnR5cGUgPSAndGV4dCc7XHJcbiAgICAgICAgaW5wdXROaWNrbmFtZS5jbGFzc05hbWUgPSAnZm9ybS1jb250cm9sJztcclxuICAgICAgICBpbnB1dE5pY2tuYW1lLnBsYWNlaG9sZGVyID0gJ05pY2tuYW1lJztcclxuICAgICAgICBsb2dpbkZvcm0uYXBwZW5kQ2hpbGQoaW5wdXROaWNrbmFtZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGlucHV0UGFzc3dvcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGlucHV0UGFzc3dvcmQuaWQgPSBgaW5wdXQke2RhdGEuZm9ybVR5cGV9UGFzc3dvcmRgO1xyXG4gICAgICAgIGlucHV0UGFzc3dvcmQudHlwZSA9ICdwYXNzd29yZCc7XHJcbiAgICAgICAgaW5wdXRQYXNzd29yZC5jbGFzc05hbWUgPSAnZm9ybS1jb250cm9sJztcclxuICAgICAgICBpbnB1dFBhc3N3b3JkLnBsYWNlaG9sZGVyID0gJ1Bhc3N3b3JkJztcclxuICAgICAgICBpbnB1dFBhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLmNhbGxiYWNrRnVuY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWZyZXNoZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxvZ2luRm9ybS5hcHBlbmRDaGlsZChpbnB1dFBhc3N3b3JkKTtcclxuXHJcbiAgICAgICAgY29uc3QgYnRuTG9naW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidG5Mb2dpbi5pZCA9IGBidG4ke2RhdGEuZm9ybVR5cGV9Tm93YDtcclxuICAgICAgICBidG5Mb2dpbi5jbGFzc05hbWUgPSAnYnRuIGJ0bi1zdWNjZXNzJztcclxuICAgICAgICBidG5Mb2dpbi5pbm5lckhUTUwgPSBkYXRhLmJ0blRleHQ7XHJcbiAgICAgICAgYnRuTG9naW4ub25jbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGRhdGEuY2FsbGJhY2tGdW5jdGlvbigpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVmcmVzaGVkJyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBsb2dpbkZvcm0uYXBwZW5kQ2hpbGQoYnRuTG9naW4pO1xyXG5cclxuICAgICAgICBjb25zdCBidG5Hb0JhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidG5Hb0JhY2suY2xhc3NOYW1lID0gJ2J0biBidG4tbGluayc7XHJcbiAgICAgICAgYnRuR29CYWNrLmlubmVySFRNTCA9ICdCYWNrJztcclxuICAgICAgICBidG5Hb0JhY2sub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgbG9naW5Gb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcclxuICAgICAgICAgICAgYnRuQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGxvZ2luRm9ybS5hcHBlbmRDaGlsZChidG5Hb0JhY2spO1xyXG5cclxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobG9naW5Gb3JtKTtcclxuICAgICAgICByZXR1cm4gbG9naW5Gb3JtO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHRyeUxvZ2luKG1vZGVsOiBNYW5hZ2VyTW9kZWwsIGxvZ2luRm9ybTogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBubiA9IChcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0TG9naW5OaWNrbmFtZScpIGFzIEhUTUxJbnB1dEVsZW1lbnRcclxuICAgICAgICApLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHBzd2QgPSAoXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dExvZ2luUGFzc3dvcmQnKSBhcyBIVE1MSW5wdXRFbGVtZW50XHJcbiAgICAgICAgKS52YWx1ZTtcclxuICAgICAgICBsZXQgZXJyb3JNc2c6IHN0cmluZyA9ICdMb2dpbiBmYWlsZWQ6ICc7XHJcbiAgICAgICAgbGV0IGxvZ2luTXNnID0gJyc7XHJcbiAgICAgICAgaWYgKG1vZGVsLnZhbGlkYXRlSW5wdXREYXRhKG5uLCBwc3dkKSkge1xyXG4gICAgICAgICAgICBsb2dpbk1zZyA9IGF3YWl0IG1vZGVsLnRyeUxvZ2luVXNlcihubiwgcHN3ZCk7XHJcbiAgICAgICAgICAgIGlmIChsb2dpbk1zZyA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgbG9naW4gcGFnZVxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW1nU3RhcnRQYWdlJylbMF0ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsb2dpbkNvbnRhaW5lcicpWzBdLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGRyYXcgZGFzaGJvYXJkXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdQcm9maWxlSGVhZGVyKG1vZGVsKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBtb2RlbC5nZXRDdXJyZW50VXNlcigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3RGFzaGJvYXJkKHVzZXIubW9kZWwuZ2V0UHJvamVjdHMoKSwgbW9kZWwpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGRpc3BsYXkgc3VjY2VzcyBtZXNzYWdlXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5UG9wdXAoe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JlZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnTG9naW4gc3VjY2Vzc2Z1bCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1dlbGNvbWUgYmFjayB0byB0aGUgUHJvamVjdCBNYW5hZ2VyIScsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGVycm9yTXNnICs9IGxvZ2luTXNnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVycm9yTXNnICs9ICdJbnZhbGlkIGlucHV0Lic7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobG9naW5Nc2cgIT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICBsZXQgbGJsRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGJsRXJyb3InKTtcclxuICAgICAgICAgICAgaWYgKGxibEVycm9yID09PSBudWxsKSBsYmxFcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgIGxibEVycm9yLmlkID0gJ2xibEVycm9yJztcclxuICAgICAgICAgICAgbGJsRXJyb3IuaW5uZXJIVE1MID0gZXJyb3JNc2c7XHJcbiAgICAgICAgICAgIGxvZ2luRm9ybS5hcHBlbmRDaGlsZChsYmxFcnJvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyByZW1vdmUgYW5pbWF0aW9uXHJcbiAgICAgICAgY29uc3QgbG9naW5CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuTG9naW5Ob3cnKTtcclxuICAgICAgICBpZiAobG9naW5CdG4gIT0gbnVsbCkgbG9naW5CdG4uaW5uZXJIVE1MID0gJ0xvZyBpbic7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgdHJ5U2lnblVwKG1vZGVsOiBNYW5hZ2VyTW9kZWwsIGxvZ2luRm9ybTogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBubiA9IChcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0U2lnblVwTmlja25hbWUnKSBhcyBIVE1MSW5wdXRFbGVtZW50XHJcbiAgICAgICAgKS52YWx1ZTtcclxuICAgICAgICBjb25zdCBwc3dkID0gKFxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRTaWduVXBQYXNzd29yZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnRcclxuICAgICAgICApLnZhbHVlO1xyXG4gICAgICAgIGxldCBlcnJvck1zZzogc3RyaW5nID0gJ1NpZ24gdXAgZmFpbGVkOiAnO1xyXG4gICAgICAgIGxldCBzaWdudXBNc2cgPSAnJztcclxuICAgICAgICBpZiAobW9kZWwudmFsaWRhdGVJbnB1dERhdGEobm4sIHBzd2QpKSB7XHJcbiAgICAgICAgICAgIHNpZ251cE1zZyA9IGF3YWl0IG1vZGVsLnRyeVNpZ25VcFVzZXIobm4sIHBzd2QpO1xyXG4gICAgICAgICAgICBpZiAoc2lnbnVwTXNnID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBsb2dpbiBwYWdlXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbWdTdGFydFBhZ2UnKVswXS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xvZ2luQ29udGFpbmVyJylbMF0ucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZHJhdyBkYXNoYm9hcmRcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd1Byb2ZpbGVIZWFkZXIobW9kZWwpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IG1vZGVsLmdldEN1cnJlbnRVc2VyKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdEYXNoYm9hcmQodXNlci5tb2RlbC5nZXRQcm9qZWN0cygpLCBtb2RlbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZGlzcGxheSBzdWNjZXNzIG1lc3NhZ2VcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlQb3B1cCh7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdncmVlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdTaWduIHVwIHN1Y2Nlc3NmdWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdXZWxjb21lIHRvIHRoZSBQcm9qZWN0IE1hbmFnZXIhJyxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgZXJyb3JNc2cgKz0gc2lnbnVwTXNnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVycm9yTXNnICs9ICdJbnZhbGlkIGlucHV0Lic7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2lnbnVwTXNnICE9PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgbGV0IGxibEVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xibEVycm9yJyk7XHJcbiAgICAgICAgICAgIGlmIChsYmxFcnJvciA9PT0gbnVsbCkgbGJsRXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgICAgICBsYmxFcnJvci5pZCA9ICdsYmxFcnJvcic7XHJcbiAgICAgICAgICAgIGxibEVycm9yLmlubmVySFRNTCA9IGVycm9yTXNnO1xyXG4gICAgICAgICAgICBsb2dpbkZvcm0uYXBwZW5kQ2hpbGQobGJsRXJyb3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcmVtb3ZlIGFuaW1hdGlvblxyXG4gICAgICAgIGNvbnN0IHNpZ251cEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5TaWduVXBOb3cnKTtcclxuICAgICAgICBpZiAoc2lnbnVwQnRuICE9IG51bGwpIHNpZ251cEJ0bi5pbm5lckhUTUwgPSAnU2lnbiB1cCc7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd1Byb2ZpbGVIZWFkZXIobW9kZWw6IE1hbmFnZXJNb2RlbCkge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGhlYWRlci5jbGFzc05hbWUgPSAncHJvZmlsZUhlYWRlcic7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuXHJcbiAgICAgICAgLy8gUHJvamVjdCBNYW5hZ2VyIGxhYmVsICh0b3AgbGVmdClcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgdGl0bGUuY2xhc3NOYW1lID0gJ2hlYWRlclRpdGxlJztcclxuICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSAnUHJvamVjdCBNYW5hZ2VyJztcclxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbWVudS5jbGFzc05hbWUgPSAnaGVhZGVyTWVudSc7XHJcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKG1lbnUpO1xyXG5cclxuICAgICAgICAvLyBBZGQgcHJvamVjdCBidXR0b25cclxuICAgICAgICBjb25zdCBidG5BZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnRuQWRkUHJvamVjdC5jbGFzc05hbWUgPSAnYnRuIGJ0bi1zdWNjZXNzIG1lbnVCdXR0b24nO1xyXG4gICAgICAgIGJ0bkFkZFByb2plY3QuaWQgPSAnYnRuQWRkUHJvamVjdCc7XHJcbiAgICAgICAgYnRuQWRkUHJvamVjdC5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjbGVhciBkYXNoYm9hcmRcclxuICAgICAgICAgICAgbGV0IGRhc2hib2FyZCA9IDxIVE1MRWxlbWVudD4oXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkYXNoYm9hcmQnKVswXVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZiAoZGFzaGJvYXJkKSB7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoZGFzaGJvYXJkLmNoaWxkcmVuWzBdKSBkYXNoYm9hcmQuY2hpbGRyZW5bMF0ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkYXNoYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkYXNoYm9hcmQuY2xhc3NOYW1lID0gJ2Rhc2hib2FyZCc7XHJcblxyXG4gICAgICAgICAgICAvLyBkcmF3IHByb2plY3QgZWRpdG9yXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2o6IFByb2plY3RWaWV3ID0gbmV3IFByb2plY3RWaWV3KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBtb2RlbC5nZXRDdXJyZW50VXNlcigpO1xyXG4gICAgICAgICAgICBuZXdQcm9qLmRyYXdFZGl0b3IoXHJcbiAgICAgICAgICAgICAgICBkYXNoYm9hcmQsXHJcbiAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5kcmF3RGFzaGJvYXJkKHVzZXIubW9kZWwuZ2V0UHJvamVjdHMoKSwgbW9kZWwpLFxyXG4gICAgICAgICAgICAgICAgbW9kZWxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IHBsdXNJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgICAgIHBsdXNJY29uLmNsYXNzTmFtZSA9ICdmYXMgZmEtcGx1cyc7XHJcbiAgICAgICAgYnRuQWRkUHJvamVjdC5hcHBlbmRDaGlsZChwbHVzSWNvbik7XHJcbiAgICAgICAgbWVudS5hcHBlbmRDaGlsZChidG5BZGRQcm9qZWN0KTtcclxuXHJcbiAgICAgICAgLy8gRHJvcGRvd24gYnV0dG9uc1xyXG4gICAgICAgIHRoaXMuZHJhd0FjdGlvbkRyb3Bkb3duKG1lbnUsIG1vZGVsKTtcclxuICAgICAgICB0aGlzLmRyYXdTb3J0aW5nRHJvcGRvd24obWVudSwgbW9kZWwpO1xyXG4gICAgICAgIHRoaXMuZHJhd0ZpbHRlckRyb3Bkb3duKG1lbnUsIG1vZGVsKTtcclxuICAgICAgICB0aGlzLmRyYXdQcm9maWxlRHJvcGRvd24obWVudSwgbW9kZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdEYXNoYm9hcmQocHJvamVjdHM6IFByb2plY3RbXSwgbW9kZWw6IE1hbmFnZXJNb2RlbCkge1xyXG4gICAgICAgIGlmIChwcm9qZWN0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5kcmF3RW1wdHlEYXNoYm9hcmQobW9kZWwpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgZGFzaGJvYXJkID0gPEhUTUxFbGVtZW50PihcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGFzaGJvYXJkJylbMF1cclxuICAgICAgICApO1xyXG4gICAgICAgIGlmICghZGFzaGJvYXJkKSBkYXNoYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkYXNoYm9hcmQuY2xhc3NOYW1lID0gJ2Rhc2hib2FyZCc7XHJcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaCgocHJvajogUHJvamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB1c2VyID0gbW9kZWwuZ2V0Q3VycmVudFVzZXIoKS5tb2RlbDtcclxuICAgICAgICAgICAgcHJvai5kcmF3UHJldmlldyhcclxuICAgICAgICAgICAgICAgIGRhc2hib2FyZCxcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qcyA9IHVzZXIuZ2V0UHJvamVjdHMoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdEYXNoYm9hcmQocHJvanMsIG1vZGVsKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBtb2RlbFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXNoYm9hcmQpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdFbXB0eURhc2hib2FyZChtb2RlbDogTWFuYWdlck1vZGVsKSB7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2VtcHR5RGFzaGJvYXJkTWVzc2FnZScpWzBdKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnZW1wdHlEYXNoYm9hcmRNZXNzYWdlJztcclxuXHJcbiAgICAgICAgY29uc3QgaW1nRW1wdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBpbWdFbXB0eS5jbGFzc05hbWUgPSAnaW1nRW1wdHlEYXNoYm9hcmQnO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbWdFbXB0eSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxibE1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGxibE1lc3NhZ2UuY2xhc3NOYW1lID0gJ2xibEVtcHR5RGFzaGJvYXJkJztcclxuICAgICAgICBsYmxNZXNzYWdlLmlubmVySFRNTCA9ICdZb3VyIGRhc2hib2FyZCBpcyBlbXB0eS4uLic7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxibE1lc3NhZ2UpO1xyXG5cclxuICAgICAgICBjb25zdCBidG5BZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidG5BZGQuaWQgPSAnYnRuQWRkUHJvamVjdEVtcHR5JztcclxuICAgICAgICBidG5BZGQuY2xhc3NOYW1lID0gJ2J0biBidG4tc3VjY2Vzcyc7XHJcbiAgICAgICAgYnRuQWRkLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNsZWFyIGRhc2hib2FyZFxyXG4gICAgICAgICAgICBsZXQgZGFzaGJvYXJkID0gPEhUTUxFbGVtZW50PihcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Rhc2hib2FyZCcpWzBdXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGlmIChkYXNoYm9hcmQpIHtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChkYXNoYm9hcmQuY2hpbGRyZW5bMF0pIGRhc2hib2FyZC5jaGlsZHJlblswXS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRhc2hib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRhc2hib2FyZC5jbGFzc05hbWUgPSAnZGFzaGJvYXJkJztcclxuXHJcbiAgICAgICAgICAgIC8vIGNsZWFyIGVtcHR5IGRhc2hib2FyZCBtZXNzYWdlXHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2o6IFByb2plY3RWaWV3ID0gbmV3IFByb2plY3RWaWV3KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBtb2RlbC5nZXRDdXJyZW50VXNlcigpO1xyXG4gICAgICAgICAgICBuZXdQcm9qLmRyYXdFZGl0b3IoXHJcbiAgICAgICAgICAgICAgICBkYXNoYm9hcmQsXHJcbiAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4gdGhpcy5kcmF3RGFzaGJvYXJkKHVzZXIubW9kZWwuZ2V0UHJvamVjdHMoKSwgbW9kZWwpLFxyXG4gICAgICAgICAgICAgICAgbW9kZWxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGJ0bkFkZC5pbm5lckhUTUwgPVxyXG4gICAgICAgICAgICAnPGkgY2xhc3M9XCJmYXMgZmEtcGx1c1wiIGlkPVwiaWNvblBsdXNcIj48L2k+QWRkIHByb2plY3QnO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidG5BZGQpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdQcm9maWxlRHJvcGRvd24ocGFyZW50OiBIVE1MRWxlbWVudCwgbW9kZWw6IE1hbmFnZXJNb2RlbCkge1xyXG4gICAgICAgIC8vIFVzZXIgZHJvcGRvd24gbWVudVxyXG4gICAgICAgIGxldCBkcm9wZG93bkl0ZW1zID0gW107XHJcblxyXG4gICAgICAgIC8vIFVzZXIgbmlja25hbWVcclxuICAgICAgICBjb25zdCB1c2VyOiBVc2VyID0gbW9kZWwuZ2V0Q3VycmVudFVzZXIoKTtcclxuICAgICAgICBjb25zdCBuaWNrbmFtZUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBuaWNrbmFtZUl0ZW0uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIG5pY2tuYW1lSXRlbS5jbGFzc05hbWUgPSAnZHJvcGRvd24taXRlbSc7XHJcbiAgICAgICAgbmlja25hbWVJdGVtLmlubmVySFRNTCA9IGAjJHt1c2VyLm1vZGVsLmdldElkKCl9IHwgJHtcclxuICAgICAgICAgICAgdXNlci5tb2RlbC5uaWNrbmFtZVxyXG4gICAgICAgIH1gO1xyXG4gICAgICAgIGRyb3Bkb3duSXRlbXMucHVzaChuaWNrbmFtZUl0ZW0pO1xyXG5cclxuICAgICAgICAvLyBMb2dvdXQgYnV0dG9uXHJcbiAgICAgICAgY29uc3QgYnRuTG9nb3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgIGJ0bkxvZ291dC5jbGFzc05hbWUgPSAnZHJvcGRvd24taXRlbSc7XHJcbiAgICAgICAgYnRuTG9nb3V0LmlubmVySFRNTCA9ICdMb2cgb3V0JztcclxuICAgICAgICBidG5Mb2dvdXQub25jbGljayA9ICgpID0+IG1vZGVsLmxvZ291dFVzZXIoKTtcclxuICAgICAgICBkcm9wZG93bkl0ZW1zLnB1c2goYnRuTG9nb3V0KTtcclxuXHJcbiAgICAgICAgY29uc3QgZHJvcGRvd24gPSBkcmF3RHJvcGRvd25CdXR0b24oXHJcbiAgICAgICAgICAgIHBhcmVudCxcclxuICAgICAgICAgICAgJ2J0blByb2ZpbGVEcm9wZG93bicsXHJcbiAgICAgICAgICAgIGRyb3Bkb3duSXRlbXNcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGJ0blByb2ZpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBkcm9wZG93bi5hcHBlbmRDaGlsZChidG5Qcm9maWxlKTtcclxuICAgICAgICBidG5Qcm9maWxlLmNsYXNzTmFtZSA9ICdidG4gYnRuLWxpZ2h0IGRyb3Bkb3duLXRvZ2dsZSBtZW51QnV0dG9uJztcclxuICAgICAgICBidG5Qcm9maWxlLmlkID0gJ2J0blByb2ZpbGVEcm9wZG93bic7XHJcbiAgICAgICAgYnRuUHJvZmlsZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgJ2Ryb3Bkb3duJyk7XHJcbiAgICAgICAgYnRuUHJvZmlsZS5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXMgZmEtdXNlciBpY29uQ29sb3JcIj48L2k+JztcclxuICAgIH1cclxuXHJcbiAgICBkcmF3U29ydGluZ0Ryb3Bkb3duKHBhcmVudDogSFRNTERpdkVsZW1lbnQsIG1vZGVsOiBNYW5hZ2VyTW9kZWwpIHtcclxuICAgICAgICAvLyBTb3J0aW5nIGRyb3Bkb3duXHJcbiAgICAgICAgbGV0IGRyb3Bkb3duSXRlbXM6IEhUTUxBbmNob3JFbGVtZW50W10gPSBbXTtcclxuXHJcbiAgICAgICAgLy8gU29ydCBieSBkYXRlIGFkZGVkXHJcbiAgICAgICAgY29uc3QgYnRuU29ydERhdGVBZGRlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICBidG5Tb3J0RGF0ZUFkZGVkLmNsYXNzTmFtZSA9ICdkcm9wZG93bi1pdGVtJztcclxuICAgICAgICBidG5Tb3J0RGF0ZUFkZGVkLmlubmVySFRNTCA9ICdEYXRlIGFkZGVkIOKckyc7XHJcbiAgICAgICAgYnRuU29ydERhdGVBZGRlZC5vbmNsaWNrID0gKCkgPT5cclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTb3J0aW5nTWV0aG9kKFxyXG4gICAgICAgICAgICAgICAgJ2dldFRpbWVzdGFtcCcsXHJcbiAgICAgICAgICAgICAgICBidG5Tb3J0RGF0ZUFkZGVkLFxyXG4gICAgICAgICAgICAgICAgZHJvcGRvd25JdGVtcyxcclxuICAgICAgICAgICAgICAgIG1vZGVsLFxyXG4gICAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIGRyb3Bkb3duSXRlbXMucHVzaChidG5Tb3J0RGF0ZUFkZGVkKTtcclxuXHJcbiAgICAgICAgLy8gU29ydCBieSB1cmdlbmN5XHJcbiAgICAgICAgY29uc3QgYnRuU29ydFVyZ2VuY3kgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgYnRuU29ydFVyZ2VuY3kuY2xhc3NOYW1lID0gJ2Ryb3Bkb3duLWl0ZW0nO1xyXG4gICAgICAgIGJ0blNvcnRVcmdlbmN5LmlubmVySFRNTCA9ICdVcmdlbmN5JztcclxuICAgICAgICBidG5Tb3J0VXJnZW5jeS5vbmNsaWNrID0gKCkgPT5cclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTb3J0aW5nTWV0aG9kKFxyXG4gICAgICAgICAgICAgICAgJ2dldER1ZURhdGUnLFxyXG4gICAgICAgICAgICAgICAgYnRuU29ydFVyZ2VuY3ksXHJcbiAgICAgICAgICAgICAgICBkcm9wZG93bkl0ZW1zLFxyXG4gICAgICAgICAgICAgICAgbW9kZWxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBkcm9wZG93bkl0ZW1zLnB1c2goYnRuU29ydFVyZ2VuY3kpO1xyXG5cclxuICAgICAgICAvLyBTb3J0IGJ5IG51bWJlciBvZiB0YXNrc1xyXG4gICAgICAgIGNvbnN0IGJ0blNvcnRUYXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICBidG5Tb3J0VGFza3MuY2xhc3NOYW1lID0gJ2Ryb3Bkb3duLWl0ZW0nO1xyXG4gICAgICAgIGJ0blNvcnRUYXNrcy5pbm5lckhUTUwgPSAnTnVtYmVyIG9mIHRhc2tzJztcclxuICAgICAgICBidG5Tb3J0VGFza3Mub25jbGljayA9ICgpID0+XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU29ydGluZ01ldGhvZChcclxuICAgICAgICAgICAgICAgICdnZXROdW1PZlRhc2tzJyxcclxuICAgICAgICAgICAgICAgIGJ0blNvcnRUYXNrcyxcclxuICAgICAgICAgICAgICAgIGRyb3Bkb3duSXRlbXMsXHJcbiAgICAgICAgICAgICAgICBtb2RlbCxcclxuICAgICAgICAgICAgICAgIHRydWVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBkcm9wZG93bkl0ZW1zLnB1c2goYnRuU29ydFRhc2tzKTtcclxuXHJcbiAgICAgICAgY29uc3QgZHJvcGRvd24gPSBkcmF3RHJvcGRvd25CdXR0b24oXHJcbiAgICAgICAgICAgIHBhcmVudCxcclxuICAgICAgICAgICAgJ2J0blNvcnREcm9wZG93bicsXHJcbiAgICAgICAgICAgIGRyb3Bkb3duSXRlbXNcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGJ0blNvcnRCeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGRyb3Bkb3duLmFwcGVuZENoaWxkKGJ0blNvcnRCeSk7XHJcbiAgICAgICAgYnRuU29ydEJ5LmNsYXNzTmFtZSA9ICdidG4gYnRuLWxpZ2h0IGRyb3Bkb3duLXRvZ2dsZSBtZW51QnV0dG9uJztcclxuICAgICAgICBidG5Tb3J0QnkuaWQgPSAnYnRuU29ydERyb3Bkb3duJztcclxuICAgICAgICBidG5Tb3J0Qnkuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICdkcm9wZG93bicpO1xyXG4gICAgICAgIGJ0blNvcnRCeS5pbm5lckhUTUwgPSAnU29ydCBieSc7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0FjdGlvbkRyb3Bkb3duKHBhcmVudDogSFRNTERpdkVsZW1lbnQsIG1vZGVsOiBNYW5hZ2VyTW9kZWwpIHtcclxuICAgICAgICAvLyBBY3Rpb24gZHJvcGRvd25cclxuICAgICAgICBsZXQgZHJvcGRvd25JdGVtczogSFRNTEFuY2hvckVsZW1lbnRbXSA9IFtdO1xyXG5cclxuICAgICAgICAvLyBNYXJrIGFsbCBhcyBmaW5pc2hlZFxyXG4gICAgICAgIGNvbnN0IGJ0bk1hcmtBbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgYnRuTWFya0FsbC5jbGFzc05hbWUgPSAnZHJvcGRvd24taXRlbSc7XHJcbiAgICAgICAgYnRuTWFya0FsbC5pbm5lckhUTUwgPSAnTWFyayBhbGwgYXMgZmluaXNoZWQnO1xyXG4gICAgICAgIGJ0bk1hcmtBbGwub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgLy8gZGlzcGxheSBjb25maXJtYXRpb24gbWVzc2FnZVxyXG4gICAgICAgICAgICBkaXNwbGF5TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICdyZWQnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdDb25maXJtYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTpcclxuICAgICAgICAgICAgICAgICAgICAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIG1hcmsgYWxsIHByb2plY3RzIGFzIGZpbmlzaGVkPycsXHJcbiAgICAgICAgICAgICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnWWVzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3ByaW1hcnknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUGVyZm9ybSBhY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBtb2RlbC5nZXRDdXJyZW50VXNlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlci5tb2RlbC5tYXJrQWxsQXNGaW5pc2hlZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdHMgPSB1c2VyLm1vZGVsLmdldFByb2plY3RzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRhYmFzZUFQSS51cGRhdGVQcm9qZWN0cyhwcm9qZWN0cykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVkcmF3IHByb2plY3RzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWRyYXdEYXNoYm9hcmQocHJvamVjdHMsIG1vZGVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBub3RpZnkgdXNlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlQb3B1cCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JlZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1N1Y2Nlc3NmdWwgYWN0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdTdWNjZXNzZnVsbHkgbWFya2VkIGFsbCBwcm9qZWN0cyBhcyBmaW5pc2hlZC4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdObycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzZWNvbmRhcnknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge30sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZHJvcGRvd25JdGVtcy5wdXNoKGJ0bk1hcmtBbGwpO1xyXG5cclxuICAgICAgICAvLyBEZWxldGUgYWxsXHJcbiAgICAgICAgY29uc3QgYnRuRGVsZXRlQWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgIGJ0bkRlbGV0ZUFsbC5jbGFzc05hbWUgPSAnZHJvcGRvd24taXRlbSc7XHJcbiAgICAgICAgYnRuRGVsZXRlQWxsLmlubmVySFRNTCA9ICdEZWxldGUgYWxsIHByb2plY3RzJztcclxuICAgICAgICBidG5EZWxldGVBbGwub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgLy8gZGlzcGxheSBjb25maXJtYXRpb24gbWVzc2FnZVxyXG4gICAgICAgICAgICBkaXNwbGF5TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICdyZWQnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdDb25maXJtYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgYWxsIHByb2plY3RzPycsXHJcbiAgICAgICAgICAgICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnWWVzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2RhbmdlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBQZXJmb3JtIGFjdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IG1vZGVsLmdldEN1cnJlbnRVc2VyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBEYXRhYmFzZUFQSS5kZWxldGVQcm9qZWN0cyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyLm1vZGVsLmdldFByb2plY3RzKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlci5tb2RlbC5zZXRQcm9qZWN0cyhbXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlIHVpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWRyYXdEYXNoYm9hcmQoW10sIG1vZGVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBub3RpZnkgdXNlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlQb3B1cCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JlZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1N1Y2Nlc3NmdWwgYWN0aW9uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdTdWNjZXNzZnVsbHkgZGVsZXRlZCBhbGwgcHJvamVjdHMuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnTm8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc2Vjb25kYXJ5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGRyb3Bkb3duSXRlbXMucHVzaChidG5EZWxldGVBbGwpO1xyXG5cclxuICAgICAgICAvLyBBY3Rpb24gYnV0dG9uXHJcbiAgICAgICAgY29uc3QgZHJvcGRvd24gPSBkcmF3RHJvcGRvd25CdXR0b24ocGFyZW50LCAnYnRuQWN0aW9uJywgZHJvcGRvd25JdGVtcyk7XHJcbiAgICAgICAgY29uc3QgYnRuQWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgZHJvcGRvd24uYXBwZW5kQ2hpbGQoYnRuQWN0aW9uKTtcclxuICAgICAgICBidG5BY3Rpb24uY2xhc3NOYW1lID0gJ2J0biBidG4tbGlnaHQgZHJvcGRvd24tdG9nZ2xlIG1lbnVCdXR0b24nO1xyXG4gICAgICAgIGJ0bkFjdGlvbi5pZCA9ICdidG5BY3Rpb24nO1xyXG4gICAgICAgIGJ0bkFjdGlvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgJ2Ryb3Bkb3duJyk7XHJcbiAgICAgICAgYnRuQWN0aW9uLmlubmVySFRNTCA9ICdBY3Rpb24nO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdGaWx0ZXJEcm9wZG93bihwYXJlbnQ6IEhUTUxEaXZFbGVtZW50LCBtb2RlbDogTWFuYWdlck1vZGVsKSB7XHJcbiAgICAgICAgLy8gRmlsdGVyIGRyb3Bkb3duXHJcbiAgICAgICAgbGV0IGRyb3Bkb3duSXRlbXM6IEhUTUxFbGVtZW50W10gPSBbXTtcclxuICAgICAgICBjb25zdCB1c2VyID0gbW9kZWwuZ2V0Q3VycmVudFVzZXIoKTtcclxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IHVzZXIubW9kZWwuZ2V0UHJvamVjdHMoKTtcclxuXHJcbiAgICAgICAgLy8gRmlsdGVyIEFMTCBwcm9qZWN0c1xyXG4gICAgICAgIGNvbnN0IGJ0bkZpbHRlckFsbCA9IHRoaXMuY3JlYXRlRmlsdGVyRHJvcGRvd25JdGVtKFxyXG4gICAgICAgICAgICAnQWxsIOKckycsXHJcbiAgICAgICAgICAgIG1vZGVsLFxyXG4gICAgICAgICAgICBkcm9wZG93bkl0ZW1zXHJcbiAgICAgICAgKTtcclxuICAgICAgICBkcm9wZG93bkl0ZW1zLnB1c2goYnRuRmlsdGVyQWxsKTtcclxuXHJcbiAgICAgICAgLy8gRmlsdGVyIFRPIERPIHByb2plY3RzXHJcbiAgICAgICAgY29uc3QgYnRuRmlsdGVyVG9EbyA9IHRoaXMuY3JlYXRlRmlsdGVyRHJvcGRvd25JdGVtKFxyXG4gICAgICAgICAgICAnVG8gZG8nLFxyXG4gICAgICAgICAgICBtb2RlbCxcclxuICAgICAgICAgICAgZHJvcGRvd25JdGVtcyxcclxuICAgICAgICAgICAgVGFza1N0YXRlLlRPX0RPXHJcbiAgICAgICAgKTtcclxuICAgICAgICBkcm9wZG93bkl0ZW1zLnB1c2goYnRuRmlsdGVyVG9Ebyk7XHJcblxyXG4gICAgICAgIC8vIEZpbHRlciBJTiBQUk9HUkVTUyBwcm9qZWN0c1xyXG4gICAgICAgIGNvbnN0IGJ0bkluUHJvZ3Jlc3MgPSB0aGlzLmNyZWF0ZUZpbHRlckRyb3Bkb3duSXRlbShcclxuICAgICAgICAgICAgJ0luIHByb2dyZXNzJyxcclxuICAgICAgICAgICAgbW9kZWwsXHJcbiAgICAgICAgICAgIGRyb3Bkb3duSXRlbXMsXHJcbiAgICAgICAgICAgIFRhc2tTdGF0ZS5JTl9QUk9HUkVTU1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgZHJvcGRvd25JdGVtcy5wdXNoKGJ0bkluUHJvZ3Jlc3MpO1xyXG5cclxuICAgICAgICAvLyBGaWx0ZXIgRklOSVNIRUQgcHJvamVjdHNcclxuICAgICAgICBjb25zdCBidG5GaW5pc2hlZCA9IHRoaXMuY3JlYXRlRmlsdGVyRHJvcGRvd25JdGVtKFxyXG4gICAgICAgICAgICAnRmluaXNoZWQnLFxyXG4gICAgICAgICAgICBtb2RlbCxcclxuICAgICAgICAgICAgZHJvcGRvd25JdGVtcyxcclxuICAgICAgICAgICAgVGFza1N0YXRlLkZJTklTSEVEXHJcbiAgICAgICAgKTtcclxuICAgICAgICBkcm9wZG93bkl0ZW1zLnB1c2goYnRuRmluaXNoZWQpO1xyXG5cclxuICAgICAgICAvLyBGaWx0ZXIgYnV0dG9uXHJcbiAgICAgICAgY29uc3QgZHJvcGRvd24gPSBkcmF3RHJvcGRvd25CdXR0b24oXHJcbiAgICAgICAgICAgIHBhcmVudCxcclxuICAgICAgICAgICAgJ2J0bkZpbHRlckRyb3Bkb3duJyxcclxuICAgICAgICAgICAgZHJvcGRvd25JdGVtc1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgYnRuRmlsdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgZHJvcGRvd24uYXBwZW5kQ2hpbGQoYnRuRmlsdGVyKTtcclxuICAgICAgICBidG5GaWx0ZXIuY2xhc3NOYW1lID0gJ2J0biBidG4tbGlnaHQgZHJvcGRvd24tdG9nZ2xlIG1lbnVCdXR0b24nO1xyXG4gICAgICAgIGJ0bkZpbHRlci5pZCA9ICdidG5GaWx0ZXJEcm9wZG93bic7XHJcbiAgICAgICAgYnRuRmlsdGVyLnNldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnLCAnZHJvcGRvd24nKTtcclxuICAgICAgICBidG5GaWx0ZXIuaW5uZXJIVE1MID0gJ0ZpbHRlcic7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRmlsdGVyRHJvcGRvd25JdGVtKFxyXG4gICAgICAgIGJ0blRleHQ6IHN0cmluZyxcclxuICAgICAgICBtb2RlbDogTWFuYWdlck1vZGVsLFxyXG4gICAgICAgIGRyb3Bkb3duSXRlbXM6IEhUTUxFbGVtZW50W10sXHJcbiAgICAgICAgc3RhdGU6IFRhc2tTdGF0ZSA9IG51bGxcclxuICAgICk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgYnRuLmNsYXNzTmFtZSA9ICdkcm9wZG93bi1pdGVtJztcclxuICAgICAgICBidG4uaW5uZXJIVE1MID0gYnRuVGV4dDtcclxuICAgICAgICBidG4ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdXNlciA9IG1vZGVsLmdldEN1cnJlbnRVc2VyKCkubW9kZWw7XHJcbiAgICAgICAgICAgIGlmIChzdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWRyYXdEYXNoYm9hcmQoXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZ2V0UHJvamVjdHMoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHA6IFByb2plY3QpID0+IHAubW9kZWwuZ2V0UHJvamVjdFN0YXRlKCkgPT09IHN0YXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWxcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB0aGlzLnJlZHJhd0Rhc2hib2FyZCh1c2VyLmdldFByb2plY3RzKCksIG1vZGVsKTtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VGaWx0ZXJpbmdDaGVja21hcmsoZHJvcGRvd25JdGVtcywgYnRuKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBidG47XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlRmlsdGVyaW5nQ2hlY2ttYXJrKGRyb3Bkb3duSXRlbXM6IEVsZW1lbnRbXSwgc2VsZWN0ZWRJdGVtOiBFbGVtZW50KSB7XHJcbiAgICAgICAgLy8gbWFrZSB0aGlzIHNvcnRpbmcgbWV0aG9kIGFjdGl2ZVxyXG4gICAgICAgIGRyb3Bkb3duSXRlbXMubWFwKFxyXG4gICAgICAgICAgICAoZWwpID0+IChlbC5pbm5lckhUTUwgPSBlbC5pbm5lckhUTUwucmVwbGFjZSgnIOKckycsICcnKSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHNlbGVjdGVkSXRlbS5pbm5lckhUTUwgKz0gJyDinJMnO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZVNvcnRpbmdNZXRob2QoXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0VGltZXN0YW1wJyB8ICdnZXREdWVEYXRlJyB8ICdnZXROdW1PZlRhc2tzJyxcclxuICAgICAgICBzb3J0aW5nQnV0dG9uRWw6IEhUTUxFbGVtZW50LFxyXG4gICAgICAgIGRyb3Bkb3duQXJyYXk6IEhUTUxFbGVtZW50W10sXHJcbiAgICAgICAgbW9kZWw6IE1hbmFnZXJNb2RlbCxcclxuICAgICAgICByZXZlcnNlT3BlcmF0b3JzOiBib29sZWFuID0gZmFsc2VcclxuICAgICkge1xyXG4gICAgICAgIC8vIG1ha2UgdGhpcyBzb3J0aW5nIG1ldGhvZCBhY3RpdmVcclxuICAgICAgICBkcm9wZG93bkFycmF5Lm1hcChcclxuICAgICAgICAgICAgKGVsKSA9PiAoZWwuaW5uZXJIVE1MID0gZWwuaW5uZXJIVE1MLnJlcGxhY2UoJyDinJMnLCAnJykpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzb3J0aW5nQnV0dG9uRWwuaW5uZXJIVE1MICs9ICcg4pyTJztcclxuXHJcbiAgICAgICAgLy8gYXBwbHkgc29ydGluZyBtZXRob2RcclxuICAgICAgICBjb25zdCB1c2VyID0gbW9kZWwuZ2V0Q3VycmVudFVzZXIoKTtcclxuICAgICAgICB1c2VyLm1vZGVsLnNvcnRQcm9qZWN0cyhtZXRob2QsIHJldmVyc2VPcGVyYXRvcnMpO1xyXG5cclxuICAgICAgICAvLyByZWRyYXcgZGFzaGJvYXJkXHJcbiAgICAgICAgdGhpcy5yZWRyYXdEYXNoYm9hcmQodXNlci5tb2RlbC5nZXRQcm9qZWN0cygpLCBtb2RlbCk7XHJcblxyXG4gICAgICAgIC8vIHJlc2V0IGZpbHRlcmluZyBtZXRob2RcclxuICAgICAgICBjb25zdCBmaWx0ZXJEcm9wZG93bkl0ZW1zID1cclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bkZpbHRlckRyb3Bkb3duJykucGFyZW50RWxlbWVudFxyXG4gICAgICAgICAgICAgICAgLmNoaWxkcmVuWzBdLmNoaWxkcmVuO1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zOiBFbGVtZW50W10gPSBBcnJheS5mcm9tKGZpbHRlckRyb3Bkb3duSXRlbXMpO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlRmlsdGVyaW5nQ2hlY2ttYXJrKGl0ZW1zLCBpdGVtc1swXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVkcmF3RGFzaGJvYXJkKHByb2plY3RzOiBQcm9qZWN0W10sIG1vZGVsOiBNYW5hZ2VyTW9kZWwpIHtcclxuICAgICAgICAvLyBjbGVhciBlbXB0eSBkYXNoYm9hcmQgbWVzc2FnZSAoaWYgZXhpc3RzKVxyXG4gICAgICAgIGNvbnN0IGVtcHR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgICAgICAgJ2VtcHR5RGFzaGJvYXJkTWVzc2FnZSdcclxuICAgICAgICApWzBdO1xyXG4gICAgICAgIGlmIChlbXB0eSkgZW1wdHkucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgIC8vIGNsZWFyIHByZXZpb3VzIGRhc2hib2FyZFxyXG4gICAgICAgIGNvbnN0IGRhc2hib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Rhc2hib2FyZCcpWzBdO1xyXG4gICAgICAgIHJlbW92ZUVsZW1lbnRzQ2hpbGRyZW4oZGFzaGJvYXJkKTtcclxuXHJcbiAgICAgICAgLy8gcmVkcmF3XHJcbiAgICAgICAgdGhpcy5kcmF3RGFzaGJvYXJkKHByb2plY3RzLCBtb2RlbCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTWFuYWdlck1vZGVsIH0gZnJvbSBcIi4uL21hbmFnZXIvbW9kZWxcIjtcclxuaW1wb3J0IHsgUHJvamVjdE1vZGVsIH0gZnJvbSBcIi4vbW9kZWxcIjtcclxuaW1wb3J0IHsgUHJvamVjdFZpZXcgfSBmcm9tIFwiLi92aWV3XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdCB7XHJcbiAgICBwdWJsaWMgbW9kZWw6IFByb2plY3RNb2RlbDtcclxuICAgIHB1YmxpYyB2aWV3OiBQcm9qZWN0VmlldztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIGR1ZURhdGU6IERhdGUsIHRpbWVzdGFtcDogRGF0ZSkge1xyXG4gICAgICAgIHRoaXMubW9kZWwgPSBuZXcgUHJvamVjdE1vZGVsKGlkLCBuYW1lLCBkdWVEYXRlLCB0aW1lc3RhbXApO1xyXG4gICAgICAgIHRoaXMudmlldyA9IG5ldyBQcm9qZWN0VmlldygpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdQcmV2aWV3KHBhcmVudDogSFRNTEVsZW1lbnQsIGdvQmFja0Z1bmN0aW9uQ2FsbGJhY2s6IEZ1bmN0aW9uLCBtYW5hZ2VyTW9kZWw6IE1hbmFnZXJNb2RlbCkge1xyXG4gICAgICAgIHRoaXMudmlldy5kcmF3UHJldmlldyhwYXJlbnQsIHRoaXMubW9kZWwsIGdvQmFja0Z1bmN0aW9uQ2FsbGJhY2ssIG1hbmFnZXJNb2RlbCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBmb3JtYXQsIGZvcm1hdERpc3RhbmNlIH0gZnJvbSAnZGF0ZS1mbnMnO1xyXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi4vdGFzay9jb250cm9sbGVyJztcclxuaW1wb3J0IHsgVGFza1N0YXRlIH0gZnJvbSAnLi4vdXRpbHMvdGFza1N0YXRlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0TW9kZWwge1xyXG4gICAgcHJpdmF0ZSBpZDogbnVtYmVyO1xyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICAgIHByaXZhdGUgdGFza3M6IFRhc2tbXTtcclxuICAgIHByaXZhdGUgZHVlRGF0ZTogRGF0ZTtcclxuICAgIHByaXZhdGUgdGltZXN0YW1wOiBEYXRlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIG5hbWU6IHN0cmluZywgZHVlRGF0ZTogRGF0ZSwgdGltZXN0YW1wOiBEYXRlKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICAgICAgdGhpcy50aW1lc3RhbXAgPSB0aW1lc3RhbXA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SWQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUYXNrcygpOiBUYXNrW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE51bU9mVGFza3MoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50YXNrcy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGFza3ModDogVGFza1tdKSB7XHJcbiAgICAgICAgaWYgKHQgPT09IG51bGwpIHJldHVybjtcclxuICAgICAgICB0aGlzLnRhc2tzID0gdDtcclxuICAgIH1cclxuXHJcbiAgICBnZXREdWVEYXRlKCk6IERhdGUge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLmR1ZURhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldER1ZURhdGUoZDogRGF0ZSkge1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RHVlRGF0ZUZvcm1hdHRlZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBmb3JtYXQodGhpcy5nZXREdWVEYXRlKCksICd5eXl5LU1NLWRkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGltZXN0YW1wKCk6IERhdGUge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLnRpbWVzdGFtcCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGFzayh0OiBUYXNrKSB7XHJcbiAgICAgICAgdGhpcy50YXNrcy5wdXNoKHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVRhc2soaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcigodDogVGFzaykgPT4gdC5tb2RlbC5nZXRJZCgpICE9PSBpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgbWFya0FzRmluaXNoZWQoKSB7XHJcbiAgICAgICAgdGhpcy50YXNrcy5tYXAoKHRhc2s6IFRhc2spID0+IHtcclxuICAgICAgICAgICAgdGFzay5tb2RlbC5zZXRTdGF0ZShUYXNrU3RhdGUuRklOSVNIRUQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBlcmNlbnRhZ2VEb25lKCk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHRoaXMudGFza3MubGVuZ3RoID09PSAwKSByZXR1cm4gMDtcclxuXHJcbiAgICAgICAgY29uc3QgbnVtT2ZUYXNrcyA9IHRoaXMudGFza3MubGVuZ3RoO1xyXG4gICAgICAgIGNvbnN0IG51bU9mRmluaXNoZWRUYXNrcyA9IHRoaXMuZ2V0TnVtT2ZUYXNrc0luU3RhdGUoXHJcbiAgICAgICAgICAgIFRhc2tTdGF0ZS5GSU5JU0hFRFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgbnVtT2ZJblByb2dyZXNzVGFza3MgPSB0aGlzLmdldE51bU9mVGFza3NJblN0YXRlKFxyXG4gICAgICAgICAgICBUYXNrU3RhdGUuSU5fUFJPR1JFU1NcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChcclxuICAgICAgICAgICAgKChudW1PZkZpbmlzaGVkVGFza3MgKyBudW1PZkluUHJvZ3Jlc3NUYXNrcyAvIDIpIC8gbnVtT2ZUYXNrcykgKiAxMDBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE51bU9mVGFza3NJblN0YXRlKHN0YXRlOiBUYXNrU3RhdGUpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tzLnJlZHVjZSgoYWNjOiBudW1iZXIsIGN1cnI6IFRhc2spOiBudW1iZXIgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY3Vyci5tb2RlbC5nZXRTdGF0ZSgpID09PSBzdGF0ZSkgYWNjICs9IDE7XHJcbiAgICAgICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGltZVJlbWFpbmluZyhhZGRTdWZmaXg6IGJvb2xlYW4gPSBmYWxzZSwgcmVmVGltZTogRGF0ZSA9IG51bGwpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IHJlZmZlcmVuY2VUaW1lOiBEYXRlID0gcmVmVGltZSA/IHJlZlRpbWUgOiB0aGlzLmdldER1ZURhdGUoKTtcclxuICAgICAgICBpZiAocmVmZmVyZW5jZVRpbWUgPCBuZXcgRGF0ZSgpKVxyXG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0RGlzdGFuY2UocmVmZmVyZW5jZVRpbWUsIG5ldyBEYXRlKCksIHtcclxuICAgICAgICAgICAgICAgIGFkZFN1ZmZpeDogYWRkU3VmZml4LFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBlbHNlIHJldHVybiBmb3JtYXREaXN0YW5jZShyZWZmZXJlbmNlVGltZSwgbmV3IERhdGUoKSkgKyAnIGxlZnQnO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByb2plY3RTdGF0ZSgpOiBUYXNrU3RhdGUge1xyXG4gICAgICAgIGNvbnN0IG51bU9mVGFza3MgPSB0aGlzLmdldE51bU9mVGFza3MoKTtcclxuICAgICAgICBpZiAobnVtT2ZUYXNrcyA9PT0gMCkgcmV0dXJuIFRhc2tTdGF0ZS5UT19ETztcclxuXHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFRhc2tTdGF0ZS5UT19ETztcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bU9mVGFza3M7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VGFza1N0YXRlID0gdGhpcy50YXNrc1tpXS5tb2RlbC5nZXRTdGF0ZSgpO1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50VGFza1N0YXRlID09PSBUYXNrU3RhdGUuSU5fUFJPR1JFU1MgfHxcclxuICAgICAgICAgICAgICAgIChyZXN1bHQgPT09IFRhc2tTdGF0ZS5GSU5JU0hFRCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUYXNrU3RhdGUgPT09IFRhc2tTdGF0ZS5UT19ETylcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBUYXNrU3RhdGUuSU5fUFJPR1JFU1M7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRUYXNrU3RhdGUgPT09IFRhc2tTdGF0ZS5GSU5JU0hFRCkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gVGFza1N0YXRlLkZJTklTSEVEO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcblxyXG4gICAgICAgIC8vIGNvbnN0IG51bU9mVG9Eb1Rhc2tzID0gdGhpcy5nZXROdW1PZlRhc2tzSW5TdGF0ZShUYXNrU3RhdGUuVE9fRE8pO1xyXG4gICAgICAgIC8vIGNvbnN0IG51bU9mSW5Qcm9ncmVzc1Rhc2tzID0gdGhpcy5nZXROdW1PZlRhc2tzSW5TdGF0ZShUYXNrU3RhdGUuSU5fUFJPR1JFU1MpO1xyXG4gICAgICAgIC8vIGNvbnN0IG51bU9mRmluaXNoZWRUYXNrcyA9IHRoaXMuZ2V0TnVtT2ZUYXNrc0luU3RhdGUoVGFza1N0YXRlLkZJTklTSEVEKTtcclxuXHJcbiAgICAgICAgLy8gaWYgKG51bU9mVG9Eb1Rhc2tzID09PSBudW1PZlRhc2tzKSByZXR1cm4gVGFza1N0YXRlLlRPX0RPO1xyXG4gICAgICAgIC8vIGlmIChudW1PZkluUHJvZ3Jlc3NUYXNrcyA+IDApIHJldHVybiBUYXNrU3RhdGUuSU5fUFJPR1JFU1M7XHJcbiAgICAgICAgLy8gaWYgKG51bU9mRmluaXNoZWRUYXNrcyA9PT0gbnVtT2ZUYXNrcykgcmV0dXJuIFRhc2tTdGF0ZS5GSU5JU0hFRDtcclxuXHJcbiAgICAgICAgLy8gcmV0dXJuIFRhc2tTdGF0ZS5JTl9QUk9HUkVTUztcclxuICAgIH1cclxuXHJcbiAgICBnZXRUYXNrc0luU3RhdGUoc3RhdGU6IFRhc2tTdGF0ZSk6IFRhc2tbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3MuZmlsdGVyKCh0OiBUYXNrKSA9PiB0Lm1vZGVsLmdldFN0YXRlKCkgPT09IHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZVByb2plY3RJbnB1dChwcm9qZWN0TmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHByb2plY3ROYW1lID09PSAnJykgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEYXRhYmFzZUFQSSB9IGZyb20gJy4uL3V0aWxzL2RhdGFiYXNlQVBJJztcclxuaW1wb3J0IHsgTWFuYWdlck1vZGVsIH0gZnJvbSAnLi4vbWFuYWdlci9tb2RlbCc7XHJcbmltcG9ydCB7IE1hbmFnZXJWaWV3IH0gZnJvbSAnLi4vbWFuYWdlci92aWV3JztcclxuaW1wb3J0IHsgVGFzayB9IGZyb20gJy4uL3Rhc2svY29udHJvbGxlcic7XHJcbmltcG9ydCB7IFRhc2tTdGF0ZSB9IGZyb20gJy4uL3V0aWxzL3Rhc2tTdGF0ZSc7XHJcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL2NvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBQcm9qZWN0TW9kZWwgfSBmcm9tICcuL21vZGVsJztcclxuaW1wb3J0IHsgcmVtb3ZlRWxlbWVudHNDaGlsZHJlbiB9IGZyb20gJy4uL3V0aWxzL3JlbW92ZUVsZW1lbnRzQ2hpbGRyZW4nO1xyXG5pbXBvcnQgeyBzaG9ydGVuU3RyaW5nIH0gZnJvbSAnLi4vdXRpbHMvc2hvcnRlblN0cmluZyc7XHJcbmltcG9ydCB7IGRpc3BsYXlQb3B1cCB9IGZyb20gJy4uL3V0aWxzL3RvYXN0JztcclxuaW1wb3J0IHsgZHJhd0Ryb3Bkb3duQnV0dG9uIH0gZnJvbSAnLi4vdXRpbHMvZHJvcGRvd24nO1xyXG5pbXBvcnQgeyBkaXNwbGF5TW9kYWwgfSBmcm9tICcuLi91dGlscy9tb2RhbCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdFZpZXcge1xyXG4gICAgY29udGFpbmVyOiBIVE1MRWxlbWVudDtcclxuICAgIHBhcmVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5jbGFzc05hbWUgPSAncHJvamVjdCc7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd1ByZXZpZXcoXHJcbiAgICAgICAgcGFyZW50OiBIVE1MRWxlbWVudCxcclxuICAgICAgICBtb2RlbDogUHJvamVjdE1vZGVsLFxyXG4gICAgICAgIGdvQmFja0Z1bmN0aW9uQ2FsbGJhY2s6IEZ1bmN0aW9uLFxyXG4gICAgICAgIG1hbmFnZXJNb2RlbDogTWFuYWdlck1vZGVsXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuXHJcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNhcmQuY2xhc3NOYW1lID0gJ2NhcmQgcHJvamVjdCc7XHJcbiAgICAgICAgY2FyZC5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyByZW1vdmUgYWxsIHByb2plY3QgcHJldmlld3NcclxuICAgICAgICAgICAgcmVtb3ZlRWxlbWVudHNDaGlsZHJlbihwYXJlbnQpO1xyXG5cclxuICAgICAgICAgICAgLy8gZGlzcGxheSBwcm9qZWN0IGVkaXRvclxyXG4gICAgICAgICAgICB0aGlzLmRyYXdFZGl0b3IoXHJcbiAgICAgICAgICAgICAgICBwYXJlbnQsXHJcbiAgICAgICAgICAgICAgICBtb2RlbCxcclxuICAgICAgICAgICAgICAgIGdvQmFja0Z1bmN0aW9uQ2FsbGJhY2ssXHJcbiAgICAgICAgICAgICAgICBtYW5hZ2VyTW9kZWxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjYXJkKTtcclxuXHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgICAgICBjb25zdCByYW5kSW1hZ2VOdW1iZXIgPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDYpO1xyXG4gICAgICAgIGltYWdlLmNsYXNzTmFtZSA9IGBjYXJkLWltZy10b3AgY2FyZEltYWdlIGNhcmRJbWFnZSR7cmFuZEltYWdlTnVtYmVyfWA7XHJcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpbWFnZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBib2R5LmNsYXNzTmFtZSA9ICdjYXJkLWJvZHknO1xyXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoYm9keSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICB0aXRsZS5jbGFzc05hbWUgPSAnY2FyZC10aXRsZSc7XHJcbiAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gc2hvcnRlblN0cmluZyhtb2RlbC5uYW1lLCAxMik7XHJcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSBtb2RlbC5nZXRQZXJjZW50YWdlRG9uZSgpO1xyXG4gICAgICAgIGNvbnN0IHBlcmNlbnRhZ2VMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hsYWJlbDEnKTtcclxuICAgICAgICBwZXJjZW50YWdlTGFiZWwuY2xhc3NOYW1lID0gJ2xibFByb2plY3RQZXJjZW50YWdlJztcclxuICAgICAgICBwZXJjZW50YWdlTGFiZWwuaW5uZXJIVE1MID0gYCR7cGVyY2VudGFnZX0lYDtcclxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHBlcmNlbnRhZ2VMYWJlbCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHRpbWVMZWZ0ID0gbW9kZWwuZ2V0VGltZVJlbWFpbmluZyh0cnVlKTtcclxuICAgICAgICBjb25zdCBkdWVPbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBkdWVPbkxhYmVsLmNsYXNzTmFtZSA9ICdjYXJkLXRleHQgbGJsVGltZUxlZnQnO1xyXG4gICAgICAgIGR1ZU9uTGFiZWwuaW5uZXJIVE1MID0gYOKAoiAke3RpbWVMZWZ0fTwvYnI+XHJcbiAgICAgICDigKIgJHttb2RlbC5nZXROdW1PZlRhc2tzSW5TdGF0ZShcclxuICAgICAgICAgICBUYXNrU3RhdGUuRklOSVNIRURcclxuICAgICAgICl9LyR7bW9kZWwuZ2V0TnVtT2ZUYXNrcygpfSB0YXNrcyBmaW5pc2hlZGA7XHJcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChkdWVPbkxhYmVsKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBwcm9ncmVzcy5jbGFzc05hbWUgPSAncHJvZ3Jlc3MnO1xyXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQocHJvZ3Jlc3MpO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9ncmVzc0JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHByb2dyZXNzQmFyLmNsYXNzTmFtZSA9IGBwcm9ncmVzcy1iYXJgO1xyXG4gICAgICAgIHByb2dyZXNzLmFwcGVuZENoaWxkKHByb2dyZXNzQmFyKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgLy8gYW5pbWF0ZSBwcm9ncmVzcyBiYXIgYWZ0ZXIgcmVuZGVyaW5nXHJcbiAgICAgICAgICAgIHByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gYCR7cGVyY2VudGFnZX0lYDtcclxuICAgICAgICB9LCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3RWRpdG9yKFxyXG4gICAgICAgIHBhcmVudDogSFRNTEVsZW1lbnQsXHJcbiAgICAgICAgbW9kZWw6IFByb2plY3RNb2RlbCB8IG51bGwsXHJcbiAgICAgICAgZ29CYWNrRnVuY3Rpb25DYWxsYmFjazogRnVuY3Rpb24sXHJcbiAgICAgICAgbWFuYWdlck1vZGVsOiBNYW5hZ2VyTW9kZWxcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG5cclxuICAgICAgICBsZXQgbmV3UHJvamVjdCA9IGZhbHNlO1xyXG4gICAgICAgIGlmICghbW9kZWwpIHtcclxuICAgICAgICAgICAgY29uc3QgdG9tb3Jyb3dzRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIHRvbW9ycm93c0RhdGUuc2V0RGF0ZSh0b21vcnJvd3NEYXRlLmdldERhdGUoKSArIDEpO1xyXG4gICAgICAgICAgICBtb2RlbCA9IG5ldyBQcm9qZWN0TW9kZWwodW5kZWZpbmVkLCAnJywgdG9tb3Jyb3dzRGF0ZSwgbmV3IERhdGUoKSk7XHJcbiAgICAgICAgICAgIG5ld1Byb2plY3QgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZWRpdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZWRpdG9yLmNsYXNzTmFtZSA9ICdlZGl0b3InO1xyXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChlZGl0b3IpO1xyXG5cclxuICAgICAgICAvLyBoZWFkZXJcclxuICAgICAgICB0aGlzLmRyYXdFZGl0b3JIZWFkZXIoXHJcbiAgICAgICAgICAgIGVkaXRvcixcclxuICAgICAgICAgICAgbW9kZWwsXHJcbiAgICAgICAgICAgIGdvQmFja0Z1bmN0aW9uQ2FsbGJhY2ssXHJcbiAgICAgICAgICAgIG5ld1Byb2plY3QsXHJcbiAgICAgICAgICAgIG1hbmFnZXJNb2RlbFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlcGFyYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XHJcbiAgICAgICAgZWRpdG9yLmFwcGVuZENoaWxkKHNlcGFyYXRvcik7XHJcblxyXG4gICAgICAgIC8vIHRhc2sgZGFzaGJvYXJkXHJcbiAgICAgICAgdGhpcy5kcmF3VGFza0Rhc2hib2FyZChlZGl0b3IsIG1vZGVsKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3RWRpdG9ySGVhZGVyKFxyXG4gICAgICAgIHBhcmVudDogSFRNTEVsZW1lbnQsXHJcbiAgICAgICAgbW9kZWw6IFByb2plY3RNb2RlbCxcclxuICAgICAgICBnb0JhY2tGdW5jdGlvbkNhbGxiYWNrOiBGdW5jdGlvbixcclxuICAgICAgICBuZXdQcm9qZWN0OiBib29sZWFuLFxyXG4gICAgICAgIG1hbmFnZXJNb2RlbDogTWFuYWdlck1vZGVsXHJcbiAgICApIHtcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBoZWFkZXIuY2xhc3NOYW1lID0gJ2VkaXRvckhlYWRlcic7XHJcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcblxyXG4gICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgY29uc3QgcmFuZEltYWdlTnVtYmVyID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiA2KTtcclxuICAgICAgICBpbWFnZS5jbGFzc05hbWUgPSBgaW1nUHJvamVjdEhlYWRlciBjYXJkSW1hZ2Uke3JhbmRJbWFnZU51bWJlcn1gO1xyXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChpbWFnZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBwcm9qZWN0SGVhZGVyLmNsYXNzTmFtZSA9ICdwcm9qZWN0SGVhZGVyJztcclxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRlcik7XHJcblxyXG4gICAgICAgIGNvbnN0IGlucHV0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgaW5wdXROYW1lLmlkID0gJ2lucHV0UHJvamVjdE5hbWUnO1xyXG4gICAgICAgIGlucHV0TmFtZS5wbGFjZWhvbGRlciA9ICdQcm9qZWN0IG5hbWUnO1xyXG4gICAgICAgIGlucHV0TmFtZS50eXBlID0gJ3RleHQnO1xyXG4gICAgICAgIGlucHV0TmFtZS5tYXhMZW5ndGggPSAzMDtcclxuICAgICAgICBpbnB1dE5hbWUuY2xhc3NOYW1lID0gJ2Zvcm0tY29udHJvbCBpbnB1dFByb2plY3ROYW1lJztcclxuICAgICAgICBpbnB1dE5hbWUudmFsdWUgPSBtb2RlbC5uYW1lO1xyXG4gICAgICAgIHByb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQoaW5wdXROYW1lKTtcclxuXHJcbiAgICAgICAgY29uc3QgYnRuQmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ0bkJhY2suY2xhc3NOYW1lID0gJ2J0biBidG4tbGlnaHQnO1xyXG4gICAgICAgIGJ0bkJhY2suaW5uZXJIVE1MID0gJ0JhY2snO1xyXG4gICAgICAgIGJ0bkJhY2sub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgLy8gcmVtb3ZlIGVkaXRvclxyXG4gICAgICAgICAgICBwYXJlbnQucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBkcmF3IGRhc2hib2FyZFxyXG4gICAgICAgICAgICBnb0JhY2tGdW5jdGlvbkNhbGxiYWNrKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKGJ0bkJhY2spO1xyXG5cclxuICAgICAgICBjb25zdCBidG5TYXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnRuU2F2ZS5jbGFzc05hbWUgPSAnYnRuIGJ0bi1zdWNjZXNzJztcclxuICAgICAgICBidG5TYXZlLmlubmVySFRNTCA9ICdTYXZlJztcclxuICAgICAgICBidG5TYXZlLm9uY2xpY2sgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHNhdmluZyBhbmltYXRpb25cclxuICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi5jbGFzc05hbWUgPSAnc3Bpbm5lci1ib3JkZXIgc3Bpbm5lci1ib3JkZXItc20gdGV4dC1saWdodCc7XHJcbiAgICAgICAgICAgIGJ0blNhdmUuaW5uZXJIVE1MID0gYW5pbWF0aW9uLm91dGVySFRNTDtcclxuXHJcbiAgICAgICAgICAgIC8vIHNob3J0IGRhdGEgdmFsaWRhdGlvblxyXG4gICAgICAgICAgICBpZiAoIW1vZGVsLnZhbGlkYXRlUHJvamVjdElucHV0KGlucHV0TmFtZS52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlQb3B1cCh7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdyZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnSW52YWxpZCBpbnB1dCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJQcm9qZWN0IG5hbWUgY2FuJ3QgcmVtYWluIGVtcHR5LlwiLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2F2ZURhdGFGcm9tRm9ybShtb2RlbCwgbmV3UHJvamVjdCwgbWFuYWdlck1vZGVsKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHJlbW92ZSBlZGl0b3JcclxuICAgICAgICAgICAgcGFyZW50LnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gZHJhdyBkYXNoYm9hcmRcclxuICAgICAgICAgICAgZ29CYWNrRnVuY3Rpb25DYWxsYmFjaygpO1xyXG5cclxuICAgICAgICAgICAgLy8gZGlzcGxheSBtZXNzYWdlXHJcbiAgICAgICAgICAgIGlmIChuZXdQcm9qZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5UG9wdXAoe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JlZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnTmV3IHByb2plY3QnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTdWNjZXNzZnVsbHkgYWRkZWQgYSBuZXcgcHJvamVjdC4nLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5UG9wdXAoe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JlZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnU3VjY2Vzc2Z1bCB1cGRhdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTdWNjZXNzZnVsbHkgdXBkYXRlZCBhIHByb2plY3QuJyxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKGJ0blNhdmUpO1xyXG5cclxuICAgICAgICB0aGlzLmRyYXdPcHRpb25zRHJvcGRvd24oXHJcbiAgICAgICAgICAgIHByb2plY3RIZWFkZXIsXHJcbiAgICAgICAgICAgIG1vZGVsLFxyXG4gICAgICAgICAgICBnb0JhY2tGdW5jdGlvbkNhbGxiYWNrLFxyXG4gICAgICAgICAgICBtYW5hZ2VyTW9kZWxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCBsYmxQcm9qZWN0RHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgbGJsUHJvamVjdER1ZURhdGUuY2xhc3NOYW1lID0gJ2xibFByb2plY3REdWVEYXRlJztcclxuICAgICAgICBsYmxQcm9qZWN0RHVlRGF0ZS5pbm5lckhUTUwgPSAn4oCiIER1ZSBkYXRlOic7XHJcbiAgICAgICAgcHJvamVjdEhlYWRlci5hcHBlbmRDaGlsZChsYmxQcm9qZWN0RHVlRGF0ZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGlucHV0UHJvamVjdER1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGlucHV0UHJvamVjdER1ZURhdGUuaWQgPSAnaW5wdXRQcm9qZWN0RHVlRGF0ZSc7XHJcbiAgICAgICAgaW5wdXRQcm9qZWN0RHVlRGF0ZS5jbGFzc05hbWUgPSAnZm9ybS1jb250cm9sJztcclxuICAgICAgICBpbnB1dFByb2plY3REdWVEYXRlLnR5cGUgPSAnZGF0ZSc7XHJcbiAgICAgICAgaW5wdXRQcm9qZWN0RHVlRGF0ZS52YWx1ZSA9IG1vZGVsLmdldER1ZURhdGVGb3JtYXR0ZWQoKTtcclxuICAgICAgICBpbnB1dFByb2plY3REdWVEYXRlLm9uY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyB1cGRhdGUgVGltZUxlZnQgbGFiZWxcclxuICAgICAgICAgICAgdGhpcy5ldmFsdWF0ZVRpbWVMZWZ0KFxyXG4gICAgICAgICAgICAgICAgbGJsVGltZUxlZnQsXHJcbiAgICAgICAgICAgICAgICBtb2RlbCxcclxuICAgICAgICAgICAgICAgIG5ldyBEYXRlKGlucHV0UHJvamVjdER1ZURhdGUudmFsdWUpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKGlucHV0UHJvamVjdER1ZURhdGUpO1xyXG5cclxuICAgICAgICBjb25zdCBsYmxUaW1lTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgbGJsVGltZUxlZnQuY2xhc3NOYW1lID0gJ2xibFRpbWVMZWZ0RWRpdG9yJztcclxuICAgICAgICB0aGlzLmV2YWx1YXRlVGltZUxlZnQoXHJcbiAgICAgICAgICAgIGxibFRpbWVMZWZ0LFxyXG4gICAgICAgICAgICBtb2RlbCxcclxuICAgICAgICAgICAgbmV3IERhdGUoaW5wdXRQcm9qZWN0RHVlRGF0ZS52YWx1ZSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHByb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQobGJsVGltZUxlZnQpO1xyXG5cclxuICAgICAgICBjb25zdCBsYmxUYXNrc0RvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGxibFRhc2tzRG9uZS5jbGFzc05hbWUgPSAnbGJsVGFza3NEb25lJztcclxuICAgICAgICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKGxibFRhc2tzRG9uZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxibFBlcmNlbnRhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGxibFBlcmNlbnRhZ2UuaWQgPSAnbGJsUGVyY2VudGFnZSc7XHJcbiAgICAgICAgcHJvamVjdEhlYWRlci5hcHBlbmRDaGlsZChsYmxQZXJjZW50YWdlKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBwcm9ncmVzcy5jbGFzc05hbWUgPSAncHJvZ3Jlc3MgcHJvZ3Jlc3NFZGl0b3InO1xyXG4gICAgICAgIHByb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQocHJvZ3Jlc3MpO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9ncmVzc0JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHByb2dyZXNzQmFyLmNsYXNzTmFtZSA9IGBwcm9ncmVzcy1iYXJgO1xyXG4gICAgICAgIHByb2dyZXNzLmFwcGVuZENoaWxkKHByb2dyZXNzQmFyKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgLy8gYW5pbWF0ZSBwcm9ncmVzcyBiYXIgYWZ0ZXIgcmVuZGVyaW5nXHJcbiAgICAgICAgICAgIFByb2plY3RWaWV3LmV2YWx1YXRlVGFza3NGaW5pc2hlZChcclxuICAgICAgICAgICAgICAgIGxibFRhc2tzRG9uZSxcclxuICAgICAgICAgICAgICAgIGxibFBlcmNlbnRhZ2UsXHJcbiAgICAgICAgICAgICAgICBwcm9ncmVzc0JhcixcclxuICAgICAgICAgICAgICAgIG1vZGVsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd1Rhc2tEYXNoYm9hcmQocGFyZW50OiBIVE1MRWxlbWVudCwgbW9kZWw6IFByb2plY3RNb2RlbCkge1xyXG4gICAgICAgIGNvbnN0IHRhc2tzVG9EbzogVGFza1tdID0gbW9kZWwuZ2V0VGFza3NJblN0YXRlKFRhc2tTdGF0ZS5UT19ETyk7XHJcbiAgICAgICAgY29uc3QgdGFza3NJblByb2dyZXNzOiBUYXNrW10gPSBtb2RlbC5nZXRUYXNrc0luU3RhdGUoXHJcbiAgICAgICAgICAgIFRhc2tTdGF0ZS5JTl9QUk9HUkVTU1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgdGFza3NGaW5pc2hlZDogVGFza1tdID0gbW9kZWwuZ2V0VGFza3NJblN0YXRlKFRhc2tTdGF0ZS5GSU5JU0hFRCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRhc2hib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRhc2hib2FyZC5jbGFzc05hbWUgPSAndGFza0Rhc2hib2FyZCc7XHJcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGRhc2hib2FyZCk7XHJcblxyXG4gICAgICAgIGxldCBzZWN0aW9uVG9Ebywgc2VjdGlvbkluUHJvZ3Jlc3MsIHNlY3Rpb25GaW5pc2hlZDtcclxuXHJcbiAgICAgICAgc2VjdGlvblRvRG8gPSB0aGlzLmNyZWF0ZVNlY3Rpb24obW9kZWwsICdUbyBkbycsIHRhc2tzVG9Ebyk7XHJcbiAgICAgICAgZGFzaGJvYXJkLmFwcGVuZENoaWxkKHNlY3Rpb25Ub0RvKTtcclxuXHJcbiAgICAgICAgZGFzaGJvYXJkLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlU2VwYXJhdG9yKCkpO1xyXG5cclxuICAgICAgICBzZWN0aW9uSW5Qcm9ncmVzcyA9IHRoaXMuY3JlYXRlU2VjdGlvbihcclxuICAgICAgICAgICAgbW9kZWwsXHJcbiAgICAgICAgICAgICdJbiBwcm9ncmVzcycsXHJcbiAgICAgICAgICAgIHRhc2tzSW5Qcm9ncmVzc1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgZGFzaGJvYXJkLmFwcGVuZENoaWxkKHNlY3Rpb25JblByb2dyZXNzKTtcclxuXHJcbiAgICAgICAgZGFzaGJvYXJkLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlU2VwYXJhdG9yKCkpO1xyXG5cclxuICAgICAgICBzZWN0aW9uRmluaXNoZWQgPSB0aGlzLmNyZWF0ZVNlY3Rpb24obW9kZWwsICdGaW5pc2hlZCcsIHRhc2tzRmluaXNoZWQpO1xyXG4gICAgICAgIGRhc2hib2FyZC5hcHBlbmRDaGlsZChzZWN0aW9uRmluaXNoZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdPcHRpb25zRHJvcGRvd24oXHJcbiAgICAgICAgcGFyZW50OiBIVE1MRWxlbWVudCxcclxuICAgICAgICBtb2RlbDogUHJvamVjdE1vZGVsLFxyXG4gICAgICAgIGdvQmFja0Z1bmN0aW9uQ2FsbGJhY2s6IEZ1bmN0aW9uLFxyXG4gICAgICAgIG1hbmFnZXJNb2RlbDogTWFuYWdlck1vZGVsXHJcbiAgICApIHtcclxuICAgICAgICBsZXQgZHJvcGRvd25JdGVtczogSFRNTEVsZW1lbnRbXSA9IFtdO1xyXG5cclxuICAgICAgICAvLyBNYXJrIHByb2plY3QgYXMgZmluaXNoZWRcclxuICAgICAgICBjb25zdCBidG5NYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgIGJ0bk1hcmsuY2xhc3NOYW1lID0gJ2Ryb3Bkb3duLWl0ZW0nO1xyXG4gICAgICAgIGJ0bk1hcmsuaW5uZXJIVE1MID0gJ01hcmsgYXMgZmluaXNoZWQnO1xyXG4gICAgICAgIGJ0bk1hcmsub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGxheU1vZGFsKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnQ29uZmlybWF0aW9uJyxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6XHJcbiAgICAgICAgICAgICAgICAgICAgJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBtYXJrIHRoaXMgcHJvamVjdCBhcyBmaW5pc2hlZD8nLFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1llcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwcmltYXJ5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBwcm9qZWN0IGluIG1vZGVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC5tYXJrQXNGaW5pc2hlZCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSB1aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGFzaGJvYXJkID0gPEhUTUxFbGVtZW50PihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkYXNoYm9hcmQnKVswXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZUVsZW1lbnRzQ2hpbGRyZW4oZGFzaGJvYXJkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd0VkaXRvcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXNoYm9hcmQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ29CYWNrRnVuY3Rpb25DYWxsYmFjayxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYW5hZ2VyTW9kZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm90aWZ5IHVzZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlQb3B1cCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdncmVlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzZnVsIGFjdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ1N1Y2Nlc3NmdWxseSBtYXJrZWQgcHJvamVjdCBhcyBmaW5pc2hlZC4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdObycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzZWNvbmRhcnknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge30sXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgZHJvcGRvd25JdGVtcy5wdXNoKGJ0bk1hcmspO1xyXG5cclxuICAgICAgICAvLyBEZWxldGUgcHJvamVjdFxyXG4gICAgICAgIGNvbnN0IGJ0bkRlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICBidG5EZWxldGUuY2xhc3NOYW1lID0gJ2Ryb3Bkb3duLWl0ZW0nO1xyXG4gICAgICAgIGJ0bkRlbGV0ZS5pbm5lckhUTUwgPSAnRGVsZXRlIHByb2plY3QnO1xyXG4gICAgICAgIGJ0bkRlbGV0ZS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdDb25maXJtYXRpb24nLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBwcm9qZWN0PycsXHJcbiAgICAgICAgICAgICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnWWVzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2RhbmdlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkZWxldGUgcHJvamVjdCBpbiBtb2RlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFuYWdlck1vZGVsLmRlbGV0ZVByb2plY3QobW9kZWwuZ2V0SWQoKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGVsZXRlIHByb2plY3QgaW4gZGF0YWJhc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IERhdGFiYXNlQVBJLmRlbGV0ZVByb2plY3RzKFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgUHJvamVjdChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwuZ2V0SWQoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwuZ2V0RHVlRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbC5nZXRUaW1lc3RhbXAoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgdWlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhc2hib2FyZCA9IDxIVE1MRWxlbWVudD4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGFzaGJvYXJkJylbMF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVFbGVtZW50c0NoaWxkcmVuKGRhc2hib2FyZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnb0JhY2tGdW5jdGlvbkNhbGxiYWNrKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm90aWZ5IHVzZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlQb3B1cCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdncmVlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzZnVsIGFjdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1N1Y2Nlc3NmdWxseSBkZWxldGVkIHByb2plY3QuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnTm8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc2Vjb25kYXJ5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGRyb3Bkb3duSXRlbXMucHVzaChidG5EZWxldGUpO1xyXG5cclxuICAgICAgICBjb25zdCBkcm9wZG93biA9IGRyYXdEcm9wZG93bkJ1dHRvbihcclxuICAgICAgICAgICAgcGFyZW50LFxyXG4gICAgICAgICAgICAnYnRuT3B0aW9ucycsXHJcbiAgICAgICAgICAgIGRyb3Bkb3duSXRlbXNcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGRyb3Bkb3duQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgZHJvcGRvd24uYXBwZW5kQ2hpbGQoZHJvcGRvd25CdXR0b24pO1xyXG4gICAgICAgIGRyb3Bkb3duQnV0dG9uLmNsYXNzTmFtZSA9ICdidG4gYnRuLWxpZ2h0JztcclxuICAgICAgICBkcm9wZG93bkJ1dHRvbi5pZCA9ICdidG5PcHRpb25zJztcclxuICAgICAgICBkcm9wZG93bkJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgJ2Ryb3Bkb3duJyk7XHJcbiAgICAgICAgZHJvcGRvd25CdXR0b24uaW5uZXJIVE1MID0gJ+KLric7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlU2VjdGlvbihcclxuICAgICAgICBtb2RlbDogUHJvamVjdE1vZGVsLFxyXG4gICAgICAgIHNlY3Rpb25OYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgdGFza3M6IFRhc2tbXVxyXG4gICAgKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBzZWN0aW9uLmNsYXNzTmFtZSA9ICd0YXNrRGFzaGJvYXJkU2VjdGlvbic7XHJcbiAgICAgICAgY29uc3QgbGJsU2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICBsYmxTZWN0aW9uLmNsYXNzTmFtZSA9ICdsYmxTZWN0aW9uJztcclxuICAgICAgICBsYmxTZWN0aW9uLmlubmVySFRNTCA9IHNlY3Rpb25OYW1lO1xyXG4gICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQobGJsU2VjdGlvbik7XHJcblxyXG4gICAgICAgIHRhc2tzLmZvckVhY2goKHQ6IFRhc2spID0+XHJcbiAgICAgICAgICAgIHQudmlldy5kcmF3UHJldmlldyhzZWN0aW9uLCB0Lm1vZGVsLCBtb2RlbCwgc2VjdGlvbk5hbWUsIG51bGwpXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgYnRuQWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGJ0bkFkZFRhc2suY2xhc3NOYW1lID0gJ2J0bkFkZFRhc2snO1xyXG4gICAgICAgIGJ0bkFkZFRhc2sub25tb3VzZWVudGVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsYmxBZGRUYXNrLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGJ0bkFkZFRhc2sub25tb3VzZWxlYXZlID0gYnRuQWRkVGFzay5vbm1vdXNlZW50ZXI7XHJcbiAgICAgICAgYnRuQWRkVGFzay5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjcmVhdGUgbmV3IHRhc2tcclxuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPVxyXG4gICAgICAgICAgICAgICAgc2VjdGlvbk5hbWUgPT09ICdUbyBkbydcclxuICAgICAgICAgICAgICAgICAgICA/IFRhc2tTdGF0ZS5UT19ET1xyXG4gICAgICAgICAgICAgICAgICAgIDogc2VjdGlvbk5hbWUgPT09ICdJbiBwcm9ncmVzcydcclxuICAgICAgICAgICAgICAgICAgICA/IFRhc2tTdGF0ZS5JTl9QUk9HUkVTU1xyXG4gICAgICAgICAgICAgICAgICAgIDogVGFza1N0YXRlLkZJTklTSEVEO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdUYXNrOiBUYXNrID0gbmV3IFRhc2sodW5kZWZpbmVkLCAnJywgc3RhdGUpO1xyXG5cclxuICAgICAgICAgICAgLy8gZHJhdyB0YXNrIGVkaXRvclxyXG4gICAgICAgICAgICBuZXdUYXNrLnZpZXcuZHJhd1ByZXZpZXcoXHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgbmV3VGFzay5tb2RlbCxcclxuICAgICAgICAgICAgICAgIG1vZGVsLFxyXG4gICAgICAgICAgICAgICAgc2VjdGlvbk5hbWUsXHJcbiAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBuZXdUYXNrXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAvLyBtb3ZlIGFkZCB0YXNrIGJ1dHRvbiB0byBib3R0b21cclxuICAgICAgICAgICAgc2VjdGlvbi5hcHBlbmRDaGlsZChidG5BZGRUYXNrKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoYnRuQWRkVGFzayk7XHJcblxyXG4gICAgICAgIGNvbnN0IGljb25QbHVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgICAgIGljb25QbHVzLmNsYXNzTmFtZSA9ICdmYXMgZmEtcGx1cyBpY29uUHJvamVjdEVkaXRvcic7XHJcbiAgICAgICAgYnRuQWRkVGFzay5hcHBlbmRDaGlsZChpY29uUGx1cyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxibEFkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgbGJsQWRkVGFzay5jbGFzc05hbWUgPSAnbGJsQWRkVGFzayBoaWRlJztcclxuICAgICAgICBsYmxBZGRUYXNrLmlubmVySFRNTCA9ICdBZGQgdGFzayc7XHJcbiAgICAgICAgYnRuQWRkVGFzay5hcHBlbmRDaGlsZChsYmxBZGRUYXNrKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHNlY3Rpb247XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlU2VwYXJhdG9yKCk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICBjb25zdCBzZXBhcmF0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBzZXBhcmF0b3IuY2xhc3NOYW1lID0gJ3NlcGFyYXRvcic7XHJcbiAgICAgICAgcmV0dXJuIHNlcGFyYXRvcjtcclxuICAgIH1cclxuXHJcbiAgICBldmFsdWF0ZVRpbWVMZWZ0KFxyXG4gICAgICAgIGxhYmVsOiBIVE1MRWxlbWVudCxcclxuICAgICAgICBtb2RlbDogUHJvamVjdE1vZGVsLFxyXG4gICAgICAgIHNlbGVjdGVkRGF0ZTogRGF0ZVxyXG4gICAgKSB7XHJcbiAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gYOKAoiAke21vZGVsLmdldFRpbWVSZW1haW5pbmcodHJ1ZSwgc2VsZWN0ZWREYXRlKX1gO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBldmFsdWF0ZVRhc2tzRmluaXNoZWQoXHJcbiAgICAgICAgbGFiZWxUYXNrczogRWxlbWVudCxcclxuICAgICAgICBsYWJlbFBlcmNlbnRhZ2U6IEVsZW1lbnQsXHJcbiAgICAgICAgcHJvZ3Jlc3NCYXI6IEhUTUxFbGVtZW50LFxyXG4gICAgICAgIG1vZGVsOiBQcm9qZWN0TW9kZWxcclxuICAgICkge1xyXG4gICAgICAgIGxhYmVsVGFza3MuaW5uZXJIVE1MID0gYOKAoiAke21vZGVsLmdldE51bU9mVGFza3NJblN0YXRlKFxyXG4gICAgICAgICAgICBUYXNrU3RhdGUuRklOSVNIRURcclxuICAgICAgICApfS8ke21vZGVsLmdldE51bU9mVGFza3MoKX0gdGFza3MgZmluaXNoZWRgO1xyXG5cclxuICAgICAgICBjb25zdCBwZXJjZW50YWdlRG9uZSA9IG1vZGVsLmdldFBlcmNlbnRhZ2VEb25lKCk7XHJcbiAgICAgICAgbGFiZWxQZXJjZW50YWdlLmlubmVySFRNTCA9IGAke3BlcmNlbnRhZ2VEb25lfSVgO1xyXG4gICAgICAgIHByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gYCR7cGVyY2VudGFnZURvbmV9JWA7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgc2F2ZURhdGFGcm9tRm9ybShcclxuICAgICAgICBtb2RlbDogUHJvamVjdE1vZGVsLFxyXG4gICAgICAgIG5ld1Byb2plY3Q6IGJvb2xlYW4sXHJcbiAgICAgICAgbWFuYWdlck1vZGVsOiBNYW5hZ2VyTW9kZWxcclxuICAgICkge1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+KFxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRQcm9qZWN0TmFtZScpXHJcbiAgICAgICAgKSkudmFsdWU7XHJcbiAgICAgICAgY29uc3QgZGF0ZSA9ICg8SFRNTElucHV0RWxlbWVudD4oXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dFByb2plY3REdWVEYXRlJylcclxuICAgICAgICApKS52YWx1ZTtcclxuXHJcbiAgICAgICAgbW9kZWwubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgbW9kZWwuc2V0RHVlRGF0ZShuZXcgRGF0ZShkYXRlKSk7XHJcblxyXG4gICAgICAgIGlmIChuZXdQcm9qZWN0KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBtYW5hZ2VyTW9kZWwuZ2V0Q3VycmVudFVzZXIoKS5tb2RlbDtcclxuICAgICAgICAgICAgY29uc3QgcHJvak1vZGVsOiBQcm9qZWN0TW9kZWwgPSBuZXcgUHJvamVjdE1vZGVsKFxyXG4gICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgbW9kZWwubmFtZSxcclxuICAgICAgICAgICAgICAgIG1vZGVsLmdldER1ZURhdGUoKSxcclxuICAgICAgICAgICAgICAgIG1vZGVsLmdldFRpbWVzdGFtcCgpXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAvLyBhZGQgcHJvamVjdCB0byBkYXRhYmFzZVxyXG4gICAgICAgICAgICBjb25zdCBwcm9qUmVzcG9uc2U6IGFueSA9IGF3YWl0IERhdGFiYXNlQVBJLmFkZFByb2plY3QoXHJcbiAgICAgICAgICAgICAgICBwcm9qTW9kZWwsXHJcbiAgICAgICAgICAgICAgICB1c2VyLmdldElkKClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgLy8gYWRkIHRhc2tzIHRvIGRhdGFiYXNlXHJcbiAgICAgICAgICAgIGNvbnN0IHRhc2tSZXNwb25zZSA9IERhdGFiYXNlQVBJLmFkZFRhc2tzKFxyXG4gICAgICAgICAgICAgICAgbW9kZWwuZ2V0VGFza3MoKSxcclxuICAgICAgICAgICAgICAgIHByb2pSZXNwb25zZS5pZFxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgLy8gYWRkIHByb2plY3QgdG8gbW9kZWxcclxuICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KFxyXG4gICAgICAgICAgICAgICAgcHJvalJlc3BvbnNlLmlkLFxyXG4gICAgICAgICAgICAgICAgbW9kZWwubmFtZSxcclxuICAgICAgICAgICAgICAgIG1vZGVsLmdldER1ZURhdGUoKSxcclxuICAgICAgICAgICAgICAgIG1vZGVsLmdldFRpbWVzdGFtcCgpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIG5ld1Byb2plY3QubW9kZWwuc2V0VGFza3MobW9kZWwuZ2V0VGFza3MoKSk7XHJcbiAgICAgICAgICAgIG1hbmFnZXJNb2RlbC5hZGROZXdQcm9qZWN0KG5ld1Byb2plY3QpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChcclxuICAgICAgICAgICAgICAgIG1vZGVsLmdldElkKCksXHJcbiAgICAgICAgICAgICAgICBtb2RlbC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgbW9kZWwuZ2V0RHVlRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgbW9kZWwuZ2V0VGltZXN0YW1wKClcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbmV3UHJvamVjdC5tb2RlbC5zZXRUYXNrcyhtb2RlbC5nZXRUYXNrcygpKTtcclxuICAgICAgICAgICAgRGF0YWJhc2VBUEkudXBkYXRlUHJvamVjdHMoW25ld1Byb2plY3RdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVGFza1N0YXRlIH0gZnJvbSAnLi4vdXRpbHMvdGFza1N0YXRlJztcclxuaW1wb3J0IHsgVGFza01vZGVsIH0gZnJvbSAnLi9tb2RlbCc7XHJcbmltcG9ydCB7IFRhc2tWaWV3IH0gZnJvbSAnLi92aWV3JztcclxuXHJcbmV4cG9ydCBjbGFzcyBUYXNrIHtcclxuICAgIHB1YmxpYyBtb2RlbDogVGFza01vZGVsO1xyXG4gICAgcHVibGljIHZpZXc6IFRhc2tWaWV3O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIG5hbWU6IHN0cmluZywgc3RhdGU6IFRhc2tTdGF0ZSkge1xyXG4gICAgICAgIHRoaXMubW9kZWwgPSBuZXcgVGFza01vZGVsKGlkLCBuYW1lLCBzdGF0ZSk7XHJcbiAgICAgICAgdGhpcy52aWV3ID0gbmV3IFRhc2tWaWV3KCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVGFza1N0YXRlIH0gZnJvbSAnLi4vdXRpbHMvdGFza1N0YXRlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUYXNrTW9kZWwge1xyXG4gICAgcHJpdmF0ZSBpZDogbnVtYmVyO1xyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICAgIHByaXZhdGUgc3RhdGU6IFRhc2tTdGF0ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIHN0YXRlOiBUYXNrU3RhdGUpIHtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SWQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTdGF0ZSgpOiBUYXNrU3RhdGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFN0YXRlKHQ6IFRhc2tTdGF0ZSkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB0O1xyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlTmFtZUlucHV0KG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmIChuYW1lID09PSAnJykgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IERhdGFiYXNlQVBJIH0gZnJvbSAnLi4vdXRpbHMvZGF0YWJhc2VBUEknO1xyXG5pbXBvcnQgeyBQcm9qZWN0TW9kZWwgfSBmcm9tICcuLi9wcm9qZWN0L21vZGVsJztcclxuaW1wb3J0IHsgUHJvamVjdFZpZXcgfSBmcm9tICcuLi9wcm9qZWN0L3ZpZXcnO1xyXG5pbXBvcnQgeyBUYXNrU3RhdGUgfSBmcm9tICcuLi91dGlscy90YXNrU3RhdGUnO1xyXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi9jb250cm9sbGVyJztcclxuaW1wb3J0IHsgVGFza01vZGVsIH0gZnJvbSAnLi9tb2RlbCc7XHJcbmltcG9ydCB7IGRpc3BsYXlQb3B1cCB9IGZyb20gJy4uL3V0aWxzL3RvYXN0JztcclxuaW1wb3J0IHsgc2hvcnRlblN0cmluZyB9IGZyb20gJy4uL3V0aWxzL3Nob3J0ZW5TdHJpbmcnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRhc2tWaWV3IHtcclxuICAgIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgZHJhd1ByZXZpZXcoXHJcbiAgICAgICAgcGFyZW50OiBIVE1MRWxlbWVudCxcclxuICAgICAgICBtb2RlbDogVGFza01vZGVsLFxyXG4gICAgICAgIHByb2plY3RNb2RlbDogUHJvamVjdE1vZGVsLFxyXG4gICAgICAgIHNlY3Rpb246IHN0cmluZyxcclxuICAgICAgICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxyXG4gICAgICAgIHN3aXRjaGluZ1NlY3Rpb25zOiBib29sZWFuID0gZmFsc2UsXHJcbiAgICAgICAgbmV3VGFzazogVGFzayA9IG51bGxcclxuICAgICkge1xyXG4gICAgICAgIGNvbnN0IGZpcnN0VGltZSA9IGNvbnRhaW5lciA9PT0gbnVsbDtcclxuICAgICAgICBpZiAoZmlyc3RUaW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gICAgICAgICAgICBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgaWYgKHN3aXRjaGluZ1NlY3Rpb25zKVxyXG4gICAgICAgICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LmNoaWxkcmVuW3BhcmVudC5jaGlsZHJlbi5sZW5ndGggLSAxXVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgZWxzZSBwYXJlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB3aGlsZSAoY29udGFpbmVyLmNoaWxkcmVuWzBdKSBjb250YWluZXIuY2hpbGRyZW5bMF0ucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAndGFza1ByZXZpZXcnO1xyXG4gICAgICAgIGNvbnRhaW5lci5vbm1vdXNlZW50ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpY29uR29MZWZ0KSBpY29uR29MZWZ0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgICAgICAgICAgaWYgKGljb25Hb1JpZ2h0KSBpY29uR29SaWdodC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb250YWluZXIub25tb3VzZWxlYXZlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaWNvbkdvTGVmdCkgaWNvbkdvTGVmdC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIGlmIChpY29uR29SaWdodCkgaWNvbkdvUmlnaHQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29udGFpbmVyLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdoaWxlIChjb250YWluZXIuY2hpbGRyZW5bMF0pIGNvbnRhaW5lci5jaGlsZHJlblswXS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZHJhd0VkaXRvcihjb250YWluZXIsIG1vZGVsLCBwcm9qZWN0TW9kZWwsIHNlY3Rpb24pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGljb25Hb0xlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgICAgaWYgKHNlY3Rpb24gIT09ICdUbyBkbycpIHtcclxuICAgICAgICAgICAgaWNvbkdvTGVmdC5jbGFzc05hbWUgPVxyXG4gICAgICAgICAgICAgICAgJ2ZhcyBmYS1jaGV2cm9uLWxlZnQgZmEtc20gaWNvbkdvTGVmdFJpZ2h0IGhpZGUnO1xyXG4gICAgICAgICAgICBpY29uR29MZWZ0Lm9uY2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWN0aW9uVG9EbyA9IDxIVE1MRWxlbWVudD4oXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMF1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWN0aW9uSW5Qcm9ncmVzcyA9IDxIVE1MRWxlbWVudD4oXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMl1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VjdGlvbiA9PT0gJ0luIHByb2dyZXNzJykge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnNldFN0YXRlKFRhc2tTdGF0ZS5UT19ETyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3UHJldmlldyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VjdGlvblRvRG8sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TW9kZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdUbyBkbycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRydWVcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzZWN0aW9uID09PSAnRmluaXNoZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc2V0U3RhdGUoVGFza1N0YXRlLklOX1BST0dSRVNTKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdQcmV2aWV3KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uSW5Qcm9ncmVzcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RNb2RlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0luIHByb2dyZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWV2YWx1YXRlUHJvZ3Jlc3MocHJvamVjdE1vZGVsKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGljb25Hb0xlZnQpO1xyXG5cclxuICAgICAgICBjb25zdCBsYmxUYXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgbGJsVGFza05hbWUuaW5uZXJIVE1MID0gc2hvcnRlblN0cmluZyhtb2RlbC5uYW1lLCA5KTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobGJsVGFza05hbWUpO1xyXG5cclxuICAgICAgICBjb25zdCBpY29uR29SaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgICAgICBpZiAoc2VjdGlvbiAhPT0gJ0ZpbmlzaGVkJykge1xyXG4gICAgICAgICAgICBpY29uR29SaWdodC5jbGFzc05hbWUgPVxyXG4gICAgICAgICAgICAgICAgJ2ZhcyBmYS1jaGV2cm9uLXJpZ2h0IGZhLXNtIGljb25Hb0xlZnRSaWdodCBoaWRlJztcclxuICAgICAgICAgICAgaWNvbkdvUmlnaHQub25jbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlY3Rpb25GaW5pc2hlZCA9IDxIVE1MRWxlbWVudD4oXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bNF1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWN0aW9uSW5Qcm9ncmVzcyA9IDxIVE1MRWxlbWVudD4oXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMl1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VjdGlvbiA9PT0gJ0luIHByb2dyZXNzJykge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnNldFN0YXRlKFRhc2tTdGF0ZS5GSU5JU0hFRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3UHJldmlldyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbkZpbmlzaGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdE1vZGVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnRmluaXNoZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VjdGlvbiA9PT0gJ1RvIGRvJykge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnNldFN0YXRlKFRhc2tTdGF0ZS5JTl9QUk9HUkVTUyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3UHJldmlldyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbkluUHJvZ3Jlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TW9kZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdJbiBwcm9ncmVzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRydWVcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucmVldmFsdWF0ZVByb2dyZXNzKHByb2plY3RNb2RlbCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uR29SaWdodCk7XHJcblxyXG4gICAgICAgIGlmIChuZXdUYXNrKSB7XHJcbiAgICAgICAgICAgIC8vIG5ldyB0YXNrXHJcbiAgICAgICAgICAgIHdoaWxlIChjb250YWluZXIuY2hpbGRyZW5bMF0pIGNvbnRhaW5lci5jaGlsZHJlblswXS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZHJhd0VkaXRvcihjb250YWluZXIsIG1vZGVsLCBwcm9qZWN0TW9kZWwsIHNlY3Rpb24sIG5ld1Rhc2spO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkcmF3RWRpdG9yKFxyXG4gICAgICAgIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsXHJcbiAgICAgICAgbW9kZWw6IFRhc2tNb2RlbCB8IG51bGwsXHJcbiAgICAgICAgcHJvamVjdE1vZGVsOiBQcm9qZWN0TW9kZWwsXHJcbiAgICAgICAgc2VjdGlvbjogc3RyaW5nLFxyXG4gICAgICAgIG5ld1Rhc2s6IFRhc2sgPSBudWxsXHJcbiAgICApIHtcclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnZXhwYW5kJyk7XHJcbiAgICAgICAgY29udGFpbmVyLm9uY2xpY2sgPSBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBpbnB1dFRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBpbnB1dFRhc2tOYW1lLmlkID0gJ2lucHV0VGFza05hbWUnO1xyXG4gICAgICAgIGlucHV0VGFza05hbWUucGxhY2Vob2xkZXIgPSAnVGFzayBuYW1lJztcclxuICAgICAgICBpbnB1dFRhc2tOYW1lLmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wgaW5wdXRUYXNrTmFtZSc7XHJcbiAgICAgICAgaW5wdXRUYXNrTmFtZS52YWx1ZSA9IG1vZGVsLm5hbWU7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0VGFza05hbWUpO1xyXG4gICAgICAgIGlmIChuZXdUYXNrKSBpbnB1dFRhc2tOYW1lLmZvY3VzKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ0blNhdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidG5TYXZlLmNsYXNzTmFtZSA9ICdidG4gYnRuLXN1Y2Nlc3MgYnRuU2F2ZVRhc2snO1xyXG4gICAgICAgIGJ0blNhdmUuaW5uZXJIVE1MID0gJ1NhdmUnO1xyXG4gICAgICAgIGJ0blNhdmUub25jbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAvLyB0YXNrIG5hbWUgdmFsaWRhdGlvblxyXG4gICAgICAgICAgICBpZiAoIW1vZGVsLnZhbGlkYXRlTmFtZUlucHV0KGlucHV0VGFza05hbWUudmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5UG9wdXAoe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAncmVkJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0ludmFsaWQgaW5wdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdUYXNrIG5hbWUgY2Fubm90IHJlbWFpbiBlbXB0eS4nLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIHVwZGF0ZSB0YXNrIG5hbWVcclxuICAgICAgICAgICAgbW9kZWwubmFtZSA9IGlucHV0VGFza05hbWUudmFsdWU7XHJcblxyXG4gICAgICAgICAgICAvLyBhZGQgbmV3IHRhc2sgdG8gcHJvamVjdFxyXG4gICAgICAgICAgICBpZiAobmV3VGFzaykgcHJvamVjdE1vZGVsLmFkZFRhc2sobmV3VGFzayk7XHJcblxyXG4gICAgICAgICAgICAvLyBjbGVhciBlbGVtZW50XHJcbiAgICAgICAgICAgIGlucHV0VGFza05hbWUucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGJ0blNhdmUucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRyYXdQcmV2aWV3KFxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnBhcmVudEVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICBtb2RlbCxcclxuICAgICAgICAgICAgICAgIHByb2plY3RNb2RlbCxcclxuICAgICAgICAgICAgICAgIHNlY3Rpb24sXHJcbiAgICAgICAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVldmFsdWF0ZVByb2dyZXNzKHByb2plY3RNb2RlbCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuU2F2ZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ0bkRlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ0bkRlbGV0ZS5jbGFzc05hbWUgPSAnYnRuIGJ0bi1kYW5nZXIgYnRuRGVsZXRlVGFzayc7XHJcbiAgICAgICAgYnRuRGVsZXRlLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS10cmFzaFwiPjwvaT4nO1xyXG4gICAgICAgIGJ0bkRlbGV0ZS5vbmNsaWNrID0gKGUpID0+IHtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGRlbGV0ZSB0YXNrXHJcbiAgICAgICAgICAgIHByb2plY3RNb2RlbC5yZW1vdmVUYXNrKG1vZGVsLmdldElkKCkpO1xyXG4gICAgICAgICAgICBpZiAobW9kZWwuZ2V0SWQoKSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBEYXRhYmFzZUFQSS5kZWxldGVUYXNrcyhbXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFRhc2sobW9kZWwuZ2V0SWQoKSwgbW9kZWwubmFtZSwgbW9kZWwuZ2V0U3RhdGUoKSksXHJcbiAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gcmVtb3ZlIGNvbnRhaW5lcjtcclxuICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yZWV2YWx1YXRlUHJvZ3Jlc3MocHJvamVjdE1vZGVsKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidG5EZWxldGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZXZhbHVhdGVQcm9ncmVzcyhwcm9qZWN0TW9kZWw6IFByb2plY3RNb2RlbCkge1xyXG4gICAgICAgIGNvbnN0IGxibFRhc2tzRG9uZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xibFRhc2tzRG9uZScpWzBdO1xyXG4gICAgICAgIGNvbnN0IGxibFBlcmNlbnRhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGJsUGVyY2VudGFnZScpO1xyXG4gICAgICAgIGNvbnN0IHByb2dyZXNzID0gPEhUTUxFbGVtZW50PihcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvZ3Jlc3MtYmFyJylbMF1cclxuICAgICAgICApO1xyXG4gICAgICAgIFByb2plY3RWaWV3LmV2YWx1YXRlVGFza3NGaW5pc2hlZChcclxuICAgICAgICAgICAgbGJsVGFza3NEb25lLFxyXG4gICAgICAgICAgICBsYmxQZXJjZW50YWdlLFxyXG4gICAgICAgICAgICBwcm9ncmVzcyxcclxuICAgICAgICAgICAgcHJvamVjdE1vZGVsXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tICcuL21vZGVsJztcclxuaW1wb3J0IHsgVXNlclZpZXcgfSBmcm9tICcuL3ZpZXcnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXIge1xyXG4gIHB1YmxpYyBtb2RlbDogVXNlck1vZGVsO1xyXG4gIHB1YmxpYyB2aWV3OiBVc2VyVmlldztcclxuXHJcbiAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgbmlja25hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5tb2RlbCA9IG5ldyBVc2VyTW9kZWwoaWQsIG5pY2tuYW1lLCBwYXNzd29yZCk7XHJcbiAgICB0aGlzLnZpZXcgPSBuZXcgVXNlclZpZXcoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4uL3Byb2plY3QvY29udHJvbGxlcic7XHJcbmltcG9ydCB7IFRhc2sgfSBmcm9tICcuLi90YXNrL2NvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBUYXNrU3RhdGUgfSBmcm9tICcuLi91dGlscy90YXNrU3RhdGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJNb2RlbCB7XHJcbiAgICBwcml2YXRlIGlkOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgbmlja25hbWU6IHN0cmluZztcclxuICAgIHByaXZhdGUgcGFzc3dvcmQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgcHJvamVjdHM6IFByb2plY3RbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBuaWNrbmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMubmlja25hbWUgPSBuaWNrbmFtZTtcclxuICAgICAgICB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldElkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGFzc3dvcmQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXNzd29yZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcm9qZWN0cygpOiBQcm9qZWN0W10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFByb2plY3RzKHA6IFByb2plY3RbXSkge1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE51bU9mUHJvamVjdHMoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkUHJvamVjdChwOiBQcm9qZWN0KSB7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKHApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVByb2plY3QoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMgPSB0aGlzLnByb2plY3RzLmZpbHRlcihcclxuICAgICAgICAgICAgKHA6IFByb2plY3QpID0+IHAubW9kZWwuZ2V0SWQoKSAhPT0gaWRcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHNvcnRQcm9qZWN0cyhcclxuICAgICAgICBjcml0ZXJpYTogJ2dldFRpbWVzdGFtcCcgfCAnZ2V0RHVlRGF0ZScgfCAnZ2V0TnVtT2ZUYXNrcycsXHJcbiAgICAgICAgcmV2ZXJzZU9wZXJhdG9yczogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLnByb2plY3RzLnNvcnQoKGE6IFByb2plY3QsIGI6IFByb2plY3QpOiBudW1iZXIgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYS5tb2RlbFtjcml0ZXJpYV0oKSA8IGIubW9kZWxbY3JpdGVyaWFdKCkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV2ZXJzZU9wZXJhdG9ycyA/IDEgOiAtMTtcclxuICAgICAgICAgICAgZWxzZSBpZiAoYS5tb2RlbFtjcml0ZXJpYV0oKSA+IGIubW9kZWxbY3JpdGVyaWFdKCkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV2ZXJzZU9wZXJhdG9ycyA/IC0xIDogMTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG1hcmtBbGxBc0ZpbmlzaGVkKCkge1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMubWFwKChwcm9qOiBQcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHByb2oubW9kZWwubWFya0FzRmluaXNoZWQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVBbGxQcm9qZWN0cygpIHtcclxuICAgICAgICB0aGlzLnByb2plY3RzID0gW107XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSBcIi4vbW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyVmlldyB7XHJcbiAgICBjb250YWluZXI6IEhUTUxFbGVtZW50O1xyXG4gICAgcGFyZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4uL3Byb2plY3QvY29udHJvbGxlcic7XHJcbmltcG9ydCB7IFByb2plY3RNb2RlbCB9IGZyb20gJy4uL3Byb2plY3QvbW9kZWwnO1xyXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi4vdGFzay9jb250cm9sbGVyJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL3VzZXIvY29udHJvbGxlcic7XHJcbmltcG9ydCB7IGRpc3BsYXlQb3B1cCB9IGZyb20gJy4vdG9hc3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIERhdGFiYXNlQVBJIHtcclxuICAgIHByaXZhdGUgc3RhdGljIHJvb3RVUkw6IHN0cmluZztcclxuXHJcbiAgICBzdGF0aWMgc2V0Um9vdFVSTCh1cmw6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIERhdGFiYXNlQVBJLnJvb3RVUkwgPSB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgLy8jcmVnaW9uIENPTlZFUlNJT04gbWV0aG9kc1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHRhc2tEYXRhIGlzIGFuIGFycmF5IG9mIFRhc2tzIChkYXRhYmFzZSBvYmplY3RzKVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgY29udmVydFRhc2tGcm9tRGJUb012Yyh0YXNrRGF0YTogYW55KTogVGFza1tdIHtcclxuICAgICAgICBpZiAodGFza0RhdGEubGVuZ3RoID09IDApIHJldHVybiBbXTtcclxuXHJcbiAgICAgICAgY29uc3QgdGFza3M6IFRhc2tbXSA9IFtdO1xyXG4gICAgICAgIHRhc2tEYXRhLmZvckVhY2goKHRhc2s6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0YXNrcy5wdXNoKG5ldyBUYXNrKHRhc2suaWQsIHRhc2submFtZSwgdGFzay5zdGF0ZSkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0YXNrcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBwcm9qRGF0YSBpcyBhbiBhcnJheSBvZiBQcm9qZWN0cyAoZGF0YWJhc2Ugb2JqZWN0cylcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFzeW5jIGNvbnZlcnRQcm9qZWN0RnJvbURiVG9NdmMocHJvakRhdGE6IGFueSk6IFByb21pc2U8UHJvamVjdFtdPiB7XHJcbiAgICAgICAgaWYgKHByb2pEYXRhLmxlbmd0aCA9PSAwKSByZXR1cm4gW107XHJcblxyXG4gICAgICAgIGNvbnN0IHByb2plY3RzOiBQcm9qZWN0W10gPSBbXTtcclxuICAgICAgICBjb25zdCB0YXNrUHJvbWlzZXM6IFByb21pc2U8VGFza1tdPltdID0gW107XHJcblxyXG4gICAgICAgIHByb2pEYXRhLmZvckVhY2goKHA6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0YXNrUHJvbWlzZXMucHVzaChEYXRhYmFzZUFQSS5nZXRUYXNrc0J5UHJvamVjdChwLmlkKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbCh0YXNrUHJvbWlzZXMpLnRoZW4oKHRhc2tzOiBUYXNrW11bXSkgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2pEYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvakRhdGFbaV0uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvakRhdGFbaV0ubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBwcm9qRGF0YVtpXS5kdWVEYXRlLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2pEYXRhW2ldLnRpbWVzdGFtcFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIG5ld1Byb2plY3QubW9kZWwuc2V0VGFza3ModGFza3NbaV0pO1xyXG4gICAgICAgICAgICAgICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHByb2plY3RzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHVzZXJEYXRhIGlzIGFuIGFycmF5IG9mIFVzZXJzIChkYXRhYmFzZSBvYmplY3RzKVxyXG4gICAgICovXHJcbiAgICBzdGF0aWMgYXN5bmMgY29udmVydFVzZXJGcm9tRGJUb012Yyh1c2VyRGF0YTogYW55KTogUHJvbWlzZTxVc2VyW10+IHtcclxuICAgICAgICBpZiAodXNlckRhdGEubGVuZ3RoID09IDApIHJldHVybiBbXTtcclxuXHJcbiAgICAgICAgY29uc3QgdXNlcnM6IFVzZXJbXSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RQcm9taXNlczogUHJvbWlzZTxQcm9qZWN0W10+W10gPSBbXTtcclxuXHJcbiAgICAgICAgdXNlckRhdGEuZm9yRWFjaCgodTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHByb2plY3RQcm9taXNlcy5wdXNoKERhdGFiYXNlQVBJLmdldFByb2plY3RzQnlVc2VyKHUuaWQpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb2plY3RQcm9taXNlcykudGhlbigocHJvamVjdHM6IFByb2plY3RbXVtdKSA9PiB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXNlckRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1VzZXIgPSBuZXcgVXNlcihcclxuICAgICAgICAgICAgICAgICAgICB1c2VyRGF0YVtpXS5pZCxcclxuICAgICAgICAgICAgICAgICAgICB1c2VyRGF0YVtpXS5uaWNrbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB1c2VyRGF0YVtpXS5wYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIG5ld1VzZXIubW9kZWwuc2V0UHJvamVjdHMocHJvamVjdHNbaV0pO1xyXG4gICAgICAgICAgICAgICAgdXNlcnMucHVzaChuZXdVc2VyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdXNlcnM7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8jZW5kcmVnaW9uIENPTlZFUlNJT04gbWV0aG9kc1xyXG4gICAgLy8jcmVnaW9uIFVTRVIgdGFibGUgbWV0aG9kc1xyXG5cclxuICAgIHN0YXRpYyBhc3luYyBnZXRBbGxVc2VycygpOiBQcm9taXNlPFVzZXJbXT4ge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHtEYXRhYmFzZUFQSS5yb290VVJMfS91c2Vyc2ApXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiBkYXRhLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oXHJcbiAgICAgICAgICAgICAgICBhc3luYyAodXNlckRhdGEpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgRGF0YWJhc2VBUEkuY29udmVydFVzZXJGcm9tRGJUb012Yyh1c2VyRGF0YSlcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0VXNlckJ5SWQoaWQ6IG51bWJlcik6IFByb21pc2U8VXNlcj4ge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHtEYXRhYmFzZUFQSS5yb290VVJMfS91c2Vycy8ke2lkfWApXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiBkYXRhLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oYXN5bmMgKHVzZXJEYXRhKSA9PlxyXG4gICAgICAgICAgICAgICAgKGF3YWl0IERhdGFiYXNlQVBJLmNvbnZlcnRVc2VyRnJvbURiVG9NdmMoW3VzZXJEYXRhXSkpLnBvcCgpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGdldFVzZXJCeU5pY2tuYW1lKG5pY2tuYW1lOiBzdHJpbmcpOiBQcm9taXNlPFVzZXI+IHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7RGF0YWJhc2VBUEkucm9vdFVSTH0vdXNlcnM/bmlja25hbWU9JHtuaWNrbmFtZX1gKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGFzeW5jICh1c2VyRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHVzZXJEYXRhLmxlbmd0aCA9PT0gMCkgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBEYXRhYmFzZUFQSS5jb252ZXJ0VXNlckZyb21EYlRvTXZjKHVzZXJEYXRhKVxyXG4gICAgICAgICAgICAgICAgKS5wb3AoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGFkZFVzZXIobmlja25hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IGAke0RhdGFiYXNlQVBJLnJvb3RVUkx9L3VzZXJzYCxcclxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogbmlja25hbWUsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vI2VuZHJlZ2lvbiBVU0VSIHRhYmxlIG1ldGhvZHNcclxuICAgIC8vI3JlZ2lvbiBQUk9KRUNUIHRhYmxlIG1ldGhvZHNcclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0QWxsUHJvamVjdHMoKTogUHJvbWlzZTxQcm9qZWN0W10+IHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7RGF0YWJhc2VBUEkucm9vdFVSTH0vcHJvamVjdHNgKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAgICAgYXN5bmMgKHByb2plY3REYXRhOiBhbnkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgRGF0YWJhc2VBUEkuY29udmVydFByb2plY3RGcm9tRGJUb012Yyhwcm9qZWN0RGF0YSlcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0UHJvamVjdHNCeVVzZXIodXNlcklkOiBudW1iZXIpOiBQcm9taXNlPFByb2plY3RbXT4ge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHtEYXRhYmFzZUFQSS5yb290VVJMfS91c2Vycy8ke3VzZXJJZH0vcHJvamVjdHNgKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAgICAgYXN5bmMgKHByb2plY3REYXRhOiBhbnkpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgRGF0YWJhc2VBUEkuY29udmVydFByb2plY3RGcm9tRGJUb012Yyhwcm9qZWN0RGF0YSlcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgdXBkYXRlUHJvamVjdHMocHJvamVjdHM6IFByb2plY3RbXSkge1xyXG4gICAgICAgIGxldCBwcm9taXNlczogUHJvbWlzZTx2b2lkPltdID0gW107XHJcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaChhc3luYyAocHJvajogUHJvamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnVwZGF0ZVRhc2tzKHByb2oubW9kZWwuZ2V0VGFza3MoKSwgcHJvai5tb2RlbC5nZXRJZCgpKTtcclxuXHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICBuZXcgUHJvbWlzZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGAke0RhdGFiYXNlQVBJLnJvb3RVUkx9L3Byb2plY3RzLyR7cHJvai5tb2RlbC5nZXRJZCgpfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBwcm9qLm1vZGVsLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVlRGF0ZTogcHJvai5tb2RlbC5nZXREdWVEYXRlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhc3luYyBkZWxldGVQcm9qZWN0cyhwcm9qZWN0czogUHJvamVjdFtdKSB7XHJcbiAgICAgICAgbGV0IHByb21pc2VzOiBQcm9taXNlPFJlc3BvbnNlPltdID0gW107XHJcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaCgocHJvajogUHJvamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBkZWxldGUgYWxsIHRhc2tzIGZvciB0aGF0IHByb2plY3RcclxuICAgICAgICAgICAgRGF0YWJhc2VBUEkuZGVsZXRlVGFza3MocHJvai5tb2RlbC5nZXRUYXNrcygpKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGRlbGV0ZSBwcm9qZWN0IGl0c2VsZlxyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZldGNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgJHtEYXRhYmFzZUFQSS5yb290VVJMfS9wcm9qZWN0cy8ke3Byb2oubW9kZWwuZ2V0SWQoKX1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5UG9wdXAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3JlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnRGVsZXRlIHByb2plY3QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBgRmFpbGVkIHRvIGRlbGV0ZSBwcm9qZWN0ICR7cHJvai5tb2RlbC5nZXRJZCgpfS5gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gcmVqZWN0KGVycikpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhc3luYyBhZGRQcm9qZWN0KFxyXG4gICAgICAgIHByb2plY3Q6IFByb2plY3RNb2RlbCxcclxuICAgICAgICB1c2VySWQ6IG51bWJlclxyXG4gICAgKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBgJHtEYXRhYmFzZUFQSS5yb290VVJMfS9wcm9qZWN0c2AsXHJcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogcHJvamVjdC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgZHVlRGF0ZTogcHJvamVjdC5nZXREdWVEYXRlKCkudG9JU09TdHJpbmcoKSxcclxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogcHJvamVjdC5nZXRUaW1lc3RhbXAoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgdXNlcklkOiB1c2VySWQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vI2VuZHJlZ2lvbiBQUk9KRUNUIHRhYmxlIG1ldGhvZHNcclxuICAgIC8vI3JlZ2lvbiBUQVNLIHRhYmxlIG1ldGhvZHNcclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0QWxsVGFza3MoKTogUHJvbWlzZTxUYXNrW10+IHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7RGF0YWJhc2VBUEkucm9vdFVSTH0vdGFza3NgKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKCh0YXNrRGF0YTogYW55KSA9PlxyXG4gICAgICAgICAgICAgICAgRGF0YWJhc2VBUEkuY29udmVydFRhc2tGcm9tRGJUb012Yyh0YXNrRGF0YSlcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0VGFza3NCeVByb2plY3QocHJvaklkOiBudW1iZXIpOiBQcm9taXNlPFRhc2tbXT4ge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHtEYXRhYmFzZUFQSS5yb290VVJMfS9wcm9qZWN0cy8ke3Byb2pJZH0vdGFza3NgKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKCh0YXNrRGF0YTogYW55KSA9PlxyXG4gICAgICAgICAgICAgICAgRGF0YWJhc2VBUEkuY29udmVydFRhc2tGcm9tRGJUb012Yyh0YXNrRGF0YSlcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0VGFza0RhdGFCeUlkKHRhc2tJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke0RhdGFiYXNlQVBJLnJvb3RVUkx9L3Rhc2tzLyR7dGFza0lkfWApXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhKSByZXR1cm4gZGF0YS5qc29uKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIHVwZGF0ZVRhc2tzKHRhc2tzOiBUYXNrW10sIHByb2plY3RJZDogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHByb21pc2VzOiBQcm9taXNlPHZvaWQ+W10gPSBbXTtcclxuICAgICAgICB0YXNrcy5mb3JFYWNoKGFzeW5jICh0YXNrOiBUYXNrKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSB0YXNrIGlzIG5ld1xyXG4gICAgICAgICAgICBpZiAodGFzay5tb2RlbC5nZXRJZCgpID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIC8vIGFkZCBuZXcgdGFza1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgRGF0YWJhc2VBUEkuYWRkVGFza3MoW3Rhc2tdLCBwcm9qZWN0SWQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyB1cGRhdGUgZXhpc3RpbmcgdGFza3NcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgIG5ldyBQcm9taXNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmZXRjaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgYCR7RGF0YWJhc2VBUEkucm9vdFVSTH0vdGFza3MvJHt0YXNrLm1vZGVsLmdldElkKCl9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRhc2subW9kZWwubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZTogdGFzay5tb2RlbC5nZXRTdGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgYWRkVGFza3ModGFza3M6IFRhc2tbXSwgcHJvamVjdElkOiBudW1iZXIpOiBQcm9taXNlPGFueVtdPiB7XHJcbiAgICAgICAgbGV0IHByb21pc2VzOiBQcm9taXNlPHZvaWQ+W10gPSBbXTtcclxuICAgICAgICB0YXNrcy5mb3JFYWNoKCh0YXNrOiBUYXNrKSA9PiB7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICBuZXcgUHJvbWlzZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBgJHtEYXRhYmFzZUFQSS5yb290VVJMfS90YXNrc2AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGFzay5tb2RlbC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHRhc2subW9kZWwuZ2V0U3RhdGUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RJZDogcHJvamVjdElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGRlbGV0ZVRhc2tzKHRhc2tzOiBUYXNrW10pIHtcclxuICAgICAgICBsZXQgcHJvbWlzZXM6IFByb21pc2U8UmVzcG9uc2U+W10gPSBbXTtcclxuICAgICAgICB0YXNrcy5mb3JFYWNoKCh0YXNrOiBUYXNrKSA9PiB7XHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICBuZXcgUHJvbWlzZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGAke0RhdGFiYXNlQVBJLnJvb3RVUkx9L3Rhc2tzLyR7dGFzay5tb2RlbC5nZXRJZCgpfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vI2VuZHJlZ2lvbiBUQVNLIHRhYmxlIG1ldGhvZHNcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gZHJhd0Ryb3Bkb3duQnV0dG9uKFxyXG4gICAgcGFyZW50OiBIVE1MRWxlbWVudCxcclxuICAgIGJ0bklkOiBzdHJpbmcsXHJcbiAgICBpdGVtczogSFRNTEVsZW1lbnRbXVxyXG4pOiBIVE1MRWxlbWVudCB7XHJcbiAgICBjb25zdCBkcm9wZG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZHJvcGRvd24uY2xhc3NOYW1lID0gJ2Ryb3Bkb3duJztcclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChkcm9wZG93bik7XHJcblxyXG4gICAgY29uc3QgZHJvcGRvd25NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkcm9wZG93bk1lbnUuY2xhc3NOYW1lID0gJ2Ryb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1yaWdodCc7XHJcbiAgICBkcm9wZG93bk1lbnUuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsbGVkYnknLCBidG5JZCk7XHJcbiAgICBkcm9wZG93bi5hcHBlbmRDaGlsZChkcm9wZG93bk1lbnUpO1xyXG5cclxuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IGRyb3Bkb3duTWVudS5hcHBlbmRDaGlsZChpdGVtKSk7XHJcblxyXG4gICAgcmV0dXJuIGRyb3Bkb3duO1xyXG59XHJcbiIsIi8qKlxyXG4gKiBAcGFyYW0gZGF0YSByZXF1aXJlcyBUSVRMRSwgTUVTU0FHRSBhbmQgQlVUVE9OUyBwcm9wZXJ0eS5cclxuICogRWFjaCBidXR0b24gcmVxdWlyZXMgVEVYVCwgVFlQRSAoY2xhc3MgbmFtZSAtIGUuZy4gJ3ByaW1hcnknLCAnZGFuZ2VyJywgZXRjLikgYW5kIENBTExCQUNLIEZVTkNUSU9OLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlNb2RhbChkYXRhOiBhbnkpIHtcclxuICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbERpYWxvZycpO1xyXG4gICAgaWYgKG1vZGFsICE9PSBudWxsKSBtb2RhbC5yZW1vdmUoKTtcclxuICAgIG1vZGFsID0gY3JlYXRlTW9kYWwoZGF0YSk7XHJcbiAgICAkKCcubWFuYWdlcicpWzBdLmFwcGVuZENoaWxkKG1vZGFsKTtcclxuXHJcbiAgICAoPGFueT4kKCcjbW9kYWxEaWFsb2cnKSkubW9kYWwoJ3Nob3cnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTW9kYWwoZGF0YTogYW55KSB7XHJcbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbW9kYWwuaWQgPSAnbW9kYWxEaWFsb2cnO1xyXG4gICAgbW9kYWwuY2xhc3NOYW1lID0gJ21vZGFsIGZhZGUnO1xyXG4gICAgbW9kYWwudGFiSW5kZXggPSAtMTtcclxuXHJcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpYWxvZy5jbGFzc05hbWUgPSAnbW9kYWwtZGlhbG9nIG1vZGFsLWRpYWxvZy1jZW50ZXJlZCc7XHJcblxyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGVudC5jbGFzc05hbWUgPSAnbW9kYWwtY29udGVudCc7XHJcblxyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBoZWFkZXIuY2xhc3NOYW1lID0gJ21vZGFsLWhlYWRlcic7XHJcblxyXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xyXG4gICAgdGl0bGUuY2xhc3NOYW1lID0gJ21vZGFsLXRpdGxlJztcclxuICAgIHRpdGxlLmlubmVySFRNTCA9IGRhdGEudGl0bGU7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICAgIGNvbnN0IGJ0bkNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoYnRuQ2xvc2UpO1xyXG4gICAgYnRuQ2xvc2UuY2xhc3NOYW1lID0gJ2Nsb3NlJztcclxuICAgIGJ0bkNsb3NlLnNldEF0dHJpYnV0ZSgnZGF0YS1kaXNtaXNzJywgJ21vZGFsJyk7XHJcbiAgICBidG5DbG9zZS5pbm5lckhUTUwgPSAnPHNwYW4+JnRpbWVzOzwvc3Bhbj4nO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG5cclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJvZHkuY2xhc3NOYW1lID0gJ21vZGFsLWJvZHknO1xyXG5cclxuICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHBhcmFncmFwaC5pbm5lckhUTUwgPSBkYXRhLm1lc3NhZ2U7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJvZHkpO1xyXG5cclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZm9vdGVyLmNsYXNzTmFtZSA9ICdtb2RhbC1mb290ZXInO1xyXG5cclxuICAgIGRhdGEuYnV0dG9ucy5mb3JFYWNoKChidG46IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGJ0bkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidG5FbGVtZW50LmNsYXNzTmFtZSA9IGBidG4gYnRuLSR7YnRuLnR5cGV9IGJ0bk1vZGFsYDtcclxuICAgICAgICBidG5FbGVtZW50LmlubmVySFRNTCA9IGJ0bi50ZXh0O1xyXG4gICAgICAgIGJ0bkVsZW1lbnQub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgYnRuLmNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICg8YW55PiQoJyNtb2RhbERpYWxvZycpKS5tb2RhbCgndG9nZ2xlJyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmb290ZXIuYXBwZW5kQ2hpbGQoYnRuRWxlbWVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcbiAgICBkaWFsb2cuYXBwZW5kQ2hpbGQoY29udGVudCk7XHJcbiAgICBtb2RhbC5hcHBlbmRDaGlsZChkaWFsb2cpO1xyXG4gICAgcmV0dXJuIG1vZGFsO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiByZW1vdmVFbGVtZW50c0NoaWxkcmVuKGVsZW1lbnQ6IEVsZW1lbnQpIHtcclxuICAgIGlmIChlbGVtZW50ID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgIHdoaWxlIChlbGVtZW50LmNoaWxkcmVuWzBdKSBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuY2hpbGRyZW5bMF0pO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBzaG9ydGVuU3RyaW5nKHM6IHN0cmluZywgbGVuZ3RoOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgaWYgKHMubGVuZ3RoIDw9IGxlbmd0aCkgcmV0dXJuIHM7XHJcblxyXG4gICAgLy8gcmVtb3ZlIGxhc3QgMyBsZXR0ZXJzXHJcbiAgICBsZXQgc2hvcnRTdHIgPSBzLnN1YnN0cigwLCBsZW5ndGggLSAzKTtcclxuXHJcbiAgICAvLyByZW1vdmUgd2hpdGUgc3BhY2UgYXQgdGhlIGVuZFxyXG4gICAgaWYgKHNob3J0U3RyLmNoYXJBdChzaG9ydFN0ci5sZW5ndGggLSAxKSA9PT0gJyAnKVxyXG4gICAgICAgIHNob3J0U3RyID0gc2hvcnRTdHIuc2xpY2UoMCwgc2hvcnRTdHIubGVuZ3RoIC0gMSk7XHJcblxyXG4gICAgcmV0dXJuIHNob3J0U3RyICsgJy4uLic7XHJcbn1cclxuIiwiZXhwb3J0IGVudW0gVGFza1N0YXRlIHtcclxuICBUT19ETyA9ICdUbyBkbycsXHJcbiAgSU5fUFJPR1JFU1MgPSAnSW4gcHJvZ3Jlc3MnLFxyXG4gIEZJTklTSEVEID0gJ0ZpbmlzaGVkJyxcclxufVxyXG4iLCIvKipcclxuICogQHBhcmFtIGRhdGEgcmVxdWlyZXMgQ09MT1IsIFRJVExFIGFuZCBNRVNTQUdFIHByb3BlcnR5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVBvcHVwKGRhdGE6IGFueSkge1xyXG4gICAgdmFyIHRvYXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvYXN0Tm90aWYnKTtcclxuICAgIGlmICh0b2FzdCAhPT0gbnVsbCkgdG9hc3QucmVtb3ZlKCk7XHJcbiAgICB0b2FzdCA9IGNyZWF0ZVBvcHVwKGRhdGEpO1xyXG4gICAgJCgnLm1hbmFnZXInKVswXS5hcHBlbmRDaGlsZCh0b2FzdCk7XHJcblxyXG4gICAgKDxhbnk+JCgnI3RvYXN0Tm90aWYnKSkudG9hc3QoeyBkZWxheTogNDAwMCB9KTtcclxuICAgICg8YW55PiQoJyN0b2FzdE5vdGlmJykpLnRvYXN0KCdzaG93Jyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVBvcHVwKGRhdGE6IGFueSkge1xyXG4gICAgY29uc3QgdG9hc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRvYXN0LmNsYXNzTmFtZSA9ICd0b2FzdCc7XHJcbiAgICB0b2FzdC5pZCA9ICd0b2FzdE5vdGlmJztcclxuXHJcbiAgICBjb25zdCB0b2FzdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdG9hc3RIZWFkZXIuY2xhc3NOYW1lID0gJ3RvYXN0LWhlYWRlcic7XHJcbiAgICB0b2FzdC5hcHBlbmRDaGlsZCh0b2FzdEhlYWRlcik7XHJcblxyXG4gICAgY29uc3Qgc3RhdHVzSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc3RhdHVzSWNvbi5jbGFzc05hbWUgPSAnc3RhdHVzSWNvbic7XHJcbiAgICBzdGF0dXNJY29uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGRhdGEuY29sb3I7XHJcbiAgICB0b2FzdEhlYWRlci5hcHBlbmRDaGlsZChzdGF0dXNJY29uKTtcclxuXHJcbiAgICBjb25zdCBsYmxIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHJvbmcnKTtcclxuICAgIGxibEhlYWRlci5jbGFzc05hbWUgPSAnbXItYXV0byc7XHJcbiAgICBsYmxIZWFkZXIuaW5uZXJIVE1MID0gZGF0YS50aXRsZTtcclxuICAgIHRvYXN0SGVhZGVyLmFwcGVuZENoaWxkKGxibEhlYWRlcik7XHJcblxyXG4gICAgY29uc3QgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NtYWxsJyk7XHJcbiAgICB0b2FzdEhlYWRlci5hcHBlbmRDaGlsZCh0aW1lKTtcclxuXHJcbiAgICBjb25zdCBidG5DbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgdG9hc3RIZWFkZXIuYXBwZW5kQ2hpbGQoYnRuQ2xvc2UpO1xyXG4gICAgYnRuQ2xvc2UudHlwZSA9ICdidXR0b24nO1xyXG4gICAgYnRuQ2xvc2UuY2xhc3NOYW1lID0gJ21sLTIgbWItMSBjbG9zZSc7XHJcbiAgICBidG5DbG9zZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtZGlzbWlzcycsICd0b2FzdCcpO1xyXG4gICAgdG9hc3RIZWFkZXIuYXBwZW5kQ2hpbGQoYnRuQ2xvc2UpO1xyXG5cclxuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBzcGFuLmlubmVySFRNTCA9ICcmdGltZXM7JztcclxuICAgIGJ0bkNsb3NlLmFwcGVuZENoaWxkKHNwYW4pO1xyXG5cclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJvZHkuY2xhc3NOYW1lID0gJ3RvYXN0LWJvZHknO1xyXG4gICAgYm9keS5pbm5lckhUTUwgPSBkYXRhLm1lc3NhZ2U7XHJcbiAgICB0b2FzdC5hcHBlbmRDaGlsZChib2R5KTtcclxuXHJcbiAgICByZXR1cm4gdG9hc3Q7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBEYXRhYmFzZUFQSSB9IGZyb20gJy4vdXRpbHMvZGF0YWJhc2VBUEknO1xyXG5pbXBvcnQgeyBNYW5hZ2VyIH0gZnJvbSAnLi9tYW5hZ2VyL2NvbnRyb2xsZXInO1xyXG5cclxuY29uc3QgZGJVUkwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwJztcclxuRGF0YWJhc2VBUEkuc2V0Um9vdFVSTChkYlVSTCk7XHJcblxyXG5jb25zdCBtYW5hZ2VyOiBNYW5hZ2VyID0gbmV3IE1hbmFnZXIoKTtcclxubWFuYWdlci5kcmF3KGRvY3VtZW50LmJvZHkpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9