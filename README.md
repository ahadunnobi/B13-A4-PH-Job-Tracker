# Answers to Questions

# 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

### `Ans`By using getElementByID We can get A unique And specific element of HTML . And by using getElementByClassName We can find A specific class name of HTML On the other handThe universal selector By using queryselector We can find the first element of matched Css selector Like ID tag or element And by using querySelectorAll we can find all element Matching the CSS selector

# 2. How do you create and insert a new element into the DOM?

### `Ans` To create a new element Into the DOM we have to use Document.createElement() in a Variable And then add value text or stle and then we have to add this variable to a parent element Using Parent.appened().
```
<div class="parent">

</div>

const myNewp = document.createElement('p');
myNewp.textContent = "I'm a brand new p!";
parent.append(myNewp)
```

# 3. What is Event Bubbling? And how does it work?

### `Ans` Event bubbling is Way how browserHandel user interaction.It's a three-step process First trigger we click a specific child element And then a click listener on that child element from run first And the event moves to immediate parentThen the grandparent And so on So on.

# 4. What is Event Delegation in JavaScript? Why is it useful?

### `Ans` Event delegation is a design pattern that leverage Event bubbling to handle event efficiently Without Adding Listener to every single child We add even listener to parent Than a user clicked a specific child The click Travel up to the parent Inside the parent functionWe can see exactly who is element Started the event By using event.target.

# 5. What is the difference between preventDefault() and stopPropagation() methods?

### `Ans` Both method are used to interrupt The flow of an event While preventDefault() Used to Stop browser default action On the other hand StopPropagationI used To Stop The event from traveling Up to the dom tree
---
# Submition Link: 

1. GitHub Repository Link: https://github.com/ahadunnobi/B13-A4-PH-Job-Tracker.git
2. Live Site Link: https://ahadunnobi.github.io/B13-A4-PH-Job-Tracker/
