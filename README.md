#DHIS2-ALMA-Export

##Development Setup:
```shell
npm install
```

The folder ```dist/``` will contain the installable plugin file.

##Build
```shell
grunt bumpup``` (optional, bumps up version, see https://github.com/Darsain/grunt-bumpup)

```shell
grunt
```

##Adding dependencies to vendor libs
New dependencies have to be added to the ```minVendorFiles``` array in ```Gruntfile.js```.
Please provide the minified version if available and source it in ```index.html```.