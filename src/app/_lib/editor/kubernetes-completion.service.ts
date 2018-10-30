import { Injectable } from '@angular/core';
import { CompletionItemProvider } from 'ngx-monaco';
import { Property } from './Property';
import { CompletionUtils } from './CompletionUtils';


const properties: Property[] = [
    {
        name: 'kind',
        description: 'Specifies the object type.',
        values: [{

            name: 'Deployment',
            description: 'Deployment'

        }, {

            name: 'Service',
            description: 'Service'

        }]

    }, {

        name: 'containers',
        description: 'One or more containers for this pod to run (minimum of 1).',
        values: []

    }, {

        name: 'image',
        description: 'Docker image name or url',
        values: []

    }, {

        name: 'name',
        description: 'Name based identifier',
        values: []

    }, {

        name: 'replicas',
        description: 'The number of pods to run (defaults to 10)',
        values: []

    }, {

        name: 'selector',
        description: 'The number of pods to run (defaults to 10)',
        values: [{

            name: '\n   matchLabels:\n      app: '

        }]

    }

];

const keywords = CompletionUtils.getKeywords(properties);

@Injectable()
export class KubernetesCompletionService implements CompletionItemProvider {


    public get language() {

        return 'yaml';

    }

    public provideCompletionItems(model: monaco.editor.IReadOnlyModel, position: monaco.Position): any {

        // const filename = model.uri.path.split('/').pop();
        //
        // if (filename !== 'ml.yaml') {
        //     return [];
        // }

        const textUntilPosition = model.getValueInRange({

            startLineNumber: position.lineNumber,
            startColumn: 1,
            endLineNumber: position.lineNumber,
            endColumn: position.column

        });

        const [keyword, value] = textUntilPosition.split(':').map(x => x.trim());
        const suggestions = keywords.get(keyword);

        if (suggestions) {

            // noinspection TypeScriptUnresolvedVariable
            return suggestions.values.map(x => ({

                label: x.name,
                kind: monaco.languages.CompletionItemKind.Enum,
                insertText: ` ${x.name}`,
                documentation: x.description,
                range: {
                    startLineNumber: position.lineNumber,
                    startColumn: keyword.length + 2,
                    endLineNumber: position.lineNumber,
                    endColumn: position.column
                }

            }));

        }

        // noinspection TypeScriptUnresolvedVariable
        return Array.from(keywords.values()).map((property: any) => ({

            label: property.name,
            kind: monaco.languages.CompletionItemKind.Property,
            documentation: property.description,
            insertText: `${property.name}: `

        }));

    }

}
