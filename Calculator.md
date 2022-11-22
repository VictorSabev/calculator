# Calculator Task

## Prerequisites
Understanding of the standard web technologies
[html](https://developer.mozilla.org/en-US/docs/Web/HTML)
[css](https://developer.mozilla.org/en-US/docs/Web/CSS)
[js](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## GIT strategy
1. Create a new public repository called 'calculator'
2. Create a new branch from 'main' called 'develop'
3. Future branches will branch from 'develop'
4. grant access to the repository to user 'Vihrogon'
5. When ready for with a task, create a new Pull Request and add 'Vihrogon' as reviewer
6. Only 'Vihrogon' can approve and merge pull requests

## Requirements
As a Business I want to be able to distribute a calculator application to my user's browser that is written in the standard web technologies html, css and javascript as a single .html file.

In order to future proof this application it is explicitly forbidden to use any third party code!

The calculator will follow the design of the built-in windows 10 calculator (called WC from now on), but with a reduced set of functionalities.

![[Pasted image 20221122104207.png]]

## Definion of Done

The components I want to have are:
- numeric symbols and standard aritmetics ('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '+', '-', '\*', '/', '=')
- controll keys: ('+/-', 'back', 'clear entry', 'clear all'
- hamburger menu, calculations display and history section

All mouse hover effects and all key bindings are to be implemented the same as WC
The hamburger menu is to contain only the first item and all interactions are to be the same as in the WC.
The history section is to follow the WC functionality exactly.

Use the mobile first approach and observe the styling of the WC on larger window sizes.

## FAQ

For reference of the functionality of 'clear entry' and 'clear all' refer to [this](https://www.calculator.org/CalcHelp/basics.html)
For any other questions refer to 'Vihrogon'
