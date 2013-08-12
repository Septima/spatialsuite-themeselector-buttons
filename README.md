themeselector-buttons
=====================

#Description:

This module adds a new method, called "addActionButton", on the themeselector javascript object


#Installation

1:    Install the module

1.a:  copy the module to [cbinfo.config.dir]/modules/septima/themeselector-buttons.

1.b:  add this to  [cbinfo.modules]:
```xml
    <module name="themeselector-buttons" dir="septima/themeselector-buttons" permissionlevel="public"/>
```
2:    Use the module - Normaly you don't have to do this, but if it dosn't work, try adding the plugin to the profile

2.a:  Add the plugin to the profile:

```xml
        <tool module="themeselector-buttons" name="themeselector-buttons-plugin"/>
```

OR BETTER add requeried to files to the relevant tools:

```xml
    <requires>
        <file type="script" name="[module.themeselector-buttons.js]" />
        <file type="css"    name="[module.themeselector-buttons.css]" />
    </requires>
```


# Licens

This is published under MIT license

First  version  financed by Hjørring Kommune

The MIT License (MIT)

Copyright (c) 2013 Septima

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

