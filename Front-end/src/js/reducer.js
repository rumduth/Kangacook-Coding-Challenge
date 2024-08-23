export const initialState = {
  name: "",
  email: "",
  phoneNumber: "",
  isReady: false,
  quizStarted: false,
  quizCompleted: false,
};

export function reducer(state, action) {
  switch (action.type) {
    case "name":
      return { ...state, name: action.payload };
    case "phone":
      return { ...state, phoneNumber: action.payload };
    case "email":
      return { ...state, email: action.payload };
    case "isReady":
      return { ...state, isReady: true };
    case "startQuiz":
      return { ...state, quizStarted: true };
    case "quizCompleted":
      return { ...state, quizCompleted: true, quizStarted: false };
    default:
      return state;
  }
}
