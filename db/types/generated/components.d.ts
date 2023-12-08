import type { Schema, Attribute } from '@strapi/strapi';

export interface DadosShowDadosShow extends Schema.Component {
  collectionName: 'components_dados_show_dados_shows';
  info: {
    displayName: 'dadosShow';
    icon: 'stack';
  };
  attributes: {
    Cidade: Attribute.String;
    Setor: Attribute.String;
    Categoria: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'dados-show.dados-show': DadosShowDadosShow;
    }
  }
}
