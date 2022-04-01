moddable-types
===============================
[<img src="https://raw.githubusercontent.com/Moddable-OpenSource/moddable/public/documentation/assets/moddable/moddable.png" align="right">](https://github.com/Moddable-OpenSource/moddable)

[WIP] Moddable definitely typed Ecma TC53

[Coution] I have no plans to maintain this project.  
This is temporary project while waiting for the type definition merges that Mr. Chris Midgley and other contributes are currently working on.

Usage
-------------------------------

```bash
cd $MODDABLE/../
git clone https://github.com/MKGaru/moddable-types.git
cd YOUR_MODDABLE_PROJECT
mcconfig -d -p esp32/nodemcu # <-- your build platform
ln -s $MODDABLE/build/tmp/esp32/nodemcu/debug/YOUR_MODDABLE_PROJECT/modules/tsconfig.json tsconfig.json
```

Example
--------------------------------
io/digital/blink example

```bash
cp -r $MODDABLE/examples/io/digital/blink AWESOME_PROJECT
cd AWESOME_PROJECT
mv main.js main.ts
```

edit manifest.json, add "include"

```
"$(MODDABLE)/examples/manifest_typings.json",
"$(MODDABLE)/../moddable-types/manifest.json"
```

```bash
mcconfig -d -p esp32/nodemcu # <-- your build platform
ln -s $MODDABLE/build/tmp/esp32/nodemcu/debug/AWESOME_PROJECT/modules/tsconfig.json tsconfig.json
code . # <-- open VisualStudio Code

mcconfig -d -m -p esp32/nodemcu
# or if you use xs-dev
# xs-dev run --device=esp32/nodemcu
```

[Optional] External modules (like dtex/j5e)
-----------------------------------
install (see https://dtex.github.io/j5e/tutorial-A-GETSTARTED.html)
```bash
pushd $MODDABLE/../
git clone https://github.com/dtex/j5e

# or if you use xs-dev (coming soon?)
# xs-dev get dtex/j5e

cd j5e
export j5e=$PWD
popd
```
edit manifest.json, add "include"

```
"$(j5e)/manifest.json"
```

and generate d.ts
```bash
tsc $j5e/lib/**/*.js --declaration --allowJs --emitDeclarationOnly --outDir $j5e/typings
```
<details>
  <summary>📓 Special notes for the j5e library</summary>
  Many of the classes in the j5e library are asynchronous constructors, so you need a type definition patch.
  
  ```bash
  cd j5e/../
  touch replace.js
  ```
  edit replace.js
  ```javascript
  module.exports = {
    files: 'j5e/typings/**/index.d.ts',
    from: /^export default (.+);$/m,
    to: (match, name) => name == 'asyncClass' ? match : `export default asyncClass
interface AsyncClass<T extends { new (...args: any[]): void }> {
new (...args: ConstructorParameters<T>): Promise<InstanceType<T>>
}
declare const asyncClass: AsyncClass<typeof ${name}>
`
  }
  ```
  
  ```bash
  npx replace-in-file --configFile=replace.js
  rm replace.js
  ```
  --------------------------------------------------
</details>

and, add "typescript/tsconfig"

```json
"typescript": {
  "tsconfig": {
    "compilerOptions": {
      "paths": {
        "j5e/*": [
          "$(j5e)/typings/*/index"
        ]
      }
    }
  }
}
```
like this. (complete manifest.json)

```json
{
  "include": [
    "$(MODDABLE)/modules/io/manifest.json",
    "$(MODDABLE)/examples/manifest_typings.json",
    "$(MODDABLE)/../moddable-types/manifest.json",
    "$(j5e)/manifest.json"
  ],
  "modules": {
    "*": "./main"
  },
  "typescript": {
    "tsconfig": {
      "compilerOptions": {
        "paths": {
          "j5e/*": [
            "$(j5e)/typings/*/index"
          ]
        }
      }
    }
  }
}
```
and execute command for (re)generating tsconfig.json

```bash
mcconfig -d -p esp32/nodemcu
```

example code (for esp32/nodemcu like device)
```typescript
import LED from 'j5e/led'

export default async function () {
  const led = await new LED(device.pin.led)

  System.setInterval(() => {
    if (led.isOn)
      led.off()
    else
      led.on()
  }, 300);
}

```
