import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

function hyphenToCamelCase(str) {
  return str.replace(/-([a-z])/g, function(match, letter) {
    return letter.toUpperCase();
  });
}

function hyphenToTitleCase(str) {
  return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

function convertHyphenatedAttributesToCamelCase(input) {
    return input.replace(/(\S+)-(\S+)=("[^"]+")/g, function (match, firstPart, secondPart, content) {
        return firstPart + secondPart.charAt(0).toUpperCase() + secondPart.slice(1) + "=" + content;
    });
}

const map = {
	logo: {
		name: 'Logo',
		input: 'src/atoms/04_Logo/assets/svgs',
		output: 'src/atoms/04_Logo/assets/components'
	},
	systemIcons: {
		name: 'SystemIcon',
		input: 'src/atoms/05_SystemIcon/assets/svgs',
		output: 'src/atoms/05_SystemIcon/assets/components'
	},
	// brandedIcons: undefined,
};

Object.values(map).filter(e => e).forEach(({ input, output, name }, index, arr) => {
	fs.readdir(input, (err, files) => {
	    if (err) {
	        console.error('Error reading directory:', err);
	        return;
	    }
	    const nextIndex = [];
	    const nextEnum = [];

	    files.forEach((file) => {
	        if (path.extname(file) === '.svg') {
	            const svgContent = fs.readFileSync(path.join(input, file), 'utf8');


							const widthRegex = /width="[^"]+"/g;
							const heightRegex = /height="[^"]+"/g;
							const fillRegex = /fill="[^"]+"/g;
							const strokeRegex = /stroke="[^"]+"/g;
							const propsRegex =  /([a-z])-([a-z])="[^"]+"/g

							const _newSvgContent = svgContent.replace(widthRegex, "width={width}").replace(heightRegex, "height={height}").replace(fillRegex, "fill={color}").replace(strokeRegex, "stroke={color}");
							const newSvgContent = convertHyphenatedAttributesToCamelCase(_newSvgContent)

	            const componentName = hyphenToTitleCase(path.basename(file, '.svg'));
	            const iconName = path.basename(file, '.svg')
	            const componentContent = `
	            /* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0, no-shadow-restricted-names:0, max-len:0 */
	            // PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
							import React from 'react';

							interface ${componentName}Props {
							    color?: string;
							    width?: number | string;
							    height?: number | string;
							}

							type TComponent = React.FC<${componentName}Props & React.SVGProps<SVGSVGElement>>

							const ${componentName}: TComponent = function ({ color = 'black', width = 24, height = 24, ...props }: ${componentName}Props) {
								return (
							    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} {...props}>
							        <g fill={color}>
							            ${newSvgContent}
							        </g>
							    </svg>
								)
							};

							export default ${componentName};
	`;
							nextIndex.push(`export { default as ${componentName} } from './${componentName}'`)
							nextEnum.push(`"${iconName}" = "${componentName}",`)
	            fs.writeFileSync(path.join(output, `${componentName}.tsx`), componentContent);
	            console.log(`Converted ${file} to ${componentName}.tsx`);
	        }
	    });

	    // update index.ts
	    const updatedIndexContent = `
	    	/* eslint no-tabs:0, no-unused-vars:0, no-shadow:0, @typescript-eslint/no-explicit-any:0 */
	    	// PLEASE DON'T EDIT THIS FILE MANUALLY, AS IT IS AUTOMATICALLY CREATED BY A SCRIPT.
	    	${nextIndex.join('\n')}
	    	export enum E${name} {
	    		${nextEnum.join('\n')}
	    	}
	    	export const libName = "logoImages"
	    `
	    fs.writeFileSync(path.join(output, `index.ts`), updatedIndexContent);   
			if(index === arr.length - 1) {
				console.log('Linting!');
				execSync('npm run ci:format:icons');
				console.log('SVG to React conversion completed!');
			}
	})
})