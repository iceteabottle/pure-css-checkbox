# fancy checkboxes and radio buttons
 
- **pure™ css**
- no javascript
- only 3kB (unminified)
- material like style
- good accessibility
- compatible with old browser
- build with less
- **new:** iOS like toggle checkbox

## Usage
The typical usage of a checkbox and a radio button:
```
<label><input name="checkbox" type="checkbox"> Choice A</label>
<label><input name="radio" type="radio"> Option A</label>
```
This checkbox and radio button is unstylable.

So change it to:
```
<div class="pure-checkbox">
  <input id="checkbox1" name="checkbox" type="checkbox">
  <label for="checkbox1">Choice A</label>
</div>

<div class="pure-checkbox-toggle">
  <input id="checkbox2" name="checkbox" type="checkbox">
  <label for="checkbox2">Choice A</label>
</div>

<div class="pure-radiobutton">
  <input id="radio1" name="radio" type="radio">
  <label for="radio1">Option A</label>
</div>
```

[Demo](https://iceteabottle.github.io/pure-css-checkbox/demo/demo.html)

## Coming soon
- scss version
- different effects


___
Inspired by a [blog post](http://maddesigns.de/individuelle-checkbox-radio-inputs-1396.html) of Sven Wolfermann [@maddesigns](https://github.com/maddesigns)