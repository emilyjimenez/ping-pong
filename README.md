# Ping Pong Game

### _Watch numbers change into an array with special conditions!_

###### Made by Emily Wells Jimenez - 9/24/17

### Description

This app is intended to show how to take a single input, convert to an array, and replace data in the array depending on the conditions. Here are the rules for changing numbers:

1. Numbers divisible by 3 are replaced with "ping"
2. Numbers divisible by 5 are replaced with "pong"
3. Numbers divisible by 15 are replaced with "ping-pong"

### Setup

Go to [https://github.com/emilyjimenez/ping-pong](https://github.com/emilyjimenez/ping-pong) and clone the project using your preferred shell, then open the content into a text editor of your choice to check out the code. After cloning, you can also open the index.html file in your browser to test functionality.

### Specs

| Behavior       | Input        | Output |
| ------------- |:-------------:| -----:|
| will take user input and convert to array starting at 1| 4| 1,2,3,4 |
| will replace number in array with ping-pong if divisible by 3 & 5|..14,15,16...|..14, ping-pong, 15|
|will replace number in array with pong if divisible by 5|..4,5,6..|..4, pong, ping,..|
|will replace number in array with ping if divisible by 3|..3,4,5,6|..ping, 4, pong, ping..|

### Technology Used

Javascript and jQuery

### Legal

Copyright (c) 2017 Emily Wells Jimenez

This software is licensed under the MIT license.
