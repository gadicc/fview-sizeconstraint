# fview-sizeconstraint

This is [IjzerenHein's
SizeContraint](https://github.com/IjzerenHein/famous-sizeconstraint)
packaged for Meteor to work with famous-views and either raix:famono or mjn:famous.

See the upstream [README](https://github.com/IjzerenHein/famous-sizeconstraint) and
[full API reference](https://github.com/IjzerenHein/famous-sizeconstraint/blob/master/docs/SizeConstraint.md).

SizeConstraint makes it possible to set the following constraints on renderables:

|Option|Description|
|--------|-----------|
|```scale```|Scales the size proportionally to the parent-size (factor).|
|```padding```|Inner width/height padding (pixels).|
|```max```|Sets the maximum-size (pixels).|
|```min```|Sets the minimum-size (pixels).|
|```ratio```|Aspect ratio to enforce (factor).|
|```size```|Default size to use instead of the parent size (pixels).|

## Demos

[fview-sizeconstraint.meteor.com](http://fview-sizeconstraint.meteor.com/)
( [source](https://github.com/gadicc/fview-sizeconstraint/tree/master/demo) )

Notes:

1. Be sure to translate your zIndex if using with RenderController (or any
other situation where famo.us recreates the DOM)
1. scaleX,Y,Z is broken in famous-views < 0.1.33
1. There does seem to be a positioning issue which warrants further investigation

## Examples:

**Create a surface with a width 20px less than its parent:**

```handlebars
{{#SizeConstraint padding="[20,undefined]"}}
  {{#Surface style="background: blue"}} Hi there {{/Surface}}
{{/SizeConstraint}}
```

**Create a surface which is 50% its parent size:**

*Note: this is different from Transform.scale, as it does not apply a scale-matrix, but it merely changes the size.*

```handlebars
{{#SizeConstraint scale="[0.5,0.5]"}}
  {{#Surface style="background: blue"}} Hi there {{/Surface}}
{{/SizeConstraint}}
```

**Create a surface with a maximum-width of 400px, and a minimum-height of 100px:**

*Note: this is different from Transform.scale, as it does not apply a scale-matrix, but it merely changes the size.*

```handlebars
{{#SizeConstraint max="[400,undefined]" min="[undefined,100]"}}
  {{#Surface style="background: blue"}} Hi there {{/Surface}}
{{/SizeConstraint}}
```

**Create a surface with an aspect ratio of 4/3::**

*Note: this is different from Transform.scale, as it does not apply a scale-matrix, but it merely changes the size.*

```handlebars
{{#SizeConstraint ratio="[4,3]"}}
  {{#Surface style="background: blue"}} Hi there {{/Surface}}
{{/SizeConstraint}}
```
