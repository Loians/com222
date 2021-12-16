export const uvas = ['boa', 'ruim', 'azeda', 'blend'] as const;
export const tipos = [
  'branco',
  'tinto',
  'rose',
  'espumante',
  'fortificado',
] as const;

export class Vinho {
  constructor(
    public nome: string,
    public pais: string,
    public tipo: typeof tipos[number],
    public uva: typeof uvas[number],
    public harm: string
  ) {}
}
