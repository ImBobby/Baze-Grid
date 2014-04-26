Baze-Grid
=========

Baze Grid is a flexible, percentage base grid system. Adapted from [Bootstrap](http://getbootstrap.com/) methodology. 

- 12 column count (default).
- 25px gutter size (default).
- Configurable SCSS file
- 3 Breakpoints:
    - Small, 0 - 639px.
    - Medium, 639px - 1023px.
    - Large, 1024px - beyond.
- Support offset
- [BEM](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)-ish markup


##Install

[Bower](http://bower.io/): `bower install baze-grid` or from the [project page](https://github.com/ImBobby/Baze-Grid)


##How to use

###Basic Markup

```HTML
<div class="grid">
    <div class="grid__col {modifier}">Size 6</div>
    <div class="grid__col {modifier}">Size 6</div>
</div>
```

###Available modifier

Grid size
- small `grid__col--s[1-12]`
- medium `grid__col--m[1-12]`
- large `grid__col--l[1-12]`

Grid offset
- small `grid__col--off-s[1-12]`
- medium `grid__col--off-m[1-12]`
- large `grid__col--off-l[1-12]`

##Example

Equal size column from small to large breakpoint

```HTML
<div class="grid">
    <div class="grid__col grid__col--s6">...</div>
    <div class="grid__col grid__col--s6">...</div>
</div>
```

Stacked column on small and equal size column on medium
```HTML
<div class="grid">
    <div class="grid__col grid__col--s12 grid__col--m6">...</div>
    <div class="grid__col grid__col--s12 grid__col--m6">...</div>
</div>
```

Stacked column on small, equal size column on medium, and 1:2 size column on large
```HTML
<div class="grid">
    <div class="grid__col grid__col--s12 grid__col--m6 grid__col--l4">...</div>
    <div class="grid__col grid__col--s12 grid__col--m6 grid__col--l8">...</div>
</div>
```

[Check example.html](for more examples)

##Browser support

Baze Grid should work well on IE8+ and all major mordern browsers.