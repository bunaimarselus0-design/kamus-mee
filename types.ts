export enum Category {
  ALL = 'Semua',
  NUMBERS = 'Angka',
  ANIMALS = 'Hewan',
  FRUITS_VEG = 'Buah & Sayuran',
  OBJECTS = 'Benda',
  NATURE = 'Alam & Waktu',
  PEOPLE = 'Orang, Keluarga & Tubuh',
  COLORS = 'Warna',
  BASICS = 'Kata Dasar'
}

export interface WordEntry {
  id: string;
  indo: string;
  mee: string;
  category: Category;
}