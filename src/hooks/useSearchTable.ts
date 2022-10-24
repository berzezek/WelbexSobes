type TypeSearchArgs = {
  [key: string] : string,
}

type TypeTableData = {
  id: number,
  title: string,
  quantity: number,
  distance: number
};

type TypeArrayTableData = Array<TypeTableData>;

export default function useSearchTable() {

  const getSearchedTable = (table: TypeArrayTableData, searchArgs: TypeSearchArgs ): TypeArrayTableData | [] => {
    return table.filter(item => {
      switch (searchArgs.condition) {
        case "eq":
          return item[searchArgs.column as keyof TypeTableData].toString() === searchArgs.value;
        case "contains":
          return item[searchArgs.column as keyof TypeTableData].toString().includes(searchArgs.value);
        case "gt":
          return item[searchArgs.column as keyof TypeTableData] > searchArgs.value;
        case "lt":
          return item[searchArgs.column as keyof TypeTableData] < searchArgs.value;
        default:
          return table;
      }
    })
  };

  return {
    getSearchedTable
  }

}