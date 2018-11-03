import { Injectable } from '@angular/core';
import { NgxMonacoEditorConfig } from 'ngx-monaco-editor';

@Injectable({
    providedIn: 'root'
})
export class MonacoService {

    public readonly monacoOptions = {

        quickSuggestions: true,
        lineNumbers: true,
        cursorBlinking: 'phase',
        scrollBeyondLastLine: false,
        autoIndent: true,
        formatOnType: true,
        formatOnPaste: true,
        codeLens: true,

    };


}


export const MONACO_CONFIG: NgxMonacoEditorConfig = {

    defaultOptions: {

        theme: 'vs-dark',
        language: 'yaml',
        cursorBlinking: 'phase',
        minimap: {
            enabled: false
        },
        autoIndent: true

    },

    onMonacoLoad: () => {

        const id = 'input.yaml';

        function createDependencyProposals() {
            // returning a static list of proposals, not even looking at the prefix (filtering is done by the Monaco editor),
            // here you could do a server side lookup
            return [
                {
                    label: '"lodash"',
                    kind: monaco.languages.CompletionItemKind.Property,
                    documentation: 'The Lodash library exported as Node.js modules.',
                    insertText: '"lodash": "*"'
                },
                {
                    label: '"express"',
                    kind: monaco.languages.CompletionItemKind.Function,
                    documentation: 'Fast, unopinionated, minimalist web framework',
                    insertText: '"express": "*"'
                },
                {
                    label: '"mkdirp"',
                    kind: monaco.languages.CompletionItemKind.Function,
                    documentation: 'Recursively mkdir, like <code>mkdir -p</code>',
                    insertText: '"mkdirp": "*"'
                }
            ];
        }

        // Register a completion item provider for the new language
        monaco.languages.registerCompletionItemProvider('yaml', {

            provideCompletionItems: () => {

                return [

                    {

                        label: 'simpleText',
                        kind: monaco.languages.CompletionItemKind.Text

                    }, {

                        label: 'apiVersion',
                        kind: monaco.languages.CompletionItemKind.Keyword,
                        insertText: { value: 'apiVersion: ${1:apps/v1}' }

                    }, {

                        label: 'metadata',
                        kind: monaco.languages.CompletionItemKind.Snippet,
                        insertText: {
                            value: [
                                'metadata:',
                                '\tname: ${1:thename}',
                                '\t$0'
                            ].join('\n')
                        },
                        documentation: 'object metadata'

                    }
                ];
            }
        });

        monaco.languages.registerCompletionItemProvider('yaml', {
            provideCompletionItems: function (model, position) {
                // find out if we are completing a property in the 'dependencies' object.
                var textUntilPosition = model.getValueInRange({
                    startLineNumber: 1,
                    startColumn: 1,
                    endLineNumber: position.lineNumber,
                    endColumn: position.column
                });
                var match = textUntilPosition.match(/"dependencies"\s*:\s*{\s*("[^"]*"\s*:\s*"[^"]*"\s*,\s*)*("[^"]*)?$/);
                if (match) {
                    return createDependencyProposals();
                }
                return [];
            }
        });

        monaco.languages.json.jsonDefaults.setDiagnosticsOptions({

            validate: true,
            schemas: [{
                uri: 'https://raw.githubusercontent.com/garethr/kubernetes-json-schema/master/master/all.json',
                fileMatch: [id],
                schema: {
                    type: 'object',
                    properties: {
                        p1: {
                            enum: ['v1', 'v2']
                        },
                        p2: {
                            $ref: 'https://raw.githubusercontent.com/garethr/kubernetes-json-schema/master/master/_definitions.json#/definitions/io.k8s.api.storage.v1alpha1.VolumeAttachmentList'
                        }
                    }
                }
            }, {
                uri: 'http://myserver/bar-schema.json',
                fileMatch: [id],
                schema: {
                    type: 'object',
                    properties: {
                        q1: {
                            enum: ['x1', 'x2']
                        }
                    }
                }
            }]
        });
    }
};
