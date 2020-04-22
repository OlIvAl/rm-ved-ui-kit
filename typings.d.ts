// Костыль для переопределения типа DateType,
// который используется в @material-ui/pickers.
// Иначе будет ошибка "Cannot find module '@date-io/type'"
declare module "@date-io/type" {
  export type DateType = Date;
}
