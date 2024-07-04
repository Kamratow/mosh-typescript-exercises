# mosh-typescript-exercises
Exercises done when going through Code with Mosh Typescript course.

## Compiling the typescript code
In order to see compiled js code you need to simply run in terminal:
```
tsc
```
After running the command above all the compiled code should be available in `dist/` directory.

## Running compiled code
In order to run compiled code you need to use `node` command followed up by the name of the compiled file from `dist` directory.
Example for `dist/index.js` file:
```
node dist/index.js
```

## Compiling and running code combined
You can easily combine both compiling and running the code to avoid typing things twice.
Simply add `&&` between each of the commands mentioned above.
Example of combined commands for `dist/index.js` file:
```
tsc && node dist/index.js
```
