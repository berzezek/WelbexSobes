type TypeTableData = {
  id: number,
  title: string,
  quantity: number,
  distance: number
};

type TypeArrayTableData = Array<TypeTableData>;

type TypeSearchArgs = {
column: string,
condition: string,
value: string
};

type TypeConditions = {
text: string,
value: string
}

type TypeArrayConditions = Array<TypeConditions>;

export type {
  TypeTableData,
  TypeArrayTableData,
  TypeSearchArgs,
  TypeConditions,
  TypeArrayConditions
}
