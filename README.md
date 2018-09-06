# A JS library to convert arabic numerals into roman ones (and vice versa) v.1.0.0

**This library is intended for to convert arabic numerals into roman ones (and vice versa).**

In the current version it returns the roman numeral that corresponds to the arabic number tested (and vice versa), from 1 to 3999.

## The methods used in the library are:

#### **intToRoman(int);**
#### **romanToInt(string);**

Example of usability:

```
$node
> const { intToRoman, romanToInt} = require("andreiabal-numberconverter-lib")
> intToRoman(9); //'IX'

$node
> const { intToRoman, romanToInt} = require("andreiabal-numberconverter-lib")
> romanToInt('VI'); // 6
```

## version 1.0.0

- Functionalities: return the roman numeral that corresponds to the arabic number tested (and vice versa).


## installation

- you must have node + npm installed. For installation guide, visit [official website](https://www.npmjs.com/get-npm).
- proceed with the installation using `$npm install andreiabal-numberconverter-lib`


## official project roadmap


#### version 2.0.0 (November/2018)
- Transcribe README to Spanish.
- Transforming numerals above 3999.

#### version 1.0.0 (released)
- Functionalities: return the roman numeral that corresponds to the arabic number tested (and vice versa).