const ngPackage = require('ng-packagr');
const path = require('path');
const fs = require('fs-extra');

const packageName = '@codelab/nativescript-cast';

// build angular package
function buildAngular() {
	ngPackage
		.ngPackagr()
		.forProject(path.join('angular', 'package.json'))
		.withTsConfig(path.join('angular', 'tsconfig.angular.json'))
		.build()
		.then(() => {
			copyAngularDist();
		})
		.catch((error) => {
			console.error(error);
			process.exit(1);
		});
}

// copy angular ng-packagr output to dist/packages/{name}
function copyAngularDist() {
	fs.copy(path.join('angular'))
		.then(() => {
			console.log(`${packageName} angular built successfully.`);
		})
		.catch((err) => console.error(err));
}

buildAngular();
