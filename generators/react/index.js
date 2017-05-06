var Generator = require('yeoman-generator');

module.exports =  class extends Generator{
	constructor(args, opts){

		super(args, opts);
		this.log('constructor...');

	}

	initializing(){
		this.log('initializing...')	
	}

	prompting(){
		return this.prompt([{
		  type    : 'input',
		  name    : 'components',
		  message : 'Array of your components',
		  default : 'DEMO'
		}]).then((answers) => {

			let components = answers.components.replace(/\s*/g, '');
			this.config.set('components', components.split(','))
		})
	}

	writing(){
		this.fs.copy(
			this.templatePath('index.html'),
			this.destinationPath('index.html')
		);

		this.fs.copy(
			this.templatePath('.babelrc'),
			this.destinationPath('.babelrc')
		);

		this.fs.copy(
			this.templatePath('package.json'),
			this.destinationPath('package.json')
		);

		this.fs.copy(
			this.templatePath('webpack.config.js'),
			this.destinationPath('webpack.config.js')
		);

		this.fs.copy(
			this.templatePath('src/*'),
			this.destinationPath('./src/')
		);

		this._createComponentFiles()

	}

	install(){
		// this.spawnCommand('npm', ['install'])
		// this.spawnCommand('lnpm install', [''])
	}

	_deleteDir(){
		this.fs.delete();
	}

	_createComponentFiles(){
		console.log(this.config.get('components'))

		let components = this.config.get('components');


		for (let i = 0; i < components.length; i++) {
			console.log(components[i])
			this.fs.copyTpl(
				this.templatePath('src/demo_components/index.js'),
				this.destinationPath('./src/components/' + components[i] + '/index.js'),
				{componentName: components[i]}
			);

			this.fs.copy(
				this.templatePath('src/demo_components/style.css'),
				this.destinationPath('./src/components/' + components[i] + '/style.css')
			);
		}

	}
}