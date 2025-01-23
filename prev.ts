import { moduleMetadata } from '@storybook/angular';
import { MonacoEditorModule, NGX_MONACO_EDITOR_CONFIG } from 'ngx-monaco-editor-v2';

export const parameters = {
  docs: {
    inlineStories: false,
  },
};

export const decorators = [
  (storyFn) => {
    const story = storyFn();
    return {
      moduleMetadata: {
        imports: [
          MonacoEditorModule.forRoot({
            baseUrl: '/assets/monaco', // Ruta donde están los archivos estáticos
            defaultOptions: { scrollBeyondLastLine: false },
            onMonacoLoad: () => {
              console.log('✅ Monaco Editor configurado globalmente.');
            },
          }),
        ],
        providers: [
          {
            provide: NGX_MONACO_EDITOR_CONFIG,
            useValue: {
              baseUrl: '/assets/monaco',
              defaultOptions: { scrollBeyondLastLine: false },
              onMonacoLoad: () => {
                console.log('✅ NGX_MONACO_EDITOR_CONFIG configurado.');
              },
            },
          },
        ],
      },
      template: `
        <div style="padding: 16px;">
          <ng-container *ngIf="storyTemplate">
            <ng-container *ngTemplateOutlet="storyTemplate"></ng-container>
          </ng-container>
        </div>
      `,
      props: {
        storyTemplate: story.template,
      },
    };
  },
];
