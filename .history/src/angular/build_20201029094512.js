const ngPackage = require('ng-packagr');
const path = require('path');
const fs = require('fs-extra');

const rootDir = path.resolve(path.join(__dirname, '..', '..'));
// const nxConfigPath = path.resolve(path.join(rootDir, 'nx.json'));
// const nxConfig = JSON.parse(fs.readFileSync(nxConfigPath));
// const npmScope = nxConfig.npmScope;

const packageName = 'nativescript-cast';

console.log(path.join('package.json'));

// build angular package
function buildAngular() {
	ngPackage
		.ngPackagr()
		.forProject(path.join('package.json'))
		.withTsConfig(path.join('tsconfig.angular.json'))
		.build()
		.then(() => {
      // copyAngularDist();
      console.log('time to copy')
		})
		.catch((error) => {
			console.error(error);
			process.exit(1);
		});
}

buildAngular();
