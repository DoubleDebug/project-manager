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

/***/ "./node_modules/rxjs/dist/esm5/internal/NotificationFactories.js":
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/NotificationFactories.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COMPLETE_NOTIFICATION": () => (/* binding */ COMPLETE_NOTIFICATION),
/* harmony export */   "errorNotification": () => (/* binding */ errorNotification),
/* harmony export */   "nextNotification": () => (/* binding */ nextNotification),
/* harmony export */   "createNotification": () => (/* binding */ createNotification)
/* harmony export */ });
var COMPLETE_NOTIFICATION = (function () { return createNotification('C', undefined, undefined); })();
function errorNotification(error) {
    return createNotification('E', undefined, error);
}
function nextNotification(value) {
    return createNotification('N', value, undefined);
}
function createNotification(kind, value, error) {
    return {
        kind: kind,
        value: value,
        error: error,
    };
}
//# sourceMappingURL=NotificationFactories.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/Observable.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/Observable.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Observable": () => (/* binding */ Observable)
/* harmony export */ });
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscriber */ "./node_modules/rxjs/dist/esm5/internal/Subscriber.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/dist/esm5/internal/Subscription.js");
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./symbol/observable */ "./node_modules/rxjs/dist/esm5/internal/symbol/observable.js");
/* harmony import */ var _util_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/pipe */ "./node_modules/rxjs/dist/esm5/internal/util/pipe.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./node_modules/rxjs/dist/esm5/internal/config.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/dist/esm5/internal/util/isFunction.js");






var Observable = (function () {
    function Observable(subscribe) {
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber(observerOrNext, error, complete);
        if (_config__WEBPACK_IMPORTED_MODULE_1__.config.useDeprecatedSynchronousErrorHandling) {
            this._deprecatedSyncErrorSubscribe(subscriber);
        }
        else {
            var _a = this, operator = _a.operator, source = _a.source;
            subscriber.add(operator
                ?
                    operator.call(subscriber, source)
                : source
                    ?
                        this._subscribe(subscriber)
                    :
                        this._trySubscribe(subscriber));
        }
        return subscriber;
    };
    Observable.prototype._deprecatedSyncErrorSubscribe = function (subscriber) {
        var localSubscriber = subscriber;
        localSubscriber._syncErrorHack_isSubscribing = true;
        var operator = this.operator;
        if (operator) {
            subscriber.add(operator.call(subscriber, this.source));
        }
        else {
            try {
                subscriber.add(this._subscribe(subscriber));
            }
            catch (err) {
                localSubscriber.__syncError = err;
            }
        }
        var dest = localSubscriber;
        while (dest) {
            if ('__syncError' in dest) {
                try {
                    throw dest.__syncError;
                }
                finally {
                    subscriber.unsubscribe();
                }
            }
            dest = dest.destination;
        }
        localSubscriber._syncErrorHack_isSubscribing = false;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            sink.error(err);
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    subscription === null || subscription === void 0 ? void 0 : subscription.unsubscribe();
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var _a;
        return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
    };
    Observable.prototype[_symbol_observable__WEBPACK_IMPORTED_MODULE_2__.observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        return operations.length ? (0,_util_pipe__WEBPACK_IMPORTED_MODULE_3__.pipeFromArray)(operations)(this) : this;
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return (value = x); }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());

function getPromiseCtor(promiseCtor) {
    var _a;
    return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : _config__WEBPACK_IMPORTED_MODULE_1__.config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
    return value && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_4__.isFunction)(value.next) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_4__.isFunction)(value.error) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_4__.isFunction)(value.complete);
}
function isSubscriber(value) {
    return (value && value instanceof _Subscriber__WEBPACK_IMPORTED_MODULE_0__.Subscriber) || (isObserver(value) && (0,_Subscription__WEBPACK_IMPORTED_MODULE_5__.isSubscription)(value));
}
//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/Subscriber.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/Subscriber.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Subscriber": () => (/* binding */ Subscriber),
/* harmony export */   "SafeSubscriber": () => (/* binding */ SafeSubscriber),
/* harmony export */   "EMPTY_OBSERVER": () => (/* binding */ EMPTY_OBSERVER)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/dist/esm5/internal/util/isFunction.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/dist/esm5/internal/Subscription.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./node_modules/rxjs/dist/esm5/internal/config.js");
/* harmony import */ var _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util/reportUnhandledError */ "./node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js");
/* harmony import */ var _util_noop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/noop */ "./node_modules/rxjs/dist/esm5/internal/util/noop.js");
/* harmony import */ var _NotificationFactories__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NotificationFactories */ "./node_modules/rxjs/dist/esm5/internal/NotificationFactories.js");
/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scheduler/timeoutProvider */ "./node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js");








var Subscriber = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(Subscriber, _super);
    function Subscriber(destination) {
        var _this = _super.call(this) || this;
        _this.isStopped = false;
        if (destination) {
            _this.destination = destination;
            if ((0,_Subscription__WEBPACK_IMPORTED_MODULE_1__.isSubscription)(destination)) {
                destination.add(_this);
            }
        }
        else {
            _this.destination = EMPTY_OBSERVER;
        }
        return _this;
    }
    Subscriber.create = function (next, error, complete) {
        return new SafeSubscriber(next, error, complete);
    };
    Subscriber.prototype.next = function (value) {
        if (this.isStopped) {
            handleStoppedNotification((0,_NotificationFactories__WEBPACK_IMPORTED_MODULE_2__.nextNotification)(value), this);
        }
        else {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (this.isStopped) {
            handleStoppedNotification((0,_NotificationFactories__WEBPACK_IMPORTED_MODULE_2__.errorNotification)(err), this);
        }
        else {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (this.isStopped) {
            handleStoppedNotification(_NotificationFactories__WEBPACK_IMPORTED_MODULE_2__.COMPLETE_NOTIFICATION, this);
        }
        else {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (!this.closed) {
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
            this.destination = null;
        }
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        try {
            this.destination.error(err);
        }
        finally {
            this.unsubscribe();
        }
    };
    Subscriber.prototype._complete = function () {
        try {
            this.destination.complete();
        }
        finally {
            this.unsubscribe();
        }
    };
    return Subscriber;
}(_Subscription__WEBPACK_IMPORTED_MODULE_1__.Subscription));

var SafeSubscriber = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(SafeSubscriber, _super);
    function SafeSubscriber(observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        var next;
        if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_3__.isFunction)(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            (next = observerOrNext.next, error = observerOrNext.error, complete = observerOrNext.complete);
            var context_1;
            if (_this && _config__WEBPACK_IMPORTED_MODULE_4__.config.useDeprecatedNextContext) {
                context_1 = Object.create(observerOrNext);
                context_1.unsubscribe = function () { return _this.unsubscribe(); };
            }
            else {
                context_1 = observerOrNext;
            }
            next = next === null || next === void 0 ? void 0 : next.bind(context_1);
            error = error === null || error === void 0 ? void 0 : error.bind(context_1);
            complete = complete === null || complete === void 0 ? void 0 : complete.bind(context_1);
        }
        _this.destination = {
            next: next ? wrapForErrorHandling(next, _this) : _util_noop__WEBPACK_IMPORTED_MODULE_5__.noop,
            error: wrapForErrorHandling(error !== null && error !== void 0 ? error : defaultErrorHandler, _this),
            complete: complete ? wrapForErrorHandling(complete, _this) : _util_noop__WEBPACK_IMPORTED_MODULE_5__.noop,
        };
        return _this;
    }
    return SafeSubscriber;
}(Subscriber));

function wrapForErrorHandling(handler, instance) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        try {
            handler.apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(args)));
        }
        catch (err) {
            if (_config__WEBPACK_IMPORTED_MODULE_4__.config.useDeprecatedSynchronousErrorHandling) {
                if (instance._syncErrorHack_isSubscribing) {
                    instance.__syncError = err;
                }
                else {
                    throw err;
                }
            }
            else {
                (0,_util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_6__.reportUnhandledError)(err);
            }
        }
    };
}
function defaultErrorHandler(err) {
    throw err;
}
function handleStoppedNotification(notification, subscriber) {
    var onStoppedNotification = _config__WEBPACK_IMPORTED_MODULE_4__.config.onStoppedNotification;
    onStoppedNotification && _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_7__.timeoutProvider.setTimeout(function () { return onStoppedNotification(notification, subscriber); });
}
var EMPTY_OBSERVER = {
    closed: true,
    next: _util_noop__WEBPACK_IMPORTED_MODULE_5__.noop,
    error: defaultErrorHandler,
    complete: _util_noop__WEBPACK_IMPORTED_MODULE_5__.noop,
};
//# sourceMappingURL=Subscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/Subscription.js":
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/Subscription.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Subscription": () => (/* binding */ Subscription),
/* harmony export */   "EMPTY_SUBSCRIPTION": () => (/* binding */ EMPTY_SUBSCRIPTION),
/* harmony export */   "isSubscription": () => (/* binding */ isSubscription)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/dist/esm5/internal/util/isFunction.js");
/* harmony import */ var _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/UnsubscriptionError */ "./node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js");
/* harmony import */ var _util_arrRemove__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/arrRemove */ "./node_modules/rxjs/dist/esm5/internal/util/arrRemove.js");




var Subscription = (function () {
    function Subscription(initialTeardown) {
        this.initialTeardown = initialTeardown;
        this.closed = false;
        this._parentage = null;
        this._teardowns = null;
    }
    Subscription.prototype.unsubscribe = function () {
        var e_1, _a, e_2, _b;
        var errors;
        if (!this.closed) {
            this.closed = true;
            var _parentage = this._parentage;
            if (_parentage) {
                this._parentage = null;
                if (Array.isArray(_parentage)) {
                    try {
                        for (var _parentage_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                            var parent_1 = _parentage_1_1.value;
                            parent_1.remove(this);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                else {
                    _parentage.remove(this);
                }
            }
            var initialTeardown = this.initialTeardown;
            if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(initialTeardown)) {
                try {
                    initialTeardown();
                }
                catch (e) {
                    errors = e instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_2__.UnsubscriptionError ? e.errors : [e];
                }
            }
            var _teardowns = this._teardowns;
            if (_teardowns) {
                this._teardowns = null;
                try {
                    for (var _teardowns_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__values)(_teardowns), _teardowns_1_1 = _teardowns_1.next(); !_teardowns_1_1.done; _teardowns_1_1 = _teardowns_1.next()) {
                        var teardown_1 = _teardowns_1_1.value;
                        try {
                            execTeardown(teardown_1);
                        }
                        catch (err) {
                            errors = errors !== null && errors !== void 0 ? errors : [];
                            if (err instanceof _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_2__.UnsubscriptionError) {
                                errors = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)((0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(errors)), (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(err.errors));
                            }
                            else {
                                errors.push(err);
                            }
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_teardowns_1_1 && !_teardowns_1_1.done && (_b = _teardowns_1.return)) _b.call(_teardowns_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            if (errors) {
                throw new _util_UnsubscriptionError__WEBPACK_IMPORTED_MODULE_2__.UnsubscriptionError(errors);
            }
        }
    };
    Subscription.prototype.add = function (teardown) {
        var _a;
        if (teardown && teardown !== this) {
            if (this.closed) {
                execTeardown(teardown);
            }
            else {
                if (teardown instanceof Subscription) {
                    if (teardown.closed || teardown._hasParent(this)) {
                        return;
                    }
                    teardown._addParent(this);
                }
                (this._teardowns = (_a = this._teardowns) !== null && _a !== void 0 ? _a : []).push(teardown);
            }
        }
    };
    Subscription.prototype._hasParent = function (parent) {
        var _parentage = this._parentage;
        return _parentage === parent || (Array.isArray(_parentage) && _parentage.includes(parent));
    };
    Subscription.prototype._addParent = function (parent) {
        var _parentage = this._parentage;
        this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
    };
    Subscription.prototype._removeParent = function (parent) {
        var _parentage = this._parentage;
        if (_parentage === parent) {
            this._parentage = null;
        }
        else if (Array.isArray(_parentage)) {
            (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_3__.arrRemove)(_parentage, parent);
        }
    };
    Subscription.prototype.remove = function (teardown) {
        var _teardowns = this._teardowns;
        _teardowns && (0,_util_arrRemove__WEBPACK_IMPORTED_MODULE_3__.arrRemove)(_teardowns, teardown);
        if (teardown instanceof Subscription) {
            teardown._removeParent(this);
        }
    };
    Subscription.EMPTY = (function () {
        var empty = new Subscription();
        empty.closed = true;
        return empty;
    })();
    return Subscription;
}());

var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
    return (value instanceof Subscription ||
        (value && 'closed' in value && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value.remove) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value.add) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(value.unsubscribe)));
}
function execTeardown(teardown) {
    if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(teardown)) {
        teardown();
    }
    else {
        teardown.unsubscribe();
    }
}
//# sourceMappingURL=Subscription.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/config.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/config.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config)
/* harmony export */ });
var config = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: undefined,
    useDeprecatedSynchronousErrorHandling: false,
    useDeprecatedNextContext: false,
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/observable/from.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/observable/from.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "from": () => (/* binding */ from),
/* harmony export */   "innerFrom": () => (/* binding */ innerFrom),
/* harmony export */   "fromArrayLike": () => (/* binding */ fromArrayLike)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isArrayLike */ "./node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js");
/* harmony import */ var _util_isPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/isPromise */ "./node_modules/rxjs/dist/esm5/internal/util/isPromise.js");
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/dist/esm5/internal/symbol/observable.js");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/dist/esm5/internal/Observable.js");
/* harmony import */ var _scheduled_scheduled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduled/scheduled */ "./node_modules/rxjs/dist/esm5/internal/scheduled/scheduled.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/isFunction */ "./node_modules/rxjs/dist/esm5/internal/util/isFunction.js");
/* harmony import */ var _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../util/reportUnhandledError */ "./node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js");
/* harmony import */ var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isInteropObservable */ "./node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js");
/* harmony import */ var _util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/isAsyncIterable */ "./node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js");
/* harmony import */ var _util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/throwUnobservableError */ "./node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js");
/* harmony import */ var _util_isIterable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/isIterable */ "./node_modules/rxjs/dist/esm5/internal/util/isIterable.js");
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/isReadableStreamLike */ "./node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js");













function from(input, scheduler) {
    return scheduler ? (0,_scheduled_scheduled__WEBPACK_IMPORTED_MODULE_0__.scheduled)(input, scheduler) : innerFrom(input);
}
function innerFrom(input) {
    if (input instanceof _Observable__WEBPACK_IMPORTED_MODULE_1__.Observable) {
        return input;
    }
    if (input != null) {
        if ((0,_util_isInteropObservable__WEBPACK_IMPORTED_MODULE_2__.isInteropObservable)(input)) {
            return fromInteropObservable(input);
        }
        if ((0,_util_isArrayLike__WEBPACK_IMPORTED_MODULE_3__.isArrayLike)(input)) {
            return fromArrayLike(input);
        }
        if ((0,_util_isPromise__WEBPACK_IMPORTED_MODULE_4__.isPromise)(input)) {
            return fromPromise(input);
        }
        if ((0,_util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_5__.isAsyncIterable)(input)) {
            return fromAsyncIterable(input);
        }
        if ((0,_util_isIterable__WEBPACK_IMPORTED_MODULE_6__.isIterable)(input)) {
            return fromIterable(input);
        }
        if ((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_7__.isReadableStreamLike)(input)) {
            return fromReadableStreamLike(input);
        }
    }
    throw (0,_util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_8__.createInvalidObservableTypeError)(input);
}
function fromInteropObservable(obj) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_1__.Observable(function (subscriber) {
        var obs = obj[_symbol_observable__WEBPACK_IMPORTED_MODULE_9__.observable]();
        if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_10__.isFunction)(obs.subscribe)) {
            return obs.subscribe(subscriber);
        }
        throw new TypeError('Provided object does not correctly implement Symbol.observable');
    });
}
function fromArrayLike(array) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_1__.Observable(function (subscriber) {
        for (var i = 0; i < array.length && !subscriber.closed; i++) {
            subscriber.next(array[i]);
        }
        subscriber.complete();
    });
}
function fromPromise(promise) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_1__.Observable(function (subscriber) {
        promise
            .then(function (value) {
            if (!subscriber.closed) {
                subscriber.next(value);
                subscriber.complete();
            }
        }, function (err) { return subscriber.error(err); })
            .then(null, _util_reportUnhandledError__WEBPACK_IMPORTED_MODULE_11__.reportUnhandledError);
    });
}
function fromIterable(iterable) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_1__.Observable(function (subscriber) {
        var e_1, _a;
        try {
            for (var iterable_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__values)(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
                var value = iterable_1_1.value;
                subscriber.next(value);
                if (subscriber.closed) {
                    return;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return)) _a.call(iterable_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        subscriber.complete();
    });
}
function fromAsyncIterable(asyncIterable) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_1__.Observable(function (subscriber) {
        process(asyncIterable, subscriber).catch(function (err) { return subscriber.error(err); });
    });
}
function fromReadableStreamLike(readableStream) {
    return fromAsyncIterable((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_7__.readableStreamLikeToAsyncGenerator)(readableStream));
}
function process(asyncIterable, subscriber) {
    var asyncIterable_1, asyncIterable_1_1;
    var e_2, _a;
    return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__awaiter)(this, void 0, void 0, function () {
        var value, e_2_1;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__generator)(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, 6, 11]);
                    asyncIterable_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__asyncValues)(asyncIterable);
                    _b.label = 1;
                case 1: return [4, asyncIterable_1.next()];
                case 2:
                    if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done)) return [3, 4];
                    value = asyncIterable_1_1.value;
                    subscriber.next(value);
                    if (subscriber.closed) {
                        return [2];
                    }
                    _b.label = 3;
                case 3: return [3, 1];
                case 4: return [3, 11];
                case 5:
                    e_2_1 = _b.sent();
                    e_2 = { error: e_2_1 };
                    return [3, 11];
                case 6:
                    _b.trys.push([6, , 9, 10]);
                    if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return))) return [3, 8];
                    return [4, _a.call(asyncIterable_1)];
                case 7:
                    _b.sent();
                    _b.label = 8;
                case 8: return [3, 10];
                case 9:
                    if (e_2) throw e_2.error;
                    return [7];
                case 10: return [7];
                case 11:
                    subscriber.complete();
                    return [2];
            }
        });
    });
}
//# sourceMappingURL=from.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/observable/fromArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/observable/fromArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "internalFromArray": () => (/* binding */ internalFromArray)
/* harmony export */ });
/* harmony import */ var _scheduled_scheduleArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduled/scheduleArray */ "./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleArray.js");
/* harmony import */ var _from__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./from */ "./node_modules/rxjs/dist/esm5/internal/observable/from.js");


function internalFromArray(input, scheduler) {
    return scheduler ? (0,_scheduled_scheduleArray__WEBPACK_IMPORTED_MODULE_0__.scheduleArray)(input, scheduler) : (0,_from__WEBPACK_IMPORTED_MODULE_1__.fromArrayLike)(input);
}
//# sourceMappingURL=fromArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromEvent": () => (/* binding */ fromEvent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/dist/esm5/internal/Observable.js");
/* harmony import */ var _operators_mergeMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../operators/mergeMap */ "./node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js");
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isArrayLike */ "./node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isFunction */ "./node_modules/rxjs/dist/esm5/internal/util/isFunction.js");
/* harmony import */ var _util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/mapOneOrManyArgs */ "./node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js");
/* harmony import */ var _fromArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fromArray */ "./node_modules/rxjs/dist/esm5/internal/observable/fromArray.js");







var nodeEventEmitterMethods = ['addListener', 'removeListener'];
var eventTargetMethods = ['addEventListener', 'removeEventListener'];
var jqueryMethods = ['on', 'off'];
function fromEvent(target, eventName, options, resultSelector) {
    if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(options)) {
        resultSelector = options;
        options = undefined;
    }
    if (resultSelector) {
        return fromEvent(target, eventName, options).pipe((0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_1__.mapOneOrManyArgs)(resultSelector));
    }
    var _a = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__read)(isEventTarget(target)
        ? eventTargetMethods.map(function (methodName) { return function (handler) { return target[methodName](eventName, handler, options); }; })
        :
            isNodeStyleEventEmitter(target)
                ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName))
                : isJQueryStyleEventEmitter(target)
                    ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName))
                    : [], 2), add = _a[0], remove = _a[1];
    if (!add) {
        if ((0,_util_isArrayLike__WEBPACK_IMPORTED_MODULE_3__.isArrayLike)(target)) {
            return (0,_operators_mergeMap__WEBPACK_IMPORTED_MODULE_4__.mergeMap)(function (subTarget) { return fromEvent(subTarget, eventName, options); })((0,_fromArray__WEBPACK_IMPORTED_MODULE_5__.internalFromArray)(target));
        }
    }
    if (!add) {
        throw new TypeError('Invalid event target');
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_6__.Observable(function (subscriber) {
        var handler = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return subscriber.next(1 < args.length ? args : args[0]);
        };
        add(handler);
        return function () { return remove(handler); };
    });
}
function toCommonHandlerRegistry(target, eventName) {
    return function (methodName) { return function (handler) { return target[methodName](eventName, handler); }; };
}
function isNodeStyleEventEmitter(target) {
    return (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.addListener) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.removeListener);
}
function isJQueryStyleEventEmitter(target) {
    return (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.on) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.off);
}
function isEventTarget(target) {
    return (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.addEventListener) && (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(target.removeEventListener);
}
//# sourceMappingURL=fromEvent.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js":
/*!******************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OperatorSubscriber": () => (/* binding */ OperatorSubscriber)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/dist/esm5/internal/Subscriber.js");


var OperatorSubscriber = (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__extends)(OperatorSubscriber, _super);
    function OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
        var _this = _super.call(this, destination) || this;
        _this.onFinalize = onFinalize;
        _this._next = onNext
            ? function (value) {
                try {
                    onNext(value);
                }
                catch (err) {
                    destination.error(err);
                }
            }
            : _super.prototype._next;
        _this._error = onError
            ? function (err) {
                try {
                    onError(err);
                }
                catch (err) {
                    destination.error(err);
                }
                finally {
                    this.unsubscribe();
                }
            }
            : _super.prototype._error;
        _this._complete = onComplete
            ? function () {
                try {
                    onComplete();
                }
                catch (err) {
                    destination.error(err);
                }
                finally {
                    this.unsubscribe();
                }
            }
            : _super.prototype._complete;
        return _this;
    }
    OperatorSubscriber.prototype.unsubscribe = function () {
        var _a;
        var closed = this.closed;
        _super.prototype.unsubscribe.call(this);
        !closed && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
    };
    return OperatorSubscriber;
}(_Subscriber__WEBPACK_IMPORTED_MODULE_1__.Subscriber));

//# sourceMappingURL=OperatorSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/map.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/map.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "map": () => (/* binding */ map)
/* harmony export */ });
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ "./node_modules/rxjs/dist/esm5/internal/util/lift.js");
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ "./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js");


function map(project, thisArg) {
    return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)(function (source, subscriber) {
        var index = 0;
        source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.OperatorSubscriber(subscriber, function (value) {
            subscriber.next(project.call(thisArg, value, index++));
        }));
    });
}
//# sourceMappingURL=map.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/mergeInternals.js":
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/mergeInternals.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mergeInternals": () => (/* binding */ mergeInternals)
/* harmony export */ });
/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../observable/from */ "./node_modules/rxjs/dist/esm5/internal/observable/from.js");
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ "./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js");


function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalTeardown) {
    var buffer = [];
    var active = 0;
    var index = 0;
    var isComplete = false;
    var checkComplete = function () {
        if (isComplete && !buffer.length && !active) {
            subscriber.complete();
        }
    };
    var outerNext = function (value) { return (active < concurrent ? doInnerSub(value) : buffer.push(value)); };
    var doInnerSub = function (value) {
        expand && subscriber.next(value);
        active++;
        var innerComplete = false;
        (0,_observable_from__WEBPACK_IMPORTED_MODULE_0__.innerFrom)(project(value, index++)).subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.OperatorSubscriber(subscriber, function (innerValue) {
            onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);
            if (expand) {
                outerNext(innerValue);
            }
            else {
                subscriber.next(innerValue);
            }
        }, function () {
            innerComplete = true;
        }, undefined, function () {
            if (innerComplete) {
                try {
                    active--;
                    var _loop_1 = function () {
                        var bufferedValue = buffer.shift();
                        innerSubScheduler ? subscriber.add(innerSubScheduler.schedule(function () { return doInnerSub(bufferedValue); })) : doInnerSub(bufferedValue);
                    };
                    while (buffer.length && active < concurrent) {
                        _loop_1();
                    }
                    checkComplete();
                }
                catch (err) {
                    subscriber.error(err);
                }
            }
        }));
    };
    source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.OperatorSubscriber(subscriber, outerNext, function () {
        isComplete = true;
        checkComplete();
    }));
    return function () {
        additionalTeardown === null || additionalTeardown === void 0 ? void 0 : additionalTeardown();
    };
}
//# sourceMappingURL=mergeInternals.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js":
/*!********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mergeMap": () => (/* binding */ mergeMap)
/* harmony export */ });
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map */ "./node_modules/rxjs/dist/esm5/internal/operators/map.js");
/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/from */ "./node_modules/rxjs/dist/esm5/internal/observable/from.js");
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/lift */ "./node_modules/rxjs/dist/esm5/internal/util/lift.js");
/* harmony import */ var _mergeInternals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mergeInternals */ "./node_modules/rxjs/dist/esm5/internal/operators/mergeInternals.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isFunction */ "./node_modules/rxjs/dist/esm5/internal/util/isFunction.js");





function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) { concurrent = Infinity; }
    if ((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(resultSelector)) {
        return mergeMap(function (a, i) { return (0,_map__WEBPACK_IMPORTED_MODULE_1__.map)(function (b, ii) { return resultSelector(a, b, i, ii); })((0,_observable_from__WEBPACK_IMPORTED_MODULE_2__.innerFrom)(project(a, i))); }, concurrent);
    }
    else if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
    }
    return (0,_util_lift__WEBPACK_IMPORTED_MODULE_3__.operate)(function (source, subscriber) { return (0,_mergeInternals__WEBPACK_IMPORTED_MODULE_4__.mergeInternals)(source, subscriber, project, concurrent); });
}
//# sourceMappingURL=mergeMap.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/operators/switchMap.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/operators/switchMap.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "switchMap": () => (/* binding */ switchMap)
/* harmony export */ });
/* harmony import */ var _observable_from__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observable/from */ "./node_modules/rxjs/dist/esm5/internal/observable/from.js");
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/lift */ "./node_modules/rxjs/dist/esm5/internal/util/lift.js");
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OperatorSubscriber */ "./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js");



function switchMap(project, resultSelector) {
    return (0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.operate)(function (source, subscriber) {
        var innerSubscriber = null;
        var index = 0;
        var isComplete = false;
        var checkComplete = function () { return isComplete && !innerSubscriber && subscriber.complete(); };
        source.subscribe(new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.OperatorSubscriber(subscriber, function (value) {
            innerSubscriber === null || innerSubscriber === void 0 ? void 0 : innerSubscriber.unsubscribe();
            var innerIndex = 0;
            var outerIndex = index++;
            (0,_observable_from__WEBPACK_IMPORTED_MODULE_2__.innerFrom)(project(value, outerIndex)).subscribe((innerSubscriber = new _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.OperatorSubscriber(subscriber, function (innerValue) { return subscriber.next(resultSelector ? resultSelector(value, innerValue, outerIndex, innerIndex++) : innerValue); }, function () {
                innerSubscriber = null;
                checkComplete();
            })));
        }, function () {
            isComplete = true;
            checkComplete();
        }));
    });
}
//# sourceMappingURL=switchMap.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleArray.js":
/*!*************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleArray.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scheduleArray": () => (/* binding */ scheduleArray)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/dist/esm5/internal/Observable.js");

function scheduleArray(input, scheduler) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(function (subscriber) {
        var i = 0;
        return scheduler.schedule(function () {
            if (i === input.length) {
                subscriber.complete();
            }
            else {
                subscriber.next(input[i++]);
                if (!subscriber.closed) {
                    this.schedule();
                }
            }
        });
    });
}
//# sourceMappingURL=scheduleArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleAsyncIterable.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleAsyncIterable.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scheduleAsyncIterable": () => (/* binding */ scheduleAsyncIterable)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/dist/esm5/internal/Observable.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/dist/esm5/internal/Subscription.js");


function scheduleAsyncIterable(input, scheduler) {
    if (!input) {
        throw new Error('Iterable cannot be null');
    }
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(function (subscriber) {
        var sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__.Subscription();
        sub.add(scheduler.schedule(function () {
            var iterator = input[Symbol.asyncIterator]();
            sub.add(scheduler.schedule(function () {
                var _this = this;
                iterator.next().then(function (result) {
                    if (result.done) {
                        subscriber.complete();
                    }
                    else {
                        subscriber.next(result.value);
                        _this.schedule();
                    }
                });
            }));
        }));
        return sub;
    });
}
//# sourceMappingURL=scheduleAsyncIterable.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleIterable.js":
/*!****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleIterable.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scheduleIterable": () => (/* binding */ scheduleIterable)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/dist/esm5/internal/Observable.js");
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/dist/esm5/internal/symbol/iterator.js");
/* harmony import */ var _util_isFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/isFunction */ "./node_modules/rxjs/dist/esm5/internal/util/isFunction.js");
/* harmony import */ var _util_caughtSchedule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/caughtSchedule */ "./node_modules/rxjs/dist/esm5/internal/util/caughtSchedule.js");




function scheduleIterable(input, scheduler) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(function (subscriber) {
        var iterator;
        subscriber.add(scheduler.schedule(function () {
            iterator = input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_1__.iterator]();
            (0,_util_caughtSchedule__WEBPACK_IMPORTED_MODULE_2__.caughtSchedule)(subscriber, scheduler, function () {
                var _a = iterator.next(), value = _a.value, done = _a.done;
                if (done) {
                    subscriber.complete();
                }
                else {
                    subscriber.next(value);
                    this.schedule();
                }
            });
        }));
        return function () { return (0,_util_isFunction__WEBPACK_IMPORTED_MODULE_3__.isFunction)(iterator === null || iterator === void 0 ? void 0 : iterator.return) && iterator.return(); };
    });
}
//# sourceMappingURL=scheduleIterable.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleObservable.js":
/*!******************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleObservable.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scheduleObservable": () => (/* binding */ scheduleObservable)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/dist/esm5/internal/Observable.js");
/* harmony import */ var _Subscription__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Subscription */ "./node_modules/rxjs/dist/esm5/internal/Subscription.js");
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/dist/esm5/internal/symbol/observable.js");



function scheduleObservable(input, scheduler) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(function (subscriber) {
        var sub = new _Subscription__WEBPACK_IMPORTED_MODULE_1__.Subscription();
        sub.add(scheduler.schedule(function () {
            var observable = input[_symbol_observable__WEBPACK_IMPORTED_MODULE_2__.observable]();
            sub.add(observable.subscribe({
                next: function (value) { sub.add(scheduler.schedule(function () { return subscriber.next(value); })); },
                error: function (err) { sub.add(scheduler.schedule(function () { return subscriber.error(err); })); },
                complete: function () { sub.add(scheduler.schedule(function () { return subscriber.complete(); })); },
            }));
        }));
        return sub;
    });
}
//# sourceMappingURL=scheduleObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/scheduled/schedulePromise.js":
/*!***************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/scheduled/schedulePromise.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "schedulePromise": () => (/* binding */ schedulePromise)
/* harmony export */ });
/* harmony import */ var _Observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Observable */ "./node_modules/rxjs/dist/esm5/internal/Observable.js");

function schedulePromise(input, scheduler) {
    return new _Observable__WEBPACK_IMPORTED_MODULE_0__.Observable(function (subscriber) {
        return scheduler.schedule(function () {
            return input.then(function (value) {
                subscriber.add(scheduler.schedule(function () {
                    subscriber.next(value);
                    subscriber.add(scheduler.schedule(function () { return subscriber.complete(); }));
                }));
            }, function (err) {
                subscriber.add(scheduler.schedule(function () { return subscriber.error(err); }));
            });
        });
    });
}
//# sourceMappingURL=schedulePromise.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleReadableStreamLike.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleReadableStreamLike.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scheduleReadableStreamLike": () => (/* binding */ scheduleReadableStreamLike)
/* harmony export */ });
/* harmony import */ var _scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scheduleAsyncIterable */ "./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleAsyncIterable.js");
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/isReadableStreamLike */ "./node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js");


function scheduleReadableStreamLike(input, scheduler) {
    return (0,_scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_0__.scheduleAsyncIterable)((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_1__.readableStreamLikeToAsyncGenerator)(input), scheduler);
}
//# sourceMappingURL=scheduleReadableStreamLike.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/scheduled/scheduled.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/scheduled/scheduled.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "scheduled": () => (/* binding */ scheduled)
/* harmony export */ });
/* harmony import */ var _scheduleObservable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scheduleObservable */ "./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleObservable.js");
/* harmony import */ var _schedulePromise__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./schedulePromise */ "./node_modules/rxjs/dist/esm5/internal/scheduled/schedulePromise.js");
/* harmony import */ var _scheduleArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scheduleArray */ "./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleArray.js");
/* harmony import */ var _scheduleIterable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scheduleIterable */ "./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleIterable.js");
/* harmony import */ var _scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scheduleAsyncIterable */ "./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleAsyncIterable.js");
/* harmony import */ var _util_isInteropObservable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/isInteropObservable */ "./node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js");
/* harmony import */ var _util_isPromise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/isPromise */ "./node_modules/rxjs/dist/esm5/internal/util/isPromise.js");
/* harmony import */ var _util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isArrayLike */ "./node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js");
/* harmony import */ var _util_isIterable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/isIterable */ "./node_modules/rxjs/dist/esm5/internal/util/isIterable.js");
/* harmony import */ var _util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/isAsyncIterable */ "./node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js");
/* harmony import */ var _util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../util/throwUnobservableError */ "./node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js");
/* harmony import */ var _util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/isReadableStreamLike */ "./node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js");
/* harmony import */ var _scheduleReadableStreamLike__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./scheduleReadableStreamLike */ "./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleReadableStreamLike.js");













function scheduled(input, scheduler) {
    if (input != null) {
        if ((0,_util_isInteropObservable__WEBPACK_IMPORTED_MODULE_0__.isInteropObservable)(input)) {
            return (0,_scheduleObservable__WEBPACK_IMPORTED_MODULE_1__.scheduleObservable)(input, scheduler);
        }
        if ((0,_util_isArrayLike__WEBPACK_IMPORTED_MODULE_2__.isArrayLike)(input)) {
            return (0,_scheduleArray__WEBPACK_IMPORTED_MODULE_3__.scheduleArray)(input, scheduler);
        }
        if ((0,_util_isPromise__WEBPACK_IMPORTED_MODULE_4__.isPromise)(input)) {
            return (0,_schedulePromise__WEBPACK_IMPORTED_MODULE_5__.schedulePromise)(input, scheduler);
        }
        if ((0,_util_isAsyncIterable__WEBPACK_IMPORTED_MODULE_6__.isAsyncIterable)(input)) {
            return (0,_scheduleAsyncIterable__WEBPACK_IMPORTED_MODULE_7__.scheduleAsyncIterable)(input, scheduler);
        }
        if ((0,_util_isIterable__WEBPACK_IMPORTED_MODULE_8__.isIterable)(input)) {
            return (0,_scheduleIterable__WEBPACK_IMPORTED_MODULE_9__.scheduleIterable)(input, scheduler);
        }
        if ((0,_util_isReadableStreamLike__WEBPACK_IMPORTED_MODULE_10__.isReadableStreamLike)(input)) {
            return (0,_scheduleReadableStreamLike__WEBPACK_IMPORTED_MODULE_11__.scheduleReadableStreamLike)(input, scheduler);
        }
    }
    throw (0,_util_throwUnobservableError__WEBPACK_IMPORTED_MODULE_12__.createInvalidObservableTypeError)(input);
}
//# sourceMappingURL=scheduled.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js":
/*!***************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timeoutProvider": () => (/* binding */ timeoutProvider)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var timeoutProvider = {
    setTimeout: function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var delegate = timeoutProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) || setTimeout).apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(args)));
    },
    clearTimeout: function (handle) {
        var delegate = timeoutProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
    },
    delegate: undefined,
};
//# sourceMappingURL=timeoutProvider.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/symbol/iterator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/symbol/iterator.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSymbolIterator": () => (/* binding */ getSymbolIterator),
/* harmony export */   "iterator": () => (/* binding */ iterator)
/* harmony export */ });
function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return '@@iterator';
    }
    return Symbol.iterator;
}
var iterator = getSymbolIterator();
//# sourceMappingURL=iterator.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/symbol/observable.js":
/*!*******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/symbol/observable.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "observable": () => (/* binding */ observable)
/* harmony export */ });
var observable = (function () { return (typeof Symbol === 'function' && Symbol.observable) || '@@observable'; })();
//# sourceMappingURL=observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js":
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnsubscriptionError": () => (/* binding */ UnsubscriptionError)
/* harmony export */ });
/* harmony import */ var _createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createErrorClass */ "./node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js");

var UnsubscriptionError = (0,_createErrorClass__WEBPACK_IMPORTED_MODULE_0__.createErrorClass)(function (_super) {
    return function UnsubscriptionErrorImpl(errors) {
        _super(this);
        this.message = errors
            ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ')
            : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
    };
});
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/arrRemove.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/arrRemove.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "arrRemove": () => (/* binding */ arrRemove)
/* harmony export */ });
function arrRemove(arr, item) {
    if (arr) {
        var index = arr.indexOf(item);
        0 <= index && arr.splice(index, 1);
    }
}
//# sourceMappingURL=arrRemove.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/caughtSchedule.js":
/*!*********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/caughtSchedule.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "caughtSchedule": () => (/* binding */ caughtSchedule)
/* harmony export */ });
function caughtSchedule(subscriber, scheduler, execute, delay) {
    if (delay === void 0) { delay = 0; }
    var subscription = scheduler.schedule(function () {
        try {
            execute.call(this);
        }
        catch (err) {
            subscriber.error(err);
        }
    }, delay);
    subscriber.add(subscription);
    return subscription;
}
//# sourceMappingURL=caughtSchedule.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js":
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createErrorClass": () => (/* binding */ createErrorClass)
/* harmony export */ });
function createErrorClass(createImpl) {
    var _super = function (instance) {
        Error.call(instance);
        instance.stack = new Error().stack;
    };
    var ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
}
//# sourceMappingURL=createErrorClass.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/identity.js":
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/identity.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "identity": () => (/* binding */ identity)
/* harmony export */ });
function identity(x) {
    return x;
}
//# sourceMappingURL=identity.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js":
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isArrayLike": () => (/* binding */ isArrayLike)
/* harmony export */ });
var isArrayLike = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });
//# sourceMappingURL=isArrayLike.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js":
/*!**********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isAsyncIterable": () => (/* binding */ isAsyncIterable)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ "./node_modules/rxjs/dist/esm5/internal/util/isFunction.js");

function isAsyncIterable(obj) {
    return Symbol.asyncIterator && (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}
//# sourceMappingURL=isAsyncIterable.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/isFunction.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/isFunction.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isFunction": () => (/* binding */ isFunction)
/* harmony export */ });
function isFunction(value) {
    return typeof value === 'function';
}
//# sourceMappingURL=isFunction.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js":
/*!**************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isInteropObservable": () => (/* binding */ isInteropObservable)
/* harmony export */ });
/* harmony import */ var _symbol_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../symbol/observable */ "./node_modules/rxjs/dist/esm5/internal/symbol/observable.js");
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ "./node_modules/rxjs/dist/esm5/internal/util/isFunction.js");


function isInteropObservable(input) {
    return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(input[_symbol_observable__WEBPACK_IMPORTED_MODULE_1__.observable]);
}
//# sourceMappingURL=isInteropObservable.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/isIterable.js":
/*!*****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/isIterable.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isIterable": () => (/* binding */ isIterable)
/* harmony export */ });
/* harmony import */ var _symbol_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../symbol/iterator */ "./node_modules/rxjs/dist/esm5/internal/symbol/iterator.js");
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ "./node_modules/rxjs/dist/esm5/internal/util/isFunction.js");


function isIterable(input) {
    return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(input === null || input === void 0 ? void 0 : input[_symbol_iterator__WEBPACK_IMPORTED_MODULE_1__.iterator]);
}
//# sourceMappingURL=isIterable.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/isPromise.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/isPromise.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isPromise": () => (/* binding */ isPromise)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ "./node_modules/rxjs/dist/esm5/internal/util/isFunction.js");

function isPromise(value) {
    return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(value === null || value === void 0 ? void 0 : value.then);
}
//# sourceMappingURL=isPromise.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js":
/*!***************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "readableStreamLikeToAsyncGenerator": () => (/* binding */ readableStreamLikeToAsyncGenerator),
/* harmony export */   "isReadableStreamLike": () => (/* binding */ isReadableStreamLike)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isFunction */ "./node_modules/rxjs/dist/esm5/internal/util/isFunction.js");


function readableStreamLikeToAsyncGenerator(readableStream) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__asyncGenerator)(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
        var reader, _a, value, done;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__generator)(this, function (_b) {
            switch (_b.label) {
                case 0:
                    reader = readableStream.getReader();
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, , 9, 10]);
                    _b.label = 2;
                case 2:
                    if (false) {}
                    return [4, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(reader.read())];
                case 3:
                    _a = _b.sent(), value = _a.value, done = _a.done;
                    if (!done) return [3, 5];
                    return [4, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(void 0)];
                case 4: return [2, _b.sent()];
                case 5: return [4, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__await)(value)];
                case 6: return [4, _b.sent()];
                case 7:
                    _b.sent();
                    return [3, 2];
                case 8: return [3, 10];
                case 9:
                    reader.releaseLock();
                    return [7];
                case 10: return [2];
            }
        });
    });
}
function isReadableStreamLike(obj) {
    return (0,_isFunction__WEBPACK_IMPORTED_MODULE_1__.isFunction)(obj === null || obj === void 0 ? void 0 : obj.getReader);
}
//# sourceMappingURL=isReadableStreamLike.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/lift.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/lift.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hasLift": () => (/* binding */ hasLift),
/* harmony export */   "operate": () => (/* binding */ operate)
/* harmony export */ });
/* harmony import */ var _isFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isFunction */ "./node_modules/rxjs/dist/esm5/internal/util/isFunction.js");

function hasLift(source) {
    return (0,_isFunction__WEBPACK_IMPORTED_MODULE_0__.isFunction)(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
    return function (source) {
        if (hasLift(source)) {
            return source.lift(function (liftedSource) {
                try {
                    return init(liftedSource, this);
                }
                catch (err) {
                    this.error(err);
                }
            });
        }
        throw new TypeError('Unable to lift unknown Observable type');
    };
}
//# sourceMappingURL=lift.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js":
/*!***********************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapOneOrManyArgs": () => (/* binding */ mapOneOrManyArgs)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _operators_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../operators/map */ "./node_modules/rxjs/dist/esm5/internal/operators/map.js");


var isArray = Array.isArray;
function callOrApply(fn, args) {
    return isArray(args) ? fn.apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__spreadArray)([], (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__read)(args))) : fn(args);
}
function mapOneOrManyArgs(fn) {
    return (0,_operators_map__WEBPACK_IMPORTED_MODULE_1__.map)(function (args) { return callOrApply(fn, args); });
}
//# sourceMappingURL=mapOneOrManyArgs.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/noop.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/noop.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "noop": () => (/* binding */ noop)
/* harmony export */ });
function noop() { }
//# sourceMappingURL=noop.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/pipe.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/pipe.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pipe": () => (/* binding */ pipe),
/* harmony export */   "pipeFromArray": () => (/* binding */ pipeFromArray)
/* harmony export */ });
/* harmony import */ var _identity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity */ "./node_modules/rxjs/dist/esm5/internal/util/identity.js");

function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
function pipeFromArray(fns) {
    if (fns.length === 0) {
        return _identity__WEBPACK_IMPORTED_MODULE_0__.identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
//# sourceMappingURL=pipe.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js":
/*!***************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "reportUnhandledError": () => (/* binding */ reportUnhandledError)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./node_modules/rxjs/dist/esm5/internal/config.js");
/* harmony import */ var _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scheduler/timeoutProvider */ "./node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js");


function reportUnhandledError(err) {
    _scheduler_timeoutProvider__WEBPACK_IMPORTED_MODULE_0__.timeoutProvider.setTimeout(function () {
        var onUnhandledError = _config__WEBPACK_IMPORTED_MODULE_1__.config.onUnhandledError;
        if (onUnhandledError) {
            onUnhandledError(err);
        }
        else {
            throw err;
        }
    });
}
//# sourceMappingURL=reportUnhandledError.js.map

/***/ }),

/***/ "./node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createInvalidObservableTypeError": () => (/* binding */ createInvalidObservableTypeError)
/* harmony export */ });
function createInvalidObservableTypeError(input) {
    return new TypeError("You provided " + (input !== null && typeof input === 'object' ? 'an invalid object' : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
//# sourceMappingURL=throwUnobservableError.js.map

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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/dist/esm5/internal/operators/switchMap.js");
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
        // Search bar
        this.drawSearchBar(menu, model);
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
    ManagerView.prototype.drawSearchBar = function (parent, model) {
        var _this = this;
        var inputGroup = document.createElement('div');
        inputGroup.id = 'searchInputGroup';
        inputGroup.className = 'input-group';
        parent.appendChild(inputGroup);
        var form = document.createElement('div');
        form.className = 'form-outline';
        inputGroup.appendChild(form);
        var inputSearch = document.createElement('input');
        inputSearch.id = 'inputSearch';
        inputSearch.type = 'search';
        inputSearch.className = 'form-control hide';
        inputSearch.placeholder = 'Search public projects';
        form.appendChild(inputSearch);
        var btnSearch = document.createElement('i');
        btnSearch.id = 'btnSearch';
        btnSearch.className = 'fas fa-search fa-lg';
        btnSearch.onmouseenter = function () {
            inputSearch.classList.remove('hide');
            inputSearch.focus();
        };
        btnSearch.onclick = function () { return inputSearch.classList.toggle('hide'); };
        inputGroup.appendChild(btnSearch);
        (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.fromEvent)(inputSearch, 'input')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.switchMap)(function () { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (inputSearch.value === '')
                    return [2 /*return*/, null];
                return [2 /*return*/, _utils_databaseAPI__WEBPACK_IMPORTED_MODULE_0__.DatabaseAPI.getProjectsByText(inputSearch.value)];
            });
        }); }))
            .subscribe(function (projects) {
            if (projects) {
                // display all public projects
                // where the project name contains the input
                _this.redrawDashboard(projects, model, false);
            }
            else {
                // display user's projects
                var user = model.getCurrentUser().model;
                _this.redrawDashboard(user.getProjects(), model);
            }
        });
    };
    ManagerView.prototype.drawDashboard = function (projects, model, clickableProjects) {
        var _this = this;
        if (clickableProjects === void 0) { clickableProjects = true; }
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
            }, model, clickableProjects);
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
    ManagerView.prototype.redrawDashboard = function (projects, model, clickableProjects) {
        if (clickableProjects === void 0) { clickableProjects = true; }
        // clear empty dashboard message (if exists)
        var empty = document.getElementsByClassName('emptyDashboardMessage')[0];
        if (empty)
            empty.remove();
        // clear previous dashboard
        var dashboard = document.getElementsByClassName('dashboard')[0];
        (0,_utils_removeElementsChildren__WEBPACK_IMPORTED_MODULE_3__.removeElementsChildren)(dashboard);
        // redraw
        this.drawDashboard(projects, model, clickableProjects);
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
    Project.prototype.drawPreview = function (parent, goBackFunctionCallback, managerModel, clickable) {
        if (clickable === void 0) { clickable = true; }
        this.view.drawPreview(parent, this.model, goBackFunctionCallback, managerModel, clickable);
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
    ProjectView.prototype.drawPreview = function (parent, model, goBackFunctionCallback, managerModel, clickable) {
        var _this = this;
        if (clickable === void 0) { clickable = true; }
        this.parent = parent;
        var card = document.createElement('div');
        card.className = 'card project';
        card.onclick = function () {
            if (clickable) {
                // remove all project previews
                (0,_utils_removeElementsChildren__WEBPACK_IMPORTED_MODULE_5__.removeElementsChildren)(parent);
                // display project editor
                _this.drawEditor(parent, model, goBackFunctionCallback, managerModel);
            }
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
            return __generator(this, function (_a) {
                return [2 /*return*/, fetch(DatabaseAPI.rootURL + "/users/" + userId + "/projects")
                        .then(function (data) { return data.json(); })
                        .then(function (projectData) {
                        return DatabaseAPI.convertProjectFromDbToMvc(projectData);
                    })];
            });
        });
    };
    DatabaseAPI.getProjectsByText = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, fetch(DatabaseAPI.rootURL + "/projects?q=" + text)
                        .then(function (data) { return data.json(); })
                        .then(function (projectData) {
                        return DatabaseAPI.convertProjectFromDbToMvc(projectData);
                    })];
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


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__values": () => (/* binding */ __values),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9hc3NpZ24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Nsb25lT2JqZWN0L2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvZm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcHJvdGVjdGVkVG9rZW5zL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3RvSW50ZWdlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbXBhcmVBc2MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9kaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJbk1vbnRocy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2RpZmZlcmVuY2VJblNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9lbmRPZkRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2VuZE9mTW9udGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9mb3JtYXREaXN0YW5jZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2Zvcm1hdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzTGFzdERheU9mTW9udGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1ZhbGlkL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZE1hdGNoUGF0dGVybkZuL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0UmVsYXRpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL21hdGNoL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9Ob3RpZmljYXRpb25GYWN0b3JpZXMuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL09ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL1N1YnNjcmliZXIuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL1N1YnNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvY29uZmlnLmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9vYnNlcnZhYmxlL2Zyb20uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL29ic2VydmFibGUvZnJvbUFycmF5LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9vYnNlcnZhYmxlL2Zyb21FdmVudC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvb3BlcmF0b3JzL09wZXJhdG9yU3Vic2NyaWJlci5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvb3BlcmF0b3JzL21hcC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvb3BlcmF0b3JzL21lcmdlSW50ZXJuYWxzLmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9vcGVyYXRvcnMvbWVyZ2VNYXAuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL29wZXJhdG9ycy9zd2l0Y2hNYXAuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3NjaGVkdWxlZC9zY2hlZHVsZUFycmF5LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9zY2hlZHVsZWQvc2NoZWR1bGVBc3luY0l0ZXJhYmxlLmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9zY2hlZHVsZWQvc2NoZWR1bGVJdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvc2NoZWR1bGVkL3NjaGVkdWxlT2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvc2NoZWR1bGVkL3NjaGVkdWxlUHJvbWlzZS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvc2NoZWR1bGVkL3NjaGVkdWxlUmVhZGFibGVTdHJlYW1MaWtlLmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9zY2hlZHVsZWQvc2NoZWR1bGVkLmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9zY2hlZHVsZXIvdGltZW91dFByb3ZpZGVyLmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC9zeW1ib2wvaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3N5bWJvbC9vYnNlcnZhYmxlLmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL1Vuc3Vic2NyaXB0aW9uRXJyb3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvYXJyUmVtb3ZlLmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL2NhdWdodFNjaGVkdWxlLmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL2NyZWF0ZUVycm9yQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvaWRlbnRpdHkuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvaXNBcnJheUxpa2UuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvaXNBc3luY0l0ZXJhYmxlLmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL2lzRnVuY3Rpb24uanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvaXNJbnRlcm9wT2JzZXJ2YWJsZS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvdXRpbC9pc0l0ZXJhYmxlLmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL2lzUHJvbWlzZS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvdXRpbC9pc1JlYWRhYmxlU3RyZWFtTGlrZS5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvdXRpbC9saWZ0LmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL21hcE9uZU9yTWFueUFyZ3MuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vbm9kZV9tb2R1bGVzL3J4anMvZGlzdC9lc201L2ludGVybmFsL3V0aWwvbm9vcC5qcyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2VzbTUvaW50ZXJuYWwvdXRpbC9waXBlLmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL3JlcG9ydFVuaGFuZGxlZEVycm9yLmpzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvZXNtNS9pbnRlcm5hbC91dGlsL3Rocm93VW5vYnNlcnZhYmxlRXJyb3IuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vc3JjL3RzL21hbmFnZXIvY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9zcmMvdHMvbWFuYWdlci9tb2RlbC50cyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9zcmMvdHMvbWFuYWdlci92aWV3LnRzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL3NyYy90cy9wcm9qZWN0L2NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vc3JjL3RzL3Byb2plY3QvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vc3JjL3RzL3Byb2plY3Qvdmlldy50cyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9zcmMvdHMvdGFzay9jb250cm9sbGVyLnRzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL3NyYy90cy90YXNrL21vZGVsLnRzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL3NyYy90cy90YXNrL3ZpZXcudHMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vc3JjL3RzL3VzZXIvY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9zcmMvdHMvdXNlci9tb2RlbC50cyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9zcmMvdHMvdXNlci92aWV3LnRzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL3NyYy90cy91dGlscy9kYXRhYmFzZUFQSS50cyIsIndlYnBhY2s6Ly9wcm9qZWN0LW1hbmFnZXIvLi9zcmMvdHMvdXRpbHMvZHJvcGRvd24udHMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vc3JjL3RzL3V0aWxzL21vZGFsLnRzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL3NyYy90cy91dGlscy9yZW1vdmVFbGVtZW50c0NoaWxkcmVuLnRzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL3NyYy90cy91dGlscy9zaG9ydGVuU3RyaW5nLnRzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL3NyYy90cy91dGlscy90YXNrU3RhdGUudHMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vc3JjL3RzL3V0aWxzL3RvYXN0LnRzIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci8uL25vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb2plY3QtbWFuYWdlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJvamVjdC1tYW5hZ2VyLy4vc3JjL3RzL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7QUNUZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7O0FDZHdDO0FBQ3pCO0FBQ2YsU0FBUyx5REFBTSxHQUFHO0FBQ2xCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0gwRDtBQUNXO0FBQ0o7QUFDUTtBQUNkO0FBQ1E7QUFDTjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7O0FBRTdDO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLGdFQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBLHlCQUF5QixxRUFBYyxnQkFBZ0I7O0FBRXZELDRFQUE0RTs7QUFFNUU7QUFDQTtBQUNBLGFBQWEsa0VBQWU7QUFDNUIsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7OztBQUdMLFdBQVcsa0VBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxzQkFBc0Isd0VBQWlCLE9BQU87O0FBRTlDLFdBQVcsa0VBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGtFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsa0VBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULG9DQUFvQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsa0VBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULG9DQUFvQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxnRUFBaUI7QUFDaEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLGtFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxlQUFlLGlFQUFVOztBQUV6QjtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxrRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBLGtCQUFrQixvRUFBYTs7QUFFL0I7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsa0VBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxnRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxvQkFBb0Isc0VBQWU7O0FBRW5DO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLGtFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLGtFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxrRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUsa0VBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxnRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxnRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxrRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBLFdBQVcsa0VBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxnRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxnRUFBaUI7QUFDNUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxXQUFXLGdFQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0U7QUFDcEUsd0JBQXdCLDRDQUE0QztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsWUFBWTtBQUN2QixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcs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OztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDNU9BO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7OztBQ05rRDtBQUNIO0FBRS9DLElBQU0sS0FBSyxHQUFHLHVCQUF1QixDQUFDO0FBQ3RDLHNFQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRTlCLElBQU0sT0FBTyxHQUFZLElBQUksd0RBQU8sRUFBRSxDQUFDO0FBQ3ZDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRMZWFkaW5nWmVyb3MobnVtYmVyLCB0YXJnZXRMZW5ndGgpIHtcbiAgdmFyIHNpZ24gPSBudW1iZXIgPCAwID8gJy0nIDogJyc7XG4gIHZhciBvdXRwdXQgPSBNYXRoLmFicyhudW1iZXIpLnRvU3RyaW5nKCk7XG5cbiAgd2hpbGUgKG91dHB1dC5sZW5ndGggPCB0YXJnZXRMZW5ndGgpIHtcbiAgICBvdXRwdXQgPSAnMCcgKyBvdXRwdXQ7XG4gIH1cblxuICByZXR1cm4gc2lnbiArIG91dHB1dDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBkaXJ0eU9iamVjdCkge1xuICBpZiAodGFyZ2V0ID09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhc3NpZ24gcmVxdWlyZXMgdGhhdCBpbnB1dCBwYXJhbWV0ZXIgbm90IGJlIG51bGwgb3IgdW5kZWZpbmVkJyk7XG4gIH1cblxuICBkaXJ0eU9iamVjdCA9IGRpcnR5T2JqZWN0IHx8IHt9O1xuXG4gIGZvciAodmFyIHByb3BlcnR5IGluIGRpcnR5T2JqZWN0KSB7XG4gICAgaWYgKGRpcnR5T2JqZWN0Lmhhc093blByb3BlcnR5KHByb3BlcnR5KSkge1xuICAgICAgdGFyZ2V0W3Byb3BlcnR5XSA9IGRpcnR5T2JqZWN0W3Byb3BlcnR5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImltcG9ydCBhc3NpZ24gZnJvbSBcIi4uL2Fzc2lnbi9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2xvbmVPYmplY3QoZGlydHlPYmplY3QpIHtcbiAgcmV0dXJuIGFzc2lnbih7fSwgZGlydHlPYmplY3QpO1xufSIsImltcG9ydCBsaWdodEZvcm1hdHRlcnMgZnJvbSBcIi4uL2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ0RheU9mWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbnZhciBkYXlQZXJpb2RFbnVtID0ge1xuICBhbTogJ2FtJyxcbiAgcG06ICdwbScsXG4gIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICBub29uOiAnbm9vbicsXG4gIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICBuaWdodDogJ25pZ2h0J1xuICAvKlxuICAgKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gICAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAgICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCBNaWxsaXNlY29uZHMgaW4gZGF5ICAgICAgICAgICAgfFxuICAgKiB8ICBiICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICB8ICBCICB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICB8XG4gICAqIHwgIGMgIHwgU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWsgIHwgIEMqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHxcbiAgICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgfFxuICAgKiB8ICBlICB8IExvY2FsIGRheSBvZiB3ZWVrICAgICAgICAgICAgICB8ICBFICB8IERheSBvZiB3ZWVrICAgICAgICAgICAgICAgICAgICB8XG4gICAqIHwgIGYgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEYqIHwgRGF5IG9mIHdlZWsgaW4gbW9udGggICAgICAgICAgIHxcbiAgICogfCAgZyogfCBNb2RpZmllZCBKdWxpYW4gZGF5ICAgICAgICAgICAgfCAgRyAgfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICAgKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gICAqIHwgIGkhIHwgSVNPIGRheSBvZiB3ZWVrICAgICAgICAgICAgICAgIHwgIEkhIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgIHxcbiAgICogfCAgaiogfCBMb2NhbGl6ZWQgaG91ciB3LyBkYXkgcGVyaW9kICAgfCAgSiogfCBMb2NhbGl6ZWQgaG91ciB3L28gZGF5IHBlcmlvZCAgfFxuICAgKiB8ICBrICB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICB8ICBLICB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICB8XG4gICAqIHwgIGwqIHwgKGRlcHJlY2F0ZWQpICAgICAgICAgICAgICAgICAgIHwgIEwgIHwgU3RhbmQtYWxvbmUgbW9udGggICAgICAgICAgICAgIHxcbiAgICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICAgKiB8ICBuICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBOICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gICAqIHwgIG8hIHwgT3JkaW5hbCBudW1iZXIgbW9kaWZpZXIgICAgICAgIHwgIE8gIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgIHxcbiAgICogfCAgcCEgfCBMb25nIGxvY2FsaXplZCB0aW1lICAgICAgICAgICAgfCAgUCEgfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgfFxuICAgKiB8ICBxICB8IFN0YW5kLWFsb25lIHF1YXJ0ZXIgICAgICAgICAgICB8ICBRICB8IFF1YXJ0ZXIgICAgICAgICAgICAgICAgICAgICAgICB8XG4gICAqIHwgIHIqIHwgUmVsYXRlZCBHcmVnb3JpYW4geWVhciAgICAgICAgIHwgIFIhIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgIHxcbiAgICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICAgKiB8ICB0ISB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICB8ICBUISB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICB8XG4gICAqIHwgIHUgIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgIHwgIFUqIHwgQ3ljbGljIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAgICogfCAgdiogfCBUaW1lem9uZSAoZ2VuZXJpYyBub24tbG9jYXQuKSAgfCAgViogfCBUaW1lem9uZSAobG9jYXRpb24pICAgICAgICAgICAgfFxuICAgKiB8ICB3ICB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICB8ICBXKiB8IFdlZWsgb2YgbW9udGggICAgICAgICAgICAgICAgICB8XG4gICAqIHwgIHggIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgIHwgIFggIHwgVGltZXpvbmUgKElTTy04NjAxKSAgICAgICAgICAgIHxcbiAgICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgfFxuICAgKiB8ICB6ICB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSB8ICBaKiB8IFRpbWV6b25lIChhbGlhc2VzKSAgICAgICAgICAgICB8XG4gICAqXG4gICAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAgICpcbiAgICogTGV0dGVycyBtYXJrZWQgYnkgISBhcmUgbm9uLXN0YW5kYXJkLCBidXQgaW1wbGVtZW50ZWQgYnkgZGF0ZS1mbnM6XG4gICAqIC0gYG9gIG1vZGlmaWVzIHRoZSBwcmV2aW91cyB0b2tlbiB0byB0dXJuIGl0IGludG8gYW4gb3JkaW5hbCAoc2VlIGBmb3JtYXRgIGRvY3MpXG4gICAqIC0gYGlgIGlzIElTTyBkYXkgb2Ygd2Vlay4gRm9yIGBpYCBhbmQgYGlpYCBpcyByZXR1cm5zIG51bWVyaWMgSVNPIHdlZWsgZGF5cyxcbiAgICogICBpLmUuIDcgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4gICAqIC0gYElgIGlzIElTTyB3ZWVrIG9mIHllYXIsIGFzIG9wcG9zZWQgdG8gYHdgIHdoaWNoIGlzIGxvY2FsIHdlZWsgb2YgeWVhci5cbiAgICogLSBgUmAgaXMgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsIGFzIG9wcG9zZWQgdG8gYFlgIHdoaWNoIGlzIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gICAqICAgYFJgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgSWAgYW5kIGBpYFxuICAgKiAgIGZvciB1bml2ZXJzYWwgSVNPIHdlZWstbnVtYmVyaW5nIGRhdGUsIHdoZXJlYXNcbiAgICogICBgWWAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB3YCBhbmQgYGVgXG4gICAqICAgZm9yIHdlZWstbnVtYmVyaW5nIGRhdGUgc3BlY2lmaWMgdG8gdGhlIGxvY2FsZS5cbiAgICogLSBgUGAgaXMgbG9uZyBsb2NhbGl6ZWQgZGF0ZSBmb3JtYXRcbiAgICogLSBgcGAgaXMgbG9uZyBsb2NhbGl6ZWQgdGltZSBmb3JtYXRcbiAgICovXG5cbn07XG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gRXJhXG4gIEc6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZXJhID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpID4gMCA/IDEgOiAwO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gQUQsIEJDXG4gICAgICBjYXNlICdHJzpcbiAgICAgIGNhc2UgJ0dHJzpcbiAgICAgIGNhc2UgJ0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBBLCBCXG5cbiAgICAgIGNhc2UgJ0dHR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdydcbiAgICAgICAgfSk7XG4gICAgICAvLyBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdFxuXG4gICAgICBjYXNlICdHR0dHJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSAneW8nKSB7XG4gICAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHllYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnkoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgc2lnbmVkV2Vla1llYXIgPSBnZXRVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB3ZWVrWWVhciA9IHNpZ25lZFdlZWtZZWFyID4gMCA/IHNpZ25lZFdlZWtZZWFyIDogMSAtIHNpZ25lZFdlZWtZZWFyOyAvLyBUd28gZGlnaXQgeWVhclxuXG4gICAgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgICB2YXIgdHdvRGlnaXRZZWFyID0gd2Vla1llYXIgJSAxMDA7XG4gICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHR3b0RpZ2l0WWVhciwgMik7XG4gICAgfSAvLyBPcmRpbmFsIG51bWJlclxuXG5cbiAgICBpZiAodG9rZW4gPT09ICdZbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWtZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfSAvLyBQYWRkaW5nXG5cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBpc29XZWVrWWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRhdGUpOyAvLyBQYWRkaW5nXG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBFeHRlbmRlZCB5ZWFyLiBUaGlzIGlzIGEgc2luZ2xlIG51bWJlciBkZXNpZ25hdGluZyB0aGUgeWVhciBvZiB0aGlzIGNhbGVuZGFyIHN5c3RlbS5cbiAgLy8gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIGxvY2FsaXplcnMgYXJlIEIuQy4geWVhcnM6XG4gIC8vIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gIC8vIHwtLS0tLS18LS0tLS18LS0tLS18XG4gIC8vIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gIC8vIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gIC8vIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gIC8vIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAgLy8gd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkLlxuICB1OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFF1YXJ0ZXJcbiAgUTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAnUSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdRUSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAnUW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAnUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdRUVFRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAnUVFRUSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBxdWFydGVyXG4gIHE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ3EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcblxuICAgICAgY2FzZSAncXEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG5cbiAgICAgIGNhc2UgJ3FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG5cbiAgICAgIGNhc2UgJ3FxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcblxuICAgICAgY2FzZSAncXFxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG5cbiAgICAgIGNhc2UgJ3FxcXEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ00nOlxuICAgICAgY2FzZSAnTU0nOlxuICAgICAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLk0oZGF0ZSwgdG9rZW4pO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdNbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ01NTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ01NTU0nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBtb250aFxuICBMOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgLi4uLCAxMlxuICAgICAgY2FzZSAnTCc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobW9udGggKyAxKTtcbiAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuXG4gICAgICBjYXNlICdMTCc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcblxuICAgICAgY2FzZSAnTG8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG5cbiAgICAgIGNhc2UgJ0xMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuXG4gICAgICBjYXNlICdMTExMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuXG4gICAgICBjYXNlICdMTExMJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgd2VlayBvZiB5ZWFyXG4gIHc6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgd2VlayA9IGdldFVUQ1dlZWsoZGF0ZSwgb3B0aW9ucyk7XG5cbiAgICBpZiAodG9rZW4gPT09ICd3bycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrIG9mIHllYXJcbiAgSTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBpc29XZWVrID0gZ2V0VVRDSVNPV2VlayhkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvV2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnZG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0RhdGUoKSwge1xuICAgICAgICB1bml0OiAnZGF0ZSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuZChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIERheSBvZiB5ZWFyXG4gIEQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZZZWFyID0gZ2V0VVRDRGF5T2ZZZWFyKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnRG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXlPZlllYXIsIHtcbiAgICAgICAgdW5pdDogJ2RheU9mWWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF5T2ZZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2Ygd2Vla1xuICBFOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgJ0UnOlxuICAgICAgY2FzZSAnRUUnOlxuICAgICAgY2FzZSAnRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ0VFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnRUVFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ0VFRUUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIGRheSBvZiB3ZWVrXG4gIGU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoTnRoIGRheSBvZiB3ZWVrIHdpdGggY3VycmVudCBsb2NhbGUgb3Igd2Vla1N0YXJ0c09uKVxuICAgICAgY2FzZSAnZSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuXG4gICAgICBjYXNlICdlZSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2VvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2VlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnZWVlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2VlZWUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrXG4gIGM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoc2FtZSBhcyBpbiBgZWApXG4gICAgICBjYXNlICdjJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2NjJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuXG4gICAgICBjYXNlICdjbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2NjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdjY2NjJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBJU08gZGF5IG9mIHdlZWtcbiAgaTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBpc29EYXlPZldlZWsgPSBkYXlPZldlZWsgPT09IDAgPyA3IDogZGF5T2ZXZWVrO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMlxuICAgICAgY2FzZSAnaSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcoaXNvRGF5T2ZXZWVrKTtcbiAgICAgIC8vIDAyXG5cbiAgICAgIGNhc2UgJ2lpJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29EYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAybmRcblxuICAgICAgY2FzZSAnaW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29EYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZVxuXG4gICAgICBjYXNlICdpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdpaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnaWlpaSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSwgUE0sIG1pZG5pZ2h0LCBub29uXG4gIGI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgIGlmIChob3VycyA9PT0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID09PSAwKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1pZG5pZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdiJzpcbiAgICAgIGNhc2UgJ2JiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2JiYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdiYmJiJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBpbiB0aGUgbW9ybmluZywgaW4gdGhlIGFmdGVybm9vbiwgaW4gdGhlIGV2ZW5pbmcsIGF0IG5pZ2h0XG4gIEI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgIGlmIChob3VycyA+PSAxNykge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ldmVuaW5nO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uYWZ0ZXJub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gNCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5tb3JuaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5pZ2h0O1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ0InOlxuICAgICAgY2FzZSAnQkInOlxuICAgICAgY2FzZSAnQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdCQkJCJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnaG8nKSB7XG4gICAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcbiAgICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAxMjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5oKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ0hvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENIb3VycygpLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5IKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0xMV1cbiAgSzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuXG4gICAgaWYgKHRva2VuID09PSAnS28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzEtMjRdXG4gIGs6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDI0O1xuXG4gICAgaWYgKHRva2VuID09PSAna28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnbW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ01pbnV0ZXMoKSwge1xuICAgICAgICB1bml0OiAnbWludXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5tKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdzbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB7XG4gICAgICAgIHVuaXQ6ICdzZWNvbmQnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5TKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGFsd2F5cyBgJ1onYClcbiAgWDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBpZiAodGltZXpvbmVPZmZzZXQgPT09IDApIHtcbiAgICAgIHJldHVybiAnWic7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ1gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYYFxuXG4gICAgICBjYXNlICdYWFhYJzpcbiAgICAgIGNhc2UgJ1hYJzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFhYJzpcbiAgICAgIGNhc2UgJ1hYWCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYCcrMDA6MDAnYCBvciBlcXVpdmFsZW50KVxuICB4OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICd4JzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eGBcblxuICAgICAgY2FzZSAneHh4eCc6XG4gICAgICBjYXNlICd4eCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHh4YFxuXG4gICAgICBjYXNlICd4eHh4eCc6XG4gICAgICBjYXNlICd4eHgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKEdNVClcbiAgTzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAnTyc6XG4gICAgICBjYXNlICdPTyc6XG4gICAgICBjYXNlICdPT08nOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuXG4gICAgICBjYXNlICdPT09PJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdGlvbilcbiAgejogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAneic6XG4gICAgICBjYXNlICd6eic6XG4gICAgICBjYXNlICd6enonOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuXG4gICAgICBjYXNlICd6enp6JzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXBcbiAgdDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IE1hdGguZmxvb3Iob3JpZ2luYWxEYXRlLmdldFRpbWUoKSAvIDEwMDApO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gIFQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBvcmlnaW5hbERhdGUuZ2V0VGltZSgpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVNob3J0KG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCk7XG4gIHZhciBtaW51dGVzID0gYWJzT2Zmc2V0ICUgNjA7XG5cbiAgaWYgKG1pbnV0ZXMgPT09IDApIHtcbiAgICByZXR1cm4gc2lnbiArIFN0cmluZyhob3Vycyk7XG4gIH1cblxuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKSArIGRlbGltaXRlciArIGFkZExlYWRpbmdaZXJvcyhtaW51dGVzLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgaWYgKG9mZnNldCAlIDYwID09PSAwKSB7XG4gICAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICAgIHJldHVybiBzaWduICsgYWRkTGVhZGluZ1plcm9zKE1hdGguYWJzKG9mZnNldCkgLyA2MCwgMik7XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBhZGRMZWFkaW5nWmVyb3MoTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCksIDIpO1xuICB2YXIgbWludXRlcyA9IGFkZExlYWRpbmdaZXJvcyhhYnNPZmZzZXQgJSA2MCwgMik7XG4gIHJldHVybiBzaWduICsgaG91cnMgKyBkZWxpbWl0ZXIgKyBtaW51dGVzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsImltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKi9cblxudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgLy8gRnJvbSBodHRwOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LTMxL3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0Zvcm1hdF90b2tlbnNcbiAgICAvLyB8IFllYXIgICAgIHwgICAgIHkgfCB5eSB8ICAgeXl5IHwgIHl5eXkgfCB5eXl5eSB8XG4gICAgLy8gfC0tLS0tLS0tLS18LS0tLS0tLXwtLS0tfC0tLS0tLS18LS0tLS0tLXwtLS0tLS0tfFxuICAgIC8vIHwgQUQgMSAgICAgfCAgICAgMSB8IDAxIHwgICAwMDEgfCAgMDAwMSB8IDAwMDAxIHxcbiAgICAvLyB8IEFEIDEyICAgIHwgICAgMTIgfCAxMiB8ICAgMDEyIHwgIDAwMTIgfCAwMDAxMiB8XG4gICAgLy8gfCBBRCAxMjMgICB8ICAgMTIzIHwgMjMgfCAgIDEyMyB8ICAwMTIzIHwgMDAxMjMgfFxuICAgIC8vIHwgQUQgMTIzNCAgfCAgMTIzNCB8IDM0IHwgIDEyMzQgfCAgMTIzNCB8IDAxMjM0IHxcbiAgICAvLyB8IEFEIDEyMzQ1IHwgMTIzNDUgfCA0NSB8IDEyMzQ1IHwgMTIzNDUgfCAxMjM0NSB8XG4gICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModG9rZW4gPT09ICd5eScgPyB5ZWFyICUgMTAwIDogeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIHJldHVybiB0b2tlbiA9PT0gJ00nID8gU3RyaW5nKG1vbnRoICsgMSkgOiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDRGF0ZSgpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF0ZS5nZXRVVENIb3VycygpIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUudG9VcHBlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlWzBdO1xuXG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUgPT09ICdhbScgPyAnYS5tLicgOiAncC5tLic7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyIHx8IDEyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENNaW51dGVzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG51bWJlck9mRGlnaXRzID0gdG9rZW4ubGVuZ3RoO1xuICAgIHZhciBtaWxsaXNlY29uZHMgPSBkYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpO1xuICAgIHZhciBmcmFjdGlvbmFsU2Vjb25kcyA9IE1hdGguZmxvb3IobWlsbGlzZWNvbmRzICogTWF0aC5wb3coMTAsIG51bWJlck9mRGlnaXRzIC0gMykpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZnJhY3Rpb25hbFNlY29uZHMsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsImZ1bmN0aW9uIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0aW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ3AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwcHAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGF0ZVRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgdmFyIG1hdGNoUmVzdWx0ID0gcGF0dGVybi5tYXRjaCgvKFArKShwKyk/Lyk7XG4gIHZhciBkYXRlUGF0dGVybiA9IG1hdGNoUmVzdWx0WzFdO1xuICB2YXIgdGltZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsyXTtcblxuICBpZiAoIXRpbWVQYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpO1xuICB9XG5cbiAgdmFyIGRhdGVUaW1lRm9ybWF0O1xuXG4gIHN3aXRjaCAoZGF0ZVBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBkYXRlVGltZUZvcm1hdC5yZXBsYWNlKCd7e2RhdGV9fScsIGRhdGVMb25nRm9ybWF0dGVyKGRhdGVQYXR0ZXJuLCBmb3JtYXRMb25nKSkucmVwbGFjZSgne3t0aW1lfX0nLCB0aW1lTG9uZ0Zvcm1hdHRlcih0aW1lUGF0dGVybiwgZm9ybWF0TG9uZykpO1xufVxuXG52YXIgbG9uZ0Zvcm1hdHRlcnMgPSB7XG4gIHA6IHRpbWVMb25nRm9ybWF0dGVyLFxuICBQOiBkYXRlVGltZUxvbmdGb3JtYXR0ZXJcbn07XG5leHBvcnQgZGVmYXVsdCBsb25nRm9ybWF0dGVyczsiLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9EQVkgPSA4NjQwMDAwMDsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0RheU9mWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgZGF0ZS5zZXRVVENNb250aCgwLCAxKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZZZWFyVGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciBkaWZmZXJlbmNlID0gdGltZXN0YW1wIC0gc3RhcnRPZlllYXJUaW1lc3RhbXA7XG4gIHJldHVybiBNYXRoLmZsb29yKGRpZmZlcmVuY2UgLyBNSUxMSVNFQ09ORFNfSU5fREFZKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0lTT1dlZWtZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZk5leHRZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhcik7XG4gIHZhciBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mVGhpc1llYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyKTtcblxuICBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZk5leHRZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyICsgMTtcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHllYXIgLSAxO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ0lTT1dlZWsoZGF0ZSkuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRhdGUpLmdldFRpbWUoKTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcbiAgdmFyIGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZSAmJiBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU7XG4gIHZhciBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyAxIDogdG9JbnRlZ2VyKGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA6IHRvSW50ZWdlcihvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGZpcnN0V2Vla09mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mTmV4dFllYXIsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWtPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mVGhpc1llYXIsIGRpcnR5T3B0aW9ucyk7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrWWVhciBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMDsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgZGlmZiA9IHN0YXJ0T2ZVVENXZWVrKGRhdGUsIG9wdGlvbnMpLmdldFRpbWUoKSAtIHN0YXJ0T2ZVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCk7IC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG5cbiAgcmV0dXJuIE1hdGgucm91bmQoZGlmZiAvIE1JTExJU0VDT05EU19JTl9XRUVLKSArIDE7XG59IiwidmFyIHByb3RlY3RlZERheU9mWWVhclRva2VucyA9IFsnRCcsICdERCddO1xudmFyIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zID0gWydZWScsICdZWVlZJ107XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZFdlZWtZZWFyVG9rZW5zLmluZGV4T2YodG9rZW4pICE9PSAtMTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0aHJvd1Byb3RlY3RlZEVycm9yKHRva2VuLCBmb3JtYXQsIGlucHV0KSB7XG4gIGlmICh0b2tlbiA9PT0gJ1lZWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyB5ZWFycyB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnRCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0REJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGBkZGAgaW5zdGVhZCBvZiBgRERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeSA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnkpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ0lTT1dlZWsoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gMTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2Vla1llYXIoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gIHZhciBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGUgJiYgbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlO1xuICB2YXIgZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gMSA6IHRvSW50ZWdlcihsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgOiB0b0ludGVnZXIob3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpO1xuICB2YXIgeWVhciA9IGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKTtcbiAgdmFyIGZpcnN0V2VlayA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWsuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2VlaywgZGlydHlPcHRpb25zKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWsoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gIHZhciBsb2NhbGVXZWVrU3RhcnRzT24gPSBsb2NhbGUgJiYgbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMud2Vla1N0YXJ0c09uO1xuICB2YXIgZGVmYXVsdFdlZWtTdGFydHNPbiA9IGxvY2FsZVdlZWtTdGFydHNPbiA9PSBudWxsID8gMCA6IHRvSW50ZWdlcihsb2NhbGVXZWVrU3RhcnRzT24pO1xuICB2YXIgd2Vla1N0YXJ0c09uID0gb3B0aW9ucy53ZWVrU3RhcnRzT24gPT0gbnVsbCA/IGRlZmF1bHRXZWVrU3RhcnRzT24gOiB0b0ludGVnZXIob3B0aW9ucy53ZWVrU3RhcnRzT24pOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKHdlZWtTdGFydHNPbiA+PSAwICYmIHdlZWtTdGFydHNPbiA8PSA2KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd3ZWVrU3RhcnRzT24gbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDYgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cblxuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTtcblxuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cblxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZE1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDc1MCBtaWxsaXNlY29uZHMgdG8gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGFkZE1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjMwLjc1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgdGltZXN0YW1wID0gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIGFtb3VudCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBjb21wYXJlQXNjXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIC0xLCAwIG9yIDEuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAxIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGFmdGVyIHRoZSBzZWNvbmQsXG4gKiAtMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBvciAwIGlmIGRhdGVzIGFyZSBlcXVhbC5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY29tcGFyZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNvbXBhcmVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSByZXN1bHQgb2YgdGhlIGNvbXBhcmlzb25cbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29tcGFyZSAxMSBGZWJydWFyeSAxOTg3IGFuZCAxMCBKdWx5IDE5ODk6XG4gKiBjb25zdCByZXN1bHQgPSBjb21wYXJlQXNjKG5ldyBEYXRlKDE5ODcsIDEsIDExKSwgbmV3IERhdGUoMTk4OSwgNiwgMTApKVxuICogLy89PiAtMVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTb3J0IHRoZSBhcnJheSBvZiBkYXRlczpcbiAqIGNvbnN0IHJlc3VsdCA9IFtcbiAqICAgbmV3IERhdGUoMTk5NSwgNiwgMiksXG4gKiAgIG5ldyBEYXRlKDE5ODcsIDEsIDExKSxcbiAqICAgbmV3IERhdGUoMTk4OSwgNiwgMTApXG4gKiBdLnNvcnQoY29tcGFyZUFzYylcbiAqIC8vPT4gW1xuICogLy8gICBXZWQgRmViIDExIDE5ODcgMDA6MDA6MDAsXG4gKiAvLyAgIE1vbiBKdWwgMTAgMTk4OSAwMDowMDowMCxcbiAqIC8vICAgU3VuIEp1bCAwMiAxOTk1IDAwOjAwOjAwXG4gKiAvLyBdXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcGFyZUFzYyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIGRpZmYgPSBkYXRlTGVmdC5nZXRUaW1lKCkgLSBkYXRlUmlnaHQuZ2V0VGltZSgpO1xuXG4gIGlmIChkaWZmIDwgMCkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIGlmIChkaWZmID4gMCkge1xuICAgIHJldHVybiAxOyAvLyBSZXR1cm4gMCBpZiBkaWZmIGlzIDA7IHJldHVybiBOYU4gaWYgZGlmZiBpcyBOYU5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGlmZjtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHNcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBtb250aHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBtb250aHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIG1vbnRoc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBtb250aHMgYXJlIGJldHdlZW4gMzEgSmFudWFyeSAyMDE0IGFuZCAxIFNlcHRlbWJlciAyMDE0P1xuICogdmFyIHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA4LCAxKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgMCwgMzEpXG4gKiApXG4gKiAvLz0+IDhcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIHllYXJEaWZmID0gZGF0ZUxlZnQuZ2V0RnVsbFllYXIoKSAtIGRhdGVSaWdodC5nZXRGdWxsWWVhcigpO1xuICB2YXIgbW9udGhEaWZmID0gZGF0ZUxlZnQuZ2V0TW9udGgoKSAtIGRhdGVSaWdodC5nZXRNb250aCgpO1xuICByZXR1cm4geWVhckRpZmYgKiAxMiArIG1vbnRoRGlmZjtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kc1xuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IG1pbGxpc2Vjb25kcyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTQgMTI6MzA6MjAuNjAwIGFuZCAyIEp1bHkgMjAxNCAxMjozMDoyMS43MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjEsIDcwMCksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjAsIDYwMClcbiAqIClcbiAqIC8vPT4gMTEwMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0LmdldFRpbWUoKSAtIGRhdGVSaWdodC5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzL2luZGV4LmpzXCI7XG5pbXBvcnQgY29tcGFyZUFzYyBmcm9tIFwiLi4vY29tcGFyZUFzYy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBpc0xhc3REYXlPZk1vbnRoIGZyb20gXCIuLi9pc0xhc3REYXlPZk1vbnRoL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbk1vbnRoc1xuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGZ1bGwgbW9udGhzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgZnVsbCBtb250aHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGZ1bGwgbW9udGhzXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGZ1bGwgbW9udGhzIGFyZSBiZXR3ZWVuIDMxIEphbnVhcnkgMjAxNCBhbmQgMSBTZXB0ZW1iZXIgMjAxND9cbiAqIHZhciByZXN1bHQgPSBkaWZmZXJlbmNlSW5Nb250aHMobmV3IERhdGUoMjAxNCwgOCwgMSksIG5ldyBEYXRlKDIwMTQsIDAsIDMxKSlcbiAqIC8vPT4gN1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbk1vbnRocyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIHNpZ24gPSBjb21wYXJlQXNjKGRhdGVMZWZ0LCBkYXRlUmlnaHQpO1xuICB2YXIgZGlmZmVyZW5jZSA9IE1hdGguYWJzKGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpKTtcbiAgdmFyIHJlc3VsdDsgLy8gQ2hlY2sgZm9yIHRoZSBkaWZmZXJlbmNlIG9mIGxlc3MgdGhhbiBtb250aFxuXG4gIGlmIChkaWZmZXJlbmNlIDwgMSkge1xuICAgIHJlc3VsdCA9IDA7XG4gIH0gZWxzZSB7XG4gICAgaWYgKGRhdGVMZWZ0LmdldE1vbnRoKCkgPT09IDEgJiYgZGF0ZUxlZnQuZ2V0RGF0ZSgpID4gMjcpIHtcbiAgICAgIC8vIFRoaXMgd2lsbCBjaGVjayBpZiB0aGUgZGF0ZSBpcyBlbmQgb2YgRmViIGFuZCBhc3NpZ24gYSBoaWdoZXIgZW5kIG9mIG1vbnRoIGRhdGVcbiAgICAgIC8vIHRvIGNvbXBhcmUgaXQgd2l0aCBKYW5cbiAgICAgIGRhdGVMZWZ0LnNldERhdGUoMzApO1xuICAgIH1cblxuICAgIGRhdGVMZWZ0LnNldE1vbnRoKGRhdGVMZWZ0LmdldE1vbnRoKCkgLSBzaWduICogZGlmZmVyZW5jZSk7IC8vIE1hdGguYWJzKGRpZmYgaW4gZnVsbCBtb250aHMgLSBkaWZmIGluIGNhbGVuZGFyIG1vbnRocykgPT09IDEgaWYgbGFzdCBjYWxlbmRhciBtb250aCBpcyBub3QgZnVsbFxuICAgIC8vIElmIHNvLCByZXN1bHQgbXVzdCBiZSBkZWNyZWFzZWQgYnkgMSBpbiBhYnNvbHV0ZSB2YWx1ZVxuXG4gICAgdmFyIGlzTGFzdE1vbnRoTm90RnVsbCA9IGNvbXBhcmVBc2MoZGF0ZUxlZnQsIGRhdGVSaWdodCkgPT09IC1zaWduOyAvLyBDaGVjayBmb3IgY2FzZXMgb2Ygb25lIGZ1bGwgY2FsZW5kYXIgbW9udGhcblxuICAgIGlmIChpc0xhc3REYXlPZk1vbnRoKHRvRGF0ZShkaXJ0eURhdGVMZWZ0KSkgJiYgZGlmZmVyZW5jZSA9PT0gMSAmJiBjb21wYXJlQXNjKGRpcnR5RGF0ZUxlZnQsIGRhdGVSaWdodCkgPT09IDEpIHtcbiAgICAgIGlzTGFzdE1vbnRoTm90RnVsbCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJlc3VsdCA9IHNpZ24gKiAoZGlmZmVyZW5jZSAtIE51bWJlcihpc0xhc3RNb250aE5vdEZ1bGwpKTtcbiAgfSAvLyBQcmV2ZW50IG5lZ2F0aXZlIHplcm9cblxuXG4gIHJldHVybiByZXN1bHQgPT09IDAgPyAwIDogcmVzdWx0O1xufSIsImltcG9ydCBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL2RpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZGlmZmVyZW5jZUluU2Vjb25kc1xuICogQGNhdGVnb3J5IFNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBzZWNvbmRzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2Ygc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2Ygc2Vjb25kc1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBzZWNvbmRzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxNCAxMjozMDowNy45OTkgYW5kIDIgSnVseSAyMDE0IDEyOjMwOjIwLjAwMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJblNlY29uZHMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgMjAsIDApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMzAsIDcsIDk5OSlcbiAqIClcbiAqIC8vPT4gMTJcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5TZWNvbmRzKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGlmZiA9IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkgLyAxMDAwO1xuICByZXR1cm4gZGlmZiA+IDAgPyBNYXRoLmZsb29yKGRpZmYpIDogTWF0aC5jZWlsKGRpZmYpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgZW5kT2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBlbmQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBlbmQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBlbmQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgZW5kIG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogY29uc3QgcmVzdWx0ID0gZW5kT2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDIzOjU5OjU5Ljk5OVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVuZE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGVuZE9mTW9udGhcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGVuZCBvZiBhIG1vbnRoIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZW5kIG9mIGEgbW9udGggZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBlbmQgb2YgYSBtb250aFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBlbmQgb2YgYSBtb250aCBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IGVuZE9mTW9udGgobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAzMCAyMDE0IDIzOjU5OjU5Ljk5OVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVuZE9mTW9udGgoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgbW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gIGRhdGUuc2V0RnVsbFllYXIoZGF0ZS5nZXRGdWxsWWVhcigpLCBtb250aCArIDEsIDApO1xuICBkYXRlLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBjb21wYXJlQXNjIGZyb20gXCIuLi9jb21wYXJlQXNjL2luZGV4LmpzXCI7XG5pbXBvcnQgZGlmZmVyZW5jZUluTW9udGhzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5Nb250aHMvaW5kZXguanNcIjtcbmltcG9ydCBkaWZmZXJlbmNlSW5TZWNvbmRzIGZyb20gXCIuLi9kaWZmZXJlbmNlSW5TZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vbG9jYWxlL2VuLVVTL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBjbG9uZU9iamVjdCBmcm9tIFwiLi4vX2xpYi9jbG9uZU9iamVjdC9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMgZnJvbSBcIi4uL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbnZhciBNSU5VVEVTX0lOX0RBWSA9IDE0NDA7XG52YXIgTUlOVVRFU19JTl9BTE1PU1RfVFdPX0RBWVMgPSAyNTIwO1xudmFyIE1JTlVURVNfSU5fTU9OVEggPSA0MzIwMDtcbnZhciBNSU5VVEVTX0lOX1RXT19NT05USFMgPSA4NjQwMDtcbi8qKlxuICogQG5hbWUgZm9ybWF0RGlzdGFuY2VcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcyBpbiB3b3Jkcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMgaW4gd29yZHMuXG4gKlxuICogfCBEaXN0YW5jZSBiZXR3ZWVuIGRhdGVzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJlc3VsdCAgICAgICAgICAgICAgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAwIC4uLiAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGxlc3MgdGhhbiBhIG1pbnV0ZSAgfFxuICogfCAzMCBzZWNzIC4uLiAxIG1pbiAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDEgbWludXRlICAgICAgICAgICAgfFxuICogfCAxIG1pbiAzMCBzZWNzIC4uLiA0NCBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFsyLi40NF0gbWludXRlcyAgICAgfFxuICogfCA0NCBtaW5zIC4uLiAzMCBzZWNzIC4uLiA4OSBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IDEgaG91ciAgICAgICAgfFxuICogfCA4OSBtaW5zIDMwIHNlY3MgLi4uIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IFsyLi4yNF0gaG91cnMgfFxuICogfCAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA0MSBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICB8IDEgZGF5ICAgICAgICAgICAgICAgfFxuICogfCA0MSBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiAyOSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgICAgICAgICB8IFsyLi4zMF0gZGF5cyAgICAgICAgfFxuICogfCAyOSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDQ0IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyB8IGFib3V0IDEgbW9udGggICAgICAgfFxuICogfCA0NCBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDU5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyB8IGFib3V0IDIgbW9udGhzICAgICAgfFxuICogfCA1OSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDEgeXIgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFsyLi4xMl0gbW9udGhzICAgICAgfFxuICogfCAxIHlyIC4uLiAxIHlyIDMgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IDEgeWVhciAgICAgICAgfFxuICogfCAxIHlyIDMgbW9udGhzIC4uLiAxIHlyIDkgbW9udGggcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG92ZXIgMSB5ZWFyICAgICAgICAgfFxuICogfCAxIHlyIDkgbW9udGhzIC4uLiAyIHlycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFsbW9zdCAyIHllYXJzICAgICAgfFxuICogfCBOIHlycyAuLi4gTiB5cnMgMyBtb250aHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IE4geWVhcnMgICAgICAgfFxuICogfCBOIHlycyAzIG1vbnRocyAuLi4gTiB5cnMgOSBtb250aHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG92ZXIgTiB5ZWFycyAgICAgICAgfFxuICogfCBOIHlycyA5IG1vbnRocyAuLi4gTisxIHlycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFsbW9zdCBOKzEgeWVhcnMgICAgfFxuICpcbiAqIFdpdGggYG9wdGlvbnMuaW5jbHVkZVNlY29uZHMgPT0gdHJ1ZWA6XG4gKiB8IERpc3RhbmNlIGJldHdlZW4gZGF0ZXMgfCBSZXN1bHQgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8IDAgc2VjcyAuLi4gNSBzZWNzICAgICAgfCBsZXNzIHRoYW4gNSBzZWNvbmRzICB8XG4gKiB8IDUgc2VjcyAuLi4gMTAgc2VjcyAgICAgfCBsZXNzIHRoYW4gMTAgc2Vjb25kcyB8XG4gKiB8IDEwIHNlY3MgLi4uIDIwIHNlY3MgICAgfCBsZXNzIHRoYW4gMjAgc2Vjb25kcyB8XG4gKiB8IDIwIHNlY3MgLi4uIDQwIHNlY3MgICAgfCBoYWxmIGEgbWludXRlICAgICAgICB8XG4gKiB8IDQwIHNlY3MgLi4uIDYwIHNlY3MgICAgfCBsZXNzIHRoYW4gYSBtaW51dGUgICB8XG4gKiB8IDYwIHNlY3MgLi4uIDkwIHNlY3MgICAgfCAxIG1pbnV0ZSAgICAgICAgICAgICB8XG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiAtIFRoZSBmdW5jdGlvbiB3YXMgcmVuYW1lZCBmcm9tIGBkaXN0YW5jZUluV29yZHMgYCB0byBgZm9ybWF0RGlzdGFuY2VgXG4gKiAgIHRvIG1ha2UgaXRzIG5hbWUgY29uc2lzdGVudCB3aXRoIGBmb3JtYXRgIGFuZCBgZm9ybWF0UmVsYXRpdmVgLlxuICpcbiAqIC0gVGhlIG9yZGVyIG9mIGFyZ3VtZW50cyBpcyBzd2FwcGVkIHRvIG1ha2UgdGhlIGZ1bmN0aW9uXG4gKiAgIGNvbnNpc3RlbnQgd2l0aCBgZGlmZmVyZW5jZUluLi4uYCBmdW5jdGlvbnMuXG4gKlxuICogICBgYGBqYXZhc2NyaXB0XG4gKiAgIC8vIEJlZm9yZSB2Mi4wLjBcbiAqXG4gKiAgIGRpc3RhbmNlSW5Xb3JkcyhcbiAqICAgICBuZXcgRGF0ZSgxOTg2LCAzLCA0LCAxMCwgMzIsIDApLFxuICogICAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDExLCAzMiwgMCksXG4gKiAgICAgeyBhZGRTdWZmaXg6IHRydWUgfVxuICogICApIC8vPT4gJ2luIGFib3V0IDEgaG91cidcbiAqXG4gKiAgIC8vIHYyLjAuMCBvbndhcmRcbiAqXG4gKiAgIGZvcm1hdERpc3RhbmNlKFxuICogICAgIG5ldyBEYXRlKDE5ODYsIDMsIDQsIDExLCAzMiwgMCksXG4gKiAgICAgbmV3IERhdGUoMTk4NiwgMywgNCwgMTAsIDMyLCAwKSxcbiAqICAgICB7IGFkZFN1ZmZpeDogdHJ1ZSB9XG4gKiAgICkgLy89PiAnaW4gYWJvdXQgMSBob3VyJ1xuICogICBgYGBcbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGJhc2VEYXRlIC0gdGhlIGRhdGUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuaW5jbHVkZVNlY29uZHM9ZmFsc2VdIC0gZGlzdGFuY2VzIGxlc3MgdGhhbiBhIG1pbnV0ZSBhcmUgbW9yZSBkZXRhaWxlZFxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy5hZGRTdWZmaXg9ZmFsc2VdIC0gcmVzdWx0IGluZGljYXRlcyBpZiB0aGUgc2Vjb25kIGRhdGUgaXMgZWFybGllciBvciBsYXRlciB0aGFuIHRoZSBmaXJzdFxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZGlzdGFuY2UgaW4gd29yZHNcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBiYXNlRGF0ZWAgbXVzdCBub3QgYmUgSW52YWxpZCBEYXRlXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5sb2NhbGVgIG11c3QgY29udGFpbiBgZm9ybWF0RGlzdGFuY2VgIHByb3BlcnR5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMiBKdWx5IDIwMTQgYW5kIDEgSmFudWFyeSAyMDE1P1xuICogY29uc3QgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2UobmV3IERhdGUoMjAxNCwgNiwgMiksIG5ldyBEYXRlKDIwMTUsIDAsIDEpKVxuICogLy89PiAnNiBtb250aHMnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMSBKYW51YXJ5IDIwMTUgMDA6MDA6MTVcbiAqIC8vIGFuZCAxIEphbnVhcnkgMjAxNSAwMDowMDowMCwgaW5jbHVkaW5nIHNlY29uZHM/XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZShcbiAqICAgbmV3IERhdGUoMjAxNSwgMCwgMSwgMCwgMCwgMTUpLFxuICogICBuZXcgRGF0ZSgyMDE1LCAwLCAxLCAwLCAwLCAwKSxcbiAqICAgeyBpbmNsdWRlU2Vjb25kczogdHJ1ZSB9XG4gKiApXG4gKiAvLz0+ICdsZXNzIHRoYW4gMjAgc2Vjb25kcydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgZnJvbSAxIEphbnVhcnkgMjAxNlxuICogLy8gdG8gMSBKYW51YXJ5IDIwMTUsIHdpdGggYSBzdWZmaXg/XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXREaXN0YW5jZShuZXcgRGF0ZSgyMDE1LCAwLCAxKSwgbmV3IERhdGUoMjAxNiwgMCwgMSksIHtcbiAqICAgYWRkU3VmZml4OiB0cnVlXG4gKiB9KVxuICogLy89PiAnYWJvdXQgMSB5ZWFyIGFnbydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAxIEF1Z3VzdCAyMDE2IGFuZCAxIEphbnVhcnkgMjAxNSBpbiBFc3BlcmFudG8/XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIGNvbnN0IHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlKG5ldyBEYXRlKDIwMTYsIDcsIDEpLCBuZXcgRGF0ZSgyMDE1LCAwLCAxKSwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAncGxpIG9sIDEgamFybydcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZShkaXJ0eURhdGUsIGRpcnR5QmFzZURhdGUpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlIHx8IGRlZmF1bHRMb2NhbGU7XG5cbiAgaWYgKCFsb2NhbGUuZm9ybWF0RGlzdGFuY2UpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBmb3JtYXREaXN0YW5jZSBwcm9wZXJ0eScpO1xuICB9XG5cbiAgdmFyIGNvbXBhcmlzb24gPSBjb21wYXJlQXNjKGRpcnR5RGF0ZSwgZGlydHlCYXNlRGF0ZSk7XG5cbiAgaWYgKGlzTmFOKGNvbXBhcmlzb24pKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB9XG5cbiAgdmFyIGxvY2FsaXplT3B0aW9ucyA9IGNsb25lT2JqZWN0KG9wdGlvbnMpO1xuICBsb2NhbGl6ZU9wdGlvbnMuYWRkU3VmZml4ID0gQm9vbGVhbihvcHRpb25zLmFkZFN1ZmZpeCk7XG4gIGxvY2FsaXplT3B0aW9ucy5jb21wYXJpc29uID0gY29tcGFyaXNvbjtcbiAgdmFyIGRhdGVMZWZ0O1xuICB2YXIgZGF0ZVJpZ2h0O1xuXG4gIGlmIChjb21wYXJpc29uID4gMCkge1xuICAgIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5QmFzZURhdGUpO1xuICAgIGRhdGVSaWdodCA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB9IGVsc2Uge1xuICAgIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gICAgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5QmFzZURhdGUpO1xuICB9XG5cbiAgdmFyIHNlY29uZHMgPSBkaWZmZXJlbmNlSW5TZWNvbmRzKGRhdGVSaWdodCwgZGF0ZUxlZnQpO1xuICB2YXIgb2Zmc2V0SW5TZWNvbmRzID0gKGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZVJpZ2h0KSAtIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZUxlZnQpKSAvIDEwMDA7XG4gIHZhciBtaW51dGVzID0gTWF0aC5yb3VuZCgoc2Vjb25kcyAtIG9mZnNldEluU2Vjb25kcykgLyA2MCk7XG4gIHZhciBtb250aHM7IC8vIDAgdXAgdG8gMiBtaW5zXG5cbiAgaWYgKG1pbnV0ZXMgPCAyKSB7XG4gICAgaWYgKG9wdGlvbnMuaW5jbHVkZVNlY29uZHMpIHtcbiAgICAgIGlmIChzZWNvbmRzIDwgNSkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdsZXNzVGhhblhTZWNvbmRzJywgNSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAoc2Vjb25kcyA8IDEwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2xlc3NUaGFuWFNlY29uZHMnLCAxMCwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAoc2Vjb25kcyA8IDIwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2xlc3NUaGFuWFNlY29uZHMnLCAyMCwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAoc2Vjb25kcyA8IDQwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2hhbGZBTWludXRlJywgbnVsbCwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSBpZiAoc2Vjb25kcyA8IDYwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2xlc3NUaGFuWE1pbnV0ZXMnLCAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneE1pbnV0ZXMnLCAxLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAobWludXRlcyA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdsZXNzVGhhblhNaW51dGVzJywgMSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ3hNaW51dGVzJywgbWludXRlcywgbG9jYWxpemVPcHRpb25zKTtcbiAgICAgIH1cbiAgICB9IC8vIDIgbWlucyB1cCB0byAwLjc1IGhyc1xuXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IDQ1KSB7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneE1pbnV0ZXMnLCBtaW51dGVzLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAwLjc1IGhycyB1cCB0byAxLjUgaHJzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IDkwKSB7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnYWJvdXRYSG91cnMnLCAxLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAxLjUgaHJzIHVwIHRvIDI0IGhyc1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBNSU5VVEVTX0lOX0RBWSkge1xuICAgIHZhciBob3VycyA9IE1hdGgucm91bmQobWludXRlcyAvIDYwKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCdhYm91dFhIb3VycycsIGhvdXJzLCBsb2NhbGl6ZU9wdGlvbnMpOyAvLyAxIGRheSB1cCB0byAxLjc1IGRheXNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgTUlOVVRFU19JTl9BTE1PU1RfVFdPX0RBWVMpIHtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4RGF5cycsIDEsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEuNzUgZGF5cyB1cCB0byAzMCBkYXlzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IE1JTlVURVNfSU5fTU9OVEgpIHtcbiAgICB2YXIgZGF5cyA9IE1hdGgucm91bmQobWludXRlcyAvIE1JTlVURVNfSU5fREFZKTtcbiAgICByZXR1cm4gbG9jYWxlLmZvcm1hdERpc3RhbmNlKCd4RGF5cycsIGRheXMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIDEgbW9udGggdXAgdG8gMiBtb250aHNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgTUlOVVRFU19JTl9UV09fTU9OVEhTKSB7XG4gICAgbW9udGhzID0gTWF0aC5yb3VuZChtaW51dGVzIC8gTUlOVVRFU19JTl9NT05USCk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgnYWJvdXRYTW9udGhzJywgbW9udGhzLCBsb2NhbGl6ZU9wdGlvbnMpO1xuICB9XG5cbiAgbW9udGhzID0gZGlmZmVyZW5jZUluTW9udGhzKGRhdGVSaWdodCwgZGF0ZUxlZnQpOyAvLyAyIG1vbnRocyB1cCB0byAxMiBtb250aHNcblxuICBpZiAobW9udGhzIDwgMTIpIHtcbiAgICB2YXIgbmVhcmVzdE1vbnRoID0gTWF0aC5yb3VuZChtaW51dGVzIC8gTUlOVVRFU19JTl9NT05USCk7XG4gICAgcmV0dXJuIGxvY2FsZS5mb3JtYXREaXN0YW5jZSgneE1vbnRocycsIG5lYXJlc3RNb250aCwgbG9jYWxpemVPcHRpb25zKTsgLy8gMSB5ZWFyIHVwIHRvIG1heCBEYXRlXG4gIH0gZWxzZSB7XG4gICAgdmFyIG1vbnRoc1NpbmNlU3RhcnRPZlllYXIgPSBtb250aHMgJSAxMjtcbiAgICB2YXIgeWVhcnMgPSBNYXRoLmZsb29yKG1vbnRocyAvIDEyKTsgLy8gTiB5ZWFycyB1cCB0byAxIHllYXJzIDMgbW9udGhzXG5cbiAgICBpZiAobW9udGhzU2luY2VTdGFydE9mWWVhciA8IDMpIHtcbiAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2Fib3V0WFllYXJzJywgeWVhcnMsIGxvY2FsaXplT3B0aW9ucyk7IC8vIE4geWVhcnMgMyBtb250aHMgdXAgdG8gTiB5ZWFycyA5IG1vbnRoc1xuICAgIH0gZWxzZSBpZiAobW9udGhzU2luY2VTdGFydE9mWWVhciA8IDkpIHtcbiAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ292ZXJYWWVhcnMnLCB5ZWFycywgbG9jYWxpemVPcHRpb25zKTsgLy8gTiB5ZWFycyA5IG1vbnRocyB1cCB0byBOIHllYXIgMTIgbW9udGhzXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBsb2NhbGUuZm9ybWF0RGlzdGFuY2UoJ2FsbW9zdFhZZWFycycsIHllYXJzICsgMSwgbG9jYWxpemVPcHRpb25zKTtcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgaXNWYWxpZCBmcm9tIFwiLi4vaXNWYWxpZC9pbmRleC5qc1wiO1xuaW1wb3J0IGRlZmF1bHRMb2NhbGUgZnJvbSBcIi4uL2xvY2FsZS9lbi1VUy9pbmRleC5qc1wiO1xuaW1wb3J0IHN1Yk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXR0ZXJzIGZyb20gXCIuLi9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9uZ0Zvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuLCBpc1Byb3RlY3RlZFdlZWtZZWFyVG9rZW4sIHRocm93UHJvdGVjdGVkRXJyb3IgfSBmcm9tIFwiLi4vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiOyAvLyBUaGlzIFJlZ0V4cCBjb25zaXN0cyBvZiB0aHJlZSBwYXJ0cyBzZXBhcmF0ZWQgYnkgYHxgOlxuLy8gLSBbeVlRcU1Md0lkRGVjaWhIS2ttc11vIG1hdGNoZXMgYW55IGF2YWlsYWJsZSBvcmRpbmFsIG51bWJlciB0b2tlblxuLy8gICAob25lIG9mIHRoZSBjZXJ0YWluIGxldHRlcnMgZm9sbG93ZWQgYnkgYG9gKVxuLy8gLSAoXFx3KVxcMSogbWF0Y2hlcyBhbnkgc2VxdWVuY2VzIG9mIHRoZSBzYW1lIGxldHRlclxuLy8gLSAnJyBtYXRjaGVzIHR3byBxdW90ZSBjaGFyYWN0ZXJzIGluIGEgcm93XG4vLyAtICcoJyd8W14nXSkrKCd8JCkgbWF0Y2hlcyBhbnl0aGluZyBzdXJyb3VuZGVkIGJ5IHR3byBxdW90ZSBjaGFyYWN0ZXJzICgnKSxcbi8vICAgZXhjZXB0IGEgc2luZ2xlIHF1b3RlIHN5bWJvbCwgd2hpY2ggZW5kcyB0aGUgc2VxdWVuY2UuXG4vLyAgIFR3byBxdW90ZSBjaGFyYWN0ZXJzIGRvIG5vdCBlbmQgdGhlIHNlcXVlbmNlLlxuLy8gICBJZiB0aGVyZSBpcyBubyBtYXRjaGluZyBzaW5nbGUgcXVvdGVcbi8vICAgdGhlbiB0aGUgc2VxdWVuY2Ugd2lsbCBjb250aW51ZSB1bnRpbCB0aGUgZW5kIG9mIHRoZSBzdHJpbmcuXG4vLyAtIC4gbWF0Y2hlcyBhbnkgc2luZ2xlIGNoYXJhY3RlciB1bm1hdGNoZWQgYnkgcHJldmlvdXMgcGFydHMgb2YgdGhlIFJlZ0V4cHNcblxudmFyIGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7IC8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcblxudmFyIGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gL1ArcCt8UCt8cCt8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG52YXIgZXNjYXBlZFN0cmluZ1JlZ0V4cCA9IC9eJyhbXl0qPyknPyQvO1xudmFyIGRvdWJsZVF1b3RlUmVnRXhwID0gLycnL2c7XG52YXIgdW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHAgPSAvW2EtekEtWl0vO1xuLyoqXG4gKiBAbmFtZSBmb3JtYXRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGdpdmVuIGZvcm1hdC4gVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgYGZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKlxuICogVGhlIGNoYXJhY3RlcnMgd3JhcHBlZCBiZXR3ZWVuIHR3byBzaW5nbGUgcXVvdGVzIGNoYXJhY3RlcnMgKCcpIGFyZSBlc2NhcGVkLlxuICogVHdvIHNpbmdsZSBxdW90ZXMgaW4gYSByb3csIHdoZXRoZXIgaW5zaWRlIG9yIG91dHNpZGUgYSBxdW90ZWQgc2VxdWVuY2UsIHJlcHJlc2VudCBhICdyZWFsJyBzaW5nbGUgcXVvdGUuXG4gKiAoc2VlIHRoZSBsYXN0IGV4YW1wbGUpXG4gKlxuICogRm9ybWF0IG9mIHRoZSBzdHJpbmcgaXMgYmFzZWQgb24gVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogaHR0cHM6Ly93d3cudW5pY29kZS5vcmcvcmVwb3J0cy90cjM1L3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0ZpZWxkX1N5bWJvbF9UYWJsZVxuICogd2l0aCBhIGZldyBhZGRpdGlvbnMgKHNlZSBub3RlIDcgYmVsb3cgdGhlIHRhYmxlKS5cbiAqXG4gKiBBY2NlcHRlZCBwYXR0ZXJuczpcbiAqIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBhdHRlcm4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICAgfCBOb3RlcyB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfFxuICogfCBFcmEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRy4uR0dHICB8IEFELCBCQyAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0cgICAgfCBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHR0dHRyAgIHwgQSwgQiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBDYWxlbmRhciB5ZWFyICAgICAgICAgICAgICAgICAgIHwgeSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHlvICAgICAgfCA0NHRoLCAxc3QsIDB0aCwgMTd0aCAgICAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5ICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXl5eSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgIHwgWSAgICAgICB8IDQ0LCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlvICAgICAgfCA0NHRoLCAxc3QsIDE5MDB0aCwgMjAxN3RoICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWSAgICAgIHwgNDQsIDAxLCAwMCwgMTcgICAgICAgICAgICAgICAgICAgIHwgNSw4ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZICAgICB8IDA0NCwgMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVkgICAgfCAwMDQ0LCAwMDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVlZWSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBJU08gd2Vlay1udW1iZXJpbmcgeWVhciAgICAgICAgIHwgUiAgICAgICB8IC00MywgMCwgMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSICAgICAgfCAtNDMsIDAwLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlIgICAgIHwgLTA0MywgMDAwLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUiAgICB8IC0wMDQzLCAwMDAwLCAwMDAxLCAxOTAwLCAyMDE3ICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUlJSICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUsNyB8XG4gKiB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICAgfCB1ICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXUgICAgICB8IC00MywgMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dSAgICAgfCAtMDQzLCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1ICAgIHwgLTAwNDMsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1dXUgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSAgIHxcbiAqIHwgUXVhcnRlciAoZm9ybWF0dGluZykgICAgICAgICAgICB8IFEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRUVEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgUXVhcnRlciAoc3RhbmQtYWxvbmUpICAgICAgICAgICB8IHEgICAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxbyAgICAgIHwgMXN0LCAybmQsIDNyZCwgNHRoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXEgICAgICB8IDAxLCAwMiwgMDMsIDA0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcSAgICAgfCBRMSwgUTIsIFEzLCBRNCAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxICAgIHwgMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi4gICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxcXEgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8IDQgICAgIHxcbiAqIHwgTW9udGggKGZvcm1hdHRpbmcpICAgICAgICAgICAgICB8IE0gICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU0gICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTSAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTU0gICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTW9udGggKHN0YW5kLWFsb25lKSAgICAgICAgICAgICB8IEwgICAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMTJ0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTEwgICAgICB8IDAxLCAwMiwgLi4uLCAxMiAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTCAgICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMICAgIHwgSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXIgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMTEwgICB8IEosIEYsIC4uLiwgRCAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgICB8IHcgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3byAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgd3cgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgICB8IEkgICAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgNTN0aCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSUkgICAgICB8IDAxLCAwMiwgLi4uLCA1MyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgICB8IGQgICAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzFzdCAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgICB8IDAxLCAwMiwgLi4uLCAzMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgICB8IEQgICAgICAgfCAxLCAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgICAgfCA5ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgMzY1dGgsIDM2NnRoICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREQgICAgICB8IDAxLCAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERERCAgICAgfCAwMDEsIDAwMiwgLi4uLCAzNjUsIDM2NiAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBEREREICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBEYXkgb2Ygd2VlayAoZm9ybWF0dGluZykgICAgICAgIHwgRS4uRUVFICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUUgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRUVFICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU3UsIFNhICAgICAgICB8ICAgICAgIHxcbiAqIHwgSVNPIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICB8IGkgICAgICAgfCAxLCAyLCAzLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpbyAgICAgIHwgMXN0LCAybmQsIC4uLiwgN3RoICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWkgICAgICB8IDAxLCAwMiwgLi4uLCAwNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWkgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWlpaSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFN1LCBTYSAgICAgICAgfCA3ICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgfCBlICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZW8gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWUgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlZWUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTdSwgU2EgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCBkYXkgb2Ygd2VlayAoc3RhbmQtYWxvbmUpIHwgYyAgICAgICB8IDIsIDMsIDQsIC4uLiwgMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNvICAgICAgfCAybmQsIDNyZCwgLi4uLCAxc3QgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjYyAgICAgIHwgMDIsIDAzLCAuLi4sIDAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2MgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjYyAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjY2NjICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU3UsIFNhICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgICB8IGEuLmFhICAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWEgICAgIHwgYW0sIHBtICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYSAgICB8IGEubS4sIHAubS4gICAgICAgICAgICAgICAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYWFhICAgfCBhLCBwICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgfCBiLi5iYiAgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiICAgICB8IGFtLCBwbSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmIgICAgfCBhLm0uLCBwLm0uLCBub29uLCBtaWRuaWdodCAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmJiYiAgIHwgYSwgcCwgbiwgbWkgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGbGV4aWJsZSBkYXkgcGVyaW9kICAgICAgICAgICAgIHwgQi4uQkJCICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkIgICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBCQkJCQiAgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgIHwgaCAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAxMnRoICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBoaCAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAxMiAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgIHwgSCAgICAgICB8IDAsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhvICAgICAgfCAwdGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBISCAgICAgIHwgMDAsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFswLTExXSAgICAgICAgICAgICAgICAgICAgIHwgSyAgICAgICB8IDEsIDIsIC4uLiwgMTEsIDAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMXRoLCAwdGggICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBLSyAgICAgIHwgMDEsIDAyLCAuLi4sIDExLCAwMCAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBIb3VyIFsxLTI0XSAgICAgICAgICAgICAgICAgICAgIHwgayAgICAgICB8IDI0LCAxLCAyLCAuLi4sIDIzICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtvICAgICAgfCAyNHRoLCAxc3QsIDJuZCwgLi4uLCAyM3JkICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBrayAgICAgIHwgMjQsIDAxLCAwMiwgLi4uLCAyMyAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbSAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1vICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtbSAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcyAgICAgICB8IDAsIDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNvICAgICAgfCAwdGgsIDFzdCwgLi4uLCA1OXRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzcyAgICAgIHwgMDAsIDAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgIHwgUyAgICAgICB8IDAsIDEsIC4uLiwgOSAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTICAgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1MgICAgIHwgMDAwLCAwMDEsIC4uLiwgOTk5ICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1NTUyAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMgICAgIHxcbiAqIHwgVGltZXpvbmUgKElTTy04NjAxIHcvIFopICAgICAgICB8IFggICAgICAgfCAtMDgsICswNTMwLCBaICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWCAgICAgIHwgLTA4MDAsICswNTMwLCBaICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYICAgICB8IC0wODowMCwgKzA1OjMwLCBaICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFggICAgfCAtMDgwMCwgKzA1MzAsIFosICsxMjM0NTYgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFhYWCAgIHwgLTA4OjAwLCArMDU6MzAsIFosICsxMjozNDo1NiAgICAgIHwgICAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy9vIFopICAgICAgIHwgeCAgICAgICB8IC0wOCwgKzA1MzAsICswMCAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4ICAgICAgfCAtMDgwMCwgKzA1MzAsICswMDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHggICAgIHwgLTA4OjAwLCArMDU6MzAsICswMDowMCAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eCAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAsICsxMjM0NTYgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eHh4ICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwLCArMTI6MzQ6NTYgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICAgfCBPLi4uT09PIHwgR01ULTgsIEdNVCs1OjMwLCBHTVQrMCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgT09PTyAgICB8IEdNVC0wODowMCwgR01UKzA1OjMwLCBHTVQrMDA6MDAgICB8IDIgICAgIHxcbiAqIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pICB8IHouLi56enogfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCA2ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB6enp6ICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiw2ICAgfFxuICogfCBTZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICAgICAgIHwgdCAgICAgICB8IDUxMjk2OTUyMCAgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHR0ICAgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDcgICB8XG4gKiB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgfCBUICAgICAgIHwgNTEyOTY5NTIwOTAwICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgVFQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgICB8IFAgICAgICAgfCAwNC8yOS8xNDUzICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUCAgICAgIHwgQXByIDI5LCAxNDUzICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQICAgICB8IEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUFAgICAgfCBGcmlkYXksIEFwcmlsIDI5dGgsIDE0NTMgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICAgfCBwICAgICAgIHwgMTI6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHAgICAgICB8IDEyOjAwOjAwIEFNICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcCAgICAgfCAxMjowMDowMCBBTSBHTVQrMiAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcHBwICAgIHwgMTI6MDA6MDAgQU0gR01UKzAyOjAwICAgICAgICAgICAgIHwgMiw3ICAgfFxuICogfCBDb21iaW5hdGlvbiBvZiBkYXRlIGFuZCB0aW1lICAgIHwgUHAgICAgICB8IDA0LzI5LzE0NTMsIDEyOjAwIEFNICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQcHAgICAgfCBBcHIgMjksIDE0NTMsIDEyOjAwOjAwIEFNICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBwcHAgIHwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUHBwcHB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyBhdCAuLi4gICB8IDIsNyAgIHxcbiAqIE5vdGVzOlxuICogMS4gXCJGb3JtYXR0aW5nXCIgdW5pdHMgKGUuZy4gZm9ybWF0dGluZyBxdWFydGVyKSBpbiB0aGUgZGVmYXVsdCBlbi1VUyBsb2NhbGVcbiAqICAgIGFyZSB0aGUgc2FtZSBhcyBcInN0YW5kLWFsb25lXCIgdW5pdHMsIGJ1dCBhcmUgZGlmZmVyZW50IGluIHNvbWUgbGFuZ3VhZ2VzLlxuICogICAgXCJGb3JtYXR0aW5nXCIgdW5pdHMgYXJlIGRlY2xpbmVkIGFjY29yZGluZyB0byB0aGUgcnVsZXMgb2YgdGhlIGxhbmd1YWdlXG4gKiAgICBpbiB0aGUgY29udGV4dCBvZiBhIGRhdGUuIFwiU3RhbmQtYWxvbmVcIiB1bml0cyBhcmUgYWx3YXlzIG5vbWluYXRpdmUgc2luZ3VsYXI6XG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBMTExMJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZCdgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdkbyBNTU1NJywge2xvY2FsZTogY3N9KSAvLz0+ICc2LiBsaXN0b3BhZHUnYFxuICpcbiAqIDIuIEFueSBzZXF1ZW5jZSBvZiB0aGUgaWRlbnRpY2FsIGxldHRlcnMgaXMgYSBwYXR0ZXJuLCB1bmxlc3MgaXQgaXMgZXNjYXBlZCBieVxuICogICAgdGhlIHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzIChzZWUgYmVsb3cpLlxuICogICAgSWYgdGhlIHNlcXVlbmNlIGlzIGxvbmdlciB0aGFuIGxpc3RlZCBpbiB0YWJsZSAoZS5nLiBgRUVFRUVFRUVFRUVgKVxuICogICAgdGhlIG91dHB1dCB3aWxsIGJlIHRoZSBzYW1lIGFzIGRlZmF1bHQgcGF0dGVybiBmb3IgdGhpcyB1bml0LCB1c3VhbGx5XG4gKiAgICB0aGUgbG9uZ2VzdCBvbmUgKGluIGNhc2Ugb2YgSVNPIHdlZWtkYXlzLCBgRUVFRWApLiBEZWZhdWx0IHBhdHRlcm5zIGZvciB1bml0c1xuICogICAgYXJlIG1hcmtlZCB3aXRoIFwiMlwiIGluIHRoZSBsYXN0IGNvbHVtbiBvZiB0aGUgdGFibGUuXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU0nKSAvLz0+ICdOb3YnYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NJykgLy89PiAnTidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqIDMuIFNvbWUgcGF0dGVybnMgY291bGQgYmUgdW5saW1pdGVkIGxlbmd0aCAoc3VjaCBhcyBgeXl5eXl5eXlgKS5cbiAqICAgIFRoZSBvdXRwdXQgd2lsbCBiZSBwYWRkZWQgd2l0aCB6ZXJvcyB0byBtYXRjaCB0aGUgbGVuZ3RoIG9mIHRoZSBwYXR0ZXJuLlxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAneXl5eXl5eXknKSAvLz0+ICcwMDAwMjAxNydgXG4gKlxuICogNC4gYFFRUVFRYCBhbmQgYHFxcXFxYCBjb3VsZCBiZSBub3Qgc3RyaWN0bHkgbnVtZXJpY2FsIGluIHNvbWUgbG9jYWxlcy5cbiAqICAgIFRoZXNlIHRva2VucyByZXByZXNlbnQgdGhlIHNob3J0ZXN0IGZvcm0gb2YgdGhlIHF1YXJ0ZXIuXG4gKlxuICogNS4gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIHBhdHRlcm5zIGFyZSBCLkMuIHllYXJzOlxuICpcbiAqICAgIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICogICAgfCBBQyAxIHwgICAxIHwgICAxIHxcbiAqICAgIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gKiAgICB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICpcbiAqICAgIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAqICAgIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZDpcbiAqXG4gKiAgICB8IFllYXIgfCBgeXlgIHwgYHV1YCB8XG4gKiAgICB8LS0tLS0tfC0tLS0tLXwtLS0tLS18XG4gKiAgICB8IDEgICAgfCAgIDAxIHwgICAwMSB8XG4gKiAgICB8IDE0ICAgfCAgIDE0IHwgICAxNCB8XG4gKiAgICB8IDM3NiAgfCAgIDc2IHwgIDM3NiB8XG4gKiAgICB8IDE0NTMgfCAgIDUzIHwgMTQ1MyB8XG4gKlxuICogICAgVGhlIHNhbWUgZGlmZmVyZW5jZSBpcyB0cnVlIGZvciBsb2NhbCBhbmQgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIChgWWAgYW5kIGBSYCksXG4gKiAgICBleGNlcHQgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhcnMgYXJlIGRlcGVuZGVudCBvbiBgb3B0aW9ucy53ZWVrU3RhcnRzT25gXG4gKiAgICBhbmQgYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCAoY29tcGFyZSBbZ2V0SVNPV2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0SVNPV2Vla1llYXJ9XG4gKiAgICBhbmQgW2dldFdlZWtZZWFyXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL2dldFdlZWtZZWFyfSkuXG4gKlxuICogNi4gU3BlY2lmaWMgbm9uLWxvY2F0aW9uIHRpbWV6b25lcyBhcmUgY3VycmVudGx5IHVuYXZhaWxhYmxlIGluIGBkYXRlLWZuc2AsXG4gKiAgICBzbyByaWdodCBub3cgdGhlc2UgdG9rZW5zIGZhbGwgYmFjayB0byBHTVQgdGltZXpvbmVzLlxuICpcbiAqIDcuIFRoZXNlIHBhdHRlcm5zIGFyZSBub3QgaW4gdGhlIFVuaWNvZGUgVGVjaG5pY2FsIFN0YW5kYXJkICMzNTpcbiAqICAgIC0gYGlgOiBJU08gZGF5IG9mIHdlZWtcbiAqICAgIC0gYElgOiBJU08gd2VlayBvZiB5ZWFyXG4gKiAgICAtIGBSYDogSVNPIHdlZWstbnVtYmVyaW5nIHllYXJcbiAqICAgIC0gYHRgOiBzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgVGA6IG1pbGxpc2Vjb25kcyB0aW1lc3RhbXBcbiAqICAgIC0gYG9gOiBvcmRpbmFsIG51bWJlciBtb2RpZmllclxuICogICAgLSBgUGA6IGxvbmcgbG9jYWxpemVkIGRhdGVcbiAqICAgIC0gYHBgOiBsb25nIGxvY2FsaXplZCB0aW1lXG4gKlxuICogOC4gYFlZYCBhbmQgYFlZWVlgIHRva2VucyByZXByZXNlbnQgd2Vlay1udW1iZXJpbmcgeWVhcnMgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggeWVhcnMuXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnNgIHRvIHVzZSB0aGVtLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKlxuICogOS4gYERgIGFuZCBgRERgIHRva2VucyByZXByZXNlbnQgZGF5cyBvZiB0aGUgeWVhciBidXQgdGhleSBhcmUgb2Z0aGVuIGNvbmZ1c2VkIHdpdGggZGF5cyBvZiB0aGUgbW9udGguXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogLSBUaGUgc2Vjb25kIGFyZ3VtZW50IGlzIG5vdyByZXF1aXJlZCBmb3IgdGhlIHNha2Ugb2YgZXhwbGljaXRuZXNzLlxuICpcbiAqICAgYGBgamF2YXNjcmlwdFxuICogICAvLyBCZWZvcmUgdjIuMC4wXG4gKiAgIGZvcm1hdChuZXcgRGF0ZSgyMDE2LCAwLCAxKSlcbiAqXG4gKiAgIC8vIHYyLjAuMCBvbndhcmRcbiAqICAgZm9ybWF0KG5ldyBEYXRlKDIwMTYsIDAsIDEpLCBcInl5eXktTU0tZGQnVCdISDptbTpzcy5TU1N4eHhcIilcbiAqICAgYGBgXG4gKlxuICogLSBOZXcgZm9ybWF0IHN0cmluZyBBUEkgZm9yIGBmb3JtYXRgIGZ1bmN0aW9uXG4gKiAgIHdoaWNoIGlzIGJhc2VkIG9uIFtVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzVdKGh0dHBzOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9GaWVsZF9TeW1ib2xfVGFibGUpLlxuICogICBTZWUgW3RoaXMgcG9zdF0oaHR0cHM6Ly9ibG9nLmRhdGUtZm5zLm9yZy9wb3N0L3VuaWNvZGUtdG9rZW5zLWluLWRhdGUtZm5zLXYyLXNyZWF0eWtpOTFqZykgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiAtIENoYXJhY3RlcnMgYXJlIG5vdyBlc2NhcGVkIHVzaW5nIHNpbmdsZSBxdW90ZSBzeW1ib2xzIChgJ2ApIGluc3RlYWQgb2Ygc3F1YXJlIGJyYWNrZXRzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IGZvcm1hdCAtIHRoZSBzdHJpbmcgb2YgdG9rZW5zXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU9MV0gLSB0aGUgZGF5IG9mIEphbnVhcnksIHdoaWNoIGlzXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIHdlZWstbnVtYmVyaW5nIHllYXIgdG9rZW5zIGBZWWAgYW5kIGBZWVlZYDtcbiAqICAgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgZGF5IG9mIHllYXIgdG9rZW5zIGBEYCBhbmQgYEREYDtcbiAqICAgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGxvY2FsaXplYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdExvbmdgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gZm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAxMSBGZWJydWFyeSAyMDE0IGluIG1pZGRsZS1lbmRpYW4gZm9ybWF0OlxuICogdmFyIHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCAxLCAxMSksICdNTS9kZC95eXl5JylcbiAqIC8vPT4gJzAyLzExLzIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFJlcHJlc2VudCAyIEp1bHkgMjAxNCBpbiBFc3BlcmFudG86XG4gKiBpbXBvcnQgeyBlb0xvY2FsZSB9IGZyb20gJ2RhdGUtZm5zL2xvY2FsZS9lbydcbiAqIHZhciByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiksIFwiZG8gJ2RlJyBNTU1NIHl5eXlcIiwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAnMi1hIGRlIGp1bGlvIDIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEVzY2FwZSBzdHJpbmcgYnkgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnM6XG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIsIDE1KSwgXCJoICdvJydjbG9jaydcIilcbiAqIC8vPT4gXCIzIG8nY2xvY2tcIlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdChkaXJ0eURhdGUsIGRpcnR5Rm9ybWF0U3RyLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBmb3JtYXRTdHIgPSBTdHJpbmcoZGlydHlGb3JtYXRTdHIpO1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlIHx8IGRlZmF1bHRMb2NhbGU7XG4gIHZhciBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU7XG4gIHZhciBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyAxIDogdG9JbnRlZ2VyKGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA6IHRvSW50ZWdlcihvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGxvY2FsZVdlZWtTdGFydHNPbiA9IGxvY2FsZS5vcHRpb25zICYmIGxvY2FsZS5vcHRpb25zLndlZWtTdGFydHNPbjtcbiAgdmFyIGRlZmF1bHRXZWVrU3RhcnRzT24gPSBsb2NhbGVXZWVrU3RhcnRzT24gPT0gbnVsbCA/IDAgOiB0b0ludGVnZXIobG9jYWxlV2Vla1N0YXJ0c09uKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IG9wdGlvbnMud2Vla1N0YXJ0c09uID09IG51bGwgPyBkZWZhdWx0V2Vla1N0YXJ0c09uIDogdG9JbnRlZ2VyKG9wdGlvbnMud2Vla1N0YXJ0c09uKTsgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cblxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5sb2NhbGl6ZSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGxvY2FsaXplIHByb3BlcnR5Jyk7XG4gIH1cblxuICBpZiAoIWxvY2FsZS5mb3JtYXRMb25nKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2xvY2FsZSBtdXN0IGNvbnRhaW4gZm9ybWF0TG9uZyBwcm9wZXJ0eScpO1xuICB9XG5cbiAgdmFyIG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuXG4gIGlmICghaXNWYWxpZChvcmlnaW5hbERhdGUpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICB9IC8vIENvbnZlcnQgdGhlIGRhdGUgaW4gc3lzdGVtIHRpbWV6b25lIHRvIHRoZSBzYW1lIGRhdGUgaW4gVVRDKzAwOjAwIHRpbWV6b25lLlxuICAvLyBUaGlzIGVuc3VyZXMgdGhhdCB3aGVuIFVUQyBmdW5jdGlvbnMgd2lsbCBiZSBpbXBsZW1lbnRlZCwgbG9jYWxlcyB3aWxsIGJlIGNvbXBhdGlibGUgd2l0aCB0aGVtLlxuICAvLyBTZWUgYW4gaXNzdWUgYWJvdXQgVVRDIGZ1bmN0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuXG4gIHZhciB0aW1lem9uZU9mZnNldCA9IGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlKTtcbiAgdmFyIHV0Y0RhdGUgPSBzdWJNaWxsaXNlY29uZHMob3JpZ2luYWxEYXRlLCB0aW1lem9uZU9mZnNldCk7XG4gIHZhciBmb3JtYXR0ZXJPcHRpb25zID0ge1xuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogZmlyc3RXZWVrQ29udGFpbnNEYXRlLFxuICAgIHdlZWtTdGFydHNPbjogd2Vla1N0YXJ0c09uLFxuICAgIGxvY2FsZTogbG9jYWxlLFxuICAgIF9vcmlnaW5hbERhdGU6IG9yaWdpbmFsRGF0ZVxuICB9O1xuICB2YXIgcmVzdWx0ID0gZm9ybWF0U3RyLm1hdGNoKGxvbmdGb3JtYXR0aW5nVG9rZW5zUmVnRXhwKS5tYXAoZnVuY3Rpb24gKHN1YnN0cmluZykge1xuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gJ3AnIHx8IGZpcnN0Q2hhcmFjdGVyID09PSAnUCcpIHtcbiAgICAgIHZhciBsb25nRm9ybWF0dGVyID0gbG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgcmV0dXJuIGxvbmdGb3JtYXR0ZXIoc3Vic3RyaW5nLCBsb2NhbGUuZm9ybWF0TG9uZywgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJykubWF0Y2goZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICAvLyBSZXBsYWNlIHR3byBzaW5nbGUgcXVvdGUgY2hhcmFjdGVycyB3aXRoIG9uZSBzaW5nbGUgcXVvdGUgY2hhcmFjdGVyXG4gICAgaWYgKHN1YnN0cmluZyA9PT0gXCInJ1wiKSB7XG4gICAgICByZXR1cm4gXCInXCI7XG4gICAgfVxuXG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcIidcIikge1xuICAgICAgcmV0dXJuIGNsZWFuRXNjYXBlZFN0cmluZyhzdWJzdHJpbmcpO1xuICAgIH1cblxuICAgIHZhciBmb3JtYXR0ZXIgPSBmb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcblxuICAgIGlmIChmb3JtYXR0ZXIpIHtcbiAgICAgIGlmICghb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnMgJiYgaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBkaXJ0eURhdGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIW9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2VucyAmJiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBkaXJ0eURhdGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm9ybWF0dGVyKHV0Y0RhdGUsIHN1YnN0cmluZywgbG9jYWxlLmxvY2FsaXplLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIubWF0Y2godW5lc2NhcGVkTGF0aW5DaGFyYWN0ZXJSZWdFeHApKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignRm9ybWF0IHN0cmluZyBjb250YWlucyBhbiB1bmVzY2FwZWQgbGF0aW4gYWxwaGFiZXQgY2hhcmFjdGVyIGAnICsgZmlyc3RDaGFyYWN0ZXIgKyAnYCcpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcbiAgcmV0dXJuIGlucHV0Lm1hdGNoKGVzY2FwZWRTdHJpbmdSZWdFeHApWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBlbmRPZkRheSBmcm9tIFwiLi4vZW5kT2ZEYXkvaW5kZXguanNcIjtcbmltcG9ydCBlbmRPZk1vbnRoIGZyb20gXCIuLi9lbmRPZk1vbnRoL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0xhc3REYXlPZk1vbnRoXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdGhlIGxhc3QgZGF5IG9mIGEgbW9udGg/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0aGUgbGFzdCBkYXkgb2YgYSBtb250aD9cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHRoZSBsYXN0IGRheSBvZiBhIG1vbnRoXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSXMgMjggRmVicnVhcnkgMjAxNCB0aGUgbGFzdCBkYXkgb2YgYSBtb250aD9cbiAqIHZhciByZXN1bHQgPSBpc0xhc3REYXlPZk1vbnRoKG5ldyBEYXRlKDIwMTQsIDEsIDI4KSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzTGFzdERheU9mTW9udGgoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICByZXR1cm4gZW5kT2ZEYXkoZGF0ZSkuZ2V0VGltZSgpID09PSBlbmRPZk1vbnRoKGRhdGUpLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVmFsaWRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdmFsaWQ/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIGZhbHNlIGlmIGFyZ3VtZW50IGlzIEludmFsaWQgRGF0ZSBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gKiBBcmd1bWVudCBpcyBjb252ZXJ0ZWQgdG8gRGF0ZSB1c2luZyBgdG9EYXRlYC4gU2VlIFt0b0RhdGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvdG9EYXRlfVxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiAtIE5vdyBgaXNWYWxpZGAgZG9lc24ndCB0aHJvdyBhbiBleGNlcHRpb25cbiAqICAgaWYgdGhlIGZpcnN0IGFyZ3VtZW50IGlzIG5vdCBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICogICBJbnN0ZWFkLCBhcmd1bWVudCBpcyBjb252ZXJ0ZWQgYmVmb3JlaGFuZCB1c2luZyBgdG9EYXRlYC5cbiAqXG4gKiAgIEV4YW1wbGVzOlxuICpcbiAqICAgfCBgaXNWYWxpZGAgYXJndW1lbnQgICAgICAgIHwgQmVmb3JlIHYyLjAuMCB8IHYyLjAuMCBvbndhcmQgfFxuICogICB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS18XG4gKiAgIHwgYG5ldyBEYXRlKClgICAgICAgICAgICAgICB8IGB0cnVlYCAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoJzIwMTYtMDEtMDEnKWAgIHwgYHRydWVgICAgICAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZSgnJylgICAgICAgICAgICAgfCBgZmFsc2VgICAgICAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKDE0ODgzNzA4MzUwODEpYCB8IGB0cnVlYCAgICAgICAgfCBgdHJ1ZWAgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoTmFOKWAgICAgICAgICAgIHwgYGZhbHNlYCAgICAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGAnMjAxNi0wMS0wMSdgICAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYCcnYCAgICAgICAgICAgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgMTQ4ODM3MDgzNTA4MWAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBOYU5gICAgICAgICAgICAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYGZhbHNlYCAgICAgICB8XG4gKlxuICogICBXZSBpbnRyb2R1Y2UgdGhpcyBjaGFuZ2UgdG8gbWFrZSAqZGF0ZS1mbnMqIGNvbnNpc3RlbnQgd2l0aCBFQ01BU2NyaXB0IGJlaGF2aW9yXG4gKiAgIHRoYXQgdHJ5IHRvIGNvZXJjZSBhcmd1bWVudHMgdG8gdGhlIGV4cGVjdGVkIHR5cGVcbiAqICAgKHdoaWNoIGlzIGFsc28gdGhlIGNhc2Ugd2l0aCBvdGhlciAqZGF0ZS1mbnMqIGZ1bmN0aW9ucykuXG4gKlxuICogQHBhcmFtIHsqfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB2YWxpZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgdmFsaWQgZGF0ZTpcbiAqIHZhciByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKDIwMTQsIDEsIDMxKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIHZhbHVlLCBjb252ZXJ0YWJsZSBpbnRvIGEgZGF0ZTpcbiAqIHZhciByZXN1bHQgPSBpc1ZhbGlkKDEzOTM4MDQ4MDAwMDApXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBpbnZhbGlkIGRhdGU6XG4gKiB2YXIgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgnJykpXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNWYWxpZChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHJldHVybiAhaXNOYU4oZGF0ZSk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRGb3JtYXRMb25nRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5T3B0aW9ucykge1xuICAgIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICAgIHZhciB3aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICB2YXIgZm9ybWF0ID0gYXJncy5mb3JtYXRzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHNbYXJncy5kZWZhdWx0V2lkdGhdO1xuICAgIHJldHVybiBmb3JtYXQ7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRMb2NhbGl6ZUZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXJ0eUluZGV4LCBkaXJ0eU9wdGlvbnMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMuY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogJ3N0YW5kYWxvbmUnO1xuICAgIHZhciB2YWx1ZXNBcnJheTtcblxuICAgIGlmIChjb250ZXh0ID09PSAnZm9ybWF0dGluZycgJiYgYXJncy5mb3JtYXR0aW5nVmFsdWVzKSB7XG4gICAgICB2YXIgZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0Rm9ybWF0dGluZ1dpZHRoIHx8IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGRlZmF1bHRXaWR0aDtcbiAgICAgIHZhbHVlc0FycmF5ID0gYXJncy5mb3JtYXR0aW5nVmFsdWVzW3dpZHRoXSB8fCBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbZGVmYXVsdFdpZHRoXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIF9kZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFyIF93aWR0aCA9IG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBhcmdzLmRlZmF1bHRXaWR0aDtcblxuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1tfd2lkdGhdIHx8IGFyZ3MudmFsdWVzW19kZWZhdWx0V2lkdGhdO1xuICAgIH1cblxuICAgIHZhciBpbmRleCA9IGFyZ3MuYXJndW1lbnRDYWxsYmFjayA/IGFyZ3MuYXJndW1lbnRDYWxsYmFjayhkaXJ0eUluZGV4KSA6IGRpcnR5SW5kZXg7XG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5U3RyaW5nLCBkaXJ0eU9wdGlvbnMpIHtcbiAgICB2YXIgc3RyaW5nID0gU3RyaW5nKGRpcnR5U3RyaW5nKTtcbiAgICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHZhciBtYXRjaFBhdHRlcm4gPSB3aWR0aCAmJiBhcmdzLm1hdGNoUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcblxuICAgIGlmICghbWF0Y2hSZXN1bHQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBtYXRjaGVkU3RyaW5nID0gbWF0Y2hSZXN1bHRbMF07XG4gICAgdmFyIHBhcnNlUGF0dGVybnMgPSB3aWR0aCAmJiBhcmdzLnBhcnNlUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MucGFyc2VQYXR0ZXJuc1thcmdzLmRlZmF1bHRQYXJzZVdpZHRoXTtcbiAgICB2YXIgdmFsdWU7XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHBhcnNlUGF0dGVybnMpID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICB2YWx1ZSA9IGZpbmRJbmRleChwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gZmluZEtleShwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aClcbiAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaW5kS2V5KG9iamVjdCwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICBpZiAob2JqZWN0Lmhhc093blByb3BlcnR5KGtleSkgJiYgcHJlZGljYXRlKG9iamVjdFtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZEluZGV4KGFycmF5LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5ID0gMDsga2V5IDwgYXJyYXkubGVuZ3RoOyBrZXkrKykge1xuICAgIGlmIChwcmVkaWNhdGUoYXJyYXlba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlydHlTdHJpbmcsIGRpcnR5T3B0aW9ucykge1xuICAgIHZhciBzdHJpbmcgPSBTdHJpbmcoZGlydHlTdHJpbmcpO1xuICAgIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG5cbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XG5cbiAgICBpZiAoIXBhcnNlUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2socGFyc2VSZXN1bHRbMF0pIDogcGFyc2VSZXN1bHRbMF07XG4gICAgdmFsdWUgPSBvcHRpb25zLnZhbHVlQ2FsbGJhY2sgPyBvcHRpb25zLnZhbHVlQ2FsbGJhY2sodmFsdWUpIDogdmFsdWU7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aClcbiAgICB9O1xuICB9O1xufSIsInZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIHNlY29uZCcsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSBzZWNvbmQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnaGFsZiBhIG1pbnV0ZScsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBtaW51dGUnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbWludXRlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgaG91cicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgaG91cicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSBkYXknLFxuICAgIG90aGVyOiAne3tjb3VudH19IGRheXMnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB3ZWVrJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSB3ZWVrJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBtb250aCcsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnMSBtb250aCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgeWVhcicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICdvdmVyIDEgeWVhcicsXG4gICAgb3RoZXI6ICdvdmVyIHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnYWxtb3N0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhbG1vc3Qge3tjb3VudH19IHllYXJzJ1xuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0RGlzdGFuY2UodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgcmVzdWx0O1xuXG4gIGlmICh0eXBlb2YgZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dID09PSAnc3RyaW5nJykge1xuICAgIHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXTtcbiAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgIHJlc3VsdCA9IGZvcm1hdERpc3RhbmNlTG9jYWxlW3Rva2VuXS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dLm90aGVyLnJlcGxhY2UoJ3t7Y291bnR9fScsIGNvdW50KTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICByZXR1cm4gJ2luICcgKyByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN1bHQgKyAnIGFnbyc7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn0iLCJpbXBvcnQgYnVpbGRGb3JtYXRMb25nRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIjtcbnZhciBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0VFRUUsIE1NTU0gZG8sIHknLFxuICBsb25nOiAnTU1NTSBkbywgeScsXG4gIG1lZGl1bTogJ01NTSBkLCB5JyxcbiAgc2hvcnQ6ICdNTS9kZC95eXl5J1xufTtcbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ2g6bW06c3MgYSB6enp6JyxcbiAgbG9uZzogJ2g6bW06c3MgYSB6JyxcbiAgbWVkaXVtOiAnaDptbTpzcyBhJyxcbiAgc2hvcnQ6ICdoOm1tIGEnXG59O1xudmFyIGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIGxvbmc6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBtZWRpdW06ICd7e2RhdGV9fSwge3t0aW1lfX0nLFxuICBzaG9ydDogJ3t7ZGF0ZX19LCB7e3RpbWV9fSdcbn07XG52YXIgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICB0aW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIGRhdGVUaW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0TG9uZzsiLCJ2YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiAnUCdcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXRSZWxhdGl2ZSh0b2tlbiwgX2RhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpIHtcbiAgcmV0dXJuIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbn0iLCJpbXBvcnQgYnVpbGRMb2NhbGl6ZUZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0InLCAnQSddLFxuICBhYmJyZXZpYXRlZDogWydCQycsICdBRCddLFxuICB3aWRlOiBbJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJzFzdCBxdWFydGVyJywgJzJuZCBxdWFydGVyJywgJzNyZCBxdWFydGVyJywgJzR0aCBxdWFydGVyJ10gLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4gIC8vIElmIHlvdSBhcmUgbWFraW5nIGEgbmV3IGxvY2FsZSBiYXNlZCBvbiB0aGlzIG9uZSwgY2hlY2sgaWYgdGhlIHNhbWUgaXMgdHJ1ZSBmb3IgdGhlIGxhbmd1YWdlIHlvdSdyZSB3b3JraW5nIG9uLlxuICAvLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbiAgLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuXG59O1xudmFyIG1vbnRoVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnSicsICdGJywgJ00nLCAnQScsICdNJywgJ0onLCAnSicsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnSmFuJywgJ0ZlYicsICdNYXInLCAnQXByJywgJ01heScsICdKdW4nLCAnSnVsJywgJ0F1ZycsICdTZXAnLCAnT2N0JywgJ05vdicsICdEZWMnXSxcbiAgd2lkZTogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbn07XG52YXIgZGF5VmFsdWVzID0ge1xuICBuYXJyb3c6IFsnUycsICdNJywgJ1QnLCAnVycsICdUJywgJ0YnLCAnUyddLFxuICBzaG9ydDogWydTdScsICdNbycsICdUdScsICdXZScsICdUaCcsICdGcicsICdTYSddLFxuICBhYmJyZXZpYXRlZDogWydTdW4nLCAnTW9uJywgJ1R1ZScsICdXZWQnLCAnVGh1JywgJ0ZyaScsICdTYXQnXSxcbiAgd2lkZTogWydTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JywgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSddXG59O1xudmFyIGRheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9XG59O1xudmFyIGZvcm1hdHRpbmdEYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfVxufTtcblxuZnVuY3Rpb24gb3JkaW5hbE51bWJlcihkaXJ0eU51bWJlciwgX2RpcnR5T3B0aW9ucykge1xuICB2YXIgbnVtYmVyID0gTnVtYmVyKGRpcnR5TnVtYmVyKTsgLy8gSWYgb3JkaW5hbCBudW1iZXJzIGRlcGVuZCBvbiBjb250ZXh0LCBmb3IgZXhhbXBsZSxcbiAgLy8gaWYgdGhleSBhcmUgZGlmZmVyZW50IGZvciBkaWZmZXJlbnQgZ3JhbW1hdGljYWwgZ2VuZGVycyxcbiAgLy8gdXNlIGBvcHRpb25zLnVuaXRgOlxuICAvL1xuICAvLyAgIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9XG4gIC8vICAgdmFyIHVuaXQgPSBTdHJpbmcob3B0aW9ucy51bml0KVxuICAvL1xuICAvLyB3aGVyZSBgdW5pdGAgY2FuIGJlICd5ZWFyJywgJ3F1YXJ0ZXInLCAnbW9udGgnLCAnd2VlaycsICdkYXRlJywgJ2RheU9mWWVhcicsXG4gIC8vICdkYXknLCAnaG91cicsICdtaW51dGUnLCAnc2Vjb25kJ1xuXG4gIHZhciByZW0xMDAgPSBudW1iZXIgJSAxMDA7XG5cbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0JztcblxuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ25kJztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3JkJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVtYmVyICsgJ3RoJztcbn1cblxudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIChxdWFydGVyKSB7XG4gICAgICByZXR1cm4gTnVtYmVyKHF1YXJ0ZXIpIC0gMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IG1vbnRoVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXk6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGRheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJyxcbiAgICBmb3JtYXR0aW5nVmFsdWVzOiBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzLFxuICAgIGRlZmF1bHRGb3JtYXR0aW5nV2lkdGg6ICd3aWRlJ1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsaXplOyIsImltcG9ydCBidWlsZE1hdGNoUGF0dGVybkZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hQYXR0ZXJuRm4vaW5kZXguanNcIjtcbmltcG9ydCBidWlsZE1hdGNoRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaEZuL2luZGV4LmpzXCI7XG52YXIgbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9eKFxcZCspKHRofHN0fG5kfHJkKT8vaTtcbnZhciBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuID0gL1xcZCsvaTtcbnZhciBtYXRjaEVyYVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGJ8YSkvaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGJcXC4/XFxzP2NcXC4/fGJcXC4/XFxzP2NcXC4/XFxzP2VcXC4/fGFcXC4/XFxzP2RcXC4/fGNcXC4/XFxzP2VcXC4/KS9pLFxuICB3aWRlOiAvXihiZWZvcmUgY2hyaXN0fGJlZm9yZSBjb21tb24gZXJhfGFubm8gZG9taW5pfGNvbW1vbiBlcmEpL2lcbn07XG52YXIgcGFyc2VFcmFQYXR0ZXJucyA9IHtcbiAgYW55OiBbL15iL2ksIC9eKGF8YykvaV1cbn07XG52YXIgbWF0Y2hRdWFydGVyUGF0dGVybnMgPSB7XG4gIG5hcnJvdzogL15bMTIzNF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9ecVsxMjM0XS9pLFxuICB3aWRlOiAvXlsxMjM0XSh0aHxzdHxuZHxyZCk/IHF1YXJ0ZXIvaVxufTtcbnZhciBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyA9IHtcbiAgYW55OiBbLzEvaSwgLzIvaSwgLzMvaSwgLzQvaV1cbn07XG52YXIgbWF0Y2hNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW2pmbWFzb25kXS9pLFxuICBhYmJyZXZpYXRlZDogL14oamFufGZlYnxtYXJ8YXByfG1heXxqdW58anVsfGF1Z3xzZXB8b2N0fG5vdnxkZWMpL2ksXG4gIHdpZGU6IC9eKGphbnVhcnl8ZmVicnVhcnl8bWFyY2h8YXByaWx8bWF5fGp1bmV8anVseXxhdWd1c3R8c2VwdGVtYmVyfG9jdG9iZXJ8bm92ZW1iZXJ8ZGVjZW1iZXIpL2lcbn07XG52YXIgcGFyc2VNb250aFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXmovaSwgL15mL2ksIC9ebS9pLCAvXmEvaSwgL15tL2ksIC9eai9pLCAvXmovaSwgL15hL2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXSxcbiAgYW55OiBbL15qYS9pLCAvXmYvaSwgL15tYXIvaSwgL15hcC9pLCAvXm1heS9pLCAvXmp1bi9pLCAvXmp1bC9pLCAvXmF1L2ksIC9ecy9pLCAvXm8vaSwgL15uL2ksIC9eZC9pXVxufTtcbnZhciBtYXRjaERheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eW3NtdHdmXS9pLFxuICBzaG9ydDogL14oc3V8bW98dHV8d2V8dGh8ZnJ8c2EpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihzdW58bW9ufHR1ZXx3ZWR8dGh1fGZyaXxzYXQpL2ksXG4gIHdpZGU6IC9eKHN1bmRheXxtb25kYXl8dHVlc2RheXx3ZWRuZXNkYXl8dGh1cnNkYXl8ZnJpZGF5fHNhdHVyZGF5KS9pXG59O1xudmFyIHBhcnNlRGF5UGF0dGVybnMgPSB7XG4gIG5hcnJvdzogWy9ecy9pLCAvXm0vaSwgL150L2ksIC9edy9pLCAvXnQvaSwgL15mL2ksIC9ecy9pXSxcbiAgYW55OiBbL15zdS9pLCAvXm0vaSwgL150dS9pLCAvXncvaSwgL150aC9pLCAvXmYvaSwgL15zYS9pXVxufTtcbnZhciBtYXRjaERheVBlcmlvZFBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eKGF8cHxtaXxufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaSxcbiAgYW55OiAvXihbYXBdXFwuP1xccz9tXFwuP3xtaWRuaWdodHxub29ufChpbiB0aGV8YXQpIChtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0KSkvaVxufTtcbnZhciBwYXJzZURheVBlcmlvZFBhdHRlcm5zID0ge1xuICBhbnk6IHtcbiAgICBhbTogL15hL2ksXG4gICAgcG06IC9ecC9pLFxuICAgIG1pZG5pZ2h0OiAvXm1pL2ksXG4gICAgbm9vbjogL15uby9pLFxuICAgIG1vcm5pbmc6IC9tb3JuaW5nL2ksXG4gICAgYWZ0ZXJub29uOiAvYWZ0ZXJub29uL2ksXG4gICAgZXZlbmluZzogL2V2ZW5pbmcvaSxcbiAgICBuaWdodDogL25pZ2h0L2lcbiAgfVxufTtcbnZhciBtYXRjaCA9IHtcbiAgb3JkaW5hbE51bWJlcjogYnVpbGRNYXRjaFBhdHRlcm5Gbih7XG4gICAgbWF0Y2hQYXR0ZXJuOiBtYXRjaE9yZGluYWxOdW1iZXJQYXR0ZXJuLFxuICAgIHBhcnNlUGF0dGVybjogcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cbiAgfSksXG4gIGVyYTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaEVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZVF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueScsXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnYW55JyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IG1hdGNoOyIsImltcG9ydCBmb3JtYXREaXN0YW5jZSBmcm9tIFwiLi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0TG9uZyBmcm9tIFwiLi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRSZWxhdGl2ZSBmcm9tIFwiLi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9jYWxpemUgZnJvbSBcIi4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qc1wiO1xuaW1wb3J0IG1hdGNoIGZyb20gXCIuL19saWIvbWF0Y2gvaW5kZXguanNcIjtcbi8qKlxuICogQHR5cGUge0xvY2FsZX1cbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwfVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzfVxuICovXG5cbnZhciBsb2NhbGUgPSB7XG4gIGNvZGU6ICdlbi1VUycsXG4gIGZvcm1hdERpc3RhbmNlOiBmb3JtYXREaXN0YW5jZSxcbiAgZm9ybWF0TG9uZzogZm9ybWF0TG9uZyxcbiAgZm9ybWF0UmVsYXRpdmU6IGZvcm1hdFJlbGF0aXZlLFxuICBsb2NhbGl6ZTogbG9jYWxpemUsXG4gIG1hdGNoOiBtYXRjaCxcbiAgb3B0aW9uczoge1xuICAgIHdlZWtTdGFydHNPbjogMFxuICAgIC8qIFN1bmRheSAqL1xuICAgICxcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IDFcbiAgfVxufTtcbmV4cG9ydCBkZWZhdWx0IGxvY2FsZTsiLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZE1pbGxpc2Vjb25kcyBmcm9tIFwiLi4vYWRkTWlsbGlzZWNvbmRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdWJNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqICMjIyB2Mi4wLjAgYnJlYWtpbmcgY2hhbmdlczpcbiAqXG4gKiAtIFtDaGFuZ2VzIHRoYXQgYXJlIGNvbW1vbiBmb3IgdGhlIHdob2xlIGxpYnJhcnldKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VwZ3JhZGVHdWlkZS5tZCNDb21tb24tQ2hhbmdlcykuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBiZSBzdWJ0cmFjdGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBzdWJ0cmFjdGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN1YnRyYWN0IDc1MCBtaWxsaXNlY29uZHMgZnJvbSAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gc3ViTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MjkuMjUwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3ViTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICByZXR1cm4gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgLWFtb3VudCk7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgYXJndW1lbnQgPT09ICdvYmplY3QnICYmIGFyZ1N0ciA9PT0gJ1tvYmplY3QgRGF0ZV0nKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50LmdldFRpbWUoKSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGFyZ3VtZW50ID09PSAnbnVtYmVyJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IE51bWJlcl0nKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKGFyZ3VtZW50KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAoKHR5cGVvZiBhcmd1bWVudCA9PT0gJ3N0cmluZycgfHwgYXJnU3RyID09PSAnW29iamVjdCBTdHJpbmddJykgJiYgdHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKFwiU3RhcnRpbmcgd2l0aCB2Mi4wLjAtYmV0YS4xIGRhdGUtZm5zIGRvZXNuJ3QgYWNjZXB0IHN0cmluZ3MgYXMgZGF0ZSBhcmd1bWVudHMuIFBsZWFzZSB1c2UgYHBhcnNlSVNPYCB0byBwYXJzZSBzdHJpbmdzLiBTZWU6IGh0dHBzOi8vZ2l0LmlvL2ZqdWxlXCIpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuXG4gICAgICBjb25zb2xlLndhcm4obmV3IEVycm9yKCkuc3RhY2spO1xuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59IiwiZXhwb3J0IHZhciBDT01QTEVURV9OT1RJRklDQVRJT04gPSAoZnVuY3Rpb24gKCkgeyByZXR1cm4gY3JlYXRlTm90aWZpY2F0aW9uKCdDJywgdW5kZWZpbmVkLCB1bmRlZmluZWQpOyB9KSgpO1xuZXhwb3J0IGZ1bmN0aW9uIGVycm9yTm90aWZpY2F0aW9uKGVycm9yKSB7XG4gICAgcmV0dXJuIGNyZWF0ZU5vdGlmaWNhdGlvbignRScsIHVuZGVmaW5lZCwgZXJyb3IpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG5leHROb3RpZmljYXRpb24odmFsdWUpIHtcbiAgICByZXR1cm4gY3JlYXRlTm90aWZpY2F0aW9uKCdOJywgdmFsdWUsIHVuZGVmaW5lZCk7XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTm90aWZpY2F0aW9uKGtpbmQsIHZhbHVlLCBlcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICAgIGtpbmQ6IGtpbmQsXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgZXJyb3I6IGVycm9yLFxuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Ob3RpZmljYXRpb25GYWN0b3JpZXMuanMubWFwIiwiaW1wb3J0IHsgU2FmZVN1YnNjcmliZXIsIFN1YnNjcmliZXIgfSBmcm9tICcuL1N1YnNjcmliZXInO1xuaW1wb3J0IHsgaXNTdWJzY3JpcHRpb24gfSBmcm9tICcuL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBvYnNlcnZhYmxlIGFzIFN5bWJvbF9vYnNlcnZhYmxlIH0gZnJvbSAnLi9zeW1ib2wvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBwaXBlRnJvbUFycmF5IH0gZnJvbSAnLi91dGlsL3BpcGUnO1xuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSAnLi9jb25maWcnO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vdXRpbC9pc0Z1bmN0aW9uJztcbnZhciBPYnNlcnZhYmxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBPYnNlcnZhYmxlKHN1YnNjcmliZSkge1xuICAgICAgICBpZiAoc3Vic2NyaWJlKSB7XG4gICAgICAgICAgICB0aGlzLl9zdWJzY3JpYmUgPSBzdWJzY3JpYmU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUubGlmdCA9IGZ1bmN0aW9uIChvcGVyYXRvcikge1xuICAgICAgICB2YXIgb2JzZXJ2YWJsZSA9IG5ldyBPYnNlcnZhYmxlKCk7XG4gICAgICAgIG9ic2VydmFibGUuc291cmNlID0gdGhpcztcbiAgICAgICAgb2JzZXJ2YWJsZS5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZTtcbiAgICB9O1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlLnN1YnNjcmliZSA9IGZ1bmN0aW9uIChvYnNlcnZlck9yTmV4dCwgZXJyb3IsIGNvbXBsZXRlKSB7XG4gICAgICAgIHZhciBzdWJzY3JpYmVyID0gaXNTdWJzY3JpYmVyKG9ic2VydmVyT3JOZXh0KSA/IG9ic2VydmVyT3JOZXh0IDogbmV3IFNhZmVTdWJzY3JpYmVyKG9ic2VydmVyT3JOZXh0LCBlcnJvciwgY29tcGxldGUpO1xuICAgICAgICBpZiAoY29uZmlnLnVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuX2RlcHJlY2F0ZWRTeW5jRXJyb3JTdWJzY3JpYmUoc3Vic2NyaWJlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLCBvcGVyYXRvciA9IF9hLm9wZXJhdG9yLCBzb3VyY2UgPSBfYS5zb3VyY2U7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmFkZChvcGVyYXRvclxuICAgICAgICAgICAgICAgID9cbiAgICAgICAgICAgICAgICAgICAgb3BlcmF0b3IuY2FsbChzdWJzY3JpYmVyLCBzb3VyY2UpXG4gICAgICAgICAgICAgICAgOiBzb3VyY2VcbiAgICAgICAgICAgICAgICAgICAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3Vic2NyaWJlKHN1YnNjcmliZXIpXG4gICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3RyeVN1YnNjcmliZShzdWJzY3JpYmVyKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1YnNjcmliZXI7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5fZGVwcmVjYXRlZFN5bmNFcnJvclN1YnNjcmliZSA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBsb2NhbFN1YnNjcmliZXIgPSBzdWJzY3JpYmVyO1xuICAgICAgICBsb2NhbFN1YnNjcmliZXIuX3N5bmNFcnJvckhhY2tfaXNTdWJzY3JpYmluZyA9IHRydWU7XG4gICAgICAgIHZhciBvcGVyYXRvciA9IHRoaXMub3BlcmF0b3I7XG4gICAgICAgIGlmIChvcGVyYXRvcikge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5hZGQob3BlcmF0b3IuY2FsbChzdWJzY3JpYmVyLCB0aGlzLnNvdXJjZSkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmFkZCh0aGlzLl9zdWJzY3JpYmUoc3Vic2NyaWJlcikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGxvY2FsU3Vic2NyaWJlci5fX3N5bmNFcnJvciA9IGVycjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgZGVzdCA9IGxvY2FsU3Vic2NyaWJlcjtcbiAgICAgICAgd2hpbGUgKGRlc3QpIHtcbiAgICAgICAgICAgIGlmICgnX19zeW5jRXJyb3InIGluIGRlc3QpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBkZXN0Ll9fc3luY0Vycm9yO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlci51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlc3QgPSBkZXN0LmRlc3RpbmF0aW9uO1xuICAgICAgICB9XG4gICAgICAgIGxvY2FsU3Vic2NyaWJlci5fc3luY0Vycm9ySGFja19pc1N1YnNjcmliaW5nID0gZmFsc2U7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5fdHJ5U3Vic2NyaWJlID0gZnVuY3Rpb24gKHNpbmspIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdWJzY3JpYmUoc2luayk7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgc2luay5lcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKG5leHQsIHByb21pc2VDdG9yKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHByb21pc2VDdG9yID0gZ2V0UHJvbWlzZUN0b3IocHJvbWlzZUN0b3IpO1xuICAgICAgICByZXR1cm4gbmV3IHByb21pc2VDdG9yKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIHZhciBzdWJzY3JpcHRpb247XG4gICAgICAgICAgICBzdWJzY3JpcHRpb24gPSBfdGhpcy5zdWJzY3JpYmUoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmlwdGlvbiA9PT0gbnVsbCB8fCBzdWJzY3JpcHRpb24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHJlamVjdCwgcmVzb2x2ZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGUuX3N1YnNjcmliZSA9IGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgcmV0dXJuIChfYSA9IHRoaXMuc291cmNlKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICAgIH07XG4gICAgT2JzZXJ2YWJsZS5wcm90b3R5cGVbU3ltYm9sX29ic2VydmFibGVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIE9ic2VydmFibGUucHJvdG90eXBlLnBpcGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvcGVyYXRpb25zID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBvcGVyYXRpb25zW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9wZXJhdGlvbnMubGVuZ3RoID8gcGlwZUZyb21BcnJheShvcGVyYXRpb25zKSh0aGlzKSA6IHRoaXM7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLnByb3RvdHlwZS50b1Byb21pc2UgPSBmdW5jdGlvbiAocHJvbWlzZUN0b3IpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcHJvbWlzZUN0b3IgPSBnZXRQcm9taXNlQ3Rvcihwcm9taXNlQ3Rvcik7XG4gICAgICAgIHJldHVybiBuZXcgcHJvbWlzZUN0b3IoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAgICAgX3RoaXMuc3Vic2NyaWJlKGZ1bmN0aW9uICh4KSB7IHJldHVybiAodmFsdWUgPSB4KTsgfSwgZnVuY3Rpb24gKGVycikgeyByZXR1cm4gcmVqZWN0KGVycik7IH0sIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc29sdmUodmFsdWUpOyB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBPYnNlcnZhYmxlLmNyZWF0ZSA9IGZ1bmN0aW9uIChzdWJzY3JpYmUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKHN1YnNjcmliZSk7XG4gICAgfTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZTtcbn0oKSk7XG5leHBvcnQgeyBPYnNlcnZhYmxlIH07XG5mdW5jdGlvbiBnZXRQcm9taXNlQ3Rvcihwcm9taXNlQ3Rvcikge1xuICAgIHZhciBfYTtcbiAgICByZXR1cm4gKF9hID0gcHJvbWlzZUN0b3IgIT09IG51bGwgJiYgcHJvbWlzZUN0b3IgIT09IHZvaWQgMCA/IHByb21pc2VDdG9yIDogY29uZmlnLlByb21pc2UpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IFByb21pc2U7XG59XG5mdW5jdGlvbiBpc09ic2VydmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICYmIGlzRnVuY3Rpb24odmFsdWUubmV4dCkgJiYgaXNGdW5jdGlvbih2YWx1ZS5lcnJvcikgJiYgaXNGdW5jdGlvbih2YWx1ZS5jb21wbGV0ZSk7XG59XG5mdW5jdGlvbiBpc1N1YnNjcmliZXIodmFsdWUpIHtcbiAgICByZXR1cm4gKHZhbHVlICYmIHZhbHVlIGluc3RhbmNlb2YgU3Vic2NyaWJlcikgfHwgKGlzT2JzZXJ2ZXIodmFsdWUpICYmIGlzU3Vic2NyaXB0aW9uKHZhbHVlKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1PYnNlcnZhYmxlLmpzLm1hcCIsImltcG9ydCB7IF9fZXh0ZW5kcywgX19yZWFkLCBfX3NwcmVhZEFycmF5IH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi91dGlsL2lzRnVuY3Rpb24nO1xuaW1wb3J0IHsgaXNTdWJzY3JpcHRpb24sIFN1YnNjcmlwdGlvbiB9IGZyb20gJy4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4vY29uZmlnJztcbmltcG9ydCB7IHJlcG9ydFVuaGFuZGxlZEVycm9yIH0gZnJvbSAnLi91dGlsL3JlcG9ydFVuaGFuZGxlZEVycm9yJztcbmltcG9ydCB7IG5vb3AgfSBmcm9tICcuL3V0aWwvbm9vcCc7XG5pbXBvcnQgeyBuZXh0Tm90aWZpY2F0aW9uLCBlcnJvck5vdGlmaWNhdGlvbiwgQ09NUExFVEVfTk9USUZJQ0FUSU9OIH0gZnJvbSAnLi9Ob3RpZmljYXRpb25GYWN0b3JpZXMnO1xuaW1wb3J0IHsgdGltZW91dFByb3ZpZGVyIH0gZnJvbSAnLi9zY2hlZHVsZXIvdGltZW91dFByb3ZpZGVyJztcbnZhciBTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU3Vic2NyaWJlciwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBTdWJzY3JpYmVyKGRlc3RpbmF0aW9uKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLmlzU3RvcHBlZCA9IGZhbHNlO1xuICAgICAgICBpZiAoZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAgIF90aGlzLmRlc3RpbmF0aW9uID0gZGVzdGluYXRpb247XG4gICAgICAgICAgICBpZiAoaXNTdWJzY3JpcHRpb24oZGVzdGluYXRpb24pKSB7XG4gICAgICAgICAgICAgICAgZGVzdGluYXRpb24uYWRkKF90aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLmRlc3RpbmF0aW9uID0gRU1QVFlfT0JTRVJWRVI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBTdWJzY3JpYmVyLmNyZWF0ZSA9IGZ1bmN0aW9uIChuZXh0LCBlcnJvciwgY29tcGxldGUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTYWZlU3Vic2NyaWJlcihuZXh0LCBlcnJvciwgY29tcGxldGUpO1xuICAgIH07XG4gICAgU3Vic2NyaWJlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIGhhbmRsZVN0b3BwZWROb3RpZmljYXRpb24obmV4dE5vdGlmaWNhdGlvbih2YWx1ZSksIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fbmV4dCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24gKGVycikge1xuICAgICAgICBpZiAodGhpcy5pc1N0b3BwZWQpIHtcbiAgICAgICAgICAgIGhhbmRsZVN0b3BwZWROb3RpZmljYXRpb24oZXJyb3JOb3RpZmljYXRpb24oZXJyKSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9lcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTdG9wcGVkKSB7XG4gICAgICAgICAgICBoYW5kbGVTdG9wcGVkTm90aWZpY2F0aW9uKENPTVBMRVRFX05PVElGSUNBVElPTiwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzU3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9jb21wbGV0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS51bnN1YnNjcmliZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNsb3NlZCkge1xuICAgICAgICAgICAgdGhpcy5pc1N0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgICAgX3N1cGVyLnByb3RvdHlwZS51bnN1YnNjcmliZS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5kZXN0aW5hdGlvbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLl9uZXh0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZGVzdGluYXRpb24ubmV4dCh2YWx1ZSk7XG4gICAgfTtcbiAgICBTdWJzY3JpYmVyLnByb3RvdHlwZS5fZXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICAgICAgZmluYWxseSB7XG4gICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YnNjcmliZXIucHJvdG90eXBlLl9jb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMuZGVzdGluYXRpb24uY29tcGxldGUoKTtcbiAgICAgICAgfVxuICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIFN1YnNjcmliZXI7XG59KFN1YnNjcmlwdGlvbikpO1xuZXhwb3J0IHsgU3Vic2NyaWJlciB9O1xudmFyIFNhZmVTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoU2FmZVN1YnNjcmliZXIsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU2FmZVN1YnNjcmliZXIob2JzZXJ2ZXJPck5leHQsIGVycm9yLCBjb21wbGV0ZSkge1xuICAgICAgICB2YXIgX3RoaXMgPSBfc3VwZXIuY2FsbCh0aGlzKSB8fCB0aGlzO1xuICAgICAgICB2YXIgbmV4dDtcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24ob2JzZXJ2ZXJPck5leHQpKSB7XG4gICAgICAgICAgICBuZXh0ID0gb2JzZXJ2ZXJPck5leHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAob2JzZXJ2ZXJPck5leHQpIHtcbiAgICAgICAgICAgIChuZXh0ID0gb2JzZXJ2ZXJPck5leHQubmV4dCwgZXJyb3IgPSBvYnNlcnZlck9yTmV4dC5lcnJvciwgY29tcGxldGUgPSBvYnNlcnZlck9yTmV4dC5jb21wbGV0ZSk7XG4gICAgICAgICAgICB2YXIgY29udGV4dF8xO1xuICAgICAgICAgICAgaWYgKF90aGlzICYmIGNvbmZpZy51c2VEZXByZWNhdGVkTmV4dENvbnRleHQpIHtcbiAgICAgICAgICAgICAgICBjb250ZXh0XzEgPSBPYmplY3QuY3JlYXRlKG9ic2VydmVyT3JOZXh0KTtcbiAgICAgICAgICAgICAgICBjb250ZXh0XzEudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy51bnN1YnNjcmliZSgpOyB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29udGV4dF8xID0gb2JzZXJ2ZXJPck5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXh0ID0gbmV4dCA9PT0gbnVsbCB8fCBuZXh0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBuZXh0LmJpbmQoY29udGV4dF8xKTtcbiAgICAgICAgICAgIGVycm9yID0gZXJyb3IgPT09IG51bGwgfHwgZXJyb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVycm9yLmJpbmQoY29udGV4dF8xKTtcbiAgICAgICAgICAgIGNvbXBsZXRlID0gY29tcGxldGUgPT09IG51bGwgfHwgY29tcGxldGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNvbXBsZXRlLmJpbmQoY29udGV4dF8xKTtcbiAgICAgICAgfVxuICAgICAgICBfdGhpcy5kZXN0aW5hdGlvbiA9IHtcbiAgICAgICAgICAgIG5leHQ6IG5leHQgPyB3cmFwRm9yRXJyb3JIYW5kbGluZyhuZXh0LCBfdGhpcykgOiBub29wLFxuICAgICAgICAgICAgZXJyb3I6IHdyYXBGb3JFcnJvckhhbmRsaW5nKGVycm9yICE9PSBudWxsICYmIGVycm9yICE9PSB2b2lkIDAgPyBlcnJvciA6IGRlZmF1bHRFcnJvckhhbmRsZXIsIF90aGlzKSxcbiAgICAgICAgICAgIGNvbXBsZXRlOiBjb21wbGV0ZSA/IHdyYXBGb3JFcnJvckhhbmRsaW5nKGNvbXBsZXRlLCBfdGhpcykgOiBub29wLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIHJldHVybiBTYWZlU3Vic2NyaWJlcjtcbn0oU3Vic2NyaWJlcikpO1xuZXhwb3J0IHsgU2FmZVN1YnNjcmliZXIgfTtcbmZ1bmN0aW9uIHdyYXBGb3JFcnJvckhhbmRsaW5nKGhhbmRsZXIsIGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGFyZ3NbX2ldID0gYXJndW1lbnRzW19pXTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaGFuZGxlci5hcHBseSh2b2lkIDAsIF9fc3ByZWFkQXJyYXkoW10sIF9fcmVhZChhcmdzKSkpO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGlmIChjb25maWcudXNlRGVwcmVjYXRlZFN5bmNocm9ub3VzRXJyb3JIYW5kbGluZykge1xuICAgICAgICAgICAgICAgIGlmIChpbnN0YW5jZS5fc3luY0Vycm9ySGFja19pc1N1YnNjcmliaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLl9fc3luY0Vycm9yID0gZXJyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlcG9ydFVuaGFuZGxlZEVycm9yKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gZGVmYXVsdEVycm9ySGFuZGxlcihlcnIpIHtcbiAgICB0aHJvdyBlcnI7XG59XG5mdW5jdGlvbiBoYW5kbGVTdG9wcGVkTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbiwgc3Vic2NyaWJlcikge1xuICAgIHZhciBvblN0b3BwZWROb3RpZmljYXRpb24gPSBjb25maWcub25TdG9wcGVkTm90aWZpY2F0aW9uO1xuICAgIG9uU3RvcHBlZE5vdGlmaWNhdGlvbiAmJiB0aW1lb3V0UHJvdmlkZXIuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiBvblN0b3BwZWROb3RpZmljYXRpb24obm90aWZpY2F0aW9uLCBzdWJzY3JpYmVyKTsgfSk7XG59XG5leHBvcnQgdmFyIEVNUFRZX09CU0VSVkVSID0ge1xuICAgIGNsb3NlZDogdHJ1ZSxcbiAgICBuZXh0OiBub29wLFxuICAgIGVycm9yOiBkZWZhdWx0RXJyb3JIYW5kbGVyLFxuICAgIGNvbXBsZXRlOiBub29wLFxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVN1YnNjcmliZXIuanMubWFwIiwiaW1wb3J0IHsgX19yZWFkLCBfX3NwcmVhZEFycmF5LCBfX3ZhbHVlcyB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vdXRpbC9pc0Z1bmN0aW9uJztcbmltcG9ydCB7IFVuc3Vic2NyaXB0aW9uRXJyb3IgfSBmcm9tICcuL3V0aWwvVW5zdWJzY3JpcHRpb25FcnJvcic7XG5pbXBvcnQgeyBhcnJSZW1vdmUgfSBmcm9tICcuL3V0aWwvYXJyUmVtb3ZlJztcbnZhciBTdWJzY3JpcHRpb24gPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFN1YnNjcmlwdGlvbihpbml0aWFsVGVhcmRvd24pIHtcbiAgICAgICAgdGhpcy5pbml0aWFsVGVhcmRvd24gPSBpbml0aWFsVGVhcmRvd247XG4gICAgICAgIHRoaXMuY2xvc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3BhcmVudGFnZSA9IG51bGw7XG4gICAgICAgIHRoaXMuX3RlYXJkb3ducyA9IG51bGw7XG4gICAgfVxuICAgIFN1YnNjcmlwdGlvbi5wcm90b3R5cGUudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBlXzEsIF9hLCBlXzIsIF9iO1xuICAgICAgICB2YXIgZXJyb3JzO1xuICAgICAgICBpZiAoIXRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlZCA9IHRydWU7XG4gICAgICAgICAgICB2YXIgX3BhcmVudGFnZSA9IHRoaXMuX3BhcmVudGFnZTtcbiAgICAgICAgICAgIGlmIChfcGFyZW50YWdlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcGFyZW50YWdlID0gbnVsbDtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShfcGFyZW50YWdlKSkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgX3BhcmVudGFnZV8xID0gX192YWx1ZXMoX3BhcmVudGFnZSksIF9wYXJlbnRhZ2VfMV8xID0gX3BhcmVudGFnZV8xLm5leHQoKTsgIV9wYXJlbnRhZ2VfMV8xLmRvbmU7IF9wYXJlbnRhZ2VfMV8xID0gX3BhcmVudGFnZV8xLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJlbnRfMSA9IF9wYXJlbnRhZ2VfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudF8xLnJlbW92ZSh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZV8xXzEpIHsgZV8xID0geyBlcnJvcjogZV8xXzEgfTsgfVxuICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9wYXJlbnRhZ2VfMV8xICYmICFfcGFyZW50YWdlXzFfMS5kb25lICYmIChfYSA9IF9wYXJlbnRhZ2VfMS5yZXR1cm4pKSBfYS5jYWxsKF9wYXJlbnRhZ2VfMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF9wYXJlbnRhZ2UucmVtb3ZlKHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBpbml0aWFsVGVhcmRvd24gPSB0aGlzLmluaXRpYWxUZWFyZG93bjtcbiAgICAgICAgICAgIGlmIChpc0Z1bmN0aW9uKGluaXRpYWxUZWFyZG93bikpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBpbml0aWFsVGVhcmRvd24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JzID0gZSBpbnN0YW5jZW9mIFVuc3Vic2NyaXB0aW9uRXJyb3IgPyBlLmVycm9ycyA6IFtlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgX3RlYXJkb3ducyA9IHRoaXMuX3RlYXJkb3ducztcbiAgICAgICAgICAgIGlmIChfdGVhcmRvd25zKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdGVhcmRvd25zID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBfdGVhcmRvd25zXzEgPSBfX3ZhbHVlcyhfdGVhcmRvd25zKSwgX3RlYXJkb3duc18xXzEgPSBfdGVhcmRvd25zXzEubmV4dCgpOyAhX3RlYXJkb3duc18xXzEuZG9uZTsgX3RlYXJkb3duc18xXzEgPSBfdGVhcmRvd25zXzEubmV4dCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVhcmRvd25fMSA9IF90ZWFyZG93bnNfMV8xLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGVjVGVhcmRvd24odGVhcmRvd25fMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzID0gZXJyb3JzICE9PSBudWxsICYmIGVycm9ycyAhPT0gdm9pZCAwID8gZXJyb3JzIDogW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIFVuc3Vic2NyaXB0aW9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzID0gX19zcHJlYWRBcnJheShfX3NwcmVhZEFycmF5KFtdLCBfX3JlYWQoZXJyb3JzKSksIF9fcmVhZChlcnIuZXJyb3JzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMucHVzaChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZV8yXzEpIHsgZV8yID0geyBlcnJvcjogZV8yXzEgfTsgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF90ZWFyZG93bnNfMV8xICYmICFfdGVhcmRvd25zXzFfMS5kb25lICYmIChfYiA9IF90ZWFyZG93bnNfMS5yZXR1cm4pKSBfYi5jYWxsKF90ZWFyZG93bnNfMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmluYWxseSB7IGlmIChlXzIpIHRocm93IGVfMi5lcnJvcjsgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlcnJvcnMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVW5zdWJzY3JpcHRpb25FcnJvcihlcnJvcnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpcHRpb24ucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uICh0ZWFyZG93bikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmICh0ZWFyZG93biAmJiB0ZWFyZG93biAhPT0gdGhpcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgZXhlY1RlYXJkb3duKHRlYXJkb3duKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh0ZWFyZG93biBpbnN0YW5jZW9mIFN1YnNjcmlwdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGVhcmRvd24uY2xvc2VkIHx8IHRlYXJkb3duLl9oYXNQYXJlbnQodGhpcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0ZWFyZG93bi5fYWRkUGFyZW50KHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAodGhpcy5fdGVhcmRvd25zID0gKF9hID0gdGhpcy5fdGVhcmRvd25zKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBbXSkucHVzaCh0ZWFyZG93bik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFN1YnNjcmlwdGlvbi5wcm90b3R5cGUuX2hhc1BhcmVudCA9IGZ1bmN0aW9uIChwYXJlbnQpIHtcbiAgICAgICAgdmFyIF9wYXJlbnRhZ2UgPSB0aGlzLl9wYXJlbnRhZ2U7XG4gICAgICAgIHJldHVybiBfcGFyZW50YWdlID09PSBwYXJlbnQgfHwgKEFycmF5LmlzQXJyYXkoX3BhcmVudGFnZSkgJiYgX3BhcmVudGFnZS5pbmNsdWRlcyhwYXJlbnQpKTtcbiAgICB9O1xuICAgIFN1YnNjcmlwdGlvbi5wcm90b3R5cGUuX2FkZFBhcmVudCA9IGZ1bmN0aW9uIChwYXJlbnQpIHtcbiAgICAgICAgdmFyIF9wYXJlbnRhZ2UgPSB0aGlzLl9wYXJlbnRhZ2U7XG4gICAgICAgIHRoaXMuX3BhcmVudGFnZSA9IEFycmF5LmlzQXJyYXkoX3BhcmVudGFnZSkgPyAoX3BhcmVudGFnZS5wdXNoKHBhcmVudCksIF9wYXJlbnRhZ2UpIDogX3BhcmVudGFnZSA/IFtfcGFyZW50YWdlLCBwYXJlbnRdIDogcGFyZW50O1xuICAgIH07XG4gICAgU3Vic2NyaXB0aW9uLnByb3RvdHlwZS5fcmVtb3ZlUGFyZW50ID0gZnVuY3Rpb24gKHBhcmVudCkge1xuICAgICAgICB2YXIgX3BhcmVudGFnZSA9IHRoaXMuX3BhcmVudGFnZTtcbiAgICAgICAgaWYgKF9wYXJlbnRhZ2UgPT09IHBhcmVudCkge1xuICAgICAgICAgICAgdGhpcy5fcGFyZW50YWdlID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KF9wYXJlbnRhZ2UpKSB7XG4gICAgICAgICAgICBhcnJSZW1vdmUoX3BhcmVudGFnZSwgcGFyZW50KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgU3Vic2NyaXB0aW9uLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAodGVhcmRvd24pIHtcbiAgICAgICAgdmFyIF90ZWFyZG93bnMgPSB0aGlzLl90ZWFyZG93bnM7XG4gICAgICAgIF90ZWFyZG93bnMgJiYgYXJyUmVtb3ZlKF90ZWFyZG93bnMsIHRlYXJkb3duKTtcbiAgICAgICAgaWYgKHRlYXJkb3duIGluc3RhbmNlb2YgU3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICB0ZWFyZG93bi5fcmVtb3ZlUGFyZW50KHRoaXMpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBTdWJzY3JpcHRpb24uRU1QVFkgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZW1wdHkgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gICAgICAgIGVtcHR5LmNsb3NlZCA9IHRydWU7XG4gICAgICAgIHJldHVybiBlbXB0eTtcbiAgICB9KSgpO1xuICAgIHJldHVybiBTdWJzY3JpcHRpb247XG59KCkpO1xuZXhwb3J0IHsgU3Vic2NyaXB0aW9uIH07XG5leHBvcnQgdmFyIEVNUFRZX1NVQlNDUklQVElPTiA9IFN1YnNjcmlwdGlvbi5FTVBUWTtcbmV4cG9ydCBmdW5jdGlvbiBpc1N1YnNjcmlwdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiAodmFsdWUgaW5zdGFuY2VvZiBTdWJzY3JpcHRpb24gfHxcbiAgICAgICAgKHZhbHVlICYmICdjbG9zZWQnIGluIHZhbHVlICYmIGlzRnVuY3Rpb24odmFsdWUucmVtb3ZlKSAmJiBpc0Z1bmN0aW9uKHZhbHVlLmFkZCkgJiYgaXNGdW5jdGlvbih2YWx1ZS51bnN1YnNjcmliZSkpKTtcbn1cbmZ1bmN0aW9uIGV4ZWNUZWFyZG93bih0ZWFyZG93bikge1xuICAgIGlmIChpc0Z1bmN0aW9uKHRlYXJkb3duKSkge1xuICAgICAgICB0ZWFyZG93bigpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGVhcmRvd24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TdWJzY3JpcHRpb24uanMubWFwIiwiZXhwb3J0IHZhciBjb25maWcgPSB7XG4gICAgb25VbmhhbmRsZWRFcnJvcjogbnVsbCxcbiAgICBvblN0b3BwZWROb3RpZmljYXRpb246IG51bGwsXG4gICAgUHJvbWlzZTogdW5kZWZpbmVkLFxuICAgIHVzZURlcHJlY2F0ZWRTeW5jaHJvbm91c0Vycm9ySGFuZGxpbmc6IGZhbHNlLFxuICAgIHVzZURlcHJlY2F0ZWROZXh0Q29udGV4dDogZmFsc2UsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uZmlnLmpzLm1hcCIsImltcG9ydCB7IF9fYXN5bmNWYWx1ZXMsIF9fYXdhaXRlciwgX19nZW5lcmF0b3IsIF9fdmFsdWVzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBpc0FycmF5TGlrZSB9IGZyb20gJy4uL3V0aWwvaXNBcnJheUxpa2UnO1xuaW1wb3J0IHsgaXNQcm9taXNlIH0gZnJvbSAnLi4vdXRpbC9pc1Byb21pc2UnO1xuaW1wb3J0IHsgb2JzZXJ2YWJsZSBhcyBTeW1ib2xfb2JzZXJ2YWJsZSB9IGZyb20gJy4uL3N5bWJvbC9vYnNlcnZhYmxlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IHNjaGVkdWxlZCB9IGZyb20gJy4uL3NjaGVkdWxlZC9zY2hlZHVsZWQnO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4uL3V0aWwvaXNGdW5jdGlvbic7XG5pbXBvcnQgeyByZXBvcnRVbmhhbmRsZWRFcnJvciB9IGZyb20gJy4uL3V0aWwvcmVwb3J0VW5oYW5kbGVkRXJyb3InO1xuaW1wb3J0IHsgaXNJbnRlcm9wT2JzZXJ2YWJsZSB9IGZyb20gJy4uL3V0aWwvaXNJbnRlcm9wT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBpc0FzeW5jSXRlcmFibGUgfSBmcm9tICcuLi91dGlsL2lzQXN5bmNJdGVyYWJsZSc7XG5pbXBvcnQgeyBjcmVhdGVJbnZhbGlkT2JzZXJ2YWJsZVR5cGVFcnJvciB9IGZyb20gJy4uL3V0aWwvdGhyb3dVbm9ic2VydmFibGVFcnJvcic7XG5pbXBvcnQgeyBpc0l0ZXJhYmxlIH0gZnJvbSAnLi4vdXRpbC9pc0l0ZXJhYmxlJztcbmltcG9ydCB7IGlzUmVhZGFibGVTdHJlYW1MaWtlLCByZWFkYWJsZVN0cmVhbUxpa2VUb0FzeW5jR2VuZXJhdG9yIH0gZnJvbSAnLi4vdXRpbC9pc1JlYWRhYmxlU3RyZWFtTGlrZSc7XG5leHBvcnQgZnVuY3Rpb24gZnJvbShpbnB1dCwgc2NoZWR1bGVyKSB7XG4gICAgcmV0dXJuIHNjaGVkdWxlciA/IHNjaGVkdWxlZChpbnB1dCwgc2NoZWR1bGVyKSA6IGlubmVyRnJvbShpbnB1dCk7XG59XG5leHBvcnQgZnVuY3Rpb24gaW5uZXJGcm9tKGlucHV0KSB7XG4gICAgaWYgKGlucHV0IGluc3RhbmNlb2YgT2JzZXJ2YWJsZSkge1xuICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxuICAgIGlmIChpbnB1dCAhPSBudWxsKSB7XG4gICAgICAgIGlmIChpc0ludGVyb3BPYnNlcnZhYmxlKGlucHV0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZyb21JbnRlcm9wT2JzZXJ2YWJsZShpbnB1dCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzQXJyYXlMaWtlKGlucHV0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZyb21BcnJheUxpa2UoaW5wdXQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1Byb21pc2UoaW5wdXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZnJvbVByb21pc2UoaW5wdXQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0FzeW5jSXRlcmFibGUoaW5wdXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZnJvbUFzeW5jSXRlcmFibGUoaW5wdXQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0l0ZXJhYmxlKGlucHV0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZyb21JdGVyYWJsZShpbnB1dCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzUmVhZGFibGVTdHJlYW1MaWtlKGlucHV0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZyb21SZWFkYWJsZVN0cmVhbUxpa2UoaW5wdXQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRocm93IGNyZWF0ZUludmFsaWRPYnNlcnZhYmxlVHlwZUVycm9yKGlucHV0KTtcbn1cbmZ1bmN0aW9uIGZyb21JbnRlcm9wT2JzZXJ2YWJsZShvYmopIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIG9icyA9IG9ialtTeW1ib2xfb2JzZXJ2YWJsZV0oKTtcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24ob2JzLnN1YnNjcmliZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBvYnMuc3Vic2NyaWJlKHN1YnNjcmliZXIpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Byb3ZpZGVkIG9iamVjdCBkb2VzIG5vdCBjb3JyZWN0bHkgaW1wbGVtZW50IFN5bWJvbC5vYnNlcnZhYmxlJyk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZnJvbUFycmF5TGlrZShhcnJheSkge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aCAmJiAhc3Vic2NyaWJlci5jbG9zZWQ7IGkrKykge1xuICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KGFycmF5W2ldKTtcbiAgICAgICAgfVxuICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBmcm9tUHJvbWlzZShwcm9taXNlKSB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHByb21pc2VcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKCFzdWJzY3JpYmVyLmNsb3NlZCkge1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBmdW5jdGlvbiAoZXJyKSB7IHJldHVybiBzdWJzY3JpYmVyLmVycm9yKGVycik7IH0pXG4gICAgICAgICAgICAudGhlbihudWxsLCByZXBvcnRVbmhhbmRsZWRFcnJvcik7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBmcm9tSXRlcmFibGUoaXRlcmFibGUpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIGVfMSwgX2E7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpdGVyYWJsZV8xID0gX192YWx1ZXMoaXRlcmFibGUpLCBpdGVyYWJsZV8xXzEgPSBpdGVyYWJsZV8xLm5leHQoKTsgIWl0ZXJhYmxlXzFfMS5kb25lOyBpdGVyYWJsZV8xXzEgPSBpdGVyYWJsZV8xLm5leHQoKSkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGl0ZXJhYmxlXzFfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpYmVyLmNsb3NlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlXzFfMSkgeyBlXzEgPSB7IGVycm9yOiBlXzFfMSB9OyB9XG4gICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpZiAoaXRlcmFibGVfMV8xICYmICFpdGVyYWJsZV8xXzEuZG9uZSAmJiAoX2EgPSBpdGVyYWJsZV8xLnJldHVybikpIF9hLmNhbGwoaXRlcmFibGVfMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmaW5hbGx5IHsgaWYgKGVfMSkgdGhyb3cgZV8xLmVycm9yOyB9XG4gICAgICAgIH1cbiAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZnJvbUFzeW5jSXRlcmFibGUoYXN5bmNJdGVyYWJsZSkge1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShmdW5jdGlvbiAoc3Vic2NyaWJlcikge1xuICAgICAgICBwcm9jZXNzKGFzeW5jSXRlcmFibGUsIHN1YnNjcmliZXIpLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHsgcmV0dXJuIHN1YnNjcmliZXIuZXJyb3IoZXJyKTsgfSk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBmcm9tUmVhZGFibGVTdHJlYW1MaWtlKHJlYWRhYmxlU3RyZWFtKSB7XG4gICAgcmV0dXJuIGZyb21Bc3luY0l0ZXJhYmxlKHJlYWRhYmxlU3RyZWFtTGlrZVRvQXN5bmNHZW5lcmF0b3IocmVhZGFibGVTdHJlYW0pKTtcbn1cbmZ1bmN0aW9uIHByb2Nlc3MoYXN5bmNJdGVyYWJsZSwgc3Vic2NyaWJlcikge1xuICAgIHZhciBhc3luY0l0ZXJhYmxlXzEsIGFzeW5jSXRlcmFibGVfMV8xO1xuICAgIHZhciBlXzIsIF9hO1xuICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHZhbHVlLCBlXzJfMTtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgX2IudHJ5cy5wdXNoKFswLCA1LCA2LCAxMV0pO1xuICAgICAgICAgICAgICAgICAgICBhc3luY0l0ZXJhYmxlXzEgPSBfX2FzeW5jVmFsdWVzKGFzeW5jSXRlcmFibGUpO1xuICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzQsIGFzeW5jSXRlcmFibGVfMS5uZXh0KCldO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoYXN5bmNJdGVyYWJsZV8xXzEgPSBfYi5zZW50KCksICFhc3luY0l0ZXJhYmxlXzFfMS5kb25lKSkgcmV0dXJuIFszLCA0XTtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBhc3luY0l0ZXJhYmxlXzFfMS52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1YnNjcmliZXIuY2xvc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzJdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF9iLmxhYmVsID0gMztcbiAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMywgMV07XG4gICAgICAgICAgICAgICAgY2FzZSA0OiByZXR1cm4gWzMsIDExXTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgIGVfMl8xID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBlXzIgPSB7IGVycm9yOiBlXzJfMSB9O1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDExXTtcbiAgICAgICAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICAgICAgICAgIF9iLnRyeXMucHVzaChbNiwgLCA5LCAxMF0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIShhc3luY0l0ZXJhYmxlXzFfMSAmJiAhYXN5bmNJdGVyYWJsZV8xXzEuZG9uZSAmJiAoX2EgPSBhc3luY0l0ZXJhYmxlXzEucmV0dXJuKSkpIHJldHVybiBbMywgOF07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgX2EuY2FsbChhc3luY0l0ZXJhYmxlXzEpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICAgICAgICAgIF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSA4O1xuICAgICAgICAgICAgICAgIGNhc2UgODogcmV0dXJuIFszLCAxMF07XG4gICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgICAgICBpZiAoZV8yKSB0aHJvdyBlXzIuZXJyb3I7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbN107XG4gICAgICAgICAgICAgICAgY2FzZSAxMDogcmV0dXJuIFs3XTtcbiAgICAgICAgICAgICAgICBjYXNlIDExOlxuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMl07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZnJvbS5qcy5tYXAiLCJpbXBvcnQgeyBzY2hlZHVsZUFycmF5IH0gZnJvbSAnLi4vc2NoZWR1bGVkL3NjaGVkdWxlQXJyYXknO1xuaW1wb3J0IHsgZnJvbUFycmF5TGlrZSB9IGZyb20gJy4vZnJvbSc7XG5leHBvcnQgZnVuY3Rpb24gaW50ZXJuYWxGcm9tQXJyYXkoaW5wdXQsIHNjaGVkdWxlcikge1xuICAgIHJldHVybiBzY2hlZHVsZXIgPyBzY2hlZHVsZUFycmF5KGlucHV0LCBzY2hlZHVsZXIpIDogZnJvbUFycmF5TGlrZShpbnB1dCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mcm9tQXJyYXkuanMubWFwIiwiaW1wb3J0IHsgX19yZWFkIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBtZXJnZU1hcCB9IGZyb20gJy4uL29wZXJhdG9ycy9tZXJnZU1hcCc7XG5pbXBvcnQgeyBpc0FycmF5TGlrZSB9IGZyb20gJy4uL3V0aWwvaXNBcnJheUxpa2UnO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4uL3V0aWwvaXNGdW5jdGlvbic7XG5pbXBvcnQgeyBtYXBPbmVPck1hbnlBcmdzIH0gZnJvbSAnLi4vdXRpbC9tYXBPbmVPck1hbnlBcmdzJztcbmltcG9ydCB7IGludGVybmFsRnJvbUFycmF5IH0gZnJvbSAnLi9mcm9tQXJyYXknO1xudmFyIG5vZGVFdmVudEVtaXR0ZXJNZXRob2RzID0gWydhZGRMaXN0ZW5lcicsICdyZW1vdmVMaXN0ZW5lciddO1xudmFyIGV2ZW50VGFyZ2V0TWV0aG9kcyA9IFsnYWRkRXZlbnRMaXN0ZW5lcicsICdyZW1vdmVFdmVudExpc3RlbmVyJ107XG52YXIganF1ZXJ5TWV0aG9kcyA9IFsnb24nLCAnb2ZmJ107XG5leHBvcnQgZnVuY3Rpb24gZnJvbUV2ZW50KHRhcmdldCwgZXZlbnROYW1lLCBvcHRpb25zLCByZXN1bHRTZWxlY3Rvcikge1xuICAgIGlmIChpc0Z1bmN0aW9uKG9wdGlvbnMpKSB7XG4gICAgICAgIHJlc3VsdFNlbGVjdG9yID0gb3B0aW9ucztcbiAgICAgICAgb3B0aW9ucyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKHJlc3VsdFNlbGVjdG9yKSB7XG4gICAgICAgIHJldHVybiBmcm9tRXZlbnQodGFyZ2V0LCBldmVudE5hbWUsIG9wdGlvbnMpLnBpcGUobWFwT25lT3JNYW55QXJncyhyZXN1bHRTZWxlY3RvcikpO1xuICAgIH1cbiAgICB2YXIgX2EgPSBfX3JlYWQoaXNFdmVudFRhcmdldCh0YXJnZXQpXG4gICAgICAgID8gZXZlbnRUYXJnZXRNZXRob2RzLm1hcChmdW5jdGlvbiAobWV0aG9kTmFtZSkgeyByZXR1cm4gZnVuY3Rpb24gKGhhbmRsZXIpIHsgcmV0dXJuIHRhcmdldFttZXRob2ROYW1lXShldmVudE5hbWUsIGhhbmRsZXIsIG9wdGlvbnMpOyB9OyB9KVxuICAgICAgICA6XG4gICAgICAgICAgICBpc05vZGVTdHlsZUV2ZW50RW1pdHRlcih0YXJnZXQpXG4gICAgICAgICAgICAgICAgPyBub2RlRXZlbnRFbWl0dGVyTWV0aG9kcy5tYXAodG9Db21tb25IYW5kbGVyUmVnaXN0cnkodGFyZ2V0LCBldmVudE5hbWUpKVxuICAgICAgICAgICAgICAgIDogaXNKUXVlcnlTdHlsZUV2ZW50RW1pdHRlcih0YXJnZXQpXG4gICAgICAgICAgICAgICAgICAgID8ganF1ZXJ5TWV0aG9kcy5tYXAodG9Db21tb25IYW5kbGVyUmVnaXN0cnkodGFyZ2V0LCBldmVudE5hbWUpKVxuICAgICAgICAgICAgICAgICAgICA6IFtdLCAyKSwgYWRkID0gX2FbMF0sIHJlbW92ZSA9IF9hWzFdO1xuICAgIGlmICghYWRkKSB7XG4gICAgICAgIGlmIChpc0FycmF5TGlrZSh0YXJnZXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gbWVyZ2VNYXAoZnVuY3Rpb24gKHN1YlRhcmdldCkgeyByZXR1cm4gZnJvbUV2ZW50KHN1YlRhcmdldCwgZXZlbnROYW1lLCBvcHRpb25zKTsgfSkoaW50ZXJuYWxGcm9tQXJyYXkodGFyZ2V0KSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFhZGQpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBldmVudCB0YXJnZXQnKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBoYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJnc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHN1YnNjcmliZXIubmV4dCgxIDwgYXJncy5sZW5ndGggPyBhcmdzIDogYXJnc1swXSk7XG4gICAgICAgIH07XG4gICAgICAgIGFkZChoYW5kbGVyKTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlbW92ZShoYW5kbGVyKTsgfTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHRvQ29tbW9uSGFuZGxlclJlZ2lzdHJ5KHRhcmdldCwgZXZlbnROYW1lKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChtZXRob2ROYW1lKSB7IHJldHVybiBmdW5jdGlvbiAoaGFuZGxlcikgeyByZXR1cm4gdGFyZ2V0W21ldGhvZE5hbWVdKGV2ZW50TmFtZSwgaGFuZGxlcik7IH07IH07XG59XG5mdW5jdGlvbiBpc05vZGVTdHlsZUV2ZW50RW1pdHRlcih0YXJnZXQpIHtcbiAgICByZXR1cm4gaXNGdW5jdGlvbih0YXJnZXQuYWRkTGlzdGVuZXIpICYmIGlzRnVuY3Rpb24odGFyZ2V0LnJlbW92ZUxpc3RlbmVyKTtcbn1cbmZ1bmN0aW9uIGlzSlF1ZXJ5U3R5bGVFdmVudEVtaXR0ZXIodGFyZ2V0KSB7XG4gICAgcmV0dXJuIGlzRnVuY3Rpb24odGFyZ2V0Lm9uKSAmJiBpc0Z1bmN0aW9uKHRhcmdldC5vZmYpO1xufVxuZnVuY3Rpb24gaXNFdmVudFRhcmdldCh0YXJnZXQpIHtcbiAgICByZXR1cm4gaXNGdW5jdGlvbih0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcikgJiYgaXNGdW5jdGlvbih0YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcik7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mcm9tRXZlbnQuanMubWFwIiwiaW1wb3J0IHsgX19leHRlbmRzIH0gZnJvbSBcInRzbGliXCI7XG5pbXBvcnQgeyBTdWJzY3JpYmVyIH0gZnJvbSAnLi4vU3Vic2NyaWJlcic7XG52YXIgT3BlcmF0b3JTdWJzY3JpYmVyID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoT3BlcmF0b3JTdWJzY3JpYmVyLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIE9wZXJhdG9yU3Vic2NyaWJlcihkZXN0aW5hdGlvbiwgb25OZXh0LCBvbkNvbXBsZXRlLCBvbkVycm9yLCBvbkZpbmFsaXplKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIGRlc3RpbmF0aW9uKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5vbkZpbmFsaXplID0gb25GaW5hbGl6ZTtcbiAgICAgICAgX3RoaXMuX25leHQgPSBvbk5leHRcbiAgICAgICAgICAgID8gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgb25OZXh0KHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbi5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogX3N1cGVyLnByb3RvdHlwZS5fbmV4dDtcbiAgICAgICAgX3RoaXMuX2Vycm9yID0gb25FcnJvclxuICAgICAgICAgICAgPyBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgb25FcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiBfc3VwZXIucHJvdG90eXBlLl9lcnJvcjtcbiAgICAgICAgX3RoaXMuX2NvbXBsZXRlID0gb25Db21wbGV0ZVxuICAgICAgICAgICAgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgb25Db21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlc3RpbmF0aW9uLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiBfc3VwZXIucHJvdG90eXBlLl9jb21wbGV0ZTtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBPcGVyYXRvclN1YnNjcmliZXIucHJvdG90eXBlLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHZhciBjbG9zZWQgPSB0aGlzLmNsb3NlZDtcbiAgICAgICAgX3N1cGVyLnByb3RvdHlwZS51bnN1YnNjcmliZS5jYWxsKHRoaXMpO1xuICAgICAgICAhY2xvc2VkICYmICgoX2EgPSB0aGlzLm9uRmluYWxpemUpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHRoaXMpKTtcbiAgICB9O1xuICAgIHJldHVybiBPcGVyYXRvclN1YnNjcmliZXI7XG59KFN1YnNjcmliZXIpKTtcbmV4cG9ydCB7IE9wZXJhdG9yU3Vic2NyaWJlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9T3BlcmF0b3JTdWJzY3JpYmVyLmpzLm1hcCIsImltcG9ydCB7IG9wZXJhdGUgfSBmcm9tICcuLi91dGlsL2xpZnQnO1xuaW1wb3J0IHsgT3BlcmF0b3JTdWJzY3JpYmVyIH0gZnJvbSAnLi9PcGVyYXRvclN1YnNjcmliZXInO1xuZXhwb3J0IGZ1bmN0aW9uIG1hcChwcm9qZWN0LCB0aGlzQXJnKSB7XG4gICAgcmV0dXJuIG9wZXJhdGUoZnVuY3Rpb24gKHNvdXJjZSwgc3Vic2NyaWJlcikge1xuICAgICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgICBzb3VyY2Uuc3Vic2NyaWJlKG5ldyBPcGVyYXRvclN1YnNjcmliZXIoc3Vic2NyaWJlciwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQocHJvamVjdC5jYWxsKHRoaXNBcmcsIHZhbHVlLCBpbmRleCsrKSk7XG4gICAgICAgIH0pKTtcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1hcC5qcy5tYXAiLCJpbXBvcnQgeyBpbm5lckZyb20gfSBmcm9tICcuLi9vYnNlcnZhYmxlL2Zyb20nO1xuaW1wb3J0IHsgT3BlcmF0b3JTdWJzY3JpYmVyIH0gZnJvbSAnLi9PcGVyYXRvclN1YnNjcmliZXInO1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlSW50ZXJuYWxzKHNvdXJjZSwgc3Vic2NyaWJlciwgcHJvamVjdCwgY29uY3VycmVudCwgb25CZWZvcmVOZXh0LCBleHBhbmQsIGlubmVyU3ViU2NoZWR1bGVyLCBhZGRpdGlvbmFsVGVhcmRvd24pIHtcbiAgICB2YXIgYnVmZmVyID0gW107XG4gICAgdmFyIGFjdGl2ZSA9IDA7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgIHZhciBjaGVja0NvbXBsZXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaXNDb21wbGV0ZSAmJiAhYnVmZmVyLmxlbmd0aCAmJiAhYWN0aXZlKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmNvbXBsZXRlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciBvdXRlck5leHQgPSBmdW5jdGlvbiAodmFsdWUpIHsgcmV0dXJuIChhY3RpdmUgPCBjb25jdXJyZW50ID8gZG9Jbm5lclN1Yih2YWx1ZSkgOiBidWZmZXIucHVzaCh2YWx1ZSkpOyB9O1xuICAgIHZhciBkb0lubmVyU3ViID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIGV4cGFuZCAmJiBzdWJzY3JpYmVyLm5leHQodmFsdWUpO1xuICAgICAgICBhY3RpdmUrKztcbiAgICAgICAgdmFyIGlubmVyQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgaW5uZXJGcm9tKHByb2plY3QodmFsdWUsIGluZGV4KyspKS5zdWJzY3JpYmUobmV3IE9wZXJhdG9yU3Vic2NyaWJlcihzdWJzY3JpYmVyLCBmdW5jdGlvbiAoaW5uZXJWYWx1ZSkge1xuICAgICAgICAgICAgb25CZWZvcmVOZXh0ID09PSBudWxsIHx8IG9uQmVmb3JlTmV4dCA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25CZWZvcmVOZXh0KGlubmVyVmFsdWUpO1xuICAgICAgICAgICAgaWYgKGV4cGFuZCkge1xuICAgICAgICAgICAgICAgIG91dGVyTmV4dChpbm5lclZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dChpbm5lclZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaW5uZXJDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgIH0sIHVuZGVmaW5lZCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKGlubmVyQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmUtLTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYnVmZmVyZWRWYWx1ZSA9IGJ1ZmZlci5zaGlmdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJTdWJTY2hlZHVsZXIgPyBzdWJzY3JpYmVyLmFkZChpbm5lclN1YlNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAoKSB7IHJldHVybiBkb0lubmVyU3ViKGJ1ZmZlcmVkVmFsdWUpOyB9KSkgOiBkb0lubmVyU3ViKGJ1ZmZlcmVkVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoYnVmZmVyLmxlbmd0aCAmJiBhY3RpdmUgPCBjb25jdXJyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfbG9vcF8xKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2hlY2tDb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKTtcbiAgICB9O1xuICAgIHNvdXJjZS5zdWJzY3JpYmUobmV3IE9wZXJhdG9yU3Vic2NyaWJlcihzdWJzY3JpYmVyLCBvdXRlck5leHQsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaXNDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgIGNoZWNrQ29tcGxldGUoKTtcbiAgICB9KSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYWRkaXRpb25hbFRlYXJkb3duID09PSBudWxsIHx8IGFkZGl0aW9uYWxUZWFyZG93biA9PT0gdm9pZCAwID8gdm9pZCAwIDogYWRkaXRpb25hbFRlYXJkb3duKCk7XG4gICAgfTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1lcmdlSW50ZXJuYWxzLmpzLm1hcCIsImltcG9ydCB7IG1hcCB9IGZyb20gJy4vbWFwJztcbmltcG9ydCB7IGlubmVyRnJvbSB9IGZyb20gJy4uL29ic2VydmFibGUvZnJvbSc7XG5pbXBvcnQgeyBvcGVyYXRlIH0gZnJvbSAnLi4vdXRpbC9saWZ0JztcbmltcG9ydCB7IG1lcmdlSW50ZXJuYWxzIH0gZnJvbSAnLi9tZXJnZUludGVybmFscyc7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi4vdXRpbC9pc0Z1bmN0aW9uJztcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZU1hcChwcm9qZWN0LCByZXN1bHRTZWxlY3RvciwgY29uY3VycmVudCkge1xuICAgIGlmIChjb25jdXJyZW50ID09PSB2b2lkIDApIHsgY29uY3VycmVudCA9IEluZmluaXR5OyB9XG4gICAgaWYgKGlzRnVuY3Rpb24ocmVzdWx0U2VsZWN0b3IpKSB7XG4gICAgICAgIHJldHVybiBtZXJnZU1hcChmdW5jdGlvbiAoYSwgaSkgeyByZXR1cm4gbWFwKGZ1bmN0aW9uIChiLCBpaSkgeyByZXR1cm4gcmVzdWx0U2VsZWN0b3IoYSwgYiwgaSwgaWkpOyB9KShpbm5lckZyb20ocHJvamVjdChhLCBpKSkpOyB9LCBjb25jdXJyZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIHJlc3VsdFNlbGVjdG9yID09PSAnbnVtYmVyJykge1xuICAgICAgICBjb25jdXJyZW50ID0gcmVzdWx0U2VsZWN0b3I7XG4gICAgfVxuICAgIHJldHVybiBvcGVyYXRlKGZ1bmN0aW9uIChzb3VyY2UsIHN1YnNjcmliZXIpIHsgcmV0dXJuIG1lcmdlSW50ZXJuYWxzKHNvdXJjZSwgc3Vic2NyaWJlciwgcHJvamVjdCwgY29uY3VycmVudCk7IH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWVyZ2VNYXAuanMubWFwIiwiaW1wb3J0IHsgaW5uZXJGcm9tIH0gZnJvbSAnLi4vb2JzZXJ2YWJsZS9mcm9tJztcbmltcG9ydCB7IG9wZXJhdGUgfSBmcm9tICcuLi91dGlsL2xpZnQnO1xuaW1wb3J0IHsgT3BlcmF0b3JTdWJzY3JpYmVyIH0gZnJvbSAnLi9PcGVyYXRvclN1YnNjcmliZXInO1xuZXhwb3J0IGZ1bmN0aW9uIHN3aXRjaE1hcChwcm9qZWN0LCByZXN1bHRTZWxlY3Rvcikge1xuICAgIHJldHVybiBvcGVyYXRlKGZ1bmN0aW9uIChzb3VyY2UsIHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIGlubmVyU3Vic2NyaWJlciA9IG51bGw7XG4gICAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICAgIHZhciBpc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgIHZhciBjaGVja0NvbXBsZXRlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXNDb21wbGV0ZSAmJiAhaW5uZXJTdWJzY3JpYmVyICYmIHN1YnNjcmliZXIuY29tcGxldGUoKTsgfTtcbiAgICAgICAgc291cmNlLnN1YnNjcmliZShuZXcgT3BlcmF0b3JTdWJzY3JpYmVyKHN1YnNjcmliZXIsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaW5uZXJTdWJzY3JpYmVyID09PSBudWxsIHx8IGlubmVyU3Vic2NyaWJlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW5uZXJTdWJzY3JpYmVyLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgICAgICB2YXIgaW5uZXJJbmRleCA9IDA7XG4gICAgICAgICAgICB2YXIgb3V0ZXJJbmRleCA9IGluZGV4Kys7XG4gICAgICAgICAgICBpbm5lckZyb20ocHJvamVjdCh2YWx1ZSwgb3V0ZXJJbmRleCkpLnN1YnNjcmliZSgoaW5uZXJTdWJzY3JpYmVyID0gbmV3IE9wZXJhdG9yU3Vic2NyaWJlcihzdWJzY3JpYmVyLCBmdW5jdGlvbiAoaW5uZXJWYWx1ZSkgeyByZXR1cm4gc3Vic2NyaWJlci5uZXh0KHJlc3VsdFNlbGVjdG9yID8gcmVzdWx0U2VsZWN0b3IodmFsdWUsIGlubmVyVmFsdWUsIG91dGVySW5kZXgsIGlubmVySW5kZXgrKykgOiBpbm5lclZhbHVlKTsgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlubmVyU3Vic2NyaWJlciA9IG51bGw7XG4gICAgICAgICAgICAgICAgY2hlY2tDb21wbGV0ZSgpO1xuICAgICAgICAgICAgfSkpKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaXNDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgICAgICBjaGVja0NvbXBsZXRlKCk7XG4gICAgICAgIH0pKTtcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN3aXRjaE1hcC5qcy5tYXAiLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVBcnJheShpbnB1dCwgc2NoZWR1bGVyKSB7XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgcmV0dXJuIHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoaSA9PT0gaW5wdXQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KGlucHV0W2krK10pO1xuICAgICAgICAgICAgICAgIGlmICghc3Vic2NyaWJlci5jbG9zZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY2hlZHVsZUFycmF5LmpzLm1hcCIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICcuLi9PYnNlcnZhYmxlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJy4uL1N1YnNjcmlwdGlvbic7XG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVBc3luY0l0ZXJhYmxlKGlucHV0LCBzY2hlZHVsZXIpIHtcbiAgICBpZiAoIWlucHV0KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignSXRlcmFibGUgY2Fubm90IGJlIG51bGwnKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKGZ1bmN0aW9uIChzdWJzY3JpYmVyKSB7XG4gICAgICAgIHZhciBzdWIgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gICAgICAgIHN1Yi5hZGQoc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBpdGVyYXRvciA9IGlucHV0W1N5bWJvbC5hc3luY0l0ZXJhdG9yXSgpO1xuICAgICAgICAgICAgc3ViLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICAgICAgaXRlcmF0b3IubmV4dCgpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmRvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dChyZXN1bHQudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2NoZWR1bGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBzdWI7XG4gICAgfSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY2hlZHVsZUFzeW5jSXRlcmFibGUuanMubWFwIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgaXRlcmF0b3IgYXMgU3ltYm9sX2l0ZXJhdG9yIH0gZnJvbSAnLi4vc3ltYm9sL2l0ZXJhdG9yJztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuLi91dGlsL2lzRnVuY3Rpb24nO1xuaW1wb3J0IHsgY2F1Z2h0U2NoZWR1bGUgfSBmcm9tICcuLi91dGlsL2NhdWdodFNjaGVkdWxlJztcbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZUl0ZXJhYmxlKGlucHV0LCBzY2hlZHVsZXIpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIGl0ZXJhdG9yO1xuICAgICAgICBzdWJzY3JpYmVyLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaXRlcmF0b3IgPSBpbnB1dFtTeW1ib2xfaXRlcmF0b3JdKCk7XG4gICAgICAgICAgICBjYXVnaHRTY2hlZHVsZShzdWJzY3JpYmVyLCBzY2hlZHVsZXIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX2EgPSBpdGVyYXRvci5uZXh0KCksIHZhbHVlID0gX2EudmFsdWUsIGRvbmUgPSBfYS5kb25lO1xuICAgICAgICAgICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dCh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXNGdW5jdGlvbihpdGVyYXRvciA9PT0gbnVsbCB8fCBpdGVyYXRvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogaXRlcmF0b3IucmV0dXJuKSAmJiBpdGVyYXRvci5yZXR1cm4oKTsgfTtcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNjaGVkdWxlSXRlcmFibGUuanMubWFwIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJy4uL09ic2VydmFibGUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAnLi4vU3Vic2NyaXB0aW9uJztcbmltcG9ydCB7IG9ic2VydmFibGUgYXMgU3ltYm9sX29ic2VydmFibGUgfSBmcm9tICcuLi9zeW1ib2wvb2JzZXJ2YWJsZSc7XG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVPYnNlcnZhYmxlKGlucHV0LCBzY2hlZHVsZXIpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgdmFyIHN1YiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgICAgICAgc3ViLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG9ic2VydmFibGUgPSBpbnB1dFtTeW1ib2xfb2JzZXJ2YWJsZV0oKTtcbiAgICAgICAgICAgIHN1Yi5hZGQob2JzZXJ2YWJsZS5zdWJzY3JpYmUoe1xuICAgICAgICAgICAgICAgIG5leHQ6IGZ1bmN0aW9uICh2YWx1ZSkgeyBzdWIuYWRkKHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAoKSB7IHJldHVybiBzdWJzY3JpYmVyLm5leHQodmFsdWUpOyB9KSk7IH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChlcnIpIHsgc3ViLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkgeyByZXR1cm4gc3Vic2NyaWJlci5lcnJvcihlcnIpOyB9KSk7IH0sXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHsgc3ViLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkgeyByZXR1cm4gc3Vic2NyaWJlci5jb21wbGV0ZSgpOyB9KSk7IH0sXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgcmV0dXJuIHN1YjtcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNjaGVkdWxlT2JzZXJ2YWJsZS5qcy5tYXAiLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnLi4vT2JzZXJ2YWJsZSc7XG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVQcm9taXNlKGlucHV0LCBzY2hlZHVsZXIpIHtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoZnVuY3Rpb24gKHN1YnNjcmliZXIpIHtcbiAgICAgICAgcmV0dXJuIHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5wdXQudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLm5leHQodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBzdWJzY3JpYmVyLmFkZChzY2hlZHVsZXIuc2NoZWR1bGUoZnVuY3Rpb24gKCkgeyByZXR1cm4gc3Vic2NyaWJlci5jb21wbGV0ZSgpOyB9KSk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgICAgICAgICAgIHN1YnNjcmliZXIuYWRkKHNjaGVkdWxlci5zY2hlZHVsZShmdW5jdGlvbiAoKSB7IHJldHVybiBzdWJzY3JpYmVyLmVycm9yKGVycik7IH0pKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNjaGVkdWxlUHJvbWlzZS5qcy5tYXAiLCJpbXBvcnQgeyBzY2hlZHVsZUFzeW5jSXRlcmFibGUgfSBmcm9tICcuL3NjaGVkdWxlQXN5bmNJdGVyYWJsZSc7XG5pbXBvcnQgeyByZWFkYWJsZVN0cmVhbUxpa2VUb0FzeW5jR2VuZXJhdG9yIH0gZnJvbSAnLi4vdXRpbC9pc1JlYWRhYmxlU3RyZWFtTGlrZSc7XG5leHBvcnQgZnVuY3Rpb24gc2NoZWR1bGVSZWFkYWJsZVN0cmVhbUxpa2UoaW5wdXQsIHNjaGVkdWxlcikge1xuICAgIHJldHVybiBzY2hlZHVsZUFzeW5jSXRlcmFibGUocmVhZGFibGVTdHJlYW1MaWtlVG9Bc3luY0dlbmVyYXRvcihpbnB1dCksIHNjaGVkdWxlcik7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY2hlZHVsZVJlYWRhYmxlU3RyZWFtTGlrZS5qcy5tYXAiLCJpbXBvcnQgeyBzY2hlZHVsZU9ic2VydmFibGUgfSBmcm9tICcuL3NjaGVkdWxlT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBzY2hlZHVsZVByb21pc2UgfSBmcm9tICcuL3NjaGVkdWxlUHJvbWlzZSc7XG5pbXBvcnQgeyBzY2hlZHVsZUFycmF5IH0gZnJvbSAnLi9zY2hlZHVsZUFycmF5JztcbmltcG9ydCB7IHNjaGVkdWxlSXRlcmFibGUgfSBmcm9tICcuL3NjaGVkdWxlSXRlcmFibGUnO1xuaW1wb3J0IHsgc2NoZWR1bGVBc3luY0l0ZXJhYmxlIH0gZnJvbSAnLi9zY2hlZHVsZUFzeW5jSXRlcmFibGUnO1xuaW1wb3J0IHsgaXNJbnRlcm9wT2JzZXJ2YWJsZSB9IGZyb20gJy4uL3V0aWwvaXNJbnRlcm9wT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBpc1Byb21pc2UgfSBmcm9tICcuLi91dGlsL2lzUHJvbWlzZSc7XG5pbXBvcnQgeyBpc0FycmF5TGlrZSB9IGZyb20gJy4uL3V0aWwvaXNBcnJheUxpa2UnO1xuaW1wb3J0IHsgaXNJdGVyYWJsZSB9IGZyb20gJy4uL3V0aWwvaXNJdGVyYWJsZSc7XG5pbXBvcnQgeyBpc0FzeW5jSXRlcmFibGUgfSBmcm9tICcuLi91dGlsL2lzQXN5bmNJdGVyYWJsZSc7XG5pbXBvcnQgeyBjcmVhdGVJbnZhbGlkT2JzZXJ2YWJsZVR5cGVFcnJvciB9IGZyb20gJy4uL3V0aWwvdGhyb3dVbm9ic2VydmFibGVFcnJvcic7XG5pbXBvcnQgeyBpc1JlYWRhYmxlU3RyZWFtTGlrZSB9IGZyb20gJy4uL3V0aWwvaXNSZWFkYWJsZVN0cmVhbUxpa2UnO1xuaW1wb3J0IHsgc2NoZWR1bGVSZWFkYWJsZVN0cmVhbUxpa2UgfSBmcm9tICcuL3NjaGVkdWxlUmVhZGFibGVTdHJlYW1MaWtlJztcbmV4cG9ydCBmdW5jdGlvbiBzY2hlZHVsZWQoaW5wdXQsIHNjaGVkdWxlcikge1xuICAgIGlmIChpbnB1dCAhPSBudWxsKSB7XG4gICAgICAgIGlmIChpc0ludGVyb3BPYnNlcnZhYmxlKGlucHV0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHNjaGVkdWxlT2JzZXJ2YWJsZShpbnB1dCwgc2NoZWR1bGVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNBcnJheUxpa2UoaW5wdXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gc2NoZWR1bGVBcnJheShpbnB1dCwgc2NoZWR1bGVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNQcm9taXNlKGlucHV0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHNjaGVkdWxlUHJvbWlzZShpbnB1dCwgc2NoZWR1bGVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNBc3luY0l0ZXJhYmxlKGlucHV0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHNjaGVkdWxlQXN5bmNJdGVyYWJsZShpbnB1dCwgc2NoZWR1bGVyKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNJdGVyYWJsZShpbnB1dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBzY2hlZHVsZUl0ZXJhYmxlKGlucHV0LCBzY2hlZHVsZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc1JlYWRhYmxlU3RyZWFtTGlrZShpbnB1dCkpIHtcbiAgICAgICAgICAgIHJldHVybiBzY2hlZHVsZVJlYWRhYmxlU3RyZWFtTGlrZShpbnB1dCwgc2NoZWR1bGVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aHJvdyBjcmVhdGVJbnZhbGlkT2JzZXJ2YWJsZVR5cGVFcnJvcihpbnB1dCk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY2hlZHVsZWQuanMubWFwIiwiaW1wb3J0IHsgX19yZWFkLCBfX3NwcmVhZEFycmF5IH0gZnJvbSBcInRzbGliXCI7XG5leHBvcnQgdmFyIHRpbWVvdXRQcm92aWRlciA9IHtcbiAgICBzZXRUaW1lb3V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRlbGVnYXRlID0gdGltZW91dFByb3ZpZGVyLmRlbGVnYXRlO1xuICAgICAgICByZXR1cm4gKChkZWxlZ2F0ZSA9PT0gbnVsbCB8fCBkZWxlZ2F0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGVsZWdhdGUuc2V0VGltZW91dCkgfHwgc2V0VGltZW91dCkuYXBwbHkodm9pZCAwLCBfX3NwcmVhZEFycmF5KFtdLCBfX3JlYWQoYXJncykpKTtcbiAgICB9LFxuICAgIGNsZWFyVGltZW91dDogZnVuY3Rpb24gKGhhbmRsZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSB0aW1lb3V0UHJvdmlkZXIuZGVsZWdhdGU7XG4gICAgICAgIHJldHVybiAoKGRlbGVnYXRlID09PSBudWxsIHx8IGRlbGVnYXRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkZWxlZ2F0ZS5jbGVhclRpbWVvdXQpIHx8IGNsZWFyVGltZW91dCkoaGFuZGxlKTtcbiAgICB9LFxuICAgIGRlbGVnYXRlOiB1bmRlZmluZWQsXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGltZW91dFByb3ZpZGVyLmpzLm1hcCIsImV4cG9ydCBmdW5jdGlvbiBnZXRTeW1ib2xJdGVyYXRvcigpIHtcbiAgICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ2Z1bmN0aW9uJyB8fCAhU3ltYm9sLml0ZXJhdG9yKSB7XG4gICAgICAgIHJldHVybiAnQEBpdGVyYXRvcic7XG4gICAgfVxuICAgIHJldHVybiBTeW1ib2wuaXRlcmF0b3I7XG59XG5leHBvcnQgdmFyIGl0ZXJhdG9yID0gZ2V0U3ltYm9sSXRlcmF0b3IoKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWl0ZXJhdG9yLmpzLm1hcCIsImV4cG9ydCB2YXIgb2JzZXJ2YWJsZSA9IChmdW5jdGlvbiAoKSB7IHJldHVybiAodHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wub2JzZXJ2YWJsZSkgfHwgJ0BAb2JzZXJ2YWJsZSc7IH0pKCk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1vYnNlcnZhYmxlLmpzLm1hcCIsImltcG9ydCB7IGNyZWF0ZUVycm9yQ2xhc3MgfSBmcm9tICcuL2NyZWF0ZUVycm9yQ2xhc3MnO1xuZXhwb3J0IHZhciBVbnN1YnNjcmlwdGlvbkVycm9yID0gY3JlYXRlRXJyb3JDbGFzcyhmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIFVuc3Vic2NyaXB0aW9uRXJyb3JJbXBsKGVycm9ycykge1xuICAgICAgICBfc3VwZXIodGhpcyk7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IGVycm9yc1xuICAgICAgICAgICAgPyBlcnJvcnMubGVuZ3RoICsgXCIgZXJyb3JzIG9jY3VycmVkIGR1cmluZyB1bnN1YnNjcmlwdGlvbjpcXG5cIiArIGVycm9ycy5tYXAoZnVuY3Rpb24gKGVyciwgaSkgeyByZXR1cm4gaSArIDEgKyBcIikgXCIgKyBlcnIudG9TdHJpbmcoKTsgfSkuam9pbignXFxuICAnKVxuICAgICAgICAgICAgOiAnJztcbiAgICAgICAgdGhpcy5uYW1lID0gJ1Vuc3Vic2NyaXB0aW9uRXJyb3InO1xuICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9ycztcbiAgICB9O1xufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1VbnN1YnNjcmlwdGlvbkVycm9yLmpzLm1hcCIsImV4cG9ydCBmdW5jdGlvbiBhcnJSZW1vdmUoYXJyLCBpdGVtKSB7XG4gICAgaWYgKGFycikge1xuICAgICAgICB2YXIgaW5kZXggPSBhcnIuaW5kZXhPZihpdGVtKTtcbiAgICAgICAgMCA8PSBpbmRleCAmJiBhcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcnJSZW1vdmUuanMubWFwIiwiZXhwb3J0IGZ1bmN0aW9uIGNhdWdodFNjaGVkdWxlKHN1YnNjcmliZXIsIHNjaGVkdWxlciwgZXhlY3V0ZSwgZGVsYXkpIHtcbiAgICBpZiAoZGVsYXkgPT09IHZvaWQgMCkgeyBkZWxheSA9IDA7IH1cbiAgICB2YXIgc3Vic2NyaXB0aW9uID0gc2NoZWR1bGVyLnNjaGVkdWxlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGV4ZWN1dGUuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICB9LCBkZWxheSk7XG4gICAgc3Vic2NyaWJlci5hZGQoc3Vic2NyaXB0aW9uKTtcbiAgICByZXR1cm4gc3Vic2NyaXB0aW9uO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2F1Z2h0U2NoZWR1bGUuanMubWFwIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVycm9yQ2xhc3MoY3JlYXRlSW1wbCkge1xuICAgIHZhciBfc3VwZXIgPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgICAgRXJyb3IuY2FsbChpbnN0YW5jZSk7XG4gICAgICAgIGluc3RhbmNlLnN0YWNrID0gbmV3IEVycm9yKCkuc3RhY2s7XG4gICAgfTtcbiAgICB2YXIgY3RvckZ1bmMgPSBjcmVhdGVJbXBsKF9zdXBlcik7XG4gICAgY3RvckZ1bmMucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuICAgIGN0b3JGdW5jLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGN0b3JGdW5jO1xuICAgIHJldHVybiBjdG9yRnVuYztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNyZWF0ZUVycm9yQ2xhc3MuanMubWFwIiwiZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5KHgpIHtcbiAgICByZXR1cm4geDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlkZW50aXR5LmpzLm1hcCIsImV4cG9ydCB2YXIgaXNBcnJheUxpa2UgPSAoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHggJiYgdHlwZW9mIHgubGVuZ3RoID09PSAnbnVtYmVyJyAmJiB0eXBlb2YgeCAhPT0gJ2Z1bmN0aW9uJzsgfSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc0FycmF5TGlrZS5qcy5tYXAiLCJpbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi9pc0Z1bmN0aW9uJztcbmV4cG9ydCBmdW5jdGlvbiBpc0FzeW5jSXRlcmFibGUob2JqKSB7XG4gICAgcmV0dXJuIFN5bWJvbC5hc3luY0l0ZXJhdG9yICYmIGlzRnVuY3Rpb24ob2JqID09PSBudWxsIHx8IG9iaiA9PT0gdm9pZCAwID8gdm9pZCAwIDogb2JqW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc0FzeW5jSXRlcmFibGUuanMubWFwIiwiZXhwb3J0IGZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNGdW5jdGlvbi5qcy5tYXAiLCJpbXBvcnQgeyBvYnNlcnZhYmxlIGFzIFN5bWJvbF9vYnNlcnZhYmxlIH0gZnJvbSAnLi4vc3ltYm9sL29ic2VydmFibGUnO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vaXNGdW5jdGlvbic7XG5leHBvcnQgZnVuY3Rpb24gaXNJbnRlcm9wT2JzZXJ2YWJsZShpbnB1dCkge1xuICAgIHJldHVybiBpc0Z1bmN0aW9uKGlucHV0W1N5bWJvbF9vYnNlcnZhYmxlXSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pc0ludGVyb3BPYnNlcnZhYmxlLmpzLm1hcCIsImltcG9ydCB7IGl0ZXJhdG9yIGFzIFN5bWJvbF9pdGVyYXRvciB9IGZyb20gJy4uL3N5bWJvbC9pdGVyYXRvcic7XG5pbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSAnLi9pc0Z1bmN0aW9uJztcbmV4cG9ydCBmdW5jdGlvbiBpc0l0ZXJhYmxlKGlucHV0KSB7XG4gICAgcmV0dXJuIGlzRnVuY3Rpb24oaW5wdXQgPT09IG51bGwgfHwgaW5wdXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGlucHV0W1N5bWJvbF9pdGVyYXRvcl0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNJdGVyYWJsZS5qcy5tYXAiLCJpbXBvcnQgeyBpc0Z1bmN0aW9uIH0gZnJvbSBcIi4vaXNGdW5jdGlvblwiO1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvbWlzZSh2YWx1ZSkge1xuICAgIHJldHVybiBpc0Z1bmN0aW9uKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB2b2lkIDAgPyB2b2lkIDAgOiB2YWx1ZS50aGVuKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzUHJvbWlzZS5qcy5tYXAiLCJpbXBvcnQgeyBfX2FzeW5jR2VuZXJhdG9yLCBfX2F3YWl0LCBfX2dlbmVyYXRvciB9IGZyb20gXCJ0c2xpYlwiO1xuaW1wb3J0IHsgaXNGdW5jdGlvbiB9IGZyb20gJy4vaXNGdW5jdGlvbic7XG5leHBvcnQgZnVuY3Rpb24gcmVhZGFibGVTdHJlYW1MaWtlVG9Bc3luY0dlbmVyYXRvcihyZWFkYWJsZVN0cmVhbSkge1xuICAgIHJldHVybiBfX2FzeW5jR2VuZXJhdG9yKHRoaXMsIGFyZ3VtZW50cywgZnVuY3Rpb24gcmVhZGFibGVTdHJlYW1MaWtlVG9Bc3luY0dlbmVyYXRvcl8xKCkge1xuICAgICAgICB2YXIgcmVhZGVyLCBfYSwgdmFsdWUsIGRvbmU7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIHJlYWRlciA9IHJlYWRhYmxlU3RyZWFtLmdldFJlYWRlcigpO1xuICAgICAgICAgICAgICAgICAgICBfYi5sYWJlbCA9IDE7XG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBfYi50cnlzLnB1c2goWzEsICwgOSwgMTBdKTtcbiAgICAgICAgICAgICAgICAgICAgX2IubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0cnVlKSByZXR1cm4gWzMsIDhdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQsIF9fYXdhaXQocmVhZGVyLnJlYWQoKSldO1xuICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgX2EgPSBfYi5zZW50KCksIHZhbHVlID0gX2EudmFsdWUsIGRvbmUgPSBfYS5kb25lO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWRvbmUpIHJldHVybiBbMywgNV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCwgX19hd2FpdCh2b2lkIDApXTtcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiwgX2Iuc2VudCgpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IHJldHVybiBbNCwgX19hd2FpdCh2YWx1ZSldO1xuICAgICAgICAgICAgICAgIGNhc2UgNjogcmV0dXJuIFs0LCBfYi5zZW50KCldO1xuICAgICAgICAgICAgICAgIGNhc2UgNzpcbiAgICAgICAgICAgICAgICAgICAgX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMsIDJdO1xuICAgICAgICAgICAgICAgIGNhc2UgODogcmV0dXJuIFszLCAxMF07XG4gICAgICAgICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgICAgICAgICByZWFkZXIucmVsZWFzZUxvY2soKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs3XTtcbiAgICAgICAgICAgICAgICBjYXNlIDEwOiByZXR1cm4gWzJdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1JlYWRhYmxlU3RyZWFtTGlrZShvYmopIHtcbiAgICByZXR1cm4gaXNGdW5jdGlvbihvYmogPT09IG51bGwgfHwgb2JqID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvYmouZ2V0UmVhZGVyKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWlzUmVhZGFibGVTdHJlYW1MaWtlLmpzLm1hcCIsImltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL2lzRnVuY3Rpb24nO1xuZXhwb3J0IGZ1bmN0aW9uIGhhc0xpZnQoc291cmNlKSB7XG4gICAgcmV0dXJuIGlzRnVuY3Rpb24oc291cmNlID09PSBudWxsIHx8IHNvdXJjZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogc291cmNlLmxpZnQpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG9wZXJhdGUoaW5pdCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICAgIGlmIChoYXNMaWZ0KHNvdXJjZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBzb3VyY2UubGlmdChmdW5jdGlvbiAobGlmdGVkU291cmNlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluaXQobGlmdGVkU291cmNlLCB0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVW5hYmxlIHRvIGxpZnQgdW5rbm93biBPYnNlcnZhYmxlIHR5cGUnKTtcbiAgICB9O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGlmdC5qcy5tYXAiLCJpbXBvcnQgeyBfX3JlYWQsIF9fc3ByZWFkQXJyYXkgfSBmcm9tIFwidHNsaWJcIjtcbmltcG9ydCB7IG1hcCB9IGZyb20gXCIuLi9vcGVyYXRvcnMvbWFwXCI7XG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG5mdW5jdGlvbiBjYWxsT3JBcHBseShmbiwgYXJncykge1xuICAgIHJldHVybiBpc0FycmF5KGFyZ3MpID8gZm4uYXBwbHkodm9pZCAwLCBfX3NwcmVhZEFycmF5KFtdLCBfX3JlYWQoYXJncykpKSA6IGZuKGFyZ3MpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG1hcE9uZU9yTWFueUFyZ3MoZm4pIHtcbiAgICByZXR1cm4gbWFwKGZ1bmN0aW9uIChhcmdzKSB7IHJldHVybiBjYWxsT3JBcHBseShmbiwgYXJncyk7IH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWFwT25lT3JNYW55QXJncy5qcy5tYXAiLCJleHBvcnQgZnVuY3Rpb24gbm9vcCgpIHsgfVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9vcC5qcy5tYXAiLCJpbXBvcnQgeyBpZGVudGl0eSB9IGZyb20gJy4vaWRlbnRpdHknO1xuZXhwb3J0IGZ1bmN0aW9uIHBpcGUoKSB7XG4gICAgdmFyIGZucyA9IFtdO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBhcmd1bWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIGZuc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICByZXR1cm4gcGlwZUZyb21BcnJheShmbnMpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBpcGVGcm9tQXJyYXkoZm5zKSB7XG4gICAgaWYgKGZucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGlkZW50aXR5O1xuICAgIH1cbiAgICBpZiAoZm5zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICByZXR1cm4gZm5zWzBdO1xuICAgIH1cbiAgICByZXR1cm4gZnVuY3Rpb24gcGlwZWQoaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIGZucy5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGZuKSB7IHJldHVybiBmbihwcmV2KTsgfSwgaW5wdXQpO1xuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1waXBlLmpzLm1hcCIsImltcG9ydCB7IGNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZyc7XG5pbXBvcnQgeyB0aW1lb3V0UHJvdmlkZXIgfSBmcm9tICcuLi9zY2hlZHVsZXIvdGltZW91dFByb3ZpZGVyJztcbmV4cG9ydCBmdW5jdGlvbiByZXBvcnRVbmhhbmRsZWRFcnJvcihlcnIpIHtcbiAgICB0aW1lb3V0UHJvdmlkZXIuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBvblVuaGFuZGxlZEVycm9yID0gY29uZmlnLm9uVW5oYW5kbGVkRXJyb3I7XG4gICAgICAgIGlmIChvblVuaGFuZGxlZEVycm9yKSB7XG4gICAgICAgICAgICBvblVuaGFuZGxlZEVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcG9ydFVuaGFuZGxlZEVycm9yLmpzLm1hcCIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVJbnZhbGlkT2JzZXJ2YWJsZVR5cGVFcnJvcihpbnB1dCkge1xuICAgIHJldHVybiBuZXcgVHlwZUVycm9yKFwiWW91IHByb3ZpZGVkIFwiICsgKGlucHV0ICE9PSBudWxsICYmIHR5cGVvZiBpbnB1dCA9PT0gJ29iamVjdCcgPyAnYW4gaW52YWxpZCBvYmplY3QnIDogXCInXCIgKyBpbnB1dCArIFwiJ1wiKSArIFwiIHdoZXJlIGEgc3RyZWFtIHdhcyBleHBlY3RlZC4gWW91IGNhbiBwcm92aWRlIGFuIE9ic2VydmFibGUsIFByb21pc2UsIFJlYWRhYmxlU3RyZWFtLCBBcnJheSwgQXN5bmNJdGVyYWJsZSwgb3IgSXRlcmFibGUuXCIpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGhyb3dVbm9ic2VydmFibGVFcnJvci5qcy5tYXAiLCJpbXBvcnQgeyBNYW5hZ2VyTW9kZWwgfSBmcm9tICcuL21vZGVsJztcclxuaW1wb3J0IHsgTWFuYWdlclZpZXcgfSBmcm9tICcuL3ZpZXcnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hbmFnZXIge1xyXG4gICAgcHVibGljIG1vZGVsOiBNYW5hZ2VyTW9kZWw7XHJcbiAgICBwdWJsaWMgdmlldzogTWFuYWdlclZpZXc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbCA9IG5ldyBNYW5hZ2VyTW9kZWwoKTtcclxuICAgICAgICB0aGlzLnZpZXcgPSBuZXcgTWFuYWdlclZpZXcoKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KHBhcmVudDogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLm1vZGVsLmxvYWRMb2dnZWRJblVzZXIoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy52aWV3LmRyYXcocGFyZW50LCB0aGlzLm1vZGVsKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEYXRhYmFzZUFQSSB9IGZyb20gJy4uL3V0aWxzL2RhdGFiYXNlQVBJJztcclxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4uL3Byb2plY3QvY29udHJvbGxlcic7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi91c2VyL2NvbnRyb2xsZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1hbmFnZXJNb2RlbCB7XHJcbiAgICBwcml2YXRlIGN1cnJlbnRVc2VyOiBVc2VyO1xyXG5cclxuICAgIGFzeW5jIGxvYWRMb2dnZWRJblVzZXIoKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFVzZXJJZCA9IHRoaXMuZ2V0VXNlckNvb2tpZSgpO1xyXG4gICAgICAgIGlmIChjdXJyZW50VXNlcklkID09PSAtMSkgdGhpcy5jdXJyZW50VXNlciA9IG51bGw7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSBhd2FpdCBEYXRhYmFzZUFQSS5nZXRVc2VyQnlJZChcclxuICAgICAgICAgICAgICAgIE51bWJlcihjdXJyZW50VXNlcklkKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRDdXJyZW50VXNlcigpOiBVc2VyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jdXJyZW50VXNlcjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRVc2VyQ29va2llKGlkOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50VXNlciA9PT0gbnVsbCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB2YXIgZCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgZC5zZXRUaW1lKGQuZ2V0VGltZSgpICsgNyAqIDI0ICogNjAgKiA2MCAqIDEwMDApOyAvLyBleHBpcmVzIGluIDcgZGF5c1xyXG4gICAgICAgIHZhciBleHBpcmVzID0gJ2V4cGlyZXM9JyArIGQudG9VVENTdHJpbmcoKTtcclxuICAgICAgICBkb2N1bWVudC5jb29raWUgPSBgdXNlcklkPSR7aWR9OyBleHBpcmVzPSR7ZXhwaXJlc307IHBhdGg9LztgO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHJldHVybnMgdXNlcidzIGlkIHN0b3JlZCBpbiBjb29raWVzIChvciAtMSBpZiB0aGVyZSdzIG5vIGNvb2tpZSlcclxuICAgICAqL1xyXG4gICAgZ2V0VXNlckNvb2tpZSgpOiBudW1iZXIge1xyXG4gICAgICAgIHZhciBuYW1lID0gJ3VzZXJJZD0nO1xyXG4gICAgICAgIHZhciBkZWNvZGVkQ29va2llID0gZGVjb2RlVVJJQ29tcG9uZW50KGRvY3VtZW50LmNvb2tpZSk7XHJcbiAgICAgICAgdmFyIGNvb2tpZUFycmF5ID0gZGVjb2RlZENvb2tpZS5zcGxpdCgnOycpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29va2llQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFyIGNvb2tpZSA9IGNvb2tpZUFycmF5W2ldO1xyXG4gICAgICAgICAgICB3aGlsZSAoY29va2llLmNoYXJBdCgwKSA9PSAnICcpIHtcclxuICAgICAgICAgICAgICAgIGNvb2tpZSA9IGNvb2tpZS5zdWJzdHJpbmcoMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjb29raWUuaW5kZXhPZihuYW1lKSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyKGNvb2tpZS5zdWJzdHJpbmcobmFtZS5sZW5ndGgsIGNvb2tpZS5sZW5ndGgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBOaWNrbmFtZXMgY2FuIGNvbnNpc3Qgb2Y6XHJcbiAgICAgKiBsb3dlciBjYXNlIGxldHRlcnMsXHJcbiAgICAgKiB1cHBlciBjYXNlIGxldHRlcnMsXHJcbiAgICAgKiBudW1iZXJzLFxyXG4gICAgICogdW5kZXJzY29yZXMgYW5kXHJcbiAgICAgKiBkb3RzLlxyXG4gICAgICovXHJcbiAgICB2YWxpZGF0ZUlucHV0RGF0YShuaWNrbmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKG5pY2tuYW1lID09PSAnJyB8fCBwYXNzd29yZCA9PT0gJycpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKG5pY2tuYW1lLmxlbmd0aCA8IDQgfHwgbmlja25hbWUubGVuZ3RoID4gMTUpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKHBhc3N3b3JkLmxlbmd0aCA8IDQgfHwgcGFzc3dvcmQubGVuZ3RoID4gMTUpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc3QgbWF0Y2hlc1JlZ2V4ID0gL15bYS16QS1aMC05X1xcLl0rJC8uZXhlYyhuaWNrbmFtZSk7XHJcbiAgICAgICAgcmV0dXJuIG1hdGNoZXNSZWdleCAhPT0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEByZXR1cm5zIGEgbG9naW4gcmVzdWx0IG1lc3NhZ2UgKCdzdWNjZXNzJyBpZiBsb2dpbiBzdWNjZXNzZnVsKVxyXG4gICAgICovXHJcbiAgICBhc3luYyB0cnlMb2dpblVzZXIobmlja25hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IERhdGFiYXNlQVBJLmdldFVzZXJCeU5pY2tuYW1lKG5pY2tuYW1lKTtcclxuICAgICAgICBpZiAodXNlciA9PT0gbnVsbCkgcmV0dXJuIFwidXNlciBkb2Vzbid0IGV4aXN0XCI7XHJcblxyXG4gICAgICAgIGlmICh1c2VyLm1vZGVsLmdldFBhc3N3b3JkKCkgIT09IHBhc3N3b3JkKSByZXR1cm4gJ3dyb25nIHBhc3N3b3JkJztcclxuXHJcbiAgICAgICAgLy8gc2F2ZSBjdXJyZW50IHVzZXIgaW4gY29va2llc1xyXG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSB1c2VyO1xyXG4gICAgICAgIHRoaXMuc2V0VXNlckNvb2tpZSh0aGlzLmN1cnJlbnRVc2VyLm1vZGVsLmdldElkKCkpO1xyXG4gICAgICAgIHJldHVybiAnc3VjY2Vzcyc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcmV0dXJucyBhIHNpZ24gdXAgcmVzdWx0IG1lc3NhZ2UgKCdzdWNjZXNzJyBpZiBsb2dpbiBzdWNjZXNzZnVsKVxyXG4gICAgICovXHJcbiAgICBhc3luYyB0cnlTaWduVXBVc2VyKG5pY2tuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIGNvbnN0IHVzZXJXaXRoU2FtZU5pY2tuYW1lID0gYXdhaXQgRGF0YWJhc2VBUEkuZ2V0VXNlckJ5Tmlja25hbWUoXHJcbiAgICAgICAgICAgIG5pY2tuYW1lXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZiAodXNlcldpdGhTYW1lTmlja25hbWUgIT09IG51bGwpIHJldHVybiAnbmlja25hbWUgYWxyZWFkeSB0YWtlbic7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld1VzZXIgPSBhd2FpdCBEYXRhYmFzZUFQSS5hZGRVc2VyKG5pY2tuYW1lLCBwYXNzd29yZCk7XHJcblxyXG4gICAgICAgIC8vIHNhdmUgY3VycmVudCB1c2VyIGluIGNvb2tpZXNcclxuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gYXdhaXQgRGF0YWJhc2VBUEkuZ2V0VXNlckJ5SWQobmV3VXNlci5pZCk7XHJcbiAgICAgICAgdGhpcy5zZXRVc2VyQ29va2llKHRoaXMuY3VycmVudFVzZXIubW9kZWwuZ2V0SWQoKSk7XHJcbiAgICAgICAgcmV0dXJuICdzdWNjZXNzJztcclxuICAgIH1cclxuXHJcbiAgICBsb2dvdXRVc2VyKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9XHJcbiAgICAgICAgICAgICd1c2VySWQ9O2V4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMSBHTVQ7IHBhdGg9Lyc7XHJcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTmV3UHJvamVjdChwOiBQcm9qZWN0KSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlci5tb2RlbC5hZGRQcm9qZWN0KHApO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZVByb2plY3QocHJvaklkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyLm1vZGVsLnJlbW92ZVByb2plY3QocHJvaklkKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEYXRhYmFzZUFQSSB9IGZyb20gJy4uL3V0aWxzL2RhdGFiYXNlQVBJJztcclxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4uL3Byb2plY3QvY29udHJvbGxlcic7XHJcbmltcG9ydCB7IFByb2plY3RWaWV3IH0gZnJvbSAnLi4vcHJvamVjdC92aWV3JztcclxuaW1wb3J0IHsgVGFza1N0YXRlIH0gZnJvbSAnLi4vdXRpbHMvdGFza1N0YXRlJztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL3VzZXIvY29udHJvbGxlcic7XHJcbmltcG9ydCB7IE1hbmFnZXJNb2RlbCB9IGZyb20gJy4vbW9kZWwnO1xyXG5pbXBvcnQgeyByZW1vdmVFbGVtZW50c0NoaWxkcmVuIH0gZnJvbSAnLi4vdXRpbHMvcmVtb3ZlRWxlbWVudHNDaGlsZHJlbic7XHJcbmltcG9ydCB7IGRpc3BsYXlQb3B1cCB9IGZyb20gJy4uL3V0aWxzL3RvYXN0JztcclxuaW1wb3J0IHsgZHJhd0Ryb3Bkb3duQnV0dG9uIH0gZnJvbSAnLi4vdXRpbHMvZHJvcGRvd24nO1xyXG5pbXBvcnQgeyBkaXNwbGF5TW9kYWwgfSBmcm9tICcuLi91dGlscy9tb2RhbCc7XHJcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IGlzVGhpc0hvdXIgfSBmcm9tICdkYXRlLWZucyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWFuYWdlclZpZXcge1xyXG4gICAgcHJpdmF0ZSBwYXJlbnQ6IEhUTUxFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBjb250YWluZXI6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NOYW1lID0gJ21hbmFnZXInO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXcocGFyZW50OiBIVE1MRWxlbWVudCwgbW9kZWw6IE1hbmFnZXJNb2RlbCkge1xyXG4gICAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50O1xyXG4gICAgICAgIHRoaXMucGFyZW50LmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyKTtcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgZm9yIHNhdmVkIHVzZXIgaW4gY29va2llc1xyXG4gICAgICAgIGlmIChtb2RlbC5nZXRVc2VyQ29va2llKCkgPT09IC0xKSB0aGlzLmRyYXdMb2dpblBhZ2UobW9kZWwpO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdQcm9maWxlSGVhZGVyKG1vZGVsKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBtb2RlbC5nZXRDdXJyZW50VXNlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdEYXNoYm9hcmQodXNlci5tb2RlbC5nZXRQcm9qZWN0cygpLCBtb2RlbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXdMb2dpblBhZ2UobW9kZWw6IE1hbmFnZXJNb2RlbCkge1xyXG4gICAgICAgIGNvbnN0IGxvZ2luQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbG9naW5Db250YWluZXIuY2xhc3NOYW1lID0gJ2xvZ2luQ29udGFpbmVyJztcclxuXHJcbiAgICAgICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGxvZ28uY2xhc3NOYW1lID0gJ2ltZ1N0YXJ0UGFnZSc7XHJcbiAgICAgICAgbG9naW5Db250YWluZXIuYXBwZW5kQ2hpbGQobG9nbyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGxibFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBsYmxUaXRsZS5pbm5lckhUTUwgPSAnUHJvamVjdCBtYW5hZ2VyJztcclxuICAgICAgICBsYmxUaXRsZS5jbGFzc05hbWUgPSAndGl0bGUnO1xyXG4gICAgICAgIGxvZ2luQ29udGFpbmVyLmFwcGVuZENoaWxkKGxibFRpdGxlKTtcclxuXHJcbiAgICAgICAgY29uc3QgYnRuQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgYnRuQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdidG5Db250YWluZXInO1xyXG5cclxuICAgICAgICBjb25zdCBidG5TaWduVXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidG5TaWduVXAuaWQgPSAnYnRuU2lnblVwJztcclxuICAgICAgICBidG5TaWduVXAuY2xhc3NOYW1lID0gJ2J0biBidG4tc3VjY2Vzcyc7XHJcbiAgICAgICAgYnRuU2lnblVwLmlubmVySFRNTCA9ICdTaWduIHVwJztcclxuICAgICAgICBidG5TaWduVXAub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgYnRuQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcclxuICAgICAgICAgICAgc2lnblVwRm9ybS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBmb2N1cyBvbiBuaWNrbmFtZSBpbnB1dCBmaWVsZCBhZnRlciBhbmltYXRpb25cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRTaWduVXBOaWNrbmFtZScpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0blNpZ25VcCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ0bkxvZ2luID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnRuTG9naW4uaWQgPSAnYnRuTG9naW4nO1xyXG4gICAgICAgIGJ0bkxvZ2luLmNsYXNzTmFtZSA9ICdidG4gYnRuLWxpZ2h0JztcclxuICAgICAgICBidG5Mb2dpbi5pbm5lckhUTUwgPSAnTG9nIGluJztcclxuICAgICAgICBidG5Mb2dpbi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBidG5Db250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xyXG4gICAgICAgICAgICBsb2dpbkZvcm0uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZScpO1xyXG5cclxuICAgICAgICAgICAgLy8gZm9jdXMgb24gbmlja25hbWUgaW5wdXQgZmllbGQgYWZ0ZXIgYW5pbWF0aW9uXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0TG9naW5OaWNrbmFtZScpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgYnRuQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ0bkxvZ2luKTtcclxuICAgICAgICBsb2dpbkNvbnRhaW5lci5hcHBlbmRDaGlsZChidG5Db250YWluZXIpO1xyXG5cclxuICAgICAgICAvLyBkcmF3IGxvZ2luIGFuZCBzaW5nIHVwIGZvcm1zXHJcbiAgICAgICAgY29uc3QgbG9naW5Gb3JtID0gdGhpcy5kcmF3Rm9ybShsb2dpbkNvbnRhaW5lciwgYnRuQ29udGFpbmVyLCB7XHJcbiAgICAgICAgICAgIGZvcm1UeXBlOiAnTG9naW4nLFxyXG4gICAgICAgICAgICBsYmxUZXh0OiAnTG9nIGluIHRvIFByb2plY3QgTWFuYWdlcicsXHJcbiAgICAgICAgICAgIGJ0blRleHQ6ICdMb2cgaW4nLFxyXG4gICAgICAgICAgICBjYWxsYmFja0Z1bmN0aW9uOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBsb2FkaW5nIGFuaW1hdGlvblxyXG4gICAgICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb24uY2xhc3NOYW1lID1cclxuICAgICAgICAgICAgICAgICAgICAnc3Bpbm5lci1ib3JkZXIgc3Bpbm5lci1ib3JkZXItc20gdGV4dC1saWdodCc7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuTG9naW5Ob3cnKS5pbm5lckhUTUwgPVxyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi5vdXRlckhUTUw7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gbG9naW5cclxuICAgICAgICAgICAgICAgIHRoaXMudHJ5TG9naW4obW9kZWwsIGxvZ2luRm9ybSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc3Qgc2lnblVwRm9ybSA9IHRoaXMuZHJhd0Zvcm0obG9naW5Db250YWluZXIsIGJ0bkNvbnRhaW5lciwge1xyXG4gICAgICAgICAgICBmb3JtVHlwZTogJ1NpZ25VcCcsXHJcbiAgICAgICAgICAgIGxibFRleHQ6ICdTaWduIHVwIHRvIFByb2plY3QgTWFuYWdlcicsXHJcbiAgICAgICAgICAgIGJ0blRleHQ6ICdTaWduIHVwJyxcclxuICAgICAgICAgICAgY2FsbGJhY2tGdW5jdGlvbjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gbG9hZGluZyBhbmltYXRpb25cclxuICAgICAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLmNsYXNzTmFtZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgJ3NwaW5uZXItYm9yZGVyIHNwaW5uZXItYm9yZGVyLXNtIHRleHQtbGlnaHQnO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0blNpZ25VcE5vdycpLmlubmVySFRNTCA9XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLm91dGVySFRNTDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBsb2dpblxyXG4gICAgICAgICAgICAgICAgdGhpcy50cnlTaWduVXAobW9kZWwsIHNpZ25VcEZvcm0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dpbkNvbnRhaW5lcik7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0Zvcm0oXHJcbiAgICAgICAgcGFyZW50OiBIVE1MRWxlbWVudCxcclxuICAgICAgICBidG5Db250YWluZXI6IEhUTUxFbGVtZW50LFxyXG4gICAgICAgIGRhdGE6IGFueVxyXG4gICAgKTogSFRNTEVsZW1lbnQge1xyXG4gICAgICAgIGNvbnN0IGxvZ2luRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGxvZ2luRm9ybS5jbGFzc05hbWUgPSAnbG9naW5Gb3JtIGhpZGUnO1xyXG5cclxuICAgICAgICBjb25zdCBsYmxMb2dpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgbGJsTG9naW4uaW5uZXJIVE1MID0gZGF0YS5sYmxUZXh0O1xyXG4gICAgICAgIGxibExvZ2luLmlkID0gJ2xibExvZ2luJztcclxuICAgICAgICBsb2dpbkZvcm0uYXBwZW5kQ2hpbGQobGJsTG9naW4pO1xyXG5cclxuICAgICAgICBjb25zdCBpbnB1dE5pY2tuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBpbnB1dE5pY2tuYW1lLmlkID0gYGlucHV0JHtkYXRhLmZvcm1UeXBlfU5pY2tuYW1lYDtcclxuICAgICAgICBpbnB1dE5pY2tuYW1lLnR5cGUgPSAndGV4dCc7XHJcbiAgICAgICAgaW5wdXROaWNrbmFtZS5jbGFzc05hbWUgPSAnZm9ybS1jb250cm9sJztcclxuICAgICAgICBpbnB1dE5pY2tuYW1lLnBsYWNlaG9sZGVyID0gJ05pY2tuYW1lJztcclxuICAgICAgICBsb2dpbkZvcm0uYXBwZW5kQ2hpbGQoaW5wdXROaWNrbmFtZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGlucHV0UGFzc3dvcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGlucHV0UGFzc3dvcmQuaWQgPSBgaW5wdXQke2RhdGEuZm9ybVR5cGV9UGFzc3dvcmRgO1xyXG4gICAgICAgIGlucHV0UGFzc3dvcmQudHlwZSA9ICdwYXNzd29yZCc7XHJcbiAgICAgICAgaW5wdXRQYXNzd29yZC5jbGFzc05hbWUgPSAnZm9ybS1jb250cm9sJztcclxuICAgICAgICBpbnB1dFBhc3N3b3JkLnBsYWNlaG9sZGVyID0gJ1Bhc3N3b3JkJztcclxuICAgICAgICBpbnB1dFBhc3N3b3JkLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLmNhbGxiYWNrRnVuY3Rpb24oKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWZyZXNoZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxvZ2luRm9ybS5hcHBlbmRDaGlsZChpbnB1dFBhc3N3b3JkKTtcclxuXHJcbiAgICAgICAgY29uc3QgYnRuTG9naW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidG5Mb2dpbi5pZCA9IGBidG4ke2RhdGEuZm9ybVR5cGV9Tm93YDtcclxuICAgICAgICBidG5Mb2dpbi5jbGFzc05hbWUgPSAnYnRuIGJ0bi1zdWNjZXNzJztcclxuICAgICAgICBidG5Mb2dpbi5pbm5lckhUTUwgPSBkYXRhLmJ0blRleHQ7XHJcbiAgICAgICAgYnRuTG9naW4ub25jbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGRhdGEuY2FsbGJhY2tGdW5jdGlvbigpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVmcmVzaGVkJyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBsb2dpbkZvcm0uYXBwZW5kQ2hpbGQoYnRuTG9naW4pO1xyXG5cclxuICAgICAgICBjb25zdCBidG5Hb0JhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidG5Hb0JhY2suY2xhc3NOYW1lID0gJ2J0biBidG4tbGluayc7XHJcbiAgICAgICAgYnRuR29CYWNrLmlubmVySFRNTCA9ICdCYWNrJztcclxuICAgICAgICBidG5Hb0JhY2sub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgbG9naW5Gb3JtLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcclxuICAgICAgICAgICAgYnRuQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGxvZ2luRm9ybS5hcHBlbmRDaGlsZChidG5Hb0JhY2spO1xyXG5cclxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQobG9naW5Gb3JtKTtcclxuICAgICAgICByZXR1cm4gbG9naW5Gb3JtO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHRyeUxvZ2luKG1vZGVsOiBNYW5hZ2VyTW9kZWwsIGxvZ2luRm9ybTogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBubiA9IChcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0TG9naW5OaWNrbmFtZScpIGFzIEhUTUxJbnB1dEVsZW1lbnRcclxuICAgICAgICApLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IHBzd2QgPSAoXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dExvZ2luUGFzc3dvcmQnKSBhcyBIVE1MSW5wdXRFbGVtZW50XHJcbiAgICAgICAgKS52YWx1ZTtcclxuICAgICAgICBsZXQgZXJyb3JNc2c6IHN0cmluZyA9ICdMb2dpbiBmYWlsZWQ6ICc7XHJcbiAgICAgICAgbGV0IGxvZ2luTXNnID0gJyc7XHJcbiAgICAgICAgaWYgKG1vZGVsLnZhbGlkYXRlSW5wdXREYXRhKG5uLCBwc3dkKSkge1xyXG4gICAgICAgICAgICBsb2dpbk1zZyA9IGF3YWl0IG1vZGVsLnRyeUxvZ2luVXNlcihubiwgcHN3ZCk7XHJcbiAgICAgICAgICAgIGlmIChsb2dpbk1zZyA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgbG9naW4gcGFnZVxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnaW1nU3RhcnRQYWdlJylbMF0ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsb2dpbkNvbnRhaW5lcicpWzBdLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGRyYXcgZGFzaGJvYXJkXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdQcm9maWxlSGVhZGVyKG1vZGVsKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBtb2RlbC5nZXRDdXJyZW50VXNlcigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3RGFzaGJvYXJkKHVzZXIubW9kZWwuZ2V0UHJvamVjdHMoKSwgbW9kZWwpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGRpc3BsYXkgc3VjY2VzcyBtZXNzYWdlXHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5UG9wdXAoe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JlZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnTG9naW4gc3VjY2Vzc2Z1bCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1dlbGNvbWUgYmFjayB0byB0aGUgUHJvamVjdCBNYW5hZ2VyIScsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIGVycm9yTXNnICs9IGxvZ2luTXNnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVycm9yTXNnICs9ICdJbnZhbGlkIGlucHV0Lic7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobG9naW5Nc2cgIT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICBsZXQgbGJsRXJyb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGJsRXJyb3InKTtcclxuICAgICAgICAgICAgaWYgKGxibEVycm9yID09PSBudWxsKSBsYmxFcnJvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgICAgIGxibEVycm9yLmlkID0gJ2xibEVycm9yJztcclxuICAgICAgICAgICAgbGJsRXJyb3IuaW5uZXJIVE1MID0gZXJyb3JNc2c7XHJcbiAgICAgICAgICAgIGxvZ2luRm9ybS5hcHBlbmRDaGlsZChsYmxFcnJvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyByZW1vdmUgYW5pbWF0aW9uXHJcbiAgICAgICAgY29uc3QgbG9naW5CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuTG9naW5Ob3cnKTtcclxuICAgICAgICBpZiAobG9naW5CdG4gIT0gbnVsbCkgbG9naW5CdG4uaW5uZXJIVE1MID0gJ0xvZyBpbic7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgdHJ5U2lnblVwKG1vZGVsOiBNYW5hZ2VyTW9kZWwsIGxvZ2luRm9ybTogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBubiA9IChcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0U2lnblVwTmlja25hbWUnKSBhcyBIVE1MSW5wdXRFbGVtZW50XHJcbiAgICAgICAgKS52YWx1ZTtcclxuICAgICAgICBjb25zdCBwc3dkID0gKFxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRTaWduVXBQYXNzd29yZCcpIGFzIEhUTUxJbnB1dEVsZW1lbnRcclxuICAgICAgICApLnZhbHVlO1xyXG4gICAgICAgIGxldCBlcnJvck1zZzogc3RyaW5nID0gJ1NpZ24gdXAgZmFpbGVkOiAnO1xyXG4gICAgICAgIGxldCBzaWdudXBNc2cgPSAnJztcclxuICAgICAgICBpZiAobW9kZWwudmFsaWRhdGVJbnB1dERhdGEobm4sIHBzd2QpKSB7XHJcbiAgICAgICAgICAgIHNpZ251cE1zZyA9IGF3YWl0IG1vZGVsLnRyeVNpZ25VcFVzZXIobm4sIHBzd2QpO1xyXG4gICAgICAgICAgICBpZiAoc2lnbnVwTXNnID09PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBsb2dpbiBwYWdlXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbWdTdGFydFBhZ2UnKVswXS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xvZ2luQ29udGFpbmVyJylbMF0ucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZHJhdyBkYXNoYm9hcmRcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd1Byb2ZpbGVIZWFkZXIobW9kZWwpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IG1vZGVsLmdldEN1cnJlbnRVc2VyKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdEYXNoYm9hcmQodXNlci5tb2RlbC5nZXRQcm9qZWN0cygpLCBtb2RlbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZGlzcGxheSBzdWNjZXNzIG1lc3NhZ2VcclxuICAgICAgICAgICAgICAgIGRpc3BsYXlQb3B1cCh7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdncmVlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdTaWduIHVwIHN1Y2Nlc3NmdWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdXZWxjb21lIHRvIHRoZSBQcm9qZWN0IE1hbmFnZXIhJyxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgZXJyb3JNc2cgKz0gc2lnbnVwTXNnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVycm9yTXNnICs9ICdJbnZhbGlkIGlucHV0Lic7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2lnbnVwTXNnICE9PSAnc3VjY2VzcycpIHtcclxuICAgICAgICAgICAgbGV0IGxibEVycm9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xibEVycm9yJyk7XHJcbiAgICAgICAgICAgIGlmIChsYmxFcnJvciA9PT0gbnVsbCkgbGJsRXJyb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgICAgICBsYmxFcnJvci5pZCA9ICdsYmxFcnJvcic7XHJcbiAgICAgICAgICAgIGxibEVycm9yLmlubmVySFRNTCA9IGVycm9yTXNnO1xyXG4gICAgICAgICAgICBsb2dpbkZvcm0uYXBwZW5kQ2hpbGQobGJsRXJyb3IpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcmVtb3ZlIGFuaW1hdGlvblxyXG4gICAgICAgIGNvbnN0IHNpZ251cEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5TaWduVXBOb3cnKTtcclxuICAgICAgICBpZiAoc2lnbnVwQnRuICE9IG51bGwpIHNpZ251cEJ0bi5pbm5lckhUTUwgPSAnU2lnbiB1cCc7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd1Byb2ZpbGVIZWFkZXIobW9kZWw6IE1hbmFnZXJNb2RlbCkge1xyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGhlYWRlci5jbGFzc05hbWUgPSAncHJvZmlsZUhlYWRlcic7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuXHJcbiAgICAgICAgLy8gUHJvamVjdCBNYW5hZ2VyIGxhYmVsICh0b3AgbGVmdClcclxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgdGl0bGUuY2xhc3NOYW1lID0gJ2hlYWRlclRpdGxlJztcclxuICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSAnUHJvamVjdCBNYW5hZ2VyJztcclxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICAgICAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgbWVudS5jbGFzc05hbWUgPSAnaGVhZGVyTWVudSc7XHJcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKG1lbnUpO1xyXG5cclxuICAgICAgICAvLyBTZWFyY2ggYmFyXHJcbiAgICAgICAgdGhpcy5kcmF3U2VhcmNoQmFyKG1lbnUsIG1vZGVsKTtcclxuXHJcbiAgICAgICAgLy8gQWRkIHByb2plY3QgYnV0dG9uXHJcbiAgICAgICAgY29uc3QgYnRuQWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ0bkFkZFByb2plY3QuY2xhc3NOYW1lID0gJ2J0biBidG4tc3VjY2VzcyBtZW51QnV0dG9uJztcclxuICAgICAgICBidG5BZGRQcm9qZWN0LmlkID0gJ2J0bkFkZFByb2plY3QnO1xyXG4gICAgICAgIGJ0bkFkZFByb2plY3Qub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgLy8gY2xlYXIgZGFzaGJvYXJkXHJcbiAgICAgICAgICAgIGxldCBkYXNoYm9hcmQgPSA8SFRNTEVsZW1lbnQ+KFxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGFzaGJvYXJkJylbMF1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKGRhc2hib2FyZCkge1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKGRhc2hib2FyZC5jaGlsZHJlblswXSkgZGFzaGJvYXJkLmNoaWxkcmVuWzBdLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGFzaGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGFzaGJvYXJkLmNsYXNzTmFtZSA9ICdkYXNoYm9hcmQnO1xyXG5cclxuICAgICAgICAgICAgLy8gZHJhdyBwcm9qZWN0IGVkaXRvclxyXG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qOiBQcm9qZWN0VmlldyA9IG5ldyBQcm9qZWN0VmlldygpO1xyXG4gICAgICAgICAgICBjb25zdCB1c2VyID0gbW9kZWwuZ2V0Q3VycmVudFVzZXIoKTtcclxuICAgICAgICAgICAgbmV3UHJvai5kcmF3RWRpdG9yKFxyXG4gICAgICAgICAgICAgICAgZGFzaGJvYXJkLFxyXG4gICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMuZHJhd0Rhc2hib2FyZCh1c2VyLm1vZGVsLmdldFByb2plY3RzKCksIG1vZGVsKSxcclxuICAgICAgICAgICAgICAgIG1vZGVsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBwbHVzSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgICAgICBwbHVzSWNvbi5jbGFzc05hbWUgPSAnZmFzIGZhLXBsdXMnO1xyXG4gICAgICAgIGJ0bkFkZFByb2plY3QuYXBwZW5kQ2hpbGQocGx1c0ljb24pO1xyXG4gICAgICAgIG1lbnUuYXBwZW5kQ2hpbGQoYnRuQWRkUHJvamVjdCk7XHJcblxyXG4gICAgICAgIC8vIERyb3Bkb3duIGJ1dHRvbnNcclxuICAgICAgICB0aGlzLmRyYXdBY3Rpb25Ecm9wZG93bihtZW51LCBtb2RlbCk7XHJcbiAgICAgICAgdGhpcy5kcmF3U29ydGluZ0Ryb3Bkb3duKG1lbnUsIG1vZGVsKTtcclxuICAgICAgICB0aGlzLmRyYXdGaWx0ZXJEcm9wZG93bihtZW51LCBtb2RlbCk7XHJcbiAgICAgICAgdGhpcy5kcmF3UHJvZmlsZURyb3Bkb3duKG1lbnUsIG1vZGVsKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3U2VhcmNoQmFyKHBhcmVudDogSFRNTEVsZW1lbnQsIG1vZGVsOiBNYW5hZ2VyTW9kZWwpIHtcclxuICAgICAgICBjb25zdCBpbnB1dEdyb3VwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaW5wdXRHcm91cC5pZCA9ICdzZWFyY2hJbnB1dEdyb3VwJztcclxuICAgICAgICBpbnB1dEdyb3VwLmNsYXNzTmFtZSA9ICdpbnB1dC1ncm91cCc7XHJcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGlucHV0R3JvdXApO1xyXG5cclxuICAgICAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgZm9ybS5jbGFzc05hbWUgPSAnZm9ybS1vdXRsaW5lJztcclxuICAgICAgICBpbnB1dEdyb3VwLmFwcGVuZENoaWxkKGZvcm0pO1xyXG5cclxuICAgICAgICBjb25zdCBpbnB1dFNlYXJjaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgaW5wdXRTZWFyY2guaWQgPSAnaW5wdXRTZWFyY2gnO1xyXG4gICAgICAgIGlucHV0U2VhcmNoLnR5cGUgPSAnc2VhcmNoJztcclxuICAgICAgICBpbnB1dFNlYXJjaC5jbGFzc05hbWUgPSAnZm9ybS1jb250cm9sIGhpZGUnO1xyXG4gICAgICAgIGlucHV0U2VhcmNoLnBsYWNlaG9sZGVyID0gJ1NlYXJjaCBwdWJsaWMgcHJvamVjdHMnO1xyXG4gICAgICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRTZWFyY2gpO1xyXG5cclxuICAgICAgICBjb25zdCBidG5TZWFyY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgICAgYnRuU2VhcmNoLmlkID0gJ2J0blNlYXJjaCc7XHJcbiAgICAgICAgYnRuU2VhcmNoLmNsYXNzTmFtZSA9ICdmYXMgZmEtc2VhcmNoIGZhLWxnJztcclxuICAgICAgICBidG5TZWFyY2gub25tb3VzZWVudGVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpbnB1dFNlYXJjaC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIGlucHV0U2VhcmNoLmZvY3VzKCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBidG5TZWFyY2gub25jbGljayA9ICgpID0+IGlucHV0U2VhcmNoLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcclxuICAgICAgICBpbnB1dEdyb3VwLmFwcGVuZENoaWxkKGJ0blNlYXJjaCk7XHJcblxyXG4gICAgICAgIGZyb21FdmVudChpbnB1dFNlYXJjaCwgJ2lucHV0JylcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICBzd2l0Y2hNYXAoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dFNlYXJjaC52YWx1ZSA9PT0gJycpIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBEYXRhYmFzZUFQSS5nZXRQcm9qZWN0c0J5VGV4dChpbnB1dFNlYXJjaC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHByb2plY3RzOiBQcm9qZWN0W10pID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9qZWN0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGRpc3BsYXkgYWxsIHB1YmxpYyBwcm9qZWN0c1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZXJlIHRoZSBwcm9qZWN0IG5hbWUgY29udGFpbnMgdGhlIGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWRyYXdEYXNoYm9hcmQocHJvamVjdHMsIG1vZGVsLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGRpc3BsYXkgdXNlcidzIHByb2plY3RzXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IG1vZGVsLmdldEN1cnJlbnRVc2VyKCkubW9kZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWRyYXdEYXNoYm9hcmQodXNlci5nZXRQcm9qZWN0cygpLCBtb2RlbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdEYXNoYm9hcmQoXHJcbiAgICAgICAgcHJvamVjdHM6IFByb2plY3RbXSxcclxuICAgICAgICBtb2RlbDogTWFuYWdlck1vZGVsLFxyXG4gICAgICAgIGNsaWNrYWJsZVByb2plY3RzOiBib29sZWFuID0gdHJ1ZVxyXG4gICAgKSB7XHJcbiAgICAgICAgaWYgKHByb2plY3RzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdFbXB0eURhc2hib2FyZChtb2RlbCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBkYXNoYm9hcmQgPSA8SFRNTEVsZW1lbnQ+KFxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkYXNoYm9hcmQnKVswXVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgaWYgKCFkYXNoYm9hcmQpIGRhc2hib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRhc2hib2FyZC5jbGFzc05hbWUgPSAnZGFzaGJvYXJkJztcclxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qOiBQcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBtb2RlbC5nZXRDdXJyZW50VXNlcigpLm1vZGVsO1xyXG4gICAgICAgICAgICBwcm9qLmRyYXdQcmV2aWV3KFxyXG4gICAgICAgICAgICAgICAgZGFzaGJvYXJkLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2pzID0gdXNlci5nZXRQcm9qZWN0cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd0Rhc2hib2FyZChwcm9qcywgbW9kZWwpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG1vZGVsLFxyXG4gICAgICAgICAgICAgICAgY2xpY2thYmxlUHJvamVjdHNcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoZGFzaGJvYXJkKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3RW1wdHlEYXNoYm9hcmQobW9kZWw6IE1hbmFnZXJNb2RlbCkge1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdlbXB0eURhc2hib2FyZE1lc3NhZ2UnKVswXSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjb250YWluZXIuY2xhc3NOYW1lID0gJ2VtcHR5RGFzaGJvYXJkTWVzc2FnZSc7XHJcblxyXG4gICAgICAgIGNvbnN0IGltZ0VtcHR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgaW1nRW1wdHkuY2xhc3NOYW1lID0gJ2ltZ0VtcHR5RGFzaGJvYXJkJztcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nRW1wdHkpO1xyXG5cclxuICAgICAgICBjb25zdCBsYmxNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBsYmxNZXNzYWdlLmNsYXNzTmFtZSA9ICdsYmxFbXB0eURhc2hib2FyZCc7XHJcbiAgICAgICAgbGJsTWVzc2FnZS5pbm5lckhUTUwgPSAnWW91ciBkYXNoYm9hcmQgaXMgZW1wdHkuLi4nO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsYmxNZXNzYWdlKTtcclxuXHJcbiAgICAgICAgY29uc3QgYnRuQWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnRuQWRkLmlkID0gJ2J0bkFkZFByb2plY3RFbXB0eSc7XHJcbiAgICAgICAgYnRuQWRkLmNsYXNzTmFtZSA9ICdidG4gYnRuLXN1Y2Nlc3MnO1xyXG4gICAgICAgIGJ0bkFkZC5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBjbGVhciBkYXNoYm9hcmRcclxuICAgICAgICAgICAgbGV0IGRhc2hib2FyZCA9IDxIVE1MRWxlbWVudD4oXHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkYXNoYm9hcmQnKVswXVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBpZiAoZGFzaGJvYXJkKSB7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoZGFzaGJvYXJkLmNoaWxkcmVuWzBdKSBkYXNoYm9hcmQuY2hpbGRyZW5bMF0ucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkYXNoYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkYXNoYm9hcmQuY2xhc3NOYW1lID0gJ2Rhc2hib2FyZCc7XHJcblxyXG4gICAgICAgICAgICAvLyBjbGVhciBlbXB0eSBkYXNoYm9hcmQgbWVzc2FnZVxyXG4gICAgICAgICAgICBjb250YWluZXIucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qOiBQcm9qZWN0VmlldyA9IG5ldyBQcm9qZWN0VmlldygpO1xyXG4gICAgICAgICAgICBjb25zdCB1c2VyID0gbW9kZWwuZ2V0Q3VycmVudFVzZXIoKTtcclxuICAgICAgICAgICAgbmV3UHJvai5kcmF3RWRpdG9yKFxyXG4gICAgICAgICAgICAgICAgZGFzaGJvYXJkLFxyXG4gICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICgpID0+IHRoaXMuZHJhd0Rhc2hib2FyZCh1c2VyLm1vZGVsLmdldFByb2plY3RzKCksIG1vZGVsKSxcclxuICAgICAgICAgICAgICAgIG1vZGVsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBidG5BZGQuaW5uZXJIVE1MID1cclxuICAgICAgICAgICAgJzxpIGNsYXNzPVwiZmFzIGZhLXBsdXNcIiBpZD1cImljb25QbHVzXCI+PC9pPkFkZCBwcm9qZWN0JztcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuQWRkKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3UHJvZmlsZURyb3Bkb3duKHBhcmVudDogSFRNTEVsZW1lbnQsIG1vZGVsOiBNYW5hZ2VyTW9kZWwpIHtcclxuICAgICAgICAvLyBVc2VyIGRyb3Bkb3duIG1lbnVcclxuICAgICAgICBsZXQgZHJvcGRvd25JdGVtcyA9IFtdO1xyXG5cclxuICAgICAgICAvLyBVc2VyIG5pY2tuYW1lXHJcbiAgICAgICAgY29uc3QgdXNlcjogVXNlciA9IG1vZGVsLmdldEN1cnJlbnRVc2VyKCk7XHJcbiAgICAgICAgY29uc3Qgbmlja25hbWVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgbmlja25hbWVJdGVtLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICBuaWNrbmFtZUl0ZW0uY2xhc3NOYW1lID0gJ2Ryb3Bkb3duLWl0ZW0nO1xyXG4gICAgICAgIG5pY2tuYW1lSXRlbS5pbm5lckhUTUwgPSBgIyR7dXNlci5tb2RlbC5nZXRJZCgpfSB8ICR7XHJcbiAgICAgICAgICAgIHVzZXIubW9kZWwubmlja25hbWVcclxuICAgICAgICB9YDtcclxuICAgICAgICBkcm9wZG93bkl0ZW1zLnB1c2gobmlja25hbWVJdGVtKTtcclxuXHJcbiAgICAgICAgLy8gTG9nb3V0IGJ1dHRvblxyXG4gICAgICAgIGNvbnN0IGJ0bkxvZ291dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICBidG5Mb2dvdXQuY2xhc3NOYW1lID0gJ2Ryb3Bkb3duLWl0ZW0nO1xyXG4gICAgICAgIGJ0bkxvZ291dC5pbm5lckhUTUwgPSAnTG9nIG91dCc7XHJcbiAgICAgICAgYnRuTG9nb3V0Lm9uY2xpY2sgPSAoKSA9PiBtb2RlbC5sb2dvdXRVc2VyKCk7XHJcbiAgICAgICAgZHJvcGRvd25JdGVtcy5wdXNoKGJ0bkxvZ291dCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRyb3Bkb3duID0gZHJhd0Ryb3Bkb3duQnV0dG9uKFxyXG4gICAgICAgICAgICBwYXJlbnQsXHJcbiAgICAgICAgICAgICdidG5Qcm9maWxlRHJvcGRvd24nLFxyXG4gICAgICAgICAgICBkcm9wZG93bkl0ZW1zXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBidG5Qcm9maWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgZHJvcGRvd24uYXBwZW5kQ2hpbGQoYnRuUHJvZmlsZSk7XHJcbiAgICAgICAgYnRuUHJvZmlsZS5jbGFzc05hbWUgPSAnYnRuIGJ0bi1saWdodCBkcm9wZG93bi10b2dnbGUgbWVudUJ1dHRvbic7XHJcbiAgICAgICAgYnRuUHJvZmlsZS5pZCA9ICdidG5Qcm9maWxlRHJvcGRvd24nO1xyXG4gICAgICAgIGJ0blByb2ZpbGUuc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICdkcm9wZG93bicpO1xyXG4gICAgICAgIGJ0blByb2ZpbGUuaW5uZXJIVE1MID0gJzxpIGNsYXNzPVwiZmFzIGZhLXVzZXIgaWNvbkNvbG9yXCI+PC9pPic7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd1NvcnRpbmdEcm9wZG93bihwYXJlbnQ6IEhUTUxEaXZFbGVtZW50LCBtb2RlbDogTWFuYWdlck1vZGVsKSB7XHJcbiAgICAgICAgLy8gU29ydGluZyBkcm9wZG93blxyXG4gICAgICAgIGxldCBkcm9wZG93bkl0ZW1zOiBIVE1MQW5jaG9yRWxlbWVudFtdID0gW107XHJcblxyXG4gICAgICAgIC8vIFNvcnQgYnkgZGF0ZSBhZGRlZFxyXG4gICAgICAgIGNvbnN0IGJ0blNvcnREYXRlQWRkZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgYnRuU29ydERhdGVBZGRlZC5jbGFzc05hbWUgPSAnZHJvcGRvd24taXRlbSc7XHJcbiAgICAgICAgYnRuU29ydERhdGVBZGRlZC5pbm5lckhUTUwgPSAnRGF0ZSBhZGRlZCDinJMnO1xyXG4gICAgICAgIGJ0blNvcnREYXRlQWRkZWQub25jbGljayA9ICgpID0+XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU29ydGluZ01ldGhvZChcclxuICAgICAgICAgICAgICAgICdnZXRUaW1lc3RhbXAnLFxyXG4gICAgICAgICAgICAgICAgYnRuU29ydERhdGVBZGRlZCxcclxuICAgICAgICAgICAgICAgIGRyb3Bkb3duSXRlbXMsXHJcbiAgICAgICAgICAgICAgICBtb2RlbCxcclxuICAgICAgICAgICAgICAgIHRydWVcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICBkcm9wZG93bkl0ZW1zLnB1c2goYnRuU29ydERhdGVBZGRlZCk7XHJcblxyXG4gICAgICAgIC8vIFNvcnQgYnkgdXJnZW5jeVxyXG4gICAgICAgIGNvbnN0IGJ0blNvcnRVcmdlbmN5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgIGJ0blNvcnRVcmdlbmN5LmNsYXNzTmFtZSA9ICdkcm9wZG93bi1pdGVtJztcclxuICAgICAgICBidG5Tb3J0VXJnZW5jeS5pbm5lckhUTUwgPSAnVXJnZW5jeSc7XHJcbiAgICAgICAgYnRuU29ydFVyZ2VuY3kub25jbGljayA9ICgpID0+XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU29ydGluZ01ldGhvZChcclxuICAgICAgICAgICAgICAgICdnZXREdWVEYXRlJyxcclxuICAgICAgICAgICAgICAgIGJ0blNvcnRVcmdlbmN5LFxyXG4gICAgICAgICAgICAgICAgZHJvcGRvd25JdGVtcyxcclxuICAgICAgICAgICAgICAgIG1vZGVsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgZHJvcGRvd25JdGVtcy5wdXNoKGJ0blNvcnRVcmdlbmN5KTtcclxuXHJcbiAgICAgICAgLy8gU29ydCBieSBudW1iZXIgb2YgdGFza3NcclxuICAgICAgICBjb25zdCBidG5Tb3J0VGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgYnRuU29ydFRhc2tzLmNsYXNzTmFtZSA9ICdkcm9wZG93bi1pdGVtJztcclxuICAgICAgICBidG5Tb3J0VGFza3MuaW5uZXJIVE1MID0gJ051bWJlciBvZiB0YXNrcyc7XHJcbiAgICAgICAgYnRuU29ydFRhc2tzLm9uY2xpY2sgPSAoKSA9PlxyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZVNvcnRpbmdNZXRob2QoXHJcbiAgICAgICAgICAgICAgICAnZ2V0TnVtT2ZUYXNrcycsXHJcbiAgICAgICAgICAgICAgICBidG5Tb3J0VGFza3MsXHJcbiAgICAgICAgICAgICAgICBkcm9wZG93bkl0ZW1zLFxyXG4gICAgICAgICAgICAgICAgbW9kZWwsXHJcbiAgICAgICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgZHJvcGRvd25JdGVtcy5wdXNoKGJ0blNvcnRUYXNrcyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRyb3Bkb3duID0gZHJhd0Ryb3Bkb3duQnV0dG9uKFxyXG4gICAgICAgICAgICBwYXJlbnQsXHJcbiAgICAgICAgICAgICdidG5Tb3J0RHJvcGRvd24nLFxyXG4gICAgICAgICAgICBkcm9wZG93bkl0ZW1zXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBidG5Tb3J0QnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBkcm9wZG93bi5hcHBlbmRDaGlsZChidG5Tb3J0QnkpO1xyXG4gICAgICAgIGJ0blNvcnRCeS5jbGFzc05hbWUgPSAnYnRuIGJ0bi1saWdodCBkcm9wZG93bi10b2dnbGUgbWVudUJ1dHRvbic7XHJcbiAgICAgICAgYnRuU29ydEJ5LmlkID0gJ2J0blNvcnREcm9wZG93bic7XHJcbiAgICAgICAgYnRuU29ydEJ5LnNldEF0dHJpYnV0ZSgnZGF0YS10b2dnbGUnLCAnZHJvcGRvd24nKTtcclxuICAgICAgICBidG5Tb3J0QnkuaW5uZXJIVE1MID0gJ1NvcnQgYnknO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdBY3Rpb25Ecm9wZG93bihwYXJlbnQ6IEhUTUxEaXZFbGVtZW50LCBtb2RlbDogTWFuYWdlck1vZGVsKSB7XHJcbiAgICAgICAgLy8gQWN0aW9uIGRyb3Bkb3duXHJcbiAgICAgICAgbGV0IGRyb3Bkb3duSXRlbXM6IEhUTUxBbmNob3JFbGVtZW50W10gPSBbXTtcclxuXHJcbiAgICAgICAgLy8gTWFyayBhbGwgYXMgZmluaXNoZWRcclxuICAgICAgICBjb25zdCBidG5NYXJrQWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgIGJ0bk1hcmtBbGwuY2xhc3NOYW1lID0gJ2Ryb3Bkb3duLWl0ZW0nO1xyXG4gICAgICAgIGJ0bk1hcmtBbGwuaW5uZXJIVE1MID0gJ01hcmsgYWxsIGFzIGZpbmlzaGVkJztcclxuICAgICAgICBidG5NYXJrQWxsLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGRpc3BsYXkgY29uZmlybWF0aW9uIG1lc3NhZ2VcclxuICAgICAgICAgICAgZGlzcGxheU1vZGFsKHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAncmVkJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnQ29uZmlybWF0aW9uJyxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6XHJcbiAgICAgICAgICAgICAgICAgICAgJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBtYXJrIGFsbCBwcm9qZWN0cyBhcyBmaW5pc2hlZD8nLFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1llcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwcmltYXJ5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFBlcmZvcm0gYWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1c2VyID0gbW9kZWwuZ2V0Q3VycmVudFVzZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIubW9kZWwubWFya0FsbEFzRmluaXNoZWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RzID0gdXNlci5tb2RlbC5nZXRQcm9qZWN0cygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0YWJhc2VBUEkudXBkYXRlUHJvamVjdHMocHJvamVjdHMpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlZHJhdyBwcm9qZWN0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVkcmF3RGFzaGJvYXJkKHByb2plY3RzLCBtb2RlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm90aWZ5IHVzZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5UG9wdXAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2dyZWVuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzZnVsIGFjdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnU3VjY2Vzc2Z1bGx5IG1hcmtlZCBhbGwgcHJvamVjdHMgYXMgZmluaXNoZWQuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnTm8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc2Vjb25kYXJ5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGRyb3Bkb3duSXRlbXMucHVzaChidG5NYXJrQWxsKTtcclxuXHJcbiAgICAgICAgLy8gRGVsZXRlIGFsbFxyXG4gICAgICAgIGNvbnN0IGJ0bkRlbGV0ZUFsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICBidG5EZWxldGVBbGwuY2xhc3NOYW1lID0gJ2Ryb3Bkb3duLWl0ZW0nO1xyXG4gICAgICAgIGJ0bkRlbGV0ZUFsbC5pbm5lckhUTUwgPSAnRGVsZXRlIGFsbCBwcm9qZWN0cyc7XHJcbiAgICAgICAgYnRuRGVsZXRlQWxsLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGRpc3BsYXkgY29uZmlybWF0aW9uIG1lc3NhZ2VcclxuICAgICAgICAgICAgZGlzcGxheU1vZGFsKHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAncmVkJyxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnQ29uZmlybWF0aW9uJyxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIGFsbCBwcm9qZWN0cz8nLFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1llcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkYW5nZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUGVyZm9ybSBhY3Rpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBtb2RlbC5nZXRDdXJyZW50VXNlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGF0YWJhc2VBUEkuZGVsZXRlUHJvamVjdHMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlci5tb2RlbC5nZXRQcm9qZWN0cygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIubW9kZWwuc2V0UHJvamVjdHMoW10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSB1aVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVkcmF3RGFzaGJvYXJkKFtdLCBtb2RlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbm90aWZ5IHVzZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5UG9wdXAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2dyZWVuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzZnVsIGFjdGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnU3VjY2Vzc2Z1bGx5IGRlbGV0ZWQgYWxsIHByb2plY3RzLicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ05vJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3NlY29uZGFyeScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkcm9wZG93bkl0ZW1zLnB1c2goYnRuRGVsZXRlQWxsKTtcclxuXHJcbiAgICAgICAgLy8gQWN0aW9uIGJ1dHRvblxyXG4gICAgICAgIGNvbnN0IGRyb3Bkb3duID0gZHJhd0Ryb3Bkb3duQnV0dG9uKHBhcmVudCwgJ2J0bkFjdGlvbicsIGRyb3Bkb3duSXRlbXMpO1xyXG4gICAgICAgIGNvbnN0IGJ0bkFjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGRyb3Bkb3duLmFwcGVuZENoaWxkKGJ0bkFjdGlvbik7XHJcbiAgICAgICAgYnRuQWN0aW9uLmNsYXNzTmFtZSA9ICdidG4gYnRuLWxpZ2h0IGRyb3Bkb3duLXRvZ2dsZSBtZW51QnV0dG9uJztcclxuICAgICAgICBidG5BY3Rpb24uaWQgPSAnYnRuQWN0aW9uJztcclxuICAgICAgICBidG5BY3Rpb24uc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICdkcm9wZG93bicpO1xyXG4gICAgICAgIGJ0bkFjdGlvbi5pbm5lckhUTUwgPSAnQWN0aW9uJztcclxuICAgIH1cclxuXHJcbiAgICBkcmF3RmlsdGVyRHJvcGRvd24ocGFyZW50OiBIVE1MRGl2RWxlbWVudCwgbW9kZWw6IE1hbmFnZXJNb2RlbCkge1xyXG4gICAgICAgIC8vIEZpbHRlciBkcm9wZG93blxyXG4gICAgICAgIGxldCBkcm9wZG93bkl0ZW1zOiBIVE1MRWxlbWVudFtdID0gW107XHJcbiAgICAgICAgY29uc3QgdXNlciA9IG1vZGVsLmdldEN1cnJlbnRVc2VyKCk7XHJcbiAgICAgICAgY29uc3QgcHJvamVjdHMgPSB1c2VyLm1vZGVsLmdldFByb2plY3RzKCk7XHJcblxyXG4gICAgICAgIC8vIEZpbHRlciBBTEwgcHJvamVjdHNcclxuICAgICAgICBjb25zdCBidG5GaWx0ZXJBbGwgPSB0aGlzLmNyZWF0ZUZpbHRlckRyb3Bkb3duSXRlbShcclxuICAgICAgICAgICAgJ0FsbCDinJMnLFxyXG4gICAgICAgICAgICBtb2RlbCxcclxuICAgICAgICAgICAgZHJvcGRvd25JdGVtc1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgZHJvcGRvd25JdGVtcy5wdXNoKGJ0bkZpbHRlckFsbCk7XHJcblxyXG4gICAgICAgIC8vIEZpbHRlciBUTyBETyBwcm9qZWN0c1xyXG4gICAgICAgIGNvbnN0IGJ0bkZpbHRlclRvRG8gPSB0aGlzLmNyZWF0ZUZpbHRlckRyb3Bkb3duSXRlbShcclxuICAgICAgICAgICAgJ1RvIGRvJyxcclxuICAgICAgICAgICAgbW9kZWwsXHJcbiAgICAgICAgICAgIGRyb3Bkb3duSXRlbXMsXHJcbiAgICAgICAgICAgIFRhc2tTdGF0ZS5UT19ET1xyXG4gICAgICAgICk7XHJcbiAgICAgICAgZHJvcGRvd25JdGVtcy5wdXNoKGJ0bkZpbHRlclRvRG8pO1xyXG5cclxuICAgICAgICAvLyBGaWx0ZXIgSU4gUFJPR1JFU1MgcHJvamVjdHNcclxuICAgICAgICBjb25zdCBidG5JblByb2dyZXNzID0gdGhpcy5jcmVhdGVGaWx0ZXJEcm9wZG93bkl0ZW0oXHJcbiAgICAgICAgICAgICdJbiBwcm9ncmVzcycsXHJcbiAgICAgICAgICAgIG1vZGVsLFxyXG4gICAgICAgICAgICBkcm9wZG93bkl0ZW1zLFxyXG4gICAgICAgICAgICBUYXNrU3RhdGUuSU5fUFJPR1JFU1NcclxuICAgICAgICApO1xyXG4gICAgICAgIGRyb3Bkb3duSXRlbXMucHVzaChidG5JblByb2dyZXNzKTtcclxuXHJcbiAgICAgICAgLy8gRmlsdGVyIEZJTklTSEVEIHByb2plY3RzXHJcbiAgICAgICAgY29uc3QgYnRuRmluaXNoZWQgPSB0aGlzLmNyZWF0ZUZpbHRlckRyb3Bkb3duSXRlbShcclxuICAgICAgICAgICAgJ0ZpbmlzaGVkJyxcclxuICAgICAgICAgICAgbW9kZWwsXHJcbiAgICAgICAgICAgIGRyb3Bkb3duSXRlbXMsXHJcbiAgICAgICAgICAgIFRhc2tTdGF0ZS5GSU5JU0hFRFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgZHJvcGRvd25JdGVtcy5wdXNoKGJ0bkZpbmlzaGVkKTtcclxuXHJcbiAgICAgICAgLy8gRmlsdGVyIGJ1dHRvblxyXG4gICAgICAgIGNvbnN0IGRyb3Bkb3duID0gZHJhd0Ryb3Bkb3duQnV0dG9uKFxyXG4gICAgICAgICAgICBwYXJlbnQsXHJcbiAgICAgICAgICAgICdidG5GaWx0ZXJEcm9wZG93bicsXHJcbiAgICAgICAgICAgIGRyb3Bkb3duSXRlbXNcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGJ0bkZpbHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGRyb3Bkb3duLmFwcGVuZENoaWxkKGJ0bkZpbHRlcik7XHJcbiAgICAgICAgYnRuRmlsdGVyLmNsYXNzTmFtZSA9ICdidG4gYnRuLWxpZ2h0IGRyb3Bkb3duLXRvZ2dsZSBtZW51QnV0dG9uJztcclxuICAgICAgICBidG5GaWx0ZXIuaWQgPSAnYnRuRmlsdGVyRHJvcGRvd24nO1xyXG4gICAgICAgIGJ0bkZpbHRlci5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9nZ2xlJywgJ2Ryb3Bkb3duJyk7XHJcbiAgICAgICAgYnRuRmlsdGVyLmlubmVySFRNTCA9ICdGaWx0ZXInO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUZpbHRlckRyb3Bkb3duSXRlbShcclxuICAgICAgICBidG5UZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgbW9kZWw6IE1hbmFnZXJNb2RlbCxcclxuICAgICAgICBkcm9wZG93bkl0ZW1zOiBIVE1MRWxlbWVudFtdLFxyXG4gICAgICAgIHN0YXRlOiBUYXNrU3RhdGUgPSBudWxsXHJcbiAgICApOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgIGJ0bi5jbGFzc05hbWUgPSAnZHJvcGRvd24taXRlbSc7XHJcbiAgICAgICAgYnRuLmlubmVySFRNTCA9IGJ0blRleHQ7XHJcbiAgICAgICAgYnRuLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZXIgPSBtb2RlbC5nZXRDdXJyZW50VXNlcigpLm1vZGVsO1xyXG4gICAgICAgICAgICBpZiAoc3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVkcmF3RGFzaGJvYXJkKFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmdldFByb2plY3RzKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwOiBQcm9qZWN0KSA9PiBwLm1vZGVsLmdldFByb2plY3RTdGF0ZSgpID09PSBzdGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9IGVsc2UgdGhpcy5yZWRyYXdEYXNoYm9hcmQodXNlci5nZXRQcm9qZWN0cygpLCBtb2RlbCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlRmlsdGVyaW5nQ2hlY2ttYXJrKGRyb3Bkb3duSXRlbXMsIGJ0bik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gYnRuO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZUZpbHRlcmluZ0NoZWNrbWFyayhkcm9wZG93bkl0ZW1zOiBFbGVtZW50W10sIHNlbGVjdGVkSXRlbTogRWxlbWVudCkge1xyXG4gICAgICAgIC8vIG1ha2UgdGhpcyBzb3J0aW5nIG1ldGhvZCBhY3RpdmVcclxuICAgICAgICBkcm9wZG93bkl0ZW1zLm1hcChcclxuICAgICAgICAgICAgKGVsKSA9PiAoZWwuaW5uZXJIVE1MID0gZWwuaW5uZXJIVE1MLnJlcGxhY2UoJyDinJMnLCAnJykpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBzZWxlY3RlZEl0ZW0uaW5uZXJIVE1MICs9ICcg4pyTJztcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VTb3J0aW5nTWV0aG9kKFxyXG4gICAgICAgIG1ldGhvZDogJ2dldFRpbWVzdGFtcCcgfCAnZ2V0RHVlRGF0ZScgfCAnZ2V0TnVtT2ZUYXNrcycsXHJcbiAgICAgICAgc29ydGluZ0J1dHRvbkVsOiBIVE1MRWxlbWVudCxcclxuICAgICAgICBkcm9wZG93bkFycmF5OiBIVE1MRWxlbWVudFtdLFxyXG4gICAgICAgIG1vZGVsOiBNYW5hZ2VyTW9kZWwsXHJcbiAgICAgICAgcmV2ZXJzZU9wZXJhdG9yczogYm9vbGVhbiA9IGZhbHNlXHJcbiAgICApIHtcclxuICAgICAgICAvLyBtYWtlIHRoaXMgc29ydGluZyBtZXRob2QgYWN0aXZlXHJcbiAgICAgICAgZHJvcGRvd25BcnJheS5tYXAoXHJcbiAgICAgICAgICAgIChlbCkgPT4gKGVsLmlubmVySFRNTCA9IGVsLmlubmVySFRNTC5yZXBsYWNlKCcg4pyTJywgJycpKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgc29ydGluZ0J1dHRvbkVsLmlubmVySFRNTCArPSAnIOKckyc7XHJcblxyXG4gICAgICAgIC8vIGFwcGx5IHNvcnRpbmcgbWV0aG9kXHJcbiAgICAgICAgY29uc3QgdXNlciA9IG1vZGVsLmdldEN1cnJlbnRVc2VyKCk7XHJcbiAgICAgICAgdXNlci5tb2RlbC5zb3J0UHJvamVjdHMobWV0aG9kLCByZXZlcnNlT3BlcmF0b3JzKTtcclxuXHJcbiAgICAgICAgLy8gcmVkcmF3IGRhc2hib2FyZFxyXG4gICAgICAgIHRoaXMucmVkcmF3RGFzaGJvYXJkKHVzZXIubW9kZWwuZ2V0UHJvamVjdHMoKSwgbW9kZWwpO1xyXG5cclxuICAgICAgICAvLyByZXNldCBmaWx0ZXJpbmcgbWV0aG9kXHJcbiAgICAgICAgY29uc3QgZmlsdGVyRHJvcGRvd25JdGVtcyA9XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5GaWx0ZXJEcm9wZG93bicpLnBhcmVudEVsZW1lbnRcclxuICAgICAgICAgICAgICAgIC5jaGlsZHJlblswXS5jaGlsZHJlbjtcclxuICAgICAgICBjb25zdCBpdGVtczogRWxlbWVudFtdID0gQXJyYXkuZnJvbShmaWx0ZXJEcm9wZG93bkl0ZW1zKTtcclxuICAgICAgICB0aGlzLmNoYW5nZUZpbHRlcmluZ0NoZWNrbWFyayhpdGVtcywgaXRlbXNbMF0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZHJhd0Rhc2hib2FyZChcclxuICAgICAgICBwcm9qZWN0czogUHJvamVjdFtdLFxyXG4gICAgICAgIG1vZGVsOiBNYW5hZ2VyTW9kZWwsXHJcbiAgICAgICAgY2xpY2thYmxlUHJvamVjdHM6IGJvb2xlYW4gPSB0cnVlXHJcbiAgICApIHtcclxuICAgICAgICAvLyBjbGVhciBlbXB0eSBkYXNoYm9hcmQgbWVzc2FnZSAoaWYgZXhpc3RzKVxyXG4gICAgICAgIGNvbnN0IGVtcHR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcclxuICAgICAgICAgICAgJ2VtcHR5RGFzaGJvYXJkTWVzc2FnZSdcclxuICAgICAgICApWzBdO1xyXG4gICAgICAgIGlmIChlbXB0eSkgZW1wdHkucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgIC8vIGNsZWFyIHByZXZpb3VzIGRhc2hib2FyZFxyXG4gICAgICAgIGNvbnN0IGRhc2hib2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Rhc2hib2FyZCcpWzBdO1xyXG4gICAgICAgIHJlbW92ZUVsZW1lbnRzQ2hpbGRyZW4oZGFzaGJvYXJkKTtcclxuXHJcbiAgICAgICAgLy8gcmVkcmF3XHJcbiAgICAgICAgdGhpcy5kcmF3RGFzaGJvYXJkKHByb2plY3RzLCBtb2RlbCwgY2xpY2thYmxlUHJvamVjdHMpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IE1hbmFnZXJNb2RlbCB9IGZyb20gJy4uL21hbmFnZXIvbW9kZWwnO1xyXG5pbXBvcnQgeyBQcm9qZWN0TW9kZWwgfSBmcm9tICcuL21vZGVsJztcclxuaW1wb3J0IHsgUHJvamVjdFZpZXcgfSBmcm9tICcuL3ZpZXcnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3Qge1xyXG4gICAgcHVibGljIG1vZGVsOiBQcm9qZWN0TW9kZWw7XHJcbiAgICBwdWJsaWMgdmlldzogUHJvamVjdFZpZXc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgbmFtZTogc3RyaW5nLCBkdWVEYXRlOiBEYXRlLCB0aW1lc3RhbXA6IERhdGUpIHtcclxuICAgICAgICB0aGlzLm1vZGVsID0gbmV3IFByb2plY3RNb2RlbChpZCwgbmFtZSwgZHVlRGF0ZSwgdGltZXN0YW1wKTtcclxuICAgICAgICB0aGlzLnZpZXcgPSBuZXcgUHJvamVjdFZpZXcoKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3UHJldmlldyhcclxuICAgICAgICBwYXJlbnQ6IEhUTUxFbGVtZW50LFxyXG4gICAgICAgIGdvQmFja0Z1bmN0aW9uQ2FsbGJhY2s6IEZ1bmN0aW9uLFxyXG4gICAgICAgIG1hbmFnZXJNb2RlbDogTWFuYWdlck1vZGVsLFxyXG4gICAgICAgIGNsaWNrYWJsZTogYm9vbGVhbiA9IHRydWVcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMudmlldy5kcmF3UHJldmlldyhcclxuICAgICAgICAgICAgcGFyZW50LFxyXG4gICAgICAgICAgICB0aGlzLm1vZGVsLFxyXG4gICAgICAgICAgICBnb0JhY2tGdW5jdGlvbkNhbGxiYWNrLFxyXG4gICAgICAgICAgICBtYW5hZ2VyTW9kZWwsXHJcbiAgICAgICAgICAgIGNsaWNrYWJsZVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZm9ybWF0LCBmb3JtYXREaXN0YW5jZSB9IGZyb20gJ2RhdGUtZm5zJztcclxuaW1wb3J0IHsgVGFzayB9IGZyb20gJy4uL3Rhc2svY29udHJvbGxlcic7XHJcbmltcG9ydCB7IFRhc2tTdGF0ZSB9IGZyb20gJy4uL3V0aWxzL3Rhc2tTdGF0ZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvamVjdE1vZGVsIHtcclxuICAgIHByaXZhdGUgaWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHRhc2tzOiBUYXNrW107XHJcbiAgICBwcml2YXRlIGR1ZURhdGU6IERhdGU7XHJcbiAgICBwcml2YXRlIHRpbWVzdGFtcDogRGF0ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIGR1ZURhdGU6IERhdGUsIHRpbWVzdGFtcDogRGF0ZSkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMudGFza3MgPSBbXTtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRoaXMudGltZXN0YW1wID0gdGltZXN0YW1wO1xyXG4gICAgfVxyXG5cclxuICAgIGdldElkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGFza3MoKTogVGFza1tdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50YXNrcztcclxuICAgIH1cclxuXHJcbiAgICBnZXROdW1PZlRhc2tzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3MubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFRhc2tzKHQ6IFRhc2tbXSkge1xyXG4gICAgICAgIGlmICh0ID09PSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy50YXNrcyA9IHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RHVlRGF0ZSgpOiBEYXRlIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUodGhpcy5kdWVEYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXREdWVEYXRlKGQ6IERhdGUpIHtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldER1ZURhdGVGb3JtYXR0ZWQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gZm9ybWF0KHRoaXMuZ2V0RHVlRGF0ZSgpLCAneXl5eS1NTS1kZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRpbWVzdGFtcCgpOiBEYXRlIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUodGhpcy50aW1lc3RhbXApO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRhc2sodDogVGFzaykge1xyXG4gICAgICAgIHRoaXMudGFza3MucHVzaCh0KTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVUYXNrKGlkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnRhc2tzID0gdGhpcy50YXNrcy5maWx0ZXIoKHQ6IFRhc2spID0+IHQubW9kZWwuZ2V0SWQoKSAhPT0gaWQpO1xyXG4gICAgfVxyXG5cclxuICAgIG1hcmtBc0ZpbmlzaGVkKCkge1xyXG4gICAgICAgIHRoaXMudGFza3MubWFwKCh0YXNrOiBUYXNrKSA9PiB7XHJcbiAgICAgICAgICAgIHRhc2subW9kZWwuc2V0U3RhdGUoVGFza1N0YXRlLkZJTklTSEVEKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQZXJjZW50YWdlRG9uZSgpOiBudW1iZXIge1xyXG4gICAgICAgIGlmICh0aGlzLnRhc2tzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIDA7XHJcblxyXG4gICAgICAgIGNvbnN0IG51bU9mVGFza3MgPSB0aGlzLnRhc2tzLmxlbmd0aDtcclxuICAgICAgICBjb25zdCBudW1PZkZpbmlzaGVkVGFza3MgPSB0aGlzLmdldE51bU9mVGFza3NJblN0YXRlKFxyXG4gICAgICAgICAgICBUYXNrU3RhdGUuRklOSVNIRURcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IG51bU9mSW5Qcm9ncmVzc1Rhc2tzID0gdGhpcy5nZXROdW1PZlRhc2tzSW5TdGF0ZShcclxuICAgICAgICAgICAgVGFza1N0YXRlLklOX1BST0dSRVNTXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoXHJcbiAgICAgICAgICAgICgobnVtT2ZGaW5pc2hlZFRhc2tzICsgbnVtT2ZJblByb2dyZXNzVGFza3MgLyAyKSAvIG51bU9mVGFza3MpICogMTAwXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXROdW1PZlRhc2tzSW5TdGF0ZShzdGF0ZTogVGFza1N0YXRlKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50YXNrcy5yZWR1Y2UoKGFjYzogbnVtYmVyLCBjdXJyOiBUYXNrKTogbnVtYmVyID0+IHtcclxuICAgICAgICAgICAgaWYgKGN1cnIubW9kZWwuZ2V0U3RhdGUoKSA9PT0gc3RhdGUpIGFjYyArPSAxO1xyXG4gICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRpbWVSZW1haW5pbmcoYWRkU3VmZml4OiBib29sZWFuID0gZmFsc2UsIHJlZlRpbWU6IERhdGUgPSBudWxsKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCByZWZmZXJlbmNlVGltZTogRGF0ZSA9IHJlZlRpbWUgPyByZWZUaW1lIDogdGhpcy5nZXREdWVEYXRlKCk7XHJcbiAgICAgICAgaWYgKHJlZmZlcmVuY2VUaW1lIDwgbmV3IERhdGUoKSlcclxuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdERpc3RhbmNlKHJlZmZlcmVuY2VUaW1lLCBuZXcgRGF0ZSgpLCB7XHJcbiAgICAgICAgICAgICAgICBhZGRTdWZmaXg6IGFkZFN1ZmZpeCxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgZWxzZSByZXR1cm4gZm9ybWF0RGlzdGFuY2UocmVmZmVyZW5jZVRpbWUsIG5ldyBEYXRlKCkpICsgJyBsZWZ0JztcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcm9qZWN0U3RhdGUoKTogVGFza1N0YXRlIHtcclxuICAgICAgICBjb25zdCBudW1PZlRhc2tzID0gdGhpcy5nZXROdW1PZlRhc2tzKCk7XHJcbiAgICAgICAgaWYgKG51bU9mVGFza3MgPT09IDApIHJldHVybiBUYXNrU3RhdGUuVE9fRE87XHJcblxyXG4gICAgICAgIGxldCByZXN1bHQgPSBUYXNrU3RhdGUuVE9fRE87XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1PZlRhc2tzOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudFRhc2tTdGF0ZSA9IHRoaXMudGFza3NbaV0ubW9kZWwuZ2V0U3RhdGUoKTtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFRhc2tTdGF0ZSA9PT0gVGFza1N0YXRlLklOX1BST0dSRVNTIHx8XHJcbiAgICAgICAgICAgICAgICAocmVzdWx0ID09PSBUYXNrU3RhdGUuRklOSVNIRUQgJiZcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGFza1N0YXRlID09PSBUYXNrU3RhdGUuVE9fRE8pXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gVGFza1N0YXRlLklOX1BST0dSRVNTO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50VGFza1N0YXRlID09PSBUYXNrU3RhdGUuRklOSVNIRUQpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IFRhc2tTdGF0ZS5GSU5JU0hFRDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG5cclxuICAgICAgICAvLyBjb25zdCBudW1PZlRvRG9UYXNrcyA9IHRoaXMuZ2V0TnVtT2ZUYXNrc0luU3RhdGUoVGFza1N0YXRlLlRPX0RPKTtcclxuICAgICAgICAvLyBjb25zdCBudW1PZkluUHJvZ3Jlc3NUYXNrcyA9IHRoaXMuZ2V0TnVtT2ZUYXNrc0luU3RhdGUoVGFza1N0YXRlLklOX1BST0dSRVNTKTtcclxuICAgICAgICAvLyBjb25zdCBudW1PZkZpbmlzaGVkVGFza3MgPSB0aGlzLmdldE51bU9mVGFza3NJblN0YXRlKFRhc2tTdGF0ZS5GSU5JU0hFRCk7XHJcblxyXG4gICAgICAgIC8vIGlmIChudW1PZlRvRG9UYXNrcyA9PT0gbnVtT2ZUYXNrcykgcmV0dXJuIFRhc2tTdGF0ZS5UT19ETztcclxuICAgICAgICAvLyBpZiAobnVtT2ZJblByb2dyZXNzVGFza3MgPiAwKSByZXR1cm4gVGFza1N0YXRlLklOX1BST0dSRVNTO1xyXG4gICAgICAgIC8vIGlmIChudW1PZkZpbmlzaGVkVGFza3MgPT09IG51bU9mVGFza3MpIHJldHVybiBUYXNrU3RhdGUuRklOSVNIRUQ7XHJcblxyXG4gICAgICAgIC8vIHJldHVybiBUYXNrU3RhdGUuSU5fUFJPR1JFU1M7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGFza3NJblN0YXRlKHN0YXRlOiBUYXNrU3RhdGUpOiBUYXNrW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tzLmZpbHRlcigodDogVGFzaykgPT4gdC5tb2RlbC5nZXRTdGF0ZSgpID09PSBzdGF0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGVQcm9qZWN0SW5wdXQocHJvamVjdE5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmIChwcm9qZWN0TmFtZSA9PT0gJycpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRGF0YWJhc2VBUEkgfSBmcm9tICcuLi91dGlscy9kYXRhYmFzZUFQSSc7XHJcbmltcG9ydCB7IE1hbmFnZXJNb2RlbCB9IGZyb20gJy4uL21hbmFnZXIvbW9kZWwnO1xyXG5pbXBvcnQgeyBNYW5hZ2VyVmlldyB9IGZyb20gJy4uL21hbmFnZXIvdmlldyc7XHJcbmltcG9ydCB7IFRhc2sgfSBmcm9tICcuLi90YXNrL2NvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBUYXNrU3RhdGUgfSBmcm9tICcuLi91dGlscy90YXNrU3RhdGUnO1xyXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi9jb250cm9sbGVyJztcclxuaW1wb3J0IHsgUHJvamVjdE1vZGVsIH0gZnJvbSAnLi9tb2RlbCc7XHJcbmltcG9ydCB7IHJlbW92ZUVsZW1lbnRzQ2hpbGRyZW4gfSBmcm9tICcuLi91dGlscy9yZW1vdmVFbGVtZW50c0NoaWxkcmVuJztcclxuaW1wb3J0IHsgc2hvcnRlblN0cmluZyB9IGZyb20gJy4uL3V0aWxzL3Nob3J0ZW5TdHJpbmcnO1xyXG5pbXBvcnQgeyBkaXNwbGF5UG9wdXAgfSBmcm9tICcuLi91dGlscy90b2FzdCc7XHJcbmltcG9ydCB7IGRyYXdEcm9wZG93bkJ1dHRvbiB9IGZyb20gJy4uL3V0aWxzL2Ryb3Bkb3duJztcclxuaW1wb3J0IHsgZGlzcGxheU1vZGFsIH0gZnJvbSAnLi4vdXRpbHMvbW9kYWwnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb2plY3RWaWV3IHtcclxuICAgIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XHJcbiAgICBwYXJlbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuY2xhc3NOYW1lID0gJ3Byb2plY3QnO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdQcmV2aWV3KFxyXG4gICAgICAgIHBhcmVudDogSFRNTEVsZW1lbnQsXHJcbiAgICAgICAgbW9kZWw6IFByb2plY3RNb2RlbCxcclxuICAgICAgICBnb0JhY2tGdW5jdGlvbkNhbGxiYWNrOiBGdW5jdGlvbixcclxuICAgICAgICBtYW5hZ2VyTW9kZWw6IE1hbmFnZXJNb2RlbCxcclxuICAgICAgICBjbGlja2FibGU6IGJvb2xlYW4gPSB0cnVlXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuXHJcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGNhcmQuY2xhc3NOYW1lID0gJ2NhcmQgcHJvamVjdCc7XHJcbiAgICAgICAgY2FyZC5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY2xpY2thYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgYWxsIHByb2plY3QgcHJldmlld3NcclxuICAgICAgICAgICAgICAgIHJlbW92ZUVsZW1lbnRzQ2hpbGRyZW4ocGFyZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBkaXNwbGF5IHByb2plY3QgZWRpdG9yXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdFZGl0b3IoXHJcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLFxyXG4gICAgICAgICAgICAgICAgICAgIGdvQmFja0Z1bmN0aW9uQ2FsbGJhY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgbWFuYWdlck1vZGVsXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2FyZCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgICAgY29uc3QgcmFuZEltYWdlTnVtYmVyID0gTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiA2KTtcclxuICAgICAgICBpbWFnZS5jbGFzc05hbWUgPSBgY2FyZC1pbWctdG9wIGNhcmRJbWFnZSBjYXJkSW1hZ2Uke3JhbmRJbWFnZU51bWJlcn1gO1xyXG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG5cclxuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgYm9keS5jbGFzc05hbWUgPSAnY2FyZC1ib2R5JztcclxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGJvZHkpO1xyXG5cclxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgdGl0bGUuY2xhc3NOYW1lID0gJ2NhcmQtdGl0bGUnO1xyXG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9IHNob3J0ZW5TdHJpbmcobW9kZWwubmFtZSwgMTIpO1xyXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5cclxuICAgICAgICBjb25zdCBwZXJjZW50YWdlID0gbW9kZWwuZ2V0UGVyY2VudGFnZURvbmUoKTtcclxuICAgICAgICBjb25zdCBwZXJjZW50YWdlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdobGFiZWwxJyk7XHJcbiAgICAgICAgcGVyY2VudGFnZUxhYmVsLmNsYXNzTmFtZSA9ICdsYmxQcm9qZWN0UGVyY2VudGFnZSc7XHJcbiAgICAgICAgcGVyY2VudGFnZUxhYmVsLmlubmVySFRNTCA9IGAke3BlcmNlbnRhZ2V9JWA7XHJcbiAgICAgICAgYm9keS5hcHBlbmRDaGlsZChwZXJjZW50YWdlTGFiZWwpO1xyXG5cclxuICAgICAgICBjb25zdCB0aW1lTGVmdCA9IG1vZGVsLmdldFRpbWVSZW1haW5pbmcodHJ1ZSk7XHJcbiAgICAgICAgY29uc3QgZHVlT25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICAgICAgZHVlT25MYWJlbC5jbGFzc05hbWUgPSAnY2FyZC10ZXh0IGxibFRpbWVMZWZ0JztcclxuICAgICAgICBkdWVPbkxhYmVsLmlubmVySFRNTCA9IGDigKIgJHt0aW1lTGVmdH08L2JyPlxyXG4gICAgICAg4oCiICR7bW9kZWwuZ2V0TnVtT2ZUYXNrc0luU3RhdGUoXHJcbiAgICAgICAgICAgVGFza1N0YXRlLkZJTklTSEVEXHJcbiAgICAgICApfS8ke21vZGVsLmdldE51bU9mVGFza3MoKX0gdGFza3MgZmluaXNoZWRgO1xyXG4gICAgICAgIGJvZHkuYXBwZW5kQ2hpbGQoZHVlT25MYWJlbCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb2dyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcHJvZ3Jlc3MuY2xhc3NOYW1lID0gJ3Byb2dyZXNzJztcclxuICAgICAgICBib2R5LmFwcGVuZENoaWxkKHByb2dyZXNzKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBwcm9ncmVzc0Jhci5jbGFzc05hbWUgPSBgcHJvZ3Jlc3MtYmFyYDtcclxuICAgICAgICBwcm9ncmVzcy5hcHBlbmRDaGlsZChwcm9ncmVzc0Jhcik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGFuaW1hdGUgcHJvZ3Jlc3MgYmFyIGFmdGVyIHJlbmRlcmluZ1xyXG4gICAgICAgICAgICBwcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9IGAke3BlcmNlbnRhZ2V9JWA7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0VkaXRvcihcclxuICAgICAgICBwYXJlbnQ6IEhUTUxFbGVtZW50LFxyXG4gICAgICAgIG1vZGVsOiBQcm9qZWN0TW9kZWwgfCBudWxsLFxyXG4gICAgICAgIGdvQmFja0Z1bmN0aW9uQ2FsbGJhY2s6IEZ1bmN0aW9uLFxyXG4gICAgICAgIG1hbmFnZXJNb2RlbDogTWFuYWdlck1vZGVsXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcclxuXHJcbiAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBmYWxzZTtcclxuICAgICAgICBpZiAoIW1vZGVsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRvbW9ycm93c0RhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgICAgICB0b21vcnJvd3NEYXRlLnNldERhdGUodG9tb3Jyb3dzRGF0ZS5nZXREYXRlKCkgKyAxKTtcclxuICAgICAgICAgICAgbW9kZWwgPSBuZXcgUHJvamVjdE1vZGVsKHVuZGVmaW5lZCwgJycsIHRvbW9ycm93c0RhdGUsIG5ldyBEYXRlKCkpO1xyXG4gICAgICAgICAgICBuZXdQcm9qZWN0ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGVkaXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGVkaXRvci5jbGFzc05hbWUgPSAnZWRpdG9yJztcclxuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWRpdG9yKTtcclxuXHJcbiAgICAgICAgLy8gaGVhZGVyXHJcbiAgICAgICAgdGhpcy5kcmF3RWRpdG9ySGVhZGVyKFxyXG4gICAgICAgICAgICBlZGl0b3IsXHJcbiAgICAgICAgICAgIG1vZGVsLFxyXG4gICAgICAgICAgICBnb0JhY2tGdW5jdGlvbkNhbGxiYWNrLFxyXG4gICAgICAgICAgICBuZXdQcm9qZWN0LFxyXG4gICAgICAgICAgICBtYW5hZ2VyTW9kZWxcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBjb25zdCBzZXBhcmF0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xyXG4gICAgICAgIGVkaXRvci5hcHBlbmRDaGlsZChzZXBhcmF0b3IpO1xyXG5cclxuICAgICAgICAvLyB0YXNrIGRhc2hib2FyZFxyXG4gICAgICAgIHRoaXMuZHJhd1Rhc2tEYXNoYm9hcmQoZWRpdG9yLCBtb2RlbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0VkaXRvckhlYWRlcihcclxuICAgICAgICBwYXJlbnQ6IEhUTUxFbGVtZW50LFxyXG4gICAgICAgIG1vZGVsOiBQcm9qZWN0TW9kZWwsXHJcbiAgICAgICAgZ29CYWNrRnVuY3Rpb25DYWxsYmFjazogRnVuY3Rpb24sXHJcbiAgICAgICAgbmV3UHJvamVjdDogYm9vbGVhbixcclxuICAgICAgICBtYW5hZ2VyTW9kZWw6IE1hbmFnZXJNb2RlbFxyXG4gICAgKSB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgaGVhZGVyLmNsYXNzTmFtZSA9ICdlZGl0b3JIZWFkZXInO1xyXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG5cclxuICAgICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgICAgIGNvbnN0IHJhbmRJbWFnZU51bWJlciA9IE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogNik7XHJcbiAgICAgICAgaW1hZ2UuY2xhc3NOYW1lID0gYGltZ1Byb2plY3RIZWFkZXIgY2FyZEltYWdlJHtyYW5kSW1hZ2VOdW1iZXJ9YDtcclxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcHJvamVjdEhlYWRlci5jbGFzc05hbWUgPSAncHJvamVjdEhlYWRlcic7XHJcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKHByb2plY3RIZWFkZXIpO1xyXG5cclxuICAgICAgICBjb25zdCBpbnB1dE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGlucHV0TmFtZS5pZCA9ICdpbnB1dFByb2plY3ROYW1lJztcclxuICAgICAgICBpbnB1dE5hbWUucGxhY2Vob2xkZXIgPSAnUHJvamVjdCBuYW1lJztcclxuICAgICAgICBpbnB1dE5hbWUudHlwZSA9ICd0ZXh0JztcclxuICAgICAgICBpbnB1dE5hbWUubWF4TGVuZ3RoID0gMzA7XHJcbiAgICAgICAgaW5wdXROYW1lLmNsYXNzTmFtZSA9ICdmb3JtLWNvbnRyb2wgaW5wdXRQcm9qZWN0TmFtZSc7XHJcbiAgICAgICAgaW5wdXROYW1lLnZhbHVlID0gbW9kZWwubmFtZTtcclxuICAgICAgICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKGlucHV0TmFtZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ0bkJhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidG5CYWNrLmNsYXNzTmFtZSA9ICdidG4gYnRuLWxpZ2h0JztcclxuICAgICAgICBidG5CYWNrLmlubmVySFRNTCA9ICdCYWNrJztcclxuICAgICAgICBidG5CYWNrLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIHJlbW92ZSBlZGl0b3JcclxuICAgICAgICAgICAgcGFyZW50LnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gZHJhdyBkYXNoYm9hcmRcclxuICAgICAgICAgICAgZ29CYWNrRnVuY3Rpb25DYWxsYmFjaygpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcHJvamVjdEhlYWRlci5hcHBlbmRDaGlsZChidG5CYWNrKTtcclxuXHJcbiAgICAgICAgY29uc3QgYnRuU2F2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ0blNhdmUuY2xhc3NOYW1lID0gJ2J0biBidG4tc3VjY2Vzcyc7XHJcbiAgICAgICAgYnRuU2F2ZS5pbm5lckhUTUwgPSAnU2F2ZSc7XHJcbiAgICAgICAgYnRuU2F2ZS5vbmNsaWNrID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBzYXZpbmcgYW5pbWF0aW9uXHJcbiAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBhbmltYXRpb24uY2xhc3NOYW1lID0gJ3NwaW5uZXItYm9yZGVyIHNwaW5uZXItYm9yZGVyLXNtIHRleHQtbGlnaHQnO1xyXG4gICAgICAgICAgICBidG5TYXZlLmlubmVySFRNTCA9IGFuaW1hdGlvbi5vdXRlckhUTUw7XHJcblxyXG4gICAgICAgICAgICAvLyBzaG9ydCBkYXRhIHZhbGlkYXRpb25cclxuICAgICAgICAgICAgaWYgKCFtb2RlbC52YWxpZGF0ZVByb2plY3RJbnB1dChpbnB1dE5hbWUudmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5UG9wdXAoe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAncmVkJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0ludmFsaWQgaW5wdXQnLFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiUHJvamVjdCBuYW1lIGNhbid0IHJlbWFpbiBlbXB0eS5cIixcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnNhdmVEYXRhRnJvbUZvcm0obW9kZWwsIG5ld1Byb2plY3QsIG1hbmFnZXJNb2RlbCk7XHJcblxyXG4gICAgICAgICAgICAvLyByZW1vdmUgZWRpdG9yXHJcbiAgICAgICAgICAgIHBhcmVudC5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGRyYXcgZGFzaGJvYXJkXHJcbiAgICAgICAgICAgIGdvQmFja0Z1bmN0aW9uQ2FsbGJhY2soKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGRpc3BsYXkgbWVzc2FnZVxyXG4gICAgICAgICAgICBpZiAobmV3UHJvamVjdCkge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheVBvcHVwKHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2dyZWVuJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ05ldyBwcm9qZWN0JyxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU3VjY2Vzc2Z1bGx5IGFkZGVkIGEgbmV3IHByb2plY3QuJyxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheVBvcHVwKHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2dyZWVuJyxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ1N1Y2Nlc3NmdWwgdXBkYXRlJyxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU3VjY2Vzc2Z1bGx5IHVwZGF0ZWQgYSBwcm9qZWN0LicsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcHJvamVjdEhlYWRlci5hcHBlbmRDaGlsZChidG5TYXZlKTtcclxuXHJcbiAgICAgICAgdGhpcy5kcmF3T3B0aW9uc0Ryb3Bkb3duKFxyXG4gICAgICAgICAgICBwcm9qZWN0SGVhZGVyLFxyXG4gICAgICAgICAgICBtb2RlbCxcclxuICAgICAgICAgICAgZ29CYWNrRnVuY3Rpb25DYWxsYmFjayxcclxuICAgICAgICAgICAgbWFuYWdlck1vZGVsXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgY29uc3QgbGJsUHJvamVjdER1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGxibFByb2plY3REdWVEYXRlLmNsYXNzTmFtZSA9ICdsYmxQcm9qZWN0RHVlRGF0ZSc7XHJcbiAgICAgICAgbGJsUHJvamVjdER1ZURhdGUuaW5uZXJIVE1MID0gJ+KAoiBEdWUgZGF0ZTonO1xyXG4gICAgICAgIHByb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQobGJsUHJvamVjdER1ZURhdGUpO1xyXG5cclxuICAgICAgICBjb25zdCBpbnB1dFByb2plY3REdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBpbnB1dFByb2plY3REdWVEYXRlLmlkID0gJ2lucHV0UHJvamVjdER1ZURhdGUnO1xyXG4gICAgICAgIGlucHV0UHJvamVjdER1ZURhdGUuY2xhc3NOYW1lID0gJ2Zvcm0tY29udHJvbCc7XHJcbiAgICAgICAgaW5wdXRQcm9qZWN0RHVlRGF0ZS50eXBlID0gJ2RhdGUnO1xyXG4gICAgICAgIGlucHV0UHJvamVjdER1ZURhdGUudmFsdWUgPSBtb2RlbC5nZXREdWVEYXRlRm9ybWF0dGVkKCk7XHJcbiAgICAgICAgaW5wdXRQcm9qZWN0RHVlRGF0ZS5vbmNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgLy8gdXBkYXRlIFRpbWVMZWZ0IGxhYmVsXHJcbiAgICAgICAgICAgIHRoaXMuZXZhbHVhdGVUaW1lTGVmdChcclxuICAgICAgICAgICAgICAgIGxibFRpbWVMZWZ0LFxyXG4gICAgICAgICAgICAgICAgbW9kZWwsXHJcbiAgICAgICAgICAgICAgICBuZXcgRGF0ZShpbnB1dFByb2plY3REdWVEYXRlLnZhbHVlKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcHJvamVjdEhlYWRlci5hcHBlbmRDaGlsZChpbnB1dFByb2plY3REdWVEYXRlKTtcclxuXHJcbiAgICAgICAgY29uc3QgbGJsVGltZUxlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGxibFRpbWVMZWZ0LmNsYXNzTmFtZSA9ICdsYmxUaW1lTGVmdEVkaXRvcic7XHJcbiAgICAgICAgdGhpcy5ldmFsdWF0ZVRpbWVMZWZ0KFxyXG4gICAgICAgICAgICBsYmxUaW1lTGVmdCxcclxuICAgICAgICAgICAgbW9kZWwsXHJcbiAgICAgICAgICAgIG5ldyBEYXRlKGlucHV0UHJvamVjdER1ZURhdGUudmFsdWUpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKGxibFRpbWVMZWZ0KTtcclxuXHJcbiAgICAgICAgY29uc3QgbGJsVGFza3NEb25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBsYmxUYXNrc0RvbmUuY2xhc3NOYW1lID0gJ2xibFRhc2tzRG9uZSc7XHJcbiAgICAgICAgcHJvamVjdEhlYWRlci5hcHBlbmRDaGlsZChsYmxUYXNrc0RvbmUpO1xyXG5cclxuICAgICAgICBjb25zdCBsYmxQZXJjZW50YWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgICAgICBsYmxQZXJjZW50YWdlLmlkID0gJ2xibFBlcmNlbnRhZ2UnO1xyXG4gICAgICAgIHByb2plY3RIZWFkZXIuYXBwZW5kQ2hpbGQobGJsUGVyY2VudGFnZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHByb2dyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcHJvZ3Jlc3MuY2xhc3NOYW1lID0gJ3Byb2dyZXNzIHByb2dyZXNzRWRpdG9yJztcclxuICAgICAgICBwcm9qZWN0SGVhZGVyLmFwcGVuZENoaWxkKHByb2dyZXNzKTtcclxuXHJcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBwcm9ncmVzc0Jhci5jbGFzc05hbWUgPSBgcHJvZ3Jlc3MtYmFyYDtcclxuICAgICAgICBwcm9ncmVzcy5hcHBlbmRDaGlsZChwcm9ncmVzc0Jhcik7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGFuaW1hdGUgcHJvZ3Jlc3MgYmFyIGFmdGVyIHJlbmRlcmluZ1xyXG4gICAgICAgICAgICBQcm9qZWN0Vmlldy5ldmFsdWF0ZVRhc2tzRmluaXNoZWQoXHJcbiAgICAgICAgICAgICAgICBsYmxUYXNrc0RvbmUsXHJcbiAgICAgICAgICAgICAgICBsYmxQZXJjZW50YWdlLFxyXG4gICAgICAgICAgICAgICAgcHJvZ3Jlc3NCYXIsXHJcbiAgICAgICAgICAgICAgICBtb2RlbFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdUYXNrRGFzaGJvYXJkKHBhcmVudDogSFRNTEVsZW1lbnQsIG1vZGVsOiBQcm9qZWN0TW9kZWwpIHtcclxuICAgICAgICBjb25zdCB0YXNrc1RvRG86IFRhc2tbXSA9IG1vZGVsLmdldFRhc2tzSW5TdGF0ZShUYXNrU3RhdGUuVE9fRE8pO1xyXG4gICAgICAgIGNvbnN0IHRhc2tzSW5Qcm9ncmVzczogVGFza1tdID0gbW9kZWwuZ2V0VGFza3NJblN0YXRlKFxyXG4gICAgICAgICAgICBUYXNrU3RhdGUuSU5fUFJPR1JFU1NcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IHRhc2tzRmluaXNoZWQ6IFRhc2tbXSA9IG1vZGVsLmdldFRhc2tzSW5TdGF0ZShUYXNrU3RhdGUuRklOSVNIRUQpO1xyXG5cclxuICAgICAgICBjb25zdCBkYXNoYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBkYXNoYm9hcmQuY2xhc3NOYW1lID0gJ3Rhc2tEYXNoYm9hcmQnO1xyXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChkYXNoYm9hcmQpO1xyXG5cclxuICAgICAgICBsZXQgc2VjdGlvblRvRG8sIHNlY3Rpb25JblByb2dyZXNzLCBzZWN0aW9uRmluaXNoZWQ7XHJcblxyXG4gICAgICAgIHNlY3Rpb25Ub0RvID0gdGhpcy5jcmVhdGVTZWN0aW9uKG1vZGVsLCAnVG8gZG8nLCB0YXNrc1RvRG8pO1xyXG4gICAgICAgIGRhc2hib2FyZC5hcHBlbmRDaGlsZChzZWN0aW9uVG9Ebyk7XHJcblxyXG4gICAgICAgIGRhc2hib2FyZC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVNlcGFyYXRvcigpKTtcclxuXHJcbiAgICAgICAgc2VjdGlvbkluUHJvZ3Jlc3MgPSB0aGlzLmNyZWF0ZVNlY3Rpb24oXHJcbiAgICAgICAgICAgIG1vZGVsLFxyXG4gICAgICAgICAgICAnSW4gcHJvZ3Jlc3MnLFxyXG4gICAgICAgICAgICB0YXNrc0luUHJvZ3Jlc3NcclxuICAgICAgICApO1xyXG4gICAgICAgIGRhc2hib2FyZC5hcHBlbmRDaGlsZChzZWN0aW9uSW5Qcm9ncmVzcyk7XHJcblxyXG4gICAgICAgIGRhc2hib2FyZC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVNlcGFyYXRvcigpKTtcclxuXHJcbiAgICAgICAgc2VjdGlvbkZpbmlzaGVkID0gdGhpcy5jcmVhdGVTZWN0aW9uKG1vZGVsLCAnRmluaXNoZWQnLCB0YXNrc0ZpbmlzaGVkKTtcclxuICAgICAgICBkYXNoYm9hcmQuYXBwZW5kQ2hpbGQoc2VjdGlvbkZpbmlzaGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3T3B0aW9uc0Ryb3Bkb3duKFxyXG4gICAgICAgIHBhcmVudDogSFRNTEVsZW1lbnQsXHJcbiAgICAgICAgbW9kZWw6IFByb2plY3RNb2RlbCxcclxuICAgICAgICBnb0JhY2tGdW5jdGlvbkNhbGxiYWNrOiBGdW5jdGlvbixcclxuICAgICAgICBtYW5hZ2VyTW9kZWw6IE1hbmFnZXJNb2RlbFxyXG4gICAgKSB7XHJcbiAgICAgICAgbGV0IGRyb3Bkb3duSXRlbXM6IEhUTUxFbGVtZW50W10gPSBbXTtcclxuXHJcbiAgICAgICAgLy8gTWFyayBwcm9qZWN0IGFzIGZpbmlzaGVkXHJcbiAgICAgICAgY29uc3QgYnRuTWFyayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICBidG5NYXJrLmNsYXNzTmFtZSA9ICdkcm9wZG93bi1pdGVtJztcclxuICAgICAgICBidG5NYXJrLmlubmVySFRNTCA9ICdNYXJrIGFzIGZpbmlzaGVkJztcclxuICAgICAgICBidG5NYXJrLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXlNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0NvbmZpcm1hdGlvbicsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOlxyXG4gICAgICAgICAgICAgICAgICAgICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gbWFyayB0aGlzIHByb2plY3QgYXMgZmluaXNoZWQ/JyxcclxuICAgICAgICAgICAgICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6ICdZZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAncHJpbWFyeScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgcHJvamVjdCBpbiBtb2RlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwubWFya0FzRmluaXNoZWQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgdWlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhc2hib2FyZCA9IDxIVE1MRWxlbWVudD4oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZGFzaGJvYXJkJylbMF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVFbGVtZW50c0NoaWxkcmVuKGRhc2hib2FyZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdFZGl0b3IoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGFzaGJvYXJkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdvQmFja0Z1bmN0aW9uQ2FsbGJhY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFuYWdlck1vZGVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vdGlmeSB1c2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5UG9wdXAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JlZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnU3VjY2Vzc2Z1bCBhY3Rpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdTdWNjZXNzZnVsbHkgbWFya2VkIHByb2plY3QgYXMgZmluaXNoZWQuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnTm8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc2Vjb25kYXJ5JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGRyb3Bkb3duSXRlbXMucHVzaChidG5NYXJrKTtcclxuXHJcbiAgICAgICAgLy8gRGVsZXRlIHByb2plY3RcclxuICAgICAgICBjb25zdCBidG5EZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgYnRuRGVsZXRlLmNsYXNzTmFtZSA9ICdkcm9wZG93bi1pdGVtJztcclxuICAgICAgICBidG5EZWxldGUuaW5uZXJIVE1MID0gJ0RlbGV0ZSBwcm9qZWN0JztcclxuICAgICAgICBidG5EZWxldGUub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgZGlzcGxheU1vZGFsKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnQ29uZmlybWF0aW9uJyxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgcHJvamVjdD8nLFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ1llcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkYW5nZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGVsZXRlIHByb2plY3QgaW4gbW9kZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbmFnZXJNb2RlbC5kZWxldGVQcm9qZWN0KG1vZGVsLmdldElkKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRlbGV0ZSBwcm9qZWN0IGluIGRhdGFiYXNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBEYXRhYmFzZUFQSS5kZWxldGVQcm9qZWN0cyhbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFByb2plY3QoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLmdldElkKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLmdldER1ZURhdGUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwuZ2V0VGltZXN0YW1wKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRlIHVpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXNoYm9hcmQgPSA8SFRNTEVsZW1lbnQ+KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Rhc2hib2FyZCcpWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlRWxlbWVudHNDaGlsZHJlbihkYXNoYm9hcmQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ29CYWNrRnVuY3Rpb25DYWxsYmFjaygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5vdGlmeSB1c2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5UG9wdXAoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnZ3JlZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnU3VjY2Vzc2Z1bCBhY3Rpb24nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTdWNjZXNzZnVsbHkgZGVsZXRlZCBwcm9qZWN0LicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ05vJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3NlY29uZGFyeScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiAoKSA9PiB7fSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBkcm9wZG93bkl0ZW1zLnB1c2goYnRuRGVsZXRlKTtcclxuXHJcbiAgICAgICAgY29uc3QgZHJvcGRvd24gPSBkcmF3RHJvcGRvd25CdXR0b24oXHJcbiAgICAgICAgICAgIHBhcmVudCxcclxuICAgICAgICAgICAgJ2J0bk9wdGlvbnMnLFxyXG4gICAgICAgICAgICBkcm9wZG93bkl0ZW1zXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBkcm9wZG93bkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGRyb3Bkb3duLmFwcGVuZENoaWxkKGRyb3Bkb3duQnV0dG9uKTtcclxuICAgICAgICBkcm9wZG93bkJ1dHRvbi5jbGFzc05hbWUgPSAnYnRuIGJ0bi1saWdodCc7XHJcbiAgICAgICAgZHJvcGRvd25CdXR0b24uaWQgPSAnYnRuT3B0aW9ucyc7XHJcbiAgICAgICAgZHJvcGRvd25CdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLXRvZ2dsZScsICdkcm9wZG93bicpO1xyXG4gICAgICAgIGRyb3Bkb3duQnV0dG9uLmlubmVySFRNTCA9ICfii64nO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVNlY3Rpb24oXHJcbiAgICAgICAgbW9kZWw6IFByb2plY3RNb2RlbCxcclxuICAgICAgICBzZWN0aW9uTmFtZTogc3RyaW5nLFxyXG4gICAgICAgIHRhc2tzOiBUYXNrW11cclxuICAgICk6IEhUTUxFbGVtZW50IHtcclxuICAgICAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgc2VjdGlvbi5jbGFzc05hbWUgPSAndGFza0Rhc2hib2FyZFNlY3Rpb24nO1xyXG4gICAgICAgIGNvbnN0IGxibFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICAgICAgbGJsU2VjdGlvbi5jbGFzc05hbWUgPSAnbGJsU2VjdGlvbic7XHJcbiAgICAgICAgbGJsU2VjdGlvbi5pbm5lckhUTUwgPSBzZWN0aW9uTmFtZTtcclxuICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGxibFNlY3Rpb24pO1xyXG5cclxuICAgICAgICB0YXNrcy5mb3JFYWNoKCh0OiBUYXNrKSA9PlxyXG4gICAgICAgICAgICB0LnZpZXcuZHJhd1ByZXZpZXcoc2VjdGlvbiwgdC5tb2RlbCwgbW9kZWwsIHNlY3Rpb25OYW1lLCBudWxsKVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJ0bkFkZFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBidG5BZGRUYXNrLmNsYXNzTmFtZSA9ICdidG5BZGRUYXNrJztcclxuICAgICAgICBidG5BZGRUYXNrLm9ubW91c2VlbnRlciA9ICgpID0+IHtcclxuICAgICAgICAgICAgbGJsQWRkVGFzay5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBidG5BZGRUYXNrLm9ubW91c2VsZWF2ZSA9IGJ0bkFkZFRhc2sub25tb3VzZWVudGVyO1xyXG4gICAgICAgIGJ0bkFkZFRhc2sub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgLy8gY3JlYXRlIG5ldyB0YXNrXHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID1cclxuICAgICAgICAgICAgICAgIHNlY3Rpb25OYW1lID09PSAnVG8gZG8nXHJcbiAgICAgICAgICAgICAgICAgICAgPyBUYXNrU3RhdGUuVE9fRE9cclxuICAgICAgICAgICAgICAgICAgICA6IHNlY3Rpb25OYW1lID09PSAnSW4gcHJvZ3Jlc3MnXHJcbiAgICAgICAgICAgICAgICAgICAgPyBUYXNrU3RhdGUuSU5fUFJPR1JFU1NcclxuICAgICAgICAgICAgICAgICAgICA6IFRhc2tTdGF0ZS5GSU5JU0hFRDtcclxuICAgICAgICAgICAgY29uc3QgbmV3VGFzazogVGFzayA9IG5ldyBUYXNrKHVuZGVmaW5lZCwgJycsIHN0YXRlKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGRyYXcgdGFzayBlZGl0b3JcclxuICAgICAgICAgICAgbmV3VGFzay52aWV3LmRyYXdQcmV2aWV3KFxyXG4gICAgICAgICAgICAgICAgc2VjdGlvbixcclxuICAgICAgICAgICAgICAgIG5ld1Rhc2subW9kZWwsXHJcbiAgICAgICAgICAgICAgICBtb2RlbCxcclxuICAgICAgICAgICAgICAgIHNlY3Rpb25OYW1lLFxyXG4gICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgIGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbmV3VGFza1xyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgLy8gbW92ZSBhZGQgdGFzayBidXR0b24gdG8gYm90dG9tXHJcbiAgICAgICAgICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoYnRuQWRkVGFzayk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGJ0bkFkZFRhc2spO1xyXG5cclxuICAgICAgICBjb25zdCBpY29uUGx1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcclxuICAgICAgICBpY29uUGx1cy5jbGFzc05hbWUgPSAnZmFzIGZhLXBsdXMgaWNvblByb2plY3RFZGl0b3InO1xyXG4gICAgICAgIGJ0bkFkZFRhc2suYXBwZW5kQ2hpbGQoaWNvblBsdXMpO1xyXG5cclxuICAgICAgICBjb25zdCBsYmxBZGRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgICAgIGxibEFkZFRhc2suY2xhc3NOYW1lID0gJ2xibEFkZFRhc2sgaGlkZSc7XHJcbiAgICAgICAgbGJsQWRkVGFzay5pbm5lckhUTUwgPSAnQWRkIHRhc2snO1xyXG4gICAgICAgIGJ0bkFkZFRhc2suYXBwZW5kQ2hpbGQobGJsQWRkVGFzayk7XHJcblxyXG4gICAgICAgIHJldHVybiBzZWN0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVNlcGFyYXRvcigpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgY29uc3Qgc2VwYXJhdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgc2VwYXJhdG9yLmNsYXNzTmFtZSA9ICdzZXBhcmF0b3InO1xyXG4gICAgICAgIHJldHVybiBzZXBhcmF0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgZXZhbHVhdGVUaW1lTGVmdChcclxuICAgICAgICBsYWJlbDogSFRNTEVsZW1lbnQsXHJcbiAgICAgICAgbW9kZWw6IFByb2plY3RNb2RlbCxcclxuICAgICAgICBzZWxlY3RlZERhdGU6IERhdGVcclxuICAgICkge1xyXG4gICAgICAgIGxhYmVsLmlubmVySFRNTCA9IGDigKIgJHttb2RlbC5nZXRUaW1lUmVtYWluaW5nKHRydWUsIHNlbGVjdGVkRGF0ZSl9YDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZXZhbHVhdGVUYXNrc0ZpbmlzaGVkKFxyXG4gICAgICAgIGxhYmVsVGFza3M6IEVsZW1lbnQsXHJcbiAgICAgICAgbGFiZWxQZXJjZW50YWdlOiBFbGVtZW50LFxyXG4gICAgICAgIHByb2dyZXNzQmFyOiBIVE1MRWxlbWVudCxcclxuICAgICAgICBtb2RlbDogUHJvamVjdE1vZGVsXHJcbiAgICApIHtcclxuICAgICAgICBsYWJlbFRhc2tzLmlubmVySFRNTCA9IGDigKIgJHttb2RlbC5nZXROdW1PZlRhc2tzSW5TdGF0ZShcclxuICAgICAgICAgICAgVGFza1N0YXRlLkZJTklTSEVEXHJcbiAgICAgICAgKX0vJHttb2RlbC5nZXROdW1PZlRhc2tzKCl9IHRhc2tzIGZpbmlzaGVkYDtcclxuXHJcbiAgICAgICAgY29uc3QgcGVyY2VudGFnZURvbmUgPSBtb2RlbC5nZXRQZXJjZW50YWdlRG9uZSgpO1xyXG4gICAgICAgIGxhYmVsUGVyY2VudGFnZS5pbm5lckhUTUwgPSBgJHtwZXJjZW50YWdlRG9uZX0lYDtcclxuICAgICAgICBwcm9ncmVzc0Jhci5zdHlsZS53aWR0aCA9IGAke3BlcmNlbnRhZ2VEb25lfSVgO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHNhdmVEYXRhRnJvbUZvcm0oXHJcbiAgICAgICAgbW9kZWw6IFByb2plY3RNb2RlbCxcclxuICAgICAgICBuZXdQcm9qZWN0OiBib29sZWFuLFxyXG4gICAgICAgIG1hbmFnZXJNb2RlbDogTWFuYWdlck1vZGVsXHJcbiAgICApIHtcclxuICAgICAgICBjb25zdCBuYW1lID0gKDxIVE1MSW5wdXRFbGVtZW50PihcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0UHJvamVjdE5hbWUnKVxyXG4gICAgICAgICkpLnZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSAoPEhUTUxJbnB1dEVsZW1lbnQ+KFxyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRQcm9qZWN0RHVlRGF0ZScpXHJcbiAgICAgICAgKSkudmFsdWU7XHJcblxyXG4gICAgICAgIG1vZGVsLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIG1vZGVsLnNldER1ZURhdGUobmV3IERhdGUoZGF0ZSkpO1xyXG5cclxuICAgICAgICBpZiAobmV3UHJvamVjdCkge1xyXG4gICAgICAgICAgICBjb25zdCB1c2VyID0gbWFuYWdlck1vZGVsLmdldEN1cnJlbnRVc2VyKCkubW9kZWw7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb2pNb2RlbDogUHJvamVjdE1vZGVsID0gbmV3IFByb2plY3RNb2RlbChcclxuICAgICAgICAgICAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIG1vZGVsLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBtb2RlbC5nZXREdWVEYXRlKCksXHJcbiAgICAgICAgICAgICAgICBtb2RlbC5nZXRUaW1lc3RhbXAoKVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgLy8gYWRkIHByb2plY3QgdG8gZGF0YWJhc2VcclxuICAgICAgICAgICAgY29uc3QgcHJvalJlc3BvbnNlOiBhbnkgPSBhd2FpdCBEYXRhYmFzZUFQSS5hZGRQcm9qZWN0KFxyXG4gICAgICAgICAgICAgICAgcHJvak1vZGVsLFxyXG4gICAgICAgICAgICAgICAgdXNlci5nZXRJZCgpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIC8vIGFkZCB0YXNrcyB0byBkYXRhYmFzZVxyXG4gICAgICAgICAgICBjb25zdCB0YXNrUmVzcG9uc2UgPSBEYXRhYmFzZUFQSS5hZGRUYXNrcyhcclxuICAgICAgICAgICAgICAgIG1vZGVsLmdldFRhc2tzKCksXHJcbiAgICAgICAgICAgICAgICBwcm9qUmVzcG9uc2UuaWRcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGFkZCBwcm9qZWN0IHRvIG1vZGVsXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3QgPSBuZXcgUHJvamVjdChcclxuICAgICAgICAgICAgICAgIHByb2pSZXNwb25zZS5pZCxcclxuICAgICAgICAgICAgICAgIG1vZGVsLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBtb2RlbC5nZXREdWVEYXRlKCksXHJcbiAgICAgICAgICAgICAgICBtb2RlbC5nZXRUaW1lc3RhbXAoKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBuZXdQcm9qZWN0Lm1vZGVsLnNldFRhc2tzKG1vZGVsLmdldFRhc2tzKCkpO1xyXG4gICAgICAgICAgICBtYW5hZ2VyTW9kZWwuYWRkTmV3UHJvamVjdChuZXdQcm9qZWN0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoXHJcbiAgICAgICAgICAgICAgICBtb2RlbC5nZXRJZCgpLFxyXG4gICAgICAgICAgICAgICAgbW9kZWwubmFtZSxcclxuICAgICAgICAgICAgICAgIG1vZGVsLmdldER1ZURhdGUoKSxcclxuICAgICAgICAgICAgICAgIG1vZGVsLmdldFRpbWVzdGFtcCgpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIG5ld1Byb2plY3QubW9kZWwuc2V0VGFza3MobW9kZWwuZ2V0VGFza3MoKSk7XHJcbiAgICAgICAgICAgIERhdGFiYXNlQVBJLnVwZGF0ZVByb2plY3RzKFtuZXdQcm9qZWN0XSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFRhc2tTdGF0ZSB9IGZyb20gJy4uL3V0aWxzL3Rhc2tTdGF0ZSc7XHJcbmltcG9ydCB7IFRhc2tNb2RlbCB9IGZyb20gJy4vbW9kZWwnO1xyXG5pbXBvcnQgeyBUYXNrVmlldyB9IGZyb20gJy4vdmlldyc7XHJcblxyXG5leHBvcnQgY2xhc3MgVGFzayB7XHJcbiAgICBwdWJsaWMgbW9kZWw6IFRhc2tNb2RlbDtcclxuICAgIHB1YmxpYyB2aWV3OiBUYXNrVmlldztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIHN0YXRlOiBUYXNrU3RhdGUpIHtcclxuICAgICAgICB0aGlzLm1vZGVsID0gbmV3IFRhc2tNb2RlbChpZCwgbmFtZSwgc3RhdGUpO1xyXG4gICAgICAgIHRoaXMudmlldyA9IG5ldyBUYXNrVmlldygpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFRhc2tTdGF0ZSB9IGZyb20gJy4uL3V0aWxzL3Rhc2tTdGF0ZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgVGFza01vZGVsIHtcclxuICAgIHByaXZhdGUgaWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHN0YXRlOiBUYXNrU3RhdGU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgbmFtZTogc3RyaW5nLCBzdGF0ZTogVGFza1N0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldElkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3RhdGUoKTogVGFza1N0YXRlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTdGF0ZSh0OiBUYXNrU3RhdGUpIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0gdDtcclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZU5hbWVJbnB1dChuYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAobmFtZSA9PT0gJycpIHJldHVybiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEYXRhYmFzZUFQSSB9IGZyb20gJy4uL3V0aWxzL2RhdGFiYXNlQVBJJztcclxuaW1wb3J0IHsgUHJvamVjdE1vZGVsIH0gZnJvbSAnLi4vcHJvamVjdC9tb2RlbCc7XHJcbmltcG9ydCB7IFByb2plY3RWaWV3IH0gZnJvbSAnLi4vcHJvamVjdC92aWV3JztcclxuaW1wb3J0IHsgVGFza1N0YXRlIH0gZnJvbSAnLi4vdXRpbHMvdGFza1N0YXRlJztcclxuaW1wb3J0IHsgVGFzayB9IGZyb20gJy4vY29udHJvbGxlcic7XHJcbmltcG9ydCB7IFRhc2tNb2RlbCB9IGZyb20gJy4vbW9kZWwnO1xyXG5pbXBvcnQgeyBkaXNwbGF5UG9wdXAgfSBmcm9tICcuLi91dGlscy90b2FzdCc7XHJcbmltcG9ydCB7IHNob3J0ZW5TdHJpbmcgfSBmcm9tICcuLi91dGlscy9zaG9ydGVuU3RyaW5nJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUYXNrVmlldyB7XHJcbiAgICBjb250YWluZXI6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgIGRyYXdQcmV2aWV3KFxyXG4gICAgICAgIHBhcmVudDogSFRNTEVsZW1lbnQsXHJcbiAgICAgICAgbW9kZWw6IFRhc2tNb2RlbCxcclxuICAgICAgICBwcm9qZWN0TW9kZWw6IFByb2plY3RNb2RlbCxcclxuICAgICAgICBzZWN0aW9uOiBzdHJpbmcsXHJcbiAgICAgICAgY29udGFpbmVyOiBIVE1MRWxlbWVudCxcclxuICAgICAgICBzd2l0Y2hpbmdTZWN0aW9uczogYm9vbGVhbiA9IGZhbHNlLFxyXG4gICAgICAgIG5ld1Rhc2s6IFRhc2sgPSBudWxsXHJcbiAgICApIHtcclxuICAgICAgICBjb25zdCBmaXJzdFRpbWUgPSBjb250YWluZXIgPT09IG51bGw7XHJcbiAgICAgICAgaWYgKGZpcnN0VGltZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuICAgICAgICAgICAgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgIGlmIChzd2l0Y2hpbmdTZWN0aW9ucylcclxuICAgICAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUoXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5jaGlsZHJlbltwYXJlbnQuY2hpbGRyZW4ubGVuZ3RoIC0gMV1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGVsc2UgcGFyZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgd2hpbGUgKGNvbnRhaW5lci5jaGlsZHJlblswXSkgY29udGFpbmVyLmNoaWxkcmVuWzBdLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb250YWluZXIuY2xhc3NOYW1lID0gJ3Rhc2tQcmV2aWV3JztcclxuICAgICAgICBjb250YWluZXIub25tb3VzZWVudGVyID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaWNvbkdvTGVmdCkgaWNvbkdvTGVmdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIGlmIChpY29uR29SaWdodCkgaWNvbkdvUmlnaHQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29udGFpbmVyLm9ubW91c2VsZWF2ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGljb25Hb0xlZnQpIGljb25Hb0xlZnQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgICAgICBpZiAoaWNvbkdvUmlnaHQpIGljb25Hb1JpZ2h0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnRhaW5lci5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB3aGlsZSAoY29udGFpbmVyLmNoaWxkcmVuWzBdKSBjb250YWluZXIuY2hpbGRyZW5bMF0ucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRyYXdFZGl0b3IoY29udGFpbmVyLCBtb2RlbCwgcHJvamVjdE1vZGVsLCBzZWN0aW9uKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBpY29uR29MZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xyXG4gICAgICAgIGlmIChzZWN0aW9uICE9PSAnVG8gZG8nKSB7XHJcbiAgICAgICAgICAgIGljb25Hb0xlZnQuY2xhc3NOYW1lID1cclxuICAgICAgICAgICAgICAgICdmYXMgZmEtY2hldnJvbi1sZWZ0IGZhLXNtIGljb25Hb0xlZnRSaWdodCBoaWRlJztcclxuICAgICAgICAgICAgaWNvbkdvTGVmdC5vbmNsaWNrID0gKGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VjdGlvblRvRG8gPSA8SFRNTEVsZW1lbnQ+KFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzBdXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VjdGlvbkluUHJvZ3Jlc3MgPSA8SFRNTEVsZW1lbnQ+KFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzJdXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlY3Rpb24gPT09ICdJbiBwcm9ncmVzcycpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zZXRTdGF0ZShUYXNrU3RhdGUuVE9fRE8pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd1ByZXZpZXcoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb25Ub0RvLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdE1vZGVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnVG8gZG8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc2VjdGlvbiA9PT0gJ0ZpbmlzaGVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnNldFN0YXRlKFRhc2tTdGF0ZS5JTl9QUk9HUkVTUyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3UHJldmlldyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbkluUHJvZ3Jlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TW9kZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdJbiBwcm9ncmVzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRydWVcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucmVldmFsdWF0ZVByb2dyZXNzKHByb2plY3RNb2RlbCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uR29MZWZ0KTtcclxuXHJcbiAgICAgICAgY29uc3QgbGJsVGFza05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgICAgIGxibFRhc2tOYW1lLmlubmVySFRNTCA9IHNob3J0ZW5TdHJpbmcobW9kZWwubmFtZSwgOSk7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGxibFRhc2tOYW1lKTtcclxuXHJcbiAgICAgICAgY29uc3QgaWNvbkdvUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XHJcbiAgICAgICAgaWYgKHNlY3Rpb24gIT09ICdGaW5pc2hlZCcpIHtcclxuICAgICAgICAgICAgaWNvbkdvUmlnaHQuY2xhc3NOYW1lID1cclxuICAgICAgICAgICAgICAgICdmYXMgZmEtY2hldnJvbi1yaWdodCBmYS1zbSBpY29uR29MZWZ0UmlnaHQgaGlkZSc7XHJcbiAgICAgICAgICAgIGljb25Hb1JpZ2h0Lm9uY2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZWN0aW9uRmluaXNoZWQgPSA8SFRNTEVsZW1lbnQ+KFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzRdXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VjdGlvbkluUHJvZ3Jlc3MgPSA8SFRNTEVsZW1lbnQ+KFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5wYXJlbnRFbGVtZW50LmNoaWxkcmVuWzJdXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlY3Rpb24gPT09ICdJbiBwcm9ncmVzcycpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zZXRTdGF0ZShUYXNrU3RhdGUuRklOSVNIRUQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd1ByZXZpZXcoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb25GaW5pc2hlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3RNb2RlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0ZpbmlzaGVkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNlY3Rpb24gPT09ICdUbyBkbycpIHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RlbC5zZXRTdGF0ZShUYXNrU3RhdGUuSU5fUFJPR1JFU1MpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd1ByZXZpZXcoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb25JblByb2dyZXNzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdE1vZGVsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnSW4gcHJvZ3Jlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZXZhbHVhdGVQcm9ncmVzcyhwcm9qZWN0TW9kZWwpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaWNvbkdvUmlnaHQpO1xyXG5cclxuICAgICAgICBpZiAobmV3VGFzaykge1xyXG4gICAgICAgICAgICAvLyBuZXcgdGFza1xyXG4gICAgICAgICAgICB3aGlsZSAoY29udGFpbmVyLmNoaWxkcmVuWzBdKSBjb250YWluZXIuY2hpbGRyZW5bMF0ucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRyYXdFZGl0b3IoY29udGFpbmVyLCBtb2RlbCwgcHJvamVjdE1vZGVsLCBzZWN0aW9uLCBuZXdUYXNrKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZHJhd0VkaXRvcihcclxuICAgICAgICBjb250YWluZXI6IEhUTUxFbGVtZW50LFxyXG4gICAgICAgIG1vZGVsOiBUYXNrTW9kZWwgfCBudWxsLFxyXG4gICAgICAgIHByb2plY3RNb2RlbDogUHJvamVjdE1vZGVsLFxyXG4gICAgICAgIHNlY3Rpb246IHN0cmluZyxcclxuICAgICAgICBuZXdUYXNrOiBUYXNrID0gbnVsbFxyXG4gICAgKSB7XHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2V4cGFuZCcpO1xyXG4gICAgICAgIGNvbnRhaW5lci5vbmNsaWNrID0gbnVsbDtcclxuXHJcbiAgICAgICAgY29uc3QgaW5wdXRUYXNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgaW5wdXRUYXNrTmFtZS5pZCA9ICdpbnB1dFRhc2tOYW1lJztcclxuICAgICAgICBpbnB1dFRhc2tOYW1lLnBsYWNlaG9sZGVyID0gJ1Rhc2sgbmFtZSc7XHJcbiAgICAgICAgaW5wdXRUYXNrTmFtZS5jbGFzc05hbWUgPSAnZm9ybS1jb250cm9sIGlucHV0VGFza05hbWUnO1xyXG4gICAgICAgIGlucHV0VGFza05hbWUudmFsdWUgPSBtb2RlbC5uYW1lO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dFRhc2tOYW1lKTtcclxuICAgICAgICBpZiAobmV3VGFzaykgaW5wdXRUYXNrTmFtZS5mb2N1cygpO1xyXG5cclxuICAgICAgICBjb25zdCBidG5TYXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnRuU2F2ZS5jbGFzc05hbWUgPSAnYnRuIGJ0bi1zdWNjZXNzIGJ0blNhdmVUYXNrJztcclxuICAgICAgICBidG5TYXZlLmlubmVySFRNTCA9ICdTYXZlJztcclxuICAgICAgICBidG5TYXZlLm9uY2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgLy8gdGFzayBuYW1lIHZhbGlkYXRpb25cclxuICAgICAgICAgICAgaWYgKCFtb2RlbC52YWxpZGF0ZU5hbWVJbnB1dChpbnB1dFRhc2tOYW1lLnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheVBvcHVwKHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3JlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdJbnZhbGlkIGlucHV0JyxcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVGFzayBuYW1lIGNhbm5vdCByZW1haW4gZW1wdHkuJyxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyB1cGRhdGUgdGFzayBuYW1lXHJcbiAgICAgICAgICAgIG1vZGVsLm5hbWUgPSBpbnB1dFRhc2tOYW1lLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgLy8gYWRkIG5ldyB0YXNrIHRvIHByb2plY3RcclxuICAgICAgICAgICAgaWYgKG5ld1Rhc2spIHByb2plY3RNb2RlbC5hZGRUYXNrKG5ld1Rhc2spO1xyXG5cclxuICAgICAgICAgICAgLy8gY2xlYXIgZWxlbWVudFxyXG4gICAgICAgICAgICBpbnB1dFRhc2tOYW1lLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBidG5TYXZlLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kcmF3UHJldmlldyhcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5wYXJlbnRFbGVtZW50LFxyXG4gICAgICAgICAgICAgICAgbW9kZWwsXHJcbiAgICAgICAgICAgICAgICBwcm9qZWN0TW9kZWwsXHJcbiAgICAgICAgICAgICAgICBzZWN0aW9uLFxyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJlZXZhbHVhdGVQcm9ncmVzcyhwcm9qZWN0TW9kZWwpO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJ0blNhdmUpO1xyXG5cclxuICAgICAgICBjb25zdCBidG5EZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidG5EZWxldGUuY2xhc3NOYW1lID0gJ2J0biBidG4tZGFuZ2VyIGJ0bkRlbGV0ZVRhc2snO1xyXG4gICAgICAgIGJ0bkRlbGV0ZS5pbm5lckhUTUwgPSAnPGkgY2xhc3M9XCJmYXMgZmEtdHJhc2hcIj48L2k+JztcclxuICAgICAgICBidG5EZWxldGUub25jbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBkZWxldGUgdGFza1xyXG4gICAgICAgICAgICBwcm9qZWN0TW9kZWwucmVtb3ZlVGFzayhtb2RlbC5nZXRJZCgpKTtcclxuICAgICAgICAgICAgaWYgKG1vZGVsLmdldElkKCkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgRGF0YWJhc2VBUEkuZGVsZXRlVGFza3MoW1xyXG4gICAgICAgICAgICAgICAgICAgIG5ldyBUYXNrKG1vZGVsLmdldElkKCksIG1vZGVsLm5hbWUsIG1vZGVsLmdldFN0YXRlKCkpLFxyXG4gICAgICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIHJlbW92ZSBjb250YWluZXI7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVldmFsdWF0ZVByb2dyZXNzKHByb2plY3RNb2RlbCk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnRuRGVsZXRlKTtcclxuICAgIH1cclxuXHJcbiAgICByZWV2YWx1YXRlUHJvZ3Jlc3MocHJvamVjdE1vZGVsOiBQcm9qZWN0TW9kZWwpIHtcclxuICAgICAgICBjb25zdCBsYmxUYXNrc0RvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsYmxUYXNrc0RvbmUnKVswXTtcclxuICAgICAgICBjb25zdCBsYmxQZXJjZW50YWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xibFBlcmNlbnRhZ2UnKTtcclxuICAgICAgICBjb25zdCBwcm9ncmVzcyA9IDxIVE1MRWxlbWVudD4oXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2dyZXNzLWJhcicpWzBdXHJcbiAgICAgICAgKTtcclxuICAgICAgICBQcm9qZWN0Vmlldy5ldmFsdWF0ZVRhc2tzRmluaXNoZWQoXHJcbiAgICAgICAgICAgIGxibFRhc2tzRG9uZSxcclxuICAgICAgICAgICAgbGJsUGVyY2VudGFnZSxcclxuICAgICAgICAgICAgcHJvZ3Jlc3MsXHJcbiAgICAgICAgICAgIHByb2plY3RNb2RlbFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVXNlck1vZGVsIH0gZnJvbSAnLi9tb2RlbCc7XHJcbmltcG9ydCB7IFVzZXJWaWV3IH0gZnJvbSAnLi92aWV3JztcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyIHtcclxuICBwdWJsaWMgbW9kZWw6IFVzZXJNb2RlbDtcclxuICBwdWJsaWMgdmlldzogVXNlclZpZXc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIsIG5pY2tuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMubW9kZWwgPSBuZXcgVXNlck1vZGVsKGlkLCBuaWNrbmFtZSwgcGFzc3dvcmQpO1xyXG4gICAgdGhpcy52aWV3ID0gbmV3IFVzZXJWaWV3KCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuLi9wcm9qZWN0L2NvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSAnLi4vdGFzay9jb250cm9sbGVyJztcclxuaW1wb3J0IHsgVGFza1N0YXRlIH0gZnJvbSAnLi4vdXRpbHMvdGFza1N0YXRlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyTW9kZWwge1xyXG4gICAgcHJpdmF0ZSBpZDogbnVtYmVyO1xyXG4gICAgcHVibGljIG5pY2tuYW1lOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHByb2plY3RzOiBQcm9qZWN0W107XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgbmlja25hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuaWQgPSBpZDtcclxuICAgICAgICB0aGlzLm5pY2tuYW1lID0gbmlja25hbWU7XHJcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkO1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBhc3N3b3JkKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGFzc3dvcmQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UHJvamVjdHMoKTogUHJvamVjdFtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0cztcclxuICAgIH1cclxuXHJcbiAgICBzZXRQcm9qZWN0cyhwOiBQcm9qZWN0W10pIHtcclxuICAgICAgICB0aGlzLnByb2plY3RzID0gcDtcclxuICAgIH1cclxuXHJcbiAgICBnZXROdW1PZlByb2plY3RzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHMubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFByb2plY3QocDogUHJvamVjdCkge1xyXG4gICAgICAgIHRoaXMucHJvamVjdHMucHVzaChwKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVQcm9qZWN0KGlkOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnByb2plY3RzID0gdGhpcy5wcm9qZWN0cy5maWx0ZXIoXHJcbiAgICAgICAgICAgIChwOiBQcm9qZWN0KSA9PiBwLm1vZGVsLmdldElkKCkgIT09IGlkXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBzb3J0UHJvamVjdHMoXHJcbiAgICAgICAgY3JpdGVyaWE6ICdnZXRUaW1lc3RhbXAnIHwgJ2dldER1ZURhdGUnIHwgJ2dldE51bU9mVGFza3MnLFxyXG4gICAgICAgIHJldmVyc2VPcGVyYXRvcnM6IGJvb2xlYW4gPSBmYWxzZVxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5zb3J0KChhOiBQcm9qZWN0LCBiOiBQcm9qZWN0KTogbnVtYmVyID0+IHtcclxuICAgICAgICAgICAgaWYgKGEubW9kZWxbY3JpdGVyaWFdKCkgPCBiLm1vZGVsW2NyaXRlcmlhXSgpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldmVyc2VPcGVyYXRvcnMgPyAxIDogLTE7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGEubW9kZWxbY3JpdGVyaWFdKCkgPiBiLm1vZGVsW2NyaXRlcmlhXSgpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldmVyc2VPcGVyYXRvcnMgPyAtMSA6IDE7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBtYXJrQWxsQXNGaW5pc2hlZCgpIHtcclxuICAgICAgICB0aGlzLnByb2plY3RzLm1hcCgocHJvajogUHJvamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBwcm9qLm1vZGVsLm1hcmtBc0ZpbmlzaGVkKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlQWxsUHJvamVjdHMoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFVzZXJNb2RlbCB9IGZyb20gXCIuL21vZGVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVXNlclZpZXcge1xyXG4gICAgY29udGFpbmVyOiBIVE1MRWxlbWVudDtcclxuICAgIHBhcmVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuLi9wcm9qZWN0L2NvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBQcm9qZWN0TW9kZWwgfSBmcm9tICcuLi9wcm9qZWN0L21vZGVsJztcclxuaW1wb3J0IHsgVGFzayB9IGZyb20gJy4uL3Rhc2svY29udHJvbGxlcic7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi91c2VyL2NvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBkaXNwbGF5UG9wdXAgfSBmcm9tICcuL3RvYXN0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRhYmFzZUFQSSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyByb290VVJMOiBzdHJpbmc7XHJcblxyXG4gICAgc3RhdGljIHNldFJvb3RVUkwodXJsOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBEYXRhYmFzZUFQSS5yb290VVJMID0gdXJsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vI3JlZ2lvbiBDT05WRVJTSU9OIG1ldGhvZHNcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB0YXNrRGF0YSBpcyBhbiBhcnJheSBvZiBUYXNrcyAoZGF0YWJhc2Ugb2JqZWN0cylcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGNvbnZlcnRUYXNrRnJvbURiVG9NdmModGFza0RhdGE6IGFueSk6IFRhc2tbXSB7XHJcbiAgICAgICAgaWYgKHRhc2tEYXRhLmxlbmd0aCA9PSAwKSByZXR1cm4gW107XHJcblxyXG4gICAgICAgIGNvbnN0IHRhc2tzOiBUYXNrW10gPSBbXTtcclxuICAgICAgICB0YXNrRGF0YS5mb3JFYWNoKCh0YXNrOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgdGFza3MucHVzaChuZXcgVGFzayh0YXNrLmlkLCB0YXNrLm5hbWUsIHRhc2suc3RhdGUpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGFza3M7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0gcHJvakRhdGEgaXMgYW4gYXJyYXkgb2YgUHJvamVjdHMgKGRhdGFiYXNlIG9iamVjdHMpXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBhc3luYyBjb252ZXJ0UHJvamVjdEZyb21EYlRvTXZjKHByb2pEYXRhOiBhbnkpOiBQcm9taXNlPFByb2plY3RbXT4ge1xyXG4gICAgICAgIGlmIChwcm9qRGF0YS5sZW5ndGggPT0gMCkgcmV0dXJuIFtdO1xyXG5cclxuICAgICAgICBjb25zdCBwcm9qZWN0czogUHJvamVjdFtdID0gW107XHJcbiAgICAgICAgY29uc3QgdGFza1Byb21pc2VzOiBQcm9taXNlPFRhc2tbXT5bXSA9IFtdO1xyXG5cclxuICAgICAgICBwcm9qRGF0YS5mb3JFYWNoKChwOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgdGFza1Byb21pc2VzLnB1c2goRGF0YWJhc2VBUEkuZ2V0VGFza3NCeVByb2plY3QocC5pZCkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwodGFza1Byb21pc2VzKS50aGVuKCh0YXNrczogVGFza1tdW10pID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qRGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2pEYXRhW2ldLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2pEYXRhW2ldLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvakRhdGFbaV0uZHVlRGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBwcm9qRGF0YVtpXS50aW1lc3RhbXBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBuZXdQcm9qZWN0Lm1vZGVsLnNldFRhc2tzKHRhc2tzW2ldKTtcclxuICAgICAgICAgICAgICAgIHByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBwcm9qZWN0cztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB1c2VyRGF0YSBpcyBhbiBhcnJheSBvZiBVc2VycyAoZGF0YWJhc2Ugb2JqZWN0cylcclxuICAgICAqL1xyXG4gICAgc3RhdGljIGFzeW5jIGNvbnZlcnRVc2VyRnJvbURiVG9NdmModXNlckRhdGE6IGFueSk6IFByb21pc2U8VXNlcltdPiB7XHJcbiAgICAgICAgaWYgKHVzZXJEYXRhLmxlbmd0aCA9PSAwKSByZXR1cm4gW107XHJcblxyXG4gICAgICAgIGNvbnN0IHVzZXJzOiBVc2VyW10gPSBbXTtcclxuICAgICAgICBjb25zdCBwcm9qZWN0UHJvbWlzZXM6IFByb21pc2U8UHJvamVjdFtdPltdID0gW107XHJcblxyXG4gICAgICAgIHVzZXJEYXRhLmZvckVhY2goKHU6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBwcm9qZWN0UHJvbWlzZXMucHVzaChEYXRhYmFzZUFQSS5nZXRQcm9qZWN0c0J5VXNlcih1LmlkKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9qZWN0UHJvbWlzZXMpLnRoZW4oKHByb2plY3RzOiBQcm9qZWN0W11bXSkgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVzZXJEYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdVc2VyID0gbmV3IFVzZXIoXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlckRhdGFbaV0uaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlckRhdGFbaV0ubmlja25hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlckRhdGFbaV0ucGFzc3dvcmRcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBuZXdVc2VyLm1vZGVsLnNldFByb2plY3RzKHByb2plY3RzW2ldKTtcclxuICAgICAgICAgICAgICAgIHVzZXJzLnB1c2gobmV3VXNlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHVzZXJzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vI2VuZHJlZ2lvbiBDT05WRVJTSU9OIG1ldGhvZHNcclxuICAgIC8vI3JlZ2lvbiBVU0VSIHRhYmxlIG1ldGhvZHNcclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgZ2V0QWxsVXNlcnMoKTogUHJvbWlzZTxVc2VyW10+IHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7RGF0YWJhc2VBUEkucm9vdFVSTH0vdXNlcnNgKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAgICAgYXN5bmMgKHVzZXJEYXRhKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IERhdGFiYXNlQVBJLmNvbnZlcnRVc2VyRnJvbURiVG9NdmModXNlckRhdGEpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGdldFVzZXJCeUlkKGlkOiBudW1iZXIpOiBQcm9taXNlPFVzZXI+IHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7RGF0YWJhc2VBUEkucm9vdFVSTH0vdXNlcnMvJHtpZH1gKVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGFzeW5jICh1c2VyRGF0YSkgPT5cclxuICAgICAgICAgICAgICAgIChhd2FpdCBEYXRhYmFzZUFQSS5jb252ZXJ0VXNlckZyb21EYlRvTXZjKFt1c2VyRGF0YV0pKS5wb3AoKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhc3luYyBnZXRVc2VyQnlOaWNrbmFtZShuaWNrbmFtZTogc3RyaW5nKTogUHJvbWlzZTxVc2VyPiB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke0RhdGFiYXNlQVBJLnJvb3RVUkx9L3VzZXJzP25pY2tuYW1lPSR7bmlja25hbWV9YClcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IGRhdGEuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihhc3luYyAodXNlckRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh1c2VyRGF0YS5sZW5ndGggPT09IDApIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgRGF0YWJhc2VBUEkuY29udmVydFVzZXJGcm9tRGJUb012Yyh1c2VyRGF0YSlcclxuICAgICAgICAgICAgICAgICkucG9wKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhc3luYyBhZGRVc2VyKG5pY2tuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBgJHtEYXRhYmFzZUFQSS5yb290VVJMfS91c2Vyc2AsXHJcbiAgICAgICAgICAgIHR5cGU6ICdQT1NUJyxcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgbmlja25hbWU6IG5pY2tuYW1lLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhc3luYzogdHJ1ZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyNlbmRyZWdpb24gVVNFUiB0YWJsZSBtZXRob2RzXHJcbiAgICAvLyNyZWdpb24gUFJPSkVDVCB0YWJsZSBtZXRob2RzXHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGdldEFsbFByb2plY3RzKCk6IFByb21pc2U8UHJvamVjdFtdPiB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke0RhdGFiYXNlQVBJLnJvb3RVUkx9L3Byb2plY3RzYClcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IGRhdGEuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihcclxuICAgICAgICAgICAgICAgIGFzeW5jIChwcm9qZWN0RGF0YTogYW55KSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IERhdGFiYXNlQVBJLmNvbnZlcnRQcm9qZWN0RnJvbURiVG9NdmMocHJvamVjdERhdGEpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGdldFByb2plY3RzQnlVc2VyKHVzZXJJZDogbnVtYmVyKTogUHJvbWlzZTxQcm9qZWN0W10+IHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7RGF0YWJhc2VBUEkucm9vdFVSTH0vdXNlcnMvJHt1c2VySWR9L3Byb2plY3RzYClcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IGRhdGEuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbigocHJvamVjdERhdGE6IGFueSkgPT5cclxuICAgICAgICAgICAgICAgIERhdGFiYXNlQVBJLmNvbnZlcnRQcm9qZWN0RnJvbURiVG9NdmMocHJvamVjdERhdGEpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGdldFByb2plY3RzQnlUZXh0KHRleHQ6IHN0cmluZyk6IFByb21pc2U8UHJvamVjdFtdPiB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke0RhdGFiYXNlQVBJLnJvb3RVUkx9L3Byb2plY3RzP3E9JHt0ZXh0fWApXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiBkYXRhLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKHByb2plY3REYXRhOiBhbnkpID0+XHJcbiAgICAgICAgICAgICAgICBEYXRhYmFzZUFQSS5jb252ZXJ0UHJvamVjdEZyb21EYlRvTXZjKHByb2plY3REYXRhKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhc3luYyB1cGRhdGVQcm9qZWN0cyhwcm9qZWN0czogUHJvamVjdFtdKSB7XHJcbiAgICAgICAgbGV0IHByb21pc2VzOiBQcm9taXNlPHZvaWQ+W10gPSBbXTtcclxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKGFzeW5jIChwcm9qOiBQcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMudXBkYXRlVGFza3MocHJvai5tb2RlbC5nZXRUYXNrcygpLCBwcm9qLm1vZGVsLmdldElkKCkpO1xyXG5cclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgIG5ldyBQcm9taXNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmZXRjaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgYCR7RGF0YWJhc2VBUEkucm9vdFVSTH0vcHJvamVjdHMvJHtwcm9qLm1vZGVsLmdldElkKCl9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHByb2oubW9kZWwubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdWVEYXRlOiBwcm9qLm1vZGVsLmdldER1ZURhdGUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGRlbGV0ZVByb2plY3RzKHByb2plY3RzOiBQcm9qZWN0W10pIHtcclxuICAgICAgICBsZXQgcHJvbWlzZXM6IFByb21pc2U8UmVzcG9uc2U+W10gPSBbXTtcclxuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qOiBQcm9qZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGRlbGV0ZSBhbGwgdGFza3MgZm9yIHRoYXQgcHJvamVjdFxyXG4gICAgICAgICAgICBEYXRhYmFzZUFQSS5kZWxldGVUYXNrcyhwcm9qLm1vZGVsLmdldFRhc2tzKCkpO1xyXG5cclxuICAgICAgICAgICAgLy8gZGVsZXRlIHByb2plY3QgaXRzZWxmXHJcbiAgICAgICAgICAgIHByb21pc2VzLnB1c2goXHJcbiAgICAgICAgICAgICAgICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmV0Y2goXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGAke0RhdGFiYXNlQVBJLnJvb3RVUkx9L3Byb2plY3RzLyR7cHJvai5tb2RlbC5nZXRJZCgpfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlQb3B1cCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAncmVkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdEZWxldGUgcHJvamVjdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBGYWlsZWQgdG8gZGVsZXRlIHByb2plY3QgJHtwcm9qLm1vZGVsLmdldElkKCl9LmAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiByZWplY3QoZXJyKSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGFzeW5jIGFkZFByb2plY3QoXHJcbiAgICAgICAgcHJvamVjdDogUHJvamVjdE1vZGVsLFxyXG4gICAgICAgIHVzZXJJZDogbnVtYmVyXHJcbiAgICApOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybiAkLmFqYXgoe1xyXG4gICAgICAgICAgICB1cmw6IGAke0RhdGFiYXNlQVBJLnJvb3RVUkx9L3Byb2plY3RzYCxcclxuICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBwcm9qZWN0Lm5hbWUsXHJcbiAgICAgICAgICAgICAgICBkdWVEYXRlOiBwcm9qZWN0LmdldER1ZURhdGUoKS50b0lTT1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgdGltZXN0YW1wOiBwcm9qZWN0LmdldFRpbWVzdGFtcCgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAgICAgICAgICAgICB1c2VySWQ6IHVzZXJJZCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXN5bmM6IHRydWUsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8jZW5kcmVnaW9uIFBST0pFQ1QgdGFibGUgbWV0aG9kc1xyXG4gICAgLy8jcmVnaW9uIFRBU0sgdGFibGUgbWV0aG9kc1xyXG5cclxuICAgIHN0YXRpYyBhc3luYyBnZXRBbGxUYXNrcygpOiBQcm9taXNlPFRhc2tbXT4ge1xyXG4gICAgICAgIHJldHVybiBmZXRjaChgJHtEYXRhYmFzZUFQSS5yb290VVJMfS90YXNrc2ApXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiBkYXRhLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKHRhc2tEYXRhOiBhbnkpID0+XHJcbiAgICAgICAgICAgICAgICBEYXRhYmFzZUFQSS5jb252ZXJ0VGFza0Zyb21EYlRvTXZjKHRhc2tEYXRhKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhc3luYyBnZXRUYXNrc0J5UHJvamVjdChwcm9qSWQ6IG51bWJlcik6IFByb21pc2U8VGFza1tdPiB7XHJcbiAgICAgICAgcmV0dXJuIGZldGNoKGAke0RhdGFiYXNlQVBJLnJvb3RVUkx9L3Byb2plY3RzLyR7cHJvaklkfS90YXNrc2ApXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiBkYXRhLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oKHRhc2tEYXRhOiBhbnkpID0+XHJcbiAgICAgICAgICAgICAgICBEYXRhYmFzZUFQSS5jb252ZXJ0VGFza0Zyb21EYlRvTXZjKHRhc2tEYXRhKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhc3luYyBnZXRUYXNrRGF0YUJ5SWQodGFza0lkOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gZmV0Y2goYCR7RGF0YWJhc2VBUEkucm9vdFVSTH0vdGFza3MvJHt0YXNrSWR9YClcclxuICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHJldHVybiByZXNwb25zZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEpIHJldHVybiBkYXRhLmpzb24oKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgdXBkYXRlVGFza3ModGFza3M6IFRhc2tbXSwgcHJvamVjdElkOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgcHJvbWlzZXM6IFByb21pc2U8dm9pZD5bXSA9IFtdO1xyXG4gICAgICAgIHRhc2tzLmZvckVhY2goYXN5bmMgKHRhc2s6IFRhc2spID0+IHtcclxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIHRhc2sgaXMgbmV3XHJcbiAgICAgICAgICAgIGlmICh0YXNrLm1vZGVsLmdldElkKCkgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gYWRkIG5ldyB0YXNrXHJcbiAgICAgICAgICAgICAgICBhd2FpdCBEYXRhYmFzZUFQSS5hZGRUYXNrcyhbdGFza10sIHByb2plY3RJZCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBleGlzdGluZyB0YXNrc1xyXG4gICAgICAgICAgICBwcm9taXNlcy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgbmV3IFByb21pc2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZldGNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgJHtEYXRhYmFzZUFQSS5yb290VVJMfS90YXNrcy8ke3Rhc2subW9kZWwuZ2V0SWQoKX1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGFzay5tb2RlbC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlOiB0YXNrLm1vZGVsLmdldFN0YXRlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhc3luYyBhZGRUYXNrcyh0YXNrczogVGFza1tdLCBwcm9qZWN0SWQ6IG51bWJlcik6IFByb21pc2U8YW55W10+IHtcclxuICAgICAgICBsZXQgcHJvbWlzZXM6IFByb21pc2U8dm9pZD5bXSA9IFtdO1xyXG4gICAgICAgIHRhc2tzLmZvckVhY2goKHRhc2s6IFRhc2spID0+IHtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgIG5ldyBQcm9taXNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAkLmFqYXgoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGAke0RhdGFiYXNlQVBJLnJvb3RVUkx9L3Rhc2tzYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0YXNrLm1vZGVsLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZTogdGFzay5tb2RlbC5nZXRTdGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdElkOiBwcm9qZWN0SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzeW5jOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgYXN5bmMgZGVsZXRlVGFza3ModGFza3M6IFRhc2tbXSkge1xyXG4gICAgICAgIGxldCBwcm9taXNlczogUHJvbWlzZTxSZXNwb25zZT5bXSA9IFtdO1xyXG4gICAgICAgIHRhc2tzLmZvckVhY2goKHRhc2s6IFRhc2spID0+IHtcclxuICAgICAgICAgICAgcHJvbWlzZXMucHVzaChcclxuICAgICAgICAgICAgICAgIG5ldyBQcm9taXNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmZXRjaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgYCR7RGF0YWJhc2VBUEkucm9vdFVSTH0vdGFza3MvJHt0YXNrLm1vZGVsLmdldElkKCl9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8jZW5kcmVnaW9uIFRBU0sgdGFibGUgbWV0aG9kc1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBkcmF3RHJvcGRvd25CdXR0b24oXHJcbiAgICBwYXJlbnQ6IEhUTUxFbGVtZW50LFxyXG4gICAgYnRuSWQ6IHN0cmluZyxcclxuICAgIGl0ZW1zOiBIVE1MRWxlbWVudFtdXHJcbik6IEhUTUxFbGVtZW50IHtcclxuICAgIGNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkcm9wZG93bi5jbGFzc05hbWUgPSAnZHJvcGRvd24nO1xyXG4gICAgcGFyZW50LmFwcGVuZENoaWxkKGRyb3Bkb3duKTtcclxuXHJcbiAgICBjb25zdCBkcm9wZG93bk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRyb3Bkb3duTWVudS5jbGFzc05hbWUgPSAnZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXJpZ2h0JztcclxuICAgIGRyb3Bkb3duTWVudS5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWxsZWRieScsIGJ0bklkKTtcclxuICAgIGRyb3Bkb3duLmFwcGVuZENoaWxkKGRyb3Bkb3duTWVudSk7XHJcblxyXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4gZHJvcGRvd25NZW51LmFwcGVuZENoaWxkKGl0ZW0pKTtcclxuXHJcbiAgICByZXR1cm4gZHJvcGRvd247XHJcbn1cclxuIiwiLyoqXHJcbiAqIEBwYXJhbSBkYXRhIHJlcXVpcmVzIFRJVExFLCBNRVNTQUdFIGFuZCBCVVRUT05TIHByb3BlcnR5LlxyXG4gKiBFYWNoIGJ1dHRvbiByZXF1aXJlcyBURVhULCBUWVBFIChjbGFzcyBuYW1lIC0gZS5nLiAncHJpbWFyeScsICdkYW5nZXInLCBldGMuKSBhbmQgQ0FMTEJBQ0sgRlVOQ1RJT04uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheU1vZGFsKGRhdGE6IGFueSkge1xyXG4gICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsRGlhbG9nJyk7XHJcbiAgICBpZiAobW9kYWwgIT09IG51bGwpIG1vZGFsLnJlbW92ZSgpO1xyXG4gICAgbW9kYWwgPSBjcmVhdGVNb2RhbChkYXRhKTtcclxuICAgICQoJy5tYW5hZ2VyJylbMF0uYXBwZW5kQ2hpbGQobW9kYWwpO1xyXG5cclxuICAgICg8YW55PiQoJyNtb2RhbERpYWxvZycpKS5tb2RhbCgnc2hvdycpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNb2RhbChkYXRhOiBhbnkpIHtcclxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBtb2RhbC5pZCA9ICdtb2RhbERpYWxvZyc7XHJcbiAgICBtb2RhbC5jbGFzc05hbWUgPSAnbW9kYWwgZmFkZSc7XHJcbiAgICBtb2RhbC50YWJJbmRleCA9IC0xO1xyXG5cclxuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGlhbG9nLmNsYXNzTmFtZSA9ICdtb2RhbC1kaWFsb2cgbW9kYWwtZGlhbG9nLWNlbnRlcmVkJztcclxuXHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250ZW50LmNsYXNzTmFtZSA9ICdtb2RhbC1jb250ZW50JztcclxuXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhlYWRlci5jbGFzc05hbWUgPSAnbW9kYWwtaGVhZGVyJztcclxuXHJcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XHJcbiAgICB0aXRsZS5jbGFzc05hbWUgPSAnbW9kYWwtdGl0bGUnO1xyXG4gICAgdGl0bGUuaW5uZXJIVE1MID0gZGF0YS50aXRsZTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcblxyXG4gICAgY29uc3QgYnRuQ2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChidG5DbG9zZSk7XHJcbiAgICBidG5DbG9zZS5jbGFzc05hbWUgPSAnY2xvc2UnO1xyXG4gICAgYnRuQ2xvc2Uuc2V0QXR0cmlidXRlKCdkYXRhLWRpc21pc3MnLCAnbW9kYWwnKTtcclxuICAgIGJ0bkNsb3NlLmlubmVySFRNTCA9ICc8c3Bhbj4mdGltZXM7PC9zcGFuPic7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcblxyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYm9keS5jbGFzc05hbWUgPSAnbW9kYWwtYm9keSc7XHJcblxyXG4gICAgY29uc3QgcGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgcGFyYWdyYXBoLmlubmVySFRNTCA9IGRhdGEubWVzc2FnZTtcclxuICAgIGJvZHkuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYm9keSk7XHJcblxyXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBmb290ZXIuY2xhc3NOYW1lID0gJ21vZGFsLWZvb3Rlcic7XHJcblxyXG4gICAgZGF0YS5idXR0b25zLmZvckVhY2goKGJ0bjogYW55KSA9PiB7XHJcbiAgICAgICAgY29uc3QgYnRuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIGJ0bkVsZW1lbnQuY2xhc3NOYW1lID0gYGJ0biBidG4tJHtidG4udHlwZX0gYnRuTW9kYWxgO1xyXG4gICAgICAgIGJ0bkVsZW1lbnQuaW5uZXJIVE1MID0gYnRuLnRleHQ7XHJcbiAgICAgICAgYnRuRWxlbWVudC5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBidG4uY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgKDxhbnk+JCgnI21vZGFsRGlhbG9nJykpLm1vZGFsKCd0b2dnbGUnKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvb3Rlci5hcHBlbmRDaGlsZChidG5FbGVtZW50KTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxuICAgIGRpYWxvZy5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuICAgIG1vZGFsLmFwcGVuZENoaWxkKGRpYWxvZyk7XHJcbiAgICByZXR1cm4gbW9kYWw7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUVsZW1lbnRzQ2hpbGRyZW4oZWxlbWVudDogRWxlbWVudCkge1xyXG4gICAgaWYgKGVsZW1lbnQgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgd2hpbGUgKGVsZW1lbnQuY2hpbGRyZW5bMF0pIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5jaGlsZHJlblswXSk7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNob3J0ZW5TdHJpbmcoczogc3RyaW5nLCBsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICBpZiAocy5sZW5ndGggPD0gbGVuZ3RoKSByZXR1cm4gcztcclxuXHJcbiAgICAvLyByZW1vdmUgbGFzdCAzIGxldHRlcnNcclxuICAgIGxldCBzaG9ydFN0ciA9IHMuc3Vic3RyKDAsIGxlbmd0aCAtIDMpO1xyXG5cclxuICAgIC8vIHJlbW92ZSB3aGl0ZSBzcGFjZSBhdCB0aGUgZW5kXHJcbiAgICBpZiAoc2hvcnRTdHIuY2hhckF0KHNob3J0U3RyLmxlbmd0aCAtIDEpID09PSAnICcpXHJcbiAgICAgICAgc2hvcnRTdHIgPSBzaG9ydFN0ci5zbGljZSgwLCBzaG9ydFN0ci5sZW5ndGggLSAxKTtcclxuXHJcbiAgICByZXR1cm4gc2hvcnRTdHIgKyAnLi4uJztcclxufVxyXG4iLCJleHBvcnQgZW51bSBUYXNrU3RhdGUge1xyXG4gIFRPX0RPID0gJ1RvIGRvJyxcclxuICBJTl9QUk9HUkVTUyA9ICdJbiBwcm9ncmVzcycsXHJcbiAgRklOSVNIRUQgPSAnRmluaXNoZWQnLFxyXG59XHJcbiIsIi8qKlxyXG4gKiBAcGFyYW0gZGF0YSByZXF1aXJlcyBDT0xPUiwgVElUTEUgYW5kIE1FU1NBR0UgcHJvcGVydHlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5UG9wdXAoZGF0YTogYW55KSB7XHJcbiAgICB2YXIgdG9hc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9hc3ROb3RpZicpO1xyXG4gICAgaWYgKHRvYXN0ICE9PSBudWxsKSB0b2FzdC5yZW1vdmUoKTtcclxuICAgIHRvYXN0ID0gY3JlYXRlUG9wdXAoZGF0YSk7XHJcbiAgICAkKCcubWFuYWdlcicpWzBdLmFwcGVuZENoaWxkKHRvYXN0KTtcclxuXHJcbiAgICAoPGFueT4kKCcjdG9hc3ROb3RpZicpKS50b2FzdCh7IGRlbGF5OiA0MDAwIH0pO1xyXG4gICAgKDxhbnk+JCgnI3RvYXN0Tm90aWYnKSkudG9hc3QoJ3Nob3cnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUG9wdXAoZGF0YTogYW55KSB7XHJcbiAgICBjb25zdCB0b2FzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdG9hc3QuY2xhc3NOYW1lID0gJ3RvYXN0JztcclxuICAgIHRvYXN0LmlkID0gJ3RvYXN0Tm90aWYnO1xyXG5cclxuICAgIGNvbnN0IHRvYXN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0b2FzdEhlYWRlci5jbGFzc05hbWUgPSAndG9hc3QtaGVhZGVyJztcclxuICAgIHRvYXN0LmFwcGVuZENoaWxkKHRvYXN0SGVhZGVyKTtcclxuXHJcbiAgICBjb25zdCBzdGF0dXNJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzdGF0dXNJY29uLmNsYXNzTmFtZSA9ICdzdGF0dXNJY29uJztcclxuICAgIHN0YXR1c0ljb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZGF0YS5jb2xvcjtcclxuICAgIHRvYXN0SGVhZGVyLmFwcGVuZENoaWxkKHN0YXR1c0ljb24pO1xyXG5cclxuICAgIGNvbnN0IGxibEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0cm9uZycpO1xyXG4gICAgbGJsSGVhZGVyLmNsYXNzTmFtZSA9ICdtci1hdXRvJztcclxuICAgIGxibEhlYWRlci5pbm5lckhUTUwgPSBkYXRhLnRpdGxlO1xyXG4gICAgdG9hc3RIZWFkZXIuYXBwZW5kQ2hpbGQobGJsSGVhZGVyKTtcclxuXHJcbiAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc21hbGwnKTtcclxuICAgIHRvYXN0SGVhZGVyLmFwcGVuZENoaWxkKHRpbWUpO1xyXG5cclxuICAgIGNvbnN0IGJ0bkNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICB0b2FzdEhlYWRlci5hcHBlbmRDaGlsZChidG5DbG9zZSk7XHJcbiAgICBidG5DbG9zZS50eXBlID0gJ2J1dHRvbic7XHJcbiAgICBidG5DbG9zZS5jbGFzc05hbWUgPSAnbWwtMiBtYi0xIGNsb3NlJztcclxuICAgIGJ0bkNsb3NlLnNldEF0dHJpYnV0ZSgnZGF0YS1kaXNtaXNzJywgJ3RvYXN0Jyk7XHJcbiAgICB0b2FzdEhlYWRlci5hcHBlbmRDaGlsZChidG5DbG9zZSk7XHJcblxyXG4gICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIHNwYW4uaW5uZXJIVE1MID0gJyZ0aW1lczsnO1xyXG4gICAgYnRuQ2xvc2UuYXBwZW5kQ2hpbGQoc3Bhbik7XHJcblxyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYm9keS5jbGFzc05hbWUgPSAndG9hc3QtYm9keSc7XHJcbiAgICBib2R5LmlubmVySFRNTCA9IGRhdGEubWVzc2FnZTtcclxuICAgIHRvYXN0LmFwcGVuZENoaWxkKGJvZHkpO1xyXG5cclxuICAgIHJldHVybiB0b2FzdDtcclxufVxyXG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChiLCBwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgaWYgKHR5cGVvZiBiICE9PSBcImZ1bmN0aW9uXCIgJiYgYiAhPT0gbnVsbClcclxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2xhc3MgZXh0ZW5kcyB2YWx1ZSBcIiArIFN0cmluZyhiKSArIFwiIGlzIG5vdCBhIGNvbnN0cnVjdG9yIG9yIG51bGxcIik7XHJcbiAgICBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG4gICAgZnVuY3Rpb24gX18oKSB7IHRoaXMuY29uc3RydWN0b3IgPSBkOyB9XHJcbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgX19hc3NpZ24gPSBmdW5jdGlvbigpIHtcclxuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XHJcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jlc3QocywgZSkge1xyXG4gICAgdmFyIHQgPSB7fTtcclxuICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSAmJiBlLmluZGV4T2YocCkgPCAwKVxyXG4gICAgICAgIHRbcF0gPSBzW3BdO1xyXG4gICAgaWYgKHMgIT0gbnVsbCAmJiB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBwID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzKTsgaSA8IHAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxyXG4gICAgICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICAgICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xyXG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xyXG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcclxuICAgIG9bazJdID0gbVtrXTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIG8pIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobywgcCkpIF9fY3JlYXRlQmluZGluZyhvLCBtLCBwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBzID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciwgbSA9IHMgJiYgb1tzXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIGlmIChvICYmIHR5cGVvZiBvLmxlbmd0aCA9PT0gXCJudW1iZXJcIikgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihzID8gXCJPYmplY3QgaXMgbm90IGl0ZXJhYmxlLlwiIDogXCJTeW1ib2wuaXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuLyoqIEBkZXByZWNhdGVkICovXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5cygpIHtcclxuICAgIGZvciAodmFyIHMgPSAwLCBpID0gMCwgaWwgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWw7IGkrKykgcyArPSBhcmd1bWVudHNbaV0ubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgciA9IEFycmF5KHMpLCBrID0gMCwgaSA9IDA7IGkgPCBpbDsgaSsrKVxyXG4gICAgICAgIGZvciAodmFyIGEgPSBhcmd1bWVudHNbaV0sIGogPSAwLCBqbCA9IGEubGVuZ3RoOyBqIDwgamw7IGorKywgaysrKVxyXG4gICAgICAgICAgICByW2tdID0gYVtqXTtcclxuICAgIHJldHVybiByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheSh0bywgZnJvbSkge1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGlsID0gZnJvbS5sZW5ndGgsIGogPSB0by5sZW5ndGg7IGkgPCBpbDsgaSsrLCBqKyspXHJcbiAgICAgICAgdG9bal0gPSBmcm9tW2ldO1xyXG4gICAgcmV0dXJuIHRvO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG52YXIgX19zZXRNb2R1bGVEZWZhdWx0ID0gT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgXCJkZWZhdWx0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHYgfSk7XHJcbn0pIDogZnVuY3Rpb24obywgdikge1xyXG4gICAgb1tcImRlZmF1bHRcIl0gPSB2O1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgaW4gbW9kKSBpZiAoayAhPT0gXCJkZWZhdWx0XCIgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIF9fY3JlYXRlQmluZGluZyhyZXN1bHQsIG1vZCwgayk7XHJcbiAgICBfX3NldE1vZHVsZURlZmF1bHQocmVzdWx0LCBtb2QpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHJlY2VpdmVyLCBwcml2YXRlTWFwKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gZ2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHByaXZhdGVNYXAuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHByaXZhdGVNYXAsIHZhbHVlKSB7XHJcbiAgICBpZiAoIXByaXZhdGVNYXAuaGFzKHJlY2VpdmVyKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJhdHRlbXB0ZWQgdG8gc2V0IHByaXZhdGUgZmllbGQgb24gbm9uLWluc3RhbmNlXCIpO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZU1hcC5zZXQocmVjZWl2ZXIsIHZhbHVlKTtcclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IERhdGFiYXNlQVBJIH0gZnJvbSAnLi91dGlscy9kYXRhYmFzZUFQSSc7XHJcbmltcG9ydCB7IE1hbmFnZXIgfSBmcm9tICcuL21hbmFnZXIvY29udHJvbGxlcic7XHJcblxyXG5jb25zdCBkYlVSTCA9ICdodHRwOi8vbG9jYWxob3N0OjMwMDAnO1xyXG5EYXRhYmFzZUFQSS5zZXRSb290VVJMKGRiVVJMKTtcclxuXHJcbmNvbnN0IG1hbmFnZXI6IE1hbmFnZXIgPSBuZXcgTWFuYWdlcigpO1xyXG5tYW5hZ2VyLmRyYXcoZG9jdW1lbnQuYm9keSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=