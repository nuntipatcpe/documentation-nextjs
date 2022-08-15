# style.scss
- main 

```
//base
@use'./base'

//components
@use'./components'

//layout
@use'./layout'

//pages
@use'./pages'

//utils
@use'./utils'

//vendors
@use'./vendors'

```

- usage
  - index app
```
import './style/scss/style.scss'
```

# Folder

- **base** seting base style
    - _reset.scss

- **components** only this components style
    - _card.scss
    - _button.scss

- **layout** only this layout style
    - _navBar.scss

- **pages** only this pages style
    - _home.scss

- **utils** set variable or function
    - _colors.scss
    - _font.scss
    - _mixin.scss