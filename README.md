# Backpack

Backpack is for building custom apps for use with Movable Ink

## Installation

Backpack is on bower. Install it with:

```bash
npm install -g bower # if bower is not installed yet
bower init
bower install --save mi-backpack
```

Then use it by referencing it from your HTML page:

```html
<script src="bower_components/mi-backpack/lib/backpack.js"></script>
```

And from your JS:

```javascript
var myApp = new Backpack();
```

## API

### Trigger the fallback image

`.forceFallback()` is useful for triggering the static fallback image associated with the block. Note: by default it will remove the `#mi_size_container` element from the DOM.

Example:

```javascript
myApp.forceFallback()
```


### Logging to console

`.logger()` makes it easier to follow `console.logs()` inside the app debug console.

Example:

```javascript
myApp.logger('hello world')
```


### Trigger an event

`.trigger()` creates a synthetic event that bubbles up to the `document`.

Example:

```javascript
myApp.trigger('error', 'some helpful error comment');
```


### Listen for an event

`.on()` attaches an event handler. Note: Any information associated with the event will be in the `detail` property of the response.

Example:

```javascript
myApp.on('error', function(msg){
	// msg.detail -- 'some helpful error comment'
});
```
