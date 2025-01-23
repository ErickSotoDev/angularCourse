import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json'; // Ajusta esta ruta si es necesario
import { MonacoEditorModule, NGX_MONACO_EDITOR_CONFIG } from 'ngx-monaco-editor-v2';

export const parameters = {
  docs: {
    inlineStories: false,
  },
};

export const decorators = [
  (story) => ({
    moduleMetadata: {
      imports: [
        MonacoEditorModule.forRoot({
          baseUrl: '/assets/monaco', // Asegúrate de que esta ruta es válida
          defaultOptions: { scrollBeyondLastLine: false },
          onMonacoLoad: () => {
            console.log('✅ Monaco Editor configurado globalmente en preview.ts.');
          },
        }),
      ],
      providers: [
        {
          provide: NGX_MONACO_EDITOR_CONFIG,
          useValue: {
            baseUrl: '/assets/monaco', // Ruta a los archivos de Monaco Editor
            defaultOptions: { scrollBeyondLastLine: false },
            onMonacoLoad: () => {
              console.log('✅ Proveedor global para NGX_MONACO_EDITOR_CONFIG.');
            },
          },
        },
      ],
    },
    template: `
      <div style="padding: 16px;">
        <story />
      </div>
    `,
  }),
];
