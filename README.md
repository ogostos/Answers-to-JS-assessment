[![Build Status](https://travis-ci.org/rmurphey/js-assessment.svg?branch=master)](https://travis-ci.org/rmurphey/js-assessment)

# A test-driven JS assessment

This repo includes a set of tests that can be used to assess the skills of
a candidate for a JavaScript position, or to evaluate and improve one's own
skills.

## I want to work on the tests; what do I do?
To use the tests, you will need to install [Node](https://nodejs.org/). Note
that on Windows, there are some reports that you will need to restart
after installing Node - see #12.

You can clone or download this repo. Once you have done so, from the root
directory of the repo, run:

    npm install
    npm start

You can then view the tests in your browser at
[http://localhost:4444](http://localhost:4444).

When you visit that page, all of the tests should be failing; your job is to
get the tests to pass. To do this, you'll need to refer to the tests in the
files in the `tests/app` directory, and edit the files in the `app/` directory.
Once you update a test, you can reload the test page in the browser to see
whether it worked.

You can also run (most of) the tests on the command line:

    npm test

The command line runner is a work in progress; contributions welcome :)

### Available dependencies

The repo includes jQuery, Backbone, and Underscore. You can use these
libraries when writing your solutions!

# License

Copyright &copy; 2012-2016 Rebecca Murphey with many thanks to several
[contributors](https://github.com/rmurphey/js-assessment/graphs/contributors).

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a>

This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
