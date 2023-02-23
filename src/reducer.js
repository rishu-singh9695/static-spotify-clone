export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  // token:'BQANlJDWJQ8T9mREt8yrgC1ViAYCDSgPsES4Tiu6JOGx5SngJ6QD0WqeOUzXuXPtH8-DBFhJnOZqBL0408o0UGGXth1ggje2fIeD2xW7wZxhlMtHt4Shm7HL2AWzeNJkQr23-z4k_4puTlJw8z2Xwch6DN_J42BQuiPr7eEUNmcNYBUVMkZ-SSPP3EbW6TJk71__MK84eN3ZWp-H'
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };


    case "SET_DISCOVER_WEEKLY":
        return {
            ...state,
            discover_weekly:action.discover_weekly,
            
        }

    default:
      return state;
  }
};

export default reducer;
