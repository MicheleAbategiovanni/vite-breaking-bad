import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  charactersList: [],

  /**
   * @property {number}        count
   * @property {number}        pages
   * @property {string | null} next
   * @property {string | null} prev
   */
  paginationInfo: {},
  page: 1,
  loading: true,
  activeFilters: "",
});

export function fetchCharacters() {

  axios.get("https://swapi.dev/api/people/", {
    params: {
      search: store.activeFilters,
    }
  })

    .then((resp) => {
      store.charactersList = resp.data.results;
      store.paginationInfo = resp.data.count;

      store.loading = false;
    })
    .catch((error) => {
      this.ajaxError =
        "A causa di un errore, l'operazione non è andata a buon fine";

      store.loading = false;
    });
}
