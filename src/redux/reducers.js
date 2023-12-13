export default function (state, action) {
  switch (action.type) {
    case "INPUT_TEXT":
      return { ...state, searchedText: action.payload.searchedText };

    case "CLEAN_LIST":
      return { ...state, nameList: [] };

    case "SET_USERNAME":
      return { ...state, userName: action.payload.userName };
    default:
      return state;
  }
}
