"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
exports.__esModule = true;
exports.CalHeatingCoil = exports.logMessage = exports.CalculateHeatTransferUsingFluidFlow = exports.increment = exports.currentTime = exports.clock = exports.added = void 0;
var cross_fetch_1 = require("cross-fetch");
/**
 * Adds two numbers.
 * @customfunction
 * @param first First number
 * @param second Second number
 * @returns The sum of the two numbers.
 */
/* global clearInterval, console, setInterval */
function added(first, second) {
    return first + second;
}
exports.added = added;
/**
 * Displays the current time once a second.
 * @customfunction
 * @param invocation Custom function handler
 */
function clock(invocation) {
    var timer = setInterval(function () {
        var time = currentTime();
        invocation.setResult(time);
    }, 1000);
    invocation.onCanceled = function () {
        clearInterval(timer);
    };
}
exports.clock = clock;
/**
 * Returns the current time.
 * @returns String with the current time formatted for the current locale.
 */
function currentTime() {
    return new Date().toLocaleTimeString();
}
exports.currentTime = currentTime;
/**
 * Increments a value once a second.
 * @customfunction
 * @param incrementBy Amount to increment
 * @param invocation Custom function handler
 */
function increment(incrementBy, invocation) {
    var result = 0;
    var timer = setInterval(function () {
        result += incrementBy;
        invocation.setResult(result);
    }, 1000);
    invocation.onCanceled = function () {
        clearInterval(timer);
    };
}
exports.increment = increment;
/**
 * Calculate Heat Transfer - using FluidFlow. Try =CalculateHeatTransferUsingFluidFlow(x, y)
 * @customfunction
 * @param x int : value1.
 * @param y int : value2.
 * @return calculate result: number.
 */
function CalculateHeatTransferUsingFluidFlow(x, y) {
    if (x === void 0) { x = 0; }
    if (y === void 0) { y = 0; }
    return __awaiter(this, void 0, void 0, function () {
        var url, response, jsonResponse, email, factor;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    url = "https://jsonplaceholder.typicode.com/users/3";
                    return [4 /*yield*/, cross_fetch_1["default"](url)];
                case 1:
                    response = _a.sent();
                    //Expect that status code is in 200-299 range
                    if (!response.ok) {
                        throw new Error(response.statusText);
                    }
                    return [4 /*yield*/, response.json()];
                case 2:
                    jsonResponse = _a.sent();
                    email = jsonResponse.email;
                    factor = email.length;
                    return [2 /*return*/, x * y * factor];
            }
        });
    });
}
exports.CalculateHeatTransferUsingFluidFlow = CalculateHeatTransferUsingFluidFlow;
/**
 * Writes a message to console.log().
 * @customfunction LOG
 * @param message String to write.
 * @returns String to write.
 */
function logMessage(message) {
    console.log(message);
    return message;
}
exports.logMessage = logMessage;
/**
 * Cal Heating coil value
 * @customfunction
 * @param {number} x number : value1.
 * @param {number} y number : value2.
 * @param {number} z number : value3.
 * @returns {number[][]} A dynamic array with multiple results.
 */
function CalHeatingCoil(x, y, z) {
    var jsonResponse = jsondata; //await response.json();
    console.log(jsonResponse);
    var jsonresult = json2Array(jsonResponse.result, x, y, z);
    return [jsonresult];
}
exports.CalHeatingCoil = CalHeatingCoil;
function json2Array(json, x, y, z) {
    var result = [];
    var keys = Object.keys(json);
    keys.forEach(function (key) {
        var keyvalue = json[key];
        result.push(keyvalue * x * y * z);
    });
    return result;
}
var jsondata = {
    success: true,
    errorMessage: null,
    result: {
        Capacity: 0.496699349333547,
        APD: 0.0847272805053852,
        LAT: 68.4364813456897,
        LWT: 82.8433027158287,
        FPD: 0.00174404615769091,
        SCFM: 835,
        FluidFlow: 0.0292773421402017,
        FaceVelocity: 0
    }
};
console.log(jsondata.result);
