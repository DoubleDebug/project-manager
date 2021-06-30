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

/***/ "./src/ts/databaseAPI.ts":
/*!*******************************!*\
  !*** ./src/ts/databaseAPI.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatabaseAPI": () => (/* binding */ DatabaseAPI)
/* harmony export */ });
/* harmony import */ var _manager_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manager/view */ "./src/ts/manager/view.ts");
/* harmony import */ var _project_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project/controller */ "./src/ts/project/controller.ts");
/* harmony import */ var _task_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task/controller */ "./src/ts/task/controller.ts");
/* harmony import */ var _user_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/controller */ "./src/ts/user/controller.ts");
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
            tasks.push(new _task_controller__WEBPACK_IMPORTED_MODULE_2__.Task(task.id, task.name, task.state));
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
                            var newProject = new _project_controller__WEBPACK_IMPORTED_MODULE_1__.Project(projData[i].id, projData[i].name, projData[i].dueDate, projData[i].timestamp);
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
                            var newUser = new _user_controller__WEBPACK_IMPORTED_MODULE_3__.User(userData[i].id, userData[i].nickname, userData[i].password);
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
                            case 0: return [4 /*yield*/, this.updateTasks(proj.model.getTasks())];
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
                Promise.all(promises);
                return [2 /*return*/];
            });
        });
    };
    DatabaseAPI.deleteProjects = function (projects) {
        return __awaiter(this, void 0, void 0, function () {
            var promises;
            return __generator(this, function (_a) {
                promises = [];
                projects.forEach(function (proj) {
                    promises.push(new Promise(function (resolve, reject) {
                        fetch(DatabaseAPI.rootURL + "/projects/" + proj.model.getId(), {
                            method: 'DELETE',
                        })
                            .then(function (response) {
                            if (!response.ok) {
                                _manager_view__WEBPACK_IMPORTED_MODULE_0__.ManagerView.displayPopup({
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
                Promise.all(promises);
                return [2 /*return*/];
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
                            userId: userId
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
                        .then(function (taskData) { return DatabaseAPI.convertTaskFromDbToMvc(taskData); })];
            });
        });
    };
    DatabaseAPI.getTasksByProject = function (projId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, fetch(DatabaseAPI.rootURL + "/projects/" + projId + "/tasks")
                        .then(function (data) { return data.json(); })
                        .then(function (taskData) { return DatabaseAPI.convertTaskFromDbToMvc(taskData); })];
            });
        });
    };
    DatabaseAPI.updateTasks = function (tasks) {
        return __awaiter(this, void 0, void 0, function () {
            var promises;
            return __generator(this, function (_a) {
                promises = [];
                tasks.forEach(function (task) {
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
                });
                Promise.all(promises);
                return [2 /*return*/];
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
                                projectId: projectId
                            },
                            async: true,
                        });
                    }));
                });
                Promise.all(promises);
                return [2 /*return*/];
            });
        });
    };
    return DatabaseAPI;
}());



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
/* harmony import */ var _databaseAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../databaseAPI */ "./src/ts/databaseAPI.ts");
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
                        return [4 /*yield*/, _databaseAPI__WEBPACK_IMPORTED_MODULE_0__.DatabaseAPI.getUserById(Number(currentUserId))];
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
        d.setTime(d.getTime() + (7 * 24 * 60 * 60 * 1000)); // expires in 7 days
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
        return (matchesRegex !== null);
    };
    /**
     * @returns a login result message ('success' if login successful)
     */
    ManagerModel.prototype.tryLoginUser = function (nickname, password) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, _databaseAPI__WEBPACK_IMPORTED_MODULE_0__.DatabaseAPI.getUserByNickname(nickname)];
                    case 1:
                        user = _a.sent();
                        if (user === null)
                            return [2 /*return*/, 'user doesn\'t exist'];
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
                    case 0: return [4 /*yield*/, _databaseAPI__WEBPACK_IMPORTED_MODULE_0__.DatabaseAPI.getUserByNickname(nickname)];
                    case 1:
                        userWithSameNickname = _b.sent();
                        if (userWithSameNickname !== null)
                            return [2 /*return*/, 'nickname already taken'];
                        return [4 /*yield*/, _databaseAPI__WEBPACK_IMPORTED_MODULE_0__.DatabaseAPI.addUser(nickname, password)];
                    case 2:
                        newUser = _b.sent();
                        // save current user in cookies
                        _a = this;
                        return [4 /*yield*/, _databaseAPI__WEBPACK_IMPORTED_MODULE_0__.DatabaseAPI.getUserById(newUser.id)];
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
        document.cookie = 'userId=;expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/';
        location.reload();
    };
    ManagerModel.shortenString = function (s, length) {
        if (s.length <= length)
            return s;
        // remove last 3 letters
        var shortStr = s.substr(0, length - 3);
        // remove white space at the end
        if (shortStr.charAt(shortStr.length - 1) === ' ')
            shortStr = shortStr.slice(0, shortStr.length - 1);
        return shortStr + '...';
    };
    ManagerModel.prototype.addNewProject = function (p) {
        this.currentUser.model.addProject(p);
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
/* harmony import */ var _databaseAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../databaseAPI */ "./src/ts/databaseAPI.ts");
/* harmony import */ var _project_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../project/view */ "./src/ts/project/view.ts");
/* harmony import */ var _taskState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../taskState */ "./src/ts/taskState.ts");
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
    /**
     * @param data requires COLOR, TITLE and MESSAGE property
     */
    ManagerView.displayPopup = function (data) {
        var toast = document.getElementById('toastNotif');
        if (toast !== null)
            toast.remove();
        toast = ManagerView.createPopup(data);
        $('.manager')[0].appendChild(toast);
        $('#toastNotif').toast({ delay: 4000 });
        $('#toastNotif').toast('show');
    };
    ManagerView.createPopup = function (data) {
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
    };
    /**
     * @param data requires COLOR, TITLE, MESSAGE and BUTTONS property.
     * Each button requires TEXT, TYPE (class name) and CALLBACK FUNCTION.
     */
    ManagerView.displayModal = function (data) {
        var modal = document.getElementById('modalDialog');
        if (modal !== null)
            modal.remove();
        modal = ManagerView.createModal(data);
        $('.manager')[0].appendChild(modal);
        $('#modalDialog').modal('show');
    };
    ManagerView.createModal = function (data) {
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
                            ManagerView.displayPopup({
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
                            ManagerView.displayPopup({
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
            var dashboard = document.getElementsByClassName('dashboard')[0];
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
    ManagerView.drawDropdownButton = function (parent, btnId, items) {
        var dropdown = document.createElement('div');
        dropdown.className = 'dropdown';
        parent.appendChild(dropdown);
        var dropdownMenu = document.createElement('div');
        dropdownMenu.className = 'dropdown-menu dropdown-menu-right';
        dropdownMenu.setAttribute('aria-labelledby', btnId);
        dropdown.appendChild(dropdownMenu);
        items.forEach(function (item) { return dropdownMenu.appendChild(item); });
        return dropdown;
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
            proj.drawPreview(dashboard, function () { return _this.drawDashboard(projects, model); }, model);
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
            var dashboard = document.getElementsByClassName('dashboard')[0];
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
        var dropdown = ManagerView.drawDropdownButton(parent, 'btnProfileDropdown', dropdownItems);
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
        var dropdown = ManagerView.drawDropdownButton(parent, 'btnSortDropdown', dropdownItems);
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
            ManagerView.displayModal({
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
                            _databaseAPI__WEBPACK_IMPORTED_MODULE_0__.DatabaseAPI.updateProjects(projects).then(function () {
                                // redraw projects
                                _this.redrawDashboard(projects, model);
                                // notify user
                                ManagerView.displayPopup({
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
            ManagerView.displayModal({
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
                            _databaseAPI__WEBPACK_IMPORTED_MODULE_0__.DatabaseAPI.deleteProjects(user.model.getProjects()).then(function () {
                                user.model.setProjects([]);
                                // update ui
                                _this.redrawDashboard([], model);
                                // notify user
                                ManagerView.displayPopup({
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
        var dropdown = ManagerView.drawDropdownButton(parent, 'btnAction', dropdownItems);
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
        var btnFilterToDo = this.createFilterDropdownItem('To do', model, dropdownItems, _taskState__WEBPACK_IMPORTED_MODULE_2__.TaskState.TO_DO);
        dropdownItems.push(btnFilterToDo);
        // Filter IN PROGRESS projects
        var btnInProgress = this.createFilterDropdownItem('In progress', model, dropdownItems, _taskState__WEBPACK_IMPORTED_MODULE_2__.TaskState.IN_PROGRESS);
        dropdownItems.push(btnInProgress);
        // Filter FINISHED projects
        var btnFinished = this.createFilterDropdownItem('Finished', model, dropdownItems, _taskState__WEBPACK_IMPORTED_MODULE_2__.TaskState.FINISHED);
        dropdownItems.push(btnFinished);
        // Filter button
        var dropdown = ManagerView.drawDropdownButton(parent, 'btnFilterDropdown', dropdownItems);
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
                _this.redrawDashboard(user.getProjects().filter(function (p) { return p.model.getProjectState() === state; }), model);
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
        ManagerView.removeElementsChildren(dashboard);
        // redraw
        this.drawDashboard(projects, model);
    };
    ManagerView.removeElementsChildren = function (element) {
        if (element === undefined)
            return;
        while (element.children[0])
            element.removeChild(element.children[0]);
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
/* harmony import */ var _taskState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../taskState */ "./src/ts/taskState.ts");


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
    ProjectModel.prototype.getPercentageDone = function () {
        if (this.tasks.length === 0)
            return 0;
        var numOfTasks = this.tasks.length;
        var numOfFinishedTasks = this.getNumOfTasksInState(_taskState__WEBPACK_IMPORTED_MODULE_0__.TaskState.FINISHED);
        var numOfInProgressTasks = this.getNumOfTasksInState(_taskState__WEBPACK_IMPORTED_MODULE_0__.TaskState.IN_PROGRESS);
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
        var refferenceTime = (refTime) ? refTime : this.getDueDate();
        if (refferenceTime < (new Date()))
            return (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.default)(refferenceTime, new Date(), { addSuffix: addSuffix });
        else
            return (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.default)(refferenceTime, new Date()) + ' left';
    };
    ProjectModel.prototype.getProjectState = function () {
        var numOfTasks = this.getNumOfTasks();
        if (numOfTasks === 0)
            return _taskState__WEBPACK_IMPORTED_MODULE_0__.TaskState.TO_DO;
        var result = _taskState__WEBPACK_IMPORTED_MODULE_0__.TaskState.TO_DO;
        for (var i = 0; i < numOfTasks; i++) {
            var currentTaskState = this.tasks[i].model.getState();
            if (currentTaskState === _taskState__WEBPACK_IMPORTED_MODULE_0__.TaskState.IN_PROGRESS
                || (result === _taskState__WEBPACK_IMPORTED_MODULE_0__.TaskState.FINISHED && currentTaskState === _taskState__WEBPACK_IMPORTED_MODULE_0__.TaskState.TO_DO)) {
                result = _taskState__WEBPACK_IMPORTED_MODULE_0__.TaskState.IN_PROGRESS;
                break;
            }
            if (currentTaskState === _taskState__WEBPACK_IMPORTED_MODULE_0__.TaskState.FINISHED) {
                result = _taskState__WEBPACK_IMPORTED_MODULE_0__.TaskState.FINISHED;
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
/* harmony import */ var _databaseAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../databaseAPI */ "./src/ts/databaseAPI.ts");
/* harmony import */ var _manager_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../manager/model */ "./src/ts/manager/model.ts");
/* harmony import */ var _manager_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../manager/view */ "./src/ts/manager/view.ts");
/* harmony import */ var _taskState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../taskState */ "./src/ts/taskState.ts");
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controller */ "./src/ts/project/controller.ts");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./model */ "./src/ts/project/model.ts");
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
            _manager_view__WEBPACK_IMPORTED_MODULE_2__.ManagerView.removeElementsChildren(parent);
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
        title.innerHTML = _manager_model__WEBPACK_IMPORTED_MODULE_1__.ManagerModel.shortenString(model.name, 12);
        body.appendChild(title);
        var percentage = model.getPercentageDone();
        var percentageLabel = document.createElement('hlabel1');
        percentageLabel.className = 'lblProjectPercentage';
        percentageLabel.innerHTML = percentage + "%";
        body.appendChild(percentageLabel);
        var timeLeft = model.getTimeRemaining(true);
        var dueOnLabel = document.createElement('label');
        dueOnLabel.className = 'card-text lblTimeLeft';
        dueOnLabel.innerHTML =
            "\u2022 " + timeLeft + "</br>\n       \u2022 " + model.getNumOfTasksInState(_taskState__WEBPACK_IMPORTED_MODULE_3__.TaskState.FINISHED) + "/" + model.getNumOfTasks() + " tasks finished";
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
            model = new _model__WEBPACK_IMPORTED_MODULE_5__.ProjectModel(undefined, '', tomorrowsDate, new Date());
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
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        // short data validation
                        if (!model.validateProjectInput(inputName.value)) {
                            _manager_view__WEBPACK_IMPORTED_MODULE_2__.ManagerView.displayPopup({
                                color: 'red',
                                title: 'Invalid input',
                                message: 'Project name can\'t remain empty.'
                            });
                            return [2 /*return*/];
                        }
                        user = managerModel.getCurrentUser().model;
                        return [4 /*yield*/, this.saveDataFromForm(model, newProject, managerModel)];
                    case 1:
                        _a.sent();
                        // remove editor
                        parent.remove();
                        // draw dashboard
                        goBackFunctionCallback();
                        // display message
                        _manager_view__WEBPACK_IMPORTED_MODULE_2__.ManagerView.displayPopup({
                            color: 'green',
                            title: 'Successful update',
                            message: 'Successfully updated a project.'
                        });
                        return [2 /*return*/];
                }
            });
        }); };
        projectHeader.appendChild(btnSave);
        this.drawOptionsDropdown(projectHeader, model);
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
        var tasksToDo = model.getTasksInState(_taskState__WEBPACK_IMPORTED_MODULE_3__.TaskState.TO_DO);
        var tasksInProgress = model.getTasksInState(_taskState__WEBPACK_IMPORTED_MODULE_3__.TaskState.IN_PROGRESS);
        var tasksFinished = model.getTasksInState(_taskState__WEBPACK_IMPORTED_MODULE_3__.TaskState.FINISHED);
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
    ProjectView.prototype.drawOptionsDropdown = function (parent, model) {
        var dropdownItems = [];
        // Mark project as finished
        var btnMark = document.createElement('a');
        btnMark.className = 'dropdown-item';
        btnMark.innerHTML = 'Mark as finished';
        btnMark.onclick = function () {
        };
        dropdownItems.push(btnMark);
        // Delete project
        var btnDelete = document.createElement('a');
        btnDelete.className = 'dropdown-item';
        btnDelete.innerHTML = 'Delete project';
        btnDelete.onclick = function () {
        };
        dropdownItems.push(btnDelete);
        var dropdown = _manager_view__WEBPACK_IMPORTED_MODULE_2__.ManagerView.drawDropdownButton(parent, 'btnOptions', dropdownItems);
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
        tasks.forEach(function (t) { return t.view.drawPreview(section, t.model, model, sectionName, null); });
        var btnAddTask = document.createElement('div');
        btnAddTask.className = 'btnAddTask';
        btnAddTask.innerHTML = '<i class="fas fa-plus iconProjectEditor"></i>';
        section.appendChild(btnAddTask);
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
        labelTasks.innerHTML =
            "\u2022 " + model.getNumOfTasksInState(_taskState__WEBPACK_IMPORTED_MODULE_3__.TaskState.FINISHED) + "/" + model.getNumOfTasks() + " tasks finished";
        var percentageDone = model.getPercentageDone();
        labelPercentage.innerHTML = percentageDone + "%";
        progressBar.style.width = percentageDone + "%";
    };
    ProjectView.prototype.saveDataFromForm = function (model, newProject, managerModel) {
        return __awaiter(this, void 0, void 0, function () {
            var name, date, user, newProject_1, response, projectPromise, taskPromise;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = document.getElementById('inputProjectName').value;
                        date = document.getElementById('inputProjectDueDate').value;
                        model.name = name;
                        model.setDueDate(new Date(date));
                        if (!newProject) return [3 /*break*/, 3];
                        user = managerModel.getCurrentUser().model;
                        newProject_1 = new _controller__WEBPACK_IMPORTED_MODULE_4__.Project(undefined, model.name, model.getDueDate(), model.getTimestamp());
                        return [4 /*yield*/, _databaseAPI__WEBPACK_IMPORTED_MODULE_0__.DatabaseAPI.addProject(newProject_1.model, user.getId())];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, _databaseAPI__WEBPACK_IMPORTED_MODULE_0__.DatabaseAPI.addTasks(model.getTasks(), response.id)];
                    case 2:
                        _a.sent();
                        managerModel.addNewProject(newProject_1);
                        return [3 /*break*/, 5];
                    case 3:
                        projectPromise = _databaseAPI__WEBPACK_IMPORTED_MODULE_0__.DatabaseAPI.updateProjects([
                            new _controller__WEBPACK_IMPORTED_MODULE_4__.Project(model.getId(), model.name, model.getDueDate(), model.getTimestamp())
                        ]);
                        taskPromise = _databaseAPI__WEBPACK_IMPORTED_MODULE_0__.DatabaseAPI.updateTasks(model.getTasks());
                        return [4 /*yield*/, Promise.all([
                                taskPromise,
                                projectPromise
                            ])];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    return ProjectView;
}());



/***/ }),

/***/ "./src/ts/taskState.ts":
/*!*****************************!*\
  !*** ./src/ts/taskState.ts ***!
  \*****************************/
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
/* harmony import */ var _manager_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../manager/model */ "./src/ts/manager/model.ts");
/* harmony import */ var _project_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../project/view */ "./src/ts/project/view.ts");
/* harmony import */ var _taskState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../taskState */ "./src/ts/taskState.ts");



var TaskView = /** @class */ (function () {
    function TaskView() {
    }
    TaskView.prototype.drawPreview = function (parent, model, projectModel, section, container, switchingSections) {
        var _this = this;
        if (switchingSections === void 0) { switchingSections = false; }
        var firstTime = (container === null);
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
            iconGoLeft.className = 'fas fa-chevron-left fa-sm iconGoLeftRight hide';
            iconGoLeft.onclick = function (e) {
                e.stopPropagation();
                var sectionToDo = parent.parentElement.children[0];
                var sectionInProgress = parent.parentElement.children[2];
                if (section === 'In progress') {
                    model.setState(_taskState__WEBPACK_IMPORTED_MODULE_2__.TaskState.TO_DO);
                    _this.drawPreview(sectionToDo, model, projectModel, 'To do', null, true);
                }
                else if (section === 'Finished') {
                    model.setState(_taskState__WEBPACK_IMPORTED_MODULE_2__.TaskState.IN_PROGRESS);
                    _this.drawPreview(sectionInProgress, model, projectModel, 'In progress', null, true);
                }
                container.remove();
                _this.reevaluateProgress(projectModel);
            };
        }
        container.appendChild(iconGoLeft);
        var lblTaskName = document.createElement('label');
        lblTaskName.innerHTML = _manager_model__WEBPACK_IMPORTED_MODULE_0__.ManagerModel.shortenString(model.name, 9);
        container.appendChild(lblTaskName);
        var iconGoRight = document.createElement('i');
        if (section !== 'Finished') {
            iconGoRight.className = 'fas fa-chevron-right fa-sm iconGoLeftRight hide';
            iconGoRight.onclick = function (e) {
                e.stopPropagation();
                var sectionFinished = parent.parentElement.children[4];
                var sectionInProgress = parent.parentElement.children[2];
                if (section === 'In progress') {
                    model.setState(_taskState__WEBPACK_IMPORTED_MODULE_2__.TaskState.FINISHED);
                    _this.drawPreview(sectionFinished, model, projectModel, 'Finished', null, true);
                }
                else if (section === 'To do') {
                    model.setState(_taskState__WEBPACK_IMPORTED_MODULE_2__.TaskState.IN_PROGRESS);
                    _this.drawPreview(sectionInProgress, model, projectModel, 'In progress', null, true);
                }
                container.remove();
                _this.reevaluateProgress(projectModel);
            };
        }
        container.appendChild(iconGoRight);
    };
    TaskView.prototype.drawEditor = function (container, model, projectModel, section) {
        var _this = this;
        container.classList.toggle('expand');
        container.onclick = null;
        var inputTaskName = document.createElement('input');
        inputTaskName.id = 'inputTaskName';
        inputTaskName.className = 'form-control inputTaskName';
        inputTaskName.value = model.name;
        container.appendChild(inputTaskName);
        var btnSave = document.createElement('button');
        btnSave.className = 'btn btn-success btnSaveTask';
        btnSave.innerHTML = 'Save';
        btnSave.onclick = function (e) {
            e.stopPropagation();
            // update task name
            model.name = inputTaskName.value;
            // clear element
            inputTaskName.remove();
            btnSave.remove();
            _this.drawPreview(container.parentElement, model, projectModel, section, container);
        };
        container.appendChild(btnSave);
    };
    TaskView.prototype.reevaluateProgress = function (projectModel) {
        var lblTasksDone = document.getElementsByClassName('lblTasksDone')[0];
        var lblPercentage = document.getElementById('lblPercentage');
        var progress = document.getElementsByClassName('progress-bar')[0];
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
/* harmony import */ var _taskState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../taskState */ "./src/ts/taskState.ts");

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
                return (reverseOperators ? 1 : -1);
            else if (a.model[criteria]() > b.model[criteria]())
                return (reverseOperators ? -1 : 1);
            return 0;
        });
    };
    UserModel.prototype.markAllAsFinished = function () {
        this.projects.map(function (proj) {
            proj.model.getTasks().map(function (task) {
                task.model.setState(_taskState__WEBPACK_IMPORTED_MODULE_0__.TaskState.FINISHED);
            });
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
/* harmony import */ var _databaseAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./databaseAPI */ "./src/ts/databaseAPI.ts");
/* harmony import */ var _manager_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manager/controller */ "./src/ts/manager/controller.ts");


var dbURL = 'http://localhost:3000';
_databaseAPI__WEBPACK_IMPORTED_MODULE_0__.DatabaseAPI.setRootURL(dbURL);
var manager = new _manager_controller__WEBPACK_IMPORTED_MODULE_1__.Manager();
manager.draw(document.body);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Nsb25lT2JqZWN0L2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbXBhcmVBc2MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbk1vbnRocy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJblNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9lbmRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2VuZE9mTW9udGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zvcm1hdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzTGFzdERheU9mTW9udGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1ZhbGlkL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL21hdGNoL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL3NyYy90cy9kYXRhYmFzZUFQSS50cyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9zcmMvdHMvbWFuYWdlci9jb250cm9sbGVyLnRzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL3NyYy90cy9tYW5hZ2VyL21vZGVsLnRzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL3NyYy90cy9tYW5hZ2VyL3ZpZXcudHMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vc3JjL3RzL3Byb2plY3QvY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9zcmMvdHMvcHJvamVjdC9tb2RlbC50cyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9zcmMvdHMvcHJvamVjdC92aWV3LnRzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL3NyYy90cy90YXNrU3RhdGUudHMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vc3JjL3RzL3Rhc2svY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9zcmMvdHMvdGFzay9tb2RlbC50cyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9zcmMvdHMvdGFzay92aWV3LnRzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL3NyYy90cy91c2VyL2NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vc3JjL3RzL3VzZXIvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vc3JjL3RzL3VzZXIvdmlldy50cyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9zcmMvdHMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7OztBQ1RlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNkd0M7QUFDekI7QUFDZixTQUFTLHlEQUFNLEdBQUc7QUFDbEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSDBEO0FBQ1c7QUFDSjtBQUNRO0FBQ2Q7QUFDUTtBQUNOO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7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U0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsa0VBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLGtFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxrRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLGdFQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLGdFQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLGtFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxrRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLGdF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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQSxpREFBaUQsV0FBVztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7QUNONEM7QUFDRztBQUUvQyxJQUFNLEtBQUssR0FBRyx1QkFBdUIsQ0FBQztBQUN0QyxnRUFBc0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUU5QixJQUFNLE9BQU8sR0FBWSxJQUFJLHdEQUFPLEVBQUUsQ0FBQztBQUN2QyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm9zKG51bWJlciwgdGFyZ2V0TGVuZ3RoKSB7XG4gIHZhciBzaWduID0gbnVtYmVyIDwgMCA/ICctJyA6ICcnO1xuICB2YXIgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpO1xuXG4gIHdoaWxlIChvdXRwdXQubGVuZ3RoIDwgdGFyZ2V0TGVuZ3RoKSB7XG4gICAgb3V0cHV0ID0gJzAnICsgb3V0cHV0O1xuICB9XG5cbiAgcmV0dXJuIHNpZ24gKyBvdXRwdXQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgZGlydHlPYmplY3QpIHtcbiAgaWYgKHRhcmdldCA9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXNzaWduIHJlcXVpcmVzIHRoYXQgaW5wdXQgcGFyYW1ldGVyIG5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZCcpO1xuICB9XG5cbiAgZGlydHlPYmplY3QgPSBkaXJ0eU9iamVjdCB8fCB7fTtcblxuICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBkaXJ0eU9iamVjdCkge1xuICAgIGlmIChkaXJ0eU9iamVjdC5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgIHRhcmdldFtwcm9wZXJ0eV0gPSBkaXJ0eU9iamVjdFtwcm9wZXJ0eV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn0iLCJpbXBvcnQgYXNzaWduIGZyb20gXCIuLi9hc3NpZ24vaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNsb25lT2JqZWN0KGRpcnR5T2JqZWN0KSB7XG4gIHJldHVybiBhc3NpZ24oe30sIGRpcnR5T2JqZWN0KTtcbn0iLCJpbXBvcnQgbGlnaHRGb3JtYXR0ZXJzIGZyb20gXCIuLi9saWdodEZvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENEYXlPZlllYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG52YXIgZGF5UGVyaW9kRW51bSA9IHtcbiAgYW06ICdhbScsXG4gIHBtOiAncG0nLFxuICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgbm9vbjogJ25vb24nLFxuICBtb3JuaW5nOiAnbW9ybmluZycsXG4gIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgbmlnaHQ6ICduaWdodCdcbiAgLypcbiAgICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICAgKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gICAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgTWlsbGlzZWNvbmRzIGluIGRheSAgICAgICAgICAgIHxcbiAgICogfCAgYiAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgfCAgQiAgfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgfFxuICAgKiB8ICBjICB8IFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrICB8ICBDKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8XG4gICAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAgICogfCAgZSAgfCBMb2NhbCBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgfCAgRSAgfCBEYXkgb2Ygd2VlayAgICAgICAgICAgICAgICAgICAgfFxuICAgKiB8ICBmICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBGKiB8IERheSBvZiB3ZWVrIGluIG1vbnRoICAgICAgICAgICB8XG4gICAqIHwgIGcqIHwgTW9kaWZpZWQgSnVsaWFuIGRheSAgICAgICAgICAgIHwgIEcgIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAgICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICAgKiB8ICBpISB8IElTTyBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgICB8ICBJISB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICB8XG4gICAqIHwgIGoqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHwgIEoqIHwgTG9jYWxpemVkIGhvdXIgdy9vIGRheSBwZXJpb2QgIHxcbiAgICogfCAgayAgfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgfCAgSyAgfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgfFxuICAgKiB8ICBsKiB8IChkZXByZWNhdGVkKSAgICAgICAgICAgICAgICAgICB8ICBMICB8IFN0YW5kLWFsb25lIG1vbnRoICAgICAgICAgICAgICB8XG4gICAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAgICogfCAgbiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTiAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICAgKiB8ICBvISB8IE9yZGluYWwgbnVtYmVyIG1vZGlmaWVyICAgICAgICB8ICBPICB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICB8XG4gICAqIHwgIHAhIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgIHwgIFAhIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgIHxcbiAgICogfCAgcSAgfCBTdGFuZC1hbG9uZSBxdWFydGVyICAgICAgICAgICAgfCAgUSAgfCBRdWFydGVyICAgICAgICAgICAgICAgICAgICAgICAgfFxuICAgKiB8ICByKiB8IFJlbGF0ZWQgR3JlZ29yaWFuIHllYXIgICAgICAgICB8ICBSISB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICB8XG4gICAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAgICogfCAgdCEgfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgfCAgVCEgfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgfFxuICAgKiB8ICB1ICB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICB8ICBVKiB8IEN5Y2xpYyB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gICAqIHwgIHYqIHwgVGltZXpvbmUgKGdlbmVyaWMgbm9uLWxvY2F0LikgIHwgIFYqIHwgVGltZXpvbmUgKGxvY2F0aW9uKSAgICAgICAgICAgIHxcbiAgICogfCAgdyAgfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgfCAgVyogfCBXZWVrIG9mIG1vbnRoICAgICAgICAgICAgICAgICAgfFxuICAgKiB8ICB4ICB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICB8ICBYICB8IFRpbWV6b25lIChJU08tODYwMSkgICAgICAgICAgICB8XG4gICAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgIHxcbiAgICogfCAgeiAgfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgfCAgWiogfCBUaW1lem9uZSAoYWxpYXNlcykgICAgICAgICAgICAgfFxuICAgKlxuICAgKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gICAqXG4gICAqIExldHRlcnMgbWFya2VkIGJ5ICEgYXJlIG5vbi1zdGFuZGFyZCwgYnV0IGltcGxlbWVudGVkIGJ5IGRhdGUtZm5zOlxuICAgKiAtIGBvYCBtb2RpZmllcyB0aGUgcHJldmlvdXMgdG9rZW4gdG8gdHVybiBpdCBpbnRvIGFuIG9yZGluYWwgKHNlZSBgZm9ybWF0YCBkb2NzKVxuICAgKiAtIGBpYCBpcyBJU08gZGF5IG9mIHdlZWsuIEZvciBgaWAgYW5kIGBpaWAgaXMgcmV0dXJucyBudW1lcmljIElTTyB3ZWVrIGRheXMsXG4gICAqICAgaS5lLiA3IGZvciBTdW5kYXksIDEgZm9yIE1vbmRheSwgZXRjLlxuICAgKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXG4gICAqIC0gYFJgIGlzIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLCBhcyBvcHBvc2VkIHRvIGBZYCB3aGljaCBpcyBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyLlxuICAgKiAgIGBSYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYElgIGFuZCBgaWBcbiAgICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXG4gICAqICAgYFlgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgd2AgYW5kIGBlYFxuICAgKiAgIGZvciB3ZWVrLW51bWJlcmluZyBkYXRlIHNwZWNpZmljIHRvIHRoZSBsb2NhbGUuXG4gICAqIC0gYFBgIGlzIGxvbmcgbG9jYWxpemVkIGRhdGUgZm9ybWF0XG4gICAqIC0gYHBgIGlzIGxvbmcgbG9jYWxpemVkIHRpbWUgZm9ybWF0XG4gICAqL1xuXG59O1xudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIEVyYVxuICBHOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGVyYSA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKSA+IDAgPyAxIDogMDtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEFELCBCQ1xuICAgICAgY2FzZSAnRyc6XG4gICAgICBjYXNlICdHRyc6XG4gICAgICBjYXNlICdHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQSwgQlxuXG4gICAgICBjYXNlICdHR0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3RcblxuICAgICAgY2FzZSAnR0dHRyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gJ3lvJykge1xuICAgICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICAgIHZhciB5ZWFyID0gc2lnbmVkWWVhciA+IDAgPyBzaWduZWRZZWFyIDogMSAtIHNpZ25lZFllYXI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih5ZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy55KGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhclxuICBZOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHNpZ25lZFdlZWtZZWFyID0gZ2V0VVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucyk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICB2YXIgd2Vla1llYXIgPSBzaWduZWRXZWVrWWVhciA+IDAgPyBzaWduZWRXZWVrWWVhciA6IDEgLSBzaWduZWRXZWVrWWVhcjsgLy8gVHdvIGRpZ2l0IHllYXJcblxuICAgIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgICAgdmFyIHR3b0RpZ2l0WWVhciA9IHdlZWtZZWFyICUgMTAwO1xuICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0d29EaWdpdFllYXIsIDIpO1xuICAgIH0gLy8gT3JkaW5hbCBudW1iZXJcblxuXG4gICAgaWYgKHRva2VuID09PSAnWW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrWWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH0gLy8gUGFkZGluZ1xuXG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICBSOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgaXNvV2Vla1llYXIgPSBnZXRVVENJU09XZWVrWWVhcihkYXRlKTsgLy8gUGFkZGluZ1xuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRXh0ZW5kZWQgeWVhci4gVGhpcyBpcyBhIHNpbmdsZSBudW1iZXIgZGVzaWduYXRpbmcgdGhlIHllYXIgb2YgdGhpcyBjYWxlbmRhciBzeXN0ZW0uXG4gIC8vIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBsb2NhbGl6ZXJzIGFyZSBCLkMuIHllYXJzOlxuICAvLyB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICAvLyB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICAvLyB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICAvLyB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICAvLyB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICAvLyBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gIC8vIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZC5cbiAgdTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh5ZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBRdWFydGVyXG4gIFE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ1EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcblxuICAgICAgY2FzZSAnUVEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG5cbiAgICAgIGNhc2UgJ1FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG5cbiAgICAgIGNhc2UgJ1FRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcblxuICAgICAgY2FzZSAnUVFRUVEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG5cbiAgICAgIGNhc2UgJ1FRUVEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgcXVhcnRlclxuICBxOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyAxLCAyLCAzLCA0XG4gICAgICBjYXNlICdxJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhxdWFydGVyKTtcbiAgICAgIC8vIDAxLCAwMiwgMDMsIDA0XG5cbiAgICAgIGNhc2UgJ3FxJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuXG4gICAgICBjYXNlICdxbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuXG4gICAgICBjYXNlICdxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMSwgMiwgMywgNCAobmFycm93IHF1YXJ0ZXI7IGNvdWxkIGJlIG5vdCBudW1lcmljYWwpXG5cbiAgICAgIGNhc2UgJ3FxcXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuXG4gICAgICBjYXNlICdxcXFxJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdNJzpcbiAgICAgIGNhc2UgJ01NJzpcbiAgICAgICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5NKGRhdGUsIHRva2VuKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcblxuICAgICAgY2FzZSAnTW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG5cbiAgICAgIGNhc2UgJ01NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuXG4gICAgICBjYXNlICdNTU1NTSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuXG4gICAgICBjYXNlICdNTU1NJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbW9udGhcbiAgTDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIC4uLiwgMTJcbiAgICAgIGNhc2UgJ0wnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKG1vbnRoICsgMSk7XG4gICAgICAvLyAwMSwgMDIsIC4uLiwgMTJcblxuICAgICAgY2FzZSAnTEwnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG5cbiAgICAgIGNhc2UgJ0xvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobW9udGggKyAxLCB7XG4gICAgICAgICAgdW5pdDogJ21vbnRoJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbiwgRmViLCAuLi4sIERlY1xuXG4gICAgICBjYXNlICdMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcblxuICAgICAgY2FzZSAnTExMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcblxuICAgICAgY2FzZSAnTExMTCc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIHdlZWsgb2YgeWVhclxuICB3OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIHdlZWsgPSBnZXRVVENXZWVrKGRhdGUsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHRva2VuID09PSAnd28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh3ZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2VlayBvZiB5ZWFyXG4gIEk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaXNvV2VlayA9IGdldFVUQ0lTT1dlZWsoZGF0ZSk7XG5cbiAgICBpZiAodG9rZW4gPT09ICdJbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb1dlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENEYXRlKCksIHtcbiAgICAgICAgdW5pdDogJ2RhdGUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmQoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBEYXkgb2YgeWVhclxuICBEOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mWWVhciA9IGdldFVUQ0RheU9mWWVhcihkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0RvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF5T2ZZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICdkYXlPZlllYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRheU9mWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHdlZWtcbiAgRTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlICdFJzpcbiAgICAgIGNhc2UgJ0VFJzpcbiAgICAgIGNhc2UgJ0VFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ0VFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdFRUVFJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCBkYXkgb2Ygd2Vla1xuICBlOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKE50aCBkYXkgb2Ygd2VlayB3aXRoIGN1cnJlbnQgbG9jYWxlIG9yIHdlZWtTdGFydHNPbilcbiAgICAgIGNhc2UgJ2UnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGxvY2FsRGF5T2ZXZWVrKTtcbiAgICAgIC8vIFBhZGRlZCBudW1lcmljYWwgdmFsdWVcblxuICAgICAgY2FzZSAnZWUnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuXG4gICAgICBjYXNlICdlbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2VlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2VlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdlZWVlJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBsb2NhbCBkYXkgb2Ygd2Vla1xuICBjOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKHNhbWUgYXMgaW4gYGVgKVxuICAgICAgY2FzZSAnYyc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuXG4gICAgICBjYXNlICdjYyc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCA3dGhcblxuICAgICAgY2FzZSAnY28nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihsb2NhbERheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdjY2NjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnY2NjYyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSVNPIGRheSBvZiB3ZWVrXG4gIGk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgaXNvRGF5T2ZXZWVrID0gZGF5T2ZXZWVrID09PSAwID8gNyA6IGRheU9mV2VlaztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDJcbiAgICAgIGNhc2UgJ2knOlxuICAgICAgICByZXR1cm4gU3RyaW5nKGlzb0RheU9mV2Vlayk7XG4gICAgICAvLyAwMlxuXG4gICAgICBjYXNlICdpaSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMm5kXG5cbiAgICAgIGNhc2UgJ2lvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVcblxuICAgICAgY2FzZSAnaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2lpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnaWlpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2lpaWknOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0sIFBNLCBtaWRuaWdodCwgbm9vblxuICBiOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICBpZiAoaG91cnMgPT09IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA9PT0gMCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5taWRuaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYic6XG4gICAgICBjYXNlICdiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdiYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICBjYXNlICdiYmJiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnYmJiYic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gaW4gdGhlIG1vcm5pbmcsIGluIHRoZSBhZnRlcm5vb24sIGluIHRoZSBldmVuaW5nLCBhdCBuaWdodFxuICBCOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIHZhciBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICBpZiAoaG91cnMgPj0gMTcpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uZXZlbmluZztcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmFmdGVybm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDQpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubW9ybmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5uaWdodDtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdCJzpcbiAgICAgIGNhc2UgJ0JCJzpcbiAgICAgIGNhc2UgJ0JCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdCQkJCQic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnQkJCQic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ2hvJykge1xuICAgICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpICUgMTI7XG4gICAgICBpZiAoaG91cnMgPT09IDApIGhvdXJzID0gMTI7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuaChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdIbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDSG91cnMoKSwge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuSChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMTFdXG4gIEs6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFsxLTI0XVxuICBrOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGhvdXJzID0gZGF0ZS5nZXRVVENIb3VycygpO1xuICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAyNDtcblxuICAgIGlmICh0b2tlbiA9PT0gJ2tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGhvdXJzLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaW51dGVcbiAgbTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ21vJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENNaW51dGVzKCksIHtcbiAgICAgICAgdW5pdDogJ21pbnV0ZSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMubShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnc28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ1NlY29uZHMoKSwge1xuICAgICAgICB1bml0OiAnc2Vjb25kJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5zKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuUyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBhbHdheXMgYCdaJ2ApXG4gIFg6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgaWYgKHRpbWV6b25lT2Zmc2V0ID09PSAwKSB7XG4gICAgICByZXR1cm4gJ1onO1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICdYJzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWGBcblxuICAgICAgY2FzZSAnWFhYWCc6XG4gICAgICBjYXNlICdYWCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgWFhYYFxuXG4gICAgICBjYXNlICdYWFhYWCc6XG4gICAgICBjYXNlICdYWFgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGAnKzAwOjAwJ2Agb3IgZXF1aXZhbGVudClcbiAgeDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAneCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHhgXG5cbiAgICAgIGNhc2UgJ3h4eHgnOlxuICAgICAgY2FzZSAneHgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGggYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYHh4eGBcblxuICAgICAgY2FzZSAneHh4eHgnOlxuICAgICAgY2FzZSAneHh4JzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChHTVQpXG4gIE86IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ08nOlxuICAgICAgY2FzZSAnT08nOlxuICAgICAgY2FzZSAnT09PJzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcblxuICAgICAgY2FzZSAnT09PTyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXRpb24pXG4gIHo6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lem9uZU9mZnNldCA9IG9yaWdpbmFsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ3onOlxuICAgICAgY2FzZSAnenonOlxuICAgICAgY2FzZSAnenp6JzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcblxuICAgICAgY2FzZSAnenp6eic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFNlY29uZHMgdGltZXN0YW1wXG4gIHQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBNYXRoLmZsb29yKG9yaWdpbmFsRGF0ZS5nZXRUaW1lKCkgLyAxMDAwKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICBUOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gb3JpZ2luYWxEYXRlLmdldFRpbWUoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVTaG9ydChvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgdmFyIGFic09mZnNldCA9IE1hdGguYWJzKG9mZnNldCk7XG4gIHZhciBob3VycyA9IE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApO1xuICB2YXIgbWludXRlcyA9IGFic09mZnNldCAlIDYwO1xuXG4gIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgcmV0dXJuIHNpZ24gKyBTdHJpbmcoaG91cnMpO1xuICB9XG5cbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICByZXR1cm4gc2lnbiArIFN0cmluZyhob3VycykgKyBkZWxpbWl0ZXIgKyBhZGRMZWFkaW5nWmVyb3MobWludXRlcywgMik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyhvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIGlmIChvZmZzZXQgJSA2MCA9PT0gMCkge1xuICAgIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJztcbiAgICByZXR1cm4gc2lnbiArIGFkZExlYWRpbmdaZXJvcyhNYXRoLmFicyhvZmZzZXQpIC8gNjAsIDIpO1xuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gYWRkTGVhZGluZ1plcm9zKE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApLCAyKTtcbiAgdmFyIG1pbnV0ZXMgPSBhZGRMZWFkaW5nWmVyb3MoYWJzT2Zmc2V0ICUgNjAsIDIpO1xuICByZXR1cm4gc2lnbiArIGhvdXJzICsgZGVsaW1pdGVyICsgbWludXRlcztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJpbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICovXG5cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBZZWFyXG4gIHk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIC8vIEZyb20gaHR0cDovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS0zMS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9Gb3JtYXRfdG9rZW5zXG4gICAgLy8gfCBZZWFyICAgICB8ICAgICB5IHwgeXkgfCAgIHl5eSB8ICB5eXl5IHwgeXl5eXkgfFxuICAgIC8vIHwtLS0tLS0tLS0tfC0tLS0tLS18LS0tLXwtLS0tLS0tfC0tLS0tLS18LS0tLS0tLXxcbiAgICAvLyB8IEFEIDEgICAgIHwgICAgIDEgfCAwMSB8ICAgMDAxIHwgIDAwMDEgfCAwMDAwMSB8XG4gICAgLy8gfCBBRCAxMiAgICB8ICAgIDEyIHwgMTIgfCAgIDAxMiB8ICAwMDEyIHwgMDAwMTIgfFxuICAgIC8vIHwgQUQgMTIzICAgfCAgIDEyMyB8IDIzIHwgICAxMjMgfCAgMDEyMyB8IDAwMTIzIHxcbiAgICAvLyB8IEFEIDEyMzQgIHwgIDEyMzQgfCAzNCB8ICAxMjM0IHwgIDEyMzQgfCAwMTIzNCB8XG4gICAgLy8gfCBBRCAxMjM0NSB8IDEyMzQ1IHwgNDUgfCAxMjM0NSB8IDEyMzQ1IHwgMTIzNDUgfFxuICAgIHZhciBzaWduZWRZZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpOyAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuXG4gICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRva2VuID09PSAneXknID8geWVhciAlIDEwMCA6IHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICByZXR1cm4gdG9rZW4gPT09ICdNJyA/IFN0cmluZyhtb250aCArIDEpIDogYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0RhdGUoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRhdGUuZ2V0VVRDSG91cnMoKSAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWU7XG5cbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZVswXTtcblxuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlID09PSAnYW0nID8gJ2EubS4nIDogJ3AubS4nO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMiB8fCAxMiwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ0hvdXJzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDTWludXRlcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldFVUQ1NlY29uZHMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRnJhY3Rpb24gb2Ygc2Vjb25kXG4gIFM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBudW1iZXJPZkRpZ2l0cyA9IHRva2VuLmxlbmd0aDtcbiAgICB2YXIgbWlsbGlzZWNvbmRzID0gZGF0ZS5nZXRVVENNaWxsaXNlY29uZHMoKTtcbiAgICB2YXIgZnJhY3Rpb25hbFNlY29uZHMgPSBNYXRoLmZsb29yKG1pbGxpc2Vjb25kcyAqIE1hdGgucG93KDEwLCBudW1iZXJPZkRpZ2l0cyAtIDMpKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGZyYWN0aW9uYWxTZWNvbmRzLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0dGVyczsiLCJmdW5jdGlvbiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICBzd2l0Y2ggKHBhdHRlcm4pIHtcbiAgICBjYXNlICdwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdwcHBwJzpcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRhdGVUaW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHZhciBtYXRjaFJlc3VsdCA9IHBhdHRlcm4ubWF0Y2goLyhQKykocCspPy8pO1xuICB2YXIgZGF0ZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsxXTtcbiAgdmFyIHRpbWVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMl07XG5cbiAgaWYgKCF0aW1lUGF0dGVybikge1xuICAgIHJldHVybiBkYXRlTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKTtcbiAgfVxuXG4gIHZhciBkYXRlVGltZUZvcm1hdDtcblxuICBzd2l0Y2ggKGRhdGVQYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ3Nob3J0J1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgJ1BQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnZnVsbCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gIH1cblxuICByZXR1cm4gZGF0ZVRpbWVGb3JtYXQucmVwbGFjZSgne3tkYXRlfX0nLCBkYXRlTG9uZ0Zvcm1hdHRlcihkYXRlUGF0dGVybiwgZm9ybWF0TG9uZykpLnJlcGxhY2UoJ3t7dGltZX19JywgdGltZUxvbmdGb3JtYXR0ZXIodGltZVBhdHRlcm4sIGZvcm1hdExvbmcpKTtcbn1cblxudmFyIGxvbmdGb3JtYXR0ZXJzID0ge1xuICBwOiB0aW1lTG9uZ0Zvcm1hdHRlcixcbiAgUDogZGF0ZVRpbWVMb25nRm9ybWF0dGVyXG59O1xuZXhwb3J0IGRlZmF1bHQgbG9uZ0Zvcm1hdHRlcnM7IiwiLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgdmFyIHV0Y0RhdGUgPSBuZXcgRGF0ZShEYXRlLlVUQyhkYXRlLmdldEZ1bGxZZWFyKCksIGRhdGUuZ2V0TW9udGgoKSwgZGF0ZS5nZXREYXRlKCksIGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCksIGRhdGUuZ2V0U2Vjb25kcygpLCBkYXRlLmdldE1pbGxpc2Vjb25kcygpKSk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIC0gdXRjRGF0ZS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fREFZID0gODY0MDAwMDA7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENEYXlPZlllYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgdGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIGRhdGUuc2V0VVRDTW9udGgoMCwgMSk7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mWWVhclRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICB2YXIgZGlmZmVyZW5jZSA9IHRpbWVzdGFtcCAtIHN0YXJ0T2ZZZWFyVGltZXN0YW1wO1xuICByZXR1cm4gTWF0aC5mbG9vcihkaWZmZXJlbmNlIC8gTUlMTElTRUNPTkRTX0lOX0RBWSkgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENJU09XZWVrKGRhdGUpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkYXRlKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDV2Vla1llYXIoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gIHZhciBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGUgJiYgbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlO1xuICB2YXIgZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gMSA6IHRvSW50ZWdlcihsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgOiB0b0ludGVnZXIob3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBmaXJzdFdlZWtPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZk5leHRZZWFyLCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrT2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZlRoaXNZZWFyLCBkaXJ0eU9wdGlvbnMpO1xuXG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDV2VlayhkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsInZhciBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMgPSBbJ0QnLCAnREQnXTtcbnZhciBwcm90ZWN0ZWRXZWVrWWVhclRva2VucyA9IFsnWVknLCAnWVlZWSddO1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZERheU9mWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWRXZWVrWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gdGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xuICBpZiAodG9rZW4gPT09ICdZWVlZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0QnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRgIGluc3RlYWQgb2YgYERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdERCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IGdldFVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgeWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSk7XG4gIHZhciBmb3VydGhPZkphbnVhcnkgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5LnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IDE7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZTtcbiAgdmFyIGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IDEgOiB0b0ludGVnZXIobG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlIDogdG9JbnRlZ2VyKG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgdmFyIHllYXIgPSBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWsgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vlay5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWssIGRpcnR5T3B0aW9ucyk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlO1xuICB2YXIgbG9jYWxlV2Vla1N0YXJ0c09uID0gbG9jYWxlICYmIGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLndlZWtTdGFydHNPbjtcbiAgdmFyIGRlZmF1bHRXZWVrU3RhcnRzT24gPSBsb2NhbGVXZWVrU3RhcnRzT24gPT0gbnVsbCA/IDAgOiB0b0ludGVnZXIobG9jYWxlV2Vla1N0YXJ0c09uKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IG9wdGlvbnMud2Vla1N0YXJ0c09uID09IG51bGwgPyBkZWZhdWx0V2Vla1N0YXJ0c09uIDogdG9JbnRlZ2VyKG9wdGlvbnMud2Vla1N0YXJ0c09uKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGF5ID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gNyA6IDApICsgZGF5IC0gd2Vla1N0YXJ0c09uO1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgLSBkaWZmKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGRNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCA3NTAgbWlsbGlzZWNvbmRzIHRvIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBhZGRNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NTozMC43NTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHRpbWVzdGFtcCA9IHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyBhbW91bnQpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgY29tcGFyZUFzY1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAtMSwgMCBvciAxLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kLFxuICogLTEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQgb3IgMCBpZiBkYXRlcyBhcmUgZXF1YWwuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNvbXBhcmVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjb21wYXJlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgcmVzdWx0IG9mIHRoZSBjb21wYXJpc29uXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbXBhcmUgMTEgRmVicnVhcnkgMTk4NyBhbmQgMTAgSnVseSAxOTg5OlxuICogY29uc3QgcmVzdWx0ID0gY29tcGFyZUFzYyhuZXcgRGF0ZSgxOTg3LCAxLCAxMSksIG5ldyBEYXRlKDE5ODksIDYsIDEwKSlcbiAqIC8vPT4gLTFcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU29ydCB0aGUgYXJyYXkgb2YgZGF0ZXM6XG4gKiBjb25zdCByZXN1bHQgPSBbXG4gKiAgIG5ldyBEYXRlKDE5OTUsIDYsIDIpLFxuICogICBuZXcgRGF0ZSgxOTg3LCAxLCAxMSksXG4gKiAgIG5ldyBEYXRlKDE5ODksIDYsIDEwKVxuICogXS5zb3J0KGNvbXBhcmVBc2MpXG4gKiAvLz0+IFtcbiAqIC8vICAgV2VkIEZlYiAxMSAxOTg3IDAwOjAwOjAwLFxuICogLy8gICBNb24gSnVsIDEwIDE5ODkgMDA6MDA6MDAsXG4gKiAvLyAgIFN1biBKdWwgMDIgMTk5NSAwMDowMDowMFxuICogLy8gXVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbXBhcmVBc2MoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciBkaWZmID0gZGF0ZUxlZnQuZ2V0VGltZSgpIC0gZGF0ZVJpZ2h0LmdldFRpbWUoKTtcblxuICBpZiAoZGlmZiA8IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICByZXR1cm4gMTsgLy8gUmV0dXJuIDAgaWYgZGlmZiBpcyAwOyByZXR1cm4gTmFOIGlmIGRpZmYgaXMgTmFOXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRpZmY7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgbW9udGhzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgbW9udGhzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBjYWxlbmRhciBtb250aHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgbW9udGhzIGFyZSBiZXR3ZWVuIDMxIEphbnVhcnkgMjAxNCBhbmQgMSBTZXB0ZW1iZXIgMjAxND9cbiAqIHZhciByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyhcbiAqICAgbmV3IERhdGUoMjAxNCwgOCwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDAsIDMxKVxuICogKVxuICogLy89PiA4XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciB5ZWFyRGlmZiA9IGRhdGVMZWZ0LmdldEZ1bGxZZWFyKCkgLSBkYXRlUmlnaHQuZ2V0RnVsbFllYXIoKTtcbiAgdmFyIG1vbnRoRGlmZiA9IGRhdGVMZWZ0LmdldE1vbnRoKCkgLSBkYXRlUmlnaHQuZ2V0TW9udGgoKTtcbiAgcmV0dXJuIHllYXJEaWZmICogMTIgKyBtb250aERpZmY7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBtaWxsaXNlY29uZHMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDE0IDEyOjMwOjIwLjYwMCBhbmQgMiBKdWx5IDIwMTQgMTI6MzA6MjEuNzAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDIxLCA3MDApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDIwLCA2MDApXG4gKiApXG4gKiAvLz0+IDExMDBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHJldHVybiBkYXRlTGVmdC5nZXRUaW1lKCkgLSBkYXRlUmlnaHQuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocy9pbmRleC5qc1wiO1xuaW1wb3J0IGNvbXBhcmVBc2MgZnJvbSBcIi4uL2NvbXBhcmVBc2MvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgaXNMYXN0RGF5T2ZNb250aCBmcm9tIFwiLi4vaXNMYXN0RGF5T2ZNb250aC9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5Nb250aHNcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBmdWxsIG1vbnRocyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGZ1bGwgbW9udGhzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBmdWxsIG1vbnRoc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBmdWxsIG1vbnRocyBhcmUgYmV0d2VlbiAzMSBKYW51YXJ5IDIwMTQgYW5kIDEgU2VwdGVtYmVyIDIwMTQ/XG4gKiB2YXIgcmVzdWx0ID0gZGlmZmVyZW5jZUluTW9udGhzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCBuZXcgRGF0ZSgyMDE0LCAwLCAzMSkpXG4gKiAvLz0+IDdcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5Nb250aHMoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGVSaWdodCk7XG4gIHZhciBzaWduID0gY29tcGFyZUFzYyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KTtcbiAgdmFyIGRpZmZlcmVuY2UgPSBNYXRoLmFicyhkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSk7XG4gIHZhciByZXN1bHQ7IC8vIENoZWNrIGZvciB0aGUgZGlmZmVyZW5jZSBvZiBsZXNzIHRoYW4gbW9udGhcblxuICBpZiAoZGlmZmVyZW5jZSA8IDEpIHtcbiAgICByZXN1bHQgPSAwO1xuICB9IGVsc2Uge1xuICAgIGlmIChkYXRlTGVmdC5nZXRNb250aCgpID09PSAxICYmIGRhdGVMZWZ0LmdldERhdGUoKSA+IDI3KSB7XG4gICAgICAvLyBUaGlzIHdpbGwgY2hlY2sgaWYgdGhlIGRhdGUgaXMgZW5kIG9mIEZlYiBhbmQgYXNzaWduIGEgaGlnaGVyIGVuZCBvZiBtb250aCBkYXRlXG4gICAgICAvLyB0byBjb21wYXJlIGl0IHdpdGggSmFuXG4gICAgICBkYXRlTGVmdC5zZXREYXRlKDMwKTtcbiAgICB9XG5cbiAgICBkYXRlTGVmdC5zZXRNb250aChkYXRlTGVmdC5nZXRNb250aCgpIC0gc2lnbiAqIGRpZmZlcmVuY2UpOyAvLyBNYXRoLmFicyhkaWZmIGluIGZ1bGwgbW9udGhzIC0gZGlmZiBpbiBjYWxlbmRhciBtb250aHMpID09PSAxIGlmIGxhc3QgY2FsZW5kYXIgbW9udGggaXMgbm90IGZ1bGxcbiAgICAvLyBJZiBzbywgcmVzdWx0IG11c3QgYmUgZGVjcmVhc2VkIGJ5IDEgaW4gYWJzb2x1dGUgdmFsdWVcblxuICAgIHZhciBpc0xhc3RNb250aE5vdEZ1bGwgPSBjb21wYXJlQXNjKGRhdGVMZWZ0LCBkYXRlUmlnaHQpID09PSAtc2lnbjsgLy8gQ2hlY2sgZm9yIGNhc2VzIG9mIG9uZSBmdWxsIGNhbGVuZGFyIG1vbnRoXG5cbiAgICBpZiAoaXNMYXN0RGF5T2ZNb250aCh0b0RhdGUoZGlydHlEYXRlTGVmdCkpICYmIGRpZmZlcmVuY2UgPT09IDEgJiYgY29tcGFyZUFzYyhkaXJ0eURhdGVMZWZ0LCBkYXRlUmlnaHQpID09PSAxKSB7XG4gICAgICBpc0xhc3RNb250aE5vdEZ1bGwgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXN1bHQgPSBzaWduICogKGRpZmZlcmVuY2UgLSBOdW1iZXIoaXNMYXN0TW9udGhOb3RGdWxsKSk7XG4gIH0gLy8gUHJldmVudCBuZWdhdGl2ZSB6ZXJvXG5cblxuICByZXR1cm4gcmVzdWx0ID09PSAwID8gMCA6IHJlc3VsdDtcbn0iLCJpbXBvcnQgZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJblNlY29uZHNcbiAqIEBjYXRlZ29yeSBTZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2Ygc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIHNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIHNlY29uZHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgc2Vjb25kcyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTQgMTI6MzA6MDcuOTk5IGFuZCAyIEp1bHkgMjAxNCAxMjozMDoyMC4wMDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5TZWNvbmRzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDIwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCA3LCA5OTkpXG4gKiApXG4gKiAvLz0+IDEyXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlmZmVyZW5jZUluU2Vjb25kcyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRpZmYgPSBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIC8gMTAwMDtcbiAgcmV0dXJuIGRpZmYgPiAwID8gTWF0aC5mbG9vcihkaWZmKSA6IE1hdGguY2VpbChkaWZmKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGVuZE9mRGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZW5kIG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZW5kIG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgZW5kIG9mIGEgZGF5XG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIGVuZCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGVuZE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAyMzo1OTo1OS45OTlcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbmRPZkRheShkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIGRhdGUuc2V0SG91cnMoMjMsIDU5LCA1OSwgOTk5KTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBlbmRPZk1vbnRoXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBlbmQgb2YgYSBtb250aCBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGVuZCBvZiBhIG1vbnRoIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgZW5kIG9mIGEgbW9udGhcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgZW5kIG9mIGEgbW9udGggZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBlbmRPZk1vbnRoKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMzAgMjAxNCAyMzo1OTo1OS45OTlcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlbmRPZk1vbnRoKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIG1vbnRoID0gZGF0ZS5nZXRNb250aCgpO1xuICBkYXRlLnNldEZ1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSwgbW9udGggKyAxLCAwKTtcbiAgZGF0ZS5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgY29tcGFyZUFzYyBmcm9tIFwiLi4vY29tcGFyZUFzYy9pbmRleC5qc1wiO1xuaW1wb3J0IGRpZmZlcmVuY2VJbk1vbnRocyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluTW9udGhzL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluU2Vjb25kcyBmcm9tIFwiLi4vZGlmZmVyZW5jZUluU2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uL2xvY2FsZS9lbi1VUy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgY2xvbmVPYmplY3QgZnJvbSBcIi4uL19saWIvY2xvbmVPYmplY3QvaW5kZXguanNcIjtcbmltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlOVVRFU19JTl9EQVkgPSAxNDQwO1xudmFyIE1JTlVURVNfSU5fQUxNT1NUX1RXT19EQVlTID0gMjUyMDtcbnZhciBNSU5VVEVTX0lOX01PTlRIID0gNDMyMDA7XG52YXIgTUlOVVRFU19JTl9UV09fTU9OVEhTID0gODY0MDA7XG4vKipcbiAqIEBuYW1lIGZvcm1hdERpc3RhbmNlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMgaW4gd29yZHMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzIGluIHdvcmRzLlxuICpcbiAqIHwgRGlzdGFuY2UgYmV0d2VlbiBkYXRlcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSZXN1bHQgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgMCAuLi4gMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBsZXNzIHRoYW4gYSBtaW51dGUgIHxcbiAqIHwgMzAgc2VjcyAuLi4gMSBtaW4gMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAxIG1pbnV0ZSAgICAgICAgICAgIHxcbiAqIHwgMSBtaW4gMzAgc2VjcyAuLi4gNDQgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBbMi4uNDRdIG1pbnV0ZXMgICAgIHxcbiAqIHwgNDQgbWlucyAuLi4gMzAgc2VjcyAuLi4gODkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCAxIGhvdXIgICAgICAgIHxcbiAqIHwgODkgbWlucyAzMCBzZWNzIC4uLiAyMyBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCBbMi4uMjRdIGhvdXJzIHxcbiAqIHwgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNDEgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgfCAxIGRheSAgICAgICAgICAgICAgIHxcbiAqIHwgNDEgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gMjkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgfCBbMi4uMzBdIGRheXMgICAgICAgIHxcbiAqIHwgMjkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA0NCBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgfCBhYm91dCAxIG1vbnRoICAgICAgIHxcbiAqIHwgNDQgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA1OSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgfCBhYm91dCAyIG1vbnRocyAgICAgIHxcbiAqIHwgNTkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiAxIHlyICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBbMi4uMTJdIG1vbnRocyAgICAgIHxcbiAqIHwgMSB5ciAuLi4gMSB5ciAzIG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCAxIHllYXIgICAgICAgIHxcbiAqIHwgMSB5ciAzIG1vbnRocyAuLi4gMSB5ciA5IG1vbnRoIHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBvdmVyIDEgeWVhciAgICAgICAgIHxcbiAqIHwgMSB5ciA5IG1vbnRocyAuLi4gMiB5cnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhbG1vc3QgMiB5ZWFycyAgICAgIHxcbiAqIHwgTiB5cnMgLi4uIE4geXJzIDMgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYm91dCBOIHllYXJzICAgICAgIHxcbiAqIHwgTiB5cnMgMyBtb250aHMgLi4uIE4geXJzIDkgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBvdmVyIE4geWVhcnMgICAgICAgIHxcbiAqIHwgTiB5cnMgOSBtb250aHMgLi4uIE4rMSB5cnMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhbG1vc3QgTisxIHllYXJzICAgIHxcbiAqXG4gKiBXaXRoIGBvcHRpb25zLmluY2x1ZGVTZWNvbmRzID09IHRydWVgOlxuICogfCBEaXN0YW5jZSBiZXR3ZWVuIGRhdGVzIHwgUmVzdWx0ICAgICAgICAgICAgICAgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAwIHNlY3MgLi4uIDUgc2VjcyAgICAgIHwgbGVzcyB0aGFuIDUgc2Vjb25kcyAgfFxuICogfCA1IHNlY3MgLi4uIDEwIHNlY3MgICAgIHwgbGVzcyB0aGFuIDEwIHNlY29uZHMgfFxuICogfCAxMCBzZWNzIC4uLiAyMCBzZWNzICAgIHwgbGVzcyB0aGFuIDIwIHNlY29uZHMgfFxuICogfCAyMCBzZWNzIC4uLiA0MCBzZWNzICAgIHwgaGFsZiBhIG1pbnV0ZSAgICAgICAgfFxuICogfCA0MCBzZWNzIC4uLiA2MCBzZWNzICAgIHwgbGVzcyB0aGFuIGEgbWludXRlICAgfFxuICogfCA2MCBzZWNzIC4uLiA5MCBzZWNzICAgIHwgMSBtaW51dGUgICAgICAgICAgICAgfFxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogLSBUaGUgZnVuY3Rpb24gd2FzIHJlbmFtZWQgZnJvbSBgZGlzdGFuY2VJbldvcmRzIGAgdG8gYGZvcm1hdERpc3RhbmNlYFxuICogICB0byBtYWtlIGl0cyBuYW1lIGNvbnNpc3RlbnQgd2l0aCBgZm9ybWF0YCBhbmQgYGZvcm1hdFJlbGF0aXZlYC5cbiAqXG4gKiAtIFRoZSBvcmRlciBvZiBhcmd1bWVudHMgaXMgc3dhcHBlZCB0byBtYWtlIHRoZSBmdW5jdGlvblxuICogICBjb25zaXN0ZW50IHdpdGggYGRpZmZlcmVuY2VJbi4uLmAgZnVuY3Rpb25zLlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICAvLyBCZWZvcmUgdjIuMC4wXG4gKlxuICogICBkaXN0YW5jZUluV29yZHMoXG4gKiAgICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTAsIDMyLCAwKSxcbiAqICAgICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMSwgMzIsIDApLFxuICogICAgIHsgYWRkU3VmZml4OiB0cnVlIH1cbiAqICAgKSAvLz0+ICdpbiBhYm91dCAxIGhvdXInXG4gKlxuICogICAvLyB2Mi4wLjAgb253YXJkXG4gKlxuICogICBmb3JtYXREaXN0YW5jZShcbiAqICAgICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMSwgMzIsIDApLFxuICogICAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDEwLCAzMiwgMCksXG4gKiAgICAgeyBhZGRTdWZmaXg6IHRydWUgfVxuICogICApIC8vPT4gJ2luIGFib3V0IDEgaG91cidcbiAqICAgYGBgXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBiYXNlRGF0ZSAtIHRoZSBkYXRlIHRvIGNvbXBhcmUgd2l0aFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmluY2x1ZGVTZWNvbmRzPWZhbHNlXSAtIGRpc3RhbmNlcyBsZXNzIHRoYW4gYSBtaW51dGUgYXJlIG1vcmUgZGV0YWlsZWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuYWRkU3VmZml4PWZhbHNlXSAtIHJlc3VsdCBpbmRpY2F0ZXMgaWYgdGhlIHNlY29uZCBkYXRlIGlzIGVhcmxpZXIgb3IgbGF0ZXIgdGhhbiB0aGUgZmlyc3RcbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGRpc3RhbmNlIGluIHdvcmRzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgZGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgYmFzZURhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdERpc3RhbmNlYCBwcm9wZXJ0eVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDIgSnVseSAyMDE0IGFuZCAxIEphbnVhcnkgMjAxNT9cbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlKG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSlcbiAqIC8vPT4gJzYgbW9udGhzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDEgSmFudWFyeSAyMDE1IDAwOjAwOjE1XG4gKiAvLyBhbmQgMSBKYW51YXJ5IDIwMTUgMDA6MDA6MDAsIGluY2x1ZGluZyBzZWNvbmRzP1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2UoXG4gKiAgIG5ldyBEYXRlKDIwMTUsIDAsIDEsIDAsIDAsIDE1KSxcbiAqICAgbmV3IERhdGUoMjAxNSwgMCwgMSwgMCwgMCwgMCksXG4gKiAgIHsgaW5jbHVkZVNlY29uZHM6IHRydWUgfVxuICogKVxuICogLy89PiAnbGVzcyB0aGFuIDIwIHNlY29uZHMnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGZyb20gMSBKYW51YXJ5IDIwMTZcbiAqIC8vIHRvIDEgSmFudWFyeSAyMDE1LCB3aXRoIGEgc3VmZml4P1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2UobmV3IERhdGUoMjAxNSwgMCwgMSksIG5ldyBEYXRlKDIwMTYsIDAsIDEpLCB7XG4gKiAgIGFkZFN1ZmZpeDogdHJ1ZVxuICogfSlcbiAqIC8vPT4gJ2Fib3V0IDEgeWVhciBhZ28nXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMSBBdWd1c3QgMjAxNiBhbmQgMSBKYW51YXJ5IDIwMTUgaW4gRXNwZXJhbnRvP1xuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZShuZXcgRGF0ZSgyMDE2LCA3LCAxKSwgbmV3IERhdGUoMjAxNSwgMCwgMSksIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJ3BsaSBvbCAxIGphcm8nXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UoZGlydHlEYXRlLCBkaXJ0eUJhc2VEYXRlKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDIgJiYgYXJndW1lbnRzWzJdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMl0gOiB7fTtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSB8fCBkZWZhdWx0TG9jYWxlO1xuXG4gIGlmICghbG9jYWxlLmZvcm1hdERpc3RhbmNlKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gZm9ybWF0RGlzdGFuY2UgcHJvcGVydHknKTtcbiAgfVxuXG4gIHZhciBjb21wYXJpc29uID0gY29tcGFyZUFzYyhkaXJ0eURhdGUsIGRpcnR5QmFzZURhdGUpO1xuXG4gIGlmIChpc05hTihjb21wYXJpc29uKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgfVxuXG4gIHZhciBsb2NhbGl6ZU9wdGlvbnMgPSBjbG9uZU9iamVjdChvcHRpb25zKTtcbiAgbG9jYWxpemVPcHRpb25zLmFkZFN1ZmZpeCA9IEJvb2xlYW4ob3B0aW9ucy5hZGRTdWZmaXgpO1xuICBsb2NhbGl6ZU9wdGlvbnMuY29tcGFyaXNvbiA9IGNvbXBhcmlzb247XG4gIHZhciBkYXRlTGVmdDtcbiAgdmFyIGRhdGVSaWdodDtcblxuICBpZiAoY29tcGFyaXNvbiA+IDApIHtcbiAgICBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eUJhc2VEYXRlKTtcbiAgICBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgfSBlbHNlIHtcbiAgICBkYXRlTGVmdCA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICAgIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eUJhc2VEYXRlKTtcbiAgfVxuXG4gIHZhciBzZWNvbmRzID0gZGlmZmVyZW5jZUluU2Vjb25kcyhkYXRlUmlnaHQsIGRhdGVMZWZ0KTtcbiAgdmFyIG9mZnNldEluU2Vjb25kcyA9IChnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGVSaWdodCkgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGVMZWZ0KSkgLyAxMDAwO1xuICB2YXIgbWludXRlcyA9IE1hdGgucm91bmQoKHNlY29uZHMgLSBvZmZzZXRJblNlY29uZHMpIC8gNjApO1xuICB2YXIgbW9udGhzOyAvLyAwIHVwIHRvIDIgbWluc1xuXG4gIGlmIChtaW51dGVzIDwgMikge1xuICAgIGlmIChvcHRpb25zLmluY2x1ZGVTZWNvbmRzKSB7XG4gICAgICBpZiAoc2Vjb25kcyA8IDUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YU2Vjb25kcycsIDUsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHNlY29uZHMgPCAxMCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdsZXNzVGhhblhTZWNvbmRzJywgMTAsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHNlY29uZHMgPCAyMCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdsZXNzVGhhblhTZWNvbmRzJywgMjAsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHNlY29uZHMgPCA0MCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdoYWxmQU1pbnV0ZScsIG51bGwsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2UgaWYgKHNlY29uZHMgPCA2MCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdsZXNzVGhhblhNaW51dGVzJywgMSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hNaW51dGVzJywgMSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKG1pbnV0ZXMgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnbGVzc1RoYW5YTWludXRlcycsIDEsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4TWludXRlcycsIG1pbnV0ZXMsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgICB9XG4gICAgfSAvLyAyIG1pbnMgdXAgdG8gMC43NSBocnNcblxuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCA0NSkge1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hNaW51dGVzJywgbWludXRlcywgbG9jYWxpemVPcHRpb25zKTsgLy8gMC43NSBocnMgdXAgdG8gMS41IGhyc1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCA5MCkge1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2Fib3V0WEhvdXJzJywgMSwgbG9jYWxpemVPcHRpb25zKTsgLy8gMS41IGhycyB1cCB0byAyNCBocnNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgTUlOVVRFU19JTl9EQVkpIHtcbiAgICB2YXIgaG91cnMgPSBNYXRoLnJvdW5kKG1pbnV0ZXMgLyA2MCk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnYWJvdXRYSG91cnMnLCBob3VycywgbG9jYWxpemVPcHRpb25zKTsgLy8gMSBkYXkgdXAgdG8gMS43NSBkYXlzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IE1JTlVURVNfSU5fQUxNT1NUX1RXT19EQVlTKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneERheXMnLCAxLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAxLjc1IGRheXMgdXAgdG8gMzAgZGF5c1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBNSU5VVEVTX0lOX01PTlRIKSB7XG4gICAgdmFyIGRheXMgPSBNYXRoLnJvdW5kKG1pbnV0ZXMgLyBNSU5VVEVTX0lOX0RBWSk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneERheXMnLCBkYXlzLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAxIG1vbnRoIHVwIHRvIDIgbW9udGhzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IE1JTlVURVNfSU5fVFdPX01PTlRIUykge1xuICAgIG1vbnRocyA9IE1hdGgucm91bmQobWludXRlcyAvIE1JTlVURVNfSU5fTU9OVEgpO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2Fib3V0WE1vbnRocycsIG1vbnRocywgbG9jYWxpemVPcHRpb25zKTtcbiAgfVxuXG4gIG1vbnRocyA9IGRpZmZlcmVuY2VJbk1vbnRocyhkYXRlUmlnaHQsIGRhdGVMZWZ0KTsgLy8gMiBtb250aHMgdXAgdG8gMTIgbW9udGhzXG5cbiAgaWYgKG1vbnRocyA8IDEyKSB7XG4gICAgdmFyIG5lYXJlc3RNb250aCA9IE1hdGgucm91bmQobWludXRlcyAvIE1JTlVURVNfSU5fTU9OVEgpO1xuICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hNb250aHMnLCBuZWFyZXN0TW9udGgsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEgeWVhciB1cCB0byBtYXggRGF0ZVxuICB9IGVsc2Uge1xuICAgIHZhciBtb250aHNTaW5jZVN0YXJ0T2ZZZWFyID0gbW9udGhzICUgMTI7XG4gICAgdmFyIHllYXJzID0gTWF0aC5mbG9vcihtb250aHMgLyAxMik7IC8vIE4geWVhcnMgdXAgdG8gMSB5ZWFycyAzIG1vbnRoc1xuXG4gICAgaWYgKG1vbnRoc1NpbmNlU3RhcnRPZlllYXIgPCAzKSB7XG4gICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhYm91dFhZZWFycycsIHllYXJzLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyBOIHllYXJzIDMgbW9udGhzIHVwIHRvIE4geWVhcnMgOSBtb250aHNcbiAgICB9IGVsc2UgaWYgKG1vbnRoc1NpbmNlU3RhcnRPZlllYXIgPCA5KSB7XG4gICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdvdmVyWFllYXJzJywgeWVhcnMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIE4geWVhcnMgOSBtb250aHMgdXAgdG8gTiB5ZWFyIDEyIG1vbnRoc1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhbG1vc3RYWWVhcnMnLCB5ZWFycyArIDEsIGxvY2FsaXplT3B0aW9ucyk7XG4gICAgfVxuICB9XG59IiwiaW1wb3J0IGlzVmFsaWQgZnJvbSBcIi4uL2lzVmFsaWQvaW5kZXguanNcIjtcbmltcG9ydCBkZWZhdWx0TG9jYWxlIGZyb20gXCIuLi9sb2NhbGUvZW4tVVMvaW5kZXguanNcIjtcbmltcG9ydCBzdWJNaWxsaXNlY29uZHMgZnJvbSBcIi4uL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGxvbmdGb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9sb25nRm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHsgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbiwgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuLCB0aHJvd1Byb3RlY3RlZEVycm9yIH0gZnJvbSBcIi4uL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBSZWdFeHAgY29uc2lzdHMgb2YgdGhyZWUgcGFydHMgc2VwYXJhdGVkIGJ5IGB8YDpcbi8vIC0gW3lZUXFNTHdJZERlY2loSEtrbXNdbyBtYXRjaGVzIGFueSBhdmFpbGFibGUgb3JkaW5hbCBudW1iZXIgdG9rZW5cbi8vICAgKG9uZSBvZiB0aGUgY2VydGFpbiBsZXR0ZXJzIGZvbGxvd2VkIGJ5IGBvYClcbi8vIC0gKFxcdylcXDEqIG1hdGNoZXMgYW55IHNlcXVlbmNlcyBvZiB0aGUgc2FtZSBsZXR0ZXJcbi8vIC0gJycgbWF0Y2hlcyB0d28gcXVvdGUgY2hhcmFjdGVycyBpbiBhIHJvd1xuLy8gLSAnKCcnfFteJ10pKygnfCQpIG1hdGNoZXMgYW55dGhpbmcgc3Vycm91bmRlZCBieSB0d28gcXVvdGUgY2hhcmFjdGVycyAoJyksXG4vLyAgIGV4Y2VwdCBhIHNpbmdsZSBxdW90ZSBzeW1ib2wsIHdoaWNoIGVuZHMgdGhlIHNlcXVlbmNlLlxuLy8gICBUd28gcXVvdGUgY2hhcmFjdGVycyBkbyBub3QgZW5kIHRoZSBzZXF1ZW5jZS5cbi8vICAgSWYgdGhlcmUgaXMgbm8gbWF0Y2hpbmcgc2luZ2xlIHF1b3RlXG4vLyAgIHRoZW4gdGhlIHNlcXVlbmNlIHdpbGwgY29udGludWUgdW50aWwgdGhlIGVuZCBvZiB0aGUgc3RyaW5nLlxuLy8gLSAuIG1hdGNoZXMgYW55IHNpbmdsZSBjaGFyYWN0ZXIgdW5tYXRjaGVkIGJ5IHByZXZpb3VzIHBhcnRzIG9mIHRoZSBSZWdFeHBzXG5cbnZhciBmb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1t5WVFxTUx3SWREZWNpaEhLa21zXW98KFxcdylcXDEqfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nOyAvLyBUaGlzIFJlZ0V4cCBjYXRjaGVzIHN5bWJvbHMgZXNjYXBlZCBieSBxdW90ZXMsIGFuZCBhbHNvXG4vLyBzZXF1ZW5jZXMgb2Ygc3ltYm9scyBQLCBwLCBhbmQgdGhlIGNvbWJpbmF0aW9ucyBsaWtlIGBQUFBQUFBQcHBwcHBgXG5cbnZhciBsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9QK3ArfFArfHArfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xudmFyIGVzY2FwZWRTdHJpbmdSZWdFeHAgPSAvXicoW15dKj8pJz8kLztcbnZhciBkb3VibGVRdW90ZVJlZ0V4cCA9IC8nJy9nO1xudmFyIHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwID0gL1thLXpBLVpdLztcbi8qKlxuICogQG5hbWUgZm9ybWF0XG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEZvcm1hdCB0aGUgZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZm9ybWF0dGVkIGRhdGUgc3RyaW5nIGluIHRoZSBnaXZlbiBmb3JtYXQuIFRoZSByZXN1bHQgbWF5IHZhcnkgYnkgbG9jYWxlLlxuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhlIGBmb3JtYXRgIHRva2VucyBkaWZmZXIgZnJvbSBNb21lbnQuanMgYW5kIG90aGVyIGxpYnJhcmllcy5cbiAqID4gU2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICpcbiAqIFRoZSBjaGFyYWN0ZXJzIHdyYXBwZWQgYmV0d2VlbiB0d28gc2luZ2xlIHF1b3RlcyBjaGFyYWN0ZXJzICgnKSBhcmUgZXNjYXBlZC5cbiAqIFR3byBzaW5nbGUgcXVvdGVzIGluIGEgcm93LCB3aGV0aGVyIGluc2lkZSBvciBvdXRzaWRlIGEgcXVvdGVkIHNlcXVlbmNlLCByZXByZXNlbnQgYSAncmVhbCcgc2luZ2xlIHF1b3RlLlxuICogKHNlZSB0aGUgbGFzdCBleGFtcGxlKVxuICpcbiAqIEZvcm1hdCBvZiB0aGUgc3RyaW5nIGlzIGJhc2VkIG9uIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqIGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGVcbiAqIHdpdGggYSBmZXcgYWRkaXRpb25zIChzZWUgbm90ZSA3IGJlbG93IHRoZSB0YWJsZSkuXG4gKlxuICogQWNjZXB0ZWQgcGF0dGVybnM6XG4gKiB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQYXR0ZXJuIHwgUmVzdWx0IGV4YW1wbGVzICAgICAgICAgICAgICAgICAgIHwgTm90ZXMgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLXxcbiAqIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEcuLkdHRyAgfCBBRCwgQkMgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHICAgIHwgQW5ubyBEb21pbmksIEJlZm9yZSBDaHJpc3QgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHR0cgICB8IEEsIEIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQ2FsZW5kYXIgeWVhciAgICAgICAgICAgICAgICAgICB8IHkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5byAgICAgIHwgNDR0aCwgMXN0LCAwdGgsIDE3dGggICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5ICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eXkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICB8IFkgICAgICAgfCA0NCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZbyAgICAgIHwgNDR0aCwgMXN0LCAxOTAwdGgsIDIwMTd0aCAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVkgICAgICB8IDQ0LCAwMSwgMDAsIDE3ICAgICAgICAgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWSAgICAgfCAwNDQsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZICAgIHwgMDA0NCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWVkgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgICB8IFIgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUiAgICAgIHwgLTQzLCAwMCwgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSICAgICB8IC0wNDMsIDAwMCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlIgICAgfCAtMDA0MywgMDAwMCwgMDAwMSwgMTkwMCwgMjAxNyAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSUiAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1LDcgfFxuICogfCBFeHRlbmRlZCB5ZWFyICAgICAgICAgICAgICAgICAgIHwgdSAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1ICAgICAgfCAtNDMsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXUgICAgIHwgLTA0MywgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dSAgICB8IC0wMDQzLCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXV1ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IFF1YXJ0ZXIgKGZvcm1hdHRpbmcpICAgICAgICAgICAgfCBRICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVFRICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IFF1YXJ0ZXIgKHN0YW5kLWFsb25lKSAgICAgICAgICAgfCBxICAgICAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcW8gICAgICB8IDFzdCwgMm5kLCAzcmQsIDR0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxICAgICAgfCAwMSwgMDIsIDAzLCAwNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXEgICAgIHwgUTEsIFEyLCBRMywgUTQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcSAgICB8IDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXFxICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCA0ICAgICB8XG4gKiB8IE1vbnRoIChmb3JtYXR0aW5nKSAgICAgICAgICAgICAgfCBNICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU0gICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTSAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU1NICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1vbnRoIChzdGFuZC1hbG9uZSkgICAgICAgICAgICAgfCBMICAgICAgIHwgMSwgMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDEydGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMICAgICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTEwgICAgIHwgSmFuLCBGZWIsIC4uLiwgRGVjICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTCAgICB8IEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTExMICAgfCBKLCBGLCAuLi4sIEQgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgfCB3ICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHd3ICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICAgfCBJICAgICAgIHwgMSwgMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDUzdGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElJICAgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICAgfCBkICAgICAgIHwgMSwgMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDMxc3QgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRkICAgICAgfCAwMSwgMDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICAgfCBEICAgICAgIHwgMSwgMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDM2NXRoLCAzNjZ0aCAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREICAgICAgfCAwMSwgMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREQgICAgIHwgMDAxLCAwMDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRERERCAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgRGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgICAgICB8IEUuLkVFRSAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFRSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFN1LCBTYSAgICAgICAgfCAgICAgICB8XG4gKiB8IElTTyBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgfCBpICAgICAgIHwgMSwgMiwgMywgLi4uLCA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaW8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDd0aCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpICAgICAgfCAwMSwgMDIsIC4uLiwgMDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWkgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaWkgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTdSwgU2EgICAgICAgIHwgNyAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgIHwgZSAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZSAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWVlICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU3UsIFNhICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKHN0YW5kLWFsb25lKSB8IGMgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2MgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjYyAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2MgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjYyAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFN1LCBTYSAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhLi5hYSAgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhICAgICB8IGFtLCBwbSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWEgICAgfCBhLm0uLCBwLm0uICAgICAgICAgICAgICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhYSAgIHwgYSwgcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgIHwgYi4uYmIgICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYiAgICAgfCBhbSwgcG0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiICAgIHwgYS5tLiwgcC5tLiwgbm9vbiwgbWlkbmlnaHQgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYmIgICB8IGEsIHAsIG4sIG1pICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgICB8IEIuLkJCQiAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCICAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQkIgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgICB8IGggICAgICAgfCAxLCAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBobyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMTJ0aCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaGggICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgICB8IEggICAgICAgfCAwLCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBIbyAgICAgIHwgMHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSEggICAgICB8IDAwLCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgICB8IEsgICAgICAgfCAxLCAyLCAuLi4sIDExLCAwICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTF0aCwgMHRoICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS0sgICAgICB8IDAxLCAwMiwgLi4uLCAxMSwgMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgICB8IGsgICAgICAgfCAyNCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrbyAgICAgIHwgMjR0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga2sgICAgICB8IDI0LCAwMSwgMDIsIC4uLiwgMjMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgICB8IG0gICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW0gICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgICB8IHMgICAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzbyAgICAgIHwgMHRoLCAxc3QsIC4uLiwgNTl0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc3MgICAgICB8IDAwLCAwMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgICB8IFMgICAgICAgfCAwLCAxLCAuLi4sIDkgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTUyAgICAgIHwgMDAsIDAxLCAuLi4sIDk5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTICAgICB8IDAwMCwgMDAxLCAuLi4sIDk5OSAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTU1MgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3LyBaKSAgICAgICAgfCBYICAgICAgIHwgLTA4LCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFggICAgICB8IC0wODAwLCArMDUzMCwgWiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWCAgICAgfCAtMDg6MDAsICswNTozMCwgWiAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYICAgIHwgLTA4MDAsICswNTMwLCBaLCArMTIzNDU2ICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWFggICB8IC0wODowMCwgKzA1OjMwLCBaLCArMTI6MzQ6NTYgICAgICB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgICB8IHggICAgICAgfCAtMDgsICswNTMwLCArMDAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eCAgICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4ICAgICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHggICAgfCAtMDgwMCwgKzA1MzAsICswMDAwLCArMTIzNDU2ICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4eCAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCwgKzEyOjM0OjU2IHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoR01UKSAgICAgICAgICAgICAgICAgIHwgTy4uLk9PTyB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE9PT08gICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyICAgICB8XG4gKiB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSAgfCB6Li4uenp6IHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgNiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgenp6eiAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIsNiAgIHxcbiAqIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgICB8IHQgICAgICAgfCA1MTI5Njk1MjAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0dCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBNaWxsaXNlY29uZHMgdGltZXN0YW1wICAgICAgICAgIHwgVCAgICAgICB8IDUxMjk2OTUyMDkwMCAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFRUICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICAgfCBQICAgICAgIHwgMDQvMjkvMTQ1MyAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFAgICAgICB8IEFwciAyOSwgMTQ1MyAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUCAgICAgfCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQICAgIHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgIHwgcCAgICAgICB8IDEyOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwICAgICAgfCAxMjowMDowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHAgICAgIHwgMTI6MDA6MDAgQU0gR01UKzIgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwcCAgICB8IDEyOjAwOjAwIEFNIEdNVCswMjowMCAgICAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgQ29tYmluYXRpb24gb2YgZGF0ZSBhbmQgdGltZSAgICB8IFBwICAgICAgfCAwNC8yOS8xNDUzLCAxMjowMCBBTSAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUHBwICAgIHwgQXByIDI5LCAxNDUzLCAxMjowMDowMCBBTSAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQcHBwICB8IEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFBwcHBwfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgYXQgLi4uICAgfCAyLDcgICB8XG4gKiBOb3RlczpcbiAqIDEuIFwiRm9ybWF0dGluZ1wiIHVuaXRzIChlLmcuIGZvcm1hdHRpbmcgcXVhcnRlcikgaW4gdGhlIGRlZmF1bHQgZW4tVVMgbG9jYWxlXG4gKiAgICBhcmUgdGhlIHNhbWUgYXMgXCJzdGFuZC1hbG9uZVwiIHVuaXRzLCBidXQgYXJlIGRpZmZlcmVudCBpbiBzb21lIGxhbmd1YWdlcy5cbiAqICAgIFwiRm9ybWF0dGluZ1wiIHVuaXRzIGFyZSBkZWNsaW5lZCBhY2NvcmRpbmcgdG8gdGhlIHJ1bGVzIG9mIHRoZSBsYW5ndWFnZVxuICogICAgaW4gdGhlIGNvbnRleHQgb2YgYSBkYXRlLiBcIlN0YW5kLWFsb25lXCIgdW5pdHMgYXJlIGFsd2F5cyBub21pbmF0aXZlIHNpbmd1bGFyOlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTExMTCcsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWQnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnZG8gTU1NTScsIHtsb2NhbGU6IGNzfSkgLy89PiAnNi4gbGlzdG9wYWR1J2BcbiAqXG4gKiAyLiBBbnkgc2VxdWVuY2Ugb2YgdGhlIGlkZW50aWNhbCBsZXR0ZXJzIGlzIGEgcGF0dGVybiwgdW5sZXNzIGl0IGlzIGVzY2FwZWQgYnlcbiAqICAgIHRoZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyAoc2VlIGJlbG93KS5cbiAqICAgIElmIHRoZSBzZXF1ZW5jZSBpcyBsb25nZXIgdGhhbiBsaXN0ZWQgaW4gdGFibGUgKGUuZy4gYEVFRUVFRUVFRUVFYClcbiAqICAgIHRoZSBvdXRwdXQgd2lsbCBiZSB0aGUgc2FtZSBhcyBkZWZhdWx0IHBhdHRlcm4gZm9yIHRoaXMgdW5pdCwgdXN1YWxseVxuICogICAgdGhlIGxvbmdlc3Qgb25lIChpbiBjYXNlIG9mIElTTyB3ZWVrZGF5cywgYEVFRUVgKS4gRGVmYXVsdCBwYXR0ZXJucyBmb3IgdW5pdHNcbiAqICAgIGFyZSBtYXJrZWQgd2l0aCBcIjJcIiBpbiB0aGUgbGFzdCBjb2x1bW4gb2YgdGhlIHRhYmxlLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NJykgLy89PiAnTm92J2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTScpIC8vPT4gJ04nYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAzLiBTb21lIHBhdHRlcm5zIGNvdWxkIGJlIHVubGltaXRlZCBsZW5ndGggKHN1Y2ggYXMgYHl5eXl5eXl5YCkuXG4gKiAgICBUaGUgb3V0cHV0IHdpbGwgYmUgcGFkZGVkIHdpdGggemVyb3MgdG8gbWF0Y2ggdGhlIGxlbmd0aCBvZiB0aGUgcGF0dGVybi5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ3l5eXl5eXl5JykgLy89PiAnMDAwMDIwMTcnYFxuICpcbiAqIDQuIGBRUVFRUWAgYW5kIGBxcXFxcWAgY291bGQgYmUgbm90IHN0cmljdGx5IG51bWVyaWNhbCBpbiBzb21lIGxvY2FsZXMuXG4gKiAgICBUaGVzZSB0b2tlbnMgcmVwcmVzZW50IHRoZSBzaG9ydGVzdCBmb3JtIG9mIHRoZSBxdWFydGVyLlxuICpcbiAqIDUuIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBwYXR0ZXJucyBhcmUgQi5DLiB5ZWFyczpcbiAqXG4gKiAgICB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICogICAgfC0tLS0tLXwtLS0tLXwtLS0tLXxcbiAqICAgIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gKiAgICB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICogICAgfCBCQyAyIHwgICAyIHwgIC0xIHxcbiAqXG4gKiAgICBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gKiAgICB3aGlsZSBgdXVgIHBhZHMgc2luZ2xlIGRpZ2l0IHllYXJzIHRvIDIgY2hhcmFjdGVycyBhbmQgcmV0dXJucyBvdGhlciB5ZWFycyB1bmNoYW5nZWQ6XG4gKlxuICogICAgfCBZZWFyIHwgYHl5YCB8IGB1dWAgfFxuICogICAgfC0tLS0tLXwtLS0tLS18LS0tLS0tfFxuICogICAgfCAxICAgIHwgICAwMSB8ICAgMDEgfFxuICogICAgfCAxNCAgIHwgICAxNCB8ICAgMTQgfFxuICogICAgfCAzNzYgIHwgICA3NiB8ICAzNzYgfFxuICogICAgfCAxNDUzIHwgICA1MyB8IDE0NTMgfFxuICpcbiAqICAgIFRoZSBzYW1lIGRpZmZlcmVuY2UgaXMgdHJ1ZSBmb3IgbG9jYWwgYW5kIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFycyAoYFlgIGFuZCBgUmApLFxuICogICAgZXhjZXB0IGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXJzIGFyZSBkZXBlbmRlbnQgb24gYG9wdGlvbnMud2Vla1N0YXJ0c09uYFxuICogICAgYW5kIGBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZWAgKGNvbXBhcmUgW2dldElTT1dlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldElTT1dlZWtZZWFyfVxuICogICAgYW5kIFtnZXRXZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRXZWVrWWVhcn0pLlxuICpcbiAqIDYuIFNwZWNpZmljIG5vbi1sb2NhdGlvbiB0aW1lem9uZXMgYXJlIGN1cnJlbnRseSB1bmF2YWlsYWJsZSBpbiBgZGF0ZS1mbnNgLFxuICogICAgc28gcmlnaHQgbm93IHRoZXNlIHRva2VucyBmYWxsIGJhY2sgdG8gR01UIHRpbWV6b25lcy5cbiAqXG4gKiA3LiBUaGVzZSBwYXR0ZXJucyBhcmUgbm90IGluIHRoZSBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiAgICAtIGBpYDogSVNPIGRheSBvZiB3ZWVrXG4gKiAgICAtIGBJYDogSVNPIHdlZWsgb2YgeWVhclxuICogICAgLSBgUmA6IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKiAgICAtIGB0YDogc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYFRgOiBtaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBvYDogb3JkaW5hbCBudW1iZXIgbW9kaWZpZXJcbiAqICAgIC0gYFBgOiBsb25nIGxvY2FsaXplZCBkYXRlXG4gKiAgICAtIGBwYDogbG9uZyBsb2NhbGl6ZWQgdGltZVxuICpcbiAqIDguIGBZWWAgYW5kIGBZWVlZYCB0b2tlbnMgcmVwcmVzZW50IHdlZWstbnVtYmVyaW5nIHllYXJzIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIHllYXJzLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICpcbiAqIDkuIGBEYCBhbmQgYEREYCB0b2tlbnMgcmVwcmVzZW50IGRheXMgb2YgdGhlIHllYXIgYnV0IHRoZXkgYXJlIG9mdGhlbiBjb25mdXNlZCB3aXRoIGRheXMgb2YgdGhlIG1vbnRoLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIC0gVGhlIHNlY29uZCBhcmd1bWVudCBpcyBub3cgcmVxdWlyZWQgZm9yIHRoZSBzYWtlIG9mIGV4cGxpY2l0bmVzcy5cbiAqXG4gKiAgIGBgYGphdmFzY3JpcHRcbiAqICAgLy8gQmVmb3JlIHYyLjAuMFxuICogICBmb3JtYXQobmV3IERhdGUoMjAxNiwgMCwgMSkpXG4gKlxuICogICAvLyB2Mi4wLjAgb253YXJkXG4gKiAgIGZvcm1hdChuZXcgRGF0ZSgyMDE2LCAwLCAxKSwgXCJ5eXl5LU1NLWRkJ1QnSEg6bW06c3MuU1NTeHh4XCIpXG4gKiAgIGBgYFxuICpcbiAqIC0gTmV3IGZvcm1hdCBzdHJpbmcgQVBJIGZvciBgZm9ybWF0YCBmdW5jdGlvblxuICogICB3aGljaCBpcyBiYXNlZCBvbiBbVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1XShodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlKS5cbiAqICAgU2VlIFt0aGlzIHBvc3RdKGh0dHBzOi8vYmxvZy5kYXRlLWZucy5vcmcvcG9zdC91bmljb2RlLXRva2Vucy1pbi1kYXRlLWZucy12Mi1zcmVhdHlraTkxamcpIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogLSBDaGFyYWN0ZXJzIGFyZSBub3cgZXNjYXBlZCB1c2luZyBzaW5nbGUgcXVvdGUgc3ltYm9scyAoYCdgKSBpbnN0ZWFkIG9mIHNxdWFyZSBicmFja2V0cy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBmb3JtYXQgLSB0aGUgc3RyaW5nIG9mIHRva2Vuc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlPTFdIC0gdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpc1xuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyIHRva2VucyBgWVlgIGFuZCBgWVlZWWA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIGRheSBvZiB5ZWFyIHRva2VucyBgRGAgYW5kIGBERGA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmdcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBsb2NhbGl6ZWAgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXRMb25nYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCBtdXN0IGJlIGJldHdlZW4gMSBhbmQgN1xuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRgIGluc3RlYWQgb2YgYERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTEgRmVicnVhcnkgMjAxNCBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIHZhciByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgMSwgMTEpLCAnTU0vZGQveXl5eScpXG4gKiAvLz0+ICcwMi8xMS8yMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMiBKdWx5IDIwMTQgaW4gRXNwZXJhbnRvOlxuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBcImRvICdkZScgTU1NTSB5eXl5XCIsIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJzItYSBkZSBqdWxpbyAyMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBFc2NhcGUgc3RyaW5nIGJ5IHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzOlxuICogdmFyIHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxNSksIFwiaCAnbycnY2xvY2snXCIpXG4gKiAvLz0+IFwiMyBvJ2Nsb2NrXCJcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXQoZGlydHlEYXRlLCBkaXJ0eUZvcm1hdFN0ciwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZm9ybWF0U3RyID0gU3RyaW5nKGRpcnR5Rm9ybWF0U3RyKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSB8fCBkZWZhdWx0TG9jYWxlO1xuICB2YXIgbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlO1xuICB2YXIgZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gMSA6IHRvSW50ZWdlcihsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgOiB0b0ludGVnZXIob3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBsb2NhbGVXZWVrU3RhcnRzT24gPSBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy53ZWVrU3RhcnRzT247XG4gIHZhciBkZWZhdWx0V2Vla1N0YXJ0c09uID0gbG9jYWxlV2Vla1N0YXJ0c09uID09IG51bGwgPyAwIDogdG9JbnRlZ2VyKGxvY2FsZVdlZWtTdGFydHNPbik7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSBvcHRpb25zLndlZWtTdGFydHNPbiA9PSBudWxsID8gZGVmYXVsdFdlZWtTdGFydHNPbiA6IHRvSW50ZWdlcihvcHRpb25zLndlZWtTdGFydHNPbik7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgaWYgKCFsb2NhbGUubG9jYWxpemUpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBsb2NhbGl6ZSBwcm9wZXJ0eScpO1xuICB9XG5cbiAgaWYgKCFsb2NhbGUuZm9ybWF0TG9uZykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGZvcm1hdExvbmcgcHJvcGVydHknKTtcbiAgfVxuXG4gIHZhciBvcmlnaW5hbERhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcblxuICBpZiAoIWlzVmFsaWQob3JpZ2luYWxEYXRlKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgfSAvLyBDb252ZXJ0IHRoZSBkYXRlIGluIHN5c3RlbSB0aW1lem9uZSB0byB0aGUgc2FtZSBkYXRlIGluIFVUQyswMDowMCB0aW1lem9uZS5cbiAgLy8gVGhpcyBlbnN1cmVzIHRoYXQgd2hlbiBVVEMgZnVuY3Rpb25zIHdpbGwgYmUgaW1wbGVtZW50ZWQsIGxvY2FsZXMgd2lsbCBiZSBjb21wYXRpYmxlIHdpdGggdGhlbS5cbiAgLy8gU2VlIGFuIGlzc3VlIGFib3V0IFVUQyBmdW5jdGlvbnM6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cblxuICB2YXIgdGltZXpvbmVPZmZzZXQgPSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSk7XG4gIHZhciB1dGNEYXRlID0gc3ViTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSwgdGltZXpvbmVPZmZzZXQpO1xuICB2YXIgZm9ybWF0dGVyT3B0aW9ucyA9IHtcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSxcbiAgICB3ZWVrU3RhcnRzT246IHdlZWtTdGFydHNPbixcbiAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICBfb3JpZ2luYWxEYXRlOiBvcmlnaW5hbERhdGVcbiAgfTtcbiAgdmFyIHJlc3VsdCA9IGZvcm1hdFN0ci5tYXRjaChsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09ICdwJyB8fCBmaXJzdENoYXJhY3RlciA9PT0gJ1AnKSB7XG4gICAgICB2YXIgbG9uZ0Zvcm1hdHRlciA9IGxvbmdGb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICAgIHJldHVybiBsb25nRm9ybWF0dGVyKHN1YnN0cmluZywgbG9jYWxlLmZvcm1hdExvbmcsIGZvcm1hdHRlck9wdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgLy8gUmVwbGFjZSB0d28gc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlclxuICAgIGlmIChzdWJzdHJpbmcgPT09IFwiJydcIikge1xuICAgICAgcmV0dXJuIFwiJ1wiO1xuICAgIH1cblxuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gXCInXCIpIHtcbiAgICAgIHJldHVybiBjbGVhbkVzY2FwZWRTdHJpbmcoc3Vic3RyaW5nKTtcbiAgICB9XG5cbiAgICB2YXIgZm9ybWF0dGVyID0gZm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG5cbiAgICBpZiAoZm9ybWF0dGVyKSB7XG4gICAgICBpZiAoIW9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zICYmIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgZGlydHlEYXRlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnMgJiYgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgZGlydHlEYXRlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZvcm1hdHRlcih1dGNEYXRlLCBzdWJzdHJpbmcsIGxvY2FsZS5sb2NhbGl6ZSwgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyLm1hdGNoKHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0Zvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlciBgJyArIGZpcnN0Q2hhcmFjdGVyICsgJ2AnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gY2xlYW5Fc2NhcGVkU3RyaW5nKGlucHV0KSB7XG4gIHJldHVybiBpbnB1dC5tYXRjaChlc2NhcGVkU3RyaW5nUmVnRXhwKVsxXS5yZXBsYWNlKGRvdWJsZVF1b3RlUmVnRXhwLCBcIidcIik7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZW5kT2ZEYXkgZnJvbSBcIi4uL2VuZE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgZW5kT2ZNb250aCBmcm9tIFwiLi4vZW5kT2ZNb250aC9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNMYXN0RGF5T2ZNb250aFxuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRoZSBsYXN0IGRheSBvZiBhIG1vbnRoP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgdGhlIGxhc3QgZGF5IG9mIGEgbW9udGg/XG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0aGUgbGFzdCBkYXkgb2YgYSBtb250aFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDI4IEZlYnJ1YXJ5IDIwMTQgdGhlIGxhc3QgZGF5IG9mIGEgbW9udGg/XG4gKiB2YXIgcmVzdWx0ID0gaXNMYXN0RGF5T2ZNb250aChuZXcgRGF0ZSgyMDE0LCAxLCAyOCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0xhc3REYXlPZk1vbnRoKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgcmV0dXJuIGVuZE9mRGF5KGRhdGUpLmdldFRpbWUoKSA9PT0gZW5kT2ZNb250aChkYXRlKS5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1ZhbGlkXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxuICogQXJndW1lbnQgaXMgY29udmVydGVkIHRvIERhdGUgdXNpbmcgYHRvRGF0ZWAuIFNlZSBbdG9EYXRlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL3RvRGF0ZX1cbiAqIEludmFsaWQgRGF0ZSBpcyBhIERhdGUsIHdob3NlIHRpbWUgdmFsdWUgaXMgTmFOLlxuICpcbiAqIFRpbWUgdmFsdWUgb2YgRGF0ZTogaHR0cDovL2VzNS5naXRodWIuaW8vI3gxNS45LjEuMVxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogLSBOb3cgYGlzVmFsaWRgIGRvZXNuJ3QgdGhyb3cgYW4gZXhjZXB0aW9uXG4gKiAgIGlmIHRoZSBmaXJzdCBhcmd1bWVudCBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqICAgSW5zdGVhZCwgYXJndW1lbnQgaXMgY29udmVydGVkIGJlZm9yZWhhbmQgdXNpbmcgYHRvRGF0ZWAuXG4gKlxuICogICBFeGFtcGxlczpcbiAqXG4gKiAgIHwgYGlzVmFsaWRgIGFyZ3VtZW50ICAgICAgICB8IEJlZm9yZSB2Mi4wLjAgfCB2Mi4wLjAgb253YXJkIHxcbiAqICAgfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tfFxuICogICB8IGBuZXcgRGF0ZSgpYCAgICAgICAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHwgYHRydWVgICAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKCcyMDE2LTAxLTAxJylgICB8IGB0cnVlYCAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoJycpYCAgICAgICAgICAgIHwgYGZhbHNlYCAgICAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZSgxNDg4MzcwODM1MDgxKWAgfCBgdHJ1ZWAgICAgICAgIHwgYHRydWVgICAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKE5hTilgICAgICAgICAgICB8IGBmYWxzZWAgICAgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgJzIwMTYtMDEtMDEnYCAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGAnJ2AgICAgICAgICAgICAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYDE0ODgzNzA4MzUwODFgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgTmFOYCAgICAgICAgICAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGBmYWxzZWAgICAgICAgfFxuICpcbiAqICAgV2UgaW50cm9kdWNlIHRoaXMgY2hhbmdlIHRvIG1ha2UgKmRhdGUtZm5zKiBjb25zaXN0ZW50IHdpdGggRUNNQVNjcmlwdCBiZWhhdmlvclxuICogICB0aGF0IHRyeSB0byBjb2VyY2UgYXJndW1lbnRzIHRvIHRoZSBleHBlY3RlZCB0eXBlXG4gKiAgICh3aGljaCBpcyBhbHNvIHRoZSBjYXNlIHdpdGggb3RoZXIgKmRhdGUtZm5zKiBmdW5jdGlvbnMpLlxuICpcbiAqIEBwYXJhbSB7Kn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdmFsaWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbGlkIGRhdGU6XG4gKiB2YXIgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgyMDE0LCAxLCAzMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWx1ZSwgY29udmVydGFibGUgaW50byBhIGRhdGU6XG4gKiB2YXIgcmVzdWx0ID0gaXNWYWxpZCgxMzkzODA0ODAwMDAwKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgaW52YWxpZCBkYXRlOlxuICogdmFyIHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzVmFsaWQoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICByZXR1cm4gIWlzTmFOKGRhdGUpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eU9wdGlvbnMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgdmFyIGZvcm1hdCA9IGFyZ3MuZm9ybWF0c1t3aWR0aF0gfHwgYXJncy5mb3JtYXRzW2FyZ3MuZGVmYXVsdFdpZHRoXTtcbiAgICByZXR1cm4gZm9ybWF0O1xuICB9O1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTG9jYWxpemVGbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlJbmRleCwgZGlydHlPcHRpb25zKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gICAgdmFyIGNvbnRleHQgPSBvcHRpb25zLmNvbnRleHQgPyBTdHJpbmcob3B0aW9ucy5jb250ZXh0KSA6ICdzdGFuZGFsb25lJztcbiAgICB2YXIgdmFsdWVzQXJyYXk7XG5cbiAgICBpZiAoY29udGV4dCA9PT0gJ2Zvcm1hdHRpbmcnICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgdmFyIGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCB8fCBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBkZWZhdWx0V2lkdGg7XG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1t3aWR0aF0gfHwgYXJncy5mb3JtYXR0aW5nVmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhciBfd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogYXJncy5kZWZhdWx0V2lkdGg7XG5cbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy52YWx1ZXNbX3dpZHRoXSB8fCBhcmdzLnZhbHVlc1tfZGVmYXVsdFdpZHRoXTtcbiAgICB9XG5cbiAgICB2YXIgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2soZGlydHlJbmRleCkgOiBkaXJ0eUluZGV4O1xuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF07XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eVN0cmluZywgZGlydHlPcHRpb25zKSB7XG4gICAgdmFyIHN0cmluZyA9IFN0cmluZyhkaXJ0eVN0cmluZyk7XG4gICAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICB2YXIgbWF0Y2hQYXR0ZXJuID0gd2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKG1hdGNoUGF0dGVybik7XG5cbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVBhdHRlcm5zID0gd2lkdGggJiYgYXJncy5wYXJzZVBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG4gICAgdmFyIHZhbHVlO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwYXJzZVBhdHRlcm5zKSA9PT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgdmFsdWUgPSBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IGZpbmRLZXkocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpXG4gICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmluZEtleShvYmplY3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHByZWRpY2F0ZShvYmplY3Rba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5U3RyaW5nLCBkaXJ0eU9wdGlvbnMpIHtcbiAgICB2YXIgc3RyaW5nID0gU3RyaW5nKGRpcnR5U3RyaW5nKTtcbiAgICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5tYXRjaFBhdHRlcm4pO1xuXG4gICAgaWYgKCFtYXRjaFJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuXG4gICAgaWYgKCFwYXJzZVJlc3VsdCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKSA6IHBhcnNlUmVzdWx0WzBdO1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICByZXN0OiBzdHJpbmcuc2xpY2UobWF0Y2hlZFN0cmluZy5sZW5ndGgpXG4gICAgfTtcbiAgfTtcbn0iLCJ2YXIgZm9ybWF0RGlzdGFuY2VMb2NhbGUgPSB7XG4gIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBzZWNvbmQnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICB4U2Vjb25kczoge1xuICAgIG9uZTogJzEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBzZWNvbmRzJ1xuICB9LFxuICBoYWxmQU1pbnV0ZTogJ2hhbGYgYSBtaW51dGUnLFxuICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgbWludXRlJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgeE1pbnV0ZXM6IHtcbiAgICBvbmU6ICcxIG1pbnV0ZScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbWludXRlcydcbiAgfSxcbiAgYWJvdXRYSG91cnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIGhvdXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4SG91cnM6IHtcbiAgICBvbmU6ICcxIGhvdXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IGhvdXJzJ1xuICB9LFxuICB4RGF5czoge1xuICAgIG9uZTogJzEgZGF5JyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBkYXlzJ1xuICB9LFxuICBhYm91dFhXZWVrczoge1xuICAgIG9uZTogJ2Fib3V0IDEgd2VlaycsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIHhXZWVrczoge1xuICAgIG9uZTogJzEgd2VlaycsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gd2Vla3MnXG4gIH0sXG4gIGFib3V0WE1vbnRoczoge1xuICAgIG9uZTogJ2Fib3V0IDEgbW9udGgnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgeE1vbnRoczoge1xuICAgIG9uZTogJzEgbW9udGgnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1vbnRocydcbiAgfSxcbiAgYWJvdXRYWWVhcnM6IHtcbiAgICBvbmU6ICdhYm91dCAxIHllYXInLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICB4WWVhcnM6IHtcbiAgICBvbmU6ICcxIHllYXInLFxuICAgIG90aGVyOiAne3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBvdmVyWFllYXJzOiB7XG4gICAgb25lOiAnb3ZlciAxIHllYXInLFxuICAgIG90aGVyOiAnb3ZlciB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIGFsbW9zdFhZZWFyczoge1xuICAgIG9uZTogJ2FsbW9zdCAxIHllYXInLFxuICAgIG90aGVyOiAnYWxtb3N0IHt7Y291bnR9fSB5ZWFycydcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdERpc3RhbmNlKHRva2VuLCBjb3VudCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHJlc3VsdDtcblxuICBpZiAodHlwZW9mIGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG4gIH0gZWxzZSBpZiAoY291bnQgPT09IDEpIHtcbiAgICByZXN1bHQgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl0ub25lO1xuICB9IGVsc2Uge1xuICAgIHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBjb3VudCk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdpbiAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyBhZ28nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59IiwiaW1wb3J0IGJ1aWxkRm9ybWF0TG9uZ0ZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzXCI7XG52YXIgZGF0ZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdFRUVFLCBNTU1NIGRvLCB5JyxcbiAgbG9uZzogJ01NTU0gZG8sIHknLFxuICBtZWRpdW06ICdNTU0gZCwgeScsXG4gIHNob3J0OiAnTU0vZGQveXl5eSdcbn07XG52YXIgdGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6ICdoOm1tOnNzIGEgenp6eicsXG4gIGxvbmc6ICdoOm1tOnNzIGEgeicsXG4gIG1lZGl1bTogJ2g6bW06c3MgYScsXG4gIHNob3J0OiAnaDptbSBhJ1xufTtcbnZhciBkYXRlVGltZUZvcm1hdHMgPSB7XG4gIGZ1bGw6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBsb25nOiBcInt7ZGF0ZX19ICdhdCcge3t0aW1lfX1cIixcbiAgbWVkaXVtOiAne3tkYXRlfX0sIHt7dGltZX19JyxcbiAgc2hvcnQ6ICd7e2RhdGV9fSwge3t0aW1lfX0nXG59O1xudmFyIGZvcm1hdExvbmcgPSB7XG4gIGRhdGU6IGJ1aWxkRm9ybWF0TG9uZ0ZuKHtcbiAgICBmb3JtYXRzOiBkYXRlRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KSxcbiAgdGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IHRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICBkYXRlVGltZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVUaW1lRm9ybWF0cyxcbiAgICBkZWZhdWx0V2lkdGg6ICdmdWxsJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGZvcm1hdExvbmc7IiwidmFyIGZvcm1hdFJlbGF0aXZlTG9jYWxlID0ge1xuICBsYXN0V2VlazogXCInbGFzdCcgZWVlZSAnYXQnIHBcIixcbiAgeWVzdGVyZGF5OiBcIid5ZXN0ZXJkYXkgYXQnIHBcIixcbiAgdG9kYXk6IFwiJ3RvZGF5IGF0JyBwXCIsXG4gIHRvbW9ycm93OiBcIid0b21vcnJvdyBhdCcgcFwiLFxuICBuZXh0V2VlazogXCJlZWVlICdhdCcgcFwiLFxuICBvdGhlcjogJ1AnXG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0UmVsYXRpdmUodG9rZW4sIF9kYXRlLCBfYmFzZURhdGUsIF9vcHRpb25zKSB7XG4gIHJldHVybiBmb3JtYXRSZWxhdGl2ZUxvY2FsZVt0b2tlbl07XG59IiwiaW1wb3J0IGJ1aWxkTG9jYWxpemVGbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanNcIjtcbnZhciBlcmFWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydCJywgJ0EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnQkMnLCAnQUQnXSxcbiAgd2lkZTogWydCZWZvcmUgQ2hyaXN0JywgJ0Fubm8gRG9taW5pJ11cbn07XG52YXIgcXVhcnRlclZhbHVlcyA9IHtcbiAgbmFycm93OiBbJzEnLCAnMicsICczJywgJzQnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnUTEnLCAnUTInLCAnUTMnLCAnUTQnXSxcbiAgd2lkZTogWycxc3QgcXVhcnRlcicsICcybmQgcXVhcnRlcicsICczcmQgcXVhcnRlcicsICc0dGggcXVhcnRlciddIC8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuICAvLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbiAgLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4gIC8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cblxufTtcbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0onLCAnRicsICdNJywgJ0EnLCAnTScsICdKJywgJ0onLCAnQScsICdTJywgJ08nLCAnTicsICdEJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ10sXG4gIHdpZGU6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ1MnLCAnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnXSxcbiAgc2hvcnQ6IFsnU3UnLCAnTW8nLCAnVHUnLCAnV2UnLCAnVGgnLCAnRnInLCAnU2EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gIHdpZGU6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH1cbn07XG5cbmZ1bmN0aW9uIG9yZGluYWxOdW1iZXIoZGlydHlOdW1iZXIsIF9kaXJ0eU9wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7IC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YDpcbiAgLy9cbiAgLy8gICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fVxuICAvLyAgIHZhciB1bml0ID0gU3RyaW5nKG9wdGlvbnMudW5pdClcbiAgLy9cbiAgLy8gd2hlcmUgYHVuaXRgIGNhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF0ZScsICdkYXlPZlllYXInLFxuICAvLyAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCdcblxuICB2YXIgcmVtMTAwID0gbnVtYmVyICUgMTAwO1xuXG4gIGlmIChyZW0xMDAgPiAyMCB8fCByZW0xMDAgPCAxMCkge1xuICAgIHN3aXRjaCAocmVtMTAwICUgMTApIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdzdCc7XG5cbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICduZCc7XG5cbiAgICAgIGNhc2UgMzpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICdyZCc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bWJlciArICd0aCc7XG59XG5cbnZhciBsb2NhbGl6ZSA9IHtcbiAgb3JkaW5hbE51bWJlcjogb3JkaW5hbE51bWJlcixcbiAgZXJhOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZXJhVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogcXVhcnRlclZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBhcmd1bWVudENhbGxiYWNrOiBmdW5jdGlvbiAocXVhcnRlcikge1xuICAgICAgcmV0dXJuIE51bWJlcihxdWFydGVyKSAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGl6ZTsiLCJpbXBvcnQgYnVpbGRNYXRjaFBhdHRlcm5GbiBmcm9tIFwiLi4vLi4vLi4vX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzXCI7XG5pbXBvcnQgYnVpbGRNYXRjaEZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG52YXIgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pXG59O1xudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15qL2ksIC9eZi9pLCAvXm0vaSwgL15hL2ksIC9ebS9pLCAvXmovaSwgL15qL2ksIC9eYS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV0sXG4gIGFueTogWy9eamEvaSwgL15mL2ksIC9ebWFyL2ksIC9eYXAvaSwgL15tYXkvaSwgL15qdW4vaSwgL15qdWwvaSwgL15hdS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV1cbn07XG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzbXR3Zl0vaSxcbiAgc2hvcnQ6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxuICB3aWRlOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaVxufTtcbnZhciBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pXG4gIH1cbn07XG52YXIgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH0pLFxuICBlcmE6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXk6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ2FueScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBtYXRjaDsiLCJpbXBvcnQgZm9ybWF0RGlzdGFuY2UgZnJvbSBcIi4vX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdExvbmcgZnJvbSBcIi4vX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0UmVsYXRpdmUgZnJvbSBcIi4vX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGxvY2FsaXplIGZyb20gXCIuL19saWIvbG9jYWxpemUvaW5kZXguanNcIjtcbmltcG9ydCBtYXRjaCBmcm9tIFwiLi9fbGliL21hdGNoL2luZGV4LmpzXCI7XG4vKipcbiAqIEB0eXBlIHtMb2NhbGV9XG4gKiBAY2F0ZWdvcnkgTG9jYWxlc1xuICogQHN1bW1hcnkgRW5nbGlzaCBsb2NhbGUgKFVuaXRlZCBTdGF0ZXMpLlxuICogQGxhbmd1YWdlIEVuZ2xpc2hcbiAqIEBpc28tNjM5LTIgZW5nXG4gKiBAYXV0aG9yIFNhc2hhIEtvc3MgW0Brb3Nzbm9jb3JwXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20va29zc25vY29ycH1cbiAqIEBhdXRob3IgTGVzaGEgS29zcyBbQGxlc2hha29zc117QGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2xlc2hha29zc31cbiAqL1xuXG52YXIgbG9jYWxlID0ge1xuICBjb2RlOiAnZW4tVVMnLFxuICBmb3JtYXREaXN0YW5jZTogZm9ybWF0RGlzdGFuY2UsXG4gIGZvcm1hdExvbmc6IGZvcm1hdExvbmcsXG4gIGZvcm1hdFJlbGF0aXZlOiBmb3JtYXRSZWxhdGl2ZSxcbiAgbG9jYWxpemU6IGxvY2FsaXplLFxuICBtYXRjaDogbWF0Y2gsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDBcbiAgICAvKiBTdW5kYXkgKi9cbiAgICAsXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxXG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCBhZGRNaWxsaXNlY29uZHMgZnJvbSBcIi4uL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3ViTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgc3VidHJhY3RlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgc3VidHJhY3RlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdWJ0cmFjdCA3NTAgbWlsbGlzZWNvbmRzIGZyb20gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN1Yk1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjI5LjI1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1Yk1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIC1hbW91bnQpO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdC5pby9manVsZVwiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImltcG9ydCB7IE1hbmFnZXJWaWV3IH0gZnJvbSAnLi9tYW5hZ2VyL3ZpZXcnO1xyXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi9wcm9qZWN0L2NvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBQcm9qZWN0TW9kZWwgfSBmcm9tICcuL3Byb2plY3QvbW9kZWwnO1xyXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi90YXNrL2NvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi91c2VyL2NvbnRyb2xsZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIERhdGFiYXNlQVBJIHtcclxuICBwcml2YXRlIHN0YXRpYyByb290VVJMOiBzdHJpbmc7XHJcblxyXG4gIHN0YXRpYyBzZXRSb290VVJMKHVybDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBEYXRhYmFzZUFQSS5yb290VVJMID0gdXJsO1xyXG4gIH1cclxuXHJcbiAgLy8jcmVnaW9uIENPTlZFUlNJT04gbWV0aG9kc1xyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0gdGFza0RhdGEgaXMgYW4gYXJyYXkgb2YgVGFza3MgKGRhdGFiYXNlIG9iamVjdHMpXHJcbiAgICovXHJcbiAgc3RhdGljIGNvbnZlcnRUYXNrRnJvbURiVG9NdmModGFza0RhdGE6IGFueSk6IFRhc2tbXSB7XHJcbiAgICBpZiAodGFza0RhdGEubGVuZ3RoID09IDApIHJldHVybiBbXTtcclxuXHJcbiAgICBjb25zdCB0YXNrczogVGFza1tdID0gW107XHJcbiAgICB0YXNrRGF0YS5mb3JFYWNoKCh0YXNrOiBhbnkpID0+IHtcclxuICAgICAgdGFza3MucHVzaChuZXcgVGFzayh0YXNrLmlkLCB0YXNrLm5hbWUsIHRhc2suc3RhdGUpKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRhc2tzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHByb2pEYXRhIGlzIGFuIGFycmF5IG9mIFByb2plY3RzIChkYXRhYmFzZSBvYmplY3RzKVxyXG4gICAqL1xyXG4gIHN0YXRpYyBhc3luYyBjb252ZXJ0UHJvamVjdEZyb21EYlRvTXZjKHByb2pEYXRhOiBhbnkpOiBQcm9taXNlPFByb2plY3RbXT4ge1xyXG4gICAgaWYgKHByb2pEYXRhLmxlbmd0aCA9PSAwKSByZXR1cm4gW107XHJcblxyXG4gICAgY29uc3QgcHJvamVjdHM6IFByb2plY3RbXSA9IFtdO1xyXG4gICAgY29uc3QgdGFza1Byb21pc2VzOiBQcm9taXNlPFRhc2tbXT5bXSA9IFtdO1xyXG5cclxuICAgIHByb2pEYXRhLmZvckVhY2goKHA6IGFueSkgPT4ge1xyXG4gICAgICB0YXNrUHJvbWlzZXMucHVzaChEYXRhYmFzZUFQSS5nZXRUYXNrc0J5UHJvamVjdChwLmlkKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwodGFza1Byb21pc2VzKS50aGVuKCh0YXNrczogVGFza1tdW10pID0+IHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qRGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChcclxuICAgICAgICAgIHByb2pEYXRhW2ldLmlkLFxyXG4gICAgICAgICAgcHJvakRhdGFbaV0ubmFtZSxcclxuICAgICAgICAgIHByb2pEYXRhW2ldLmR1ZURhdGUsXHJcbiAgICAgICAgICBwcm9qRGF0YVtpXS50aW1lc3RhbXBcclxuICAgICAgICApO1xyXG4gICAgICAgIG5ld1Byb2plY3QubW9kZWwuc2V0VGFza3ModGFza3NbaV0pO1xyXG4gICAgICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBwcm9qZWN0cztcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHVzZXJEYXRhIGlzIGFuIGFycmF5IG9mIFVzZXJzIChkYXRhYmFzZSBvYmplY3RzKVxyXG4gICAqL1xyXG4gIHN0YXRpYyBhc3luYyBjb252ZXJ0VXNlckZyb21EYlRvTXZjKHVzZXJEYXRhOiBhbnkpOiBQcm9taXNlPFVzZXJbXT4ge1xyXG4gICAgaWYgKHVzZXJEYXRhLmxlbmd0aCA9PSAwKSByZXR1cm4gW107XHJcblxyXG4gICAgY29uc3QgdXNlcnM6IFVzZXJbXSA9IFtdO1xyXG4gICAgY29uc3QgcHJvamVjdFByb21pc2VzOiBQcm9taXNlPFByb2plY3RbXT5bXSA9IFtdO1xyXG5cclxuICAgIHVzZXJEYXRhLmZvckVhY2goKHU6IGFueSkgPT4ge1xyXG4gICAgICBwcm9qZWN0UHJvbWlzZXMucHVzaChEYXRhYmFzZUFQSS5nZXRQcm9qZWN0c0J5VXNlcih1LmlkKSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvamVjdFByb21pc2VzKS50aGVuKChwcm9qZWN0czogUHJvamVjdFtdW10pID0+IHtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1c2VyRGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IG5ld1VzZXIgPSBuZXcgVXNlcih1c2VyRGF0YVtpXS5pZCwgdXNlckRhdGFbaV0ubmlja25hbWUsIHVzZXJEYXRhW2ldLnBhc3N3b3JkKTtcclxuICAgICAgICBuZXdVc2VyLm1vZGVsLnNldFByb2plY3RzKHByb2plY3RzW2ldKTtcclxuICAgICAgICB1c2Vycy5wdXNoKG5ld1VzZXIpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB1c2VycztcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8jZW5kcmVnaW9uIENPTlZFUlNJT04gbWV0aG9kc1xyXG4gIC8vI3JlZ2lvbiBVU0VSIHRhYmxlIG1ldGhvZHNcclxuXHJcbiAgc3RhdGljIGFzeW5jIGdldEFsbFVzZXJzKCk6IFByb21pc2U8VXNlcltdPiB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7RGF0YWJhc2VBUEkucm9vdFVSTH0vdXNlcnNgKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5qc29uKCkpXHJcbiAgICAgIC50aGVuKFxyXG4gICAgICAgIGFzeW5jICh1c2VyRGF0YSkgPT4gYXdhaXQgRGF0YWJhc2VBUEkuY29udmVydFVzZXJGcm9tRGJUb012Yyh1c2VyRGF0YSlcclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBnZXRVc2VyQnlJZChpZDogbnVtYmVyKTogUHJvbWlzZTxVc2VyPiB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7RGF0YWJhc2VBUEkucm9vdFVSTH0vdXNlcnMvJHtpZH1gKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5qc29uKCkpXHJcbiAgICAgIC50aGVuKGFzeW5jICh1c2VyRGF0YSkgPT5cclxuICAgICAgICAoYXdhaXQgRGF0YWJhc2VBUEkuY29udmVydFVzZXJGcm9tRGJUb012YyhbdXNlckRhdGFdKSkucG9wKClcclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyBnZXRVc2VyQnlOaWNrbmFtZShuaWNrbmFtZTogc3RyaW5nKTogUHJvbWlzZTxVc2VyPiB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7RGF0YWJhc2VBUEkucm9vdFVSTH0vdXNlcnM/bmlja25hbWU9JHtuaWNrbmFtZX1gKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5qc29uKCkpXHJcbiAgICAgIC50aGVuKGFzeW5jICh1c2VyRGF0YSkgPT4ge1xyXG4gICAgICAgIGlmICh1c2VyRGF0YS5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICByZXR1cm4gKGF3YWl0IERhdGFiYXNlQVBJLmNvbnZlcnRVc2VyRnJvbURiVG9NdmModXNlckRhdGEpKS5wb3AoKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgYWRkVXNlcihuaWNrbmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gJC5hamF4KHtcclxuICAgICAgdXJsOiBgJHtEYXRhYmFzZUFQSS5yb290VVJMfS91c2Vyc2AsXHJcbiAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG5pY2tuYW1lOiBuaWNrbmFtZSxcclxuICAgICAgICBwYXNzd29yZDogcGFzc3dvcmQsXHJcbiAgICAgIH0sXHJcbiAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvLyNlbmRyZWdpb24gVVNFUiB0YWJsZSBtZXRob2RzXHJcbiAgLy8jcmVnaW9uIFBST0pFQ1QgdGFibGUgbWV0aG9kc1xyXG5cclxuICBzdGF0aWMgYXN5bmMgZ2V0QWxsUHJvamVjdHMoKTogUHJvbWlzZTxQcm9qZWN0W10+IHtcclxuICAgIHJldHVybiBmZXRjaChgJHtEYXRhYmFzZUFQSS5yb290VVJMfS9wcm9qZWN0c2ApXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiBkYXRhLmpzb24oKSlcclxuICAgICAgLnRoZW4oXHJcbiAgICAgICAgYXN5bmMgKHByb2plY3REYXRhOiBhbnkpID0+XHJcbiAgICAgICAgICBhd2FpdCBEYXRhYmFzZUFQSS5jb252ZXJ0UHJvamVjdEZyb21EYlRvTXZjKHByb2plY3REYXRhKVxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGdldFByb2plY3RzQnlVc2VyKHVzZXJJZDogbnVtYmVyKTogUHJvbWlzZTxQcm9qZWN0W10+IHtcclxuICAgIHJldHVybiBmZXRjaChgJHtEYXRhYmFzZUFQSS5yb290VVJMfS91c2Vycy8ke3VzZXJJZH0vcHJvamVjdHNgKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5qc29uKCkpXHJcbiAgICAgIC50aGVuKFxyXG4gICAgICAgIGFzeW5jIChwcm9qZWN0RGF0YTogYW55KSA9PlxyXG4gICAgICAgICAgYXdhaXQgRGF0YWJhc2VBUEkuY29udmVydFByb2plY3RGcm9tRGJUb012Yyhwcm9qZWN0RGF0YSlcclxuICAgICAgKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBhc3luYyB1cGRhdGVQcm9qZWN0cyhwcm9qZWN0czogUHJvamVjdFtdKSB7XHJcbiAgICBsZXQgcHJvbWlzZXM6IFByb21pc2U8dm9pZD5bXSA9IFtdO1xyXG4gICAgcHJvamVjdHMuZm9yRWFjaChhc3luYyAocHJvajogUHJvamVjdCkgPT4ge1xyXG4gICAgICBhd2FpdCB0aGlzLnVwZGF0ZVRhc2tzKHByb2oubW9kZWwuZ2V0VGFza3MoKSk7XHJcblxyXG4gICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgIG5ldyBQcm9taXNlKCgpID0+IHtcclxuICAgICAgICAgIGZldGNoKGAke0RhdGFiYXNlQVBJLnJvb3RVUkx9L3Byb2plY3RzLyR7cHJvai5tb2RlbC5nZXRJZCgpfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgIG5hbWU6IHByb2oubW9kZWwubmFtZSxcclxuICAgICAgICAgICAgICBkdWVEYXRlOiBwcm9qLm1vZGVsLmdldER1ZURhdGUoKSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGRlbGV0ZVByb2plY3RzKHByb2plY3RzOiBQcm9qZWN0W10pIHtcclxuICAgIGxldCBwcm9taXNlczogUHJvbWlzZTxSZXNwb25zZT5bXSA9IFtdO1xyXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvajogUHJvamVjdCkgPT4ge1xyXG4gICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgIGZldGNoKGAke0RhdGFiYXNlQVBJLnJvb3RVUkx9L3Byb2plY3RzLyR7cHJvai5tb2RlbC5nZXRJZCgpfWAsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIE1hbmFnZXJWaWV3LmRpc3BsYXlQb3B1cCh7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiAncmVkJyxcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6ICdEZWxldGUgcHJvamVjdCcsXHJcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBGYWlsZWQgdG8gZGVsZXRlIHByb2plY3QgJHtwcm9qLm1vZGVsLmdldElkKCl9LmAsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJlamVjdChyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHJlamVjdChlcnIpKTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgICBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgYWRkUHJvamVjdChwcm9qZWN0OiBQcm9qZWN0TW9kZWwsIHVzZXJJZDogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiAkLmFqYXgoe1xyXG4gICAgICB1cmw6IGAke0RhdGFiYXNlQVBJLnJvb3RVUkx9L3Byb2plY3RzYCxcclxuICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbmFtZTogcHJvamVjdC5uYW1lLFxyXG4gICAgICAgIGR1ZURhdGU6IHByb2plY3QuZ2V0RHVlRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgdGltZXN0YW1wOiBwcm9qZWN0LmdldFRpbWVzdGFtcCgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgdXNlcklkOiB1c2VySWRcclxuICAgICAgfSxcclxuICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vI2VuZHJlZ2lvbiBQUk9KRUNUIHRhYmxlIG1ldGhvZHNcclxuICAvLyNyZWdpb24gVEFTSyB0YWJsZSBtZXRob2RzXHJcblxyXG4gIHN0YXRpYyBhc3luYyBnZXRBbGxUYXNrcygpOiBQcm9taXNlPFRhc2tbXT4ge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke0RhdGFiYXNlQVBJLnJvb3RVUkx9L3Rhc2tzYClcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IGRhdGEuanNvbigpKVxyXG4gICAgICAudGhlbigodGFza0RhdGE6IGFueSkgPT4gRGF0YWJhc2VBUEkuY29udmVydFRhc2tGcm9tRGJUb012Yyh0YXNrRGF0YSkpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGdldFRhc2tzQnlQcm9qZWN0KHByb2pJZDogbnVtYmVyKTogUHJvbWlzZTxUYXNrW10+IHtcclxuICAgIHJldHVybiBmZXRjaChgJHtEYXRhYmFzZUFQSS5yb290VVJMfS9wcm9qZWN0cy8ke3Byb2pJZH0vdGFza3NgKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5qc29uKCkpXHJcbiAgICAgIC50aGVuKCh0YXNrRGF0YTogYW55KSA9PiBEYXRhYmFzZUFQSS5jb252ZXJ0VGFza0Zyb21EYlRvTXZjKHRhc2tEYXRhKSk7XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgYXN5bmMgdXBkYXRlVGFza3ModGFza3M6IFRhc2tbXSkge1xyXG4gICAgbGV0IHByb21pc2VzOiBQcm9taXNlPHZvaWQ+W10gPSBbXTtcclxuICAgIHRhc2tzLmZvckVhY2goKHRhc2s6IFRhc2spID0+IHtcclxuICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICBuZXcgUHJvbWlzZSgoKSA9PiB7XHJcbiAgICAgICAgICBmZXRjaChgJHtEYXRhYmFzZUFQSS5yb290VVJMfS90YXNrcy8ke3Rhc2subW9kZWwuZ2V0SWQoKX1gLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICBuYW1lOiB0YXNrLm1vZGVsLm5hbWUsXHJcbiAgICAgICAgICAgICAgc3RhdGU6IHRhc2subW9kZWwuZ2V0U3RhdGUoKSxcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGljIGFzeW5jIGFkZFRhc2tzKHRhc2tzOiBUYXNrW10sIHByb2plY3RJZDogbnVtYmVyKSB7XHJcbiAgICBsZXQgcHJvbWlzZXM6IFByb21pc2U8dm9pZD5bXSA9IFtdO1xyXG4gICAgdGFza3MuZm9yRWFjaCgodGFzazogVGFzaykgPT4ge1xyXG4gICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgIG5ldyBQcm9taXNlKCgpID0+IHtcclxuICAgICAgICAgICQuYWpheCh7XHJcbiAgICAgICAgICAgIHVybDogYCR7RGF0YWJhc2VBUEkucm9vdFVSTH0vdGFza3NgLFxyXG4gICAgICAgICAgICB0eXBlOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICBuYW1lOiB0YXNrLm1vZGVsLm5hbWUsXHJcbiAgICAgICAgICAgICAgc3RhdGU6IHRhc2subW9kZWwuZ2V0U3RhdGUoKSxcclxuICAgICAgICAgICAgICBwcm9qZWN0SWQ6IHByb2plY3RJZFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgfVxyXG5cclxuICAvLyNlbmRyZWdpb24gVEFTSyB0YWJsZSBtZXRob2RzXHJcbn0iLCJpbXBvcnQgeyBNYW5hZ2VyTW9kZWwgfSBmcm9tICcuL21vZGVsJztcclxuaW1wb3J0IHsgTWFuYWdlclZpZXcgfSBmcm9tICcuL3ZpZXcnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hbmFnZXIge1xyXG4gICAgcHVibGljIG1vZGVsOiBNYW5hZ2VyTW9kZWw7XHJcbiAgICBwdWJsaWMgdmlldzogTWFuYWdlclZpZXc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbCA9IG5ldyBNYW5hZ2VyTW9kZWwoKTtcclxuICAgICAgICB0aGlzLnZpZXcgPSBuZXcgTWFuYWdlclZpZXcoKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KHBhcmVudDogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLm1vZGVsLmxvYWRMb2dnZWRJblVzZXIoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy52aWV3LmRyYXcocGFyZW50LCB0aGlzLm1vZGVsKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEYXRhYmFzZUFQSSB9IGZyb20gXCIuLi9kYXRhYmFzZUFQSVwiO1xyXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4uL3Byb2plY3QvY29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uL3VzZXIvY29udHJvbGxlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hbmFnZXJNb2RlbCB7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRVc2VyOiBVc2VyO1xyXG5cclxuICAgIGFzeW5jIGxvYWRMb2dnZWRJblVzZXIoKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFVzZXJJZCA9IHRoaXMuZ2V0VXNlckNvb2tpZSgpO1xyXG4gICAgICAgIGlmIChjdXJyZW50VXNlcklkID09PSAtMSlcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IG51bGw7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSBhd2FpdCBEYXRhYmFzZUFQSS5nZXRVc2VyQnlJZChOdW1iZXIoY3VycmVudFVzZXJJZCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRDdXJyZW50VXNlcigpOiBVc2VyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50VXNlcjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRVc2VyQ29va2llKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50VXNlciA9PT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG5cclxuICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgZC5zZXRUaW1lKGQuZ2V0VGltZSgpICsgKDcgKiAyNCAqIDYwICogNjAgKiAxMDAwKSk7ICAgICAvLyBleHBpcmVzIGluIDcgZGF5c1xyXG4gICAgICAgIHZhciBleHBpcmVzID0gJ2V4cGlyZXM9JyArIGQudG9VVENTdHJpbmcoKTtcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBgdXNlcklkPSR7aWR9OyBleHBpcmVzPSR7ZXhwaXJlc307IHBhdGg9LztgO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHJldHVybnMgdXNlcidzIGlkIHN0b3JlZCBpbiBjb29raWVzIChvciAtMSBpZiB0aGVyZSdzIG5vIGNvb2tpZSlcclxuICAgICAqL1xyXG4gICAgZ2V0VXNlckNvb2tpZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHZhciBuYW1lID0gJ3VzZXJJZD0nO1xyXG4gICAgICAgIHZhciBkZWNvZGVkQ29va2llID0gZGVjb2RlVVJJQ29tcG9uZW50KGRvY3VtZW50LmNvb2tpZSk7XHJcbiAgICAgICAgdmFyIGNvb2tpZUFycmF5ID0gZGVjb2RlZENvb2tpZS5zcGxpdCgnOycpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29va2llQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGNvb2tpZSA9IGNvb2tpZUFycmF5W2ldO1xyXG4gICAgICAgICAgICB3aGlsZSAoY29va2llLmNoYXJBdCgwKSA9PSAnICcpIHtcclxuICAgICAgICAgICAgICAgIGNvb2tpZSA9IGNvb2tpZS5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjb29raWUuaW5kZXhPZihuYW1lKSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyKGNvb2tpZS5zdWJzdHJpbmcobmFtZS5sZW5ndGgsIGNvb2tpZS5sZW5ndGgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBOaWNrbmFtZXMgY2FuIGNvbnNpc3Qgb2Y6XHJcbiAgICAgKiBsb3dlciBjYXNlIGxldHRlcnMsXHJcbiAgICAgKiB1cHBlciBjYXNlIGxldHRlcnMsXHJcbiAgICAgKiBudW1iZXJzLFxyXG4gICAgICogdW5kZXJzY29yZXMgYW5kXHJcbiAgICAgKiBkb3RzLlxyXG4gICAgICovXHJcbiAgICB2YWxpZGF0ZUlucHV0RGF0YShuaWNrbmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKG5pY2tuYW1lID09PSAnJyB8fCBwYXNzd29yZCA9PT0gJycpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKG5pY2tuYW1lLmxlbmd0aCA8IDQgfHwgbmlja25hbWUubGVuZ3RoID4gMTUpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKHBhc3N3b3JkLmxlbmd0aCA8IDQgfHwgcGFzc3dvcmQubGVuZ3RoID4gMTUpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc3QgbWF0Y2hlc1JlZ2V4ID0gL15bYS16QS1aMC05X1xcLl0rJC8uZXhlYyhuaWNrbmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIChtYXRjaGVzUmVnZXggIT09IG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHJldHVybnMgYSBsb2dpbiByZXN1bHQgbWVzc2FnZSAoJ3N1Y2Nlc3MnIGlmIGxvZ2luIHN1Y2Nlc3NmdWwpXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHRyeUxvZ2luVXNlcihuaWNrbmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgRGF0YWJhc2VBUEkuZ2V0VXNlckJ5Tmlja25hbWUobmlja25hbWUpO1xyXG4gICAgICAgIGlmICh1c2VyID09PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm4gJ3VzZXIgZG9lc25cXCd0IGV4aXN0JztcclxuXHJcbiAgICAgICAgaWYgKHVzZXIubW9kZWwuZ2V0UGFzc3dvcmQoKSAhPT0gcGFzc3dvcmQpXHJcbiAgICAgICAgICAgIHJldHVybiAnd3JvbmcgcGFzc3dvcmQnO1xyXG5cclxuICAgICAgICAvLyBzYXZlIGN1cnJlbnQgdXNlciBpbiBjb29raWVzXHJcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IHVzZXI7XHJcbiAgICAgICAgdGhpcy5zZXRVc2VyQ29va2llKHRoaXMuY3VycmVudFVzZXIubW9kZWwuZ2V0SWQoKSk7XHJcbiAgICAgICAgcmV0dXJuICdzdWNjZXNzJztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm5zIGEgc2lnbiB1cCByZXN1bHQgbWVzc2FnZSAoJ3N1Y2Nlc3MnIGlmIGxvZ2luIHN1Y2Nlc3NmdWwpXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHRyeVNpZ25VcFVzZXIobmlja25hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgY29uc3QgdXNlcldpdGhTYW1lTmlja25hbWUgPSBhd2FpdCBEYXRhYmFzZUFQSS5nZXRVc2VyQnlOaWNrbmFtZShuaWNrbmFtZSk7XHJcbiAgICAgICAgaWYgKHVzZXJXaXRoU2FtZU5pY2tuYW1lICE9PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm4gJ25pY2tuYW1lIGFscmVhZHkgdGFrZW4nO1xyXG5cclxuICAgICAgICBjb25zdCBuZXdVc2VyID0gYXdhaXQgRGF0YWJhc2VBUEkuYWRkVXNlcihuaWNrbmFtZSwgcGFzc3dvcmQpO1xyXG5cclxuICAgICAgICAvLyBzYXZlIGN1cnJlbnQgdXNlciBpbiBjb29raWVzXHJcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IGF3YWl0IERhdGFiYXNlQVBJLmdldFVzZXJCeUlkKG5ld1VzZXIuaWQpO1xyXG4gICAgICAgIHRoaXMuc2V0VXNlckNvb2tpZSh0aGlzLmN1cnJlbnRVc2VyLm1vZGVsLmdldElkKCkpO1xyXG4gICAgICAgIHJldHVybiAnc3VjY2Vzcyc7XHJcbiAgICB9XHJcblxyXG4gICAgbG9nb3V0VXNlcigpIHtcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSAndXNlcklkPTtleHBpcmVzPVRodSwgMDEgSmFuIDE5NzAgMDA6MDA6MDEgR01UOyBwYXRoPS8nO1xyXG4gICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBzaG9ydGVuU3RyaW5nKHM6IHN0cmluZywgbGVuZ3RoOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmIChzLmxlbmd0aCA8PSBsZW5ndGgpIHJldHVybiBzO1xyXG5cclxuICAgICAgICAvLyByZW1vdmUgbGFzdCAzIGxldHRlcnNcclxuICAgICAgICBsZXQgc2hvcnRTdHIgPSBzLnN1YnN0cigwLCBsZW5ndGggLSAzKTtcclxuXHJcbiAgICAgICAgLy8gcmVtb3ZlIHdoaXRlIHNwYWNlIGF0IHRoZSBlbmRcclxuICAgICAgICBpZiAoc2hvcnRTdHIuY2hhckF0KHNob3J0U3RyLmxlbmd0aCAtIDEpID09PSAnICcpXHJcbiAgICAgICAgICAgIHNob3J0U3RyID0gc2hvcnRTdHIuc2xpY2UoMCwgc2hvcnRTdHIubGVuZ3RoIC0gMSk7XHJcblxyXG4gICAgICAgIHJldHVybiBzaG9ydFN0ciArICcuLi4nO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZE5ld1Byb2plY3QocDogUHJvamVjdCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIubW9kZWwuYWRkUHJvamVjdChwKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IERhdGFiYXNlQVBJIH0gZnJvbSAnLi4vZGF0YWJhc2VBUEknO1xyXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi4vcHJvamVjdC9jb250cm9sbGVyJztcclxuaW1wb3J0IHsgUHJvamVjdFZpZXcgfSBmcm9tICcuLi9wcm9qZWN0L3ZpZXcnO1xyXG5pbXBvcnQgeyBUYXNrU3RhdGUgfSBmcm9tICcuLi90YXNrU3RhdGUnO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vdXNlci9jb250cm9sbGVyJztcclxuaW1wb3J0IHsgTWFuYWdlck1vZGVsIH0gZnJvbSAnLi9tb2RlbCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFuYWdlclZpZXcge1xyXG4gIHByaXZhdGUgcGFyZW50OiBIVE1MRWxlbWVudDtcclxuICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRoaXMuY29udGFpbmVyLmNsYXNzTmFtZSA9ICdtYW5hZ2VyJztcclxuICB9XHJcblxyXG4gIGRyYXcocGFyZW50OiBIVE1MRWxlbWVudCwgbW9kZWw6IE1hbmFnZXJNb2RlbCkge1xyXG4gICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XHJcbiAgICB0aGlzLnBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRhaW5lcik7XHJcblxyXG4gICAgLy8gY2hlY2sgZm9yIHNhdmVkIHVzZXIgaW4gY29va2llc1xyXG4gICAgaWYgKG1vZGVsLmdldFVzZXJDb29raWUoKSA9PT0gLTEpIHRoaXMuZHJhd0xvZ2luUGFnZShtb2RlbCk7XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5kcmF3UHJvZmlsZUhlYWRlcihtb2RlbCk7XHJcblxyXG4gICAgICBjb25zdCB1c2VyID0gbW9kZWwuZ2V0Q3VycmVudFVzZXIoKTtcclxuICAgICAgdGhpcy5kcmF3RGFzaGJvYXJkKHVzZXIubW9kZWwuZ2V0UHJvamVjdHMoKSwgbW9kZWwpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZHJhd0xvZ2luUGFnZShtb2RlbDogTWFuYWdlck1vZGVsKSB7XHJcbiAgICBjb25zdCBsb2dpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbG9naW5Db250YWluZXIuY2xhc3NOYW1lID0gJ2xvZ2luQ29udGFpbmVyJztcclxuXHJcbiAgICBjb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBsb2dvLmNsYXNzTmFtZSA9ICdpbWdTdGFydFBhZ2UnO1xyXG4gICAgbG9naW5Db250YWluZXIuYXBwZW5kQ2hpbGQobG9nbyk7XHJcblxyXG4gICAgY29uc3QgbGJsVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbGJsVGl0bGUuaW5uZXJIVE1MID0gJ1Byb2plY3QgbWFuYWdlcic7XHJcbiAgICBsYmxUaXRsZS5jbGFzc05hbWUgPSAndGl0bGUnO1xyXG4gICAgbG9naW5Db250YWluZXIuYXBwZW5kQ2hpbGQobGJsVGl0bGUpO1xyXG5cclxuICAgIGNvbnN0IGJ0bkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYnRuQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdidG5Db250YWluZXInO1xyXG5cclxuICAgIGNvbnN0IGJ0blNpZ25VcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnRuU2lnblVwLmlkID0gJ2J0blNpZ25VcCc7XHJcbiAgICBidG5TaWduVXAuY2xhc3NOYW1lID0gJ2J0biBidG4tc3VjY2Vzcyc7XHJcbiAgICBidG5TaWduVXAuaW5uZXJIVE1MID0gJ1NpZ24gdXAnO1xyXG4gICAgYnRuU2lnblVwLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgIGJ0bkNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XHJcbiAgICAgIHNpZ25VcEZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xyXG5cclxuICAgICAgLy8gZm9jdXMgb24gbmlja25hbWUgaW5wdXQgZmllbGQgYWZ0ZXIgYW5pbWF0aW9uXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dFNpZ25VcE5pY2tuYW1lJykuZm9jdXMoKTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9O1xyXG4gICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0blNpZ25VcCk7XHJcblxyXG4gICAgY29uc3QgYnRuTG9naW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ0bkxvZ2luLmlkID0gJ2J0bkxvZ2luJztcclxuICAgIGJ0bkxvZ2luLmNsYXNzTmFtZSA9ICdidG4gYnRuLWxpZ2h0JztcclxuICAgIGJ0bkxvZ2luLmlubmVySFRNTCA9ICdMb2cgaW4nO1xyXG4gICAgYnRuTG9naW4ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgYnRuQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcclxuICAgICAgbG9naW5Gb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcclxuXHJcbiAgICAgIC8vIGZvY3VzIG9uIG5pY2tuYW1lIGlucHV0IGZpZWxkIGFmdGVyIGFuaW1hdGlvblxyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRMb2dpbk5pY2tuYW1lJykuZm9jdXMoKTtcclxuICAgICAgfSwgMTAwMCk7XHJcbiAgICB9O1xyXG4gICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkxvZ2luKTtcclxuICAgIGxvZ2luQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcik7XHJcblxyXG4gICAgLy8gZHJhdyBsb2dpbiBhbmQgc2luZyB1cCBmb3Jtc1xyXG4gICAgY29uc3QgbG9naW5Gb3JtID0gdGhpcy5kcmF3Rm9ybShsb2dpbkNvbnRhaW5lciwgYnRuQ29udGFpbmVyLCB7XHJcbiAgICAgIGZvcm1UeXBlOiAnTG9naW4nLFxyXG4gICAgICBsYmxUZXh0OiAnTG9nIGluIHRvIFByb2plY3QgTWFuYWdlcicsXHJcbiAgICAgIGJ0blRleHQ6ICdMb2cgaW4nLFxyXG4gICAgICBjYWxsYmFja0Z1bmN0aW9uOiAoKSA9PiB7XHJcbiAgICAgICAgLy8gbG9hZGluZyBhbmltYXRpb25cclxuICAgICAgICBjb25zdCBhbmltYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBhbmltYXRpb24uY2xhc3NOYW1lID1cclxuICAgICAgICAgICdzcGlubmVyLWJvcmRlciBzcGlubmVyLWJvcmRlci1zbSB0ZXh0LWxpZ2h0JztcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuTG9naW5Ob3cnKS5pbm5lckhUTUwgPVxyXG4gICAgICAgICAgYW5pbWF0aW9uLm91dGVySFRNTDtcclxuXHJcbiAgICAgICAgLy8gbG9naW5cclxuICAgICAgICB0aGlzLnRyeUxvZ2luKG1vZGVsLCBsb2dpbkZvcm0pO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBzaWduVXBGb3JtID0gdGhpcy5kcmF3Rm9ybShsb2dpbkNvbnRhaW5lciwgYnRuQ29udGFpbmVyLCB7XHJcbiAgICAgIGZvcm1UeXBlOiAnU2lnblVwJyxcclxuICAgICAgbGJsVGV4dDogJ1NpZ24gdXAgdG8gUHJvamVjdCBNYW5hZ2VyJyxcclxuICAgICAgYnRuVGV4dDogJ1NpZ24gdXAnLFxyXG4gICAgICBjYWxsYmFja0Z1bmN0aW9uOiAoKSA9PiB7XHJcbiAgICAgICAgLy8gbG9hZGluZyBhbmltYXRpb25cclxuICAgICAgICBjb25zdCBhbmltYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBhbmltYXRpb24uY2xhc3NOYW1lID1cclxuICAgICAgICAgICdzcGlubmVyLWJvcmRlciBzcGlubmVyLWJvcmRlci1zbSB0ZXh0LWxpZ2h0JztcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuU2lnblVwTm93JykuaW5uZXJIVE1MID1cclxuICAgICAgICAgIGFuaW1hdGlvbi5vdXRlckhUTUw7XHJcblxyXG4gICAgICAgIC8vIGxvZ2luXHJcbiAgICAgICAgdGhpcy50cnlTaWduVXAobW9kZWwsIHNpZ25VcEZvcm0pO1xyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQobG9naW5Db250YWluZXIpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIGRhdGEgcmVxdWlyZXMgQ09MT1IsIFRJVExFIGFuZCBNRVNTQUdFIHByb3BlcnR5XHJcbiAgICovXHJcbiAgc3RhdGljIGRpc3BsYXlQb3B1cChkYXRhOiBhbnkpIHtcclxuICAgIHZhciB0b2FzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2FzdE5vdGlmJyk7XHJcbiAgICBpZiAodG9hc3QgIT09IG51bGwpIHRvYXN0LnJlbW92ZSgpO1xyXG4gICAgdG9hc3QgPSBNYW5hZ2VyVmlldy5jcmVhdGVQb3B1cChkYXRhKTtcclxuICAgICQoJy5tYW5hZ2VyJylbMF0uYXBwZW5kQ2hpbGQodG9hc3QpO1xyXG5cclxuICAgICg8YW55PiQoJyN0b2FzdE5vdGlmJykpLnRvYXN0KHsgZGVsYXk6IDQwMDAgfSk7XHJcbiAgICAoPGFueT4kKCcjdG9hc3ROb3RpZicpKS50b2FzdCgnc2hvdycpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdGF0aWMgY3JlYXRlUG9wdXAoZGF0YTogYW55KSB7XHJcbiAgICBjb25zdCB0b2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdG9hc3QuY2xhc3NOYW1lID0gJ3RvYXN0JztcclxuICAgIHRvYXN0LmlkID0gJ3RvYXN0Tm90aWYnO1xyXG5cclxuICAgIGNvbnN0IHRvYXN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0b2FzdEhlYWRlci5jbGFzc05hbWUgPSAndG9hc3QtaGVhZGVyJztcclxuICAgIHRvYXN0LmFwcGVuZENoaWxkKHRvYXN0SGVhZGVyKTtcclxuXHJcbiAgICBjb25zdCBzdGF0dXNJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzdGF0dXNJY29uLmNsYXNzTmFtZSA9ICdzdGF0dXNJY29uJztcclxuICAgIHN0YXR1c0ljb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZGF0YS5jb2xvcjtcclxuICAgIHRvYXN0SGVhZGVyLmFwcGVuZENoaWxkKHN0YXR1c0ljb24pO1xyXG5cclxuICAgIGNvbnN0IGxibEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0cm9uZycpO1xyXG4gICAgbGJsSGVhZGVyLmNsYXNzTmFtZSA9ICdtci1hdXRvJztcclxuICAgIGxibEhlYWRlci5pbm5lckhUTUwgPSBkYXRhLnRpdGxlO1xyXG4gICAgdG9hc3RIZWFkZXIuYXBwZW5kQ2hpbGQobGJsSGVhZGVyKTtcclxuXHJcbiAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc21hbGwnKTtcclxuICAgIHRvYXN0SGVhZGVyLmFwcGVuZENoaWxkKHRpbWUpO1xyXG5cclxuICAgIGNvbnN0IGJ0bkNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICB0b2FzdEhlYWRlci5hcHBlbmRDaGlsZChidG5DbG9zZSk7XHJcbiAgICBidG5DbG9zZS50eXBlID0gJ2J1dHRvbic7XHJcbiAgICBidG5DbG9zZS5jbGFzc05hbWUgPSAnbWwtMiBtYi0xIGNsb3NlJztcclxuICAgIGJ0bkNsb3NlLnNldEF0dHJpYnV0ZSgnZGF0YS1kaXNtaXNzJywgJ3RvYXN0Jyk7XHJcbiAgICB0b2FzdEhlYWRlci5hcHBlbmRDaGlsZChidG5DbG9zZSk7XHJcblxyXG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIHNwYW4uaW5uZXJIVE1MID0gJyZ0aW1lczsnO1xyXG4gICAgYnRuQ2xvc2UuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcblxyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYm9keS5jbGFzc05hbWUgPSAndG9hc3QtYm9keSc7XHJcbiAgICBib2R5LmlubmVySFRNTCA9IGRhdGEubWVzc2FnZTtcclxuICAgIHRvYXN0LmFwcGVuZENoaWxkKGJvZHkpO1xyXG5cclxuICAgIHJldHVybiB0b2FzdDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSBkYXRhIHJlcXVpcmVzIENPTE9SLCBUSVRMRSwgTUVTU0FHRSBhbmQgQlVUVE9OUyBwcm9wZXJ0eS5cclxuICAgKiBFYWNoIGJ1dHRvbiByZXF1aXJlcyBURVhULCBUWVBFIChjbGFzcyBuYW1lKSBhbmQgQ0FMTEJBQ0sgRlVOQ1RJT04uXHJcbiAgICovXHJcbiAgc3RhdGljIGRpc3BsYXlNb2RhbChkYXRhOiBhbnkpIHtcclxuICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb2RhbERpYWxvZycpO1xyXG4gICAgaWYgKG1vZGFsICE9PSBudWxsKSBtb2RhbC5yZW1vdmUoKTtcclxuICAgIG1vZGFsID0gTWFuYWdlclZpZXcuY3JlYXRlTW9kYWwoZGF0YSk7XHJcbiAgICAkKCcubWFuYWdlcicpWzBdLmFwcGVuZENoaWxkKG1vZGFsKTtcclxuXHJcbiAgICAoPGFueT4kKCcjbW9kYWxEaWFsb2cnKSkubW9kYWwoJ3Nob3cnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGNyZWF0ZU1vZGFsKGRhdGE6IGFueSkge1xyXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1vZGFsLmlkID0gJ21vZGFsRGlhbG9nJztcclxuICAgIG1vZGFsLmNsYXNzTmFtZSA9ICdtb2RhbCBmYWRlJztcclxuICAgIG1vZGFsLnRhYkluZGV4ID0gLTE7XHJcblxyXG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkaWFsb2cuY2xhc3NOYW1lID0gJ21vZGFsLWRpYWxvZyBtb2RhbC1kaWFsb2ctY2VudGVyZWQnO1xyXG5cclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRlbnQuY2xhc3NOYW1lID0gJ21vZGFsLWNvbnRlbnQnO1xyXG5cclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaGVhZGVyLmNsYXNzTmFtZSA9ICdtb2RhbC1oZWFkZXInO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDUnKTtcclxuICAgIHRpdGxlLmNsYXNzTmFtZSA9ICdtb2RhbC10aXRsZSc7XHJcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBkYXRhLnRpdGxlO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcclxuXHJcbiAgICBjb25zdCBidG5DbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGJ0bkNsb3NlKTtcclxuICAgIGJ0bkNsb3NlLmNsYXNzTmFtZSA9ICdjbG9zZSc7XHJcbiAgICBidG5DbG9zZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtZGlzbWlzcycsICdtb2RhbCcpO1xyXG4gICAgYnRuQ2xvc2UuaW5uZXJIVE1MID0gJzxzcGFuPiZ0aW1lczs8L3NwYW4+JztcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuXHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBib2R5LmNsYXNzTmFtZSA9ICdtb2RhbC1ib2R5JztcclxuXHJcbiAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBwYXJhZ3JhcGguaW5uZXJIVE1MID0gZGF0YS5tZXNzYWdlO1xyXG4gICAgYm9keS5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChib2R5KTtcclxuXHJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGZvb3Rlci5jbGFzc05hbWUgPSAnbW9kYWwtZm9vdGVyJztcclxuXHJcbiAgICBkYXRhLmJ1dHRvbnMuZm9yRWFjaCgoYnRuOiBhbnkpID0+IHtcclxuICAgICAgY29uc3QgYnRuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICBidG5FbGVtZW50LmNsYXNzTmFtZSA9IGBidG4gYnRuLSR7YnRuLnR5cGV9IGJ0bk1vZGFsYDtcclxuICAgICAgYnRuRWxlbWVudC5pbm5lckhUTUwgPSBidG4udGV4dDtcclxuICAgICAgYnRuRWxlbWVudC5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIGJ0bi5jYWxsYmFjaygpO1xyXG4gICAgICAgICg8YW55PiQoJyNtb2RhbERpYWxvZycpKS5tb2RhbCgndG9nZ2xlJyk7XHJcbiAgICAgIH07XHJcbiAgICAgIGZvb3Rlci5hcHBlbmRDaGlsZChidG5FbGVtZW50KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxuICAgIGRpYWxvZy5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuICAgIG1vZGFsLmFwcGVuZENoaWxkKGRpYWxvZyk7XHJcbiAgICByZXR1cm4gbW9kYWw7XHJcbiAgfVxyXG5cclxuICBkcmF3Rm9ybShcclxuICAgIHBhcmVudDogSFRNTEVsZW1lbnQsXHJcbiAgICBidG5Db250YWluZXI6IEhUTUxFbGVtZW50LFxyXG4gICAgZGF0YTogYW55XHJcbiAgKTogSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3QgbG9naW5Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsb2dpbkZvcm0uY2xhc3NOYW1lID0gJ2xvZ2luRm9ybSBoaWRlJztcclxuXHJcbiAgICBjb25zdCBsYmxMb2dpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBsYmxMb2dpbi5pbm5lckhUTUwgPSBkYXRhLmxibFRleHQ7XHJcbiAgICBsYmxMb2dpbi5pZCA9ICdsYmxMb2dpbic7XHJcbiAgICBsb2dpbkZvcm0uYXBwZW5kQ2hpbGQobGJsTG9naW4pO1xyXG5cclxuICAgIGNvbnN0IGlucHV0Tmlja25hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgaW5wdXROaWNrbmFtZS5pZCA9IGBpbnB1dCR7ZGF0YS5mb3JtVHlwZX1OaWNrbmFtZWA7XHJcbiAgICBpbnB1dE5pY2tuYW1lLnR5cGUgPSAndGV4dCc7XHJcbiAgICBpbnB1dE5pY2tuYW1lLmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wnO1xyXG4gICAgaW5wdXROaWNrbmFtZS5wbGFjZWhvbGRlciA9ICdOaWNrbmFtZSc7XHJcbiAgICBsb2dpbkZvcm0uYXBwZW5kQ2hpbGQoaW5wdXROaWNrbmFtZSk7XHJcblxyXG4gICAgY29uc3QgaW5wdXRQYXNzd29yZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBpbnB1dFBhc3N3b3JkLmlkID0gYGlucHV0JHtkYXRhLmZvcm1UeXBlfVBhc3N3b3JkYDtcclxuICAgIGlucHV0UGFzc3dvcmQudHlwZSA9ICdwYXNzd29yZCc7XHJcbiAgICBpbnB1dFBhc3N3b3JkLmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wnO1xyXG4gICAgaW5wdXRQYXNzd29yZC5wbGFjZWhvbGRlciA9ICdQYXNzd29yZCc7XHJcbiAgICBpbnB1dFBhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcclxuICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgICAgZGF0YS5jYWxsYmFja0Z1bmN0aW9uKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3JlZnJlc2hlZCcpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGxvZ2luRm9ybS5hcHBlbmRDaGlsZChpbnB1dFBhc3N3b3JkKTtcclxuXHJcbiAgICBjb25zdCBidG5Mb2dpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnRuTG9naW4uaWQgPSBgYnRuJHtkYXRhLmZvcm1UeXBlfU5vd2A7XHJcbiAgICBidG5Mb2dpbi5jbGFzc05hbWUgPSAnYnRuIGJ0bi1zdWNjZXNzJztcclxuICAgIGJ0bkxvZ2luLmlubmVySFRNTCA9IGRhdGEuYnRuVGV4dDtcclxuICAgIGJ0bkxvZ2luLm9uY2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICBkYXRhLmNhbGxiYWNrRnVuY3Rpb24oKTtcclxuICAgICAgY29uc29sZS5sb2coJ3JlZnJlc2hlZCcpO1xyXG4gICAgfTtcclxuICAgIGxvZ2luRm9ybS5hcHBlbmRDaGlsZChidG5Mb2dpbik7XHJcblxyXG4gICAgY29uc3QgYnRuR29CYWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidG5Hb0JhY2suY2xhc3NOYW1lID0gJ2J0biBidG4tbGluayc7XHJcbiAgICBidG5Hb0JhY2suaW5uZXJIVE1MID0gJ0JhY2snO1xyXG4gICAgYnRuR29CYWNrLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgIGxvZ2luRm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XHJcbiAgICAgIGJ0bkNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XHJcbiAgICB9O1xyXG4gICAgbG9naW5Gb3JtLmFwcGVuZENoaWxkKGJ0bkdvQmFjayk7XHJcblxyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGxvZ2luRm9ybSk7XHJcbiAgICByZXR1cm4gbG9naW5Gb3JtO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgdHJ5TG9naW4obW9kZWw6IE1hbmFnZXJNb2RlbCwgbG9naW5Gb3JtOiBIVE1MRWxlbWVudCkge1xyXG4gICAgY29uc3Qgbm4gPSAoXHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dExvZ2luTmlja25hbWUnKSBhcyBIVE1MSW5wdXRFbGVtZW50XHJcbiAgICApLnZhbHVlO1xyXG4gICAgY29uc3QgcHN3ZCA9IChcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0TG9naW5QYXNzd29yZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnRcclxuICAgICkudmFsdWU7XHJcbiAgICBsZXQgZXJyb3JNc2c6IHN0cmluZyA9ICdMb2dpbiBmYWlsZWQ6ICc7XHJcbiAgICBsZXQgbG9naW5Nc2cgPSAnJztcclxuICAgIGlmIChtb2RlbC52YWxpZGF0ZUlucHV0RGF0YShubiwgcHN3ZCkpIHtcclxuICAgICAgbG9naW5Nc2cgPSBhd2FpdCBtb2RlbC50cnlMb2dpblVzZXIobm4sIHBzd2QpO1xyXG4gICAgICBpZiAobG9naW5Nc2cgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgIC8vIHJlbW92ZSBsb2dpbiBwYWdlXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW1nU3RhcnRQYWdlJylbMF0ucmVtb3ZlKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbG9naW5Db250YWluZXInKVswXS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgLy8gZHJhdyBkYXNoYm9hcmRcclxuICAgICAgICB0aGlzLmRyYXdQcm9maWxlSGVhZGVyKG1vZGVsKTtcclxuICAgICAgICBjb25zdCB1c2VyID0gbW9kZWwuZ2V0Q3VycmVudFVzZXIoKTtcclxuICAgICAgICB0aGlzLmRyYXdEYXNoYm9hcmQodXNlci5tb2RlbC5nZXRQcm9qZWN0cygpLCBtb2RlbCk7XHJcblxyXG4gICAgICAgIC8vIGRpc3BsYXkgc3VjY2VzcyBtZXNzYWdlXHJcbiAgICAgICAgTWFuYWdlclZpZXcuZGlzcGxheVBvcHVwKHtcclxuICAgICAgICAgIGNvbG9yOiAnZ3JlZW4nLFxyXG4gICAgICAgICAgdGl0bGU6ICdMb2dpbiBzdWNjZXNzZnVsJyxcclxuICAgICAgICAgIG1lc3NhZ2U6ICdXZWxjb21lIGJhY2sgdG8gdGhlIFByb2plY3QgTWFuYWdlciEnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgZXJyb3JNc2cgKz0gbG9naW5Nc2c7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBlcnJvck1zZyArPSAnSW52YWxpZCBpbnB1dC4nO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsb2dpbk1zZyAhPT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgIGxldCBsYmxFcnJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYmxFcnJvcicpO1xyXG4gICAgICBpZiAobGJsRXJyb3IgPT09IG51bGwpIGxibEVycm9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgbGJsRXJyb3IuaWQgPSAnbGJsRXJyb3InO1xyXG4gICAgICBsYmxFcnJvci5pbm5lckhUTUwgPSBlcnJvck1zZztcclxuICAgICAgbG9naW5Gb3JtLmFwcGVuZENoaWxkKGxibEVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZW1vdmUgYW5pbWF0aW9uXHJcbiAgICBjb25zdCBsb2dpbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5Mb2dpbk5vdycpO1xyXG4gICAgaWYgKGxvZ2luQnRuICE9IG51bGwpIGxvZ2luQnRuLmlubmVySFRNTCA9ICdMb2cgaW4nO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgdHJ5U2lnblVwKG1vZGVsOiBNYW5hZ2VyTW9kZWwsIGxvZ2luRm9ybTogSFRNTEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IG5uID0gKFxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRTaWduVXBOaWNrbmFtZScpIGFzIEhUTUxJbnB1dEVsZW1lbnRcclxuICAgICkudmFsdWU7XHJcbiAgICBjb25zdCBwc3dkID0gKFxyXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRTaWduVXBQYXNzd29yZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnRcclxuICAgICkudmFsdWU7XHJcbiAgICBsZXQgZXJyb3JNc2c6IHN0cmluZyA9ICdTaWduIHVwIGZhaWxlZDogJztcclxuICAgIGxldCBzaWdudXBNc2cgPSAnJztcclxuICAgIGlmIChtb2RlbC52YWxpZGF0ZUlucHV0RGF0YShubiwgcHN3ZCkpIHtcclxuICAgICAgc2lnbnVwTXNnID0gYXdhaXQgbW9kZWwudHJ5U2lnblVwVXNlcihubiwgcHN3ZCk7XHJcbiAgICAgIGlmIChzaWdudXBNc2cgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgIC8vIHJlbW92ZSBsb2dpbiBwYWdlXHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW1nU3RhcnRQYWdlJylbMF0ucmVtb3ZlKCk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbG9naW5Db250YWluZXInKVswXS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgLy8gZHJhdyBkYXNoYm9hcmRcclxuICAgICAgICB0aGlzLmRyYXdQcm9maWxlSGVhZGVyKG1vZGVsKTtcclxuICAgICAgICBjb25zdCB1c2VyID0gbW9kZWwuZ2V0Q3VycmVudFVzZXIoKTtcclxuICAgICAgICB0aGlzLmRyYXdEYXNoYm9hcmQodXNlci5tb2RlbC5nZXRQcm9qZWN0cygpLCBtb2RlbCk7XHJcblxyXG4gICAgICAgIC8vIGRpc3BsYXkgc3VjY2VzcyBtZXNzYWdlXHJcbiAgICAgICAgTWFuYWdlclZpZXcuZGlzcGxheVBvcHVwKHtcclxuICAgICAgICAgIGNvbG9yOiAnZ3JlZW4nLFxyXG4gICAgICAgICAgdGl0bGU6ICdTaWduIHVwIHN1Y2Nlc3NmdWwnLFxyXG4gICAgICAgICAgbWVzc2FnZTogJ1dlbGNvbWUgdG8gdGhlIFByb2plY3QgTWFuYWdlciEnLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgZXJyb3JNc2cgKz0gc2lnbnVwTXNnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZXJyb3JNc2cgKz0gJ0ludmFsaWQgaW5wdXQuJztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc2lnbnVwTXNnICE9PSAnc3VjY2VzcycpIHtcclxuICAgICAgbGV0IGxibEVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xibEVycm9yJyk7XHJcbiAgICAgIGlmIChsYmxFcnJvciA9PT0gbnVsbCkgbGJsRXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICBsYmxFcnJvci5pZCA9ICdsYmxFcnJvcic7XHJcbiAgICAgIGxibEVycm9yLmlubmVySFRNTCA9IGVycm9yTXNnO1xyXG4gICAgICBsb2dpbkZvcm0uYXBwZW5kQ2hpbGQobGJsRXJyb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlbW92ZSBhbmltYXRpb25cclxuICAgIGNvbnN0IHNpZ251cEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5TaWduVXBOb3cnKTtcclxuICAgIGlmIChzaWdudXBCdG4gIT0gbnVsbCkgc2lnbnVwQnRuLmlubmVySFRNTCA9ICdTaWduIHVwJztcclxuICB9XHJcblxyXG4gIGRyYXdQcm9maWxlSGVhZGVyKG1vZGVsOiBNYW5hZ2VyTW9kZWwpIHtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaGVhZGVyLmNsYXNzTmFtZSA9ICdwcm9maWxlSGVhZGVyJztcclxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGhlYWRlcik7XHJcblxyXG4gICAgLy8gUHJvamVjdCBNYW5hZ2VyIGxhYmVsICh0b3AgbGVmdClcclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIHRpdGxlLmNsYXNzTmFtZSA9ICdoZWFkZXJUaXRsZSc7XHJcbiAgICB0aXRsZS5pbm5lckhUTUwgPSAnUHJvamVjdCBNYW5hZ2VyJztcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcblxyXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudS5jbGFzc05hbWUgPSAnaGVhZGVyTWVudSc7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobWVudSk7XHJcblxyXG4gICAgLy8gQWRkIHByb2plY3QgYnV0dG9uXHJcbiAgICBjb25zdCBidG5BZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidG5BZGRQcm9qZWN0LmNsYXNzTmFtZSA9ICdidG4gYnRuLXN1Y2Nlc3MgbWVudUJ1dHRvbic7XHJcbiAgICBidG5BZGRQcm9qZWN0LmlkID0gJ2J0bkFkZFByb2plY3QnO1xyXG4gICAgYnRuQWRkUHJvamVjdC5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAvLyBjbGVhciBkYXNoYm9hcmRcclxuICAgICAgbGV0IGRhc2hib2FyZCA9IDxIVE1MRWxlbWVudD5kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkYXNoYm9hcmQnKVswXTtcclxuICAgICAgaWYgKGRhc2hib2FyZCkge1xyXG4gICAgICAgIHdoaWxlIChkYXNoYm9hcmQuY2hpbGRyZW5bMF0pIGRhc2hib2FyZC5jaGlsZHJlblswXS5yZW1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICBkYXNoYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgfVxyXG4gICAgICBkYXNoYm9hcmQuY2xhc3NOYW1lID0gJ2Rhc2hib2FyZCc7XHJcblxyXG4gICAgICAvLyBkcmF3IHByb2plY3QgZWRpdG9yXHJcbiAgICAgIGNvbnN0IG5ld1Byb2o6IFByb2plY3RWaWV3ID0gbmV3IFByb2plY3RWaWV3KCk7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSBtb2RlbC5nZXRDdXJyZW50VXNlcigpO1xyXG4gICAgICBuZXdQcm9qLmRyYXdFZGl0b3IoZGFzaGJvYXJkLCBudWxsLCAoKSA9PiB0aGlzLmRyYXdEYXNoYm9hcmQodXNlci5tb2RlbC5nZXRQcm9qZWN0cygpLCBtb2RlbCksIG1vZGVsKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHBsdXNJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgcGx1c0ljb24uY2xhc3NOYW1lID0gJ2ZhcyBmYS1wbHVzJztcclxuICAgIGJ0bkFkZFByb2plY3QuYXBwZW5kQ2hpbGQocGx1c0ljb24pO1xyXG4gICAgbWVudS5hcHBlbmRDaGlsZChidG5BZGRQcm9qZWN0KTtcclxuXHJcbiAgICAvLyBEcm9wZG93biBidXR0b25zXHJcbiAgICB0aGlzLmRyYXdBY3Rpb25Ecm9wZG93bihtZW51LCBtb2RlbCk7XHJcbiAgICB0aGlzLmRyYXdTb3J0aW5nRHJvcGRvd24obWVudSwgbW9kZWwpO1xyXG4gICAgdGhpcy5kcmF3RmlsdGVyRHJvcGRvd24obWVudSwgbW9kZWwpO1xyXG4gICAgdGhpcy5kcmF3UHJvZmlsZURyb3Bkb3duKG1lbnUsIG1vZGVsKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBkcmF3RHJvcGRvd25CdXR0b24oXHJcbiAgICBwYXJlbnQ6IEhUTUxFbGVtZW50LFxyXG4gICAgYnRuSWQ6IHN0cmluZyxcclxuICAgIGl0ZW1zOiBIVE1MRWxlbWVudFtdXHJcbiAgKTogSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3QgZHJvcGRvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRyb3Bkb3duLmNsYXNzTmFtZSA9ICdkcm9wZG93bic7XHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZHJvcGRvd24pO1xyXG5cclxuICAgIGNvbnN0IGRyb3Bkb3duTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZHJvcGRvd25NZW51LmNsYXNzTmFtZSA9ICdkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtcmlnaHQnO1xyXG4gICAgZHJvcGRvd25NZW51LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbGxlZGJ5JywgYnRuSWQpO1xyXG4gICAgZHJvcGRvd24uYXBwZW5kQ2hpbGQoZHJvcGRvd25NZW51KTtcclxuXHJcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiBkcm9wZG93bk1lbnUuYXBwZW5kQ2hpbGQoaXRlbSkpO1xyXG5cclxuICAgIHJldHVybiBkcm9wZG93bjtcclxuICB9XHJcblxyXG4gIGRyYXdEYXNoYm9hcmQocHJvamVjdHM6IFByb2plY3RbXSwgbW9kZWw6IE1hbmFnZXJNb2RlbCkge1xyXG4gICAgaWYgKHByb2plY3RzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aGlzLmRyYXdFbXB0eURhc2hib2FyZChtb2RlbCk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZGFzaGJvYXJkID0gPEhUTUxFbGVtZW50PihcclxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGFzaGJvYXJkJylbMF1cclxuICAgICk7XHJcbiAgICBpZiAoIWRhc2hib2FyZCkgZGFzaGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkYXNoYm9hcmQuY2xhc3NOYW1lID0gJ2Rhc2hib2FyZCc7XHJcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qOiBQcm9qZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IHVzZXIgPSBtb2RlbC5nZXRDdXJyZW50VXNlcigpLm1vZGVsO1xyXG4gICAgICBwcm9qLmRyYXdQcmV2aWV3KGRhc2hib2FyZCwgKCkgPT4gdGhpcy5kcmF3RGFzaGJvYXJkKHByb2plY3RzLCBtb2RlbCksIG1vZGVsKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKGRhc2hib2FyZCk7XHJcbiAgfVxyXG5cclxuICBkcmF3RW1wdHlEYXNoYm9hcmQobW9kZWw6IE1hbmFnZXJNb2RlbCkge1xyXG4gICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2VtcHR5RGFzaGJvYXJkTWVzc2FnZScpWzBdKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWluZXIuY2xhc3NOYW1lID0gJ2VtcHR5RGFzaGJvYXJkTWVzc2FnZSc7XHJcblxyXG4gICAgY29uc3QgaW1nRW1wdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGltZ0VtcHR5LmNsYXNzTmFtZSA9ICdpbWdFbXB0eURhc2hib2FyZCc7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nRW1wdHkpO1xyXG5cclxuICAgIGNvbnN0IGxibE1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbGJsTWVzc2FnZS5jbGFzc05hbWUgPSAnbGJsRW1wdHlEYXNoYm9hcmQnO1xyXG4gICAgbGJsTWVzc2FnZS5pbm5lckhUTUwgPSAnWW91ciBkYXNoYm9hcmQgaXMgZW1wdHkuLi4nO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxibE1lc3NhZ2UpO1xyXG5cclxuICAgIGNvbnN0IGJ0bkFkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgYnRuQWRkLmlkID0gJ2J0bkFkZFByb2plY3RFbXB0eSc7XHJcbiAgICBidG5BZGQuY2xhc3NOYW1lID0gJ2J0biBidG4tc3VjY2Vzcyc7XHJcbiAgICBidG5BZGQub25jbGljayA9ICgpID0+IHtcclxuICAgICAgLy8gY2xlYXIgZGFzaGJvYXJkXHJcbiAgICAgIGxldCBkYXNoYm9hcmQgPSA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGFzaGJvYXJkJylbMF07XHJcbiAgICAgIGlmIChkYXNoYm9hcmQpIHtcclxuICAgICAgICB3aGlsZSAoZGFzaGJvYXJkLmNoaWxkcmVuWzBdKSBkYXNoYm9hcmQuY2hpbGRyZW5bMF0ucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgZGFzaGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgIH1cclxuICAgICAgZGFzaGJvYXJkLmNsYXNzTmFtZSA9ICdkYXNoYm9hcmQnO1xyXG5cclxuICAgICAgLy8gY2xlYXIgZW1wdHkgZGFzaGJvYXJkIG1lc3NhZ2VcclxuICAgICAgY29udGFpbmVyLnJlbW92ZSgpO1xyXG5cclxuICAgICAgY29uc3QgbmV3UHJvajogUHJvamVjdFZpZXcgPSBuZXcgUHJvamVjdFZpZXcoKTtcclxuICAgICAgY29uc3QgdXNlciA9IG1vZGVsLmdldEN1cnJlbnRVc2VyKCk7XHJcbiAgICAgIG5ld1Byb2ouZHJhd0VkaXRvcihkYXNoYm9hcmQsIG51bGwsICgpID0+IHRoaXMuZHJhd0Rhc2hib2FyZCh1c2VyLm1vZGVsLmdldFByb2plY3RzKCksIG1vZGVsKSwgbW9kZWwpO1xyXG4gICAgfVxyXG4gICAgYnRuQWRkLmlubmVySFRNTCA9XHJcbiAgICAgICc8aSBjbGFzcz1cImZhcyBmYS1wbHVzXCIgaWQ9XCJpY29uUGx1c1wiPjwvaT5BZGQgcHJvamVjdCc7XHJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuQWRkKTtcclxuXHJcbiAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG4gIH1cclxuXHJcbiAgZHJhd1Byb2ZpbGVEcm9wZG93bihwYXJlbnQ6IEhUTUxFbGVtZW50LCBtb2RlbDogTWFuYWdlck1vZGVsKSB7XHJcbiAgICAvLyBVc2VyIGRyb3Bkb3duIG1lbnVcclxuICAgIGxldCBkcm9wZG93bkl0ZW1zID0gW107XHJcblxyXG4gICAgLy8gVXNlciBuaWNrbmFtZVxyXG4gICAgY29uc3QgdXNlcjogVXNlciA9IG1vZGVsLmdldEN1cnJlbnRVc2VyKCk7XHJcbiAgICBjb25zdCBuaWNrbmFtZUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIG5pY2tuYW1lSXRlbS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICBuaWNrbmFtZUl0ZW0uY2xhc3NOYW1lID0gJ2Ryb3Bkb3duLWl0ZW0nO1xyXG4gICAgbmlja25hbWVJdGVtLmlubmVySFRNTCA9IGAjJHt1c2VyLm1vZGVsLmdldElkKCl9IHwgJHt1c2VyLm1vZGVsLm5pY2tuYW1lXHJcbiAgICAgIH1gO1xyXG4gICAgZHJvcGRvd25JdGVtcy5wdXNoKG5pY2tuYW1lSXRlbSk7XHJcblxyXG4gICAgLy8gTG9nb3V0IGJ1dHRvblxyXG4gICAgY29uc3QgYnRuTG9nb3V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgYnRuTG9nb3V0LmNsYXNzTmFtZSA9ICdkcm9wZG93bi1pdGVtJztcclxuICAgIGJ0bkxvZ291dC5pbm5lckhUTUwgPSAnTG9nIG91dCc7XHJcbiAgICBidG5Mb2dvdXQub25jbGljayA9ICgpID0+IG1vZGVsLmxvZ291dFVzZXIoKTtcclxuICAgIGRyb3Bkb3duSXRlbXMucHVzaChidG5Mb2dvdXQpO1xyXG5cclxuICAgIGNvbnN0IGRyb3Bkb3duID0gTWFuYWdlclZpZXcuZHJhd0Ryb3Bkb3duQnV0dG9uKFxyXG4gICAgICBwYXJlbnQsXHJcbiAgICAgICdidG5Qcm9maWxlRHJvcGRvd24nLFxyXG4gICAgICBkcm9wZG93bkl0ZW1zXHJcbiAgICApO1xyXG4gICAgY29uc3QgYnRuUHJvZmlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgZHJvcGRvd24uYXBwZW5kQ2hpbGQoYnRuUHJvZmlsZSk7XHJcbiAgICBidG5Qcm9maWxlLmNsYXNzTmFtZSA9ICdidG4gYnRuLWxpZ2h0IGRyb3Bkb3duLXRvZ2dsZSBtZW51QnV0dG9uJztcclxuICAgIGJ0blByb2ZpbGUuaWQgPSAnYnRuUHJvZmlsZURyb3Bkb3duJztcclxuICAgIGJ0blByb2ZpbGUuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICdkcm9wZG93bicpO1xyXG4gICAgYnRuUHJvZmlsZS5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXMgZmEtdXNlciBpY29uQ29sb3JcIj48L2k+JztcclxuICB9XHJcblxyXG4gIGRyYXdTb3J0aW5nRHJvcGRvd24ocGFyZW50OiBIVE1MRGl2RWxlbWVudCwgbW9kZWw6IE1hbmFnZXJNb2RlbCkge1xyXG4gICAgLy8gU29ydGluZyBkcm9wZG93blxyXG4gICAgbGV0IGRyb3Bkb3duSXRlbXM6IEhUTUxBbmNob3JFbGVtZW50W10gPSBbXTtcclxuXHJcbiAgICAvLyBTb3J0IGJ5IGRhdGUgYWRkZWRcclxuICAgIGNvbnN0IGJ0blNvcnREYXRlQWRkZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBidG5Tb3J0RGF0ZUFkZGVkLmNsYXNzTmFtZSA9ICdkcm9wZG93bi1pdGVtJztcclxuICAgIGJ0blNvcnREYXRlQWRkZWQuaW5uZXJIVE1MID0gJ0RhdGUgYWRkZWQg4pyTJztcclxuICAgIGJ0blNvcnREYXRlQWRkZWQub25jbGljayA9ICgpID0+XHJcbiAgICAgIHRoaXMuY2hhbmdlU29ydGluZ01ldGhvZChcclxuICAgICAgICAnZ2V0VGltZXN0YW1wJyxcclxuICAgICAgICBidG5Tb3J0RGF0ZUFkZGVkLFxyXG4gICAgICAgIGRyb3Bkb3duSXRlbXMsXHJcbiAgICAgICAgbW9kZWwsXHJcbiAgICAgICAgdHJ1ZVxyXG4gICAgICApO1xyXG4gICAgZHJvcGRvd25JdGVtcy5wdXNoKGJ0blNvcnREYXRlQWRkZWQpO1xyXG5cclxuICAgIC8vIFNvcnQgYnkgdXJnZW5jeVxyXG4gICAgY29uc3QgYnRuU29ydFVyZ2VuY3kgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBidG5Tb3J0VXJnZW5jeS5jbGFzc05hbWUgPSAnZHJvcGRvd24taXRlbSc7XHJcbiAgICBidG5Tb3J0VXJnZW5jeS5pbm5lckhUTUwgPSAnVXJnZW5jeSc7XHJcbiAgICBidG5Tb3J0VXJnZW5jeS5vbmNsaWNrID0gKCkgPT5cclxuICAgICAgdGhpcy5jaGFuZ2VTb3J0aW5nTWV0aG9kKFxyXG4gICAgICAgICdnZXREdWVEYXRlJyxcclxuICAgICAgICBidG5Tb3J0VXJnZW5jeSxcclxuICAgICAgICBkcm9wZG93bkl0ZW1zLFxyXG4gICAgICAgIG1vZGVsXHJcbiAgICAgICk7XHJcbiAgICBkcm9wZG93bkl0ZW1zLnB1c2goYnRuU29ydFVyZ2VuY3kpO1xyXG5cclxuICAgIC8vIFNvcnQgYnkgbnVtYmVyIG9mIHRhc2tzXHJcbiAgICBjb25zdCBidG5Tb3J0VGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBidG5Tb3J0VGFza3MuY2xhc3NOYW1lID0gJ2Ryb3Bkb3duLWl0ZW0nO1xyXG4gICAgYnRuU29ydFRhc2tzLmlubmVySFRNTCA9ICdOdW1iZXIgb2YgdGFza3MnO1xyXG4gICAgYnRuU29ydFRhc2tzLm9uY2xpY2sgPSAoKSA9PlxyXG4gICAgICB0aGlzLmNoYW5nZVNvcnRpbmdNZXRob2QoXHJcbiAgICAgICAgJ2dldE51bU9mVGFza3MnLFxyXG4gICAgICAgIGJ0blNvcnRUYXNrcyxcclxuICAgICAgICBkcm9wZG93bkl0ZW1zLFxyXG4gICAgICAgIG1vZGVsLFxyXG4gICAgICAgIHRydWVcclxuICAgICAgKTtcclxuICAgIGRyb3Bkb3duSXRlbXMucHVzaChidG5Tb3J0VGFza3MpO1xyXG5cclxuICAgIGNvbnN0IGRyb3Bkb3duID0gTWFuYWdlclZpZXcuZHJhd0Ryb3Bkb3duQnV0dG9uKFxyXG4gICAgICBwYXJlbnQsXHJcbiAgICAgICdidG5Tb3J0RHJvcGRvd24nLFxyXG4gICAgICBkcm9wZG93bkl0ZW1zXHJcbiAgICApO1xyXG4gICAgY29uc3QgYnRuU29ydEJ5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBkcm9wZG93bi5hcHBlbmRDaGlsZChidG5Tb3J0QnkpO1xyXG4gICAgYnRuU29ydEJ5LmNsYXNzTmFtZSA9ICdidG4gYnRuLWxpZ2h0IGRyb3Bkb3duLXRvZ2dsZSBtZW51QnV0dG9uJztcclxuICAgIGJ0blNvcnRCeS5pZCA9ICdidG5Tb3J0RHJvcGRvd24nO1xyXG4gICAgYnRuU29ydEJ5LnNldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnLCAnZHJvcGRvd24nKTtcclxuICAgIGJ0blNvcnRCeS5pbm5lckhUTUwgPSAnU29ydCBieSc7XHJcbiAgfVxyXG5cclxuICBkcmF3QWN0aW9uRHJvcGRvd24ocGFyZW50OiBIVE1MRGl2RWxlbWVudCwgbW9kZWw6IE1hbmFnZXJNb2RlbCkge1xyXG4gICAgLy8gQWN0aW9uIGRyb3Bkb3duXHJcbiAgICBsZXQgZHJvcGRvd25JdGVtczogSFRNTEFuY2hvckVsZW1lbnRbXSA9IFtdO1xyXG5cclxuICAgIC8vIE1hcmsgYWxsIGFzIGZpbmlzaGVkXHJcbiAgICBjb25zdCBidG5NYXJrQWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgYnRuTWFya0FsbC5jbGFzc05hbWUgPSAnZHJvcGRvd24taXRlbSc7XHJcbiAgICBidG5NYXJrQWxsLmlubmVySFRNTCA9ICdNYXJrIGFsbCBhcyBmaW5pc2hlZCc7XHJcbiAgICBidG5NYXJrQWxsLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgIC8vIGRpc3BsYXkgY29uZmlybWF0aW9uIG1lc3NhZ2VcclxuICAgICAgTWFuYWdlclZpZXcuZGlzcGxheU1vZGFsKHtcclxuICAgICAgICBjb2xvcjogJ3JlZCcsXHJcbiAgICAgICAgdGl0bGU6ICdDb25maXJtYXRpb24nLFxyXG4gICAgICAgIG1lc3NhZ2U6XHJcbiAgICAgICAgICAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIG1hcmsgYWxsIHByb2plY3RzIGFzIGZpbmlzaGVkPycsXHJcbiAgICAgICAgYnV0dG9uczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnWWVzJyxcclxuICAgICAgICAgICAgdHlwZTogJ3ByaW1hcnknLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgIC8vIFBlcmZvcm0gYWN0aW9uXHJcbiAgICAgICAgICAgICAgY29uc3QgdXNlciA9IG1vZGVsLmdldEN1cnJlbnRVc2VyKCk7XHJcbiAgICAgICAgICAgICAgdXNlci5tb2RlbC5tYXJrQWxsQXNGaW5pc2hlZCgpO1xyXG4gICAgICAgICAgICAgIGNvbnN0IHByb2plY3RzID0gdXNlci5tb2RlbC5nZXRQcm9qZWN0cygpO1xyXG4gICAgICAgICAgICAgIERhdGFiYXNlQVBJLnVwZGF0ZVByb2plY3RzKHByb2plY3RzKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHJlZHJhdyBwcm9qZWN0c1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWRyYXdEYXNoYm9hcmQocHJvamVjdHMsIG1vZGVsKTtcclxuICAgICAgICAgICAgICAgIC8vIG5vdGlmeSB1c2VyXHJcbiAgICAgICAgICAgICAgICBNYW5hZ2VyVmlldy5kaXNwbGF5UG9wdXAoe1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJ2dyZWVuJyxcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzZnVsIGFjdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6XHJcbiAgICAgICAgICAgICAgICAgICAgJ1N1Y2Nlc3NmdWxseSBtYXJrZWQgYWxsIHByb2plY3RzIGFzIGZpbmlzaGVkLicsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6ICdObycsXHJcbiAgICAgICAgICAgIHR5cGU6ICdzZWNvbmRhcnknLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogKCkgPT4geyB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICBkcm9wZG93bkl0ZW1zLnB1c2goYnRuTWFya0FsbCk7XHJcblxyXG4gICAgLy8gRGVsZXRlIGFsbFxyXG4gICAgY29uc3QgYnRuRGVsZXRlQWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgYnRuRGVsZXRlQWxsLmNsYXNzTmFtZSA9ICdkcm9wZG93bi1pdGVtJztcclxuICAgIGJ0bkRlbGV0ZUFsbC5pbm5lckhUTUwgPSAnRGVsZXRlIGFsbCBwcm9qZWN0cyc7XHJcbiAgICBidG5EZWxldGVBbGwub25jbGljayA9ICgpID0+IHtcclxuICAgICAgLy8gZGlzcGxheSBjb25maXJtYXRpb24gbWVzc2FnZVxyXG4gICAgICBNYW5hZ2VyVmlldy5kaXNwbGF5TW9kYWwoe1xyXG4gICAgICAgIGNvbG9yOiAncmVkJyxcclxuICAgICAgICB0aXRsZTogJ0NvbmZpcm1hdGlvbicsXHJcbiAgICAgICAgbWVzc2FnZTogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgYWxsIHByb2plY3RzPycsXHJcbiAgICAgICAgYnV0dG9uczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnWWVzJyxcclxuICAgICAgICAgICAgdHlwZTogJ2RhbmdlcicsXHJcbiAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgLy8gUGVyZm9ybSBhY3Rpb25cclxuICAgICAgICAgICAgICBjb25zdCB1c2VyID0gbW9kZWwuZ2V0Q3VycmVudFVzZXIoKTtcclxuICAgICAgICAgICAgICBEYXRhYmFzZUFQSS5kZWxldGVQcm9qZWN0cyhcclxuICAgICAgICAgICAgICAgIHVzZXIubW9kZWwuZ2V0UHJvamVjdHMoKVxyXG4gICAgICAgICAgICAgICkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB1c2VyLm1vZGVsLnNldFByb2plY3RzKFtdKTtcclxuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSB1aVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWRyYXdEYXNoYm9hcmQoW10sIG1vZGVsKTtcclxuICAgICAgICAgICAgICAgIC8vIG5vdGlmeSB1c2VyXHJcbiAgICAgICAgICAgICAgICBNYW5hZ2VyVmlldy5kaXNwbGF5UG9wdXAoe1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogJ2dyZWVuJyxcclxuICAgICAgICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzZnVsIGFjdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6XHJcbiAgICAgICAgICAgICAgICAgICAgJ1N1Y2Nlc3NmdWxseSBkZWxldGVkIGFsbCBwcm9qZWN0cy4nLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiAnTm8nLFxyXG4gICAgICAgICAgICB0eXBlOiAnc2Vjb25kYXJ5JyxcclxuICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHsgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgZHJvcGRvd25JdGVtcy5wdXNoKGJ0bkRlbGV0ZUFsbCk7XHJcblxyXG4gICAgLy8gQWN0aW9uIGJ1dHRvblxyXG4gICAgY29uc3QgZHJvcGRvd24gPSBNYW5hZ2VyVmlldy5kcmF3RHJvcGRvd25CdXR0b24oXHJcbiAgICAgIHBhcmVudCxcclxuICAgICAgJ2J0bkFjdGlvbicsXHJcbiAgICAgIGRyb3Bkb3duSXRlbXNcclxuICAgICk7XHJcbiAgICBjb25zdCBidG5BY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGRyb3Bkb3duLmFwcGVuZENoaWxkKGJ0bkFjdGlvbik7XHJcbiAgICBidG5BY3Rpb24uY2xhc3NOYW1lID0gJ2J0biBidG4tbGlnaHQgZHJvcGRvd24tdG9nZ2xlIG1lbnVCdXR0b24nO1xyXG4gICAgYnRuQWN0aW9uLmlkID0gJ2J0bkFjdGlvbic7XHJcbiAgICBidG5BY3Rpb24uc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICdkcm9wZG93bicpO1xyXG4gICAgYnRuQWN0aW9uLmlubmVySFRNTCA9ICdBY3Rpb24nO1xyXG4gIH1cclxuXHJcbiAgZHJhd0ZpbHRlckRyb3Bkb3duKHBhcmVudDogSFRNTERpdkVsZW1lbnQsIG1vZGVsOiBNYW5hZ2VyTW9kZWwpIHtcclxuICAgIC8vIEZpbHRlciBkcm9wZG93blxyXG4gICAgbGV0IGRyb3Bkb3duSXRlbXM6IEhUTUxFbGVtZW50W10gPSBbXTtcclxuICAgIGNvbnN0IHVzZXIgPSBtb2RlbC5nZXRDdXJyZW50VXNlcigpO1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSB1c2VyLm1vZGVsLmdldFByb2plY3RzKCk7XHJcblxyXG4gICAgLy8gRmlsdGVyIEFMTCBwcm9qZWN0c1xyXG4gICAgY29uc3QgYnRuRmlsdGVyQWxsID0gdGhpcy5jcmVhdGVGaWx0ZXJEcm9wZG93bkl0ZW0oXHJcbiAgICAgICdBbGwg4pyTJyxcclxuICAgICAgbW9kZWwsXHJcbiAgICAgIGRyb3Bkb3duSXRlbXMsXHJcbiAgICApO1xyXG4gICAgZHJvcGRvd25JdGVtcy5wdXNoKGJ0bkZpbHRlckFsbCk7XHJcblxyXG4gICAgLy8gRmlsdGVyIFRPIERPIHByb2plY3RzXHJcbiAgICBjb25zdCBidG5GaWx0ZXJUb0RvID0gdGhpcy5jcmVhdGVGaWx0ZXJEcm9wZG93bkl0ZW0oXHJcbiAgICAgICdUbyBkbycsXHJcbiAgICAgIG1vZGVsLFxyXG4gICAgICBkcm9wZG93bkl0ZW1zLFxyXG4gICAgICBUYXNrU3RhdGUuVE9fRE9cclxuICAgICk7XHJcbiAgICBkcm9wZG93bkl0ZW1zLnB1c2goYnRuRmlsdGVyVG9Ebyk7XHJcblxyXG4gICAgLy8gRmlsdGVyIElOIFBST0dSRVNTIHByb2plY3RzXHJcbiAgICBjb25zdCBidG5JblByb2dyZXNzID0gdGhpcy5jcmVhdGVGaWx0ZXJEcm9wZG93bkl0ZW0oXHJcbiAgICAgICdJbiBwcm9ncmVzcycsXHJcbiAgICAgIG1vZGVsLFxyXG4gICAgICBkcm9wZG93bkl0ZW1zLFxyXG4gICAgICBUYXNrU3RhdGUuSU5fUFJPR1JFU1NcclxuICAgICk7XHJcbiAgICBkcm9wZG93bkl0ZW1zLnB1c2goYnRuSW5Qcm9ncmVzcyk7XHJcblxyXG4gICAgLy8gRmlsdGVyIEZJTklTSEVEIHByb2plY3RzXHJcbiAgICBjb25zdCBidG5GaW5pc2hlZCA9IHRoaXMuY3JlYXRlRmlsdGVyRHJvcGRvd25JdGVtKFxyXG4gICAgICAnRmluaXNoZWQnLFxyXG4gICAgICBtb2RlbCxcclxuICAgICAgZHJvcGRvd25JdGVtcyxcclxuICAgICAgVGFza1N0YXRlLkZJTklTSEVEXHJcbiAgICApO1xyXG4gICAgZHJvcGRvd25JdGVtcy5wdXNoKGJ0bkZpbmlzaGVkKTtcclxuXHJcbiAgICAvLyBGaWx0ZXIgYnV0dG9uXHJcbiAgICBjb25zdCBkcm9wZG93biA9IE1hbmFnZXJWaWV3LmRyYXdEcm9wZG93bkJ1dHRvbihcclxuICAgICAgcGFyZW50LFxyXG4gICAgICAnYnRuRmlsdGVyRHJvcGRvd24nLFxyXG4gICAgICBkcm9wZG93bkl0ZW1zXHJcbiAgICApO1xyXG4gICAgY29uc3QgYnRuRmlsdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBkcm9wZG93bi5hcHBlbmRDaGlsZChidG5GaWx0ZXIpO1xyXG4gICAgYnRuRmlsdGVyLmNsYXNzTmFtZSA9ICdidG4gYnRuLWxpZ2h0IGRyb3Bkb3duLXRvZ2dsZSBtZW51QnV0dG9uJztcclxuICAgIGJ0bkZpbHRlci5pZCA9ICdidG5GaWx0ZXJEcm9wZG93bic7XHJcbiAgICBidG5GaWx0ZXIuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICdkcm9wZG93bicpO1xyXG4gICAgYnRuRmlsdGVyLmlubmVySFRNTCA9ICdGaWx0ZXInO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlRmlsdGVyRHJvcGRvd25JdGVtKFxyXG4gICAgYnRuVGV4dDogc3RyaW5nLFxyXG4gICAgbW9kZWw6IE1hbmFnZXJNb2RlbCxcclxuICAgIGRyb3Bkb3duSXRlbXM6IEhUTUxFbGVtZW50W10sXHJcbiAgICBzdGF0ZTogVGFza1N0YXRlID0gbnVsbFxyXG4gICk6IEhUTUxFbGVtZW50IHtcclxuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGJ0bi5jbGFzc05hbWUgPSAnZHJvcGRvd24taXRlbSc7XHJcbiAgICBidG4uaW5uZXJIVE1MID0gYnRuVGV4dDtcclxuICAgIGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCB1c2VyID0gbW9kZWwuZ2V0Q3VycmVudFVzZXIoKS5tb2RlbDtcclxuICAgICAgaWYgKHN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5yZWRyYXdEYXNoYm9hcmQoXHJcbiAgICAgICAgICB1c2VyLmdldFByb2plY3RzKCkuZmlsdGVyKChwOiBQcm9qZWN0KSA9PiBwLm1vZGVsLmdldFByb2plY3RTdGF0ZSgpID09PSBzdGF0ZSksXHJcbiAgICAgICAgICBtb2RlbFxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB0aGlzLnJlZHJhd0Rhc2hib2FyZCh1c2VyLmdldFByb2plY3RzKCksIG1vZGVsKTtcclxuICAgICAgdGhpcy5jaGFuZ2VGaWx0ZXJpbmdDaGVja21hcmsoZHJvcGRvd25JdGVtcywgYnRuKTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gYnRuO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlRmlsdGVyaW5nQ2hlY2ttYXJrKGRyb3Bkb3duSXRlbXM6IEVsZW1lbnRbXSwgc2VsZWN0ZWRJdGVtOiBFbGVtZW50KSB7XHJcbiAgICAvLyBtYWtlIHRoaXMgc29ydGluZyBtZXRob2QgYWN0aXZlXHJcbiAgICBkcm9wZG93bkl0ZW1zLm1hcChcclxuICAgICAgKGVsKSA9PiAoZWwuaW5uZXJIVE1MID0gZWwuaW5uZXJIVE1MLnJlcGxhY2UoJyDinJMnLCAnJykpXHJcbiAgICApO1xyXG4gICAgc2VsZWN0ZWRJdGVtLmlubmVySFRNTCArPSAnIOKckyc7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VTb3J0aW5nTWV0aG9kKFxyXG4gICAgbWV0aG9kOiAnZ2V0VGltZXN0YW1wJyB8ICdnZXREdWVEYXRlJyB8ICdnZXROdW1PZlRhc2tzJyxcclxuICAgIHNvcnRpbmdCdXR0b25FbDogSFRNTEVsZW1lbnQsXHJcbiAgICBkcm9wZG93bkFycmF5OiBIVE1MRWxlbWVudFtdLFxyXG4gICAgbW9kZWw6IE1hbmFnZXJNb2RlbCxcclxuICAgIHJldmVyc2VPcGVyYXRvcnM6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICkge1xyXG4gICAgLy8gbWFrZSB0aGlzIHNvcnRpbmcgbWV0aG9kIGFjdGl2ZVxyXG4gICAgZHJvcGRvd25BcnJheS5tYXAoXHJcbiAgICAgIChlbCkgPT4gKGVsLmlubmVySFRNTCA9IGVsLmlubmVySFRNTC5yZXBsYWNlKCcg4pyTJywgJycpKVxyXG4gICAgKTtcclxuICAgIHNvcnRpbmdCdXR0b25FbC5pbm5lckhUTUwgKz0gJyDinJMnO1xyXG5cclxuICAgIC8vIGFwcGx5IHNvcnRpbmcgbWV0aG9kXHJcbiAgICBjb25zdCB1c2VyID0gbW9kZWwuZ2V0Q3VycmVudFVzZXIoKTtcclxuICAgIHVzZXIubW9kZWwuc29ydFByb2plY3RzKG1ldGhvZCwgcmV2ZXJzZU9wZXJhdG9ycyk7XHJcblxyXG4gICAgLy8gcmVkcmF3IGRhc2hib2FyZFxyXG4gICAgdGhpcy5yZWRyYXdEYXNoYm9hcmQodXNlci5tb2RlbC5nZXRQcm9qZWN0cygpLCBtb2RlbCk7XHJcblxyXG4gICAgLy8gcmVzZXQgZmlsdGVyaW5nIG1ldGhvZFxyXG4gICAgY29uc3QgZmlsdGVyRHJvcGRvd25JdGVtcyA9XHJcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5GaWx0ZXJEcm9wZG93bicpLnBhcmVudEVsZW1lbnRcclxuICAgICAgICAuY2hpbGRyZW5bMF0uY2hpbGRyZW47XHJcbiAgICBjb25zdCBpdGVtczogRWxlbWVudFtdID0gQXJyYXkuZnJvbShmaWx0ZXJEcm9wZG93bkl0ZW1zKTtcclxuICAgIHRoaXMuY2hhbmdlRmlsdGVyaW5nQ2hlY2ttYXJrKGl0ZW1zLCBpdGVtc1swXSk7XHJcbiAgfVxyXG5cclxuICByZWRyYXdEYXNoYm9hcmQocHJvamVjdHM6IFByb2plY3RbXSwgbW9kZWw6IE1hbmFnZXJNb2RlbCkge1xyXG4gICAgLy8gY2xlYXIgZW1wdHkgZGFzaGJvYXJkIG1lc3NhZ2UgKGlmIGV4aXN0cylcclxuICAgIGNvbnN0IGVtcHR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgJ2VtcHR5RGFzaGJvYXJkTWVzc2FnZSdcclxuICAgIClbMF07XHJcbiAgICBpZiAoZW1wdHkpIGVtcHR5LnJlbW92ZSgpO1xyXG5cclxuICAgIC8vIGNsZWFyIHByZXZpb3VzIGRhc2hib2FyZFxyXG4gICAgY29uc3QgZGFzaGJvYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGFzaGJvYXJkJylbMF07XHJcbiAgICBNYW5hZ2VyVmlldy5yZW1vdmVFbGVtZW50c0NoaWxkcmVuKGRhc2hib2FyZCk7XHJcblxyXG4gICAgLy8gcmVkcmF3XHJcbiAgICB0aGlzLmRyYXdEYXNoYm9hcmQocHJvamVjdHMsIG1vZGVsKTtcclxuICB9XHJcblxyXG4gIHN0YXRpYyByZW1vdmVFbGVtZW50c0NoaWxkcmVuKGVsZW1lbnQ6IEVsZW1lbnQpIHtcclxuICAgIGlmIChlbGVtZW50ID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICB3aGlsZSAoZWxlbWVudC5jaGlsZHJlblswXSkgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmNoaWxkcmVuWzBdKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTWFuYWdlck1vZGVsIH0gZnJvbSBcIi4uL21hbmFnZXIvbW9kZWxcIjtcclxuaW1wb3J0IHsgUHJvamVjdE1vZGVsIH0gZnJvbSBcIi4vbW9kZWxcIjtcclxuaW1wb3J0IHsgUHJvamVjdFZpZXcgfSBmcm9tIFwiLi92aWV3XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdCB7XHJcbiAgICBwdWJsaWMgbW9kZWw6IFByb2plY3RNb2RlbDtcclxuICAgIHB1YmxpYyB2aWV3OiBQcm9qZWN0VmlldztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIGR1ZURhdGU6IERhdGUsIHRpbWVzdGFtcDogRGF0ZSkge1xyXG4gICAgICAgIHRoaXMubW9kZWwgPSBuZXcgUHJvamVjdE1vZGVsKGlkLCBuYW1lLCBkdWVEYXRlLCB0aW1lc3RhbXApO1xyXG4gICAgICAgIHRoaXMudmlldyA9IG5ldyBQcm9qZWN0VmlldygpO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdQcmV2aWV3KHBhcmVudDogSFRNTEVsZW1lbnQsIGdvQmFja0Z1bmN0aW9uQ2FsbGJhY2s6IEZ1bmN0aW9uLCBtYW5hZ2VyTW9kZWw6IE1hbmFnZXJNb2RlbCkge1xyXG4gICAgICAgIHRoaXMudmlldy5kcmF3UHJldmlldyhwYXJlbnQsIHRoaXMubW9kZWwsIGdvQmFja0Z1bmN0aW9uQ2FsbGJhY2ssIG1hbmFnZXJNb2RlbCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBmb3JtYXQsIGZvcm1hdERpc3RhbmNlIH0gZnJvbSAnZGF0ZS1mbnMnO1xyXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi4vdGFzay9jb250cm9sbGVyJztcclxuaW1wb3J0IHsgVGFza1N0YXRlIH0gZnJvbSAnLi4vdGFza1N0YXRlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0TW9kZWwge1xyXG4gICAgcHJpdmF0ZSBpZDogbnVtYmVyO1xyXG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcclxuICAgIHByaXZhdGUgdGFza3M6IFRhc2tbXTtcclxuICAgIHByaXZhdGUgZHVlRGF0ZTogRGF0ZTtcclxuICAgIHByaXZhdGUgdGltZXN0YW1wOiBEYXRlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIG5hbWU6IHN0cmluZywgZHVlRGF0ZTogRGF0ZSwgdGltZXN0YW1wOiBEYXRlKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICAgICAgdGhpcy50aW1lc3RhbXAgPSB0aW1lc3RhbXA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SWQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUYXNrcygpOiBUYXNrW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tzO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE51bU9mVGFza3MoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50YXNrcy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VGFza3ModDogVGFza1tdKSB7XHJcbiAgICAgICAgaWYgKHQgPT09IG51bGwpIHJldHVybjtcclxuICAgICAgICB0aGlzLnRhc2tzID0gdDtcclxuICAgIH1cclxuXHJcbiAgICBnZXREdWVEYXRlKCk6IERhdGUge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLmR1ZURhdGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldER1ZURhdGUoZDogRGF0ZSkge1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RHVlRGF0ZUZvcm1hdHRlZCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBmb3JtYXQodGhpcy5nZXREdWVEYXRlKCksICd5eXl5LU1NLWRkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGltZXN0YW1wKCk6IERhdGUge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLnRpbWVzdGFtcCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkVGFzayh0OiBUYXNrKSB7XHJcbiAgICAgICAgdGhpcy50YXNrcy5wdXNoKHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVRhc2soaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcigodDogVGFzaykgPT4gdC5tb2RlbC5nZXRJZCgpICE9PSBpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGVyY2VudGFnZURvbmUoKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAodGhpcy50YXNrcy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG5cclxuICAgICAgICBjb25zdCBudW1PZlRhc2tzID0gdGhpcy50YXNrcy5sZW5ndGg7XHJcbiAgICAgICAgY29uc3QgbnVtT2ZGaW5pc2hlZFRhc2tzID0gdGhpcy5nZXROdW1PZlRhc2tzSW5TdGF0ZShUYXNrU3RhdGUuRklOSVNIRUQpO1xyXG4gICAgICAgIGNvbnN0IG51bU9mSW5Qcm9ncmVzc1Rhc2tzID0gdGhpcy5nZXROdW1PZlRhc2tzSW5TdGF0ZShUYXNrU3RhdGUuSU5fUFJPR1JFU1MpO1xyXG5cclxuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCgoKG51bU9mRmluaXNoZWRUYXNrcyArIG51bU9mSW5Qcm9ncmVzc1Rhc2tzIC8gMikgLyBudW1PZlRhc2tzKSAqIDEwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TnVtT2ZUYXNrc0luU3RhdGUoc3RhdGU6IFRhc2tTdGF0ZSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3MucmVkdWNlKChhY2M6IG51bWJlciwgY3VycjogVGFzayk6IG51bWJlciA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjdXJyLm1vZGVsLmdldFN0YXRlKCkgPT09IHN0YXRlKVxyXG4gICAgICAgICAgICAgICAgYWNjICs9IDE7XHJcbiAgICAgICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGltZVJlbWFpbmluZyhhZGRTdWZmaXg6IGJvb2xlYW4gPSBmYWxzZSwgcmVmVGltZTogRGF0ZSA9IG51bGwpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IHJlZmZlcmVuY2VUaW1lOiBEYXRlID0gKHJlZlRpbWUpID8gcmVmVGltZSA6IHRoaXMuZ2V0RHVlRGF0ZSgpO1xyXG4gICAgICAgIGlmIChyZWZmZXJlbmNlVGltZSA8IChuZXcgRGF0ZSgpKSlcclxuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdERpc3RhbmNlKHJlZmZlcmVuY2VUaW1lLCBuZXcgRGF0ZSgpLCB7IGFkZFN1ZmZpeDogYWRkU3VmZml4IH0pO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdERpc3RhbmNlKHJlZmZlcmVuY2VUaW1lLCBuZXcgRGF0ZSgpKSArICcgbGVmdCc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UHJvamVjdFN0YXRlKCk6IFRhc2tTdGF0ZSB7XHJcbiAgICAgICAgY29uc3QgbnVtT2ZUYXNrcyA9IHRoaXMuZ2V0TnVtT2ZUYXNrcygpO1xyXG4gICAgICAgIGlmIChudW1PZlRhc2tzID09PSAwKSByZXR1cm4gVGFza1N0YXRlLlRPX0RPO1xyXG5cclxuICAgICAgICBsZXQgcmVzdWx0ID0gVGFza1N0YXRlLlRPX0RPO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtT2ZUYXNrczsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUYXNrU3RhdGUgPSB0aGlzLnRhc2tzW2ldLm1vZGVsLmdldFN0YXRlKCk7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50VGFza1N0YXRlID09PSBUYXNrU3RhdGUuSU5fUFJPR1JFU1NcclxuICAgICAgICAgICAgICAgIHx8IChyZXN1bHQgPT09IFRhc2tTdGF0ZS5GSU5JU0hFRCAmJiBjdXJyZW50VGFza1N0YXRlID09PSBUYXNrU3RhdGUuVE9fRE8pKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBUYXNrU3RhdGUuSU5fUFJPR1JFU1M7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRUYXNrU3RhdGUgPT09IFRhc2tTdGF0ZS5GSU5JU0hFRCkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gVGFza1N0YXRlLkZJTklTSEVEO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcblxyXG4gICAgICAgIC8vIGNvbnN0IG51bU9mVG9Eb1Rhc2tzID0gdGhpcy5nZXROdW1PZlRhc2tzSW5TdGF0ZShUYXNrU3RhdGUuVE9fRE8pO1xyXG4gICAgICAgIC8vIGNvbnN0IG51bU9mSW5Qcm9ncmVzc1Rhc2tzID0gdGhpcy5nZXROdW1PZlRhc2tzSW5TdGF0ZShUYXNrU3RhdGUuSU5fUFJPR1JFU1MpO1xyXG4gICAgICAgIC8vIGNvbnN0IG51bU9mRmluaXNoZWRUYXNrcyA9IHRoaXMuZ2V0TnVtT2ZUYXNrc0luU3RhdGUoVGFza1N0YXRlLkZJTklTSEVEKTtcclxuXHJcbiAgICAgICAgLy8gaWYgKG51bU9mVG9Eb1Rhc2tzID09PSBudW1PZlRhc2tzKSByZXR1cm4gVGFza1N0YXRlLlRPX0RPO1xyXG4gICAgICAgIC8vIGlmIChudW1PZkluUHJvZ3Jlc3NUYXNrcyA+IDApIHJldHVybiBUYXNrU3RhdGUuSU5fUFJPR1JFU1M7XHJcbiAgICAgICAgLy8gaWYgKG51bU9mRmluaXNoZWRUYXNrcyA9PT0gbnVtT2ZUYXNrcykgcmV0dXJuIFRhc2tTdGF0ZS5GSU5JU0hFRDtcclxuXHJcbiAgICAgICAgLy8gcmV0dXJuIFRhc2tTdGF0ZS5JTl9QUk9HUkVTUztcclxuICAgIH1cclxuXHJcbiAgICBnZXRUYXNrc0luU3RhdGUoc3RhdGU6IFRhc2tTdGF0ZSk6IFRhc2tbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3MuZmlsdGVyKCh0OiBUYXNrKSA9PiB0Lm1vZGVsLmdldFN0YXRlKCkgPT09IHN0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZVByb2plY3RJbnB1dChwcm9qZWN0TmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHByb2plY3ROYW1lID09PSAnJykgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEYXRhYmFzZUFQSSB9IGZyb20gJy4uL2RhdGFiYXNlQVBJJztcclxuaW1wb3J0IHsgTWFuYWdlck1vZGVsIH0gZnJvbSAnLi4vbWFuYWdlci9tb2RlbCc7XHJcbmltcG9ydCB7IE1hbmFnZXJWaWV3IH0gZnJvbSAnLi4vbWFuYWdlci92aWV3JztcclxuaW1wb3J0IHsgVGFzayB9IGZyb20gJy4uL3Rhc2svY29udHJvbGxlcic7XHJcbmltcG9ydCB7IFRhc2tTdGF0ZSB9IGZyb20gJy4uL3Rhc2tTdGF0ZSc7XHJcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuL2NvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBQcm9qZWN0TW9kZWwgfSBmcm9tICcuL21vZGVsJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9qZWN0VmlldyB7XHJcbiAgY29udGFpbmVyOiBIVE1MRWxlbWVudDtcclxuICBwYXJlbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5jbGFzc05hbWUgPSAncHJvamVjdCc7XHJcbiAgfVxyXG5cclxuICBkcmF3UHJldmlldyhwYXJlbnQ6IEhUTUxFbGVtZW50LCBtb2RlbDogUHJvamVjdE1vZGVsLCBnb0JhY2tGdW5jdGlvbkNhbGxiYWNrOiBGdW5jdGlvbiwgbWFuYWdlck1vZGVsOiBNYW5hZ2VyTW9kZWwpIHtcclxuICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG5cclxuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNhcmQuY2xhc3NOYW1lID0gJ2NhcmQgcHJvamVjdCc7XHJcbiAgICBjYXJkLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgIC8vIHJlbW92ZSBhbGwgcHJvamVjdCBwcmV2aWV3c1xyXG4gICAgICBNYW5hZ2VyVmlldy5yZW1vdmVFbGVtZW50c0NoaWxkcmVuKHBhcmVudCk7XHJcblxyXG4gICAgICAvLyBkaXNwbGF5IHByb2plY3QgZWRpdG9yXHJcbiAgICAgIHRoaXMuZHJhd0VkaXRvcihwYXJlbnQsIG1vZGVsLCBnb0JhY2tGdW5jdGlvbkNhbGxiYWNrLCBtYW5hZ2VyTW9kZWwpO1xyXG4gICAgfVxyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGNhcmQpO1xyXG5cclxuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBjb25zdCByYW5kSW1hZ2VOdW1iZXIgPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDYpO1xyXG4gICAgaW1hZ2UuY2xhc3NOYW1lID0gYGNhcmQtaW1nLXRvcCBjYXJkSW1hZ2UgY2FyZEltYWdlJHtyYW5kSW1hZ2VOdW1iZXJ9YDtcclxuICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG5cclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJvZHkuY2xhc3NOYW1lID0gJ2NhcmQtYm9keSc7XHJcbiAgICBjYXJkLmFwcGVuZENoaWxkKGJvZHkpO1xyXG5cclxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIHRpdGxlLmNsYXNzTmFtZSA9ICdjYXJkLXRpdGxlJztcclxuICAgIHRpdGxlLmlubmVySFRNTCA9IE1hbmFnZXJNb2RlbC5zaG9ydGVuU3RyaW5nKG1vZGVsLm5hbWUsIDEyKTtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSBtb2RlbC5nZXRQZXJjZW50YWdlRG9uZSgpO1xyXG4gICAgY29uc3QgcGVyY2VudGFnZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGxhYmVsMScpO1xyXG4gICAgcGVyY2VudGFnZUxhYmVsLmNsYXNzTmFtZSA9ICdsYmxQcm9qZWN0UGVyY2VudGFnZSc7XHJcbiAgICBwZXJjZW50YWdlTGFiZWwuaW5uZXJIVE1MID0gYCR7cGVyY2VudGFnZX0lYDtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQocGVyY2VudGFnZUxhYmVsKTtcclxuXHJcbiAgICBjb25zdCB0aW1lTGVmdCA9IG1vZGVsLmdldFRpbWVSZW1haW5pbmcodHJ1ZSk7XHJcbiAgICBjb25zdCBkdWVPbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGR1ZU9uTGFiZWwuY2xhc3NOYW1lID0gJ2NhcmQtdGV4dCBsYmxUaW1lTGVmdCc7XHJcbiAgICBkdWVPbkxhYmVsLmlubmVySFRNTCA9XHJcbiAgICAgIGDigKIgJHt0aW1lTGVmdH08L2JyPlxyXG4gICAgICAg4oCiICR7bW9kZWwuZ2V0TnVtT2ZUYXNrc0luU3RhdGUoVGFza1N0YXRlLkZJTklTSEVEKX0vJHttb2RlbC5nZXROdW1PZlRhc2tzKCl9IHRhc2tzIGZpbmlzaGVkYDtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQoZHVlT25MYWJlbCk7XHJcblxyXG4gICAgY29uc3QgcHJvZ3Jlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByb2dyZXNzLmNsYXNzTmFtZSA9ICdwcm9ncmVzcyc7XHJcbiAgICBib2R5LmFwcGVuZENoaWxkKHByb2dyZXNzKTtcclxuXHJcbiAgICBjb25zdCBwcm9ncmVzc0JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcHJvZ3Jlc3NCYXIuY2xhc3NOYW1lID0gYHByb2dyZXNzLWJhcmA7XHJcbiAgICBwcm9ncmVzcy5hcHBlbmRDaGlsZChwcm9ncmVzc0Jhcik7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgLy8gYW5pbWF0ZSBwcm9ncmVzcyBiYXIgYWZ0ZXIgcmVuZGVyaW5nXHJcbiAgICAgIHByb2dyZXNzQmFyLnN0eWxlLndpZHRoID0gYCR7cGVyY2VudGFnZX0lYDtcclxuICAgIH0sIDApO1xyXG4gIH1cclxuXHJcbiAgZHJhd0VkaXRvcihwYXJlbnQ6IEhUTUxFbGVtZW50LCBtb2RlbDogUHJvamVjdE1vZGVsIHwgbnVsbCwgZ29CYWNrRnVuY3Rpb25DYWxsYmFjazogRnVuY3Rpb24sIG1hbmFnZXJNb2RlbDogTWFuYWdlck1vZGVsKSB7XHJcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuXHJcbiAgICBsZXQgbmV3UHJvamVjdCA9IGZhbHNlO1xyXG4gICAgaWYgKCFtb2RlbCkge1xyXG4gICAgICBjb25zdCB0b21vcnJvd3NEYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgdG9tb3Jyb3dzRGF0ZS5zZXREYXRlKHRvbW9ycm93c0RhdGUuZ2V0RGF0ZSgpICsgMSk7XHJcbiAgICAgIG1vZGVsID0gbmV3IFByb2plY3RNb2RlbCh1bmRlZmluZWQsICcnLCB0b21vcnJvd3NEYXRlLCBuZXcgRGF0ZSgpKTtcclxuICAgICAgbmV3UHJvamVjdCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZWRpdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlZGl0b3IuY2xhc3NOYW1lID0gJ2VkaXRvcic7XHJcbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWRpdG9yKTtcclxuXHJcbiAgICAvLyBoZWFkZXJcclxuICAgIHRoaXMuZHJhd0VkaXRvckhlYWRlcihlZGl0b3IsIG1vZGVsLCBnb0JhY2tGdW5jdGlvbkNhbGxiYWNrLCBuZXdQcm9qZWN0LCBtYW5hZ2VyTW9kZWwpO1xyXG5cclxuICAgIGNvbnN0IHNlcGFyYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XHJcbiAgICBlZGl0b3IuYXBwZW5kQ2hpbGQoc2VwYXJhdG9yKTtcclxuXHJcbiAgICAvLyB0YXNrIGRhc2hib2FyZFxyXG4gICAgdGhpcy5kcmF3VGFza0Rhc2hib2FyZChlZGl0b3IsIG1vZGVsKTtcclxuICB9XHJcblxyXG4gIGRyYXdFZGl0b3JIZWFkZXIocGFyZW50OiBIVE1MRWxlbWVudCwgbW9kZWw6IFByb2plY3RNb2RlbCwgZ29CYWNrRnVuY3Rpb25DYWxsYmFjazogRnVuY3Rpb24sIG5ld1Byb2plY3Q6IGJvb2xlYW4sIG1hbmFnZXJNb2RlbDogTWFuYWdlck1vZGVsKSB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhlYWRlci5jbGFzc05hbWUgPSAnZWRpdG9ySGVhZGVyJztcclxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG5cclxuICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBjb25zdCByYW5kSW1hZ2VOdW1iZXIgPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDYpO1xyXG4gICAgaW1hZ2UuY2xhc3NOYW1lID0gYGltZ1Byb2plY3RIZWFkZXIgY2FyZEltYWdlJHtyYW5kSW1hZ2VOdW1iZXJ9YDtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChpbWFnZSk7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcHJvamVjdEhlYWRlci5jbGFzc05hbWUgPSAncHJvamVjdEhlYWRlcic7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocHJvamVjdEhlYWRlcik7XHJcblxyXG4gICAgY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGlucHV0TmFtZS5pZCA9ICdpbnB1dFByb2plY3ROYW1lJztcclxuICAgIGlucHV0TmFtZS50eXBlID0gJ3RleHQnO1xyXG4gICAgaW5wdXROYW1lLm1heExlbmd0aCA9IDMwO1xyXG4gICAgaW5wdXROYW1lLmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wgaW5wdXRQcm9qZWN0TmFtZSc7XHJcbiAgICBpbnB1dE5hbWUudmFsdWUgPSBtb2RlbC5uYW1lO1xyXG4gICAgcHJvamVjdEhlYWRlci5hcHBlbmRDaGlsZChpbnB1dE5hbWUpO1xyXG5cclxuICAgIGNvbnN0IGJ0bkJhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ0bkJhY2suY2xhc3NOYW1lID0gJ2J0biBidG4tbGlnaHQnO1xyXG4gICAgYnRuQmFjay5pbm5lckhUTUwgPSAnQmFjayc7XHJcbiAgICBidG5CYWNrLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgIC8vIHJlbW92ZSBlZGl0b3JcclxuICAgICAgcGFyZW50LnJlbW92ZSgpO1xyXG5cclxuICAgICAgLy8gZHJhdyBkYXNoYm9hcmRcclxuICAgICAgZ29CYWNrRnVuY3Rpb25DYWxsYmFjaygpO1xyXG4gICAgfVxyXG4gICAgcHJvamVjdEhlYWRlci5hcHBlbmRDaGlsZChidG5CYWNrKTtcclxuXHJcbiAgICBjb25zdCBidG5TYXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidG5TYXZlLmNsYXNzTmFtZSA9ICdidG4gYnRuLXN1Y2Nlc3MnO1xyXG4gICAgYnRuU2F2ZS5pbm5lckhUTUwgPSAnU2F2ZSc7XHJcbiAgICBidG5TYXZlLm9uY2xpY2sgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIC8vIHNob3J0IGRhdGEgdmFsaWRhdGlvblxyXG4gICAgICBpZiAoIW1vZGVsLnZhbGlkYXRlUHJvamVjdElucHV0KGlucHV0TmFtZS52YWx1ZSkpIHtcclxuICAgICAgICBNYW5hZ2VyVmlldy5kaXNwbGF5UG9wdXAoe1xyXG4gICAgICAgICAgY29sb3I6ICdyZWQnLFxyXG4gICAgICAgICAgdGl0bGU6ICdJbnZhbGlkIGlucHV0JyxcclxuICAgICAgICAgIG1lc3NhZ2U6ICdQcm9qZWN0IG5hbWUgY2FuXFwndCByZW1haW4gZW1wdHkuJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgdXNlciA9IG1hbmFnZXJNb2RlbC5nZXRDdXJyZW50VXNlcigpLm1vZGVsO1xyXG4gICAgICBhd2FpdCB0aGlzLnNhdmVEYXRhRnJvbUZvcm0obW9kZWwsIG5ld1Byb2plY3QsIG1hbmFnZXJNb2RlbCk7XHJcblxyXG4gICAgICAvLyByZW1vdmUgZWRpdG9yXHJcbiAgICAgIHBhcmVudC5yZW1vdmUoKTtcclxuXHJcbiAgICAgIC8vIGRyYXcgZGFzaGJvYXJkXHJcbiAgICAgIGdvQmFja0Z1bmN0aW9uQ2FsbGJhY2soKTtcclxuXHJcbiAgICAgIC8vIGRpc3BsYXkgbWVzc2FnZVxyXG4gICAgICBNYW5hZ2VyVmlldy5kaXNwbGF5UG9wdXAoe1xyXG4gICAgICAgIGNvbG9yOiAnZ3JlZW4nLFxyXG4gICAgICAgIHRpdGxlOiAnU3VjY2Vzc2Z1bCB1cGRhdGUnLFxyXG4gICAgICAgIG1lc3NhZ2U6ICdTdWNjZXNzZnVsbHkgdXBkYXRlZCBhIHByb2plY3QuJ1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgcHJvamVjdEhlYWRlci5hcHBlbmRDaGlsZChidG5TYXZlKTtcclxuXHJcbiAgICB0aGlzLmRyYXdPcHRpb25zRHJvcGRvd24ocHJvamVjdEhlYWRlciwgbW9kZWwpO1xyXG5cclxuICAgIGNvbnN0IGxibFByb2plY3REdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGxibFByb2plY3REdWVEYXRlLmNsYXNzTmFtZSA9ICdsYmxQcm9qZWN0RHVlRGF0ZSc7XHJcbiAgICBsYmxQcm9qZWN0RHVlRGF0ZS5pbm5lckhUTUwgPSAn4oCiIER1ZSBkYXRlOic7XHJcbiAgICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKGxibFByb2plY3REdWVEYXRlKTtcclxuXHJcbiAgICBjb25zdCBpbnB1dFByb2plY3REdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGlucHV0UHJvamVjdER1ZURhdGUuaWQgPSAnaW5wdXRQcm9qZWN0RHVlRGF0ZSc7XHJcbiAgICBpbnB1dFByb2plY3REdWVEYXRlLmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wnO1xyXG4gICAgaW5wdXRQcm9qZWN0RHVlRGF0ZS50eXBlID0gJ2RhdGUnO1xyXG4gICAgaW5wdXRQcm9qZWN0RHVlRGF0ZS52YWx1ZSA9IG1vZGVsLmdldER1ZURhdGVGb3JtYXR0ZWQoKTtcclxuICAgIGlucHV0UHJvamVjdER1ZURhdGUub25jaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgIC8vIHVwZGF0ZSBUaW1lTGVmdCBsYWJlbFxyXG4gICAgICB0aGlzLmV2YWx1YXRlVGltZUxlZnQobGJsVGltZUxlZnQsIG1vZGVsLCBuZXcgRGF0ZShpbnB1dFByb2plY3REdWVEYXRlLnZhbHVlKSk7XHJcbiAgICB9XHJcbiAgICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKGlucHV0UHJvamVjdER1ZURhdGUpO1xyXG5cclxuICAgIGNvbnN0IGxibFRpbWVMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGxibFRpbWVMZWZ0LmNsYXNzTmFtZSA9ICdsYmxUaW1lTGVmdEVkaXRvcic7XHJcbiAgICB0aGlzLmV2YWx1YXRlVGltZUxlZnQobGJsVGltZUxlZnQsIG1vZGVsLCBuZXcgRGF0ZShpbnB1dFByb2plY3REdWVEYXRlLnZhbHVlKSk7XHJcbiAgICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKGxibFRpbWVMZWZ0KTtcclxuXHJcbiAgICBjb25zdCBsYmxUYXNrc0RvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbGJsVGFza3NEb25lLmNsYXNzTmFtZSA9ICdsYmxUYXNrc0RvbmUnO1xyXG4gICAgcHJvamVjdEhlYWRlci5hcHBlbmRDaGlsZChsYmxUYXNrc0RvbmUpO1xyXG5cclxuICAgIGNvbnN0IGxibFBlcmNlbnRhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbGJsUGVyY2VudGFnZS5pZCA9ICdsYmxQZXJjZW50YWdlJztcclxuICAgIHByb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQobGJsUGVyY2VudGFnZSk7XHJcblxyXG4gICAgY29uc3QgcHJvZ3Jlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHByb2dyZXNzLmNsYXNzTmFtZSA9ICdwcm9ncmVzcyBwcm9ncmVzc0VkaXRvcic7XHJcbiAgICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKHByb2dyZXNzKTtcclxuXHJcbiAgICBjb25zdCBwcm9ncmVzc0JhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcHJvZ3Jlc3NCYXIuY2xhc3NOYW1lID0gYHByb2dyZXNzLWJhcmA7XHJcbiAgICBwcm9ncmVzcy5hcHBlbmRDaGlsZChwcm9ncmVzc0Jhcik7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgLy8gYW5pbWF0ZSBwcm9ncmVzcyBiYXIgYWZ0ZXIgcmVuZGVyaW5nXHJcbiAgICAgIFByb2plY3RWaWV3LmV2YWx1YXRlVGFza3NGaW5pc2hlZChsYmxUYXNrc0RvbmUsIGxibFBlcmNlbnRhZ2UsIHByb2dyZXNzQmFyLCBtb2RlbCk7XHJcbiAgICB9LCAwKTtcclxuICB9XHJcblxyXG4gIGRyYXdUYXNrRGFzaGJvYXJkKHBhcmVudDogSFRNTEVsZW1lbnQsIG1vZGVsOiBQcm9qZWN0TW9kZWwpIHtcclxuICAgIGNvbnN0IHRhc2tzVG9EbzogVGFza1tdID0gbW9kZWwuZ2V0VGFza3NJblN0YXRlKFRhc2tTdGF0ZS5UT19ETyk7XHJcbiAgICBjb25zdCB0YXNrc0luUHJvZ3Jlc3M6IFRhc2tbXSA9IG1vZGVsLmdldFRhc2tzSW5TdGF0ZShUYXNrU3RhdGUuSU5fUFJPR1JFU1MpO1xyXG4gICAgY29uc3QgdGFza3NGaW5pc2hlZDogVGFza1tdID0gbW9kZWwuZ2V0VGFza3NJblN0YXRlKFRhc2tTdGF0ZS5GSU5JU0hFRCk7XHJcblxyXG4gICAgY29uc3QgZGFzaGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkYXNoYm9hcmQuY2xhc3NOYW1lID0gJ3Rhc2tEYXNoYm9hcmQnO1xyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGRhc2hib2FyZCk7XHJcblxyXG4gICAgbGV0IHNlY3Rpb25Ub0RvLCBzZWN0aW9uSW5Qcm9ncmVzcywgc2VjdGlvbkZpbmlzaGVkO1xyXG5cclxuICAgIHNlY3Rpb25Ub0RvID0gdGhpcy5jcmVhdGVTZWN0aW9uKG1vZGVsLCAnVG8gZG8nLCB0YXNrc1RvRG8pO1xyXG4gICAgZGFzaGJvYXJkLmFwcGVuZENoaWxkKHNlY3Rpb25Ub0RvKTtcclxuXHJcbiAgICBkYXNoYm9hcmQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVTZXBhcmF0b3IoKSk7XHJcblxyXG4gICAgc2VjdGlvbkluUHJvZ3Jlc3MgPSB0aGlzLmNyZWF0ZVNlY3Rpb24obW9kZWwsICdJbiBwcm9ncmVzcycsIHRhc2tzSW5Qcm9ncmVzcyk7XHJcbiAgICBkYXNoYm9hcmQuYXBwZW5kQ2hpbGQoc2VjdGlvbkluUHJvZ3Jlc3MpO1xyXG5cclxuICAgIGRhc2hib2FyZC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVNlcGFyYXRvcigpKTtcclxuXHJcbiAgICBzZWN0aW9uRmluaXNoZWQgPSB0aGlzLmNyZWF0ZVNlY3Rpb24obW9kZWwsICdGaW5pc2hlZCcsIHRhc2tzRmluaXNoZWQpO1xyXG4gICAgZGFzaGJvYXJkLmFwcGVuZENoaWxkKHNlY3Rpb25GaW5pc2hlZCk7XHJcbiAgfVxyXG5cclxuICBkcmF3T3B0aW9uc0Ryb3Bkb3duKHBhcmVudDogSFRNTEVsZW1lbnQsIG1vZGVsOiBQcm9qZWN0TW9kZWwpIHtcclxuICAgIGxldCBkcm9wZG93bkl0ZW1zOiBIVE1MRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgLy8gTWFyayBwcm9qZWN0IGFzIGZpbmlzaGVkXHJcbiAgICBjb25zdCBidG5NYXJrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgYnRuTWFyay5jbGFzc05hbWUgPSAnZHJvcGRvd24taXRlbSc7XHJcbiAgICBidG5NYXJrLmlubmVySFRNTCA9ICdNYXJrIGFzIGZpbmlzaGVkJztcclxuICAgIGJ0bk1hcmsub25jbGljayA9ICgpID0+IHtcclxuXHJcbiAgICB9O1xyXG4gICAgZHJvcGRvd25JdGVtcy5wdXNoKGJ0bk1hcmspO1xyXG5cclxuICAgIC8vIERlbGV0ZSBwcm9qZWN0XHJcbiAgICBjb25zdCBidG5EZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBidG5EZWxldGUuY2xhc3NOYW1lID0gJ2Ryb3Bkb3duLWl0ZW0nO1xyXG4gICAgYnRuRGVsZXRlLmlubmVySFRNTCA9ICdEZWxldGUgcHJvamVjdCc7XHJcbiAgICBidG5EZWxldGUub25jbGljayA9ICgpID0+IHtcclxuXHJcbiAgICB9O1xyXG4gICAgZHJvcGRvd25JdGVtcy5wdXNoKGJ0bkRlbGV0ZSk7XHJcblxyXG4gICAgY29uc3QgZHJvcGRvd24gPSBNYW5hZ2VyVmlldy5kcmF3RHJvcGRvd25CdXR0b24ocGFyZW50LCAnYnRuT3B0aW9ucycsIGRyb3Bkb3duSXRlbXMpO1xyXG4gICAgY29uc3QgZHJvcGRvd25CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGRyb3Bkb3duLmFwcGVuZENoaWxkKGRyb3Bkb3duQnV0dG9uKTtcclxuICAgIGRyb3Bkb3duQnV0dG9uLmNsYXNzTmFtZSA9ICdidG4gYnRuLWxpZ2h0JztcclxuICAgIGRyb3Bkb3duQnV0dG9uLmlkID0gJ2J0bk9wdGlvbnMnO1xyXG4gICAgZHJvcGRvd25CdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICdkcm9wZG93bicpO1xyXG4gICAgZHJvcGRvd25CdXR0b24uaW5uZXJIVE1MID0gJ+KLric7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVTZWN0aW9uKG1vZGVsOiBQcm9qZWN0TW9kZWwsIHNlY3Rpb25OYW1lOiBzdHJpbmcsIHRhc2tzOiBUYXNrW10pOiBIVE1MRWxlbWVudCB7XHJcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzZWN0aW9uLmNsYXNzTmFtZSA9ICd0YXNrRGFzaGJvYXJkU2VjdGlvbic7XHJcbiAgICBjb25zdCBsYmxTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgbGJsU2VjdGlvbi5jbGFzc05hbWUgPSAnbGJsU2VjdGlvbic7XHJcbiAgICBsYmxTZWN0aW9uLmlubmVySFRNTCA9IHNlY3Rpb25OYW1lO1xyXG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChsYmxTZWN0aW9uKTtcclxuXHJcbiAgICB0YXNrcy5mb3JFYWNoKCh0OiBUYXNrKSA9PiB0LnZpZXcuZHJhd1ByZXZpZXcoc2VjdGlvbiwgdC5tb2RlbCwgbW9kZWwsIHNlY3Rpb25OYW1lLCBudWxsKSk7XHJcblxyXG4gICAgY29uc3QgYnRuQWRkVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYnRuQWRkVGFzay5jbGFzc05hbWUgPSAnYnRuQWRkVGFzayc7XHJcbiAgICBidG5BZGRUYXNrLmlubmVySFRNTCA9ICc8aSBjbGFzcz1cImZhcyBmYS1wbHVzIGljb25Qcm9qZWN0RWRpdG9yXCI+PC9pPic7XHJcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGJ0bkFkZFRhc2spO1xyXG5cclxuICAgIHJldHVybiBzZWN0aW9uO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlU2VwYXJhdG9yKCk6IEhUTUxFbGVtZW50IHtcclxuICAgIGNvbnN0IHNlcGFyYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc2VwYXJhdG9yLmNsYXNzTmFtZSA9ICdzZXBhcmF0b3InO1xyXG4gICAgcmV0dXJuIHNlcGFyYXRvcjtcclxuICB9XHJcblxyXG4gIGV2YWx1YXRlVGltZUxlZnQobGFiZWw6IEhUTUxFbGVtZW50LCBtb2RlbDogUHJvamVjdE1vZGVsLCBzZWxlY3RlZERhdGU6IERhdGUpIHtcclxuICAgIGxhYmVsLmlubmVySFRNTCA9IGDigKIgJHttb2RlbC5nZXRUaW1lUmVtYWluaW5nKHRydWUsIHNlbGVjdGVkRGF0ZSl9YDtcclxuICB9XHJcblxyXG4gIHN0YXRpYyBldmFsdWF0ZVRhc2tzRmluaXNoZWQobGFiZWxUYXNrczogRWxlbWVudCwgbGFiZWxQZXJjZW50YWdlOiBFbGVtZW50LCBwcm9ncmVzc0JhcjogSFRNTEVsZW1lbnQsIG1vZGVsOiBQcm9qZWN0TW9kZWwpIHtcclxuICAgIGxhYmVsVGFza3MuaW5uZXJIVE1MID1cclxuICAgICAgYOKAoiAke21vZGVsLmdldE51bU9mVGFza3NJblN0YXRlKFRhc2tTdGF0ZS5GSU5JU0hFRCl9LyR7bW9kZWwuZ2V0TnVtT2ZUYXNrcygpfSB0YXNrcyBmaW5pc2hlZGA7XHJcblxyXG4gICAgY29uc3QgcGVyY2VudGFnZURvbmUgPSBtb2RlbC5nZXRQZXJjZW50YWdlRG9uZSgpO1xyXG4gICAgbGFiZWxQZXJjZW50YWdlLmlubmVySFRNTCA9IGAke3BlcmNlbnRhZ2VEb25lfSVgO1xyXG4gICAgcHJvZ3Jlc3NCYXIuc3R5bGUud2lkdGggPSBgJHtwZXJjZW50YWdlRG9uZX0lYDtcclxuICB9XHJcblxyXG4gIGFzeW5jIHNhdmVEYXRhRnJvbUZvcm0obW9kZWw6IFByb2plY3RNb2RlbCwgbmV3UHJvamVjdDogYm9vbGVhbiwgbWFuYWdlck1vZGVsOiBNYW5hZ2VyTW9kZWwpIHtcclxuICAgIGNvbnN0IG5hbWUgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0UHJvamVjdE5hbWUnKSkudmFsdWU7XHJcbiAgICBjb25zdCBkYXRlID0gKDxIVE1MSW5wdXRFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dFByb2plY3REdWVEYXRlJykpLnZhbHVlO1xyXG5cclxuICAgIG1vZGVsLm5hbWUgPSBuYW1lO1xyXG4gICAgbW9kZWwuc2V0RHVlRGF0ZShuZXcgRGF0ZShkYXRlKSk7XHJcblxyXG4gICAgaWYgKG5ld1Byb2plY3QpIHtcclxuICAgICAgY29uc3QgdXNlciA9IG1hbmFnZXJNb2RlbC5nZXRDdXJyZW50VXNlcigpLm1vZGVsO1xyXG4gICAgICBjb25zdCBuZXdQcm9qZWN0OiBQcm9qZWN0ID0gbmV3IFByb2plY3QodW5kZWZpbmVkLCBtb2RlbC5uYW1lLCBtb2RlbC5nZXREdWVEYXRlKCksIG1vZGVsLmdldFRpbWVzdGFtcCgpKTtcclxuICAgICAgY29uc3QgcmVzcG9uc2U6IGFueSA9IGF3YWl0IERhdGFiYXNlQVBJLmFkZFByb2plY3QobmV3UHJvamVjdC5tb2RlbCwgdXNlci5nZXRJZCgpKTtcclxuICAgICAgYXdhaXQgRGF0YWJhc2VBUEkuYWRkVGFza3MobW9kZWwuZ2V0VGFza3MoKSwgcmVzcG9uc2UuaWQpO1xyXG4gICAgICBtYW5hZ2VyTW9kZWwuYWRkTmV3UHJvamVjdChuZXdQcm9qZWN0KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBjb25zdCBwcm9qZWN0UHJvbWlzZSA9IERhdGFiYXNlQVBJLnVwZGF0ZVByb2plY3RzKFtcclxuICAgICAgICBuZXcgUHJvamVjdChtb2RlbC5nZXRJZCgpLCBtb2RlbC5uYW1lLCBtb2RlbC5nZXREdWVEYXRlKCksIG1vZGVsLmdldFRpbWVzdGFtcCgpKVxyXG4gICAgICBdKTtcclxuICAgICAgY29uc3QgdGFza1Byb21pc2UgPSBEYXRhYmFzZUFQSS51cGRhdGVUYXNrcyhtb2RlbC5nZXRUYXNrcygpKTtcclxuXHJcbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICB0YXNrUHJvbWlzZSxcclxuICAgICAgICBwcm9qZWN0UHJvbWlzZVxyXG4gICAgICBdKTtcclxuICAgIH1cclxuICB9XHJcbn0iLCJleHBvcnQgZW51bSBUYXNrU3RhdGUge1xyXG4gIFRPX0RPID0gJ1RvIGRvJyxcclxuICBJTl9QUk9HUkVTUyA9ICdJbiBwcm9ncmVzcycsXHJcbiAgRklOSVNIRUQgPSAnRmluaXNoZWQnLFxyXG59XHJcbiIsImltcG9ydCB7IFRhc2tTdGF0ZSB9IGZyb20gXCIuLi90YXNrU3RhdGVcIjtcclxuaW1wb3J0IHsgVGFza01vZGVsIH0gZnJvbSBcIi4vbW9kZWxcIjtcclxuaW1wb3J0IHsgVGFza1ZpZXcgfSBmcm9tIFwiLi92aWV3XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGFzayB7XHJcbiAgICBwdWJsaWMgbW9kZWw6IFRhc2tNb2RlbDtcclxuICAgIHB1YmxpYyB2aWV3OiBUYXNrVmlldztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIHN0YXRlOiBUYXNrU3RhdGUpIHtcclxuICAgICAgICB0aGlzLm1vZGVsID0gbmV3IFRhc2tNb2RlbChpZCwgbmFtZSwgc3RhdGUpO1xyXG4gICAgICAgIHRoaXMudmlldyA9IG5ldyBUYXNrVmlldygpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVGFza1N0YXRlIH0gZnJvbSAnLi4vdGFza1N0YXRlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUYXNrTW9kZWwge1xyXG4gIHByaXZhdGUgaWQ6IG51bWJlcjtcclxuICBwdWJsaWMgbmFtZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgc3RhdGU6IFRhc2tTdGF0ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgbmFtZTogc3RyaW5nLCBzdGF0ZTogVGFza1N0YXRlKSB7XHJcbiAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG4gIH1cclxuXHJcbiAgZ2V0SWQoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLmlkO1xyXG4gIH1cclxuXHJcbiAgZ2V0U3RhdGUoKTogVGFza1N0YXRlIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXRlO1xyXG4gIH1cclxuXHJcbiAgc2V0U3RhdGUodDogVGFza1N0YXRlKSB7XHJcbiAgICB0aGlzLnN0YXRlID0gdDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgTWFuYWdlck1vZGVsIH0gZnJvbSBcIi4uL21hbmFnZXIvbW9kZWxcIjtcclxuaW1wb3J0IHsgUHJvamVjdE1vZGVsIH0gZnJvbSBcIi4uL3Byb2plY3QvbW9kZWxcIjtcclxuaW1wb3J0IHsgUHJvamVjdFZpZXcgfSBmcm9tIFwiLi4vcHJvamVjdC92aWV3XCI7XHJcbmltcG9ydCB7IFRhc2tTdGF0ZSB9IGZyb20gXCIuLi90YXNrU3RhdGVcIjtcclxuaW1wb3J0IHsgVGFza01vZGVsIH0gZnJvbSBcIi4vbW9kZWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUYXNrVmlldyB7XHJcbiAgICBjb250YWluZXI6IEhUTUxFbGVtZW50O1xyXG4gICAgZHJhd1ByZXZpZXcocGFyZW50OiBIVE1MRWxlbWVudCwgbW9kZWw6IFRhc2tNb2RlbCwgcHJvamVjdE1vZGVsOiBQcm9qZWN0TW9kZWwsIHNlY3Rpb246IHN0cmluZywgY29udGFpbmVyOiBIVE1MRWxlbWVudCwgc3dpdGNoaW5nU2VjdGlvbnM6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGNvbnN0IGZpcnN0VGltZSA9IChjb250YWluZXIgPT09IG51bGwpO1xyXG4gICAgICAgIGlmIChmaXJzdFRpbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBpZiAoc3dpdGNoaW5nU2VjdGlvbnMpXHJcbiAgICAgICAgICAgICAgICBwYXJlbnQuaW5zZXJ0QmVmb3JlKGNvbnRhaW5lciwgcGFyZW50LmNoaWxkcmVuW3BhcmVudC5jaGlsZHJlbi5sZW5ndGggLSAxXSk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgd2hpbGUgKGNvbnRhaW5lci5jaGlsZHJlblswXSlcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5jaGlsZHJlblswXS5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICd0YXNrUHJldmlldyc7XHJcbiAgICAgICAgY29udGFpbmVyLm9ubW91c2VlbnRlciA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGljb25Hb0xlZnQpIGljb25Hb0xlZnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgICAgICAgICBpZiAoaWNvbkdvUmlnaHQpIGljb25Hb1JpZ2h0LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29udGFpbmVyLm9ubW91c2VsZWF2ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGljb25Hb0xlZnQpIGljb25Hb0xlZnQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgICAgICBpZiAoaWNvbkdvUmlnaHQpIGljb25Hb1JpZ2h0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29udGFpbmVyLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdoaWxlIChjb250YWluZXIuY2hpbGRyZW5bMF0pXHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuY2hpbGRyZW5bMF0ucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRyYXdFZGl0b3IoXHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIsXHJcbiAgICAgICAgICAgICAgICBtb2RlbCxcclxuICAgICAgICAgICAgICAgIHByb2plY3RNb2RlbCxcclxuICAgICAgICAgICAgICAgIHNlY3Rpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaWNvbkdvTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgICAgICBpZiAoc2VjdGlvbiAhPT0gJ1RvIGRvJykge1xyXG4gICAgICAgICAgICBpY29uR29MZWZ0LmNsYXNzTmFtZSA9ICdmYXMgZmEtY2hldnJvbi1sZWZ0IGZhLXNtIGljb25Hb0xlZnRSaWdodCBoaWRlJztcclxuICAgICAgICAgICAgaWNvbkdvTGVmdC5vbmNsaWNrID0gKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VjdGlvblRvRG8gPSA8SFRNTEVsZW1lbnQ+cGFyZW50LnBhcmVudEVsZW1lbnQuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWN0aW9uSW5Qcm9ncmVzcyA9IDxIVE1MRWxlbWVudD5wYXJlbnQucGFyZW50RWxlbWVudC5jaGlsZHJlblsyXTtcclxuICAgICAgICAgICAgICAgIGlmIChzZWN0aW9uID09PSAnSW4gcHJvZ3Jlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc2V0U3RhdGUoVGFza1N0YXRlLlRPX0RPKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdQcmV2aWV3KHNlY3Rpb25Ub0RvLCBtb2RlbCwgcHJvamVjdE1vZGVsLCAnVG8gZG8nLCBudWxsLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlY3Rpb24gPT09ICdGaW5pc2hlZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zZXRTdGF0ZShUYXNrU3RhdGUuSU5fUFJPR1JFU1MpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd1ByZXZpZXcoc2VjdGlvbkluUHJvZ3Jlc3MsIG1vZGVsLCBwcm9qZWN0TW9kZWwsICdJbiBwcm9ncmVzcycsIG51bGwsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucmVldmFsdWF0ZVByb2dyZXNzKHByb2plY3RNb2RlbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGljb25Hb0xlZnQpO1xyXG5cclxuICAgICAgICBjb25zdCBsYmxUYXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgbGJsVGFza05hbWUuaW5uZXJIVE1MID0gTWFuYWdlck1vZGVsLnNob3J0ZW5TdHJpbmcobW9kZWwubmFtZSwgOSk7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxibFRhc2tOYW1lKTtcclxuXHJcbiAgICAgICAgY29uc3QgaWNvbkdvUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgICAgaWYgKHNlY3Rpb24gIT09ICdGaW5pc2hlZCcpIHtcclxuICAgICAgICAgICAgaWNvbkdvUmlnaHQuY2xhc3NOYW1lID0gJ2ZhcyBmYS1jaGV2cm9uLXJpZ2h0IGZhLXNtIGljb25Hb0xlZnRSaWdodCBoaWRlJztcclxuICAgICAgICAgICAgaWNvbkdvUmlnaHQub25jbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlY3Rpb25GaW5pc2hlZCA9IDxIVE1MRWxlbWVudD5wYXJlbnQucGFyZW50RWxlbWVudC5jaGlsZHJlbls0XTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlY3Rpb25JblByb2dyZXNzID0gPEhUTUxFbGVtZW50PnBhcmVudC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzJdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlY3Rpb24gPT09ICdJbiBwcm9ncmVzcycpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zZXRTdGF0ZShUYXNrU3RhdGUuRklOSVNIRUQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd1ByZXZpZXcoc2VjdGlvbkZpbmlzaGVkLCBtb2RlbCwgcHJvamVjdE1vZGVsLCAnRmluaXNoZWQnLCBudWxsLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlY3Rpb24gPT09ICdUbyBkbycpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zZXRTdGF0ZShUYXNrU3RhdGUuSU5fUFJPR1JFU1MpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd1ByZXZpZXcoc2VjdGlvbkluUHJvZ3Jlc3MsIG1vZGVsLCBwcm9qZWN0TW9kZWwsICdJbiBwcm9ncmVzcycsIG51bGwsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucmVldmFsdWF0ZVByb2dyZXNzKHByb2plY3RNb2RlbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGljb25Hb1JpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3RWRpdG9yKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIG1vZGVsOiBUYXNrTW9kZWwsIHByb2plY3RNb2RlbDogUHJvamVjdE1vZGVsLCBzZWN0aW9uOiBzdHJpbmcpIHtcclxuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnZXhwYW5kJyk7XHJcbiAgICAgICAgY29udGFpbmVyLm9uY2xpY2sgPSBudWxsO1xyXG5cclxuICAgICAgICBjb25zdCBpbnB1dFRhc2tOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBpbnB1dFRhc2tOYW1lLmlkID0gJ2lucHV0VGFza05hbWUnO1xyXG4gICAgICAgIGlucHV0VGFza05hbWUuY2xhc3NOYW1lID0gJ2Zvcm0tY29udHJvbCBpbnB1dFRhc2tOYW1lJztcclxuICAgICAgICBpbnB1dFRhc2tOYW1lLnZhbHVlID0gbW9kZWwubmFtZTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRUYXNrTmFtZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ0blNhdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidG5TYXZlLmNsYXNzTmFtZSA9ICdidG4gYnRuLXN1Y2Nlc3MgYnRuU2F2ZVRhc2snO1xyXG4gICAgICAgIGJ0blNhdmUuaW5uZXJIVE1MID0gJ1NhdmUnO1xyXG4gICAgICAgIGJ0blNhdmUub25jbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIC8vIHVwZGF0ZSB0YXNrIG5hbWVcclxuICAgICAgICAgICAgbW9kZWwubmFtZSA9IGlucHV0VGFza05hbWUudmFsdWU7XHJcblxyXG4gICAgICAgICAgICAvLyBjbGVhciBlbGVtZW50XHJcbiAgICAgICAgICAgIGlucHV0VGFza05hbWUucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIGJ0blNhdmUucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRyYXdQcmV2aWV3KGNvbnRhaW5lci5wYXJlbnRFbGVtZW50LCBtb2RlbCwgcHJvamVjdE1vZGVsLCBzZWN0aW9uLCBjb250YWluZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuU2F2ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVldmFsdWF0ZVByb2dyZXNzKHByb2plY3RNb2RlbDogUHJvamVjdE1vZGVsKSB7XHJcbiAgICAgICAgY29uc3QgbGJsVGFza3NEb25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbGJsVGFza3NEb25lJylbMF07XHJcbiAgICAgICAgY29uc3QgbGJsUGVyY2VudGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsYmxQZXJjZW50YWdlJyk7XHJcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSA8SFRNTEVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvZ3Jlc3MtYmFyJylbMF07XHJcbiAgICAgICAgUHJvamVjdFZpZXcuZXZhbHVhdGVUYXNrc0ZpbmlzaGVkKGxibFRhc2tzRG9uZSwgbGJsUGVyY2VudGFnZSwgcHJvZ3Jlc3MsIHByb2plY3RNb2RlbCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBVc2VyTW9kZWwgfSBmcm9tICcuL21vZGVsJztcclxuaW1wb3J0IHsgVXNlclZpZXcgfSBmcm9tICcuL3ZpZXcnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXIge1xyXG4gIHB1YmxpYyBtb2RlbDogVXNlck1vZGVsO1xyXG4gIHB1YmxpYyB2aWV3OiBVc2VyVmlldztcclxuXHJcbiAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgbmlja25hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5tb2RlbCA9IG5ldyBVc2VyTW9kZWwoaWQsIG5pY2tuYW1lLCBwYXNzd29yZCk7XHJcbiAgICB0aGlzLnZpZXcgPSBuZXcgVXNlclZpZXcoKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuLi9wcm9qZWN0L2NvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgVGFzayB9IGZyb20gXCIuLi90YXNrL2NvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgVGFza1N0YXRlIH0gZnJvbSBcIi4uL3Rhc2tTdGF0ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVzZXJNb2RlbCB7XHJcbiAgICBwcml2YXRlIGlkOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgbmlja25hbWU6IHN0cmluZztcclxuICAgIHByaXZhdGUgcGFzc3dvcmQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgcHJvamVjdHM6IFByb2plY3RbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBuaWNrbmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMubmlja25hbWUgPSBuaWNrbmFtZTtcclxuICAgICAgICB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldElkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UGFzc3dvcmQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wYXNzd29yZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcm9qZWN0cygpOiBQcm9qZWN0W10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFByb2plY3RzKHA6IFByb2plY3RbXSkge1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE51bU9mUHJvamVjdHMoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkUHJvamVjdChwOiBQcm9qZWN0KSB7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKHApO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVByb2plY3QoaWQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMgPSB0aGlzLnByb2plY3RzLmZpbHRlcigocDogUHJvamVjdCkgPT4gcC5tb2RlbC5nZXRJZCgpICE9PSBpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgc29ydFByb2plY3RzKGNyaXRlcmlhOiAnZ2V0VGltZXN0YW1wJyB8ICdnZXREdWVEYXRlJyB8ICdnZXROdW1PZlRhc2tzJywgcmV2ZXJzZU9wZXJhdG9yczogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5zb3J0KChhOiBQcm9qZWN0LCBiOiBQcm9qZWN0KTogbnVtYmVyID0+IHtcclxuICAgICAgICAgICAgaWYgKGEubW9kZWxbY3JpdGVyaWFdKCkgPCBiLm1vZGVsW2NyaXRlcmlhXSgpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChyZXZlcnNlT3BlcmF0b3JzID8gMSA6IC0xKTtcclxuICAgICAgICAgICAgZWxzZSBpZiAoYS5tb2RlbFtjcml0ZXJpYV0oKSA+IGIubW9kZWxbY3JpdGVyaWFdKCkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKHJldmVyc2VPcGVyYXRvcnMgPyAtMSA6IDEpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIDA7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBtYXJrQWxsQXNGaW5pc2hlZCgpIHtcclxuICAgICAgICB0aGlzLnByb2plY3RzLm1hcCgocHJvajogUHJvamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBwcm9qLm1vZGVsLmdldFRhc2tzKCkubWFwKCh0YXNrOiBUYXNrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0YXNrLm1vZGVsLnNldFN0YXRlKFRhc2tTdGF0ZS5GSU5JU0hFRCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUFsbFByb2plY3RzKCkge1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBbXTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuL21vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVXNlclZpZXcge1xyXG4gICAgY29udGFpbmVyOiBIVE1MRWxlbWVudDtcclxuICAgIHBhcmVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgRGF0YWJhc2VBUEkgfSBmcm9tIFwiLi9kYXRhYmFzZUFQSVwiO1xyXG5pbXBvcnQgeyBNYW5hZ2VyIH0gZnJvbSBcIi4vbWFuYWdlci9jb250cm9sbGVyXCI7XHJcblxyXG5jb25zdCBkYlVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnO1xyXG5EYXRhYmFzZUFQSS5zZXRSb290VVJMKGRiVVJMKTtcclxuXHJcbmNvbnN0IG1hbmFnZXI6IE1hbmFnZXIgPSBuZXcgTWFuYWdlcigpO1xyXG5tYW5hZ2VyLmRyYXcoZG9jdW1lbnQuYm9keSk7Il0sInNvdXJjZVJvb3QiOiIifQ==