import { Injectable } from '@angular/core';

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



