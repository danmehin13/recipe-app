export interface Tag {
  id: number;
  display_name: string;
}

export interface Component {
  id: number;
  ingredient: {
    display_singular: string;
  };
  measurements: [
    {
      quantity: string;
      unit: {
        name: string;
      };
    }
  ];
  extra_comment: string;
}

export interface Section {
  components: Component[];
}

export interface Instruction {
  id: number;
  display_text: string;
}

export interface RecipeData {
  id: number;
  thumbnail_url: string;
  name: string;
  tags: Tag[];
  description: string;
  sections: Section[];
  instructions: Instruction[];
}

export interface ApiData {
  results: RecipeData[];
}
