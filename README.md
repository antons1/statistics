Statistics
===

This is a statistics package for javascript.

Contents
---
1. How to install
2. How to use
3. Project status
4. Why does this exist?
5. How can I help?

1 How to install
---

This will *soon* be published to npm. As of now, you have to download the files from github.

2 How to use
---

To require in all modules, use

`const stats = require('statistics')`

For a single module, for example central tendencies, use

`const stats = require('statistics').central`

See ~~[docs]()~~ (That do not exist yet) for functions

3 Project Status
---

Current features:

- Calculate central tendencies like mean, mode and median

Planned features:

- Variance
- Standard deviation
- Standard error
- Significance testing (z-test, t-test etc.)

4 Why does this exist?
---

In the team I am working with we need to calculate statistics for data from for instance A/B tests or performance tests from time to time. This package will save us time by giving us the tools needed to do so. The reason it is in javascript is that most of our code base is in javascript, so it will be easier to integrate with other parts of the code.

5 How can I help?
---

Please submit pull requests if you want to implement some functionality or improve or fix existing stuff. I have not decided strictly on how the files should be organised, so just do something you feel fit with the existing structure, and we'll see how it goes. Any new functionality should have corresponding tests.