import fetch from 'cross-fetch'
/**
 * Adds two numbers.
 * @customfunction
 * @param first First number
 * @param second Second number
 * @returns The sum of the two numbers.
 */
/* global clearInterval, console, setInterval */

export function add2(first: number, second: number): number {
  return first + second;
}

/**
 * Displays the current time once a second.
 * @customfunction
 * @param invocation Custom function handler
 */
export function clock(invocation: CustomFunctions.StreamingInvocation<string>): void {
  const timer = setInterval(() => {
    const time = currentTime();
    invocation.setResult(time);
  }, 1000);

  invocation.onCanceled = () => {
    clearInterval(timer);
  };
}

/**
 * Returns the current time.
 * @returns String with the current time formatted for the current locale.
 */
export function currentTime(): string {
  return new Date().toLocaleTimeString();
}

/**
 * Increments a value once a second.
 * @customfunction
 * @param incrementBy Amount to increment
 * @param invocation Custom function handler
 */
export function increment(incrementBy: number, invocation: CustomFunctions.StreamingInvocation<number>): void {
  let result = 0;
  const timer = setInterval(() => {
    result += incrementBy;
    invocation.setResult(result);
  }, 1000);

  invocation.onCanceled = () => {
    clearInterval(timer);
  };
}

/**
 * Calculate Heat Transfer - using FluidFlow. Try =CalculateHeatTransferUsingFluidFlow(x, y)
 * @customfunction
 * @param x int : value1.
 * @param y int : value2.
 * @return calculate result: number.
 */
export async function CalculateTest1(x:number = 0, y:number = 0) :Promise<number> {
  const url = "https://jsonplaceholder.typicode.com/users/3";
  const response = await fetch(url);

  //Expect that status code is in 200-299 range
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const jsonResponse = await response.json();
  
  let email = jsonResponse.email;
  let factor = email.length;
  return x * y * factor;
}



/**
 * Calculate Heat Transfer - using FluidFlow. Try =CalculateTest2(x, y)
 * @customfunction
 * @param x int : value1.
 * @param y int : value2.
 * @return calculate result: number.
 */
export async function CalculateTest2(x:number = 0, y:number = 0) :Promise<number> {
  const url = "https://jsonplaceholder.typicode.com/users/4";
  const response = await fetch(url);

  //Expect that status code is in 200-299 range
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const jsonResponse = await response.json();
  
  let email = jsonResponse.email;
  let factor = email.length;
  return x * y * factor;
}


/**
 * Calculate Heat Transfer - using FluidFlow. Try =CalculateTest2(x, y)
 * @customfunction
 * @param x int : value1.
 * @param y int : value2.
 * @return calculate result: number.
 */
export async function CalculateTest3(x:number = 0, y:number = 0) :Promise<number> {
  const url = "https://jsonplaceholder.typicode.com/users/1";
  const response = await fetch(url);

  //Expect that status code is in 200-299 range
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const jsonResponse = await response.json();
  
  let email = jsonResponse.email;
  let factor = email.length;
  return x * y * factor;
}


/**
 * Calculate Heat Transfer - using FluidFlow. Try =CalculateTest2(x, y)
 * @customfunction
 * @param x int : value1.
 * @param y int : value2.
 * @return calculate result: number.
 */
export async function CalculateTest4(x:number = 0, y:number = 0) :Promise<number> {
  const url = "https://jsonplaceholder.typicode.com/users/6";
  const response = await fetch(url);

  //Expect that status code is in 200-299 range
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const jsonResponse = await response.json();
  
  let email = jsonResponse.email;
  let factor = email.length;
  return x * y * factor;
}

/**
 * Writes a message to console.log().
 * @customfunction LOG
 * @param message String to write.
 * @returns String to write.
 */
export function logMessage(message: string): string {
  console.log(message);

  return message;
}

/**
 * Cal Heating coil value
 * @customfunction
 * @param {number} x number : value1.
 * @param {number} y number : value2.
 * @param {number} z number : value3.
 * @returns {number[][]} A dynamic array with multiple results.
 */

export function CalHeatingCoil(x:number,y:number,z:number):number[][] {
  const jsonResponse = jsondata; //await response.json();
  console.log(jsonResponse);
  var jsonresult = json2Array(jsonResponse.result, x, y, z);
 
  return [jsonresult];
}


function json2Array(json, x:number, y:number, z:number):number[] {
  var result:number[] =  [];
  var keys = Object.keys(json);
  keys.forEach(function(key) {
    let keyvalue = json[key];
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

  




