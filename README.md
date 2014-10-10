# Baze Grid

> Baze Grid is a responsive, flexible, percentage base grid system offering clean markup by utilizing both class and data attribute.

- 12 column count (default).
- 25px gutter size (default).
- Configurable SCSS file
- 3 Breakpoints:
    - Small, 0 - 639px.
    - Medium, 640px - 1023px.
    - Large, 1024px - beyond.
- Offset
- No gutter grid


## Getting Started

Install via bower
```
bower install baze-grid --save
```

or download the latest [zip file](https://github.com/ImBobby/Baze-Grid/releases)


## Usage

```HTML
<div class="bzg">
  <div class="bzg_c" data-col="s6">
      ...
  </div>
  <div class="bzg_c" data-col="s6">
      ...
  </div>
</div>
```
Check out [project page for complete documentation](http://imbobby.github.io/Baze-Grid/).


## Browser support

Baze Grid has been tested and work awesomely in IE8 (with [respondjs](https://github.com/scottjehl/Respond) polyfill if you need responsive support) and other evergreen browsers.
