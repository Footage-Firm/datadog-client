#Datadog Client

Interact with the datadog API.

### Quick Start
```
$ npm i
$ export API_KEY='';    // Datadog api key
$ export APP_KEY='';    // Datadog app key
$ ts-node sandbox.ts    // Just prints metrics for now.
$ npm test              // Run tests
```


### Webstorm
To debug Typescript files in webstorm, the easiest thing to do is to make a jest test and run the unit test. Otherwise, you'll have to make a run configuration for a compiled file (in the "dist/" folder) with a source map.