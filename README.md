# Progressive timeout

Simple implementation of progressive timeout in JavaScript. 

[![Build Status](https://travis-ci.org/froziq/progressive-timeout.svg?branch=master)](https://travis-ci.org/froziq/progressive-timeout)

## Install

via NPM
```bash
npm install progressive-timeout --save
```

## Usage

Define new instance of ProgressiveTimeout with providing calback function as first parametr and options object as second parametr. Options object should contain MIN, MAX and STEP properties.
When the next tick reaches the MAX value, it becomes MAX.


```javascript
import ProgressiveTimeout from 'progressive-timeout';

...
  const OPTIONS = {
    min: 500,
    max: 20000,
    step: 2000,
  };

  progressiveTimeout = new ProgressiveTimeout(callback, OPTIONS);
  progressiveTimeout.start();
  progressiveTimeout.stop();
...
```

## License

This project is licensed under the MIT license, Copyright (c) 2018 Yuriy. For more information see `LICENSE`.
