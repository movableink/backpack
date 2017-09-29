# Backpack

Backpack is for building custom apps and projects for use with Movable Ink

## Installation

In your `package.json` include the following in your dependecies:

```bash

"dependencies": {
   "backpack": "git+ssh://git@github.com/movableink/backpack.git"
 }


```

Then use it by importing it:

```javascript
import Backpack from "backpack";
```

And from your project:

```javascript
class Project extends Backpack{

  constructor(){
    super();
  }

};
```

## API

### Trigger the fallback image

`.forceFallback()` is useful for triggering the static fallback image associated with the block.

Example:

```javascript
Project.forceFallback()
```

### Trigger an event

`.trigger()` creates a synthetic event that bubbles up to the `document`.

Example:

```javascript
Project.trigger('error', 'some helpful error comment');
```


### Listen for an event

`.on()` attaches an event handler. Note: Any information associated with the event will be in the `detail` property of the response.

Example:

```javascript
Project.on('error', function(msg){
	// msg.detail -- 'some helpful error comment'
});
```

### Set data to extraData object

`.setState()` attaches an additional key to this object with the key and value passed.

Example:

```javascript
Project.setState('companyID', 1);
```

### Get data in the extraData object

`getState()` will return all the data that is currently set in `this.extraData`;

Example:

```javascript
const extraData = this.getState();
```
