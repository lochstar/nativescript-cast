const ngPackage = require('ng-packagr');
const path = require('path');
const fs = require('fs-extra');

const rootDir = path.resolve(path.join(__dirname, '..', '..'));
// const nxConfigPath = path.resolve(path.join(rootDir, 'nx.json'));
// const nxConfig = JSON.parse(fs.readFileSync(nxConfigPath));
// const npmScope = nxConfig.npmScope;

const cmdArgs = process.argv.slice(2);
const packageName = cmdArgs[0];
const publish = cmdArgs[1] === 'publish';

console.log(`Building ${packageName}...${publish ? 'and publishing.' : ''}`);

// build angular package
function buildAngular() {
	ngPackage
		.ngPackagr()
		.forProject(path.join('packages', packageName, 'angular', 'package.json'))
		.withTsConfig(path.join('packages', packageName, 'angular', 'tsconfig.angular.json'))
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
