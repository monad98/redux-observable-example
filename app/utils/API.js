import axios from "axios";

const API = {
  // getQuotes returns all quotes from out db
  getQuotes: function() {
    return axios.get("/api/quotes");
  },
  // Save quote saves a quote to the db,
  // expects to be passed the new quotes text as an argument
  saveQuote: function(text) {
    return axios.post("/api/quotes", { text });
  },
  // deleteQuote deletes a quote from the db,
  // expects the id of the quote to delete as an argument
  deleteQuote: function(id) {
    return axios.delete(`/api/quotes/${id}`);
  },
  // favorite quote toggle's a quote's 'favorite' status in the db,
  // expects the quote object as an argument
  favoriteQuote: function(quote) {
    quote.favorited = !quote.favorited;
    const { _id, favorited } = quote;
    return axios.patch(`/api/quotes/${_id}`, { favorited });
  }
};

export default API;
