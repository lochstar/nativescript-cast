import * as ngPackage from 'ng-packagr';

ngPackage
  .ngPackagr()
  .forProject('ng-package.js')
  .withTsConfig('tsconfig.lib.json')
  .build()
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
